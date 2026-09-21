---
title: "Como aprender regras de negócio sem decorar tudo"
description: "Como registrar uma regra, tentar explicá-la sem consultar e retomar o que você aprendeu nas próximas tarefas."
pubDate: 2026-09-16
tags: ["QA", "aprendizagem", "regras de negócio"]
draft: false
kind: 'guia'
category: "Aprendizagem"
whenUse: "Quando você entende a regra durante a tarefa, mas depois precisa refazer a investigação para conseguir explicá-la."
updatedDate: 2026-09-19
---

Você entendeu a regra na reunião. Fez os testes, encerrou a tarefa e passou para outra coisa. Duas semanas depois, alguém pergunta por que aquele pedido foi bloqueado. Você lembra de ter discutido o assunto, mas já não sabe qual condição mudava a resposta.

É uma situação diferente de nunca ter entendido. A explicação fez sentido enquanto o documento estava aberto e os exemplos estavam na mesa. Agora você precisa reconstruí-la. Ter uma nota ajuda, mas também vale aprender a perceber o que você consegue explicar sem ela.

## Guarde a decisão, não a reunião inteira

Uma anotação como “conversamos sobre cancelamento” não ajuda muito a retomar. Registre a pergunta que foi resolvida, a condição que muda o resultado e um exemplo. Deixe junto o link para a decisão e as dúvidas que sobraram.

Imagine um sistema de reserva de salas. O time confirmou que a pessoa pode cancelar a própria reserva até o instante anterior ao início. Para uma reunião às 14h, o cancelamento às 13h59min59s é permitido; às 14h, é recusado. Reservas recorrentes ainda precisam de uma definição separada.

Essa nota guarda três coisas que fazem diferença no teste: qual relógio e precisão o produto usa, de que lado fica o horário exato e qual situação ainda não foi resolvida. Copiar uma página inteira da documentação pode esconder justamente esses detalhes.

## Feche a nota e tente explicar

Ao voltar à tarefa, tente responder antes de abrir o registro:

> O que faz o cancelamento ser permitido ou recusado?

> O que acontece exatamente no horário de início?

> Essa resposta também vale para uma reserva recorrente?

Depois confira. Se você lembrou da regra, mas esqueceu que a recorrência estava pendente, essa é a correção que vale anotar. Se confundiu o horário do clique com o horário recebido pelo servidor, volte à fonte e esclareça esse ponto.

Esse esforço de lembrar é chamado de prática de recuperação. Henry Roediger e Jeffrey Karpicke estudaram a retenção de textos e observaram vantagens da recuperação em avaliações posteriores, em comparação com a releitura. O [estudo de 2006](https://doi.org/10.1111/j.1467-9280.2006.01693.x) ajuda a entender por que reconhecer uma explicação na página e conseguir recuperá-la depois são experiências diferentes.

No trabalho, você pode usar uma pergunta da própria tarefa para fazer essa retomada. A conferência vem logo depois, para corrigir uma lembrança incompleta.

## Volte ao assunto em outros momentos

Em vez de reler a mesma nota várias vezes numa tarde, volte a ela depois de um intervalo. Pode ser no dia seguinte, antes de revisar um teste relacionado ou quando outra tarefa tocar naquela regra. Escolha momentos que caibam na rotina e dê mais atenção aos pontos em que você se confundiu.

John Dunlosky e seus colegas analisaram dez técnicas de estudo na [revisão publicada em 2013](https://doi.org/10.1177/1529100612453266). A prática de recuperação e o estudo distribuído estão entre as técnicas que receberam a avaliação mais favorável. São as duas ideias aproveitadas aqui: tentar lembrar e voltar ao assunto em momentos separados.

Você não precisa montar um calendário para cada regra do produto. Comece pelas decisões que aparecem com frequência, pelas que você costuma confundir e pelas que têm consequências importantes quando entendidas errado.

## Mude o exemplo para conferir o raciocínio

Depois de explicar o caso que já conhece, mude uma condição. A reunião continua marcada para as 14h, mas o cancelamento foi solicitado pelo administrador da sala. A mesma restrição se aplica a ele?

Se a nota só trata de quem fez a reserva, ela não responde à nova pergunta. Registre a dúvida. O exercício mostrou até onde vai o seu entendimento e onde começa outra investigação.

Essa é a utilidade de variar o exemplo: perceber se você sabe explicar a condição ou se está apenas repetindo a resposta de um caso conhecido. Você pode levar a nova pergunta para quem confirmou a regra, usando a prática de [explicar de volta](/artigos/explicar-de-volta).

## Atualize o que mudou

Uma nota também envelhece. Se o produto passar a permitir cancelamento até cinco minutos depois do início, atualize a regra, os exemplos e os testes que dependem dela. Mantenha a referência à mudança para entender o comportamento de reservas antigas, quando isso fizer diferença.

Aprender um domínio inclui saber onde conferir uma resposta. Você não precisa guardar cada prazo, exceção e contrato na cabeça. Precisa reconhecer a decisão em jogo, explicar o que sabe e encontrar o que falta.

## Para praticar

Escolha uma regra que você investigou recentemente. Sem abrir a tarefa, escreva a condição que muda o resultado, um exemplo e uma dúvida que ficou pendente. Compare com o registro e corrija o que faltou. Volte a essas mesmas perguntas quando trabalhar novamente nessa parte do produto.
