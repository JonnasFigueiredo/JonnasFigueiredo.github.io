export type Projeto = {
  nome: string;
  /** Uma linha que resume o projeto. Vira o texto de apoio na listagem. */
  resumo: string;
  /** A raiz do nome, quando existe. Nem todo projeto tem. */
  origem?: string;
  descricao: string;
  stack: string[];
  repo: string;
  linguagem: string;
};

const repo = (n: string) => `https://github.com/JonnasFigueiredo/${n}`;

/**
 * Espelha os repositórios fixados no perfil do GitHub, na mesma ordem.
 * Ao trocar os destaques lá, atualize esta lista aqui.
 */
export const projetos: Projeto[] = [
  {
    nome: 'Hefesto',
    resumo: 'Do requisito ao caso de teste, sem trocar de aba',
    origem: 'Ἥφαιστος, o deus da forja',
    descricao:
      'Plataforma de QA e Product Owner assistida por IA, também exposta como servidor MCP. ' +
      'Recebe um requisito em texto ou print de tela e devolve história no Jira, casos de teste ' +
      'e relatório de cobertura. Funciona por interface web ou por linguagem natural via MCP.',
    stack: ['Java', 'IA', 'MCP', 'Jira'],
    repo: repo('hefesto'),
    linguagem: 'Java',
  },
  {
    nome: 'Proteu QA',
    resumo: 'Massa de teste e mapeamento de elementos direto no navegador',
    origem: 'Πρωτεύς, o deus que mudava de forma',
    descricao:
      'Extensão de Chrome (Manifest V3) que gera massa de dados de teste, senhas e mapeamento ' +
      'de elementos sem sair da página que você está testando. Roda totalmente offline e não ' +
      'coleta nada.',
    stack: ['JavaScript', 'Chrome MV3'],
    repo: repo('proteu'),
    linguagem: 'JavaScript',
  },
  {
    nome: 'Hermes',
    resumo: 'Testes E2E mobile em Android e iOS com a mesma suíte',
    origem: 'Ἑρμῆς, o mensageiro que atravessa todos os mundos',
    descricao:
      'Framework de testes end-to-end mobile com Appium 2, Java 21 e JUnit 5. Screen Object ' +
      'Model, gestos nativos, reset determinístico de estado e emulador Android rodando dentro ' +
      'do GitHub Actions. Cenários em português, relatórios em Allure.',
    stack: ['Java 21', 'Appium 2', 'JUnit 5', 'Allure'],
    repo: repo('Hermes'),
    linguagem: 'Java',
  },
  {
    nome: 'ShopGuard',
    resumo: 'Suíte Playwright de e-commerce que passa do happy path',
    descricao:
      'Framework de testes end-to-end para e-commerce com Playwright e TypeScript. Cobre ' +
      'cross-browser, mobile, regressão visual, acessibilidade e API. Page Object Model por ' +
      'composição, fixtures próprias e login único por storageState, integrado a GitHub Actions ' +
      'e Allure.',
    stack: ['TypeScript', 'Playwright', 'Allure'],
    repo: repo('ShopGuard'),
    linguagem: 'TypeScript',
  },
  {
    nome: 'Laleo',
    resumo: 'Apoio ao desenvolvimento da fala de crianças de 3 a 10 anos',
    origem: 'λαλέω, "falar"',
    descricao:
      'Aplicativo open source com exercícios de fonoaudiologia gamificados, avatar 3D ' +
      'interativo que fala e reage, e conversa com IA. Tudo em português do Brasil, rodando ' +
      'como PWA e preparado para empacotamento em Android e iOS.',
    stack: ['Java', 'PWA', 'IA', '3D'],
    repo: repo('Laleo'),
    linguagem: 'Java',
  },
];
