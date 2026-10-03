import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE, whatsappLink } from "@/lib/content";

const pages = {
  "descoberta-e-estrategia": {
    title: "Descoberta e estratégia de produto",
    description: "Mapeie processos, organize requisitos e priorize um roadmap de produto digital ligado aos objetivos do negócio.",
    problem: "Quando há muitas ideias, gargalos e pedidos concorrentes, começar a desenvolver sem entender o contexto aumenta o risco de retrabalho.",
    approach: ["Mapeamento do processo atual e das pessoas envolvidas", "Levantamento de objetivos, restrições e dependências", "Organização e priorização de requisitos", "Definição de escopo inicial e critérios de sucesso", "Plano de próximos ciclos e hipóteses a validar"],
    faq: [["É uma consultoria ou já inclui desenvolvimento?", "A descoberta pode orientar uma contratação de desenvolvimento ou servir para a equipe decidir os próximos passos. O escopo é combinado antes do início."], ["O que recebo ao final?", "Os entregáveis são definidos para o contexto. Podem incluir mapa de processo, prioridades, escopo inicial, roadmap e critérios de sucesso."], ["Vocês garantem resultado de negócio?", "Não prometemos um resultado sem conhecer o contexto. Definimos como acompanhar as hipóteses e os objetivos acordados." ]],
  },
  "experiencias-digitais": {
    title: "Experiências digitais",
    description: "Planejamento e desenvolvimento de sites, e-commerce, áreas de cliente e aplicativos com foco na necessidade do negócio e de seus usuários.",
    problem: "Uma experiência digital precisa ajudar a pessoa a completar uma tarefa e conectar essa interação ao processo que a empresa consegue operar.",
    approach: ["Entendimento dos usuários, conteúdo e objetivo da experiência", "Priorização dos fluxos e funcionalidades essenciais", "Desenho e validação antes da implementação", "Desenvolvimento responsivo e integrações necessárias", "Implantação, capacitação e evolução por evidências"],
    faq: [["Vocês fazem apenas sites?", "Sites são uma das possibilidades. O escopo pode incluir e-commerce, áreas de cliente ou aplicativos quando o problema e a operação justificarem."], ["Posso integrar ferramentas que já uso?", "Sim, após avaliar as ferramentas, os acessos e as possibilidades técnicas de integração."], ["O conteúdo está incluído?", "Conteúdo e responsabilidades são definidos no escopo de cada projeto." ]],
  },
  "operacao-inteligente": {
    title: "Operação inteligente",
    description: "Sistemas de gestão, integrações, automações e dashboards definidos a partir dos processos reais da operação.",
    problem: "Tarefas repetidas, informação espalhada e controles manuais podem dificultar o acompanhamento e aumentar o retrabalho.",
    approach: ["Mapeamento das etapas, entradas, saídas e exceções", "Análise dos sistemas e dados existentes", "Priorização de gargalos e riscos", "Implementação incremental de sistemas, integrações ou automações", "Treinamento e acompanhamento de adoção"],
    faq: [["É possível automatizar qualquer processo?", "Nem sempre. Primeiro avaliamos estabilidade, exceções, riscos e qualidade dos dados. Às vezes o processo precisa ser simplificado antes."], ["Vocês integram com meu ERP ou CRM?", "Avaliamos as opções de integração e limitações do fornecedor antes de propor o escopo."], ["Como evitam automatizar um processo ruim?", "O processo atual é mapeado e discutido antes de escolher o que automatizar." ]],
  },
  "receita-e-relacionamento": {
    title: "Receita e relacionamento",
    description: "CRM, captação, qualificação e atendimento organizados em torno do processo comercial e da relação com o cliente.",
    problem: "Quando contatos chegam por canais diferentes sem um fluxo claro, a equipe pode perder contexto, atrasar respostas ou deixar oportunidades sem acompanhamento.",
    approach: ["Entendimento da jornada e dos canais de entrada", "Definição de etapas, responsabilidades e informações necessárias", "Organização de CRM e integrações", "Automação de tarefas repetitivas com pontos de controle", "Acompanhamento de tempo de resposta, conversão e adoção"],
    faq: [["Um bot substitui a equipe de atendimento?", "A automação pode apoiar triagem e tarefas recorrentes. Escopo, limites e passagem para uma pessoa são definidos conforme o atendimento."], ["Vocês implantam CRM?", "Podemos avaliar, configurar ou integrar o CRM conforme o processo, os requisitos e as ferramentas existentes."], ["A automação garante mais vendas?", "Não. Ela pode melhorar organização e acompanhamento, mas resultados dependem também de oferta, demanda, operação e execução comercial." ]],
  },
} as const;

type Slug = keyof typeof pages;
export function generateStaticParams() { return Object.keys(pages).map((slug) => ({ slug })); }
export async function generateMetadata({ params }: PageProps<"/v2/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const page = pages[slug as Slug];
  if (!page) return {};
  const title = `${page.title} | ProdTech`;
  return { title: { absolute: title }, description: page.description, alternates: { canonical: `${SITE.url}/v2/${slug}` }, openGraph: { type: "website", url: `${SITE.url}/v2/${slug}`, title, description: page.description, images: ["/v2/opengraph-image"] } };
}

export default async function CapabilityPage({ params }: PageProps<"/v2/[slug]">) {
  const { slug } = await params;
  const page = pages[slug as Slug];
  if (!page) notFound();
  return <>
    <article className="container-x pb-24 pt-32 sm:pb-32 sm:pt-40">
      <Link href="/v2#capacidades" className="mono-label link-u text-muted">← Capacidades</Link>
      <p className="mono-label mt-12 text-muted">Consultoria digital, tecnológica e de produto</p>
      <h1 className="display mt-8 max-w-[16ch] text-[clamp(42px,7vw,96px)]">{page.title}</h1>
      <p className="mt-8 max-w-[62ch] font-mono text-base leading-relaxed text-muted">{page.description}</p>
      <section className="mt-20 grid gap-8 border-t border-muted/40 pt-10 lg:grid-cols-12">
        <h2 className="mono-label text-muted lg:col-span-3">O problema</h2><p className="max-w-[58ch] text-xl leading-relaxed lg:col-span-9">{page.problem}</p>
      </section>
      <section className="mt-12 grid gap-8 border-t border-muted/40 pt-10 lg:grid-cols-12">
        <h2 className="mono-label text-muted lg:col-span-3">Como trabalhamos</h2><ol className="lg:col-span-9">{page.approach.map((item, i) => <li key={item} className="grid grid-cols-[44px_1fr] border-b border-muted/40 py-5 text-lg"><span className="font-mono text-sm text-accent">0{i + 1}</span>{item}</li>)}</ol>
      </section>
      <section className="mt-12 grid gap-8 border-t border-muted/40 pt-10 lg:grid-cols-12">
        <h2 className="mono-label text-muted lg:col-span-3">Escopo e limites</h2><p className="max-w-[58ch] font-mono text-sm leading-relaxed text-muted lg:col-span-9">Entregáveis, responsabilidades, integrações e critérios de aceite são definidos após entender o contexto. Prazos e resultados dependem do escopo acordado, dos acessos e da participação das pessoas envolvidas.</p>
      </section>
      <section className="mt-20 grid gap-8 border-t border-muted/40 pt-10 lg:grid-cols-12">
        <h2 className="display text-4xl lg:col-span-4">Dúvidas frequentes</h2><div className="border-t border-muted/40 lg:col-span-8">{page.faq.map(([q, a]) => <details key={q} className="group border-b border-muted/40 py-6"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium">{q}<span className="font-mono text-accent" aria-hidden="true">+</span></summary><p className="mt-4 font-mono text-sm leading-relaxed text-muted">{a}</p></details>)}</div>
      </section>
      <a href={whatsappLink(`Olá! Quero conversar sobre ${page.title.toLowerCase()}.`)} target="_blank" rel="noopener noreferrer" className="mt-14 inline-flex min-h-12 items-center bg-ink px-5 font-mono text-[13px] text-bg">Conversar sobre este desafio <span className="ml-5" aria-hidden="true">→</span></a>
    </article>
  </>;
}
