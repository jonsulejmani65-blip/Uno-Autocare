import type { Metadata } from "next";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Kontakt – Termin anfragen bei UNO AutoCare",
  description:
    "Kontaktiere UNO AutoCare in Recherswil für eine professionelle Fahrzeugaufbereitung. Anfrageformular, Telefon, E-Mail und Öffnungszeiten auf einen Blick.",
  alternates: { canonical: "/kontakt" },
};

export default function KontaktPage({
  searchParams,
}: {
  searchParams: { dienstleistung?: string };
}) {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Dein Auto verdient mehr."
        subtitle="Schreib uns kurz, was du vorhast – wir melden uns zeitnah mit den nächsten Schritten."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Kontakt", href: "/kontakt" },
        ]}
      />

      <section className="bg-base-black py-20 sm:py-28">
        <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="rounded-2xl border border-white/10 bg-base-anthracite/50 p-6 sm:p-10">
                <ContactForm defaultService={searchParams.dienstleistung} />
              </div>
            </Reveal>
          </div>

          <div className="flex flex-col gap-6 lg:col-span-4 lg:col-start-9">
            <Reveal delay={0.1}>
              <InfoRow
                icon={Phone}
                label="Telefon"
                value={siteConfig.contact.phoneDisplay}
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
              />
            </Reveal>
            <Reveal delay={0.16}>
              <InfoRow
                icon={Mail}
                label="E-Mail"
                value={siteConfig.contact.email}
                href={`mailto:${siteConfig.contact.email}`}
              />
            </Reveal>
            <Reveal delay={0.22}>
              <div className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <Clock size={18} className="mt-0.5 shrink-0 text-accent" />
                <div>
                  <p className="text-xs font-medium uppercase tracking-widest2 text-white/40">
                    Öffnungszeiten
                  </p>
                  <ul className="mt-2 flex flex-col gap-1 text-sm text-white/70">
                    {siteConfig.contact.openingHours.map((oh) => (
                      <li key={oh.days} className="flex justify-between gap-4">
                        <span className="text-white/50">{oh.days}</span>
                        <span>{oh.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.28}>
              <div className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <MapPin size={18} className="mt-0.5 shrink-0 text-accent" />
                <div>
                  <p className="text-xs font-medium uppercase tracking-widest2 text-white/40">
                    Adresse
                  </p>
                  <p className="mt-2 text-sm text-white/70">
                    {siteConfig.contact.address.street}
                    <br />
                    {siteConfig.contact.address.zip} {siteConfig.contact.address.city}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-base-anthracite pb-24">
        <div className="container-page">
          <Reveal>
            {/* Sobald die echte Adresse bestätigt ist, kann hier ein Google-Maps-Embed
                (siteConfig.contact.mapsEmbedUrl) anstelle des Platzhalters eingesetzt werden. */}
            <div className="relative flex h-[280px] flex-col items-center justify-center gap-4 overflow-hidden rounded-2xl border border-white/10 bg-base-black/60 text-center sm:h-[360px]">
              <div className="grain-overlay" />
              <MapPin size={28} strokeWidth={1.2} className="text-accent" />
              <div>
                <p className="text-sm font-medium text-white/80">
                  {siteConfig.contact.address.street}, {siteConfig.contact.address.zip}{" "}
                  {siteConfig.contact.address.city}
                </p>
                <p className="mt-1 text-xs uppercase tracking-widest2 text-white/30">
                  Kartenansicht folgt
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="focus-ring flex gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-accent/40"
    >
      <Icon size={18} className="mt-0.5 shrink-0 text-accent" />
      <div>
        <p className="text-xs font-medium uppercase tracking-widest2 text-white/40">{label}</p>
        <p className="mt-2 text-sm text-white/70">{value}</p>
      </div>
    </a>
  );
}
