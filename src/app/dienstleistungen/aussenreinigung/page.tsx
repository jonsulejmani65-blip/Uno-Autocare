import type { Metadata } from "next";
import { Droplets, Disc, Sparkles, Wind, ShieldCheck, Brush } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Parallax } from "@/components/ui/Parallax";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { FeatureGrid } from "@/components/services/FeatureGrid";
import { ServiceSchema } from "@/components/seo/ServiceSchema";
import { siteConfig } from "@/lib/site-config";

const title = "Aussenreinigung – Autowäsche & Fahrzeugpflege von UNO AutoCare";
const description =
  "Professionelle Aussenreinigung bei UNO AutoCare in Recherswil: Handwäsche, Felgenreinigung, Lackreinigung und Pflege – für die Region Solothurn.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/dienstleistungen/aussenreinigung" },
};

const areas = [
  { icon: Droplets, label: "Handwäsche", description: "Schonende Fahrzeugwäsche in sorgfältiger Handarbeit." },
  { icon: Disc, label: "Felgenreinigung", description: "Gründliche Reinigung von Felgen und Radläufen." },
  { icon: Sparkles, label: "Lackreinigung", description: "Reinigung der Lackoberfläche als Basis für weitere Pflege." },
  { icon: Wind, label: "Trocknung", description: "Sorgfältige, streifenfreie Trocknung nach der Wäsche." },
  { icon: ShieldCheck, label: "Pflege", description: "Pflegende Nachbehandlung für ein gepflegtes Erscheinungsbild." },
  { icon: Brush, label: "Detailarbeiten", description: "Feinarbeiten an Fugen, Dichtungen und schwer erreichbaren Stellen." },
];

export default function AussenreinigungPage() {
  return (
    <>
      <ServiceSchema
        name="Aussenreinigung"
        description={description}
        url={`${siteConfig.url}/dienstleistungen/aussenreinigung`}
      />
      <PageHero
        eyebrow="Dienstleistung"
        title="Aussenreinigung"
        subtitle="Sorgfältige Handwäsche, Felgenreinigung und Lackpflege für ein makelloses äusseres Erscheinungsbild."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Dienstleistungen", href: "/dienstleistungen" },
          { label: "Aussenreinigung", href: "/dienstleistungen/aussenreinigung" },
        ]}
      />

      <section className="bg-base-black py-20 sm:py-28">
        <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Parallax strength={35}>
              <MediaFrame
                alt="Handwäsche eines Fahrzeugs bei UNO AutoCare"
                label="Aussenreinigung"
                icon={Droplets}
                variant={5}
                aspect="aspect-[4/5]"
                className="rounded-2xl"
              />
            </Parallax>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <SectionHeading eyebrow="Aussenpflege" title="Der erste Eindruck zählt." />
            <Reveal delay={0.2}>
              <div className="mt-6 flex flex-col gap-4 text-base leading-relaxed text-white/60 sm:text-lg">
                <p>
                  Die Aussenreinigung ist die Basis jeder Fahrzeugpflege. Wir setzen dabei auf
                  schonende Handwäsche statt automatisierter Waschstrassen – so lassen sich
                  feine Lackoberflächen materialgerecht behandeln.
                </p>
                <p>
                  Neben Lack und Felgen achten wir auch auf Details wie Fugen, Dichtungen und
                  schwer erreichbare Stellen, damit das Ergebnis rundum stimmt.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-base-anthracite py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Leistungen"
            title="Das gehört zur Aussenreinigung."
          />
          <div className="mt-14">
            <FeatureGrid items={areas} />
          </div>
        </div>
      </section>

      <section className="bg-base-black py-24 text-center sm:py-28">
        <div className="container-page flex flex-col items-center">
          <Reveal>
            <h2 className="max-w-xl text-3xl font-medium leading-tight tracking-tightest text-white sm:text-4xl">
              Für ein Fahrzeug, das von aussen überzeugt.
            </h2>
          </Reveal>
          <Reveal delay={0.12} className="mt-8">
            <Button href="/kontakt?dienstleistung=Aussenreinigung">Aussenreinigung anfragen</Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
