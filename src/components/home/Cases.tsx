import { SHOW_TESTIMONIALS, TESTIMONIALS } from "@/lib/content";
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
        <SectionLabel label="Cases" />
        <Rule />

        <Lines
          lines={["Soluções que", "já sabemos construir."]}
          after={<Cursor />}
          className="display pb-12 pt-12 text-[clamp(40px,6vw,88px)] sm:pt-16 lg:pb-16"
        />

        <CasesList />

        {SHOW_TESTIMONIALS && TESTIMONIALS.length > 0 && <Testimonials items={TESTIMONIALS} />}
      </div>
    </section>
  );
}
