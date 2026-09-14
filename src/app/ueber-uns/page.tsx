import type { Metadata } from "next";
import { Gem, Target, HandHeart, ScanSearch } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Parallax } from "@/components/ui/Parallax";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Über uns – Die Philosophie hinter UNO AutoCare",
  description:
    "Warum UNO AutoCare? Erfahre, wofür wir stehen: Qualität, Präzision, Vertrauen und die Liebe zum Detail bei jeder Fahrzeugaufbereitung in Recherswil.",
  alternates: { canonical: "/ueber-uns" },
};

const values = [
  { icon: Gem, label: "Qualität", description: "Hochwertige Produkte und Materialien für ein Ergebnis, das hält." },
  { icon: ScanSearch, label: "Präzision", description: "Jeder Arbeitsschritt wird sorgfältig und genau ausgeführt." },
  { icon: HandHeart, label: "Vertrauen", description: "Transparente Beratung – ehrlich statt vollmundig." },
  { icon: Target, label: "Details", description: "Der Unterschied entsteht dort, wo andere nicht mehr hinsehen." },
];

export default function UeberUnsPage() {
  return (
    <>
      <PageHero
        eyebrow="Über uns"
        title="Warum UNO AutoCare?"
        subtitle="Keine Werbefloskeln. Nur der Anspruch, jedes Fahrzeug so zu behandeln, wie es ein eigenes verdient hätte."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Über uns", href: "/ueber-uns" },
        ]}
      />

      <section className="bg-base-black py-20 sm:py-28">
        <div className="container-page max-w-3xl">
          <Reveal>
            <p className="text-lg leading-relaxed text-white/70 sm:text-xl">
              Ein Auto ist selten nur ein Fortbewegungsmittel. Es ist die Zeit, die man täglich
              darin verbringt, die Fahrten mit der Familie, der erste eigene Wagen oder das
              Fahrzeug, auf das man lange gespart hat. Genau deshalb hat UNO AutoCare einen
              einfachen, aber klaren Anspruch: Fahrzeuge nicht einfach nur zu reinigen, sondern
              sie mit echter Sorgfalt aufzubereiten.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-base leading-relaxed text-white/55 sm:text-lg">
              Qualität bedeutet für uns nicht Perfektion um jeden Preis, sondern ehrliches
              Handwerk: die richtigen Produkte, ausreichend Zeit und die Bereitschaft, auch die
              Stellen zu bearbeiten, die man auf den ersten Blick nicht sieht. Professionelle
              Fahrzeugpflege heisst für uns, den Zustand eines Fahrzeugs wirklich zu verstehen –
              und entsprechend zu handeln, statt einfach nur eine Standardbehandlung
              durchzuziehen.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-base-anthracite py-24 sm:py-32">
        <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="order-2 lg:order-1 lg:col-span-7">
            <Parallax strength={45}>
              <MediaFrame
                alt="Detailarbeit an einem Fahrzeug bei UNO AutoCare"
                label="Liebe zum Detail"
                variant={2}
                aspect="aspect-[16/11]"
                className="rounded-2xl"
              />
            </Parallax>
          </div>
          <div className="order-1 flex flex-col justify-center lg:order-2 lg:col-span-4 lg:col-start-9">
            <Reveal>
              <span className="text-xs font-medium uppercase tracking-widest2 text-accent">
                Unsere Haltung
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 text-3xl font-medium leading-[1.05] tracking-tightest text-white sm:text-4xl">
                Liebe zum Detail.
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-5 text-base leading-relaxed text-white/60">
                Nicht das grosse Ganze macht am Ende den Unterschied, sondern die vielen kleinen
                Handgriffe dazwischen – eine sauber gearbeitete Fuge, ein makellos poliertes
                Rücklicht, ein Innenraum, der sich wieder wie neu anfühlt.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-base-black py-24 sm:py-32">
        <div className="container-page">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-widest2 text-accent">
              Wofür wir stehen
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 max-w-lg text-4xl font-medium leading-[1.05] tracking-tightest text-white sm:text-5xl">
              Unsere Werte.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <Reveal key={value.label} delay={0.1 + i * 0.06}>
                  <div className="flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-base-anthracite-light/30 p-7">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <Icon size={20} strokeWidth={1.5} />
                    </span>
                    <h3 className="text-lg font-medium text-white">{value.label}</h3>
                    <p className="text-sm leading-relaxed text-white/55">{value.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-base-anthracite py-24 text-center sm:py-28">
        <div className="container-page flex flex-col items-center">
          <Reveal>
            <h2 className="max-w-xl text-3xl font-medium leading-tight tracking-tightest text-white sm:text-4xl">
              Lerne {siteConfig.name} persönlich kennen.
            </h2>
          </Reveal>
          <Reveal delay={0.12} className="mt-8">
            <Button href="/kontakt">UNO AutoCare kennenlernen</Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
