import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { site } from '../config';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async (context) => {
  const artigos = (await getCollection('artigos', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  return rss({
    title: `${site.name} — Artigos`,
    description: site.description,
    site: context.site ?? site.url,
    trailingSlash: false,
    items: artigos.map((artigo) => ({
      title: artigo.data.title,
      description: artigo.data.description,
      pubDate: artigo.data.pubDate,
      link: `/artigos/${artigo.id}`,
      categories: artigo.data.tags,
    })),
    customData: `<language>pt-br</language>`,
  });
};
