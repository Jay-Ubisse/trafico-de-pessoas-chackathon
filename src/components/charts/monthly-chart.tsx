"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { dataByYear } from "@/data/monthly-data" // ajuste o caminho


interface MonthlyChartProps {
  year: keyof typeof dataByYear
}

export function MonthlyChart({ year }: MonthlyChartProps) {
  return (
    <div className="flex flex-col gap-4">
      <ChartContainer config={{}} className="min-h-[300px] w-full">
        <BarChart data={dataByYear[year]}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis tickLine={false} axisLine={false} tickMargin={8} />
          <Tooltip content={<ChartTooltipContent />} />
          <Bar
            dataKey="denuncias"
            fill="#2563eb"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ChartContainer>
    </div>
  )
}

