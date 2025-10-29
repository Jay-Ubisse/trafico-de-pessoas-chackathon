// src/components/charts/ComplaintStatusChart.tsx
"use client"

import React from "react"
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { getStatusByYear, StatusDenuncia } from "@/data/complaintStatusByYear"

interface ComplaintStatusChartProps {
  year: number
}

const STATUS_COLORS: string[] = [
  "#10b981", // verde
  "#f59e0b", // amarelo
  "#ef4444", // vermelho
]

export const ComplaintStatusChart: React.FC<ComplaintStatusChartProps> = ({ year }) => {
  const denunciaData: StatusDenuncia[] = getStatusByYear(year)
  const total = denunciaData.reduce((acc, cur) => acc + cur.value, 0)

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-[350px]">
      <h2 className="text-base font-semibold mb-3">Status das Denúncias - {year}</h2>

      <ResponsiveContainer width="100%" height={350}>
        <PieChart>
          <Pie
            data={denunciaData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label={(entry: any) =>
              `${entry.name}: ${((entry.value / total) * 100).toFixed(1)}%`
            }
          >
            {denunciaData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={STATUS_COLORS[index % STATUS_COLORS.length]} />
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