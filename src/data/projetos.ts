export type Grupo = 'automacao' | 'qualidade-ia';

export type Projeto = {
  nome: string;
  /** Uma linha que resume o projeto. Usada nos cards compactos da home. */
  resumo: string;
  /** A raiz do nome, quando existe. Nem todo projeto tem. */
  origem?: string;
  descricao: string;
  stack: string[];
  repo: string;
  linguagem: string;
  grupo: Grupo;
  /** Marcado nos repositórios que estão fixados no perfil do GitHub. */
  destaque?: boolean;
};

const repo = (n: string) => `https://github.com/JonnasFigueiredo/${n}`;

export const grupos: { id: Grupo; titulo: string; resumo: string }[] = [
  {
    id: 'automacao',
    titulo: 'Automação de testes',
    resumo: 'Frameworks e ferramentas para testar aplicações web, mobile e API em CI.',
  },
  {
    id: 'qualidade-ia',
    titulo: 'Qualidade de sistemas de IA',
    resumo: 'Como testar software que não devolve a mesma resposta duas vezes.',
  },
];

export const projetos: Projeto[] = [
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
    grupo: 'automacao',
    destaque: true,
  },
  {
    nome: 'ShopGuard',
    resumo: 'Suíte Playwright de e-commerce que passa do caminho feliz',
    descricao:
      'Framework de testes end-to-end para e-commerce com Playwright e TypeScript. Cobre ' +
      'cross-browser, mobile, regressão visual, acessibilidade e API. Page Object Model por ' +
      'composição, fixtures próprias e login único por storageState, integrado a GitHub Actions ' +
      'e Allure.',
    stack: ['TypeScript', 'Playwright', 'Allure'],
    repo: repo('ShopGuard'),
    linguagem: 'TypeScript',
    grupo: 'automacao',
    destaque: true,
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
    grupo: 'automacao',
    destaque: true,
  },
  {
    nome: 'Midas',
    resumo: 'API containerizada como campo de provas de Quality Engineering',
    origem: 'Μίδας, o rei que transformava em ouro o que tocava',
    descricao:
      'API de serviços financeiros (contas e transações) totalmente containerizada, construída ' +
      'para demonstrar uma stack moderna de Quality Engineering: Spring Boot e MySQL em Docker, ' +
      'testes de API e integração contra ambiente conteinerizado, validação de dados via SQL e ' +
      'CI no GitHub Actions.',
    stack: ['Spring Boot', 'MySQL', 'Docker'],
    repo: repo('Midas'),
    linguagem: 'Java',
    grupo: 'automacao',
  },
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
    grupo: 'qualidade-ia',
    destaque: true,
  },
  {
    nome: 'Aletheia',
    resumo: 'Avaliação de LLMs como teste de CI, com resposta objetiva',
    origem: 'ἀλήθεια, "verdade", o que não está oculto',
    descricao:
      'Framework Java determinístico e independente de provedor para testar qualidade de LLMs ' +
      'em CI. Baseline versionado, cliente mock sem custo de API e gate que quebra o build ' +
      'quando a qualidade regride.',
    stack: ['Java 17', 'JUnit', 'GitHub Actions'],
    repo: repo('Aletheia'),
    linguagem: 'Java',
    grupo: 'qualidade-ia',
  },
  {
    nome: 'Pythia',
    resumo: 'Serviço RAG com a suíte PyTest que prova que ele funciona',
    origem: 'Πυθία, a sacerdotisa oracular de Delfos',
    descricao:
      'Aplicação RAG acompanhada de uma suíte de qualidade de IA em PyTest: métricas de ' +
      'retrieval, checagem de fidelidade, baselines de regressão de prompt e testes de ' +
      'segurança. Determinística em CI e com custo zero de API.',
    stack: ['Python 3.11', 'PyTest', 'RAG'],
    repo: repo('Pythia'),
    linguagem: 'Python',
    grupo: 'qualidade-ia',
  },
];

export const destaques = projetos.filter((p) => p.destaque);
