"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const sceneY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const sceneScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-base-black">
      {/* Fallback / Basis-Szene – Video legt sich darüber, sobald verfügbar */}
      <motion.div
        style={{ y: sceneY, scale: sceneScale }}
        className="disable-parallax-mobile absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#1c1d22] via-[#111216] to-[#0a0a0b]" />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 70% 60% at 50% 65%, rgba(201,163,78,0.14), transparent 70%)",
          }}
        />
        <div className="grain-overlay" />

        {/* Platzhalter für: /videos/uno-autocare-hero.mp4 */}
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-70"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
        >
          <source src="/videos/uno-autocare-hero.mp4" type="video/mp4" />
        </video>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-base-black/40 via-transparent to-base-black" />
      <div className="absolute inset-0 bg-gradient-to-r from-base-black/70 via-transparent to-base-black/40" />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="disable-parallax-mobile container-page relative flex h-full flex-col justify-end pb-24 pt-32 sm:pb-28 md:justify-center md:pb-0"
      >
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-medium uppercase tracking-widest2 text-white/70 backdrop-blur-sm"
        >
          Premium Fahrzeugaufbereitung · Recherswil
        </motion.span>

        <h1 className="max-w-4xl text-[13vw] font-medium leading-[0.95] tracking-tightest text-white sm:text-7xl md:text-8xl lg:text-[7.5rem]">
          {["Dein Auto.", "Unser Detail."].map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.9, delay: 0.15 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className={`block ${i === 1 ? "text-gradient-gold" : ""}`}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-md text-base leading-relaxed text-white/65 sm:text-lg"
        >
          Professionelle Fahrzeugaufbereitung in Recherswil und der Region Solothurn.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <Link
            href="/kontakt"
            className="focus-ring group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-medium uppercase tracking-widest2 text-base-black transition-colors hover:bg-accent-light"
          >
            Termin anfragen
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
          <Link
            href="/dienstleistungen"
            className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-medium uppercase tracking-widest2 text-white transition-colors hover:border-white/60"
          >
            Dienstleistungen entdecken
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/40 md:flex"
      >
        <span className="text-[10px] uppercase tracking-widest2">Scroll</span>
        <ArrowDown size={16} />
      </motion.div>
    </section>
  );
}
