import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { FinalCta } from "@/components/home/FinalCta";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Dienstleistungen – Detailing, Polierung & Reinigung",
  description:
    "Alle Dienstleistungen von UNO AutoCare: Detailing, Polierung, Innenreinigung und Aussenreinigung – professionelle Fahrzeugaufbereitung in Recherswil und der Region Solothurn.",
  alternates: { canonical: "/dienstleistungen" },
};

export default function DienstleistungenPage() {
  return (
    <>
      <PageHero
        eyebrow="Dienstleistungen"
        title="Vier Bereiche, ein Handwerk."
        subtitle={`Jede Leistung von ${siteConfig.name} folgt demselben Anspruch: sorgfältige Handarbeit, hochwertige Produkte und ein Ergebnis, das überzeugt.`}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Dienstleistungen", href: "/dienstleistungen" },
        ]}
      />

      <section className="bg-base-anthracite py-20 sm:py-28">
        <div className="container-page">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <ServiceCard key={service.slug} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
