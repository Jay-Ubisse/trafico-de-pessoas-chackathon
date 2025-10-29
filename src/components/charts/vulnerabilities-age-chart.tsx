"use client"

import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { name: "Abaixo de 18", value: 150 },
  { name: "18 - 25", value: 290 },
  { name: "26 - 35", value: 240 },
  { name: "36+", value: 190 },
]

const COLORS = ["#3b82f6", "#60a5fa", "#10b981", "#f59e0b"]

export function VulnerabilitiesAgeChart() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-[300px]">
      <h2 className="text-base font-semibold mb-3">Vulnerabilidades por Faixa Etária</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={90}
            label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(v) => `${v} casos`} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
