// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Troque para o domínio definitivo antes do primeiro deploy.
// O `site` é obrigatório para gerar sitemap, RSS e URLs canônicas absolutas.
export default defineConfig({
  site: 'https://jonnasfigueiredo.github.io',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: { theme: 'github-dark-dimmed', wrap: true },
  },
});
