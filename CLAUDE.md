# ProdTech_ — Spec da Home (Next.js)

> Documento de referência para construir **Header, Home e Footer** do site da ProdTech.
> Regra de ouro: **seguir o brand board à risca**. Nada de "layout de IA" (gradiente roxo, glassmorphism, cards arredondados flutuando, ícone 3D, emoji).

---

## 0. Design Tokens (obrigatório)

### Cores — somente estas
| Token | Hex | Uso |
|---|---|---|
| `--bg` | `#EDEBE6` | Fundo principal |
| `--ink` | `#111111` | Texto, seções escuras, botões primários |
| `--accent` | `#FF5A1F` | **Só** destaque: underscore `_`, traço, hover, CTA pontual |
| `--muted` | `#8A8A85` | Texto secundário, linhas divisórias, labels |

Variações permitidas: apenas opacidade dessas 4 cores (ex.: `rgb(17 17 17 / 0.12)` para linhas). **Nenhuma cor nova.**

Proporção sugerida: ~70% `--bg`, ~25% `--ink`, ~5% `--accent`. O laranja perde força se for usado demais.

### Tipografia
| Papel | Fonte | Peso |
|---|---|---|
| Títulos / display | **Inter** | 500 / 600, tracking negativo (`-0.03em` a `-0.05em`) |
| Labels, detalhes, corpo técnico, números | **JetBrains Mono** | 400 |

- Labels sempre em **CAIXA ALTA + mono + letter-spacing `0.12em`**, tamanho pequeno (11–12px), cor `--ink` ou `--muted`. Ex.: `O QUE FAZEMOS`, `01 / 04`.
- Títulos grandes terminam com o cursor `_` em `--accent` (assinatura da marca).
- Carregar via `next/font/google` (`Inter`, `JetBrains_Mono`).

### Forma e grid
- `border-radius`: **0** em tudo. Exceção única: o botão flutuante de WhatsApp pode ser quadrado também (preferível) — manter 0.
- Estrutura em **grid com linhas finas de 1px** (`--muted` a ~40%) separando blocos, igual ao brand board. As linhas são a "moldura" do site, não sombras.
- **Sem sombras**, sem blur, sem gradientes.
- Container: `max-width: 1440px`, padding lateral `clamp(20px, 4vw, 48px)`.
- Espaçamento generoso: seções com `padding-block: clamp(80px, 12vw, 160px)`.

### Assinaturas visuais da marca (usar em todo o site)
1. **Cursor `_` laranja** piscando (`animation: blink 1s steps(1) infinite`) no fim dos títulos principais.
2. **Traço laranja curto** (24×3px) antes de citações/destaques.
3. **Numeração mono** de seções: `01 / 06`, `02 / 06`…
4. **Labels de canto** em mono, como no brand board ("IDENTIDADE VISUAL" à esquerda, "01 / 01" à direita).

### Movimento (moderno sem ser genérico)
- Texto dos heros entra com efeito **"typing"** / reveal por linha (clip-path), não fade genérico.
- Linhas do grid "desenham" ao entrar na viewport (`scaleX` de 0 → 1).
- Hover em links: underline em `--accent` crescendo da esquerda.
- Respeitar `prefers-reduced-motion`.
- Lib sugerida: **Framer Motion** (ou CSS puro + IntersectionObserver).

---

## 1. Header

**Layout:** barra fixa no topo, fundo `--bg`, linha inferior 1px. Altura ~72px.

```
ProdTech_          Serviços   Como trabalhamos   Cases   Contato      [ Vamos conversar → ]
```

- Logo: "ProdTech" em Inter 600 + `_` laranja.
- Links em **JetBrains Mono**, 13px, com numeração discreta opcional: `01 Serviços`, `02 Processo`…
- CTA: botão retangular `--ink` com texto `--bg`, mono, seta `→`. Hover: fundo `--accent`.
- Ao rolar: header ganha fundo sólido e reduz altura (sem blur).
- Mobile: menu hamburguer que abre **tela cheia `--ink`** com links grandes em Inter, numerados em mono laranja.
- Âncoras com scroll suave para as seções da home.

---

## 2. Home — seções

### 2.1 Hero `01 / 07`
**Objetivo:** deixar claro em 3 segundos que não somos "mais uma agência".

- Label de canto: `CONSULTORIA DIGITAL` ··· `FORTALEZA — BR`
- Título (Inter, ~clamp(48px, 8vw, 120px)):
  > **Não entregamos o mínimo.**
  > **Entregamos o sistema inteiro.\_**
- Subtítulo (mono, `--muted`):
  > Sites, bots, automações e apps sob medida. Partimos da sua dor, não de um pacote pronto.
- CTAs:
  - Primário: `Agendar diagnóstico gratuito →` (abre WhatsApp ou Calendly)
  - Secundário (link underline): `Ver o que fazemos`
- Lado direito / fundo: **mini "terminal" ao vivo** em `--ink` simulando o fluxo:
  ```
  > novo lead: Maria S. — catálogo /produto/42
  > bot iniciou conversa… 
  > score: 82 → QUENTE_
  > enviado ao comercial ✓
  ```
  (linhas digitando em loop — mostra o poder do sistema logo de cara)
- Rodapé do hero: faixa com 3 números mono (ex.: `+ Leads qualificados` / `24/7 atendimento` / `100% sob medida`). Usar números reais quando houver.

### 2.2 Manifesto / Diferencial `02 / 07`
Seção **escura** (`--ink`, texto `--bg`). Frase grande, estilo brand board:

> ▬ Mais do que tecnologia,
> é sobre criar soluções que fazem sentido.

Abaixo, grid de 3 colunas "O mercado faz / **A ProdTech faz**":

| O comum | ProdTech_ |
|---|---|
| Site bonito e parado | Site que capta, qualifica e converte |
| Bot com menu engessado | Bot que entende, classifica e encaminha |
| Template de mercado | Projeto desenhado a partir da sua dor |

Coluna "O comum" em `--muted` riscada levemente; coluna ProdTech em `--bg` com `_` laranja.

### 2.3 O que fazemos `03 / 07`
Grid com linhas divisórias (sem cards arredondados). Cada item: ícone de traço fino (stroke 1.5px, estilo do brand board), título Inter, descrição mono, e lista de entregas.

1. **Sites & Plataformas** — Institucionais, landing pages, e-commerce, catálogos digitais.
2. **Bots & Atendimento** — WhatsApp e Instagram com IA: atendimento, vendas, agendamento.
3. **Automações** — Integração entre sistemas, planilhas, CRM, disparos, relatórios automáticos.
4. **Aplicativos** — Apps mobile e web sob medida.
5. **Sistemas de Gestão** — Painéis administrativos, dashboards, controle financeiro/estoque.
6. **CRM & Funil de Leads** — Captação, pontuação (lead scoring) e acompanhamento de vendas.
7. **Integrações & APIs** — Pagamentos, ERPs, marketplaces, e-mail marketing.
8. **Consultoria & Diagnóstico** — Mapeamento de processos e plano digital antes de escrever código.

Hover em cada bloco: fundo vira `--ink`, texto `--bg`, número e seta em `--accent`.

### 2.4 Solução em destaque — "Catálogo Inteligente" `04 / 07`
**Esta é a seção-vitrine.** Mostra o poder integrado.

- Título: **Um catálogo que vende sozinho.\_**
- Diagrama em fluxo horizontal (linhas finas + nós quadrados), animado conforme o scroll:

```
[ Catálogo ] ──► [ Captura do lead ] ──► [ Bot no WhatsApp ] ──► [ Score ] ──► [ QUENTE → vendedor ]
                                                                        └──► [ FRIO → nutrição automática ]
```

- Cada etapa com uma frase curta em mono:
  1. Cliente navega pelos produtos e demonstra interesse.
  2. Dados capturados sem fricção (nome + WhatsApp).
  3. Bot inicia a conversa em segundos.
  4. Perguntas estratégicas classificam o lead.
  5. Quente vai direto pro time; frio entra em sequência automática.
- **Demo interativa** (diferencial forte): mini-catálogo com 3 produtos fake; ao clicar "Tenho interesse", aparece ao lado um chat simulado e um medidor de temperatura do lead (barra `--muted` → `--accent`).
- CTA: `Quero isso no meu negócio →`

### 2.5 Como trabalhamos `05 / 07`
Timeline horizontal numerada (mono grande `01`–`05`, linha 1px conectando):

1. **Call de diagnóstico** — Entendemos a dor antes de propor qualquer coisa.
2. **Proposta sob medida** — Escopo, prazo e resultado esperado, sem letra miúda.
3. **Design & protótipo** — Você vê e aprova antes do desenvolvimento.
4. **Desenvolvimento** — Entregas parciais, acompanhamento transparente.
5. **Entrega & evolução** — Suporte, métricas e melhorias contínuas.

### 2.6 Cases / Projetos `06 / 07`
Enquanto não houver clientes grandes, mostrar **tipos de solução** como cases (conceito + resultado esperado). Layout em lista editorial, não em cards:

```
01   Catálogo + Bot de qualificação      Varejo          Sites · Bots · CRM        →
02   Sistema de gestão rural              Agro            Sistema · Dashboard      →
03   Landing page + agendamento           Saúde           Site · Automação         →
04   Loja virtual                         Moda            E-commerce               →
```

- Hover na linha: imagem do projeto aparece seguindo o cursor (preto e branco, como no mockup do branding).
- Cada linha abre página `/cases/[slug]` (estrutura: desafio → solução → stack → resultado).
- Usar projetos reais já feitos pela equipe quando autorizado.

**Depoimentos** (logo abaixo, mesma seção):
- Slider simples, 1 depoimento por vez, texto grande em Inter, autor e empresa em mono.
- Traço laranja antes da citação. Navegação `← 01 / 03 →` em mono.
- Enquanto não houver depoimentos reais: **não inventar**. Deixar a seção oculta via flag (`SHOW_TESTIMONIALS=false`).

### 2.7 CTA final `07 / 07`
Bloco `--ink` de largura total:

> **Qual é a dor do seu negócio hoje?\_**
> Uma call de 30 minutos. Sem compromisso. Você sai com um plano.

- Botão primário `--accent`: `Agendar call →`
- Secundário: `Falar no WhatsApp`
- Opcional: formulário curto (nome, WhatsApp, "qual o desafio?" com chips: Site / Bot / Automação / App / Não sei ainda).

---

## 3. Footer

Fundo `--bg`, linha superior 1px, grid de 4 colunas:

| ProdTech_ | Serviços | Empresa | Contato |
|---|---|---|---|
| Tecnologia que funciona de verdade. | Sites · Bots · Automações · Apps · Sistemas | Como trabalhamos · Cases · Contato | WhatsApp · E-mail · Instagram · LinkedIn |

- Linha final (mono, 12px, `--muted`):
  `© 2026 ProdTech_` ··· `Fortaleza — BR` ··· `www.prodtech.com.br`
- Opcional: "ProdTech_" gigante vazando na base do footer (Inter 600, ~20vw, cortado), assinatura moderna e bem alinhada ao branding.

---

## 4. Elementos fixos

### Botão de WhatsApp
- Canto inferior direito, **quadrado** 56×56px, fundo `--ink`, ícone `--bg`. Hover: `--accent`.
- Tooltip em mono ao lado: `Fale com a gente_`
- Link: `https://wa.me/55XXXXXXXXXXX?text=Olá!%20Vim%20pelo%20site%20da%20ProdTech`
- ⚠️ Não usar o verde do WhatsApp (fora da paleta).

### Voltar ao topo
- Acima do botão de WhatsApp, 44×44px, borda 1px `--ink`, fundo `--bg`, seta `↑`.
- Aparece só após rolar ~600px.
- Extra: anel/linha de progresso do scroll em `--accent` ao redor do botão.

---

## 5. Estrutura Next.js sugerida

```
app/
  layout.tsx            # fontes, metadata, Header, Footer, FloatingButtons
  page.tsx              # Home
  cases/[slug]/page.tsx
components/
  layout/Header.tsx
  layout/Footer.tsx
  layout/FloatingButtons.tsx   # WhatsApp + BackToTop
  home/Hero.tsx
  home/TerminalDemo.tsx
  home/Manifesto.tsx
  home/Services.tsx
  home/SmartCatalog.tsx        # fluxo + demo interativa
  home/Process.tsx
  home/Cases.tsx
  home/Testimonials.tsx
  home/FinalCta.tsx
  ui/SectionLabel.tsx          # "03 / 07  O QUE FAZEMOS"
  ui/Cursor.tsx                # "_" piscando
  ui/Button.tsx
lib/
  content.ts                   # textos, serviços, cases (fácil de editar)
styles/
  globals.css                  # tokens CSS
```

Stack: Next.js (App Router) + TypeScript + Tailwind (com os tokens em `tailwind.config`) + Framer Motion.

**Tailwind — travar a paleta:**
```ts
theme: {
  colors: {
    bg: '#EDEBE6',
    ink: '#111111',
    accent: '#FF5A1F',
    muted: '#8A8A85',
    transparent: 'transparent',
  },
  borderRadius: { none: '0' },
  fontFamily: {
    sans: ['var(--font-inter)'],
    mono: ['var(--font-mono)'],
  },
}
```
Sobrescrever `colors` e `borderRadius` (não `extend`) impede que alguém use cor ou arredondamento fora da marca.

---

## 6. Checklist anti-"layout de IA"
- [ ] Nenhuma cor fora das 4 da paleta
- [ ] `border-radius: 0` em tudo
- [ ] Sem gradientes, sombras, blur ou glassmorphism
- [ ] Sem ícones 3D/coloridos — só traço fino
- [ ] Sem emojis na interface
- [ ] Grid com linhas finas visíveis (estética editorial/técnica)
- [ ] Labels mono em caixa alta com numeração
- [ ] Cursor `_` laranja nos títulos-chave
- [ ] Imagens em P&B ou tons neutros
- [ ] Nada de "hero centralizado com 3 cards embaixo"

## 7. SEO / Técnico
- `metadata` com título: `ProdTech_ — Sites, bots, automações e apps sob medida`
- Open Graph usando a arte do post Instagram do branding
- Lighthouse > 90, imagens via `next/image`, fontes via `next/font`
- Acessibilidade: contraste ok (laranja só em elementos grandes ou decorativos sobre `--bg`), foco visível em `--accent`