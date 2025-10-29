import { DenunciasPieChart } from "@/components/charts/complaint-pie-chart";
import { DenunciasRegiaoChart } from "@/components/charts/complaints-region-chart";
import { ComplaintsRegionPieChart } from "@/components/charts/complaints-region-pie-chart";
import { MonthlyChart } from "@/components/charts/monthly-chart";
import { VulnerabilitiesAgeChart } from "@/components/charts/vulnerabilities-age-chart";
import { VulnerabilitiesGenderChart } from "@/components/charts/vulnerabilities-gender-chart";
import { VulnerabilitiesRegionChart } from "@/components/charts/vulnerabilities-region-chart";
import { DashboardCards } from "@/components/ui/dashboard-cards";
import { MotionSection } from "@/components/ui/motion-section";

export default function Overview() {
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

        <div className="grid gap-6 md:grid-cols-2">
          <MotionSection delay={0.3}>
            <div className="border rounded-xl p-3">
              <MonthlyChart />
            </div>
          </MotionSection>

          <MotionSection delay={0.4}>
            <div className="border rounded-xl flex items-center justify-center min-h-[300px] text-muted-foreground">
              <DenunciasPieChart />
            </div>
          </MotionSection>

          <MotionSection delay={0.5}>
            <div className="border rounded-xl p-3">
              <DenunciasRegiaoChart />
            </div>
          </MotionSection>

          <MotionSection delay={0.6}>
            <div className="border rounded-xl p-3" >
              <ComplaintsRegionPieChart />
            </div>
          </MotionSection>

        </div>
      </div>
      </MotionSection>

      <MotionSection delay={0.7}>
       <hr className="border-t border-muted my-4" />
      </MotionSection>

      <div className="space-y-4">
        <MotionSection delay={0.8}>
        <h2 className="text-xl font-semibold text-foreground">
          Análises Avançadas de Vulnerabilidades
        </h2>
        </MotionSection>

        <div className="grid gap-6 md:grid-cols-3">
          <MotionSection delay={0.9}>
          <div className="border rounded-xl p-6 flex items-center justify-center text-muted-foreground">
            <VulnerabilitiesGenderChart />
          </div>
          </MotionSection>

          <MotionSection delay={1.0}>
          <div className="border rounded-xl p-6 flex items-center justify-center text-muted-foreground">
            <VulnerabilitiesRegionChart />
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
