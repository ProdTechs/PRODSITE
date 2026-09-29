import type { CSSProperties } from "react";
import { PROCESS } from "@/lib/content";
import { Cursor } from "@/components/ui/Cursor";
import { Lines } from "@/components/ui/Lines";
import { Rule } from "@/components/ui/Rule";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Process() {
  return (
    <section id="processo" className="section-y bg-ink text-bg">
      <div className="container-x">
        <SectionLabel label="Como trabalhamos" right={`${PROCESS.length} etapas`} tone="dark" />
        <Rule className="text-bg/15" />

        <Lines
          lines={["Do diagnóstico", "à evolução contínua."]}
          after={<Cursor />}
          className="display pb-16 pt-12 text-[clamp(40px,6vw,88px)] sm:pt-16 lg:pb-24"
        />

        <ol className="relative grid gap-12 lg:grid-cols-5 lg:gap-8">
          {/* Linha que conecta as etapas (desktop) */}
          <div aria-hidden="true" className="absolute inset-x-0 top-[5.5px] hidden lg:block">
            <Rule className="text-bg/30" />
          </div>
          {/* Linha vertical (mobile) */}
          <span aria-hidden="true" className="absolute bottom-0 left-[5.5px] top-2 w-px bg-bg/20 lg:hidden" />

          {PROCESS.map((step, i) => (
            <li
              key={step.title}
              data-reveal="up"
              style={{ "--i": i } as CSSProperties}
              className="relative pl-10 lg:pl-0"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 block h-3 w-3 border border-bg bg-ink lg:static"
              />
              <p className="font-mono text-[clamp(48px,5vw,72px)] leading-none tracking-[-0.04em] lg:mt-10">
                {String(i + 1).padStart(2, "0")}
                {i === PROCESS.length - 1 && <span className="text-accent">_</span>}
              </p>
              <h3 className="mt-6 text-xl font-medium tracking-[-0.03em]">{step.title}</h3>
              <p className="mt-3 max-w-[30ch] font-mono text-[13px] leading-relaxed text-bg/60">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
