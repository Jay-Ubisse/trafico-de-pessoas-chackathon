export function vulnerabilityScoreStyles(score: number): string {
  if (score < 21) {
    return "bg-green-500";
  } else if (score < 51) {
    return "bg-yellow-500";
  } else if (score < 81) {
    return "bg-orange-500";
  } else {
    return "bg-red-500";
  }
}

export function vulnerabilityLevelStyles(level: string): string {
  switch (level) {
    case "Baixo":
      return "bg-green-500";
    case "Médio":
      return "bg-yellow-500";
    case "Alto":
      return "bg-orange-500";
    case "Crítico":
      return "bg-red-500";
    default:
      return "";
  }
}
