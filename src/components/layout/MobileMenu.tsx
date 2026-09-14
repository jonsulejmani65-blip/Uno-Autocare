"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { mainNav } from "@/lib/site-config";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  pathname: string;
}

export function MobileMenu({ open, onClose, pathname }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[60] flex flex-col bg-base-black lg:hidden"
        >
          <div className="container-page flex h-[72px] items-center justify-between">
            <span className="text-lg font-medium tracking-tightest text-white">
              UNO <span className="text-accent">AutoCare</span>
            </span>
            <button
              aria-label="Menü schliessen"
              onClick={onClose}
              className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white"
            >
              <X size={18} />
            </button>
          </div>

          <nav className="container-page flex flex-1 flex-col justify-center gap-2">
            {mainNav.map((item, i) => {
              const active =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={item.href}
                    className={`focus-ring block py-3 text-4xl font-medium tracking-tightest ${
                      active ? "text-accent" : "text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          <div className="container-page pb-10">
            <Link
              href="/kontakt"
              className="focus-ring flex w-full items-center justify-center rounded-full bg-accent px-6 py-4 text-sm font-medium uppercase tracking-widest2 text-base-black"
            >
              Termin anfragen
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
