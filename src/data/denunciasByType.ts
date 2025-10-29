// src/data/denunciasByType.ts
export interface TipoDenuncia {
  name: string
  value: number
}

type DataByYear = {
  [year: number]: TipoDenuncia[]
}

export const denunciasByType: DataByYear = {
  2023: [
    { name: "Prostituição", value: 300 },
    { name: "Trabalho Forçado", value: 160 },
    { name: "Tráfico de Drogas", value: 140 },
    { name: "Exploração Sexual", value: 200 },
    { name: "Tráfico de crianças", value: 80 },
    { name: "Casamento Forçado", value: 60 },
    { name: "Mendicância Forçada", value: 40 },
    { name: "Outros", value: 50 },
  ],
  2024: [
    { name: "Prostituição", value: 320 },
    { name: "Trabalho Forçado", value: 180 },
    { name: "Tráfico de Drogas", value: 150 },
    { name: "Exploração Sexual", value: 240 },
    { name: "Tráfico de crianças", value: 90 },
    { name: "Casamento Forçado", value: 70 },
    { name: "Mendicância Forçada", value: 50 },
    { name: "Outros", value: 60 },
  ],
  2025: [
    { name: "Prostituição", value: 340 },
    { name: "Trabalho Forçado", value: 200 },
    { name: "Tráfico de Drogas", value: 170 },
    { name: "Exploração Sexual", value: 260 },
    { name: "Tráfico de crianças", value: 100 },
    { name: "Casamento Forçado", value: 80 },
    { name: "Mendicância Forçada", value: 60 },
    { name: "Outros", value: 70 },
  ],
}

export function getDenunciasByType(year: number): TipoDenuncia[] {
  return denunciasByType[year] || []
}
