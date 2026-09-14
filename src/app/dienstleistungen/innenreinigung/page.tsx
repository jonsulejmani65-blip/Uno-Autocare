import type { Metadata } from "next";
import { Armchair, Footprints, Sofa, Gauge as GaugeIcon, Layers, Droplet } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Parallax } from "@/components/ui/Parallax";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { FeatureGrid } from "@/components/services/FeatureGrid";
import { ServiceSchema } from "@/components/seo/ServiceSchema";
import { siteConfig } from "@/lib/site-config";

const title = "Innenreinigung – Fahrzeug-Innenraumpflege von UNO AutoCare";
const description =
  "Professionelle Innenreinigung bei UNO AutoCare in Recherswil: Sitze, Teppiche, Cockpit, Kunststoff und Leder gründlich gereinigt – für die Region Solothurn.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/dienstleistungen/innenreinigung" },
};

// Struktur bewusst als Liste angelegt: einzelne Bereiche können hier
// einfach angepasst, ergänzt oder entfernt werden, sobald der Leistungsumfang feststeht.
const areas = [
  { icon: Sofa, label: "Sitze", description: "Gründliche Reinigung von Stoff- und Ledersitzen." },
  { icon: Layers, label: "Teppiche", description: "Tiefenreinigung von Teppichen und Bodenbelägen." },
  { icon: Footprints, label: "Fussmatten", description: "Separate Reinigung von Fussmatten innen und aussen." },
  { icon: GaugeIcon, label: "Armaturen & Cockpit", description: "Sorgfältige Pflege von Armaturenbrett und Bedienelementen." },
  { icon: Droplet, label: "Kunststoff", description: "Reinigung und Pflege von Kunststoffoberflächen im Innenraum." },
  { icon: Armchair, label: "Leder", description: "Schonende Reinigung und Pflege von Lederoberflächen." },
];

export default function InnenreinigungPage() {
  return (
    <>
      <ServiceSchema
        name="Innenreinigung"
        description={description}
        url={`${siteConfig.url}/dienstleistungen/innenreinigung`}
      />
      <PageHero
        eyebrow="Dienstleistung"
        title="Innenreinigung"
        subtitle="Gründliche Pflege für Sitze, Teppiche, Cockpit und alle Oberflächen im Innenraum."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Dienstleistungen", href: "/dienstleistungen" },
          { label: "Innenreinigung", href: "/dienstleistungen/innenreinigung" },
        ]}
      />

      <section className="bg-base-black py-20 sm:py-28">
        <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Innenraumpflege"
              title="Sauber bis in die letzte Fuge."
            />
            <Reveal delay={0.2}>
              <div className="mt-6 flex flex-col gap-4 text-base leading-relaxed text-white/60 sm:text-lg">
                <p>
                  Der Innenraum ist der Bereich eines Fahrzeugs, der am direktesten erlebt wird –
                  und am stärksten durch den Alltag beansprucht ist. Krümel im Teppich,
                  verstaubte Lüftungsschlitze oder abgenutzte Sitzflächen sammeln sich mit der
                  Zeit an.
                </p>
                <p>
                  Bei der Innenreinigung arbeiten wir uns systematisch durch jeden Bereich:
                  Sitze, Teppiche, Fussmatten, Armaturen, Kunststoff- und Lederoberflächen. Jedes
                  Material bekommt die dafür passende Pflege.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <Parallax strength={35}>
              <MediaFrame
                alt="Gereinigter Innenraum eines Fahrzeugs"
                label="Innenraum"
                icon={Armchair}
                variant={4}
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
            eyebrow="Bereiche"
            title="Diese Bereiche werden gereinigt."
            subtitle="Der Leistungsumfang lässt sich individuell auf dein Fahrzeug abstimmen."
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
              Für einen Innenraum, der sich wieder wie neu anfühlt.
            </h2>
          </Reveal>
          <Reveal delay={0.12} className="mt-8">
            <Button href="/kontakt?dienstleistung=Innenreinigung">Innenreinigung anfragen</Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
