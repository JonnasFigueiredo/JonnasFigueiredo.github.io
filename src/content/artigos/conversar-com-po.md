---
title: "Conversar com o PO"
description: "Como construir uma relação aberta com o PO, levar dúvidas no formato certo, aproveitar o tempo curto dele e lidar com o que ele também não sabe."
pubDate: 2026-09-17
tags: ["QA", "comunicação", "PO", "produto", "refinamento"]
draft: false
kind: guia
section: tecnica
category: 'Comunicação'
whenUse: "Quando existe PO no time e você quer que a conversa com ele resolva dúvidas de verdade, sem virar uma fila de perguntas soltas."
updatedDate: 2026-09-19
---

“O cliente pode cancelar a assinatura pelo aplicativo.” A frase define uma possibilidade, mas ainda deixa trabalho para o time: quando o acesso termina, o que acontece com uma fatura em aberto e como tratar uma reativação.

O PO ajuda a esclarecer o objetivo e a discutir essas decisões. Para aproveitar a conversa, leve os casos que estão impedindo você de preparar os testes. Quando a resposta depender de contrato, operação ou outra área, combinem quem precisa participar.

## Comece pelo resultado para o cliente

Antes de discutir o comportamento de um botão, entenda o problema que a história pretende resolver. No cancelamento de uma assinatura, o objetivo pode ser permitir que a pessoa encerre a renovação sem depender do atendimento. Isso é diferente de interromper o acesso imediatamente.

> Quando o cliente confirma o cancelamento, o que precisa mudar para ele naquele momento?

> A assinatura termina agora ou deixa de renovar no próximo ciclo?

Com essa definição, os detalhes deixam de ser perguntas soltas. Você passa a investigar o que precisa acontecer para alcançar o resultado combinado.

## Leve caso, interpretação e pergunta

Uma mensagem que só diz “tenho dúvidas” exige outra conversa para explicar o assunto. Mostre de uma vez o que precisa ser decidido.

> Oi! Na história de cancelamento, fiquei com uma dúvida sobre o acesso. A assinatura está paga até dia 30 e o cliente cancela no dia 12. Minha interpretação é que ele continua usando até dia 30 e não renova. Esse é o resultado esperado? A história fala em encerrar a assinatura, mas não define a data do fim do acesso.

Depois da resposta, confirme uma condição diferente. Se houver uma fatura anterior em aberto, o cancelamento continua disponível? Se a pergunta depender da política de cobrança, o próximo passo pode ser consultar quem cuida dessa política.

O PO não precisa ter todas as respostas na hora. A conversa precisa deixar claro o que foi definido e o que ainda será investigado.

## Dê prioridade às dúvidas que mudam o trabalho

Nem toda dúvida exige interromper alguém. Se ela muda o comportamento que está sendo implementado ou bloqueia um teste importante, sinalize isso. Se pode esperar, deixe na tarefa com o contexto e o prazo em que a resposta será necessária.

Combine com o PO onde registrar dúvidas e como avisar sobre uma urgência. Um canal único para decisões evita que parte da regra fique no chat e outra parte apenas na memória de uma reunião.

Quando houver várias perguntas, ordene pelo impacto. Comece pela que pode mudar o escopo ou o resultado para o cliente. Um problema de texto também pode merecer prioridade se induzir alguém a uma ação que não consegue desfazer.

## Chame outras pessoas quando a resposta cruzar áreas

O PO pode confirmar que o cliente deve manter acesso até o fim do período pago. Desenvolvimento explica como a data chega ao serviço de acesso. A operação pode mostrar o que acontece quando o encerramento precisa ser corrigido manualmente.

Se essas partes precisam ser discutidas juntas, proponha uma conversa com os envolvidos. Leve o exemplo e a decisão necessária. O [refinamento com três perspectivas](/artigos/refinamento-com-tres-perspectivas) ajuda a organizar esse encontro.

## Se a resposta continuar em aberto

Registre uma pendência que alguém consiga assumir: “Confirmar se a assinatura promocional permite reativação no mesmo preço. A resposta muda os testes de reativação. PO vai consultar a política da campanha até quinta”.

Avaliem se dá para continuar com a parte já esclarecida. Uma pergunta sobre uma modalidade fora do escopo pode esperar; uma pergunta que define como encerrar todas as assinaturas pode impedir o avanço da história. Essa decisão também merece registro.

## Quando você discorda

Mostre a consequência da proposta com um caso. “Se o acesso terminar no dia do cancelamento, a pessoa perde os dias já pagos. É esse o comportamento que queremos para esta modalidade?”

Confirme quem tem responsabilidade por essa decisão. Registre o acordo e as restrições que precisam ser atendidas. Se aparecer uma obrigação contratual ou um risco que exige outra avaliação, encaminhe pelo processo do time. O texto sobre [discordar sem disputa](/artigos/discordar-sem-disputa) aprofunda essa conversa.

## Erros comuns

Tratar a primeira resposta como se cobrisse todas as modalidades e exceções.

Levar uma lista de perguntas sem explicar quais bloqueiam a tarefa.

Deixar uma decisão apenas numa conversa privada.

Preencher uma lacuna por conta própria para não incomodar.

## Para praticar

Escolha uma dúvida da tarefa atual e escreva o caso, a interpretação e a pergunta. Inclua o efeito da resposta no seu trabalho. Depois da conversa, atualize a história com o que foi decidido e quem ficou responsável pelo restante.
