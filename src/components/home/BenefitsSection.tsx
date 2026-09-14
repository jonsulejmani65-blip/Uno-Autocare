import { Check } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Parallax } from "@/components/ui/Parallax";

const benefits = [
  "Professionelle Aufbereitung",
  "Hochwertige Produkte",
  "Sorgfältige Handarbeit",
  "Innen- & Aussenpflege",
  "Individuelle Lösungen",
  "Persönliche Beratung",
];

export function BenefitsSection() {
  return (
    <section className="relative overflow-hidden bg-base-anthracite py-24 sm:py-32">
      <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="order-2 lg:order-1 lg:col-span-5">
          <Parallax strength={30}>
            <MediaFrame
              alt="Frisch aufbereitetes Fahrzeug mit makellosem Lack"
              label="Ergebnis"
              variant={4}
              aspect="aspect-[4/5]"
              className="rounded-2xl"
            />
          </Parallax>
        </div>

        <div className="order-1 lg:order-2 lg:col-span-6 lg:col-start-7">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-widest2 text-accent">
              Unser Anspruch
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 max-w-lg text-4xl font-medium leading-[1.05] tracking-tightest text-white sm:text-5xl">
              Für Autos, die wieder aussehen sollen wie neu.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/60 sm:text-lg">
              Wir nehmen uns die Zeit, die es braucht – für ein Ergebnis, das man sieht, fühlt und
              riecht. Jedes Fahrzeug bekommt eine auf seinen Zustand abgestimmte Behandlung.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {benefits.map((benefit, i) => (
              <Reveal key={benefit} delay={0.2 + i * 0.05}>
                <div className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <Check size={13} />
                  </span>
                  <span className="text-sm text-white/75">{benefit}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
