import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-base-black py-28 sm:py-36">
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,163,78,0.16), transparent 70%)",
        }}
      />
      <div className="grain-overlay" />
      <div className="container-page relative flex flex-col items-center text-center">
        <Reveal>
          <h2 className="max-w-2xl text-4xl font-medium leading-[1.05] tracking-tightest text-white sm:text-6xl">
            Bereit für den Unterschied?
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/60 sm:text-lg">
            Vereinbare jetzt eine Anfrage für dein Fahrzeug – wir melden uns zeitnah für die
            Details.
          </p>
        </Reveal>
        <Reveal delay={0.22} className="mt-9">
          <Button href="/kontakt">Jetzt Termin anfragen</Button>
        </Reveal>
      </div>
    </section>
  );
}
