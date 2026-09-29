import Link from "next/link";
import { whatsappLink } from "@/lib/content";

/** Contato no formato da /v2: bloco --accent com CTA para o WhatsApp. */
export function Contact() {
  return (
    <section id="contato" className="section-y bg-accent" aria-labelledby="contato-titulo">
      <div className="container-x grid gap-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <p className="mono-label">Próximo passo</p>
          <h2 id="contato-titulo" className="display mt-8 max-w-[13ch] text-[clamp(42px,7vw,96px)]">
            Vamos entender seu processo?
          </h2>
          <p className="mt-6 max-w-[50ch] font-mono text-sm leading-relaxed">
            Conte o que precisa melhorar. Se ainda não souber qual solução faz sentido, tudo bem.
          </p>
        </div>
        <div className="lg:col-span-4">
          <a
            href={whatsappLink("Olá! Quero conversar sobre meu processo com a ProdTech.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center bg-ink px-5 font-mono text-[13px] text-bg"
          >
            Conversar pelo WhatsApp{" "}
            <span className="ml-5" aria-hidden="true">
              →
            </span>
          </a>
          <p className="mt-5 max-w-[42ch] font-mono text-[11px] leading-relaxed">
            Ao iniciar, você será direcionado ao WhatsApp com uma mensagem pronta. Consulte o{" "}
            <Link className="underline underline-offset-4" href="/politica-de-privacidade">
              Aviso de Privacidade
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
