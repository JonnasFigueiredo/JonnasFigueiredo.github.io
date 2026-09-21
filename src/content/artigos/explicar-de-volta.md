---
title: "Explicar de volta"
description: "Confirmar o entendimento com um exemplo antes de testar. Por que funciona, como escolher bons exemplos e como fazer isso em conversa e por escrito."
pubDate: 2026-09-17
tags: ["QA", "comunicação", "conferir", "exemplos"]
draft: false
kind: guia
section: tecnica
category: 'Comunicação'
whenUse: "Sempre que alguém termina de explicar uma regra e você tem a sensação de que entendeu."
updatedDate: 2026-09-19
---

“Frete grátis a partir de R$ 200.” Todo mundo concorda e a reunião segue. Só depois aparece a diferença: uma pessoa considerou o valor antes do cupom; outra, o total já com desconto.

Explicar de volta é mostrar a interpretação que você fez para que alguém possa corrigi-la. Você reformula a regra, aplica a um caso e pergunta se aquele é o resultado esperado.

## Mostre a condição que muda a resposta

No exemplo do frete, um pedido de R$ 800 sem desconto não distingue as duas interpretações. Um pedido de R$ 210 com cupom de R$ 20 distingue: antes do desconto, passa do limite; depois, fica abaixo.

> Entendi que o valor considerado é o total depois do cupom. Então, um pedido de R$ 210 com desconto de R$ 20 fica em R$ 190 e paga frete. Como você avaliaria esse caso?

Se a pessoa corrigir a interpretação, refaça o exemplo. Se confirmar, anote o alcance da resposta e pergunte por uma condição ainda não discutida, como produtos de vendedores parceiros.

Gojko Adzic apresenta em [*Specification by Example*](https://gojko.net/books/specification-by-example/) o trabalho de equipes que usam exemplos na especificação de software. É essa contribuição que interessa aqui: dar uma forma concreta ao entendimento para que o grupo consiga examiná-lo.

## Confirme também o limite

“A partir de R$ 200” inclui R$ 200. “Acima de R$ 200” não inclui. Se a história usa uma expressão e a conversa usa outra, leve a diferença para o exemplo.

> A história diz “a partir de R$ 200”, mas na conversa apareceu “acima de R$ 200”. Para um total de exatamente R$ 200 depois do desconto, qual resultado devemos registrar?

Esse detalhe muda o teste. Evite corrigir silenciosamente o texto supondo que todos queriam dizer a mesma coisa.

## Escolha exemplos pela dúvida

Além de valores, você pode variar o estado, a ordem dos eventos ou uma condição do cliente.

Uma reserva enviada ainda pode ser alterada como uma reserva em rascunho? Um cadastro aprovado e depois suspenso mantém o acesso? Uma mudança de plano afeta o ciclo atual ou só o próximo?

Leve poucos casos por vez. Comece pelo que separa as interpretações que você encontrou. Se novas dúvidas surgirem, registre e decida com o grupo quais precisam ser resolvidas naquela conversa.

## Por escrito, deixe a resposta fácil de localizar

> Oi! Quero registrar os exemplos de frete da história 482. Considerando produtos vendidos pela própria loja e a regra de frete grátis a partir de R$ 200 após o desconto:
>
> 1. Total de R$ 210, cupom de R$ 20: total final de R$ 190, com frete.
> 2. Total de R$ 200, sem cupom: frete grátis.
>
> Esses resultados representam o que combinamos? Ficou pendente confirmar se a mesma regra vale para vendedores parceiros.

Você já delimita o escopo e separa a pendência. Quem recebe consegue conferir os casos sem reconstruir toda a conversa.

## Registre o acordo junto do exemplo

Depois da confirmação, deixe na tarefa a regra, os casos, a data e a referência à conversa. Se não executou os testes, marque os casos como ainda não executados.

| Campo | Registro do exemplo |
| --- | --- |
| Pergunta | Qual valor define o frete grátis? |
| Resposta | Total dos produtos após o cupom, a partir de R$ 200, nas condições confirmadas. |
| Exemplo | R$ 210 menos R$ 20 resulta em R$ 190, com cobrança de frete. Ainda não executado. |
| Fonte | Confirmação de produto vinculada à história 482. |
| Pendente | Regra para vendedores parceiros. |

## Quando a pessoa também não sabe

A conversa pode revelar que a regra ainda precisa ser decidida. Registre a pergunta e quem vai buscar a resposta. Avaliem o efeito dessa pendência no trabalho: dá para seguir com os casos já definidos ou ela muda a solução inteira?

Você pode usar o [Example Mapping](/artigos/example-mapping-em-portugues) quando houver várias regras e perguntas para organizar.

## Erros comuns

Repetir a mesma frase sem mostrar como ela se aplica a um caso.

Escolher apenas situações em que todas as interpretações dão a mesma resposta.

Tratar um “sim” como confirmação de condições que não foram apresentadas.

Confundir a confirmação do esperado com um teste já executado.

## Para praticar

Escolha uma regra que você acabou de ouvir. Prepare um exemplo em que duas interpretações produzam resultados diferentes. Explique a sua leitura, peça a avaliação de quem responde pela regra e registre o que mudou após a conversa.
