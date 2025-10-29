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
    value: "12,500",
    description: "Últimos 30 dias",
    trend: "+12%",
    color: "text-green-600",
  },
  {
    title: "Total Vulnerávis",
    value: "1,234",
    description: "Crescimento semanal",
    trend: "-5%",
    color: "text-red-600",
  },
  {
    title: "Vulnerávis Sexo Masculino",
    value: "45,678",
    description: "Usuários ativos hoje",
    trend: "+3%",
    color: "text-green-600",
  },
  {
    title: "Vulnerávis Sexo Masculino",
    value: "4.5%",
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
