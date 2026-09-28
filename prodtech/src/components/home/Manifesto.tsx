import type { CSSProperties } from "react";
import { MANIFESTO } from "@/lib/content";
import { Cursor } from "@/components/ui/Cursor";
import { Lines } from "@/components/ui/Lines";
import { Rule } from "@/components/ui/Rule";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Manifesto() {
  return (
    <section id="manifesto" className="section-y bg-ink text-bg">
      <div className="container-x">
        <SectionLabel index={2} label={MANIFESTO.label} right="Por que a ProdTech" tone="dark" />
        <Rule className="text-bg/15" />

        <div className="flex gap-5 pt-14 sm:gap-8 sm:pt-20">
          <span className="dash mt-[0.55em] sm:mt-[0.7em]" aria-hidden="true" />
          <Lines
            as="blockquote"
            lines={MANIFESTO.quote}
            className="max-w-[22ch] text-[clamp(32px,5.2vw,76px)] font-medium leading-[1.02] tracking-[-0.04em]"
          />
        </div>

        <div className="mt-20 sm:mt-28">
          <div aria-hidden="true" className="grid grid-cols-[48px_1fr] sm:grid-cols-[80px_1fr_1fr]">
            <span className="mono-label col-start-2 hidden pb-4 text-bg/55 sm:block">O mercado faz</span>
            <span className="mono-label col-start-2 pb-4 sm:col-start-3">
              A ProdTech faz<span className="text-accent">_</span>
            </span>
          </div>
          <ol>
            {MANIFESTO.rows.map((row, i) => (
              <li key={row.ours}>
                <Rule className="text-bg/15" delay={i} />
                <div
                  data-reveal="up"
                  style={{ "--i": i } as CSSProperties}
                  className="grid grid-cols-[48px_1fr] gap-y-2 py-7 sm:grid-cols-[80px_1fr_1fr] sm:py-9"
                >
                  <span aria-hidden="true" className="font-mono text-xs text-bg/55 sm:pt-2">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-mono text-[13px] text-muted line-through decoration-muted/70 decoration-1 sm:pr-8 sm:pt-2 sm:text-sm">
                    <span className="sr-only">O mercado faz: </span>
                    {row.common}
                  </p>
                  <p className="col-start-2 text-[clamp(22px,2.4vw,32px)] font-medium leading-tight tracking-[-0.03em] sm:col-start-3">
                    <span className="sr-only">A ProdTech faz: </span>
                    {row.ours}
                    <Cursor blink={false} />
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <Rule className="text-bg/15" delay={3} />
        </div>
      </div>
    </section>
  );
}
