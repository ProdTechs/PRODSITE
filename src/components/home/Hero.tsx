import type { CSSProperties } from "react";
import { HERO, whatsappLink } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Cursor } from "@/components/ui/Cursor";
import { Lines } from "@/components/ui/Lines";
import { Rule } from "@/components/ui/Rule";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TerminalDemo } from "./TerminalDemo";

export function Hero() {
  return (
    <section id="inicio" className="pt-[72px]">
      <div className="container-x pt-10 sm:pt-14">
        <SectionLabel index={1} label={HERO.labelLeft} right={HERO.labelRight} />
        <Rule />

        <Lines
          as="h1"
          lines={HERO.titleLines}
          after={<Cursor />}
          className="display pb-12 pt-12 text-[clamp(44px,8vw,120px)] sm:pt-16"
        />

        <div className="grid border-t border-muted/40 lg:grid-cols-12">
          <div className="flex flex-col justify-between gap-10 py-10 lg:col-span-5 lg:border-r lg:border-muted/40 lg:py-12 lg:pr-12">
            <p
              data-reveal="up"
              style={{ "--i": 3 } as CSSProperties}
              className="max-w-[44ch] font-mono text-[15px] leading-relaxed text-muted"
            >
              {HERO.subtitle}
            </p>
            <div data-reveal="up" style={{ "--i": 4 } as CSSProperties} className="flex flex-wrap items-center gap-x-8 gap-y-5">
              <Button href={whatsappLink(HERO.primaryMessage)}>{HERO.primaryCta}</Button>
              <a href="#servicos" className="link-u link-u--base font-mono text-[13px]">
                {HERO.secondaryCta}
              </a>
            </div>
          </div>
          <div className="pb-10 lg:col-span-7 lg:py-12 lg:pl-12">
            <TerminalDemo />
          </div>
        </div>
      </div>

      {/* Faixa de números */}
      <div className="border-y border-muted/40">
        <dl className="container-x grid grid-cols-1 sm:grid-cols-3">
          {HERO.stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex items-baseline gap-4 py-6 ${i > 0 ? "border-t border-muted/40 sm:border-l sm:border-t-0 sm:pl-8" : ""}`}
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-mono text-2xl tracking-tight">{stat.value}</dd>
              <dd className="mono-label text-muted">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
