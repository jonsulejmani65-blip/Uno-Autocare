import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-4 ${alignClass}`}>
      {eyebrow && (
        <Reveal>
          <span
            className={`text-xs font-medium uppercase tracking-widest2 ${
              light ? "text-base-black/60" : "text-accent"
            }`}
          >
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2
          className={`max-w-3xl text-4xl font-medium leading-[1.05] tracking-tightest sm:text-5xl md:text-6xl ${
            light ? "text-base-black" : "text-white"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.16}>
          <p
            className={`max-w-xl text-base leading-relaxed sm:text-lg ${
              light ? "text-base-black/70" : "text-white/60"
            }`}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
