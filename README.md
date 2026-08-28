# jonnasfigueiredo.com

Site pessoal — informações, projetos e artigos. Astro, estático, zero JavaScript no cliente.

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
| Adicionar/editar projeto | `src/data/projetos.ts` |
| Escrever artigo | novo `.md` em `src/content/artigos/` |
| Mudar a bio longa | `src/pages/sobre.astro` |
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
---

Conteúdo em Markdown.
```

`draft: true` esconde o artigo do site, do RSS e do sitemap.

## SEO — o que já está pronto

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

1. Ligar o Pages em Settings → Pages → Source: GitHub Actions
2. Verificar o site no [Google Search Console](https://search.google.com/search-console)
   e enviar o sitemap
3. Validar o JSON-LD no [Rich Results Test](https://search.google.com/test/rich-results)
4. Adicionar o link do site no GitHub, LinkedIn e na descrição do canal do YouTube
5. Imagem Open Graph (`public/og.png`, 1200×630) e favicon
6. Reescrever ou apagar os dois artigos-semente em `src/content/artigos/`
