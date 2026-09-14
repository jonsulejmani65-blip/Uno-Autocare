import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ServiceSummary } from "@/lib/services";
import { MediaFrame } from "./MediaFrame";

interface ServiceCardProps {
  service: ServiceSummary;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = service.icon;
  return (
    <Link
      href={`/dienstleistungen/${service.slug}`}
      className="focus-ring group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-base-anthracite transition-all duration-500 hover:border-accent/40"
    >
      <div className="relative overflow-hidden">
        <div className="transition-transform duration-700 ease-out group-hover:scale-[1.06]">
          <MediaFrame
            alt={`${service.title} bei UNO AutoCare`}
            icon={Icon}
            variant={((index % 5) + 1) as 1 | 2 | 3 | 4 | 5}
            aspect="aspect-[4/5]"
            label={service.title}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-base-black/80 via-transparent to-transparent" />
        <span className="absolute left-5 top-5 text-xs font-medium uppercase tracking-widest2 text-white/50">
          0{index + 1}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-center gap-3">
          <Icon size={20} className="text-accent" strokeWidth={1.5} />
          <h3 className="text-xl font-medium text-white">{service.title}</h3>
        </div>
        <p className="text-sm leading-relaxed text-white/55">{service.teaser}</p>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-xs font-medium uppercase tracking-widest2 text-white/70 transition-colors group-hover:text-accent">
          Mehr erfahren
          <ArrowUpRight
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
      </div>
    </Link>
  );
}
