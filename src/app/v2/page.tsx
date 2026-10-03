import type { Metadata } from "next";
import Link from "next/link";
import { SITE, whatsappLink } from "@/lib/content";

export const metadata: Metadata = {
  title: { absolute: "Consultoria digital, tecnológica e de produto | ProdTech" },
  description:
    "A ProdTech atua como braço de produto: entende processos, prioriza necessidades e constrói soluções digitais em sprints, da implantação à evolução.",
  alternates: { canonical: `${SITE.url}/v2` },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: `${SITE.url}/v2`,
    siteName: `${SITE.name}_`,
    title: "Consultoria digital, tecnológica e de produto | ProdTech",
    description:
      "Da análise do negócio aos sprints, entrega, treinamento e evolução do produto digital.",
    images: [{ url: "/v2/opengraph-image", width: 1200, height: 630, alt: "ProdTech — consultoria digital, tecnológica e de produto" }],
  },
  twitter: { card: "summary_large_image" },
};

const capabilities = [
  {
    title: "Descoberta e estratégia de produto",
    text: "Análise de processo, requisitos, priorização e roadmap para decidir o que vale construir primeiro.",
    terms: "Mapeamento de processos · Requisitos · Priorização · Roadmap",
    slug: "descoberta-e-estrategia",
  },
  {
    title: "Experiências digitais",
    text: "Sites, e-commerce, áreas de cliente e aplicativos desenhados para uma necessidade clara do negócio.",
    terms: "Sites · E-commerce · Áreas de cliente · Aplicativos",
    slug: "experiencias-digitais",
  },
  {
    title: "Operação inteligente",
    text: "Sistemas, integrações, automações e dashboards conectados ao processo real da equipe.",
    terms: "Sistemas de gestão · Integrações · Automações · Dashboards",
    slug: "operacao-inteligente",
  },
  {
    title: "Receita e relacionamento",
    text: "CRM, captação, qualificação e atendimento para organizar a relação entre interesse e vendas.",
    terms: "CRM · Captação · Bots · Atendimento · Qualificação",
    slug: "receita-e-relacionamento",
  },
];

const steps = [
  ["Entendemos o contexto", "Mapeamos o processo atual, os objetivos, as restrições e as pessoas envolvidas."],
  ["Priorizamos o que gera valor", "Definimos requisitos, hipótese, escopo inicial e critérios de sucesso."],
  ["Construímos em sprints", "Fazemos entregas pequenas, validamos com frequência e deixamos as decisões visíveis."],
  ["Implantamos e capacitamos", "Publicamos a solução, conectamos integrações e preparamos a equipe para usar."],
  ["Acompanhamos o sucesso", "Observamos adoção, métricas e aprendizados para decidir a próxima prioridade."],
];

const references = [
  ["Leads dispersos no atendimento", "Catálogo conectado ao CRM e à qualificação", "Acompanhar tempo de resposta e conversão"],
  ["Informações operacionais em planilhas", "Sistema de gestão com visão de operação", "Acompanhar tempo de fechamento e retrabalho"],
  ["Agendamentos feitos manualmente", "Experiência digital conectada à agenda", "Acompanhar conclusão e faltas"],
];

const faqs = [
  ["O que é uma sprint?", "É um ciclo de trabalho com escopo e objetivo definidos. Ao final, revisamos o que foi entregue e decidimos os próximos passos com base no que aprendemos."],
  ["Vocês trabalham com sistemas existentes?", "Sim. Primeiro entendemos o sistema, as integrações e as restrições atuais. A partir daí, avaliamos evoluir, integrar ou substituir partes, conforme a necessidade."],
  ["O que acontece depois do diagnóstico?", "A conversa inicial serve para entender o contexto e avaliar o próximo passo. Se houver aderência, alinhamos uma proposta de descoberta, prioridades e escopo; ela não é uma auditoria técnica completa."],
  ["Como definimos prioridades?", "Consideramos objetivo de negócio, impacto esperado, esforço, dependências e riscos. Os critérios são discutidos com a equipe e revistos conforme surgem evidências."],
  ["Vocês treinam a equipe?", "A implantação pode incluir treinamento e documentação essencial, definidos conforme a solução e as pessoas que vão operá-la."],
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", name: SITE.name, url: SITE.url, logo: `${SITE.url}/icon.svg`, areaServed: "Fortaleza, CE" },
    { "@type": "WebSite", name: `${SITE.name}_`, url: SITE.url, inLanguage: "pt-BR" },
    {
      "@type": "Service",
      name: "Consultoria digital, tecnológica e de produto",
      provider: { "@type": "Organization", name: SITE.name, url: SITE.url },
      areaServed: "Fortaleza, CE",
      serviceType: capabilities.map((capability) => capability.title),
    },
  ],
};

export default function HomeV2() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section id="inicio" className="container-x pb-24 pt-32 sm:pb-32 sm:pt-40">
        <p className="mono-label text-muted">Consultoria digital, tecnológica e de produto <span className="px-2">/</span>{SITE.city}</p>
        <h1 className="display mt-12 max-w-[16ch] text-[clamp(44px,8vw,112px)]">Transformamos processos em produtos digitais.</h1>
        <div className="mt-10 grid gap-8 border-t border-muted/40 pt-8 lg:grid-cols-12">
          <p className="max-w-[58ch] font-mono text-base leading-relaxed text-muted lg:col-span-7">
            Atuamos como braço de produto: entendemos o negócio, priorizamos necessidades e construímos em sprints — da análise à implantação, treinamento e evolução.
          </p>
          <div className="flex flex-wrap items-center gap-6 lg:col-span-5 lg:justify-end">
            <a href={whatsappLink("Olá! Quero conversar sobre um processo ou produto digital.")} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center bg-ink px-5 font-mono text-[13px] text-bg transition-colors hover:bg-accent hover:text-ink">Conversar sobre meu processo <span className="ml-5" aria-hidden="true">→</span></a>
            <a href="#metodo" className="link-u font-mono text-[13px]">Entender como trabalhamos</a>
          </div>
        </div>
      </section>

      <section className="section-y bg-ink text-bg" aria-labelledby="braco-produto">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <p className="mono-label text-bg/55 lg:col-span-3">Como atuamos</p>
          <div className="lg:col-span-9">
            <h2 id="braco-produto" className="display max-w-[18ch] text-[clamp(36px,5.5vw,76px)]">Um braço de produto para decisões que precisam sair do papel.</h2>
            <p className="mt-8 max-w-[62ch] font-mono text-sm leading-relaxed text-bg/65">Conectamos processo, pessoas e tecnologia para definir o problema antes da solução. O trabalho torna prioridades e decisões visíveis, reduz retrabalho e aproxima cada entrega do objetivo do negócio.</p>
            <div className="mt-12 grid gap-8 border-t border-bg/15 pt-8 sm:grid-cols-3">
              <p className="font-mono text-sm leading-relaxed">Para operações com etapas manuais e retrabalho recorrente.</p>
              <p className="font-mono text-sm leading-relaxed">Para times comerciais que precisam organizar leads e atendimento.</p>
              <p className="font-mono text-sm leading-relaxed">Para empresas que querem validar uma solução antes de ampliar o investimento.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="metodo" className="section-y" aria-labelledby="metodo-titulo">
        <div className="container-x">
          <p className="mono-label text-muted">Método · cinco etapas</p>
          <h2 id="metodo-titulo" className="display mt-10 max-w-[17ch] text-[clamp(38px,6vw,84px)]">Do contexto à evolução contínua.</h2>
          <ol className="mt-16 grid gap-0 border-t border-muted/40 md:grid-cols-5">
            {steps.map(([title, text], i) => <li key={title} className="border-b border-muted/40 py-7 md:border-b-0 md:border-r md:px-5 md:first:pl-0 md:last:border-r-0">
              <span className="font-mono text-sm text-accent">0{i + 1}</span>
              <h3 className="mt-6 text-lg font-medium tracking-tight">{title}</h3>
              <p className="mt-3 font-mono text-[13px] leading-relaxed text-muted">{text}</p>
            </li>)}
          </ol>
          <p className="mt-8 font-mono text-[13px] leading-relaxed text-muted">Você acompanha decisões, escopo, entregas e próximos passos em cada ciclo.</p>
        </div>
      </section>

      <section id="capacidades" className="section-y border-y border-muted/40" aria-labelledby="capacidades-titulo">
        <div className="container-x">
          <p className="mono-label text-muted">O que pode ser construído</p>
          <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-end">
            <h2 id="capacidades-titulo" className="display max-w-[15ch] text-[clamp(38px,6vw,80px)] lg:col-span-8">Do processo prioritário à solução em produção.</h2>
            <p className="font-mono text-sm leading-relaxed text-muted lg:col-span-4">As capacidades entram conforme o problema pede, com escopo definido junto à equipe.</p>
          </div>
          <ul className="mt-14 grid gap-px border border-muted/40 bg-muted/40 sm:grid-cols-2">
            {capabilities.map((cap, i) => <li key={cap.slug} className="bg-bg p-7 sm:p-9">
              <p className="font-mono text-sm text-accent">0{i + 1}</p>
              <h3 className="mt-8 text-2xl font-medium tracking-tight">{cap.title}</h3>
              <p className="mt-4 max-w-[48ch] font-mono text-sm leading-relaxed text-muted">{cap.text}</p>
              <p className="mt-6 font-mono text-xs leading-relaxed">{cap.terms}</p>
              <Link className="link-u mt-8 inline-block font-mono text-[13px]" href={`/v2/${cap.slug}`}>Conhecer esta capacidade <span aria-hidden="true">↗</span></Link>
            </li>)}
          </ul>
        </div>
      </section>

      <section id="referencias" className="section-y" aria-labelledby="referencias-titulo">
        <div className="container-x">
          <p className="mono-label text-muted">Aplicações de referência · cenários ilustrativos</p>
          <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-end">
            <h2 id="referencias-titulo" className="display max-w-[16ch] text-[clamp(38px,6vw,80px)] lg:col-span-7">Problemas que podemos transformar em produto.</h2>
            <p className="font-mono text-sm leading-relaxed text-muted lg:col-span-5">Cenários ilustrativos; não representam clientes ou resultados de projetos realizados. Cada projeto começa pelo contexto do seu negócio.</p>
          </div>
          <div className="mt-14 border-t border-muted/40">
            {references.map(([problem, solution, metric], i) => <article key={problem} className="grid gap-4 border-b border-muted/40 py-7 md:grid-cols-[48px_1fr_1fr_1fr] md:items-start">
              <span className="font-mono text-sm text-accent">0{i + 1}</span>
              <p><span className="mono-label text-muted">Desafio</span><span className="mt-3 block text-lg">{problem}</span></p>
              <p><span className="mono-label text-muted">Possibilidade</span><span className="mt-3 block font-mono text-sm leading-relaxed">{solution}</span></p>
              <p><span className="mono-label text-muted">O que medir</span><span className="mt-3 block font-mono text-sm leading-relaxed">{metric}</span></p>
            </article>)}
          </div>
        </div>
      </section>

      <section className="section-y bg-ink text-bg" aria-labelledby="inicio-entregaveis">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5"><p className="mono-label text-bg/55">Primeiro passo</p><h2 id="inicio-entregaveis" className="display mt-8 text-[clamp(38px,5vw,68px)]">Clareza para decidir o próximo ciclo.</h2><p className="mt-6 font-mono text-sm leading-relaxed text-bg/65">A conversa inicial é uma triagem para entender o contexto e avaliar aderência. Uma descoberta contratada pode organizar:</p></div>
          <ul className="space-y-0 border-t border-bg/15 lg:col-span-7">
            {["Mapa do processo atual", "Lista de necessidades e prioridades", "Escopo inicial do produto", "Plano de sprints e dependências", "Critérios de sucesso a acompanhar"].map((item, i) => <li key={item} className="flex gap-5 border-b border-bg/15 py-5 font-mono text-sm"><span className="text-accent">0{i + 1}</span>{item}</li>)}
          </ul>
          <p className="font-mono text-sm leading-relaxed text-bg/65 lg:col-start-6 lg:col-span-7">Pode não fazer sentido se a necessidade for apenas instalar um template sem descoberta ou se a equipe não tiver disponibilidade para validar decisões.</p>
        </div>
      </section>

      <section id="faq" className="section-y" aria-labelledby="faq-titulo">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4"><p className="mono-label text-muted">Dúvidas frequentes</p><h2 id="faq-titulo" className="display mt-8 text-[clamp(38px,5vw,68px)]">Como funciona na prática.</h2></div>
          <div className="border-t border-muted/40 lg:col-span-8">
            {faqs.map(([question, answer]) => <details key={question} className="group border-b border-muted/40 py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium"><span>{question}</span><span className="font-mono text-accent transition-transform group-open:rotate-45" aria-hidden="true">+</span></summary>
              <p className="mt-4 max-w-[70ch] font-mono text-sm leading-relaxed text-muted">{answer}</p>
            </details>)}
          </div>
        </div>
      </section>

      <section id="contato" className="section-y bg-accent" aria-labelledby="contato-titulo">
        <div className="container-x grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8"><p className="mono-label">Próximo passo</p><h2 id="contato-titulo" className="display mt-8 max-w-[13ch] text-[clamp(42px,7vw,96px)]">Vamos entender seu processo?</h2><p className="mt-6 max-w-[50ch] font-mono text-sm leading-relaxed">Conte o que precisa melhorar. Se ainda não souber qual solução faz sentido, tudo bem.</p></div>
          <div className="lg:col-span-4"><a href={whatsappLink("Olá! Quero conversar sobre meu processo com a ProdTech.")} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center bg-ink px-5 font-mono text-[13px] text-bg">Conversar pelo WhatsApp <span className="ml-5" aria-hidden="true">→</span></a><p className="mt-5 max-w-[42ch] font-mono text-[11px] leading-relaxed">Ao iniciar, você será direcionado ao WhatsApp com uma mensagem pronta. Consulte o <Link className="underline underline-offset-4" href="/politica-de-privacidade">Aviso de Privacidade</Link>.</p></div>
        </div>
      </section>
    </>
  );
}
