import { Breadcrumbs, type BreadcrumbItem } from "@/components/seo/Breadcrumbs";
import { Reveal } from "@/components/ui/Reveal";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  breadcrumbs: BreadcrumbItem[];
}

export function PageHero({ eyebrow, title, subtitle, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-base-black pb-16 pt-36 sm:pb-20 sm:pt-44">
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 50% at 20% 0%, rgba(201,163,78,0.12), transparent 60%)",
        }}
      />
      <div className="grain-overlay" />
      <div className="container-page relative">
        <Breadcrumbs items={breadcrumbs} />
        <Reveal delay={0.05}>
          <span className="mt-6 block text-xs font-medium uppercase tracking-widest2 text-accent">
            {eyebrow}
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-4 max-w-3xl text-5xl font-medium leading-[1.02] tracking-tightest text-white sm:text-6xl md:text-7xl">
            {title}
          </h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={0.18}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
              {subtitle}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
