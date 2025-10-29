"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Dados simulados por ano
const dataByYear = {
  2023: [
    { month: "Janeiro", denuncias: 120 },
    { month: "Fevereiro", denuncias: 150 },
    { month: "Março", denuncias: 180 },
    { month: "Abril", denuncias: 90 },
    { month: "Maio", denuncias: 130 },
    { month: "Junho", denuncias: 140 },
    { month: "Julho", denuncias: 160 },
    { month: "Agosto", denuncias: 170 },
    { month: "Setembro", denuncias: 155 },
    { month: "Outubro", denuncias: 190 },
    { month: "Novembro", denuncias: 200 },
    { month: "Dezembro", denuncias: 210 },
  ],
  2024: [
    { month: "Janeiro", denuncias: 180 },
    { month: "Fevereiro", denuncias: 210 },
    { month: "Março", denuncias: 250 },
    { month: "Abril", denuncias: 150 },
    { month: "Maio", denuncias: 190 },
    { month: "Junho", denuncias: 220 },
    { month: "Julho", denuncias: 200 },
    { month: "Agosto", denuncias: 240 },
    { month: "Setembro", denuncias: 210 },
    { month: "Outubro", denuncias: 260 },
    { month: "Novembro", denuncias: 230 },
    { month: "Dezembro", denuncias: 280 },
  ],
  2025: [
    { month: "Janeiro", denuncias: 200 },
    { month: "Fevereiro", denuncias: 250 },
    { month: "Março", denuncias: 230 },
    { month: "Abril", denuncias: 180 },
    { month: "Maio", denuncias: 240 },
    { month: "Junho", denuncias: 220 },
    { month: "Julho", denuncias: 260 },
    { month: "Agosto", denuncias: 270 },
    { month: "Setembro", denuncias: 250 },
    { month: "Outubro", denuncias: 290 },
    { month: "Novembro", denuncias: 310 },
    { month: "Dezembro", denuncias: 320 },
  ],
}

export function MonthlyChart() {
  const [year, setYear] = React.useState<keyof typeof dataByYear>(2025)

  return (
    <div className="flex flex-col gap-4">
      {/* Título e seletor de ano */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Denúncias por Mês</h2>

        <Select
          value={year.toString()}
          onValueChange={(v) => setYear(Number(v) as keyof typeof dataByYear)}
        >
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder="Ano" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="2023">2023</SelectItem>
            <SelectItem value="2024">2024</SelectItem>
            <SelectItem value="2025">2025</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Gráfico */}
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