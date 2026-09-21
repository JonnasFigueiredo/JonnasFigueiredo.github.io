// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { remarkStudyBlocks, rehypeStudyTables } from './src/utils/study-markup.mjs';

// Troque para o domínio definitivo antes do primeiro deploy.
// O `site` é obrigatório para gerar sitemap, RSS e URLs canônicas absolutas.
export default defineConfig({
  site: 'https://jonnasfigueiredo.github.io',
  integrations: [sitemap()],
  markdown: {
    remarkPlugins: [remarkStudyBlocks],
    rehypePlugins: [rehypeStudyTables],
    shikiConfig: { theme: 'github-dark-dimmed', wrap: true },
  },
});
