"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainNav, siteConfig } from "@/lib/site-config";
import { MobileMenu } from "./MobileMenu";
import { Menu } from "lucide-react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-white/10 bg-base-black/80 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="container-page flex h-[72px] items-center justify-between">
          <Link
            href="/"
            className="focus-ring flex items-baseline gap-2 text-lg font-medium tracking-tightest text-white"
          >
            UNO
            <span className="text-accent">AutoCare</span>
          </Link>

          <nav className="hidden items-center gap-9 lg:flex">
            {mainNav.map((item) => {
              const active =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`focus-ring relative text-sm font-medium uppercase tracking-widest2 transition-colors ${
                    active ? "text-white" : "text-white/55 hover:text-white"
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute -bottom-2 left-0 h-px w-full bg-accent" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Link
              href="/kontakt"
              className="focus-ring inline-flex items-center rounded-full bg-accent px-6 py-2.5 text-xs font-medium uppercase tracking-widest2 text-base-black transition-colors hover:bg-accent-light"
            >
              Termin anfragen
            </Link>
          </div>

          <button
            aria-label="Menü öffnen"
            onClick={() => setMenuOpen(true)}
            className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white lg:hidden"
          >
            <Menu size={18} />
          </button>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} pathname={pathname} />

      <a
        href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
        className="sr-only"
      >
        {siteConfig.contact.phoneDisplay}
      </a>
    </>
  );
}
