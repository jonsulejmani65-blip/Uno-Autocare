import Link from "next/link";
import { Instagram, Facebook, Music2 } from "lucide-react";
import { siteConfig, mainNav } from "@/lib/site-config";
import { services } from "@/lib/services";
import { getAllLocations } from "@/lib/locations";

export function Footer() {
  const locations = getAllLocations();

  return (
    <footer className="relative border-t border-white/10 bg-base-black">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-5 lg:gap-8 lg:py-20">
        <div className="lg:col-span-2">
          <Link href="/" className="text-xl font-medium tracking-tightest text-white">
            UNO <span className="text-accent">AutoCare</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
            Autopflege &amp; Fahrzeugaufbereitung
            <br />
            Recherswil / Region Solothurn
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={siteConfig.social.instagram}
              aria-label="UNO AutoCare auf Instagram"
              className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-accent hover:text-accent"
            >
              <Instagram size={16} />
            </a>
            <a
              href={siteConfig.social.facebook}
              aria-label="UNO AutoCare auf Facebook"
              className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-accent hover:text-accent"
            >
              <Facebook size={16} />
            </a>
            <a
              href={siteConfig.social.tiktok}
              aria-label="UNO AutoCare auf TikTok"
              className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-accent hover:text-accent"
            >
              <Music2 size={16} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-medium uppercase tracking-widest2 text-white/40">
            Navigation
          </h3>
          <ul className="mt-5 flex flex-col gap-3">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="focus-ring text-sm text-white/65 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-medium uppercase tracking-widest2 text-white/40">
            Dienstleistungen
          </h3>
          <ul className="mt-5 flex flex-col gap-3">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/dienstleistungen/${service.slug}`}
                  className="focus-ring text-sm text-white/65 transition-colors hover:text-white"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-medium uppercase tracking-widest2 text-white/40">
            Standorte
          </h3>
          <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {locations.map((loc) => (
              <li key={loc.slug}>
                <Link
                  href={`/standorte/${loc.slug}`}
                  className="focus-ring text-sm text-white/65 transition-colors hover:text-white"
                >
                  {loc.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-page flex flex-col gap-4 border-t border-white/10 py-6 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. Alle Rechte vorbehalten.
        </p>
        <div className="flex gap-6">
          <Link href="/impressum" className="focus-ring hover:text-white/70">
            Impressum
          </Link>
          <Link href="/datenschutz" className="focus-ring hover:text-white/70">
            Datenschutz
          </Link>
        </div>
      </div>
    </footer>
  );
}
