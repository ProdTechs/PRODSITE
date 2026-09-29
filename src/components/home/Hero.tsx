import type { CSSProperties } from "react";
import { HERO } from "@/lib/content";
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
        </div>
      </div>
    </section>
  );
}
