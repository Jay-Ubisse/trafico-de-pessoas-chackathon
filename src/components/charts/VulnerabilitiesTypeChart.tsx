"use client"

import React from "react"
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts"

interface Vulnerabilidade {
  name: string
  value: number
}

const data: Vulnerabilidade[] = [
  { name: "Trabalho Forçado", value: 220 },
  { name: "Servidão Doméstica", value: 100 },
  { name: "Tráfico de Crianças", value: 75 },
  { name: "Exploração Sexual", value: 160 },
]

const COLORS: string[] = [
  "#2563eb", 
  "#10b981", 
  "#f59e0b", 
  "#ec4899", 
]

export const VulnerabilitiesTypeChart: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-[350px]">
      <h2 className="text-base text-gray-500 font-semibold mb-3">Vulnerabilidades por Tipo</h2>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={90}
            label={(entry) =>
              `${entry.name}: ${(
                (entry.value / data.reduce((acc, cur) => acc + cur.value, 0)) *
                100
              ).toFixed(1)}%`
            }
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>

          <Tooltip formatter={(value: number) => `${value} casos`} />
          <Legend
            verticalAlign="bottom"
            wrapperStyle={{
              marginTop: 20,
              fontSize: 12,
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
