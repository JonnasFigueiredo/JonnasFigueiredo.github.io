export type Projeto = {
  nome: string;
  origem: string; // a raiz mitológica do nome
  descricao: string;
  stack: string[];
  repo: string;
  grupo: 'qualidade-ia' | 'automacao' | 'experimentos';
  destaque?: boolean;
};

const repo = (n: string) => `https://github.com/JonnasFigueiredo/${n}`;

export const projetos: Projeto[] = [
  {
    nome: 'Aletheia',
    origem: 'ἀλήθεια — "verdade", o que não está oculto',
    descricao:
      'Framework Java para avaliar LLMs de forma determinística e agnóstica de provedor. ' +
      'Transforma "esse prompt melhorou ou piorou?" em um teste de CI com resposta objetiva.',
    stack: ['Java 17', 'JUnit', 'GitHub Actions'],
    repo: repo('Aletheia'),
    grupo: 'qualidade-ia',
    destaque: true,
  },
  {
    nome: 'Pythia',
    origem: 'Πυθία — a sacerdotisa oracular de Delfos',
    descricao:
      'Serviço RAG enxuto acompanhado da suíte PyTest que prova que ele funciona: métricas de ' +
      'retrieval, checagem de fidelidade, baseline de regressão de prompt e testes de segurança. ' +
      'Roda em CI sem custo de API.',
    stack: ['Python 3.11', 'PyTest', 'RAG'],
    repo: repo('Pythia'),
    grupo: 'qualidade-ia',
    destaque: true,
  },
  {
    nome: 'Argos',
    origem: 'Ἄργος Πανόπτης — o gigante de cem olhos, que tudo vigia',
    descricao:
      'Validador de qualidade para projetos de automação Selenium, Cucumber e Java. ' +
      'Regras estruturais rodam sem consumir tokens; a análise semântica por LLM é opcional. ' +
      'Também exposto como servidor MCP.',
    stack: ['Java', 'Selenium', 'MCP'],
    repo: repo('Argos'),
    grupo: 'qualidade-ia',
    destaque: true,
  },
  {
    nome: 'Hefesto',
    origem: 'Ἥφαιστος — o deus da forja',
    descricao:
      'Plataforma de QA/PO assistida por IA, também exposta como servidor MCP. Recebe um ' +
      'requisito em texto ou print de tela e devolve história no Jira, casos de teste e ' +
      'relatório de cobertura.',
    stack: ['IA', 'MCP', 'Jira'],
    repo: repo('hefesto'),
    grupo: 'qualidade-ia',
  },
  {
    nome: 'Castalia',
    origem: 'Κασταλία — a fonte de água que inspirava os poetas',
    descricao:
      'Motor de retrieval open source em Java para arquiteturas RAG agênticas. Indexa ' +
      'documentação técnica e a devolve, com a fonte, para agentes de IA via MCP. ' +
      'Não gera resposta: só recupera o trecho certo.',
    stack: ['Java', 'MCP', 'RAG'],
    repo: repo('Castalia'),
    grupo: 'qualidade-ia',
  },
  {
    nome: 'Hermes',
    origem: 'Ἑρμῆς — o mensageiro, que atravessa todos os mundos',
    descricao:
      'Framework de testes E2E mobile multiplataforma (Android e iOS) com Appium 2, Java 21 e ' +
      'Cucumber. Cenários Gherkin em português, relatórios em Allure e Masterthought.',
    stack: ['Java 21', 'Appium 2', 'Cucumber', 'JUnit 5'],
    repo: repo('Hermes'),
    grupo: 'automacao',
    destaque: true,
  },
  {
    nome: 'Midas',
    origem: 'Μίδας — o rei que transformava em ouro o que tocava',
    descricao:
      'API de serviços financeiros totalmente containerizada, construída para demonstrar uma ' +
      'stack moderna de Quality Engineering: Spring Boot e MySQL em Docker, testes de API e ' +
      'integração contra ambiente conteinerizado, validação de dados via SQL.',
    stack: ['Spring Boot', 'MySQL', 'Docker'],
    repo: repo('Midas'),
    grupo: 'automacao',
  },
  {
    nome: 'Ulisses',
    origem: 'Ὀδυσσεύς — o que foi reconhecido ao voltar para casa',
    descricao:
      'Biometria facial por vídeo com reconhecimento 100% local: nenhuma imagem sai da ' +
      'infraestrutura. Prova de vida ativa com anti-spoofing, apps Android e iOS a partir da ' +
      'mesma base web.',
    stack: ['Java 21', 'React 18', 'Capacitor'],
    repo: repo('Ulisses'),
    grupo: 'experimentos',
  },
  {
    nome: 'Laleo',
    origem: 'λαλέω — "falar"',
    descricao:
      'Aplicativo open source de apoio ao desenvolvimento da fala de crianças de 3 a 10 anos. ' +
      'Exercícios de fonoaudiologia gamificados, avatar 3D interativo e conversa com IA, ' +
      'tudo em português do Brasil.',
    stack: ['PWA', 'IA', '3D'],
    repo: repo('Laleo'),
    grupo: 'experimentos',
  },
  {
    nome: 'Ginga Arena',
    origem: 'da ginga da capoeira',
    descricao:
      'Jogo de luta em que a webcam lê os movimentos do jogador e um avatar os replica na tela. ' +
      'O corpo é o controle.',
    stack: ['Visão computacional', 'Web'],
    repo: repo('GingaArena'),
    grupo: 'experimentos',
  },
];

export const grupos = [
  { id: 'qualidade-ia', titulo: 'Qualidade de IA', resumo: 'Testar sistemas não-determinísticos com rigor de engenharia.' },
  { id: 'automacao', titulo: 'Automação e backend', resumo: 'Frameworks e ambientes que sustentam entrega sem regressão.' },
  { id: 'experimentos', titulo: 'Experimentos', resumo: 'Coisas que construí porque queria ver funcionando.' },
] as const;
