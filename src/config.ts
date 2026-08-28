export const site = {
  url: 'https://jonnasfigueiredo.github.io',
  name: 'Jonnas Figueiredo',
  jobTitle: 'QA Automation Engineer e SDET',
  // Usada como <meta name="description"> padrão e no JSON-LD.
  description:
    'Jonnas Figueiredo é engenheiro de automação de testes (QA/SDET) especializado em Java, ' +
    'Selenium, Appium e Playwright. Projetos open source e artigos sobre qualidade de software.',
  locale: 'pt-BR',
  email: 'jonnas.figueiredo01@hotmail.com',
  // `sameAs` é o que consolida a entidade no Google. Só perfis que você controla.
  profiles: {
    github: 'https://github.com/JonnasFigueiredo',
    linkedin: 'https://www.linkedin.com/in/jonnas-figueiredo-576a14181',
    youtube: 'https://www.youtube.com/@JonnasFigo',
  },
} as const;

export const sameAs = Object.values(site.profiles);

// A seção de artigos está fora do ar até existir conteúdo.
// Para reativar: descomente a linha abaixo, restaure src/pages/artigos/index.astro
// (está no histórico do git) e volte o link do RSS no rodapé.
export const nav = [
  { href: '/', label: 'Início' },
  { href: '/projetos', label: 'Projetos' },
  // { href: '/artigos', label: 'Artigos' },
  { href: '/sobre', label: 'Sobre' },
];
