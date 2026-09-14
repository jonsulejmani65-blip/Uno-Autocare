import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { Camera } from "lucide-react";

const gradients: Record<number, string> = {
  1: "from-[#1e2025] via-[#15161a] to-[#0a0a0b]",
  2: "from-[#242017] via-[#17151a] to-[#0a0a0b]",
  3: "from-[#191b1f] via-[#111216] to-[#0a0a0b]",
  4: "from-[#20191a] via-[#15161a] to-[#0a0a0b]",
  5: "from-[#1c1e22] via-[#141418] to-[#0a0a0b]",
};

interface MediaFrameProps {
  /** Wenn ein echtes Bild vorhanden ist, hier den Pfad/Import angeben – ersetzt automatisch den Platzhalter. */
  src?: string;
  alt: string;
  label?: string;
  icon?: LucideIcon;
  variant?: 1 | 2 | 3 | 4 | 5;
  aspect?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export function MediaFrame({
  src,
  alt,
  label,
  icon: Icon = Camera,
  variant = 1,
  aspect = "aspect-[4/5]",
  className = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: MediaFrameProps) {
  if (src) {
    return (
      <div className={`relative overflow-hidden ${aspect} ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br ${gradients[variant]} ${aspect} ${className}`}
      role="img"
      aria-label={alt}
    >
      <div className="grain-overlay" />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, transparent, transparent 2px, rgba(255,255,255,0.6) 2px, transparent 4px)",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <Icon size={40} strokeWidth={1} className="text-white/10" />
      </div>
      <div className="absolute inset-0 ring-1 ring-inset ring-white/[0.06]" />
      {label && (
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-2">
          <span className="text-[10px] font-medium uppercase tracking-widest2 text-white/35">
            {label}
          </span>
          <span className="text-[10px] font-medium uppercase tracking-widest2 text-white/20">
            Platzhalter
          </span>
        </div>
      )}
    </div>
  );
}
