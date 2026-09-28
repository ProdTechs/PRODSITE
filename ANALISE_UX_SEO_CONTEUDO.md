# Análise UX, conteúdo, SEO e busca por IA — ProdTech

Data da análise: 28/09/2026  
Escopo: código e conteúdo disponíveis no repositório. Não inclui dados de tráfego, Search Console, Analytics, concorrentes ou pesquisa com usuários.

## Diagnóstico em uma frase

O site tem uma direção visual forte, boa legibilidade e uma navegação enxuta, mas hoje se apresenta principalmente como uma fábrica de “sites, bots, automações e apps”. O posicionamento deve ser **consultoria digital, tecnológica e de produto**: a ProdTech atua como braço de produto, entende processo e negócio, prioriza necessidades, constrói em sprints, implanta, treina e acompanha o sucesso.

## O que está bom e deve ser preservado

- A página pode continuar objetiva mesmo após a simplificação recomendada: hero, posicionamento, método, capacidades, soluções de referência e contato. Não adicionar seções sem uma pergunta de decisão clara para resolver.
- A estética editorial, os espaços em branco, a tipografia e o contraste produzem percepção de produto premium e evitam poluição visual.
- Há um único objetivo principal recorrente: iniciar uma conversa. O formulário é curto e os rótulos dos campos estão claros.
- A arquitetura semântica básica é saudável: há `lang="pt-BR"`, `main`, link de pular para conteúdo, rótulos de navegação e estados de redução de movimento.
- Os “cases” são marcados como **Conceito**. Essa transparência deve ser mantida até haver autorização para publicar resultados reais.

## Prioridade 0 — corrigir antes de divulgar ou indexar

### Corrigir

1. Substituir `55XXXXXXXXXXX` por um número real em E.164. Hoje todos os links de WhatsApp e o envio do formulário falham. Também confirmar e-mail, Instagram e LinkedIn: os perfis atuais são genéricos.
2. Implementar `/robots.txt` e `/sitemap.xml` dinâmicos do Next.js. O sitemap deve conter apenas URLs canônicas e indexáveis: `/` e as aplicações de referência/projetos realizados que a empresa decidir manter públicos.
3. Adicionar `canonical` na home e nas páginas de case; definir `alternates.languages` somente se futuras versões em outro idioma forem realmente publicadas.
4. Configurar uma imagem Open Graph verificável por página e validar a URL publicada. Há gerador de imagem no projeto, mas os metadados não a declaram explicitamente.
5. Publicar política de privacidade e inserir um link ao lado do formulário: “Ao enviar, você será direcionado ao WhatsApp. Consulte nossa Política de Privacidade.” Se usar pixels, Analytics ou CRM, incluir também consentimento compatível com LGPD e finalidade do tratamento.
6. Conectar o domínio ao Google Search Console e Bing Webmaster Tools; enviar o sitemap, inspecionar a home e um case, e acompanhar erros de indexação.

### Remover ou suspender

1. Remover os indicadores `+ Leads qualificados`, `24/7 Atendimento` e `100% Sob medida` enquanto não houver definição e evidência mensurável. “+” sem base parece erro; “100%” é absoluto e reduz confiança.
2. Não indexar páginas de “case” que sejam somente cenários hipotéticos, se a empresa não quiser que elas sejam confundidas com trabalho entregue. A alternativa preferível é mantê-las indexáveis, mas renomeá-las para **Soluções de referência** e exibir o aviso “cenário ilustrativo; não representa um cliente específico” também na listagem.

## Prioridade 1 — reposicionar a mensagem e reduzir carga cognitiva

### Decisão sobre os elementos marcados nas imagens

**A recomendação é retirar do hero o texto auxiliar, o terminal demonstrativo e a faixa de indicadores.** A leitura da sua colega faz sentido: juntos, esses três elementos empurram a página para a narrativa de catálogo + bot + CRM antes de a pessoa entender a proposta de consultoria. Eles também competem com o título, aumentam a altura inicial e exigem que o visitante decodifique uma simulação antes de saber se a ProdTech resolve o seu problema.

| Elemento marcado | Decisão | Motivo |
| --- | --- | --- |
| Texto “Sites, bots, automações e apps...” | **Substituir** | É uma lista de entregáveis e dilui a diferenciação. O hero precisa declarar a consultoria e o método. |
| Terminal com fluxo de lead | **Remover da home** | É específico demais e cria ancoragem em uma única solução. Pode virar ilustração curta em uma futura página de automação comercial, se houver demanda. |
| Faixa “+ Leads / 24/7 / 100%” | **Remover** | Além de não haver base/definição para os números, é uma convenção visual que aumenta ruído e não ajuda a decisão. |
| Rótulo “Cases” e linhas atuais da segunda imagem | **Reformular** | O conteúdo é conceitual; o rótulo e a tabela atual sugerem portfólio comprovado. A seção deve explicar capacidades sem simular prova social. |

Com essa remoção, o hero deve respirar: rótulo de posicionamento, título, uma frase de método e dois CTAs. A primeira dobra passa a responder claramente “quem é a ProdTech, como atua e qual é o próximo passo”.

### Trocar a promessa principal

**Mensagem atual:** “Não entregamos o mínimo. Entregamos o sistema inteiro.”  
É memorável, mas é abstrata, defensiva e cria uma promessa ampla antes de explicar como ela é cumprida.

**Recomendação de hero:**

> **Consultoria digital, tecnológica e de produto.**  
> Transformamos processos e necessidades prioritárias em produtos digitais — da análise do negócio aos sprints, entrega, treinamento e evolução.

CTA principal: **Conversar sobre meu processo**  
CTA secundário: **Entender como trabalhamos**

Esse texto explica oferta, método e desfecho em duas frases. “Digital, tecnológica e de produto” deve sempre vir acompanhada da explicação concreta acima; a expressão é abrangente e não pode depender de jargão para ser entendida.

### Reorganizar a home pela decisão do visitante

Ordem recomendada:

1. **Hero:** problema, proposta e CTA.
2. **Como a ProdTech atua como braço de produto:** uma explicação curta de 3 a 4 linhas; esta deve substituir o “manifesto” como segundo bloco.
3. **Método em cinco etapas:** análise de processo e negócio → requisitos e priorização → sprints com validação → entrega e treinamento → acompanhamento de sucesso do produto.
4. **O que pode ser construído:** agrupar as 8 frentes em 4 capacidades, em vez de 8 cartões equivalentes.
5. **Aplicações de referência:** mostrar cenários e capacidades; publicar cases reais separadamente quando existirem.
6. **CTA final e contato.**

Retirar a demo de catálogo da home neste momento. Ela pode voltar em uma futura página específica de automação comercial, apoiada por contexto, dados e uma necessidade comprovada. Na home, ela ocupa atenção desproporcional e sugere que a ProdTech vende essencialmente catálogo + bot.

### Consolidar serviços sem perder encontrabilidade

Na home, apresentar quatro grupos e uma descrição de uma linha cada:

| Capacidade | Inclui |
| --- | --- |
| Descoberta e estratégia de produto | análise de processo, requisitos, priorização e roadmap |
| Experiências digitais | sites, e-commerce, áreas de cliente e aplicativos |
| Operação inteligente | automações, integrações, dashboards e sistemas de gestão |
| Receita e relacionamento | CRM, captação, bots, atendimento e qualificação |

Manter os termos específicos em páginas próprias ou em um acordeão simples: isso atende buscas sem forçar o visitante a comparar oito cartões ao mesmo tempo.

### Ajustar o processo para o método real

Substituir os passos atuais por linguagem de produto e evidências de cada fase:

1. **Entendemos o contexto** — processo atual, objetivos, restrições e usuários.
2. **Priorizamos o que gera valor** — requisitos, hipótese, escopo inicial e critério de sucesso.
3. **Construímos em sprints** — entregas pequenas, validação frequente e decisões visíveis.
4. **Implantamos e capacitamos** — publicação, integrações, treinamento e documentação essencial.
5. **Acompanhamos o sucesso** — adoção, métricas, aprendizados e próxima prioridade.

Adicionar abaixo uma frase operacional: “Você acompanha decisões, escopo, entregas e próximos passos em cada ciclo.” Não prometer cadência, prazo ou disponibilidade que a empresa não consiga cumprir.

### Melhorar a atual seção “Cases”

Na imagem, há duas questões: **“Cases” é um rótulo forte demais para conteúdo conceitual** e cada linha lista setor e tecnologias antes de mostrar a decisão de negócio. A melhoria não é adicionar mais texto nem cartões; é mudar a função da seção.

**Enquanto não houver projetos autorizados, usar:**

- Rótulo: **Aplicações de referência**
- Título: **Problemas que podemos transformar em produto.**
- Texto de apoio: “Cenários ilustrativos que mostram como conectamos processo, tecnologia e resultado. Cada projeto começa pelo contexto do seu negócio.”
- Linha de cada aplicação: **problema prioritário → solução possível → resultado que será medido**. Exemplo: “Leads dispersos no atendimento → catálogo conectado ao CRM e à qualificação → tempo de resposta e conversão acompanhados.”
- Remover `stack` da listagem. Tecnologias não são o primeiro critério de escolha do cliente e desviam a atenção do problema.
- Exibir “Cenário ilustrativo” de forma visível em cada item e no topo da seção, em vez de depender da página interna para informar o status.

Quando houver trabalho real autorizado, criar uma seção separada chamada **Projetos realizados**. Em cada case real, mostrar cliente/setor quando permitido, ponto de partida, decisão de produto, entrega, período, papel da ProdTech e resultado observado com métrica e contexto. Não misturar os dois formatos: isso protege a credibilidade da marca.

## Conteúdo: o que adicionar, ajustar e remover

### Adicionar

- Um bloco “Para quem é” com 2–3 perfis concretos (por exemplo: operação com processos manuais, comercial com leads dispersos, empresa que precisa validar uma nova solução). Evitar listar todos os setores possíveis.
- Um bloco “O que você recebe no início” com entregáveis reais: mapa do processo, prioridades, escopo inicial, plano de sprints e critérios de sucesso. Isso reduz incerteza e melhora a qualidade do lead.
- Um bloco curto “Quando não faz sentido nos contratar”: por exemplo, “se você só precisa de um template sem descoberta ou não tem disponibilidade para validar decisões”. É um uso honesto de aversão à perda e aumenta qualificação sem pressão artificial.
- Perguntas frequentes de intenção alta, em HTML visível e conciso: “O que é uma sprint?”, “Vocês trabalham com sistemas existentes?”, “O que acontece depois do diagnóstico?”, “Como definimos prioridades?”, “Vocês treinam a equipe?”. Responder com informação real, não com texto para robôs.
- Página institucional `/sobre` com identidade legal, cidade/área atendida, equipe ou responsáveis (quando autorizados), forma de trabalho e canais oficiais.
- Páginas de intenção para as capacidades prioritárias, somente quando houver conteúdo próprio: `/desenvolvimento-de-produtos-digitais`, `/automacao-de-processos`, `/desenvolvimento-de-sistemas`, `/sites-que-convertem`. Cada página deve trazer problema, para quem, abordagem, entregáveis, limites, FAQ e CTA; não duplicar a home.
- Cases reais estruturados com contexto, recorte do problema, decisão de produto, solução, período, papel da ProdTech e métricas autorizadas. Trocar “resultado esperado” por “resultado observado” apenas quando houver prova.

### Ajustar

- Sustentar o posicionamento **Consultoria digital, tecnológica e de produto** em título, descrição, conteúdo e páginas de serviço. Usar “estratégia e desenvolvimento de produto digital” como explicação complementar, não como substituição do posicionamento.
- Manter “sites, bots, automações e apps” como exemplos de meios, não como a definição da empresa.
- Trocar “Tudo o que o seu negócio precisa rodar” por algo específico, como “Do processo prioritário à solução em produção.”
- Trocar “Um catálogo que vende sozinho” por “Um catálogo que conecta interesse, atendimento e vendas.” A versão atual sugere autonomia total e pode gerar expectativa irreal.
- Trocar “Diagnóstico gratuito” por “Conversa inicial de diagnóstico” se a call não entregar uma análise completa gratuita. Explicar duração, objetivo e o que a pessoa recebe; clareza reduz fricção melhor do que urgência artificial.
- Dar títulos de busca às páginas de case: `Catálogo e qualificação de leads para varejo | Solução de referência | ProdTech`, em vez de apenas o título do case.
- Incluir Fortaleza apenas onde houver relevância: title, descrição, página sobre e perfil de negócio. Não repetir a cidade em todos os parágrafos.

### Remover ou evitar

- Comparações genéricas com “o mercado” (“site bonito e parado”, “bot com menu engessado”). Elas criam um inimigo vago e repetem a mesma tese que o método pode provar melhor.
- Frases absolutas: “vende sozinho”, “sistema inteiro”, “sem letra miúda”, “100%”, “nenhum contato perdido”. Trocar por condições, processo e resultados verificáveis.
- “Stack” técnico na área principal de um case, salvo se o público decisor realmente pedir isso. Mover para “Tecnologias e integrações” secundário; primeiro vem problema, decisão e impacto.
- Depoimentos, logos, contadores, selos, prêmios e métricas sem consentimento ou evidência. Prova social fictícia destrói credibilidade e pode ferir políticas de busca.
- Urgência falsa, escassez inventada, pop-ups de saída, carrosséis automáticos e CTAs concorrentes. Não são necessários para esta proposta consultiva.

## UX e vieses cognitivos: aplicação ética

| Princípio | Aplicação recomendada | Limite ético |
| --- | --- | --- |
| Fluência cognitiva | Um título por ideia, frases concretas, quatro capacidades e um CTA prioritário. | Não simplificar a ponto de esconder escopo, custos ou dependências. |
| Redução de incerteza | Mostrar método, entregáveis da conversa inicial e etapas após a contratação. | Não chamar a reunião de “diagnóstico” se ela for apenas comercial. |
| Efeito de enquadramento | Apresentar a compra como redução de retrabalho, filas e decisões sem dados; não como “comprar tecnologia”. | Não inflar perdas nem usar medo para pressionar. |
| Prova social | Cases verificáveis, contexto e métricas com data/período. | Não usar cases conceituais, logos ou números como se fossem clientes/resultados reais. |
| Compromisso progressivo | CTA de baixa fricção: “conversa inicial de 30 min”; formulário de dois campos. | Sem adicionar opt-ins ocultos ou sequências de contato não consentidas. |
| Autoridade | Mostrar método, responsáveis, especialidades e documentação de decisões. | Não alegar certificações, parcerias ou expertise que não possam ser comprovadas. |
| Escolha guiada | “Não sei ainda” no formulário e roteiro de triagem por desafio. | Não empurrar solução pré-definida antes de entender o processo. |

## Prontidão para Google, IA e outros buscadores

### Fundamentos técnicos

- Criar `src/app/robots.ts` e `src/app/sitemap.ts`; declarar o sitemap no robots.
- Adicionar canonical, Open Graph e Twitter consistentes a cada URL pública. Confirmar redirecionamento único entre `www` e não-`www`, HTTPS e URLs sem duplicatas.
- Inserir dados estruturados JSON-LD que correspondam ao conteúdo visível: `Organization` ou o subtipo local adequado, `WebSite` e `Service`/`OfferCatalog` para capacidades reais. Incluir nome, URL, logo, e-mail, telefone, área atendida e `sameAs` apenas quando verdadeiros. Não marcar avaliações inexistentes.
- Em páginas de case publicadas, usar `BreadcrumbList`; não usar marcação de FAQ para perguntas que não aparecem na página.
- Criar páginas de erro e 404 úteis, conferir responsividade, contraste, foco de teclado e fluxo de menu mobile.
- Medir Core Web Vitals em produção, especialmente LCP no hero, CLS por fontes/imagens e INP nas demos. Remover ou adiar interações que não apoiem compreensão ou conversão.
- Validar dados estruturados no Rich Results Test e o HTML renderizado no URL Inspection depois do deploy.

### Conteúdo encontrável e citável por ferramentas de IA

Não existe uma tag, schema ou “otimização para IA” que garanta menção em respostas generativas. A base é a mesma do SEO: página indexável, conteúdo original e útil, boa estrutura, reputação e informações que possam ser verificadas.

- Escrever respostas diretas logo após cada H2, seguidas de detalhes. Exemplo: “A ProdTech é um braço de produto digital que transforma processos prioritários em soluções entregues em sprints.”
- Usar títulos que respondem a intenções reais, como “Como priorizamos requisitos de um produto digital” e “O que acontece após a entrega de um sistema”.
- Atribuir dados e afirmações, indicar data de atualização e expor autoria/responsável onde possível. Isso melhora confiança humana e legibilidade por sistemas de recuperação.
- Preferir uma página profunda e específica por intenção a muitas páginas quase iguais que trocam apenas “site”, “app” e “automação”.
- Manter o conteúdo principal no HTML sem depender de interação para revelar explicações importantes. A demo é complementar; não deve ser a única explicação da oferta.
- Permitir rastreamento normal se o objetivo é descoberta. Controles como `noindex`, `nosnippet` e regras de rastreio reduzem visibilidade; usar somente com decisão consciente de privacidade ou exclusão.
- Construir sinais externos legítimos: Perfil da Empresa no Google completo, citações locais consistentes (nome/endereço/telefone), LinkedIn preenchido, parceiros e cases com links autorizados. Não comprar links ou menções.

## Plano de implementação enxuto

### Fase 1 — lançamento confiável

1. Corrigir contatos e links externos.
2. Implementar sitemap, robots, canonical, OG e dados estruturados básicos.
3. Adicionar privacidade/LGPD e configurar Search Console, Bing Webmaster Tools e Analytics com eventos de CTA/formulário.
4. Validar build, navegação mobile, formulário, Rich Results Test e URL Inspection.

### Fase 2 — clareza de posicionamento

1. Reescrever hero, bloco de posicionamento e processo com o método de braço de produto.
2. Agrupar serviços em quatro capacidades e retirar a área de catálogo da home.
3. Transformar os cases conceituais em aplicações de referência e ajustar títulos, rótulos e metadados.
4. Publicar a página Sobre e FAQ apenas com respostas aprovadas pela equipe.

### Fase 3 — autoridade sustentável

1. Publicar 2–4 páginas de capacidade prioritária e 2 cases reais, com autorização e métricas verificáveis.
2. Criar calendário leve de conteúdo baseado em dúvidas recorrentes das vendas e entregas — não em volume de palavras-chave.
3. Revisar mensalmente consultas, páginas indexadas, conversões por CTA e dúvidas que geram abandono; atualizar páginas conforme evidência.

## Métricas de sucesso

- **Descoberta:** URLs indexadas, impressões e consultas não-branded em Search Console; aparições no Bing Webmaster Tools.
- **Qualidade:** cliques para WhatsApp, envios do formulário, taxa de agendamento e proporção de leads alinhados ao perfil ideal.
- **Compreensão:** em testes rápidos, visitantes conseguem explicar em uma frase o que a ProdTech faz e citar pelo menos uma etapa do método.
- **Produto:** tempo até primeira entrega, adoção após treinamento, objetivo/métrica acordada por projeto e recorrência de evolução.

Evitar usar apenas sessões, seguidores ou posição média como prova de sucesso. O objetivo é atrair a demanda certa e converter uma conversa qualificada em produto entregue com resultado.

## Verificações pendentes

- O build não foi concluído nesta análise porque `yarn` não está instalado e as dependências do projeto não estão presentes (`next: command not found` ao executar `npm run build`). Depois de instalar as dependências com o gerenciador definido pelo projeto, executar o build e testar as rotas em produção/localmente.
- Confirmar dados institucionais reais: razão/nome comercial, endereço ou área atendida, telefone, e-mail, perfis sociais, horário se aplicável, política de privacidade e autorização de cases.

## Referências técnicas consultadas

- Google Search Central — [SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- Google Search Central — [AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
- Google Search Central — [Local Business structured data](https://developers.google.com/search/docs/appearance/structured-data/local-business)
- Google Search Central — [Organization structured data](https://developers.google.com/search/docs/appearance/structured-data/organization)
- Google Search Central — [Build and submit a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
