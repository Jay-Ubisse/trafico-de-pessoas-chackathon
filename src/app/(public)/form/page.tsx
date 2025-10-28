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

// ------------------ SCHEMA ------------------

const formSchema = z.object({
  name: z.string().min(2, "Nome obrigatório"),
  number: z.string().min(8, "Número inválido"),
  location: z.string().min(2, "Local obrigatório"),
  ageGroup: z.string(),
  question1: z.string(),
  question2: z.string(),
  question3: z.string(),
  question4: z.string(),
  question5: z.string(),
  question6: z.string(),
  question7: z.string(),
  question8: z.string(),
  question9: z.string(),
  question10: z.string(),
});

type FormValues = z.infer<typeof formSchema>;

// ------------------ PROCESSAMENTO ------------------

/*
🧠 Lógica aplicada

- Cada resposta “Sim” adiciona 2 pontos, “Às vezes” adiciona 1 ponto, “Não” adiciona 0.
- O nível final (Baixo, Médio, Alto) é determinado pela soma.
- O tipo de vulnerabilidade (Prostituição, Trabalho Forçado, Drogas) é inferido com base em padrões de resposta:
    - Se a pessoa aceita alojamento e transporte sem contrato → Trabalho Forçado
    - Se aceita propostas informais e deslocações → Prostituição
    - Se aceita coordenar pagamento por terceiros → Drogas (usado como tipo de exploração ilícita / tráfico associado)
*/

type VulnerabilityResult = {
  number: string;
  name: string;
  location: string;
  vulnerabilityType: "Prostituição" | "Trabalho Forçado" | "Drogas";
  vulnerabilityLevel: "Baixo" | "Médio" | "Alto";
};

function processFormData(values: FormValues): VulnerabilityResult {
  const scoreMap: Record<string, number> = {
    Sim: 2,
    "Às vezes": 1,
    Não: 0,
  };

  const riskPatterns = {
    Prostituição: ["question3", "question6", "question9"],
    "Trabalho Forçado": ["question2", "question5", "question8"],
    Drogas: ["question4", "question7", "question10"],
  };

  const typeScores = {
    Prostituição: 0,
    "Trabalho Forçado": 0,
    Drogas: 0,
  };

  for (const [type, keys] of Object.entries(riskPatterns)) {
    for (const key of keys) {
      const response = values[key as keyof FormValues];
      typeScores[type as keyof typeof typeScores] += scoreMap[response] || 0;
    }
  }

  const highestType = Object.entries(typeScores).sort(
    (a, b) => b[1] - a[1]
  )[0][0] as "Prostituição" | "Trabalho Forçado" | "Drogas";

  const totalScore = Object.values(typeScores).reduce((a, b) => a + b, 0);
  let vulnerabilityLevel: VulnerabilityResult["vulnerabilityLevel"];

  if (totalScore <= 4) vulnerabilityLevel = "Baixo";
  else if (totalScore <= 8) vulnerabilityLevel = "Médio";
  else vulnerabilityLevel = "Alto";

  return {
    name: values.name,
    number: values.number,
    location: values.location,
    vulnerabilityType: highestType,
    vulnerabilityLevel,
  };
}

// ------------------ COMPONENTE PRINCIPAL ------------------

export default function SafenetForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      number: "",
      location: "",
      ageGroup: "",
      question1: "",
      question2: "",
      question3: "",
      question4: "",
      question5: "",
      question6: "",
      question7: "",
      question8: "",
      question9: "",
      question10: "",
    },
  });

  const questions = [
    {
      name: "question1",
      label:
        "Está atualmente à procura de oportunidades de emprego fora da sua cidade?",
    },
    {
      name: "question2",
      label:
        "Aceitaria viajar imediatamente se recebesse uma oferta de trabalho?",
    },
    {
      name: "question3",
      label: "Já recebeu alguma proposta de trabalho através de redes sociais?",
    },
    {
      name: "question4",
      label:
        "Conhece alguém que possa ajudá-lo(a) a conseguir emprego fora do país?",
    },
    {
      name: "question5",
      label:
        "Estaria disposto(a) a trabalhar sem contrato formal nos primeiros meses?",
    },
    {
      name: "question6",
      label:
        "Já lhe pediram para enviar documentos pessoais para uma proposta de emprego?",
    },
    {
      name: "question7",
      label:
        "Alguma vez considerou aceitar uma oferta de emprego que parecesse boa demais?",
    },
    {
      name: "question8",
      label: "Estaria disposto(a) a deixar seus familiares por um bom salário?",
    },
    {
      name: "question9",
      label: "Acredita que empregos no exterior são sempre legítimos?",
    },
    {
      name: "question10",
      label:
        "Confiaria em desconhecidos que prometem oportunidades rápidas de emprego?",
    },
  ];

  function onSubmit(values: FormValues) {
    const result = processFormData(values);
    console.log("Respostas do Formulário:", values);
    console.log("Resultado de Vulnerabilidade:", result);
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-2xl">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Formulário de Candidatura — Programa de Emprego
      </h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Nome */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome completo</FormLabel>
                <FormControl>
                  <Input placeholder="Digite o seu nome" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Número */}
          <FormField
            control={form.control}
            name="number"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Número de celular</FormLabel>
                <FormControl>
                  <Input placeholder="84XXXXXXX" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Local */}
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Local</FormLabel>
                <FormControl>
                  <Input placeholder="Cidade ou Distrito" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Faixa etária */}
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
                      <SelectItem value="Às vezes">Às vezes</SelectItem>
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
