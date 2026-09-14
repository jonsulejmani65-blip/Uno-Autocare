"use client";

import { useCallback, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";
import { MediaFrame } from "./MediaFrame";

interface BeforeAfterSliderProps {
  beforeSrc?: string;
  afterSrc?: string;
  beforeAlt?: string;
  afterAlt?: string;
}

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt = "Fahrzeug vor der Aufbereitung",
  afterAlt = "Fahrzeug nach der Aufbereitung",
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative aspect-[16/10] w-full cursor-ew-resize select-none overflow-hidden rounded-2xl sm:aspect-[16/8]"
      onPointerDown={(e) => {
        dragging.current = true;
        updateFromClientX(e.clientX);
      }}
      onPointerMove={(e) => {
        if (dragging.current) updateFromClientX(e.clientX);
      }}
      onPointerUp={() => {
        dragging.current = false;
      }}
      onPointerLeave={() => {
        dragging.current = false;
      }}
    >
      <div className="absolute inset-0">
        <MediaFrame
          src={afterSrc}
          alt={afterAlt}
          label="Nachher"
          variant={1}
          aspect="h-full w-full"
          className="h-full"
        />
      </div>

      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <MediaFrame
          src={beforeSrc}
          alt={beforeAlt}
          label="Vorher"
          variant={3}
          aspect="h-full w-full"
          className="h-full"
        />
      </div>

      <div
        className="pointer-events-none absolute inset-y-0 flex w-0 items-center justify-center"
        style={{ left: `${position}%` }}
      >
        <div className="h-full w-px bg-white/70" />
        <div className="absolute flex h-11 w-11 items-center justify-center rounded-full bg-white text-base-black shadow-lg">
          <MoveHorizontal size={18} />
        </div>
      </div>

      <div className="pointer-events-none absolute left-4 top-4 rounded-full bg-black/50 px-3 py-1 text-[10px] font-medium uppercase tracking-widest2 text-white backdrop-blur-sm">
        Vorher
      </div>
      <div className="pointer-events-none absolute right-4 top-4 rounded-full bg-black/50 px-3 py-1 text-[10px] font-medium uppercase tracking-widest2 text-white backdrop-blur-sm">
        Nachher
      </div>
    </div>
  );
}
