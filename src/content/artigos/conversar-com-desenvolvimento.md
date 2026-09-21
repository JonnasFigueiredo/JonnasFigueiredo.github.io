---
title: "Conversar com o desenvolvimento"
description: "Como ter uma relação de parceria com quem desenvolve: perguntar sobre a implementação sem acusar, discutir regras antes do código e relatar problemas que ajudam a corrigir."
pubDate: 2026-09-17
tags: ["QA", "comunicação", "desenvolvimento", "colaboração"]
draft: false
kind: guia
section: tecnica
category: 'Comunicação'
whenUse: "Quando você precisa entender o que foi implementado, discutir uma regra antes do código ou levar um problema para correção."
updatedDate: 2026-09-19
---

Duas pessoas tentam reservar a última unidade de um produto. Na tela, as duas recebem sucesso. Para investigar, você precisa entender em que momento o estoque é reservado, quais serviços participam e como acompanhar o resultado de cada tentativa.

Quem desenvolve pode ajudar a reconstruir esse caminho. A conversa rende mais quando você leva o que observou e a pergunta que ainda falta responder.

## Converse antes de preparar todos os testes

Ao ler a história, compartilhe os casos que pretende investigar. Pergunte quais comportamentos dependem de processamento posterior e quais sinais estarão disponíveis para conferi-los.

> Em que momento uma unidade deixa de estar disponível para outra reserva?

> Como consigo relacionar a tentativa na tela ao registro de estoque?

> Se a resposta demorar e o aplicativo repetir o pedido, como vocês identificam essa repetição?

> Qual parte dessa mudança você acha que merece mais atenção no teste?

Essas perguntas podem revelar a necessidade de um identificador, um registro de evento ou um jeito de preparar o ambiente. Decidir isso cedo ajuda a evitar testes baseados apenas em esperas fixas e mensagens da interface.

## Separe regra e implementação

Desenvolvimento explica que a reserva é processada numa fila. Isso esclarece o comportamento atual, mas ainda falta saber o que o produto promete ao cliente enquanto ele espera. A mensagem de sucesso significa pedido recebido ou unidade garantida?

Leve essa diferença à conversa com produto. O esperado depende desse acordo; os detalhes da fila ajudam a preparar o teste e interpretar o observado.

Também pergunte pela origem de decisões antigas. Quem implementou pode lembrar de uma limitação ou de uma exceção que ficou fora da história. Localize o registro, se existir, e confira se continua valendo.

## Descreva o caso antes de sugerir a causa

“A fila está duplicando reservas” já traz um diagnóstico. Se você viu apenas duas mensagens de sucesso, ainda precisa investigar o que elas representam.

> Oi! Em homologação, deixei uma unidade disponível e fiz duas reservas com contas de teste diferentes. As duas telas mostraram sucesso. Nos registros que consultei, encontrei só uma reserva confirmada. Tenho os horários e os identificadores das duas tentativas. Qual evento devo acompanhar para saber o resultado final da segunda?

Com esses dados, vocês podem investigar a mesma execução. Se houver um problema na mensagem, no processamento ou na sua interpretação, a conversa tem elementos para distinguir essas possibilidades.

## Reduza o caso sem esconder o contexto

Depois de reproduzir, tente descobrir quais condições importam. O comportamento aparece com uma única requisição? Só com duas concorrentes? Depende da expiração de uma reserva anterior?

Preserve a versão, a configuração, os identificadores e a sequência. Se ainda não conseguiu repetir a falha, registre o que viu e quantas tentativas fez. Um problema intermitente continua sendo informação útil.

Evite dizer que uma condição é irrelevante depois de uma única tentativa. Pode ser melhor escrever “também ocorreu com o segundo produto testado” do que “ocorre com qualquer produto”.

## Se houver discordância

Compare as bases usadas por cada um. Você esperava uma recusa imediata; desenvolvimento recebeu a orientação de aceitar a solicitação e avisar depois. O próximo passo é confirmar qual comportamento foi acordado e se a interface o comunica.

Se vocês concordam com a regra, mas observam resultados diferentes, comparem ambiente, dados e sequência. Testar juntos pode ajudar a localizar a condição que ficou de fora do relato.

Ao esclarecer o caso, atualize o registro. Se a sua expectativa estava errada, corrija o teste. Se a implementação diverge, descreva a diferença e a fonte do esperado. [Relatar problemas](/artigos/relatar-problemas) mostra como organizar essa informação.

## Erros comuns

Apresentar uma hipótese sobre a causa como se ela já estivesse demonstrada.

Usar a implementação atual como única justificativa do esperado.

Esperar um número fixo de segundos sem saber qual evento encerra o processamento.

Deixar para discutir a preparação do ambiente quando a entrega já está pronta para teste.

## Para praticar

Na próxima história com integração, desenhe a sequência dos serviços e marque como você vai observar cada resultado. Revise esse caminho com quem desenvolve e registre os identificadores ou eventos que faltam para testar.
