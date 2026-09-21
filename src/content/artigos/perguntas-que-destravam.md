---
title: "Perguntas que destravam uma regra"
description: "Como formular dúvidas de regra com casos concretos, comparar situações e distinguir o que aconteceu do que precisa ser decidido."
pubDate: 2026-09-17
tags: ["QA", "comunicação", "perguntas", "investigação"]
draft: false
kind: guia
section: tecnica
category: 'Comunicação'
whenUse: "Quando você vai conversar com PO, suporte, operação ou desenvolvimento e precisa sair da conversa sabendo algo que não sabia."
updatedDate: 2026-09-19
---

Você pergunta como funciona o cancelamento e recebe uma explicação do fluxo inteiro. Na hora de testar, continua sem saber o que acontece com uma fatura já fechada. A conversa trouxe informação, mas não chegou à decisão da sua tarefa.

Uma pergunta ampla pode ajudar na primeira aproximação com o produto. Depois, vale escolher uma situação que a explicação ainda não resolve e pedir que a pessoa percorra esse caso com você.

## Dê tamanho à dúvida

Antes da conversa, escreva a decisão que precisa entender. “Conhecer assinaturas” ainda é um tema. “Descobrir se o cancelamento no meio do ciclo altera a próxima fatura” já orienta o que perguntar.

Se você ainda não sabe formular um caso, comece pelo contexto:

> Quem usa essa parte do produto e para fazer o quê?

> Qual decisão muda o resultado para essa pessoa?

> Quem conhece um caso recente em que isso deu problema?

Donald Gause e Gerald Weinberg exploram perguntas e esclarecimento de requisitos em *Exploring Requirements: Quality Before Design*. É uma leitura útil para esse começo, quando você precisa conhecer o problema antes de discutir uma solução.

## Troque a palavra vaga por uma situação

Uma expressão como “pedido de valor alto” permite que cada pessoa imagine um número. Valores, datas e estados tornam a dúvida mais precisa.

| Pergunta ampla | Um caso para discutir |
| --- | --- |
| Como funciona o frete grátis? | Um pedido de R$ 210 com cupom de R$ 20 ainda tem frete grátis? |
| Quando pode alterar a reserva? | A primeira reunião da série já aconteceu. Posso alterar só a terceira? |
| O que é um curso concluído? | Todas as aulas foram vistas, mas a atividade foi devolvida. O certificado pode ser emitido? |

Apresente também o que você já sabe. Se a regra de frete considera o valor depois do desconto, a pergunta seguinte pode ser sobre o limite exato. Não precisa recomeçar a explicação a cada conversa.

## Use o passado para descobrir e o futuro para decidir

Ao conversar com suporte ou operação, peça um caso que aconteceu. “Qual foi o último reembolso que exigiu intervenção?” pode trazer a sequência, os dados e as pessoas envolvidas. Em *The Mom Test*, Rob Fitzpatrick trata desse cuidado de buscar situações concretas nas conversas com clientes, em vez de depender de respostas hipotéticas sobre intenção.

Já no refinamento de uma funcionalidade nova, perguntar “o que deve acontecer?” é necessário. Um caso passado mostra a prática atual; ele não decide automaticamente a regra da próxima versão.

Você pode combinar as duas perguntas: “Da última vez, o suporte precisou corrigir na mão. Na mudança que estamos planejando, como esse caso deverá terminar?”.

## Peça um contraste

> Você consegue me mostrar dois pedidos parecidos em que um foi aprovado e o outro recusado?

Compare estado, perfil, horário e sequência. As diferenças dão pistas sobre o que muda a decisão. Se os casos variam em vários pontos, pergunte sobre cada um ou prepare testes que mantenham as outras condições iguais.

Evite concluir que o horário explica tudo só porque um caso ocorreu de manhã e outro à tarde. Talvez o tipo de contrato também seja diferente. O contraste orienta a investigação; a próxima pergunta precisa separar as explicações possíveis.

## Siga a consequência e a origem

> Depois que o cadastro é aprovado, qual acesso a pessoa passa a ter?

> Se essa informação chegar errada à próxima etapa, quem percebe?

> Onde encontro essa decisão e quem pode esclarecer uma exceção?

As duas primeiras perguntas ampliam a visão para além da tela. A última ajuda a sustentar o esperado e a reencontrar a resposta quando houver uma mudança.

Se a regra só existe na conversa, registre o caso e peça à pessoa responsável que confira. “Anotei assim; isso representa o que combinamos?” é mais preciso do que guardar apenas um nome como fonte.

## Dê espaço para a resposta

Faça uma pergunta de cada vez. Quando a pessoa responder, confira o entendimento antes de abrir outra linha de investigação. Uma pausa não prova que você encontrou um problema; pode significar apenas que ela está lembrando do caso.

Edgar Schein discute em *Humble Inquiry* a disposição para perguntar e aprender com o outro. No trabalho, isso inclui aceitar uma correção e não conduzir a conversa apenas para confirmar a hipótese que você levou.

## Erros comuns

Embalar várias dúvidas numa pergunta longa e perder as que não foram respondidas.

Induzir concordância com “isso bloqueia, né?” antes de ouvir a explicação.

Confundir o que aconteceu num caso com o que deveria acontecer em todos.

Encerrar a conversa sem registrar o caso e a resposta.

## Para praticar

Escreva a decisão da sua próxima tarefa. Prepare uma pergunta com um caso, outra sobre uma condição que pode mudar o resultado e uma terceira sobre a origem da regra. Depois da conversa, confira quais foram respondidas e encaminhe as restantes.
