import { Reveal } from "@/components/ui/Reveal";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Parallax } from "@/components/ui/Parallax";
import { Sparkles } from "lucide-react";

export function IntroSection() {
  return (
    <section className="relative overflow-hidden bg-base-black py-24 sm:py-32">
      <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-widest2 text-accent">
              Philosophie
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 max-w-lg text-4xl font-medium leading-[1.05] tracking-tightest text-white sm:text-5xl">
              Mehr als nur Autoreinigung.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/60 sm:text-lg">
              Bei UNO AutoCare geht es nicht um eine schnelle Wäsche zwischendurch. Es geht um
              Handwerk, Geduld und den Anspruch, jedes Fahrzeug so zu behandeln, als wäre es das
              eigene. Jede Faser, jede Lackfläche, jede Fuge bekommt die Aufmerksamkeit, die sie
              verdient.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-8 flex items-center gap-3 text-white/50">
              <Sparkles size={18} className="text-accent" />
              <span className="text-sm">Handarbeit statt Fliessband.</span>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <Parallax strength={40}>
            <MediaFrame
              alt="Detailer bei der sorgfältigen Fahrzeugaufbereitung"
              label="Handwerk im Detail"
              variant={2}
              aspect="aspect-[5/6]"
              className="rounded-2xl"
            />
          </Parallax>
        </div>
      </div>
    </section>
  );
}
