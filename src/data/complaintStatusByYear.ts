// src/data/complaintStatusByYear.ts
export interface StatusDenuncia {
  name: string
  value: number
}

type StatusDataByYear = {
  [year: number]: StatusDenuncia[]
}

export const statusByYear: StatusDataByYear = {
  2023: [
    { name: "Casos Resolvidos", value: 100 },
    { name: "Casos em Curso", value: 180 },
    { name: "Não Resolvidos", value: 70 },
  ],
  2024: [
    { name: "Casos Resolvidos", value: 140 },
    { name: "Casos em Curso", value: 210 },
    { name: "Não Resolvidos", value: 90 },
  ],
  2025: [
    { name: "Casos Resolvidos", value: 120 },
    { name: "Casos em Curso", value: 200 },
    { name: "Não Resolvidos", value: 80 },
  ],
}

export function getStatusByYear(year: number): StatusDenuncia[] {
  return statusByYear[year] || []
}
