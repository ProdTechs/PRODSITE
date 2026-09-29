import type { CSSProperties } from "react";
import { SERVICES } from "@/lib/content";
import { Cursor } from "@/components/ui/Cursor";
import { ServiceGlyph } from "@/components/ui/Icons";
import { Lines } from "@/components/ui/Lines";
import { Rule } from "@/components/ui/Rule";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Services() {
  return (
    <section id="servicos" className="section-y">
      <div className="container-x">
        <SectionLabel label="O que fazemos" right={`${SERVICES.length} frentes`} />
        <Rule />

        <div className="grid gap-8 pb-14 pt-12 sm:pt-16 lg:grid-cols-12 lg:items-end lg:pb-20">
          <Lines
            lines={["Tudo o que o seu", "negócio precisa rodar."]}
            after={<Cursor />}
            className="display text-[clamp(40px,6vw,88px)] lg:col-span-8"
          />
          <p className="max-w-[40ch] font-mono text-sm leading-relaxed text-muted lg:col-span-4">
            Cada frente funciona sozinha, mas o valor aparece quando elas conversam entre si. A gente desenha o
            sistema inteiro.
          </p>
        </div>

        {/* Grid com linhas de 1px: o fundo do pai aparece nos gaps */}
        <ul className="grid gap-px border border-muted/40 bg-muted/40 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => (
            <li
              key={service.title}
              className="group flex min-h-60 flex-col bg-bg p-6 transition-colors duration-300 hover:bg-ink hover:text-bg sm:p-8"
            >
              <div data-reveal="up" style={{ "--i": i % 4 } as CSSProperties} className="flex flex-1 flex-col">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs text-muted transition-colors group-hover:text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <ServiceGlyph
                    name={service.icon}
                    className="h-7 w-7 text-muted transition-colors group-hover:text-accent"
                  />
                </div>

                <h3 className="mt-auto pt-12 text-[22px] font-medium leading-tight tracking-[-0.03em]">
                  {service.title}
                </h3>
                <p className="mt-3 font-mono text-[13px] leading-relaxed text-muted transition-colors group-hover:text-bg/70">
                  {service.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
