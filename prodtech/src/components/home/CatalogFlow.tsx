"use client";

import { useEffect, useRef, useState } from "react";
import { CATALOG_FLOW } from "@/lib/content";

const STAGES = 5;
const clamp01 = (n: number) => Math.min(Math.max(n, 0), 1);
const pad = (n: number) => String(n).padStart(2, "0");

/** Nível 0 → 5 conforme o diagrama atravessa a viewport. */
function useScrollLevel() {
  const ref = useRef<HTMLDivElement>(null);
  const [level, setLevel] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setLevel(STAGES);
      return;
    }
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = ref.current;
      if (!el) return;
      const vh = window.innerHeight;
      const { top, height } = el.getBoundingClientRect();
      // No mobile o fluxo é vertical e alto: o percurso acompanha a altura.
      const p = clamp01((vh * 0.85 - top) / Math.max(vh * 0.55, height * 0.9));
      setLevel(Math.round(p * STAGES * 100) / 100);
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

  return { ref, level };
}

const isActive = (level: number, i: number) => level >= Math.max(i, 0.02);
const fillOf = (level: number, i: number) => clamp01((level - i - 0.1) / 0.9);

function Node({
  label,
  index,
  active,
  tone = "ink",
}: {
  label: string;
  index: number;
  active: boolean;
  tone?: "ink" | "accent";
}) {
  const on = tone === "accent" ? "border-accent bg-accent text-ink" : "border-ink bg-ink text-bg";
  return (
    <div
      className={`relative flex h-16 items-center border px-4 font-mono text-[13px] transition-colors duration-300 ${
        active ? on : "border-muted/60 bg-bg text-muted"
      }`}
    >
      <span className={`absolute left-2 top-1 text-[10px] ${active ? "opacity-60" : "opacity-80"}`}>{pad(index)}</span>
      <span className="pt-2 leading-tight">{label}</span>
    </div>
  );
}

function Arrow({ className }: { className: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 6 8" className={`h-2 w-1.5 transition-colors ${className}`}>
      <path d="M0 0l6 4-6 4z" fill="currentColor" />
    </svg>
  );
}

/** Conector horizontal que se preenche em --accent conforme o scroll. */
function Connector({ fill }: { fill: number }) {
  return (
    <div aria-hidden="true" className="absolute left-full top-8 flex w-10 items-center">
      <div className="relative h-px flex-1 bg-muted/60">
        <div className="absolute inset-0 origin-left bg-accent" style={{ transform: `scaleX(${fill})` }} />
      </div>
      <Arrow className={fill >= 1 ? "text-accent" : "text-muted/60"} />
    </div>
  );
}

export function CatalogFlow() {
  const { ref, level } = useScrollLevel();
  const { nodes, hot, cold, steps } = CATALOG_FLOW;
  const endActive = isActive(level, 4);

  return (
    <div ref={ref}>
      {/* Desktop: fluxo horizontal */}
      <div className="hidden lg:block">
        <div className="grid grid-cols-5 gap-10">
          {nodes.map((label, i) => (
            <div key={label} className="relative">
              <Node label={label} index={i + 1} active={isActive(level, i)} />
              <Connector fill={fillOf(level, i)} />
            </div>
          ))}
          <div className="relative">
            <Node label={hot} index={5} active={endActive} tone="accent" />
            <div className="mt-4">
              <Node label={cold} index={5} active={endActive} />
            </div>
            {/* Ramificação └──► para o FRIO */}
            <div
              aria-hidden="true"
              className={`absolute -left-5 top-8 h-20 w-5 border-b border-l transition-colors duration-300 ${
                endActive ? "border-ink" : "border-muted/60"
              }`}
            />
          </div>
        </div>

        <ol className="mt-12 grid grid-cols-5 gap-10 border-t border-muted/40 pt-6">
          {steps.map((step, i) => (
            <li key={step} className="font-mono text-[13px] leading-relaxed">
              <span className={`transition-colors ${isActive(level, i) ? "text-accent" : "text-muted"}`}>{pad(i + 1)}</span>
              <p className={`mt-2 transition-colors ${isActive(level, i) ? "text-ink" : "text-muted"}`}>{step}</p>
            </li>
          ))}
        </ol>
      </div>

      {/* Mobile: fluxo vertical */}
      <ol className="lg:hidden">
        {steps.map((step, i) => {
          const active = isActive(level, i);
          const last = i === steps.length - 1;
          return (
            <li key={step} className="relative grid grid-cols-[1fr] pb-8 pl-8 last:pb-0">
              <span
                aria-hidden="true"
                className={`absolute left-0 top-0 h-3 w-3 border transition-colors ${
                  active ? "border-accent bg-accent" : "border-muted bg-bg"
                }`}
              />
              {!last && (
                <span aria-hidden="true" className="absolute bottom-0 left-[5.5px] top-3 w-px bg-muted/60">
                  <span
                    className="absolute inset-0 origin-top bg-accent"
                    style={{ transform: `scaleY(${fillOf(level, i)})` }}
                  />
                </span>
              )}
              {last ? (
                <div className="grid grid-cols-2 gap-2">
                  <Node label={hot} index={5} active={active} tone="accent" />
                  <Node label={cold} index={5} active={active} />
                </div>
              ) : (
                <Node label={nodes[i]} index={i + 1} active={active} />
              )}
              <p className={`mt-3 font-mono text-[13px] leading-relaxed ${active ? "text-ink" : "text-muted"}`}>
                {step}
              </p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
