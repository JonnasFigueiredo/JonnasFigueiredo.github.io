export const site = {
  url: 'https://jonnasfigueiredo.github.io',
  name: 'Jonnas Figueiredo',
  jobTitle: 'QA Automation Engineer / SDET',
  // Usada como <meta name="description"> da home e no JSON-LD.
  description:
    'Engenheiro de automação de testes (QA/SDET). Escrevo sobre qualidade de software, ' +
    'automação de testes e avaliação de sistemas de IA.',
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

export const nav = [
  { href: '/', label: 'Início' },
  { href: '/projetos', label: 'Projetos' },
  { href: '/artigos', label: 'Artigos' },
  { href: '/sobre', label: 'Sobre' },
];
