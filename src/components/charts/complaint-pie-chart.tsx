"use client"

import { Pie, PieChart, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts"

const chartData = [
  { name: "Prostituição", value: 320 },
  { name: "Trabalho Forçado", value: 180 },
  { name: "Tráfico de Drogas", value: 150 },
  { name: "Exploração Sexual", value: 240 },
  { name: "Tráfico de crianças", value: 90 },
  { name: "Casamento Forçado", value: 70 },
  { name: "Mendicância Forçada", value: 50 },
  { name: "Outros", value: 60 },
]

// Paleta de cores harmoniosa (tons azulados e arroxeados)
const COLORS = [
  "#2563eb",
  "#60a5fa",
  "#7c3aed",
  "#a855f7",
  "#ec4899",
  "#f59e0b",
  "#10b981",
  "#6b7280",
]

export function DenunciasPieChart() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-[300px]">
      <h2 className="text-lg font-semibold mb-4">Denúncias por Tipo de Tráfico</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `${value} casos`} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
