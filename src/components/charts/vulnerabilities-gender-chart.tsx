"use client"

import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { name: "Masculino", value: 340 },
  { name: "Feminino", value: 520 },
  { name: "Outros", value: 40 },
]

const COLORS = ["#3b82f6", "#ec4899", "#a3a3a3"]

export function VulnerabilitiesGenderChart() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-[300px]">
      <h2 className="text-base font-semibold mb-3">Vulnerabilidades por Gênero</h2>
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
