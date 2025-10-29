"use client"
import { DenunciasPieChart } from "@/components/charts/complaint-pie-chart";
import { ComplaintsRegionPieChart } from "@/components/charts/complaints-region-pie-chart";
import { ComplaintStatusChart } from "@/components/charts/ComplaintsStatusChart";
import { MonthlyChart } from "@/components/charts/monthly-chart";
import { VulnerabilitiesAgeChart } from "@/components/charts/vulnerabilities-age-chart";
import { VulnerabilitiesGenderChart } from "@/components/charts/vulnerabilities-gender-chart";
import { VulnerabilitiesTypeChart } from "@/components/charts/VulnerabilitiesTypeChart";
import { DashboardCards } from "@/components/ui/dashboard-cards";
import { MotionSection } from "@/components/ui/motion-section";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { dataByYear } from "@/data/monthly-data"

import * as React from "react"

export default function Overview() {
  
  const [year, setYear] = React.useState<keyof typeof dataByYear>(2025)

  return (
    <div className="p-6 space-y-6">
      <MotionSection delay={0.1}>
        <p className="text-xl font-semibold">Visão Geral</p>
      </MotionSection>

      <MotionSection delay={0.1}>
        <DashboardCards />
      </MotionSection>

      {/* Gráficos */}
      <MotionSection delay={0.2}>
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">
          Estatísticas Gerais de Denúncias
        </h2>

          <div className=" items-center mb-4 flex gap-4">
            <h2 className="text-xl font-semibold text-foreground">Filtrar por Ano</h2>
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

        <div className="grid gap-6 md:grid-cols-2">
          <MotionSection delay={0.3}>
            <div className="border rounded-xl p-3">
              <MonthlyChart year={year} />
            </div>
          </MotionSection>

          <MotionSection delay={0.4}>
            <div className="border rounded-xl flex items-center justify-center min-h-[300px] text-muted-foreground">
              <DenunciasPieChart year={year} />
            </div>
          </MotionSection>

          <MotionSection delay={0.5}>
            <div className="border rounded-xl p-3" >
              <ComplaintsRegionPieChart year={year} />
            </div>
          </MotionSection>

          <MotionSection delay={0.6}>
            <div className="border rounded-xl p-3">
              <ComplaintStatusChart year={year} />
            </div>
          </MotionSection>
        </div>
      </div>
      </MotionSection>

      {/* Vulnerabilidades  */}

      <MotionSection delay={0.7}>
       <hr className="border-t border-muted my-4" />
      </MotionSection>

      <div className="space-y-4">
        <MotionSection delay={0.8}>
        <h2 className="text-xl font-semibold text-foreground">
          Análises Avançadas de Vulnerabilidades
        </h2>
        <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-foreground">Filtrar por Ano</h2>
          </div>
        </MotionSection>

        <div className="grid gap-6 md:grid-cols-3">
          <MotionSection delay={0.9}>
          <div className="border rounded-xl p-6 flex items-center justify-center text-muted-foreground">
            <VulnerabilitiesGenderChart />
          </div>
          </MotionSection>

          <MotionSection delay={1.0}>
          <div className="border rounded-xl p-3">
              <VulnerabilitiesTypeChart />
            </div>
          </MotionSection>

          <MotionSection delay={1.1}>
          <div className="border rounded-xl p-6 flex items-center justify-center text-muted-foreground">
            <VulnerabilitiesAgeChart />
          </div>
          </MotionSection>
        </div>
      </div>
   </div>
  )
}
