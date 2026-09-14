import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { IntroSection } from "@/components/home/IntroSection";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { BeforeAfterSection } from "@/components/home/BeforeAfterSection";
import { BenefitsSection } from "@/components/home/BenefitsSection";
import { FinalCta } from "@/components/home/FinalCta";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `${siteConfig.name} – Fahrzeugaufbereitung in Recherswil & Solothurn`,
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroSection />
      <ServicesGrid />
      <BeforeAfterSection />
      <BenefitsSection />
      <FinalCta />
    </>
  );
}
