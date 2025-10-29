"use client"

import React from "react"
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { getRegionByYear, RegionDenuncia } from "@/data/complaintsRegionByYear"

interface ComplaintsRegionPieChartProps {
  year: number
}

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

export const ComplaintsRegionPieChart: React.FC<ComplaintsRegionPieChartProps> = ({ year }) => {
  const chartData: RegionDenuncia[] = getRegionByYear(year)

  return (
    <div className="flex flex-col items-center justify-center w-full py-6">
      <h2 className="text-lg font-semibold mb-6">Denúncias por Região — {year}</h2>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={120}
            label={(entry: any) => `${entry.name}: ${((entry.value / chartData.reduce((acc, cur) => acc + cur.value, 0)) * 100).toFixed(1)}%`}
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value: number) => `${value} denúncias`} />
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