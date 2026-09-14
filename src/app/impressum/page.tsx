import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und rechtliche Angaben von UNO AutoCare.",
  alternates: { canonical: "/impressum" },
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <>
      <PageHero
        eyebrow="Rechtliches"
        title="Impressum"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Impressum", href: "/impressum" },
        ]}
      />
      <section className="bg-base-black py-20 sm:py-28">
        <div className="container-page max-w-2xl space-y-8 text-sm leading-relaxed text-white/65">
          <div>
            <h2 className="mb-2 text-lg font-medium text-white">Anbieter</h2>
            <p>
              {siteConfig.name}
              <br />
              {siteConfig.contact.address.street}
              <br />
              {siteConfig.contact.address.zip} {siteConfig.contact.address.city}
              <br />
              Schweiz
            </p>
            <p className="mt-3 text-white/40">
              Platzhalter – Rechtsform, Handelsregister-Nummer und UID folgen, sobald bekannt.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-medium text-white">Kontakt</h2>
            <p>
              Telefon: {siteConfig.contact.phoneDisplay}
              <br />
              E-Mail: {siteConfig.contact.email}
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-medium text-white">Haftungsausschluss</h2>
            <p>
              Alle Angaben auf dieser Website erfolgen ohne Gewähr. {siteConfig.name} übernimmt
              keine Haftung für die Aktualität, Richtigkeit und Vollständigkeit der
              bereitgestellten Informationen.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-medium text-white">Urheberrecht</h2>
            <p>
              Die Inhalte dieser Website sind urheberrechtlich geschützt. Eine Vervielfältigung
              oder Verwendung ohne ausdrückliche Zustimmung ist nicht gestattet.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
