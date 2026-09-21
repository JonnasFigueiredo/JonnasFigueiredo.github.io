# Jonnas Figueiredo · Guia de regras de negócio

Site de Jonnas Figueiredo com o guia "Como dominar qualquer regra de negócio": guia prático, técnicas, textos de comunicação, leituras, uma ferramenta interativa de investigação e a página Sobre com os projetos. Astro estático. Os textos funcionam sem JavaScript; a ferramenta, o progresso de leitura e as estatísticas opcionais usam JavaScript.

## Rodar

```bash
npm run dev      # http://localhost:4321
npm run build    # gera dist/
npm run preview  # serve o dist/
```

## Onde mexer

| Quero... | Arquivo |
|---|---|
| Trocar domínio, e-mail, redes | `src/config.ts` e `astro.config.mjs` (`site`) |
| Adicionar/editar projeto | `src/data/projetos.ts` (campo `loja` para link de loja) |
| Escrever artigo | novo `.md` em `src/content/artigos/` |
| Capítulos e ordem de leitura | `chapters` em `src/data/learning.ts` |
| Leituras recomendadas | `readings` em `src/data/learning.ts` |
| Blocos visuais dos textos | `src/utils/study-markup.mjs` |
| Ferramenta interativa | `src/pages/ferramenta.astro`, `src/scripts/investigation.ts`, `src/data/investigation.ts` |
| Mudar a bio longa | `src/pages/sobre.astro` |
| Redes e projetos selecionados para o QR code | `src/pages/links.astro` |
| Cores e tipografia | `src/styles/global.css` (tokens no `:root`) |
| Itens do menu | `nav` em `src/config.ts` |

## Escrever um artigo

Crie `src/content/artigos/slug-do-artigo.md`. O nome do arquivo vira a URL
(`/artigos/slug-do-artigo`), então escolha pensando em busca.

```markdown
---
title: "Título do artigo"
description: "Uma frase. Vira a meta description e o texto do resultado no Google."
pubDate: 2026-09-01
tags: ["automação", "Selenium"]
draft: false
section: tecnica          # guia | tecnica | caso | leitura
category: 'Comunicação'   # rótulo exibido
whenUse: "Frase do bloco Quando usar."
---

Conteúdo em Markdown.
```

`draft: true` esconde o artigo do site, do RSS e do sitemap. Para o artigo
aparecer em Técnicas e no menu lateral, inclua o slug em `chapters`.

### Blocos visuais gerados a partir do Markdown

`src/utils/study-markup.mjs` transforma a marcação comum em blocos, sem
precisar de sintaxe especial:

- Citação (`>`) com uma pergunta curta vira item de pergunta.
- Citação que começa como mensagem ("Oi", "Pessoal", "Obrigado", "Resumo"...)
  vira "Mensagem de exemplo", com botão copiar. As demais viram "Exemplo".
- Seção `## Erros comuns` vira lista marcada.
- Seção `## Para praticar` vira bloco de exercício com "Fiz este exercício".
- Seção `## Na história do João` vira bloco de história.

## SEO

- JSON-LD `Person` + `WebSite` em todas as páginas, `BlogPosting` nos artigos,
  `ProfilePage` no /sobre
- `sameAs` ligando o domínio ao GitHub, LinkedIn e YouTube (é isso que consolida
  a entidade no Google) e `rel="me"` nos links de perfil
- Canonical absoluto, Open Graph, `sitemap-index.xml`, `robots.txt`, RSS
- HTML renderizado no build — nenhuma página depende de JavaScript para exibir conteúdo

## Deploy

Site em <https://jonnasfigueiredo.github.io>, hospedado no GitHub Pages.

- Branch **`main`** = código-fonte
- Branch **`gh-pages`** = site publicado (gerado, não editar na mão)

Para publicar qualquer alteração:

```bash
npm run deploy
```

Isso builda e envia o `dist/` para a `gh-pages`. O site atualiza em ~1 minuto.
Commitar na `main` é histórico; publicar é o `npm run deploy`.

O `public/.nojekyll` é obrigatório: sem ele o Pages roda Jekyll e descarta a
pasta `_astro/`, deixando o site sem CSS.

### Migrar para deploy automático (opcional)

Hoje a publicação é manual porque o token do `gh` não tem o escopo `workflow`.
Para automatizar, rode `gh auth login -h github.com -p https -w -s workflow`,
adicione um workflow usando `withastro/action@v3` + `actions/deploy-pages@v4`
e troque a origem em Settings → Pages para **GitHub Actions**.

## Migrar para domínio próprio

O endereço atual é `https://jonnasfigueiredo.github.io`. Quando registrar o
domínio (ex.: `jonnasfigueiredo.com.br` no [Registro.br](https://registro.br)):

1. Troque a URL em **dois** lugares: `site` em `astro.config.mjs` e `url` em
   `src/config.ts`. O `robots.txt`, o sitemap, o RSS e as canônicas saem daí.
2. Crie `public/CNAME` com uma única linha contendo o domínio, sem `https://`.
3. No DNS do domínio, aponte para o GitHub Pages:
   - `ALIAS`/`ANAME` na raiz → `jonnasfigueiredo.github.io`
   - ou quatro registros `A` → `185.199.108.153`, `185.199.109.153`,
     `185.199.110.153`, `185.199.111.153`
4. Settings → Pages → Custom domain → informe o domínio e marque **Enforce HTTPS**.
5. No Search Console, adicione a nova propriedade e use a ferramenta de
   **Mudança de endereço**. As URLs internas não mudam, então o histórico é preservado.

## Falta fazer

1. Verificar o site no [Google Search Console](https://search.google.com/search-console)
   e enviar o sitemap
2. Validar o JSON-LD no [Rich Results Test](https://search.google.com/test/rich-results)
3. Adicionar o link do site no GitHub, LinkedIn e na descrição do canal do YouTube
4. Imagem Open Graph (`public/og.png`, 1200×630) e favicon

## Páginas antigas

`/biblioteca` e `/artigos` redirecionam para `/tecnicas`, `/projetos` para
`/sobre#o-que-eu-construo` e `/palestras/regras-de-negocio` para `/guia`.

Os PDFs e o kit gerados em versões anteriores ficaram fora do repositório
(`public/materiais/` está no `.gitignore`). `scripts/build_materials.py` e
`src/data/materiais.json` ainda existem, mas não são usados pelo site atual.

## Estatísticas opcionais

A integração fica desativada enquanto `PUBLIC_GA_MEASUREMENT_ID` estiver vazio. `.env.example` contém o campo público a configurar quando houver uma propriedade GA4. Não colocar senha ou token nesse arquivo. Não há conta de Analytics criada nem coleta ativa nesta entrega.

Com um ID válido, o site solicita consentimento antes de carregar a tag. A recusa mantém todo o conteúdo disponível. As preferências podem ser alteradas no rodapé. Os eventos manuais são `page_view` e `resource_click`; o segundo usa `resource_id`, `link_path` e `page_path` para distinguir materiais e navegação. Não são enviados textos digitados, respostas da ferramenta ou parâmetros da URL. A página da ferramenta não carrega a integração.

Antes de ativar em produção, revise a política de privacidade, desative a medição otimizada automática no fluxo de dados do GA4 para não duplicar eventos nem habilitar coleta fora desta configuração, e valide no DebugView ou relatório em tempo real. Bloqueadores e recusas tornam as contagens parciais. Um clique de download não prova que a pessoa leu o arquivo.

A implementação segue a documentação oficial de [consentimento](https://developers.google.com/tag-platform/security/concepts/consent-mode) e [visualizações de página](https://developers.google.com/analytics/devguides/collection/ga4/views). Não há pings de Analytics anteriores ao consentimento nesta configuração básica.

## Verificação local

Execute `npm run check` e `npm run build`. Os testes ficam em `tests/site.spec.ts`; rode `npx playwright test` com Chrome instalado, ou configure `PLAYWRIGHT_CHANNEL` para outro canal compatível. Para reaproveitar um servidor de desenvolvimento já aberto, use `PLAYWRIGHT_PORT` (ex.: `PLAYWRIGHT_PORT=4330 npx playwright test`). O relatório é local e não entra na publicação. Use `ASTRO_TELEMETRY_DISABLED=1` para desativar a telemetria da ferramenta durante os comandos, se necessário.

O fluxo de publicação é manual: código-fonte em `main`, saída gerada em `gh-pages`. Antes de publicar, execute a checagem, o build e os testes descritos acima.

## Links para os QR codes da palestra

- Guia: <https://jonnasfigueiredo.github.io/guia/>
- Redes e projetos: <https://jonnasfigueiredo.github.io/links/>

A página de links reúne LinkedIn, GitHub, YouTube, e-mail, o guia e os projetos Proteu QA, Hefesto e Hermes. Os demais projetos ficam acessíveis pelo perfil do GitHub.
