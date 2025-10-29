"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { registerVulnerablePerson } from "@/services/vulnerable";

// ------------------ SCHEMA ------------------
const formSchema = z.object({
  name: z.string().min(2, "Nome obrigatório"),
  number: z.string().min(8, "Número inválido"),
  location: z.string().min(2, "Local obrigatório"),
  ageGroup: z.string().min(1, "Faixa etária obrigatória"),
  gender: z.string().min(1, '"Gênero obrigatório"'),

  question1: z.string().min(1, "Resposta obrigatória"),
  question2: z.string().min(1, "Resposta obrigatória"),
  question3: z.string().min(1, "Resposta obrigatória"),
  question4: z.string().min(1, "Resposta obrigatória"),
  question5: z.string().min(1, "Resposta obrigatória"),
  question6: z.string().min(1, "Resposta obrigatória"),
  question7: z.string().min(1, "Resposta obrigatória"),
  question8: z.string().min(1, "Resposta obrigatória"),
  question9: z.string().min(1, "Resposta obrigatória"),
  question10: z.string().min(1, "Resposta obrigatória"),
  question11: z.string().min(1, "Resposta obrigatória"),
  question12: z.string().min(1, "Resposta obrigatória"),
});

type FormValues = z.infer<typeof formSchema>;

// ------------------ TIPOS ------------------
type VulnerabilityCategory =
  | "Trabalho Forçado"
  | "Exploração Sexual"
  | "Servidão Doméstica"
  | "Tráfico de Órgãos"
  | "Tráfico de Crianças"
  | "Fraude/Engano"
  | "Drogas/Coerção";

type VulnerabilityResult = {
  number: string;
  name: string;
  ageGroup: string;
  location: string;
  gender: string;
  vulnerabilityType: VulnerabilityCategory | "Nenhuma";
  vulnerabilityLeve: "Baixo" | "Médio" | "Alto" | "Crítico";
  scoreBreakdown: Record<string, number>; // nomes sem espaços e em inglês
  totalVulnerabilityPct: number;
};

// ------------------ FUNÇÃO DE PROCESSAMENTO ------------------
function processFormData(values: FormValues): VulnerabilityResult {
  const responseValue: Record<string, number> = { Sim: 2, Talvez: 1, Não: 0 };

  const categories: VulnerabilityCategory[] = [
    "Exploração Sexual",
    "Trabalho Forçado",
    "Servidão Doméstica",
    "Tráfico de Órgãos",
    "Tráfico de Crianças",
    "Fraude/Engano",
    "Drogas/Coerção",
  ];

  const weights = {
    question1: { "Fraude/Engano": 1.5, "Trabalho Forçado": 1.0 },
    question2: {
      "Trabalho Forçado": 2.0,
      "Fraude/Engano": 1.0,
      "Exploração Sexual": 1.0,
    },
    question3: { "Fraude/Engano": 2.0, "Exploração Sexual": 1.5 },
    question4: { "Fraude/Engano": 1.5, "Trabalho Forçado": 1.0 },
    question5: { "Trabalho Forçado": 2.0, "Servidão Doméstica": 1.5 },
    question6: { "Fraude/Engano": 2.0, "Tráfico de Crianças": 1.0 },
    question7: { "Fraude/Engano": 1.5, "Exploração Sexual": 1.0 },
    question8: {
      "Trabalho Forçado": 1.5,
      "Servidão Doméstica": 1.5,
      "Exploração Sexual": 1.0,
    },
    question9: { "Fraude/Engano": 1.5 },
    question10: { "Fraude/Engano": 2.0, "Drogas/Coerção": 1.5 },
    question11: { "Tráfico de Órgãos": 2.0, "Drogas/Coerção": 1.0 },
    question12: {
      "Trabalho Forçado": 2.0,
      "Exploração Sexual": 1.5,
      "Fraude/Engano": 1.5,
    },
  } as const;

  const categoryScore = Object.fromEntries(
    categories.map((cat) => [cat, 0])
  ) as Record<VulnerabilityCategory, number>;

  const categoryMax = Object.fromEntries(
    categories.map((cat) => [cat, 0])
  ) as Record<VulnerabilityCategory, number>;

  for (const [q, mapping] of Object.entries(weights)) {
    const resp = values[q as keyof FormValues] as keyof typeof responseValue;
    const val = responseValue[resp] ?? 0;

    for (const [cat, weight] of Object.entries(mapping) as [
      VulnerabilityCategory,
      number
    ][]) {
      categoryScore[cat] += val * weight;
      categoryMax[cat] += 2 * weight;
    }
  }

  // Fatores demográficos
  if (values.ageGroup === "below18") {
    categoryScore["Tráfico de Crianças"] += 5;
    categoryScore["Trabalho Forçado"] += 2;
    categoryMax["Tráfico de Crianças"] += 5;
    categoryMax["Trabalho Forçado"] += 2;
  }

  if (values.gender === "Feminino") {
    categoryScore["Exploração Sexual"] += 3;
    categoryScore["Servidão Doméstica"] += 2;
    categoryMax["Exploração Sexual"] += 3;
    categoryMax["Servidão Doméstica"] += 2;
  }

  const categoryPct: Record<VulnerabilityCategory, number> = {} as any;
  for (const cat of categories) {
    const max = categoryMax[cat] || 1;
    categoryPct[cat] = Math.min(100, (categoryScore[cat] / max) * 100);
  }

  const sortedCats = Object.entries(categoryPct).sort(([, a], [, b]) => b - a);
  const [topCat, topPct] = sortedCats[0];
  const vulnerabilityType =
    topPct < 25 ? "Nenhuma" : (topCat as VulnerabilityCategory);

  const totalScore = Object.values(categoryScore).reduce((a, b) => a + b, 0);
  const totalMax = Object.values(categoryMax).reduce((a, b) => a + b, 0) || 1;
  const totalPct = Math.min(100, (totalScore / totalMax) * 100);

  let vulnerabilityLeve: VulnerabilityResult["vulnerabilityLeve"];
  if (totalPct < 25) vulnerabilityLeve = "Baixo";
  else if (totalPct < 50) vulnerabilityLeve = "Médio";
  else if (totalPct < 75) vulnerabilityLeve = "Alto";
  else vulnerabilityLeve = "Crítico";

  // Converter chaves para inglês e sem espaços
  const scoreBreakdown = Object.fromEntries(
    Object.entries(categoryPct).map(([key, value]) => [
      key.replace(/\s+/g, "_").replace(/[^\w]/g, ""),
      value,
    ])
  );

  return {
    number: values.number,
    name: values.name,
    location: values.location,
    gender: values.gender,
    ageGroup: values.ageGroup,
    vulnerabilityType,
    vulnerabilityLeve,
    scoreBreakdown,
    totalVulnerabilityPct: totalPct,
  };
}

// ------------------ COMPONENTE PRINCIPAL ------------------
export default function SafenetForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const questions = [
    { name: "question1", label: "Está à procura de emprego fora da cidade?" },
    {
      name: "question2",
      label:
        "Aceitaria viajar imediatamente se recebesse uma oferta de trabalho?",
    },
    {
      name: "question3",
      label: "Já recebeu proposta de trabalho via redes sociais?",
    },
    {
      name: "question4",
      label: "Conhece alguém que poderia ajudá-lo(a) a trabalhar fora do país?",
    },
    {
      name: "question5",
      label: "Trabalharia sem contrato formal nos primeiros meses?",
    },
    {
      name: "question6",
      label: "Já lhe pediram documentos pessoais para uma proposta de emprego?",
    },
    {
      name: "question7",
      label: "Aceitaria uma oferta de emprego que parecesse boa demais?",
    },
    {
      name: "question8",
      label: "Deixaria seus familiares por um bom salário?",
    },
    {
      name: "question9",
      label: "Acredita que empregos no exterior são sempre legítimos?",
    },
    {
      name: "question10",
      label: "Confiaria em desconhecidos que prometem oportunidades rápidas?",
    },
    {
      name: "question11",
      label:
        "Você tem dívidas urgentes ou problemas de saúde que te fariam aceitar ajuda de estranhos?",
    },
    {
      name: "question12",
      label:
        "Já foi convidado(a) a participar de atividades remuneradas sem clareza do contrato?",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-2xl mt-28">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Formulário de Candidatura — Programa de Emprego
      </h2>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(async (values) => {
            const result = processFormData(values);
            toast.loading("A submeter formulário....");
            const response = await registerVulnerablePerson({
              data: {
                ageGroup: result.ageGroup,
                childTraffickingScore: result.scoreBreakdown.Trfico_de_Crianas,
                domesticServitudeScore: result.scoreBreakdown.Servido_Domstica,
                drugsCoercionScore: result.scoreBreakdown.DrogasCoero,
                forcedLaborScore: result.scoreBreakdown.Trabalho_Forado,
                fraudDeceptionScore: result.scoreBreakdown.Trabalho_Forado,
                gender: result.gender,
                location: result.location,
                name: result.name,
                number: result.number,
                organTraffickingScore: result.scoreBreakdown.Trfico_de_rgos,
                sexualExploitationScore: result.scoreBreakdown.Explorao_Sexual,
                totalVulnerabilityScore: result.totalVulnerabilityPct,
                vulnerabilityLevel: result.vulnerabilityLeve,
                vulnerabilityType: result.vulnerabilityType,
              },
            });

            if (response?.status === 201) {
              toast.dismiss();
              toast.success(response.data.message);
              form.reset();
            } else {
              toast.dismiss();
              toast.error(response.data.message);
            }
          })}
          className="space-y-6"
        >
          {/* Campos básicos */}
          {["name", "number", "location"].map((field) => (
            <FormField
              key={field}
              control={form.control}
              name={field as keyof FormValues}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {field.name === "name"
                      ? "Nome completo"
                      : field.name === "number"
                      ? "Número de celular"
                      : "Local"}
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder={
                        field.name === "name"
                          ? "Digite seu nome"
                          : field.name === "number"
                          ? "84XXXXXXX"
                          : "Cidade ou Distrito"
                      }
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

          {/* Faixa Etária */}
          <FormField
            control={form.control}
            name="ageGroup"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Faixa Etária</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione sua faixa etária" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="below18">Abaixo dos 18</SelectItem>
                    <SelectItem value="18-25">18 - 25</SelectItem>
                    <SelectItem value="26-35">26 - 35</SelectItem>
                    <SelectItem value="36plus">36 em diante</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Gênero */}
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gênero</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione seu gênero" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Masculino">Masculino</SelectItem>
                    <SelectItem value="Feminino">Feminino</SelectItem>
                    <SelectItem value="Outro">Outro</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Perguntas */}
          {questions.map((q) => (
            <FormField
              key={q.name}
              control={form.control}
              name={q.name as keyof FormValues}
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>{q.label}</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione uma opção" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Sim">Sim</SelectItem>
                      <SelectItem value="Talvez">Talvez</SelectItem>
                      <SelectItem value="Não">Não</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

          <div className="pt-4">
            <Button type="submit" className="w-full">
              Submeter candidatura
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
