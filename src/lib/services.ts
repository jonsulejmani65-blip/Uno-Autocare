import type { LucideIcon } from "lucide-react";
import { Sparkles, Droplets, Gauge, Car } from "lucide-react";

export type ServiceSlug =
  | "detailing"
  | "polierung"
  | "innenreinigung"
  | "aussenreinigung";

export interface ServiceSummary {
  slug: ServiceSlug;
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  teaser: string;
  ctaLabel: string;
}

export const services: ServiceSummary[] = [
  {
    slug: "detailing",
    title: "Detailing",
    shortTitle: "Detailing",
    icon: Sparkles,
    teaser:
      "Umfassende Fahrzeugaufbereitung mit Liebe zum Detail – innen und aussen, Schritt für Schritt zur Bestform.",
    ctaLabel: "Detailing anfragen",
  },
  {
    slug: "polierung",
    title: "Polierung",
    shortTitle: "Polierung",
    icon: Gauge,
    teaser:
      "Professionelle Lackaufbereitung für mehr Tiefenglanz und ein deutlich verbessertes Lackbild.",
    ctaLabel: "Polierung anfragen",
  },
  {
    slug: "innenreinigung",
    title: "Innenreinigung",
    shortTitle: "Innenreinigung",
    icon: Car,
    teaser:
      "Sitze, Teppiche, Cockpit und Verkleidungen – gründlich gereinigt und gepflegt bis ins letzte Detail.",
    ctaLabel: "Innenreinigung anfragen",
  },
  {
    slug: "aussenreinigung",
    title: "Aussenreinigung",
    shortTitle: "Aussenreinigung",
    icon: Droplets,
    teaser:
      "Sorgfältige Handwäsche, Felgenreinigung und Lackpflege für ein makelloses äusseres Erscheinungsbild.",
    ctaLabel: "Aussenreinigung anfragen",
  },
];

export function getService(slug: string): ServiceSummary | undefined {
  return services.find((s) => s.slug === slug);
}
