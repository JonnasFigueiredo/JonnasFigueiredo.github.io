---
title: "Transição de estados"
description: "Como testar ações cujo resultado depende do estado atual, da ordem dos eventos e das etapas anteriores do processo."
pubDate: 2026-09-17
tags: ["QA", "estados", "integração", "expedição"]
draft: false
kind: guia
section: tecnica
category: 'Técnica de teste'
whenUse: "Quando a mesma ação tem resultados diferentes conforme o estado atual ou a ordem dos eventos anteriores."
updatedDate: 2026-09-19
---

Um pedido pago pode ser cancelado enquanto ainda está na loja. Depois da entrega à transportadora, o mesmo pedido segue outro caminho. Para testar essa diferença, você precisa considerar o estado atual e os eventos que levaram até ele.

O teste de transição de estados, apresentado pelo ISTQB na seção 4.2.4 do [syllabus CTFL](https://bstqb.qa/files/syllabus_ctfl_4.0br.pdf), ajuda a organizar essas sequências, incluindo ações que devem ser recusadas.

## Defina estados que você consiga reconhecer

No processo do exemplo, uma etiqueta impressa não significa que a caixa já saiu. O evento que muda essa condição é o registro de entrega à transportadora.

Use nomes que descrevam a situação e confira como identificá-la no produto. Pode ser necessário consultar mais de um sistema: o pedido está cancelado na loja, mas a expedição ainda está processando o evento.

## Relacione estado, evento e efeito

Considere a regra confirmada para esta loja: cancelamento aceito antes da entrega deve impedir a expedição; depois da entrega, a solicitação segue para devolução.

| Estado inicial | Evento | Efeito esperado |
| --- | --- | --- |
| Etiquetado, ainda na loja | Registrar entrega sem cancelamento | Pedido entregue à transportadora. |
| Etiquetado, ainda na loja | Aceitar e processar cancelamento | Pedido cancelado, expedição impedida. |
| Cancelado, ainda na loja | Tentar registrar entrega | Recusar a saída e manter o cancelamento. |
| Entregue à transportadora | Solicitar cancelamento | Encaminhar para devolução. |

Os nomes dessa tabela representam o processo. Ao preparar os testes, relacione-os aos campos e eventos que o sistema oferece.

## Prepare a sequência, não apenas o status

Para chegar a “etiquetado, ainda na loja”, percorra os eventos necessários de pagamento e preparação. Alterar só um campo pode deixar a integração num estado que o fluxo normal não produziria.

Depois do cancelamento, acompanhe o sinal de conclusão do processamento. Se ele não chegar no prazo acordado, registre essa ocorrência. Não continue esperando indefinidamente nem trate uma espera fixa como prova de conclusão.

Guarde identificadores e horários para reconstruir o caminho. Eles ajudam a distinguir a ordem em que os eventos foram enviados, recebidos e processados.

## Examine também o que deve ser recusado

Visitar todos os estados não garante que você tentou todas as transições relevantes. No exemplo, é necessário tentar a saída depois de cancelar para conferir o bloqueio.

Outro caso muda a ordem: registrar a entrega antes de solicitar o cancelamento. A regra prevê devolução. Já a chegada dos dois eventos durante a coleta exige esclarecer como o produto decide essa concorrência.

O [caso da caixa](/artigos/caso-caixa) mostra a investigação que levou a essas sequências.

## Erros comuns

Confundir o nome exibido numa tela com o estado do processo inteiro.

Preparar dados que omitem eventos necessários à integração.

Testar apenas transições permitidas e esquecer as recusadas.

Concluir sobre o resultado final enquanto o processamento ainda está em andamento.

## Para praticar

Desenhe três estados de um fluxo da sua tarefa. Escolha um evento permitido e outro que deveria ser recusado. Para cada teste, registre como chegar ao estado inicial e qual evidência mostra que o processamento terminou.
