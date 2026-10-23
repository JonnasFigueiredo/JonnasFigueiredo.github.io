export type DevProject = {
  slug: string;
  name: string;
  category: 'Aplicações full stack' | 'Backend e sistemas';
  line: string;
  summary: string;
  status: string;
  stack: string[];
  source?: string;
  image?: { src: string; alt: string };
  problem: string;
  solution: string;
  decisions: { title: string; text: string }[];
  next: string;
};

export const devProjects: DevProject[] = [
  {
    slug: 'hefesto',
    name: 'Hefesto',
    category: 'Aplicações full stack',
    line: 'Requisitos, histórias e testes conectados ao Jira em um fluxo só.',
    summary:
      'Plataforma web para apoiar QA e Product Owners: transforma requisitos em histórias, casos de teste e análise de cobertura. A mesma lógica também é exposta a assistentes por um servidor MCP.',
    status: 'Open source',
    stack: ['Java 17', 'Spring Boot', 'React', 'TypeScript', 'Jira', 'MCP'],
    source: 'https://github.com/JonnasFigueiredo/hefesto',
    image: { src: '/dev/images/hefesto-jira.png', alt: 'Interface do Hefesto mostrando a integração com histórias do Jira' },
    problem:
      'Escrever histórias, revisar critérios, gerar testes e acompanhar cobertura costuma espalhar o contexto entre várias ferramentas. O objetivo foi reunir essas etapas sem perder a rastreabilidade no Jira.',
    solution:
      'Uma interface React organiza o trabalho de ponta a ponta. O backend Spring Boot integra Jira e provedores de IA, registra execuções e oferece as mesmas operações por ferramentas MCP.',
    decisions: [
      { title: 'Jira como fonte das histórias', text: 'A plataforma lê e atualiza issues e subtarefas, mantendo o vínculo entre critérios de aceite, testes e evidências.' },
      { title: 'Uma lógica, duas interfaces', text: 'Os fluxos podem ser acionados pela web ou por clientes MCP, sem duplicar a lógica de negócio.' },
      { title: 'Provedor de IA substituível', text: 'O projeto permite escolher modelos por tarefa, inclusive uma opção local, em vez de prender o fluxo a um único serviço.' },
    ],
    next: 'Para experimentar as integrações completas, é preciso configurar credenciais do Jira e do provedor de IA escolhido.',
  },
  {
    slug: 'ulisses',
    name: 'Ulisses',
    category: 'Aplicações full stack',
    line: 'Cadastro e comparação facial com inferência no backend.',
    summary:
      'Aplicação experimental de biometria facial com autenticação, captura guiada por câmera, histórico de verificações e uma demonstração de registro de entrada e saída.',
    status: 'Em validação',
    stack: ['Java 21', 'Spring Boot', 'React', 'ONNX Runtime', 'Docker'],
    source: 'https://github.com/JonnasFigueiredo/Ulisses',
    image: { src: '/dev/images/ulisses-inicio.png', alt: 'Tela inicial do Ulisses com opção de cadastro facial por vídeo' },
    problem:
      'Integrar captura de vídeo, verificação de identidade e proteção de dados em uma experiência que possa ser testada de ponta a ponta.',
    solution:
      'O frontend React guia cadastro e verificação. O backend Java autentica usuários e executa detecção, alinhamento e comparação facial com modelos ONNX, além de registrar o histórico.',
    decisions: [
      { title: 'Inferência no backend', text: 'O processamento dos modelos fica concentrado no serviço Java, permitindo controlar versões, regras e validação das entradas.' },
      { title: 'Segredos de produção explícitos', text: 'O perfil de produção exige configuração dos segredos de autenticação e criptografia dos templates.' },
      { title: 'Fluxo demonstrável', text: 'Cadastro, verificação e histórico formam um percurso completo, com builds Docker e testes automatizados das regras principais.' },
    ],
    next: 'A eficácia biométrica ainda precisa de testes com dados reais. O projeto não é uma solução antifraude certificada nem um sistema de ponto homologado.',
  },
  {
    slug: 'laleo',
    name: 'Laleo',
    category: 'Aplicações full stack',
    line: 'Exercícios de fala que unem produto, voz e interface infantil.',
    summary:
      'Aplicação web de apoio ao desenvolvimento da fala infantil, com exercícios, avatar 3D, acompanhamento de progresso e recursos de voz. Um produto que conecta experiência de uso, API Java e serviços de fala.',
    status: 'MVP funcional',
    stack: ['Java 17', 'Spring Boot', 'React', 'TypeScript', 'PostgreSQL'],
    source: 'https://github.com/JonnasFigueiredo/Laleo',
    image: { src: '/dev/images/laleo-exercicio.png', alt: 'Tela de exercício do Laleo com personagem e atividade de rima' },
    problem:
      'Criar uma experiência acessível para praticar sons da fala em português, sem transformar a atividade em uma sequência de formulários. A criança precisa entender o exercício e receber uma resposta clara a cada interação.',
    solution:
      'O frontend em React conduz as atividades e apresenta um avatar 3D. A API em Spring Boot mantém perfis, exercícios e progresso; um serviço separado processa a transcrição de áudio quando está disponível.',
    decisions: [
      { title: 'Separar as responsabilidades', text: 'A interface cuida da interação e da captura de áudio; a API concentra regras e progresso; a transcrição fica em um serviço próprio.' },
      { title: 'Deixar o estado da experiência explícito', text: 'Perfis por criança, estrelas e álbum permitem acompanhar o percurso sem misturar o progresso de usuários diferentes.' },
      { title: 'Tratar IA como recurso opcional', text: 'A conversa tem modo de demonstração. A chave do provedor permanece no servidor quando a integração real está configurada.' },
    ],
    next: 'O conteúdo e a pontuação de pronúncia ainda precisam de validação clínica antes de uso terapêutico real.',
  },
  {
    slug: 'midas',
    name: 'Midas',
    category: 'Backend e sistemas',
    line: 'API financeira com invariantes, concorrência e testes de integração.',
    summary:
      'API de contas e transações construída para demonstrar regras financeiras, consistência de dados e uma estratégia de testes que consulta tanto o contrato HTTP quanto o banco.',
    status: 'Open source',
    stack: ['Java 21', 'Spring Boot', 'MySQL', 'Flyway', 'Docker'],
    source: 'https://github.com/JonnasFigueiredo/Midas',
    problem:
      'Uma API de transações precisa continuar correta quando há falhas, atualizações concorrentes e operações que afetam mais de uma conta.',
    solution:
      'A API usa persistência relacional e migrações versionadas. A suíte de integração sobe o ambiente em contêineres e verifica respostas HTTP, estado do MySQL e invariantes contábeis.',
    decisions: [
      { title: 'Verificação por dois caminhos', text: 'Os testes conferem o contrato da API e os dados persistidos, detectando respostas corretas que escondam um estado incorreto.' },
      { title: 'Concorrência como comportamento', text: 'Cenários paralelos exercitam débitos e atualizações com ETag, em vez de validar apenas chamadas sequenciais.' },
      { title: 'Transferência atômica', text: 'O fluxo atualiza as contas e registra as duas movimentações como uma transação única, com rollback em caso de falha.' },
    ],
    next: 'É um projeto de API e qualidade de backend; não há interface web de produto neste repositório.',
  },
  {
    slug: 'castalia',
    name: 'Castalia',
    category: 'Backend e sistemas',
    line: 'Busca em documentação técnica com origem verificável.',
    summary:
      'Serviço Java que indexa documentação e entrega trechos relevantes, com fonte, a agentes de IA por MCP. Ajuda a escrever cenários de teste ancorados nas regras documentadas.',
    status: 'Open source',
    stack: ['Java 21', 'PostgreSQL', 'pgvector', 'MCP', 'Docker'],
    source: 'https://github.com/JonnasFigueiredo/Castalia',
    problem:
      'Em sistemas grandes, regras ficam espalhadas por documentos. Um agente pode produzir um cenário plausível, mas incorreto, quando não encontra a fonte certa.',
    solution:
      'Um pipeline transforma documentos em trechos indexados com embeddings. O servidor MCP responde a consultas com os trechos relevantes e seus links de origem.',
    decisions: [
      { title: 'Fonte em cada resultado', text: 'O caminho de títulos e o link do documento acompanham o trecho para que a regra possa ser conferida.' },
      { title: 'Lacuna como resposta válida', text: 'Uma busca sem correspondência retorna vazia, sinalizando ausência de documentação em vez de inventar comportamento.' },
      { title: 'Embeddings configuráveis', text: 'A ingestão aceita provedores na nuvem ou modelos locais, conforme a infraestrutura disponível.' },
    ],
    next: 'O Castalia é um serviço de busca e integração MCP; não há interface web para usuários finais.',
  },
];

export const devGroups = [
  { title: 'Aplicações full stack', description: 'Interfaces, APIs e fluxos completos.' },
  { title: 'Backend e sistemas', description: 'Dados, integração e decisões de arquitetura.' },
] as const;
