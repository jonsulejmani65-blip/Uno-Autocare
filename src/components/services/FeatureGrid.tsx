import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export interface FeatureItem {
  icon: LucideIcon;
  label: string;
  description?: string;
}

export function FeatureGrid({ items }: { items: FeatureItem[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => {
        const Icon = item.icon;
        return (
          <Reveal key={item.label} delay={i * 0.05}>
            <div className="flex h-full flex-col gap-3 rounded-2xl border border-white/10 bg-base-anthracite-light/40 p-6 transition-colors hover:border-accent/30">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                <Icon size={18} strokeWidth={1.5} />
              </span>
              <span className="text-base font-medium text-white">{item.label}</span>
              {item.description && (
                <p className="text-sm leading-relaxed text-white/55">{item.description}</p>
              )}
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
