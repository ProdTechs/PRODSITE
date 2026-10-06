import { Cursor } from "@/components/ui/Cursor";
import { Lines } from "@/components/ui/Lines";
import { Rule } from "@/components/ui/Rule";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="pt-[72px]">
      <div className="container-x pb-24 pt-10 sm:pt-14">
        <p className="mono-label text-muted">Erro 404</p>
        <Rule />
        <Lines
          as="h1"
          lines={["Página não", "encontrada."]}
          after={<Cursor />}
          className="display pb-8 pt-12 text-[clamp(40px,7vw,104px)] sm:pt-16"
        />
        <p className="max-w-[44ch] font-mono text-[15px] leading-relaxed text-muted">
          O endereço que você tentou acessar não existe ou foi movido.
        </p>
        <div className="mt-10">
          <Button href="/" variant="ink">
            Voltar ao início
          </Button>
        </div>
      </div>
    </section>
  );
}
