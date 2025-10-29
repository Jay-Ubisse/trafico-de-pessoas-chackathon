"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const chartData = [
  { provincia: "Maputo Cidade", denuncias: 420 },
  { provincia: "Maputo Província", denuncias: 380 },
  { provincia: "Gaza", denuncias: 210 },
  { provincia: "Inhambane", denuncias: 180 },
  { provincia: "Manica", denuncias: 160 },
  { provincia: "Sofala", denuncias: 190 },
  { provincia: "Tete", denuncias: 220 },
  { provincia: "Zambézia", denuncias: 310 },
  { provincia: "Nampula", denuncias: 400 },
  { provincia: "Niassa", denuncias: 150 },
  { provincia: "Cabo Delgado", denuncias: 240 },
]

export function DenunciasRegiaoChart() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-[350px]">
      <h2 className="text-lg font-semibold mb-4">Denúncias por Região</h2>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          layout="vertical"
          data={chartData}
          margin={{ top: 10, right: 30, left: 50, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis
            dataKey="provincia"
            type="category"
            width={120}
            tick={{ fontSize: 12 }}
          />
          <Tooltip formatter={(value) => `${value} denúncias`} />
          <Bar dataKey="denuncias" fill="#2563eb" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
