import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  icon?: boolean;
}

const variants: Record<string, string> = {
  primary:
    "bg-accent text-base-black hover:bg-accent-light shadow-[0_0_0_1px_rgba(201,163,78,0.4)]",
  secondary:
    "bg-transparent text-white border border-white/25 hover:border-white/60 hover:bg-white/5",
  ghost: "bg-transparent text-white/80 hover:text-white",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  icon = true,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`focus-ring group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium uppercase tracking-widest2 transition-all duration-300 ${variants[variant]} ${className}`}
    >
      <span>{children}</span>
      {icon && (
        <ArrowUpRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </Link>
  );
}
