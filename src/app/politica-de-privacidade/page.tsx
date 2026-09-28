import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Aviso de Privacidade",
  description: "Como funciona o contato com a ProdTech pelo site e pelo WhatsApp.",
  alternates: { canonical: `${SITE.url}/politica-de-privacidade` },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return <article className="container-x max-w-5xl pb-24 pt-32 sm:pb-32 sm:pt-40">
    <Link href="/v2" className="mono-label link-u text-muted">← Início</Link>
    <p className="mono-label mt-12 text-muted">Privacidade</p>
    <h1 className="display mt-8 max-w-[14ch] text-[clamp(42px,7vw,96px)]">Aviso de Privacidade</h1>
    <p className="mt-8 max-w-[65ch] font-mono text-sm leading-relaxed text-muted">Este aviso descreve o contato iniciado pelo site da ProdTech. Atualizado em 28 de setembro de 2026.</p>
    <div className="mt-16 max-w-[72ch] space-y-10">
      <section><h2 className="text-2xl font-medium">O que acontece ao iniciar uma conversa</h2><p className="mt-4 font-mono text-sm leading-relaxed text-muted">Os botões de contato abrem o WhatsApp com uma mensagem pré-preenchida. O site não envia essa mensagem por conta própria. Você decide se deseja enviá-la; quando o fizer, o WhatsApp e a ProdTech receberão o conteúdo conforme o funcionamento e as políticas do serviço.</p></section>
      <section><h2 className="text-2xl font-medium">Finalidade</h2><p className="mt-4 font-mono text-sm leading-relaxed text-muted">As informações que você escolher enviar serão usadas para responder ao contato e entender a solicitação. Não envie dados sensíveis pelo canal de contato.</p></section>
      <section><h2 className="text-2xl font-medium">Armazenamento e terceiros</h2><p className="mt-4 font-mono text-sm leading-relaxed text-muted">A conversa ocorre no WhatsApp. A ProdTech não recebe os dados pelo formulário do site e não controla os registros mantidos pelo WhatsApp. Este projeto não implementa envio de formulário, pixels ou ferramentas de analytics.</p></section>
      <section><h2 className="text-2xl font-medium">Seus direitos e contato</h2><p className="mt-4 font-mono text-sm leading-relaxed text-muted">Para solicitar acesso, correção ou exclusão de informações de uma conversa, use o canal oficial da ProdTech pelo próprio WhatsApp. A equipe deve confirmar a identidade do controlador e os canais institucionais antes da publicação definitiva deste aviso.</p></section>
      <p className="border-t border-muted/40 pt-6 font-mono text-xs leading-relaxed text-muted">Este texto descreve o comportamento atualmente implementado no site. Os dados legais do controlador e o canal oficial de privacidade precisam ser confirmados pela ProdTech.</p>
    </div>
  </article>;
}
