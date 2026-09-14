import { SectionHeading } from "@/components/ui/SectionHeading";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { Reveal } from "@/components/ui/Reveal";

export function BeforeAfterSection() {
  return (
    <section className="relative bg-base-black py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Der Unterschied"
          title="Vorher. Nachher."
          subtitle="Ein Blick genügt: professionelle Aufbereitung verändert nicht nur den Glanz, sondern den gesamten Eindruck eines Fahrzeugs."
          align="center"
        />
        <Reveal delay={0.15} className="mt-14">
          <BeforeAfterSlider />
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-lg text-center text-xs uppercase tracking-widest2 text-white/30">
            Beispielhafte Darstellung – Platzhalterbilder, echte Vorher/Nachher-Aufnahmen folgen.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
