// Todo o texto do site mora aqui — edite sem mexer nos componentes.

// TODO: trocar pelo número real (formato 55 + DDD + número, só dígitos).
export const WHATSAPP_NUMBER = "55XXXXXXXXXXX";
export const DEFAULT_WHATSAPP_MESSAGE = "Olá! Vim pelo site da ProdTech";

export function whatsappLink(message: string = DEFAULT_WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const SITE = {
  name: "ProdTech",
  url: "https://www.prodtech.com.br",
  domain: "www.prodtech.com.br",
  city: "Fortaleza — BR",
  tagline: "Tecnologia que funciona de verdade.",
  title: "ProdTech_ — Sites, bots, automações e apps sob medida",
  description:
    "Consultoria digital em Fortaleza. Sites, bots, automações e apps sob medida — partimos da sua dor, não de um pacote pronto.",
  // TODO: confirmar e-mail e perfis reais.
  email: "contato@prodtech.com.br",
  instagram: "https://instagram.com/",
  linkedin: "https://linkedin.com/",
};

export const NAV = [
  { href: "/#servicos", label: "Serviços" },
  { href: "/#processo", label: "Como trabalhamos" },
  { href: "/#cases", label: "Cases" },
  { href: "/#contato", label: "Contato" },
] as const;

export const TOTAL_SECTIONS = 7;

export const HERO = {
  labelLeft: "Consultoria digital",
  labelRight: SITE.city,
  titleLines: ["Não entregamos o mínimo.", "Entregamos o sistema inteiro."],
  subtitle:
    "Sites, bots, automações e apps sob medida. Partimos da sua dor, não de um pacote pronto.",
  primaryCta: "Agendar diagnóstico gratuito",
  primaryMessage: "Olá! Vim pelo site da ProdTech e quero agendar um diagnóstico gratuito.",
  secondaryCta: "Ver o que fazemos",
  // TODO: substituir por números reais quando houver.
  stats: [
    { value: "+", label: "Leads qualificados" },
    { value: "24/7", label: "Atendimento" },
    { value: "100%", label: "Sob medida" },
  ],
};

// Cada cenário é um "ciclo" do terminal do hero. `hl` marca o trecho em laranja.
export const TERMINAL_SCENARIOS: { text: string; hl?: string }[][] = [
  [
    { text: "novo lead: Maria S. — catálogo /produto/42" },
    { text: "bot iniciou conversa…" },
    { text: "score: 82 → QUENTE", hl: "QUENTE" },
    { text: "enviado ao comercial ✓", hl: "✓" },
  ],
  [
    { text: "novo lead: João P. — catálogo /produto/17" },
    { text: "bot iniciou conversa…" },
    { text: "score: 41 → FRIO" },
    { text: "sequência de nutrição agendada ✓", hl: "✓" },
  ],
  [
    { text: "novo lead: Ana L. — landing /agendamento" },
    { text: "bot confirmou horário: qui 14h" },
    { text: "score: 76 → QUENTE", hl: "QUENTE" },
    { text: "evento criado na agenda ✓", hl: "✓" },
  ],
];

export const MANIFESTO = {
  label: "Manifesto",
  quote: ["Mais do que tecnologia,", "é sobre criar soluções que fazem sentido."],
  rows: [
    { common: "Site bonito e parado", ours: "Site que capta, qualifica e converte" },
    { common: "Bot com menu engessado", ours: "Bot que entende, classifica e encaminha" },
    { common: "Template de mercado", ours: "Projeto desenhado a partir da sua dor" },
  ],
};

export type ServiceIcon =
  | "site"
  | "bot"
  | "automation"
  | "app"
  | "dashboard"
  | "funnel"
  | "api"
  | "diagnosis";

export const SERVICES: {
  title: string;
  description: string;
  deliverables: string[];
  icon: ServiceIcon;
}[] = [
  {
    title: "Sites & Plataformas",
    description: "Institucionais, landing pages, e-commerce, catálogos digitais.",
    deliverables: ["Landing pages", "Sites institucionais", "E-commerce", "Catálogos"],
    icon: "site",
  },
  {
    title: "Bots & Atendimento",
    description: "WhatsApp e Instagram com IA: atendimento, vendas, agendamento.",
    deliverables: ["Bot de WhatsApp", "Direct do Instagram", "Agendamento", "Triagem com IA"],
    icon: "bot",
  },
  {
    title: "Automações",
    description: "Integração entre sistemas, planilhas, CRM, disparos, relatórios automáticos.",
    deliverables: ["Fluxos entre sistemas", "Disparos", "Relatórios", "Planilhas vivas"],
    icon: "automation",
  },
  {
    title: "Aplicativos",
    description: "Apps mobile e web sob medida.",
    deliverables: ["Android & iOS", "Web apps", "Área do cliente", "PWA"],
    icon: "app",
  },
  {
    title: "Sistemas de Gestão",
    description: "Painéis administrativos, dashboards, controle financeiro/estoque.",
    deliverables: ["Painel admin", "Dashboards", "Financeiro", "Estoque"],
    icon: "dashboard",
  },
  {
    title: "CRM & Funil de Leads",
    description: "Captação, pontuação (lead scoring) e acompanhamento de vendas.",
    deliverables: ["Captação", "Lead scoring", "Pipeline de vendas", "Follow-up"],
    icon: "funnel",
  },
  {
    title: "Integrações & APIs",
    description: "Pagamentos, ERPs, marketplaces, e-mail marketing.",
    deliverables: ["Pagamentos", "ERPs", "Marketplaces", "E-mail marketing"],
    icon: "api",
  },
  {
    title: "Consultoria & Diagnóstico",
    description: "Mapeamento de processos e plano digital antes de escrever código.",
    deliverables: ["Mapa de processos", "Plano digital", "Priorização", "Estimativa"],
    icon: "diagnosis",
  },
];

export const CATALOG_FLOW = {
  title: "Um catálogo que vende sozinho.",
  intro:
    "Catálogo, captura, bot, pontuação e encaminhamento funcionando como uma peça só. Role para ver o fluxo acontecer.",
  nodes: ["Catálogo", "Captura do lead", "Bot no WhatsApp", "Score"],
  hot: "QUENTE → vendedor",
  cold: "FRIO → nutrição automática",
  steps: [
    "Cliente navega pelos produtos e demonstra interesse.",
    "Dados capturados sem fricção (nome + WhatsApp).",
    "Bot inicia a conversa em segundos.",
    "Perguntas estratégicas classificam o lead.",
    "Quente vai direto pro time; frio entra em sequência automática.",
  ],
  cta: "Quero isso no meu negócio",
  ctaMessage: "Olá! Vi o Catálogo Inteligente no site da ProdTech e quero isso no meu negócio.",
};

// Produtos fictícios usados apenas na demo interativa.
export const DEMO_PRODUCTS = [
  { id: 42, name: "Mesa Jatobá", price: "R$ 2.490", shape: "table" },
  { id: 17, name: "Cadeira Aroeira", price: "R$ 890", shape: "chair" },
  { id: 8, name: "Luminária Carnaúba", price: "R$ 420", shape: "lamp" },
] as const;

export const DEMO_QUESTIONS = [
  {
    question: "Pra quando você precisa?",
    options: [
      { label: "Esta semana", score: 35 },
      { label: "Este mês", score: 20 },
      { label: "Só pesquisando", score: 0 },
    ],
  },
  {
    question: "Já tem as medidas do espaço?",
    options: [
      { label: "Sim, tenho", score: 25 },
      { label: "Ainda não", score: 5 },
    ],
  },
];

export const PROCESS = [
  { title: "Call de diagnóstico", text: "Entendemos a dor antes de propor qualquer coisa." },
  { title: "Proposta sob medida", text: "Escopo, prazo e resultado esperado, sem letra miúda." },
  { title: "Design & protótipo", text: "Você vê e aprova antes do desenvolvimento." },
  { title: "Desenvolvimento", text: "Entregas parciais, acompanhamento transparente." },
  { title: "Entrega & evolução", text: "Suporte, métricas e melhorias contínuas." },
];

export type CasePreview = "catalog" | "dashboard" | "landing" | "store";

export type Case = {
  slug: string;
  title: string;
  sector: string;
  tags: string[];
  preview: CasePreview;
  summary: string;
  challenge: string;
  solution: string[];
  stack: string[];
  result: string;
};

// Tipos de solução apresentados como cases conceituais.
// TODO: substituir/adicionar projetos reais quando autorizados.
export const CASES: Case[] = [
  {
    slug: "catalogo-bot-qualificacao",
    title: "Catálogo + Bot de qualificação",
    sector: "Varejo",
    tags: ["Sites", "Bots", "CRM"],
    preview: "catalog",
    summary: "Catálogo digital que captura o interesse e entrega ao vendedor só quem está pronto pra comprar.",
    challenge:
      "Loja com muito tráfego no Instagram e vendedores afogados em mensagens de quem só queria saber o preço. Os leads bons esfriavam na fila.",
    solution: [
      "Catálogo digital com botão de interesse em cada produto.",
      "Captura de nome e WhatsApp sem formulário longo.",
      "Bot que conversa, faz perguntas-chave e pontua o lead.",
      "Leads quentes vão direto ao vendedor; frios entram em nutrição automática.",
    ],
    stack: ["Next.js", "WhatsApp Business API", "IA para classificação", "CRM integrado"],
    result:
      "Vendedores falando só com quem tem intenção de compra e nenhum contato perdido fora do horário comercial.",
  },
  {
    slug: "sistema-gestao-rural",
    title: "Sistema de gestão rural",
    sector: "Agro",
    tags: ["Sistema", "Dashboard"],
    preview: "dashboard",
    summary: "Controle de produção, estoque e financeiro da propriedade num painel só.",
    challenge:
      "Informações de produção, insumos e custos espalhadas em cadernos e planilhas diferentes. Decisões tomadas no escuro.",
    solution: [
      "Cadastro de áreas, safras e insumos.",
      "Lançamentos de campo pelo celular, inclusive offline.",
      "Dashboard de custo por área e por safra.",
      "Relatórios automáticos no fim de cada mês.",
    ],
    stack: ["Next.js", "PostgreSQL", "PWA offline", "Relatórios em PDF"],
    result: "Custo real por hectare visível em tempo real e fechamento mensal sem planilha manual.",
  },
  {
    slug: "landing-agendamento",
    title: "Landing page + agendamento",
    sector: "Saúde",
    tags: ["Site", "Automação"],
    preview: "landing",
    summary: "Página de captação com agenda integrada e confirmação automática pelo WhatsApp.",
    challenge:
      "Clínica perdendo pacientes entre o clique no anúncio e a ligação para marcar. Muitas faltas por falta de lembrete.",
    solution: [
      "Landing page focada em uma especialidade por vez.",
      "Agenda online conectada aos horários reais.",
      "Confirmação e lembrete automáticos pelo WhatsApp.",
      "Painel de origem dos agendamentos por campanha.",
    ],
    stack: ["Next.js", "Google Calendar", "WhatsApp Business API", "Analytics"],
    result: "Agendamento em poucos cliques, menos faltas e clareza de qual anúncio traz paciente.",
  },
  {
    slug: "loja-virtual",
    title: "Loja virtual",
    sector: "Moda",
    tags: ["E-commerce"],
    preview: "store",
    summary: "E-commerce próprio integrado a pagamento, estoque e atendimento.",
    challenge:
      "Marca vendendo só por direct, controlando estoque de cabeça e perdendo vendas por demora na resposta.",
    solution: [
      "Loja própria com vitrine editorial.",
      "Pagamento por Pix e cartão com baixa automática de estoque.",
      "Recuperação de carrinho pelo WhatsApp.",
      "Painel de pedidos e envio.",
    ],
    stack: ["Next.js", "Gateway de pagamento", "Integração de frete", "Automação de WhatsApp"],
    result: "Venda 24/7 sem depender do direct e estoque sempre batendo com o site.",
  },
];

export const TESTIMONIALS: { quote: string; author: string; company: string }[] = [];

// Não inventar depoimentos: a seção só aparece com SHOW_TESTIMONIALS=true e ao menos um depoimento real.
export const SHOW_TESTIMONIALS = process.env.SHOW_TESTIMONIALS === "true";

export const FINAL_CTA = {
  title: "Qual é a dor do seu negócio hoje?",
  subtitle: "Uma call de 30 minutos. Sem compromisso. Você sai com um plano.",
  primary: "Agendar call",
  primaryMessage: "Olá! Vim pelo site da ProdTech e quero agendar uma call de 30 minutos.",
  secondary: "Falar no WhatsApp",
  chips: ["Site", "Bot", "Automação", "App", "Não sei ainda"],
};

export const FOOTER_COLUMNS = [
  {
    title: "Serviços",
    links: [
      { label: "Sites", href: "/#servicos" },
      { label: "Bots", href: "/#servicos" },
      { label: "Automações", href: "/#servicos" },
      { label: "Apps", href: "/#servicos" },
      { label: "Sistemas", href: "/#servicos" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Como trabalhamos", href: "/#processo" },
      { label: "Cases", href: "/#cases" },
      { label: "Contato", href: "/#contato" },
    ],
  },
  {
    title: "Contato",
    links: [
      { label: "WhatsApp", href: whatsappLink() },
      { label: "E-mail", href: `mailto:${SITE.email}` },
      { label: "Instagram", href: SITE.instagram },
      { label: "LinkedIn", href: SITE.linkedin },
    ],
  },
];
