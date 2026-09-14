import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { getAllLocations } from "@/lib/locations";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Standorte – UNO AutoCare in Recherswil & Region Solothurn",
  description:
    "UNO AutoCare mit Hauptstandort in Recherswil bedient Kundinnen und Kunden aus der ganzen Region Solothurn – u.a. Zuchwil, Biberist, Grenchen und Olten.",
  alternates: { canonical: "/standorte" },
};

export default function StandortePage() {
  const locations = getAllLocations();

  return (
    <>
      <PageHero
        eyebrow="Standorte"
        title="Recherswil & die Region Solothurn."
        subtitle={`${siteConfig.name} hat seinen Hauptstandort in Recherswil und bereitet Fahrzeuge für Kundinnen und Kunden aus der gesamten Region Solothurn auf.`}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Standorte", href: "/standorte" },
        ]}
      />

      <section className="bg-base-black py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Hauptstandort"
            title="Recherswil"
            subtitle="Unser Betrieb liegt zentral im Bucheggberg – der Ausgangspunkt für jede Fahrzeugaufbereitung."
          />
          <Reveal delay={0.15} className="mt-8">
            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm text-white/60 sm:max-w-md">
              <MapPin size={18} className="shrink-0 text-accent" />
              <span>
                {siteConfig.contact.address.street}, {siteConfig.contact.address.zip}{" "}
                {siteConfig.contact.address.city}
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-base-anthracite py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Einzugsgebiet"
            title="Wir bereiten Fahrzeuge auf für Kundschaft aus:"
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {locations
              .filter((l) => !l.isPrimary)
              .map((loc, i) => (
                <Reveal key={loc.slug} delay={i * 0.05}>
                  <Link
                    href={`/standorte/${loc.slug}`}
                    className="focus-ring group flex items-center justify-between rounded-xl border border-white/10 bg-base-black/40 px-6 py-5 transition-colors hover:border-accent/40"
                  >
                    <span className="text-lg font-medium text-white">{loc.name}</span>
                    <ArrowUpRight
                      size={18}
                      className="text-white/40 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                    />
                  </Link>
                </Reveal>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
