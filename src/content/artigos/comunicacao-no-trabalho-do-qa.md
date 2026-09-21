---
title: "A regra também se descobre na conversa"
description: "Por que comunicação faz parte de cada etapa do trabalho de QA, do recorte da dúvida ao registro do que foi confirmado."
pubDate: 2026-09-17
tags: ["QA", "comunicação", "colaboração", "regras de negócio"]
draft: false
kind: guia
section: tecnica
category: 'Comunicação'
whenUse: "Quando você sabe operar a tela, mas ainda precisa entender por que um resultado seria o correto."
updatedDate: 2026-09-19
---

A história diz que um cupom vale para a primeira compra. Você prepara uma conta nova, aplica o código e confere o desconto. O teste passa. Na tarefa seguinte, aparece a dúvida: quem teve um pedido cancelado ainda pode usar o cupom?

A frase parecia suficiente até precisar decidir um caso. Para testar, você vai ter de descobrir o que o produto considera uma compra: um pedido criado, pago ou entregue. Essa parte do trabalho acontece na conversa, na leitura dos registros e na comparação de exemplos.

## A conversa muda o que você testa

Uma pergunta feita no refinamento pode mudar o resultado esperado, a massa de teste e até o escopo da história. “Pedido cancelado conta?” pode revelar que o time ainda não decidiu como tratar tentativas anteriores. Se você guardar a dúvida, alguém terá de escolher uma interpretação durante a implementação ou a execução.

Lisa Crispin e Janet Gregory discutem em [*Agile Testing*](https://agiletester.ca/agile-testing/) a participação do teste no trabalho de toda a equipe. Para esta proposta, a contribuição é trazer o QA para a conversa sobre o que será construído. O conhecimento sobre teste ajuda a escolher exemplos que tornem as dúvidas visíveis.

Isso continua depois do refinamento. Ao encontrar um comportamento inesperado, você precisa descrevê-lo. Ao esclarecer a regra, precisa registrar a decisão. Quando ela muda, precisa avisar quem usa os exemplos e testes anteriores.

## Cada pessoa conhece uma parte

O suporte pode mostrar clientes que tentaram usar o cupom depois de um cancelamento. A operação pode explicar como um pedido é encerrado. O PO pode esclarecer o objetivo da campanha. Desenvolvimento pode mostrar qual evento marca a primeira compra no sistema.

Esses conhecimentos podem se sobrepor. Não use o cargo para decidir de antemão quem sabe ou quem pode confirmar tudo. Pergunte quem cuida daquela decisão e reúna as pessoas necessárias quando a resposta atravessar mais de uma área.

Uma conversa com desenvolvimento pode revelar que a regra veio de uma campanha antiga. Uma conversa com suporte pode mostrar uma exceção que já foi acordada, mas não chegou à documentação. Essas descobertas dão direção à investigação.

## Mostre o que ainda não encaixou

Você não precisa chegar com a resposta pronta. Precisa dar à outra pessoa um ponto de partida.

> Oi! Estou preparando os testes do cupom de primeira compra. A história fala em clientes sem compra anterior, mas não define pedido cancelado. Tenho uma conta de teste com um pedido cancelado antes do pagamento. Ela ainda pode usar o cupom? Se essa decisão já estiver registrada, pode me indicar onde?

A mensagem situa a tarefa, mostra a lacuna e apresenta um caso. Quem recebe consegue responder, corrigir a pergunta ou indicar outra pessoa.

Depois da resposta, [explique de volta](/artigos/explicar-de-volta) com o resultado que você entendeu. Se “cancelado antes do pagamento” for permitido, isso ainda não responde ao cancelamento depois de um pedido entregue. Delimite o que ficou combinado.

## Deixe a resposta disponível

Ao terminar, leve a decisão para a tarefa. Registre o exemplo, quem confirmou e as condições em que a resposta vale. Se a conversa aconteceu no chat, vincule o trecho e escreva um resumo que faça sentido sem ler todo o histórico.

Também dê retorno a quem trouxe os casos. O suporte precisa saber se houve uma correção, uma mudança de regra ou apenas um esclarecimento. Esse retorno evita que o atendimento e o produto continuem trabalhando com versões diferentes.

## Por onde continuar

Se a dificuldade é encontrar a pessoa certa, comece por [suporte](/artigos/conversar-com-suporte), [operação](/artigos/conversar-com-operacao), [PO](/artigos/conversar-com-po) ou [desenvolvimento](/artigos/conversar-com-desenvolvimento).

Se você já sabe com quem falar, mas a conversa não esclarece a regra, veja [perguntas que destravam](/artigos/perguntas-que-destravam) e [explicar de volta](/artigos/explicar-de-volta). Para comunicar o que encontrou, siga para [relatar problemas](/artigos/relatar-problemas) ou [discordar sem disputa](/artigos/discordar-sem-disputa).

## Para praticar

Pegue a tarefa atual e escolha uma expressão que ainda aceite mais de uma interpretação. Escreva um caso para cada leitura possível. Descubra quem pode esclarecer a diferença e leve os dois casos para a conversa.
