"use client";

import React from "react";
import {
  Pie,
  PieChart,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { getDenunciasByType, TipoDenuncia } from "@/data/denunciasByType";

interface DenunciasPieChartProps {
  year: number;
}

const COLORS = [
  "#2563eb",
  "#60a5fa",
  "#7c3aed",
  "#a855f7",
  "#ec4899",
  "#f59e0b",
  "#10b981",
  "#6b7280",
];

export const DenunciasPieChart: React.FC<DenunciasPieChartProps> = ({
  year,
}) => {
  const chartData: TipoDenuncia[] = getDenunciasByType(year);

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-[300px]">
      <h2 className="text-lg font-semibold text-primary mb-4">
        Distribuição de denúncias por Tipo de Tráfico
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip formatter={(value: number) => `${value} casos`} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
