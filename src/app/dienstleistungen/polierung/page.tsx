import type { Metadata } from "next";
import { Gauge, Sun, Search, Layers } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Parallax } from "@/components/ui/Parallax";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { FeatureGrid } from "@/components/services/FeatureGrid";
import { ServiceSchema } from "@/components/seo/ServiceSchema";
import { siteConfig } from "@/lib/site-config";

const title = "Polierung – Lackaufbereitung von UNO AutoCare";
const description =
  "Professionelle Lackpolitur bei UNO AutoCare in Recherswil: Glanzsteigerung und Reduktion feiner Kratzer für ein deutlich verbessertes Lackbild – für die Region Solothurn.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/dienstleistungen/polierung" },
};

const includes = [
  {
    icon: Search,
    label: "Zustandsanalyse",
    description: "Vor der Politur prüfen wir den Lackzustand, um die passende Methode zu wählen.",
  },
  {
    icon: Layers,
    label: "Lackaufbereitung",
    description: "Schrittweise Bearbeitung der Lackoberfläche mit geeigneten Poliermitteln.",
  },
  {
    icon: Sun,
    label: "Glanzsteigerung",
    description: "Sichtbar mehr Tiefenglanz und ein klareres, gleichmässigeres Lackbild.",
  },
  {
    icon: Gauge,
    label: "Feinschliff",
    description: "Sorgfältige Nacharbeit für ein möglichst homogenes Ergebnis in der Fläche.",
  },
];

export default function PolierungPage() {
  return (
    <>
      <ServiceSchema
        name="Polierung"
        description={description}
        url={`${siteConfig.url}/dienstleistungen/polierung`}
      />
      <PageHero
        eyebrow="Dienstleistung"
        title="Polierung"
        subtitle="Professionelle Lackaufbereitung für mehr Glanz und ein verbessertes Lackbild."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Dienstleistungen", href: "/dienstleistungen" },
          { label: "Polierung", href: "/dienstleistungen/polierung" },
        ]}
      />

      <section className="bg-base-black py-20 sm:py-28">
        <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Parallax strength={35}>
              <MediaFrame
                alt="Lackpolitur an einem Fahrzeug"
                label="Lack & Politur"
                icon={Gauge}
                variant={3}
                aspect="aspect-[4/5]"
                className="rounded-2xl"
              />
            </Parallax>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <SectionHeading eyebrow="Lackaufbereitung" title="Mehr Glanz, weniger Kratzer." />
            <Reveal delay={0.2}>
              <div className="mt-6 flex flex-col gap-4 text-base leading-relaxed text-white/60 sm:text-lg">
                <p>
                  Mit der Zeit verliert jeder Lack an Frische: feine Kratzer, Waschstrassen-Spuren
                  und Umwelteinflüsse setzen sich auf der Oberfläche ab. Eine professionelle
                  Politur kann diese feinen Beeinträchtigungen reduzieren und den Glanz des Lacks
                  deutlich verbessern.
                </p>
                <p>
                  Der Ablauf orientiert sich am tatsächlichen Zustand des Lacks – wir wählen die
                  Vorgehensweise so, dass ein möglichst schonendes und gleichzeitig sichtbares
                  Ergebnis entsteht.
                </p>
                <p className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm text-white/50">
                  Wichtig zu wissen: Eine Politur kann feine Kratzer reduzieren oder deren
                  Sichtbarkeit verringern – tiefe Kratzer, Steinschläge oder Lackschäden lassen
                  sich damit jedoch nicht vollständig entfernen. Wir beraten dich ehrlich darüber,
                  was im Einzelfall realistisch erreichbar ist.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-base-anthracite py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Ablauf"
            title="So gehen wir vor."
            subtitle="Jede Politur beginnt mit einer ehrlichen Einschätzung des Lackzustands."
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
              Gib deinem Lack den Glanz zurück, den er verdient.
            </h2>
          </Reveal>
          <Reveal delay={0.12} className="mt-8">
            <Button href="/kontakt?dienstleistung=Polierung">Polierung anfragen</Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
