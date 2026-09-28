import { CASES, SHOW_TESTIMONIALS, TESTIMONIALS } from "@/lib/content";
import { Cursor } from "@/components/ui/Cursor";
import { Lines } from "@/components/ui/Lines";
import { Rule } from "@/components/ui/Rule";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CasesList } from "./CasesList";
import { Testimonials } from "./Testimonials";

export function Cases() {
  return (
    <section id="cases" className="section-y">
      <div className="container-x">
        <SectionLabel index={6} label="Cases" right={`${CASES.length} soluções`} />
        <Rule />

        <div className="grid gap-8 pb-14 pt-12 sm:pt-16 lg:grid-cols-12 lg:items-end lg:pb-20">
          <Lines
            lines={["Soluções que", "já sabemos construir."]}
            after={<Cursor />}
            className="display text-[clamp(40px,6vw,88px)] lg:col-span-8"
          />
          <p className="max-w-[40ch] font-mono text-sm leading-relaxed text-muted lg:col-span-4">
            Cada linha é um tipo de projeto com desafio, solução, stack e resultado esperado. Abra para ver o
            conceito completo.
          </p>
        </div>

        <CasesList />

        {SHOW_TESTIMONIALS && TESTIMONIALS.length > 0 && <Testimonials items={TESTIMONIALS} />}
      </div>
    </section>
  );
}
