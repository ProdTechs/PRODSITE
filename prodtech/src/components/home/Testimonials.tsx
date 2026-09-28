"use client";

import { useState } from "react";

type Item = { quote: string; author: string; company: string };

const pad = (n: number) => String(n).padStart(2, "0");

/** Slider simples: um depoimento por vez. Só renderizado com depoimentos reais. */
export function Testimonials({ items }: { items: Item[] }) {
  const [index, setIndex] = useState(0);
  const go = (delta: number) => setIndex((i) => (i + delta + items.length) % items.length);
  const t = items[index];

  return (
    <div className="mt-24 border-t border-muted/40 pt-6 sm:mt-32">
      <p className="mono-label text-muted">Depoimentos</p>
      <figure key={index} className="mt-12 flex gap-5 sm:gap-8" aria-live="polite">
        <span className="dash mt-[0.6em]" aria-hidden="true" />
        <div>
          <blockquote className="max-w-[28ch] text-[clamp(28px,3.6vw,52px)] font-medium leading-[1.08] tracking-[-0.04em]">
            {t.quote}
          </blockquote>
          <figcaption className="mt-8 font-mono text-[13px]">
            {t.author} <span className="text-muted">— {t.company}</span>
          </figcaption>
        </div>
      </figure>
      {items.length > 1 && (
        <div className="mt-10 flex items-center gap-6 font-mono text-[13px]">
          <button type="button" onClick={() => go(-1)} aria-label="Depoimento anterior" className="hover:text-accent">
            ←
          </button>
          <span>
            {pad(index + 1)} / {pad(items.length)}
          </span>
          <button type="button" onClick={() => go(1)} aria-label="Próximo depoimento" className="hover:text-accent">
            →
          </button>
        </div>
      )}
    </div>
  );
}
