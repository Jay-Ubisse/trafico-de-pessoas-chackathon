import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";

const cards = [
  {
    title: "Total Denúncias",
    value: "1,248",
    description: "Últimos 30 dias",
    trend: "+12%",
    color: "text-green-600",
  },
  {
    title: "Total Vulnerávis",
    value: "834",
    description: "Crescimento semanal",
    trend: "-5%",
    color: "text-red-600",
  },
  {
    title: "Vulnerávis Sexo Masculino",
    value: "278",
    description: "Usuários ativos hoje",
    trend: "+3%",
    color: "text-green-600",
  },
  {
    title: "Vulnerávis Sexo Feminino",
    value: "566",
    description: "Média mensal",
    trend: "Estável",
    color: "text-green-600",
  },
];

export function DashboardCards() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => (
        <Card key={card.title}>
          <CardHeader>
            <CardDescription className="font-medium">
              {card.title}
            </CardDescription>
            <CardTitle>{card.value}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{card.description}</p>
          </CardContent>
          <CardFooter>
            <p className={`text-sm ${card.color}`}>{card.trend}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
