import type { Metadata } from "next";
import { Sparkles, Disc, Gauge, Armchair, Droplets, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Parallax } from "@/components/ui/Parallax";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { FeatureGrid } from "@/components/services/FeatureGrid";
import { ServiceSchema } from "@/components/seo/ServiceSchema";
import { siteConfig } from "@/lib/site-config";

const title = "Detailing – Fahrzeugaufbereitung von UNO AutoCare";
const description =
  "Professionelles Detailing bei UNO AutoCare in Recherswil: umfassende Fahrzeugaufbereitung für Lack, Felgen, Cockpit und Innenraum – für Kundinnen und Kunden aus der Region Solothurn.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/dienstleistungen/detailing" },
};

const includes = [
  { icon: Disc, label: "Felgen", description: "Sorgfältige Reinigung von Felgen und Radläufen." },
  { icon: Gauge, label: "Lack", description: "Gründliche Aussenpflege für ein gleichmässiges Lackbild." },
  { icon: Armchair, label: "Cockpit", description: "Detailreinigung von Armaturen, Bedienelementen und Fugen." },
  { icon: Droplets, label: "Leder & Textil", description: "Schonende Pflege von Leder- und Stoffoberflächen." },
  { icon: Sparkles, label: "Details", description: "Feinarbeiten an Zierleisten, Dichtungen und schwer erreichbaren Stellen." },
  { icon: ShieldCheck, label: "Endkontrolle", description: "Abschliessende Prüfung, bevor das Fahrzeug übergeben wird." },
];

export default function DetailingPage() {
  return (
    <>
      <ServiceSchema
        name="Detailing"
        description={description}
        url={`${siteConfig.url}/dienstleistungen/detailing`}
      />
      <PageHero
        eyebrow="Dienstleistung"
        title="Detailing"
        subtitle="Umfassende Fahrzeugaufbereitung mit Blick für jedes Detail – innen und aussen."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Dienstleistungen", href: "/dienstleistungen" },
          { label: "Detailing", href: "/dienstleistungen/detailing" },
        ]}
      />

      <section className="bg-base-black py-20 sm:py-28">
        <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Was bedeutet Detailing?"
              title="Aufbereitung bis ins letzte Detail."
            />
            <Reveal delay={0.2}>
              <div className="mt-6 flex flex-col gap-4 text-base leading-relaxed text-white/60 sm:text-lg">
                <p>
                  Detailing bezeichnet die umfassende, hochwertige Aufbereitung eines Fahrzeugs –
                  deutlich über eine gewöhnliche Autowäsche hinaus. Es geht um die Summe vieler
                  kleiner Arbeitsschritte, die zusammen ein grosses Ergebnis ergeben: von der
                  Aussenreinigung über die Felgen bis zum Innenraum.
                </p>
                <p>
                  Geeignet ist Detailing für praktisch jedes Fahrzeug – vom täglich genutzten
                  Alltagsauto über Familienfahrzeuge bis hin zu Liebhaberstücken, die besondere
                  Sorgfalt verdienen.
                </p>
                <p>
                  Zu einer professionellen Aufbereitung gehören unter anderem die gründliche
                  Reinigung von Lack und Felgen, die Detailpflege im Innenraum sowie feine
                  Nacharbeiten an Stellen, die im Alltag oft übersehen werden.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <Parallax strength={35}>
              <MediaFrame
                alt="Detailing eines Fahrzeugs bei UNO AutoCare"
                label="Detailing"
                icon={Sparkles}
                variant={2}
                aspect="aspect-[4/5]"
                className="rounded-2xl"
              />
            </Parallax>
          </div>
        </div>
      </section>

      <section className="bg-base-anthracite py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Der Unterschied"
            title="Warum professionelle Aufbereitung zählt."
            subtitle="Eine sorgfältige Aufbereitung schützt den Wert deines Fahrzeugs, verbessert das Fahrgefühl und macht jede Fahrt angenehmer."
            align="left"
          />
          <div className="mt-14">
            <FeatureGrid items={includes} />
          </div>
        </div>
      </section>

      <section className="bg-base-black py-24 text-center sm:py-28">
        <div className="container-page flex flex-col items-center">
          <Reveal>
            <h2 className="max-w-xl text-3xl font-medium leading-tight tracking-tightest text-white sm:text-4xl">
              Lass dein Fahrzeug professionell aufbereiten.
            </h2>
          </Reveal>
          <Reveal delay={0.12} className="mt-8">
            <Button href="/kontakt?dienstleistung=Detailing">Detailing anfragen</Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
