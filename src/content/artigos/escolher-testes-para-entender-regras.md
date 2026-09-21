---
title: "Como escolher testes para entender uma regra"
description: "Escolha técnicas de teste pela dúvida que precisa esclarecer e registre a diferença entre regra confirmada e comportamento observado."
pubDate: 2026-09-16
tags: ["QA", "técnicas de teste", "regras de negócio"]
draft: false
kind: 'guia'
whenUse: "Quando há várias possibilidades de teste e você precisa escolher quais esclarecem a decisão da tarefa."
updatedDate: 2026-09-19
---

Duas pessoas explicam a emissão de certificado de formas diferentes. Uma diz que basta concluir as aulas. A outra diz que a atividade final também precisa ser aprovada. Um aluno que cumpriu as duas condições recebe o certificado nas duas interpretações. Testar só esse caso não esclarece a diferença.

Escolher um teste começa por decidir o que você quer descobrir. Depois você prepara um caso em que as respostas possíveis se separem.

## Comece pelo caso que distingue as interpretações

No exemplo, use um aluno com todas as aulas concluídas e a atividade ainda pendente. Registre o que cada interpretação prevê. Discuta qual regra deve valer e execute o caso para conferir a implementação.

Se ainda estiver investigando o produto, a execução pode ajudar a entender seu comportamento atual. Mantenha claro que a definição do esperado continua em discussão.

## Escolha a técnica pela pergunta

O ISTQB reúne essas técnicas no [syllabus CTFL em português disponibilizado pelo BSTQB](https://bstqb.qa/files/syllabus_ctfl_4.0br.pdf). Você pode usá-las em conjunto conforme a dúvida.

| Dúvida | Como organizar os casos |
| --- | --- |
| A decisão depende de várias condições? | [Tabela de decisão](/artigos/tabela-de-decisao), para comparar combinações. |
| A mesma ação muda de efeito conforme o histórico? | [Transição de estados](/artigos/transicao-de-estados), para examinar eventos e sequências. |
| O resultado muda perto de um valor, prazo ou quantidade? | [Valores-limite](/artigos/valores-limite), para conferir as fronteiras. |
| Cada resultado sugere outra pergunta? | [Teste exploratório](/artigos/teste-exploratorio), com objetivo e registro das descobertas. |

Para o certificado, uma tabela pode cruzar conclusão das aulas e aprovação da atividade. Se a atividade puder ser aprovada, devolvida e reenviada, os estados ajudam a investigar o efeito dessas mudanças.

Se houver um prazo de entrega, examine a fronteira: qual relógio vale, qual a precisão e se o instante final está incluído. Esses detalhes determinam os valores que você precisa preparar.

## Prepare o que torna o resultado observável

Conhecer a técnica não resolve a preparação do ambiente. Descubra como alcançar o estado inicial e como reconhecer a conclusão do processamento.

No certificado, marcar a atividade como aprovada diretamente no banco pode omitir o evento que dispara a emissão. Percorrer a aprovação pelo fluxo previsto ajuda a testar essa ligação. Quando for necessário preparar dados por outro caminho, confirme quais efeitos precisam ser preservados.

## Conclua apenas o que os casos mostram

Registre o esperado, o observado e a fonte. Se a emissão funcionou após uma aprovação, isso informa sobre aquela sequência. Ainda podem faltar reenvio, expiração ou outra modalidade de curso.

Use risco e contexto para escolher o que investigar em seguida. A quantidade de casos, sozinha, não diz se você esclareceu a decisão nem se cobriu as situações importantes.

## Para praticar

Escreva duas interpretações possíveis para uma regra da sua tarefa. Encontre um caso que produza respostas diferentes. Escolha a técnica que ajuda a preparar esse caso e anote o que ainda precisa ser confirmado antes de avaliar o resultado.
