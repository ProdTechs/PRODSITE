import { FINAL_CTA, whatsappLink } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Cursor } from "@/components/ui/Cursor";
import { Lines } from "@/components/ui/Lines";
import { Rule } from "@/components/ui/Rule";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { LeadForm } from "./LeadForm";

export function FinalCta({ index = 7, total }: { index?: number; total?: number }) {
  return (
    <section id="contato" className="section-y bg-ink text-bg">
      <div className="container-x">
        <SectionLabel index={index} total={total} label="Contato" right="Diagnóstico gratuito" tone="dark" />
        <Rule className="text-bg/15" />

        <div className="grid gap-16 pt-12 sm:pt-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Lines
              lines={["Qual é a dor do", "seu negócio hoje?"]}
              after={<Cursor />}
              className="display text-[clamp(40px,6.4vw,96px)]"
            />
            <p className="mt-8 max-w-[44ch] font-mono text-[15px] leading-relaxed text-bg/60">{FINAL_CTA.subtitle}</p>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
              <Button href={whatsappLink(FINAL_CTA.primaryMessage)} variant="accent">
                {FINAL_CTA.primary}
              </Button>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="link-u link-u--base font-mono text-[13px]"
              >
                {FINAL_CTA.secondary}
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 lg:border-l lg:border-bg/15 lg:pl-12">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
