"use client";

import DenunciarDialog from "@/components/ui/DenunciarDialog";
import HeroSection from "./heroSection/page";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <HeroSection />
      <DenunciarDialog />
    </div>
  );
}
