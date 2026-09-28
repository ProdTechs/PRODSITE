"use client";

import { useEffect, useRef, useState } from "react";
import { whatsappLink } from "@/lib/content";
import { WhatsAppGlyph } from "@/components/ui/Icons";

// Perímetro do quadrado de progresso (44×44, traço centrado a 1px da borda).
const SIDE = 42;
const PERIMETER = SIDE * 4;

export function FloatingButtons() {
  const [visible, setVisible] = useState(false);
  const rectRef = useRef<SVGRectElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      setVisible(window.scrollY > 600);
      rectRef.current?.setAttribute("stroke-dashoffset", String(PERIMETER * (1 - progress)));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const toTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-center gap-3 sm:bottom-8 sm:right-8">
      <button
        type="button"
        onClick={toTop}
        aria-label="Voltar ao topo"
        tabIndex={visible ? 0 : -1}
        className={`relative flex h-11 w-11 items-center justify-center border border-ink bg-bg font-mono text-base transition-[opacity,translate,background-color] duration-300 hover:bg-ink hover:text-bg ${
          visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute -inset-px h-11 w-11"
          viewBox="0 0 44 44"
          fill="none"
        >
          <rect
            ref={rectRef}
            x="1"
            y="1"
            width={SIDE}
            height={SIDE}
            stroke="var(--accent)"
            strokeWidth="2"
            strokeDasharray={PERIMETER}
            strokeDashoffset={PERIMETER}
          />
        </svg>
        ↑
      </button>

      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale com a gente pelo WhatsApp"
        className="group relative flex h-14 w-14 items-center justify-center bg-ink text-bg transition-colors duration-200 hover:bg-accent hover:text-ink"
      >
        <WhatsAppGlyph className="h-6 w-6" />
        <span className="pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap border border-ink bg-bg px-3 py-2 font-mono text-xs text-ink opacity-0 transition-[opacity,translate] duration-200 group-hover:-translate-x-1 group-hover:opacity-100 group-focus-visible:opacity-100">
          Fale com a gente<span className="text-accent">_</span>
        </span>
      </a>
    </div>
  );
}
