import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung von UNO AutoCare.",
  alternates: { canonical: "/datenschutz" },
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <>
      <PageHero
        eyebrow="Rechtliches"
        title="Datenschutz"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Datenschutz", href: "/datenschutz" },
        ]}
      />
      <section className="bg-base-black py-20 sm:py-28">
        <div className="container-page max-w-2xl space-y-8 text-sm leading-relaxed text-white/65">
          <p>
            Der Schutz deiner persönlichen Daten ist uns wichtig. Diese Datenschutzerklärung
            informiert darüber, welche Daten beim Besuch dieser Website erhoben und wie sie
            verwendet werden.
          </p>

          <div>
            <h2 className="mb-2 text-lg font-medium text-white">Verantwortliche Stelle</h2>
            <p>
              {siteConfig.name}, {siteConfig.contact.address.street},{" "}
              {siteConfig.contact.address.zip} {siteConfig.contact.address.city}
              <br />
              E-Mail: {siteConfig.contact.email}
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-medium text-white">Kontaktformular</h2>
            <p>
              Wenn du unser Kontaktformular nutzt, werden die von dir angegebenen Daten (Name,
              E-Mail, Telefon, Fahrzeug, Nachricht) über dein E-Mail-Programm an uns übermittelt
              und ausschliesslich zur Bearbeitung deiner Anfrage verwendet.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-medium text-white">Cookies &amp; Analyse</h2>
            <p>
              Diese Website verwendet aktuell keine Analyse- oder Marketing-Cookies. Sollte sich
              dies ändern, wird diese Datenschutzerklärung entsprechend aktualisiert.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-medium text-white">Deine Rechte</h2>
            <p>
              Du hast jederzeit das Recht auf Auskunft, Berichtigung und Löschung deiner bei uns
              gespeicherten personenbezogenen Daten. Kontaktiere uns dazu einfach per E-Mail.
            </p>
          </div>

          <p className="text-white/40">
            Platzhalter – diese Datenschutzerklärung wird bei Bedarf ergänzt, sobald weitere
            Dienste (z. B. Analyse-Tools) zum Einsatz kommen.
          </p>
        </div>
      </section>
    </>
  );
}
