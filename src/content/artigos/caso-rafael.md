---
title: "Rafael muda de atividade"
description: "Separe o início da revisão no produto das decisões sobre autorização, mudança de atividade e comprovação de exame."
pubDate: 2026-09-17
tags: ["QA", "refinamento", "tabela de decisão", "regras de negócio"]
draft: false
kind: guia
section: caso
category: 'Análise de negócio'
whenUse: "Quando termos da interface misturam o início de uma revisão com decisões que dependem de outras confirmações."
updatedDate: 2026-09-19
---

Rafael vai mudar de atividade, mas o título do cargo continua igual. O sistema precisa iniciar uma revisão? E abrir essa revisão já permite concluir a movimentação?

As perguntas parecem próximas, mas tratam de decisões diferentes. Neste caso do guia, João tem PO e documentação disponíveis. Ele usa esse apoio para separar as condições de abertura da revisão das exigências da etapa seguinte.

## Na história do João

Uma avaliação registrada confirma mudança de risco para Rafael. Letícia e João consultam a documentação do produto e confirmam que essa condição inicia a revisão, mesmo sem alteração no nome do cargo.

Ao seguir para a próxima etapa, percebem que iniciar a revisão não explica o que precisa estar concluído antes da mudança de atividade. A consulta à NR-7 entra nessa investigação, junto de quem responde pela aplicação da exigência.

## Organize a primeira decisão

A tabela compara título do cargo e resultado da avaliação para a regra deste exemplo:

| Título do cargo mudou? | Avaliação confirmou mudança de risco? | Iniciar revisão? |
| --- | --- | --- |
| Não | Não | Não por esses motivos. |
| Sim | Não | Não por esses motivos. |
| Não | Sim | Sim. |
| Sim | Sim | Sim. |

Rafael se encaixa na terceira linha. A mudança de título, sozinha, não altera essa decisão. Para preencher “não” na segunda condição, é preciso ter uma avaliação que confirme a ausência de mudança. Avaliação ausente continua como outra situação a esclarecer.

## Separe o que ainda precisa ser decidido

João e Letícia propõem distinguir solicitação, revisão e conclusão das pendências. A proposta será conferida com o responsável pela aplicação das exigências ao processo.

Os exemplos sobre exame pendente ou realização comprovada servem a essa discussão. Na história, esses critérios posteriores ainda não foram aprovados nem executados em teste. O registro precisa manter esse ponto visível para que “revisão aberta” não seja interpretado como “movimentação autorizada”.

## O que levar para a sua tarefa

Quando um botão tiver nome genérico, como “confirmar”, pergunte qual decisão ele realiza. Registrar uma intenção, iniciar uma análise e autorizar uma ação podem exigir condições e responsáveis diferentes.

Organize uma decisão por vez. Uma [tabela de decisão](/artigos/tabela-de-decisao) ajuda a comparar suas condições; o [vocabulário do domínio](/artigos/linguagem-do-dominio) ajuda a escolher nomes que representem cada etapa.

## Erros comuns

Usar o título do cargo no lugar do resultado da avaliação.

Tratar ausência de informação como confirmação de que nada mudou.

Transformar a abertura de uma revisão em autorização para concluir todas as etapas.

## Para praticar

Escolha um botão de confirmação do produto. Liste o que ele registra, o que autoriza e o que continua pendente. Confira com o responsável se o nome e os critérios deixam essas diferenças claras.
