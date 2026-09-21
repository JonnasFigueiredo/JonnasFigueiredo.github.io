---
title: "O QA no refinamento"
description: "Como se preparar, o que perguntar, como levar exemplos e como registrar o que foi combinado, para que as dúvidas apareçam antes do código."
pubDate: 2026-09-17
tags: ["QA", "comunicação", "refinamento", "três amigos", "Example Mapping"]
draft: false
kind: guia
section: tecnica
category: 'Comunicação'
whenUse: "Quando o time discute histórias antes do desenvolvimento e você quer que o teste contribua desde o início."
updatedDate: 2026-09-19
---

Uma história chega ao refinamento: o cliente poderá cancelar a assinatura pelo aplicativo. O QA já consegue antecipar algumas decisões que vão afetar os testes. Quando o acesso termina? O que acontece com uma fatura em aberto? Existe reativação?

Levar essas perguntas para a conversa ajuda o time a definir o comportamento antes de implementá-lo. Algumas serão respondidas ali; outras mostrarão que falta consultar uma política ou envolver outra pessoa.

## Reúna as perspectivas necessárias

A prática conhecida como *three amigos* reúne as perspectivas de negócio, desenvolvimento e teste para discutir uma história. O número se refere às perspectivas, não a uma obrigação de ter exatamente três pessoas.

Negócio ajuda a esclarecer o problema e o resultado pretendido. Desenvolvimento examina a solução e suas dependências. Teste traz exemplos, riscos e formas de conferir o comportamento. As contribuições se sobrepõem: qualquer pessoa pode encontrar uma exceção ou fazer uma boa pergunta.

Se a história muda uma rotina de atendimento, inclua suporte ou operação. Se depende de uma regra especializada, descubra quem pode esclarecê-la. Ter representantes de três funções não resolve uma informação que nenhum deles possui.

## Prepare poucos casos que façam diferença

Leia a história procurando o que ainda impede prever o resultado. Palavras como “ativo”, “concluído” e “quando necessário” merecem exemplos. Datas, quantidades e mudanças de estado também.

Para o cancelamento de assinatura, você pode levar:

> A assinatura está paga até dia 30 e o cliente cancela no dia 12. Até quando ele mantém o acesso?

> Existe uma fatura anterior em aberto. O cancelamento continua disponível?

> O cliente cancela e pede reativação no mesmo dia. Qual plano e preço voltam a valer?

Ordene pela consequência. Se a primeira resposta muda toda a implementação, comece por ela. A reunião não precisa percorrer uma lista completa de testes.

## Organize as respostas enquanto conversa

Matt Wynne apresentou o [Example Mapping](https://cucumber.io/blog/bdd/example-mapping-introduction/) para organizar esse trabalho com história, regras, exemplos e perguntas. O mapa permite ver os acordos e as dúvidas sem depender da memória de quem participou.

No exemplo, “mantém acesso até o fim do período pago” pode virar uma regra. A assinatura paga até dia 30 e cancelada no dia 12 é um caso que a ilustra. Se ninguém sabe como funciona uma oferta com fidelidade, isso fica como pergunta, com responsável pela consulta.

Gáspár Nagy e Seb Rose aprofundam a descoberta por exemplos em *Discovery: Explore behaviour using examples*. O [texto de Example Mapping](/artigos/example-mapping-em-portugues) mostra uma primeira sessão com mais detalhes.

## Decida o que a pendência impede

Uma única pergunta pode mudar o escopo inteiro. Várias perguntas pequenas podem ser resolvidas durante o trabalho. Avalie o efeito de cada uma, em vez de decidir apenas pela quantidade.

Se o cancelamento promocional tiver um fluxo separado, o time pode considerar separá-lo da história. Se todas as assinaturas usam a mesma integração e a dúvida muda esse contrato, talvez seja necessário esclarecer antes de avançar.

Registre as hipóteses assumidas e quem responde por elas. Evite transformar uma possibilidade levantada na reunião em decisão só porque ninguém a contestou.

## Deixe um registro que sobreviva à reunião

> Resumo do refinamento da história de cancelamento:
>
> **Confirmado:** no plano mensal comum, cancelar encerra a renovação e mantém o acesso até o fim do período pago. Exemplo: período pago até dia 30, cancelamento no dia 12, acesso mantido até dia 30.
>
> **Pendente:** condições de reativação e tratamento de planos promocionais. Produto vai consultar as políticas e atualizar a história até quinta.
>
> **Próximo passo:** desenvolvimento avalia as dependências do serviço de acesso; QA prepara os casos da modalidade já definida.

Vincule esse resumo à história. Se a resposta mudar depois, atualize os exemplos para que implementação e teste usem a mesma versão.

## Se o time não tem esse encontro

Use a próxima tarefa para propor uma conversa pequena com quem a escreveu e quem vai desenvolvê-la. Diga qual decisão precisa resolver e leve os casos preparados. Se o assunto couber no chat, registre ali o mesmo resultado.

## Erros comuns

Confundir participação do QA com apresentar todos os casos de teste na reunião.

Dividir papéis de forma rígida, como se só o QA pudesse levantar riscos.

Encerrar uma pergunta importante com um palpite para caber no horário.

Sair sem combinar quem busca as respostas e o que pode avançar.

## Para praticar

Prepare três perguntas para a próxima história, cada uma com um caso e a consequência da resposta. Depois da conversa, registre um exemplo confirmado, uma pendência e o próximo passo acordado.
