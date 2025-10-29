export interface RegionDenuncia {
  name: string
  value: number
}

type RegionDataByYear = {
  [year: number]: RegionDenuncia[]
}

export const regionByYear: RegionDataByYear = {
  2023: [
    { name: "Maputo Cidade", value: 400 },
    { name: "Maputo Província", value: 350 },
    { name: "Gaza", value: 200 },
    { name: "Inhambane", value: 170 },
    { name: "Manica", value: 150 },
    { name: "Sofala", value: 180 },
    { name: "Tete", value: 210 },
    { name: "Zambézia", value: 300 },
    { name: "Nampula", value: 380 },
    { name: "Niassa", value: 140 },
    { name: "Cabo Delgado", value: 230 },
  ],
  2024: [
    { name: "Maputo Cidade", value: 420 },
    { name: "Maputo Província", value: 380 },
    { name: "Gaza", value: 210 },
    { name: "Inhambane", value: 180 },
    { name: "Manica", value: 160 },
    { name: "Sofala", value: 190 },
    { name: "Tete", value: 220 },
    { name: "Zambézia", value: 310 },
    { name: "Nampula", value: 400 },
    { name: "Niassa", value: 150 },
    { name: "Cabo Delgado", value: 240 },
  ],
  2025: [
    { name: "Maputo Cidade", value: 440 },
    { name: "Maputo Província", value: 400 },
    { name: "Gaza", value: 230 },
    { name: "Inhambane", value: 190 },
    { name: "Manica", value: 170 },
    { name: "Sofala", value: 200 },
    { name: "Tete", value: 230 },
    { name: "Zambézia", value: 320 },
    { name: "Nampula", value: 420 },
    { name: "Niassa", value: 160 },
    { name: "Cabo Delgado", value: 250 },
  ],
}

export function getRegionByYear(year: number): RegionDenuncia[] {
  return regionByYear[year] || []
}
