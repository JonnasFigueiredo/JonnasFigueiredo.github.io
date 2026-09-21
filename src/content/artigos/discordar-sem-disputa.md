---
title: "Discordar sem transformar a conversa em disputa"
description: "Como levantar uma divergência de regra, risco ou prioridade mantendo o foco no problema, com frases, exemplos e o que fazer quando a conversa esquenta."
pubDate: 2026-09-17
tags: ["QA", "comunicação", "conflito", "conversas difíceis"]
draft: false
kind: guia
section: tecnica
category: 'Comunicação'
whenUse: "Quando você discorda de uma regra, de uma prioridade, de um prazo ou de como um problema foi classificado."
updatedDate: 2026-09-19
---

Você encontrou uma divergência, mas o time entende que o comportamento está certo. Repetir a conclusão com mais firmeza dificilmente esclarece a diferença. O próximo passo é descobrir se vocês discordam da regra, do que aconteceu ou da importância do resultado.

Cada uma dessas conversas precisa de informações diferentes. Uma comparação entre fontes ajuda a discutir a regra. Evidências ajudam a reconstruir a execução. Consequências e alcance ajudam a avaliar prioridade.

## Diga exatamente onde as versões diferem

Imagine que a política informe reembolso em até sete dias úteis, o suporte prometa dez dias corridos e o sistema agende para cinco dias úteis. As três informações não são necessariamente incompatíveis: cinco pode estar dentro do prazo de sete. Antes de afirmar que há erro, descubra o que cada prazo mede e quando a contagem começa.

> Encontrei três prazos de reembolso. A política fala em até sete dias úteis; o roteiro do suporte, em dez dias corridos; o sistema agenda para cinco dias úteis. Esses prazos se referem à mesma etapa e ao mesmo evento inicial? Precisamos esclarecer o que informar ao cliente e qual data conferir no teste.

Depois de alinhar essas definições, use um calendário e um caso para mostrar se ainda existe divergência. A discussão passa a ter uma pergunta que alguém consegue responder.

## Descreva o fato sem adivinhar a intenção

Marshall Rosenberg, em *Comunicação Não Violenta*, distingue observação de avaliação. No trabalho, isso ajuda a revisar frases como “ninguém se preocupou com a integração”. Você pode dizer o que faltou: “o registro desta entrega não inclui o teste de cancelamento entre os dois sistemas”.

Douglas Stone, Bruce Patton e Sheila Heen tratam em *Conversas difíceis* dos aspectos da conversa que vão além da descrição dos acontecimentos. Essa leitura ajuda a lembrar que uma correção pode ser recebida de formas diferentes. Ainda assim, não cabe presumir o que a outra pessoa sente ou por que discorda. Pergunte pela interpretação dela.

> Você está considerando outra regra ou viu um resultado diferente? Quero entender o que falta na comparação que eu trouxe.

## Torne o risco concreto

“Não está pronto” pode esconder várias preocupações. Diga o que foi testado, o que falta e a consequência possível.

> Testamos o fluxo principal de pagamento. O estorno parcial ainda não foi exercitado nesta versão, e essa parte mudou. Na versão anterior, tivemos uma divergência de valor nesse fluxo. Precisamos decidir se adiamos a publicação para concluir os testes ou se existe uma forma viável de manter a funcionalidade desativada até lá.

Ofereça alternativas que o time consiga avaliar. Acompanhar produção pode ajudar em alguns casos, mas não substitui um controle necessário nem garante que o problema será percebido a tempo. Para cada opção, discutam quem fará o quê e o que acontece se a falha ocorrer.

A responsabilidade pela decisão depende do processo da equipe. O QA pode participar da aprovação ou ter critérios de bloqueio a cumprir. Deixe claros esses papéis, as restrições e o registro da decisão.

## Quando a prioridade parece baixa demais

Apresente o dado que pode mudar a avaliação. Se a divergência apareceu em quatro de dez cenários, informe quais foram testados. Não transforme esse resultado em uma porcentagem de clientes afetados sem dados de uso que sustentem a conta.

> Sobre a diferença de valor entre simulação e contrato: reproduzi nos planos de 12 e 18 parcelas, com os dados anexados. Ainda não sabemos quantas propostas usam essas condições. Sugiro levantar esse volume com produto e conferir com o responsável pelo contrato antes de manter a prioridade atual.

Com isso, o time sabe o que já foi observado e qual informação falta para avaliar o alcance.

## Se a conversa parar de avançar

Separe os assuntos: regra, prazo e responsabilidade podem ter se misturado. Retome a decisão que precisa ser tomada e o dado que falta. Se a troca de mensagens estiver gerando novas interpretações, proponha uma conversa curta e registre a conclusão depois.

Em *Conversas decisivas*, Kerry Patterson e coautores abordam conversas de alto impacto com opiniões divergentes. É uma leitura para aprofundar esse tipo de situação. Na rotina, um passo concreto pode ser combinar uma pausa com responsável e horário de retomada.

Se houver uma decisão que você considera incompatível com um critério obrigatório ou um risco fora da responsabilidade de quem decidiu, use o encaminhamento previsto pela equipe. Registrar o desacordo permite revisá-lo; não exige fingir concordância.

## Quando a sua interpretação estava errada

Corrija com a mesma clareza com que levantou a questão. Explique qual informação mudou a conclusão, atualize os testes e avise quem recebeu a versão anterior.

> Conferi os prazos: a política mede até a solicitação ao provedor, e o roteiro do suporte inclui a etapa seguinte. Vou ajustar o esperado do teste e registrar os dois eventos de início para evitar a mesma confusão.

## Erros comuns

Tratar uma discordância como sinal de descuido ou má vontade.

Misturar um resultado observado com uma estimativa de alcance ainda não verificada.

Apresentar uma alternativa sem avaliar se ela é viável.

Deixar a decisão sem motivo, responsável ou critério de retomada.

## Para praticar

Escolha uma divergência recente. Escreva o fato observado, a interpretação de cada lado e a decisão necessária. Identifique qual informação poderia mudar a conclusão e quem pode obtê-la.
