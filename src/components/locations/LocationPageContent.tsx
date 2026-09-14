import Link from "next/link";
import { MapPin, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Parallax } from "@/components/ui/Parallax";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site-config";
import type { LocationContent } from "@/lib/locations";

export function LocationPageContent({ location }: { location: LocationContent }) {
  const highlighted = services.filter((s) => location.highlightServiceSlugs.includes(s.slug));

  return (
    <>
      <LocalBusinessSchema areaServed={[location.name, "Recherswil"]} />
      <PageHero
        eyebrow={location.isPrimary ? "Hauptstandort" : "Standort"}
        title={location.h1}
        subtitle={location.intro}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Standorte", href: "/standorte" },
          { label: location.name, href: `/standorte/${location.slug}` },
        ]}
      />

      <section className="bg-base-black py-20 sm:py-28">
        <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <SectionHeading eyebrow="Die Region" title={`${location.name} & Umgebung`} />
            <Reveal delay={0.18}>
              <p className="mt-6 text-base leading-relaxed text-white/60 sm:text-lg">
                {location.aboutArea}
              </p>
            </Reveal>
            <Reveal delay={0.26}>
              <p className="mt-4 text-base leading-relaxed text-white/60 sm:text-lg">
                {location.localAngle}
              </p>
            </Reveal>
            <Reveal delay={0.34} className="mt-8">
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm text-white/60">
                <MapPin size={18} className="shrink-0 text-accent" />
                <span>
                  UNO AutoCare · {siteConfig.contact.address.street},{" "}
                  {siteConfig.contact.address.zip} {siteConfig.contact.address.city}
                </span>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <Parallax strength={35}>
              <MediaFrame
                alt={`Fahrzeugaufbereitung für Kundschaft aus ${location.name}`}
                label={location.name}
                variant={location.isPrimary ? 1 : 3}
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
            eyebrow="Passende Leistungen"
            title={`Empfohlen für Fahrzeuge aus ${location.name}`}
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-3">
            {highlighted.map((service, i) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.slug} delay={i * 0.08}>
                  <Link
                    href={`/dienstleistungen/${service.slug}`}
                    className="focus-ring group flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-base-black/40 p-7 transition-colors hover:border-accent/40"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <Icon size={20} strokeWidth={1.5} />
                    </span>
                    <h3 className="text-lg font-medium text-white">{service.title}</h3>
                    <p className="text-sm leading-relaxed text-white/55">{service.teaser}</p>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-xs font-medium uppercase tracking-widest2 text-white/70 group-hover:text-accent">
                      Mehr erfahren
                      <ArrowUpRight size={14} />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-base-black py-24 text-center sm:py-28">
        <div className="container-page flex flex-col items-center">
          <Reveal>
            <h2 className="max-w-xl text-3xl font-medium leading-tight tracking-tightest text-white sm:text-4xl">
              Fahrzeugaufbereitung für Kundinnen und Kunden aus {location.name}.
            </h2>
          </Reveal>
          <Reveal delay={0.12} className="mt-8">
            <Button href="/kontakt">Termin anfragen</Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
