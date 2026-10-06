import { FAQ_ITEMS } from "@/lib/content";
import { Cursor } from "@/components/ui/Cursor";
import { Lines } from "@/components/ui/Lines";
import { Rule } from "@/components/ui/Rule";
import { SectionLabel } from "@/components/ui/SectionLabel";

const pad = (n: number) => String(n).padStart(2, "0");

export function Faq() {
  return (
    <section id="faq" className="section-y">
      <div className="container-x">
        <SectionLabel label="Perguntas frequentes" right={`${FAQ_ITEMS.length} respostas`} />
        <Rule />

        <Lines
          as="h2"
          lines={["Dúvidas comuns", "sobre a ProdTech."]}
          after={<Cursor />}
          className="display pb-14 pt-12 text-[clamp(38px,6vw,80px)] sm:pt-16"
        />

        <dl className="border-t border-muted/40">
          {FAQ_ITEMS.map((item, i) => (
            <div key={item.question} className="grid gap-4 border-b border-muted/40 py-8 md:grid-cols-[48px_1fr_1fr] md:items-start">
              <span aria-hidden="true" className="font-mono text-sm text-accent">
                {pad(i + 1)}
              </span>
              <dt className="text-lg font-medium tracking-[-0.03em]">{item.question}</dt>
              <dd className="max-w-[52ch] font-mono text-sm leading-relaxed text-muted">
                {item.answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
