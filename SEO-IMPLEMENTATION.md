# SEO, GEO & AEO — Documentacao de implementacao

> ProdTech_ — Landing page otimizada para Google, mecanismos de IA e conversao.

---

## 1. Resumo da estrategia

A ProdTech se posiciona como **a area de produto das empresas** — consultoria digital de Fortaleza que cria sites, bots com IA, automacoes, apps e sistemas de gestao sob medida. A landing page foi estruturada para:

1. Ter excelente indexacao no Google
2. Ser facilmente interpretada por mecanismos de IA (ChatGPT, Gemini, Perplexity)
3. Manter alta performance (Core Web Vitals)
4. Converter visitantes em leads via WhatsApp

---

## 2. SEO On-Page

### Title
```
ProdTech_ — Sites, bots, automacoes e apps sob medida
```
Combina marca + servicos + proposta de valor. Definido em `src/lib/content.ts` e aplicado via template `%s — ProdTech_`.

### Meta description
```
A ProdTech e uma consultoria digital de Fortaleza que atua como a area de produto das empresas. Sites, bots com IA, automacoes, apps e sistemas de gestao sob medida.
```
Define entidade + localizacao + servicos em ~160 caracteres.

### Headings (hierarquia)
- `<h1>`: unico por pagina (Hero na home, titulo do case nas paginas de case)
- `<h2>`: cada secao principal (Manifesto, Servicos, Processo, Referencias, FAQ, Contato)
- `<h3>`: itens dentro de secoes (servicos individuais, etapas do processo)

### Canonical
Definido em todas as paginas via `alternates.canonical`:
- `/` → `https://www.prodtech.com.br`
- `/cases/[slug]` → `https://www.prodtech.com.br/cases/[slug]`
- `/politica-de-privacidade` → `https://www.prodtech.com.br/politica-de-privacidade`

### Open Graph
Configurado globalmente no layout com type, locale (`pt_BR`), url, siteName, title, description. Twitter card: `summary_large_image`. OG image gerada dinamicamente via `opengraph-image.tsx`.

### Sitemap
Gerado dinamicamente via `src/app/sitemap.ts`. Inclui:
- Pagina principal (priority 1)
- 4 paginas de cases (priority 0.5)
- Politica de privacidade (priority 0.2)

### Robots
Permite todos os user agents em todas as rotas. Aponta para o sitemap.

---

## 3. Structured Data (JSON-LD)

### Schemas globais (todas as paginas — `layout.tsx`)
| Schema | Finalidade |
|---|---|
| `Organization` | Identifica a ProdTech como empresa com contato, endereco e redes |
| `ProfessionalService` | Identifica como servico profissional local em Fortaleza |
| `WebSite` | Identifica o site e seu publisher |

### Schemas da home (`page.tsx`)
| Schema | Finalidade |
|---|---|
| `FAQPage` | 8 perguntas e respostas para featured snippets e IA |
| `Service` (x8) | Um schema por servico oferecido |

### Schemas de cases (`cases/[slug]/page.tsx`)
| Schema | Finalidade |
|---|---|
| `BreadcrumbList` | Navegacao: ProdTech > Cases > [titulo] |

### Implementacao
- Fabricas de schemas: `src/lib/jsonld.ts`
- Componente de renderizacao: `src/components/ui/JsonLd.tsx`
- Todos os dados sao reais e verificaveis na pagina

---

## 4. GEO / AEO (Otimizacao para mecanismos de IA)

### Entidades claramente definidas
| Pergunta | Onde esta respondida |
|---|---|
| Quem e a ProdTech? | FAQ #1, meta description, JSON-LD Organization |
| O que faz? | Servicos (8 frentes), FAQ #3 |
| Para quem? | FAQ #2 |
| Qual problema resolve? | Manifesto (comparacao mercado vs ProdTech), Referencias |
| Como funciona? | Processo (5 etapas), FAQ #4 |
| Quanto custa? | FAQ #5 |
| Onde atua? | FAQ #6, JSON-LD address, Hero label |
| Trabalha com IA? | FAQ #8 |

### Secao FAQ
8 perguntas com respostas objetivas e auto-contidas (2-4 frases cada), sempre visiveis no HTML (sem accordion). Ideal para:
- Featured snippets do Google
- Extracao por ChatGPT, Gemini, Perplexity
- Schema FAQPage para rich results

### Conteudo factual
- Nenhum cliente ou depoimento inventado
- Cases marcados como "cenario ilustrativo"
- Stats do hero com valores reais ou genericos honestos
- Secao de testimonials oculta ate haver depoimentos reais

---

## 5. Performance

| Aspecto | Status |
|---|---|
| Runtime dependencies | Apenas next, react, react-dom |
| Animacoes | CSS puro (clip-path, transform) |
| Server Components | Padrao em todas as paginas e maioria dos componentes |
| Client Components | Apenas 8 (scroll, menu, form, IntersectionObserver) |
| Fontes | next/font/google com pesos especificos |
| Imagens | Nenhuma raster (SVGs inline, wireframes) |
| React Compiler | Habilitado |

### Core Web Vitals
- **LCP**: HTML estatico, sem blocking resources
- **INP**: JS minimo no cliente
- **CLS**: Layouts estáveis, fontes pre-carregadas

---

## 6. Acessibilidade

| Recurso | Status |
|---|---|
| `lang="pt-BR"` | OK |
| Skip-to-content | OK |
| Heading hierarchy | OK (h1 > h2 > h3) |
| ARIA labels | OK (nav, botoes, landmarks) |
| `aria-hidden` em decorativos | OK |
| `prefers-reduced-motion` | OK |
| Focus states | OK (skip link, botoes) |
| Semantic HTML | OK (section, article, nav, main, header, footer, dl) |
| `inert` no menu fechado | OK |

---

## 7. Seguranca

Headers configurados em `next.config.ts`:
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Strict-Transport-Security` (HSTS com preload)
- `Permissions-Policy` (camera, mic, geo desabilitados)
- `X-DNS-Prefetch-Control: on`

---

## 8. Internal linking

| Origem | Destino | Tipo |
|---|---|---|
| Header | Secoes da home | Ancora |
| Footer | Secoes da home + externo | Ancora + links |
| Referencias (home) | 4 paginas de case | Link interno |
| Cases | Home (#cases) | Link interno |
| Cases | Proximo case | Link interno |
| Contato | Politica de privacidade | Link interno |

---

## 9. Checklist SEO

### On-Page
- [x] Title adequado com marca + beneficio
- [x] Meta description com entidade e servicos
- [x] H1 unico por pagina
- [x] H2/H3 semanticos
- [x] URLs amigaveis
- [x] Canonical em todas as paginas
- [x] Sitemap valido (sem rotas 404)
- [x] Robots.txt correto
- [x] Internal links contextuais
- [x] Alt text em elementos visuais
- [x] Open Graph completo
- [x] Structured Data (5 schemas)

### GEO/AEO
- [x] Empresa claramente definida
- [x] Servicos claramente definidos
- [x] Publico claramente definido
- [x] Problema claramente definido
- [x] Solucao claramente definida
- [x] Beneficios claros
- [x] FAQ com respostas objetivas
- [x] Entidades bem definidas no JSON-LD
- [x] Informacoes verificaveis
- [x] Conteudo semanticamente estruturado

### Performance
- [x] JS minimo no cliente
- [x] Fontes otimizadas
- [x] Server Components
- [x] CSS otimizado
- [x] Sem bibliotecas pesadas

### Conversao
- [x] Proposta de valor clara no Hero
- [x] CTA no Hero
- [x] CTA no Header
- [x] CTA final (secao Contato)
- [x] Botao flutuante de WhatsApp
- [x] FAQ para reducao de objecoes

---

## 10. TODOs pendentes

- [ ] Trocar numero de WhatsApp pelo real (`content.ts` linha 4)
- [ ] Confirmar e-mail e perfis sociais reais (`content.ts` linhas 21-23)
- [ ] Substituir stats do Hero por numeros reais (`content.ts` linhas 45-49)
- [ ] Configurar Google Search Console
- [ ] Adicionar analytics (Plausible/Fathom recomendado para manter privacidade)
- [ ] Substituir OG image provisoria pela arte do branding
- [ ] Adicionar cases reais quando autorizados
- [ ] Adicionar depoimentos reais (flag `SHOW_TESTIMONIALS`)

---

## 11. Recomendacoes futuras

### Curto prazo
- **Blog** com conteudo de autoridade tematica (content cluster): "como qualificar leads pelo WhatsApp", "bot vs atendimento humano", "quando automatizar processos"
- **Paginas individuais por servico** (`/servicos/[slug]`) para long-tail keywords
- **Pagina Sobre** com time, historia e experiencia (E-E-A-T)

### Medio prazo
- **OG images por case** (cada case com imagem unica no compartilhamento)
- **CSP com nonces** via Next.js middleware
- **Hreflang** se houver versao em ingles
- **Google Business Profile** vinculado ao schema LocalBusiness

### Longo prazo
- **Content cluster completo**: guias, comparativos, tutoriais, glossario
- **Link building** via participacao em eventos tech de Fortaleza
- **Schema Review** quando houver avaliacoes reais
- **Service Worker** para cache offline (ja tem PWA no stack de cases)

---

## 12. Arquivos criados/modificados

| Arquivo | Acao |
|---|---|
| `src/lib/jsonld.ts` | Criado — fabricas de schemas JSON-LD |
| `src/lib/content.ts` | Editado — FAQ, ABOUT, description melhorada, TOTAL_SECTIONS |
| `src/components/ui/JsonLd.tsx` | Criado — componente de renderizacao |
| `src/components/home/Faq.tsx` | Criado — secao FAQ (8 perguntas) |
| `src/components/home/Hero.tsx` | Editado — CTAs e stats strip |
| `src/components/home/Manifesto.tsx` | Editado — h2 sr-only |
| `src/components/home/References.tsx` | Editado — links para 4 cases |
| `src/app/page.tsx` | Editado — FAQ + JSON-LD schemas |
| `src/app/layout.tsx` | Editado — JSON-LD global (Organization, LocalBusiness, WebSite) |
| `src/app/sitemap.ts` | Editado — removidas rotas /v2 inexistentes |
| `src/app/cases/[slug]/page.tsx` | Editado — breadcrumb JSON-LD + fix link |
| `src/app/not-found.tsx` | Criado — 404 customizada |
| `next.config.ts` | Editado — security headers |
| `SEO-IMPLEMENTATION.md` | Criado — esta documentacao |
