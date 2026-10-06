import type { CSSProperties } from "react";
import { HERO, whatsappLink } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Cursor } from "@/components/ui/Cursor";
import { Lines } from "@/components/ui/Lines";
import { Rule } from "@/components/ui/Rule";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Hero() {
  return (
    <section id="inicio" className="pt-[72px]">
      <div className="container-x pt-10 sm:pt-14">
        <SectionLabel label={HERO.labelLeft} right={HERO.labelRight} />
        <Rule />

        <Lines
          as="h1"
          lines={HERO.titleLines}
          after={<Cursor />}
          className="display pb-12 pt-12 text-[clamp(44px,8vw,120px)] sm:pt-16"
        />

        <div className="border-t border-muted/40 py-10 lg:py-12">
          <p
            data-reveal="up"
            style={{ "--i": 3 } as CSSProperties}
            className="max-w-[44ch] font-mono text-[15px] leading-relaxed text-muted"
          >
            {HERO.subtitle}
          </p>

          <div
            data-reveal="up"
            style={{ "--i": 4 } as CSSProperties}
            className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-5"
          >
            <Button href={whatsappLink(HERO.primaryMessage)} variant="ink">
              {HERO.primaryCta}
            </Button>
            <a href="#servicos" className="link-u font-mono text-[13px]">
              {HERO.secondaryCta}
            </a>
          </div>
        </div>

        <div
          data-reveal="up"
          style={{ "--i": 5 } as CSSProperties}
          className="grid grid-cols-3 border-t border-muted/40"
        >
          {HERO.stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`py-6 ${i > 0 ? "border-l border-muted/40 pl-6" : ""}`}
            >
              <p className="font-mono text-[clamp(28px,3vw,40px)] font-medium tracking-[-0.03em]">
                {stat.value}
              </p>
              <p className="mt-1 font-mono text-xs text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
