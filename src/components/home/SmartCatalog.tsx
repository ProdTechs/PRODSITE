import { CATALOG_FLOW, whatsappLink } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Cursor } from "@/components/ui/Cursor";
import { Lines } from "@/components/ui/Lines";
import { Rule } from "@/components/ui/Rule";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CatalogDemo } from "./CatalogDemo";
import { CatalogFlow } from "./CatalogFlow";

export function SmartCatalog() {
  return (
    <section id="catalogo-inteligente" className="section-y border-t border-muted/40">
      <div className="container-x">
        <SectionLabel label="Solução em destaque" right="Catálogo inteligente" />
        <Rule />

        <div className="grid gap-8 pb-16 pt-12 sm:pt-16 lg:grid-cols-12 lg:items-end lg:pb-24">
          <Lines
            lines={["Um catálogo que", "vende sozinho."]}
            after={<Cursor />}
            className="display text-[clamp(40px,6vw,88px)] lg:col-span-8"
          />
          <p className="flex max-w-[42ch] gap-4 font-mono text-sm leading-relaxed text-muted lg:col-span-4">
            <span className="dash mt-2" aria-hidden="true" />
            {CATALOG_FLOW.intro}
          </p>
        </div>

        <CatalogFlow />

        <div className="mt-24 sm:mt-32">
          <div className="flex items-baseline justify-between pb-4">
            <p className="mono-label">Teste agora</p>
            <p className="mono-label text-muted">Demo interativa</p>
          </div>
          <CatalogDemo />
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-6">
          <p className="max-w-[48ch] font-mono text-[13px] leading-relaxed text-muted">
            Isso é uma simulação. No seu negócio, cada etapa é conectada ao seu catálogo, ao seu WhatsApp e ao seu
            time comercial.
          </p>
          <Button href={whatsappLink(CATALOG_FLOW.ctaMessage)}>{CATALOG_FLOW.cta}</Button>
        </div>
      </div>
    </section>
  );
}
