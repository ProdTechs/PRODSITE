"use client";

import Link from "next/link";
import { useRef, useState, type PointerEvent } from "react";
import { CASES } from "@/lib/content";
import { CasePreview } from "@/components/ui/CasePreview";

/** Lista editorial de cases; no hover a prévia P&B segue o cursor. */
export function CasesList() {
  const [hovered, setHovered] = useState<number | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  const onMove = (e: PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    const el = previewRef.current;
    if (el) el.style.transform = `translate3d(${e.clientX + 24}px, ${e.clientY - 110}px, 0)`;
  };

  return (
    <div onPointerMove={onMove} onPointerLeave={() => setHovered(null)}>
      <ul className="border-t border-muted/40">
        {CASES.map((c, i) => (
          <li key={c.slug} className="border-b border-muted/40">
            <Link
              href={`/cases/${c.slug}`}
              onPointerEnter={(e) => e.pointerType === "mouse" && setHovered(i)}
              onFocus={() => setHovered(null)}
              className="group grid grid-cols-[40px_1fr_auto] items-baseline gap-x-4 gap-y-2 py-7 transition-colors duration-300 hover:bg-ink hover:text-bg sm:py-9 md:grid-cols-[64px_minmax(0,1.6fr)_minmax(0,0.6fr)_minmax(0,1fr)_40px] md:px-4"
            >
              <span className="font-mono text-xs text-muted transition-colors group-hover:text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[clamp(22px,2.6vw,36px)] font-medium leading-tight tracking-[-0.035em] transition-transform duration-300 group-hover:translate-x-2">
                {c.title}
              </span>
              <span className="col-start-2 font-mono text-[13px] text-muted transition-colors group-hover:text-bg/60 md:col-start-auto">
                {c.sector}
              </span>
              <span className="col-start-2 font-mono text-[13px] transition-colors md:col-start-auto">
                {c.tags.join(" · ")}
              </span>
              <span
                aria-hidden="true"
                className="col-start-3 row-start-1 justify-self-end font-mono transition-[color,translate] duration-300 group-hover:translate-x-1 group-hover:text-accent md:col-start-auto md:row-start-auto"
              >
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <div
        ref={previewRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-30 hidden w-[320px] md:block"
      >
        {CASES.map((c, i) => (
          <div
            key={c.slug}
            className={`absolute inset-x-0 top-0 transition-[opacity,clip-path] duration-300 ${
              hovered === i ? "opacity-100 [clip-path:inset(0)]" : "opacity-0 [clip-path:inset(0_0_100%_0)]"
            }`}
          >
            <CasePreview kind={c.preview} className="block w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
