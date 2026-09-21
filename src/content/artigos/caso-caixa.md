---
title: "A caixa vai sair?"
description: "Investigue o cancelamento além da tela e descubra qual evento separa impedir a expedição de encaminhar uma devolução."
pubDate: 2026-09-17
tags: ["QA", "cancelamento", "observação", "regras de negócio"]
draft: false
kind: guia
section: caso
category: 'Análise de negócio'
whenUse: "Quando o status da tela não explica o que acontece na operação e a regra está pouco documentada."
updatedDate: 2026-09-19
---

O pedido está cancelado na tela, mas a caixa continua na bancada da expedição. Se a transportadora chegar agora, ela sai? Essa pergunta leva o teste para uma consequência que a mudança de status não responde.

Neste caso do guia, João precisa entender o cancelamento sem PO acessível e com pouca documentação. Ele começa com o suporte e segue o caminho do pedido até a operação.

## Na história do João

Douglas mostra os pedidos 104 e 105. Ambos tinham etiqueta impressa, mas terminaram de formas diferentes. Rosângela acompanha João na expedição e mostra a etapa que distingue os casos: o registro da entrega à transportadora.

Ela confirma a regra desse processo. Antes da entrega, o cancelamento aceito deve impedir a expedição. Depois, a solicitação segue para devolução. A etiqueta indica que o volume foi preparado; a caixa ainda pode estar na loja.

## Do processo ao teste

João prepara em homologação um pedido pago, com etiqueta impressa e sem entrega registrada. Aceita o cancelamento, aguarda o processamento da integração e tenta registrar a saída. O sistema autoriza, contrariando o esperado.

Em outro caso, registra a entrega antes do cancelamento. Dessa vez, observa o encaminhamento para devolução.

| Sequência | Esperado pela regra | Observado |
| --- | --- | --- |
| Cancelar e processar antes da entrega | Impedir a expedição. | Saída autorizada. |
| Registrar entrega e depois solicitar cancelamento | Encaminhar para devolução. | Devolução encaminhada. |

O relato pode agora indicar uma sequência específica: cancelamento processado na janela entre etiqueta e entrega. O caso em que cancelamento e coleta acontecem juntos fica pendente para outra investigação.

## O que levar para a sua tarefa

Procure a ação que vem depois da mensagem de sucesso. Descubra quem recebe a informação e como confirma que pode continuar o trabalho. Se houver integração, identifique o evento que indica o fim do processamento.

Compare casos, confirme a regra com quem responde pelo processo e preserve a sequência na evidência. As [transições de estados](/artigos/transicao-de-estados) ajudam a organizar essa investigação.

## Erros comuns

Encerrar o teste quando o status muda e deixar a consequência sem conferência.

Confundir preparação do volume com entrega à transportadora.

Relatar que “o cancelamento não funciona” sem identificar a janela em que a divergência aparece.

## Para ir além

Veja como pedir casos ao [suporte](/artigos/conversar-com-suporte) e acompanhar o trabalho com a [operação](/artigos/conversar-com-operacao).

## Para praticar

Escolha uma mensagem de sucesso do seu produto e descubra qual ação ela deveria permitir ou impedir na etapa seguinte. Registre o estado inicial e a sequência necessários para conferir esse efeito.
