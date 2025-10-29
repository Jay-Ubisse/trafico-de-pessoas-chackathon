"use client"

import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts"

const chartData = [
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
]

const COLORS = [
  "#2563eb",
  "#60a5fa",
  "#7c3aed",
  "#a855f7",
  "#ec4899",
  "#f59e0b",
  "#10b981",
  "#14b8a6",
  "#f97316",
  "#84cc16",
  "#6b7280",
]

export function ComplaintsRegionPieChart() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-[350px]">
      <h2 className="text-lg font-semibold mb-4">Denúncias por Região (Pizza)</h2>
      <ResponsiveContainer width="100%" height={350}>
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={120}
            label={({ name, percent }) =>
              `${name}: ${(percent * 100).toFixed(1)}%`
            }
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `${value} denúncias`} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
