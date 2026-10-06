import Link from "next/link";
import { CASES } from "@/lib/content";

const references = [
  ["Leads dispersos no atendimento", "Catálogo conectado ao CRM e à qualificação", "Acompanhar tempo de resposta e conversão"],
  ["Informações operacionais em planilhas", "Sistema de gestão com visão de operação", "Acompanhar tempo de fechamento e retrabalho"],
  ["Agendamentos feitos manualmente", "Experiência digital conectada à agenda", "Acompanhar conclusão e faltas"],
];

const pad = (n: number) => String(n).padStart(2, "0");

export function References() {
  return (
    <section id="cases" className="section-y" aria-labelledby="referencias-titulo">
      <div className="container-x">
        <p className="mono-label text-muted">Aplicações de referência</p>
        <h2 id="referencias-titulo" className="display mt-8 max-w-[16ch] text-[clamp(38px,6vw,80px)]">
          Problemas que podemos transformar em produto.
        </h2>
        <div className="mt-14 border-t border-muted/40">
          {references.map(([problem, solution, metric], i) => (
            <article
              key={problem}
              className="grid gap-4 border-b border-muted/40 py-7 md:grid-cols-[48px_1fr_1fr_1fr] md:items-start"
            >
              <span className="font-mono text-sm text-accent">0{i + 1}</span>
              <p>
                <span className="mono-label text-muted">Desafio</span>
                <span className="mt-3 block text-lg">{problem}</span>
              </p>
              <p>
                <span className="mono-label text-muted">Possibilidade</span>
                <span className="mt-3 block font-mono text-sm leading-relaxed">{solution}</span>
              </p>
              <p>
                <span className="mono-label text-muted">O que medir</span>
                <span className="mt-3 block font-mono text-sm leading-relaxed">{metric}</span>
              </p>
            </article>
          ))}
        </div>

        <div className="mt-14">
          <p className="mono-label text-muted">Soluções de referência</p>
          <div className="mt-6 border-t border-muted/40">
            {CASES.map((c, i) => (
              <Link
                key={c.slug}
                href={`/cases/${c.slug}`}
                className="group grid grid-cols-[48px_1fr_auto] items-center gap-4 border-b border-muted/40 py-5 transition-colors hover:bg-ink hover:text-bg sm:grid-cols-[48px_1fr_1fr_auto]"
              >
                <span className="font-mono text-sm text-accent">{pad(i + 1)}</span>
                <span className="text-lg font-medium tracking-[-0.03em]">{c.title}</span>
                <span className="hidden font-mono text-sm text-muted group-hover:text-bg/60 sm:block">
                  {c.tags.join(" · ")}
                </span>
                <span aria-hidden="true" className="font-mono group-hover:text-accent">→</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
