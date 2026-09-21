---
title: "Tabela de decisão"
description: "Transforme condições de negócio em combinações verificáveis, com resultados confirmados e lacunas identificadas."
pubDate: 2026-09-17
tags: ["QA", "tabela de decisão", "condições", "cobertura"]
draft: false
kind: guia
section: tecnica
category: 'Técnica de teste'
whenUse: "Quando uma decisão depende de combinações de condições e você precisa comparar os resultados esperados."
updatedDate: 2026-09-19
---

Um certificado depende de duas condições: concluir as aulas e ter a atividade final aprovada. Testar apenas quem cumpriu as duas condições deixa de fora os casos em que uma delas falta.

A tabela de decisão coloca essas combinações lado a lado. No ISTQB, a técnica aparece na seção 4.2.3 do [syllabus CTFL](https://bstqb.qa/files/syllabus_ctfl_4.0br.pdf). Ela ajuda a tornar explícito o resultado de cada combinação relevante.

## Defina a decisão e as condições

Comece por uma pergunta: este aluno pode solicitar o certificado? Para o exemplo, considere a regra de um curso que exige todas as aulas concluídas e atividade aprovada.

Separe “atividade enviada” de “atividade aprovada”. Se você usar a primeira no lugar da segunda, a tabela pode estar bem preenchida e ainda representar outra regra.

## Abra as combinações

Com duas condições de resposta sim ou não, temos quatro combinações:

| Condição ou ação | C1 | C2 | C3 | C4 |
| --- | --- | --- | --- | --- |
| Concluiu as aulas? | Não | Sim | Não | Sim |
| Atividade aprovada? | Não | Não | Sim | Sim |
| Pode solicitar certificado? | Não | Não | Não | Sim |

Antes de preparar os testes, confira se todas são possíveis. Se o produto só aceita o envio da atividade depois de concluir as aulas, C3 pode ser inviável pelo fluxo normal. Investigue antes de descartá-la: importações ou mudanças no curso podem permitir esse estado?

Uma informação desconhecida também não equivale a “não”. Se o resultado da avaliação ainda não chegou ao sistema, talvez seja necessário representar a espera como outro estado ou condição.

## Confirme os resultados e prepare os casos

Para cada coluna viável, escreva um estado inicial e o resultado esperado. Se ninguém souber o que acontece numa combinação, deixe a pergunta na célula e encaminhe a decisão.

Execute os casos e registre o observado separado da tabela de regras. Isso permite distinguir uma combinação ainda não testada de uma que foi executada e falhou.

Ao informar cobertura, diga o que está contando. Executar todas as combinações viáveis desta tabela cobre as regras deste modelo; outros critérios do certificado podem exigir mais testes.

## Use a tabela para revisar a própria regra

Se duas colunas diferem em uma condição e dão o mesmo resultado, pergunte se essa condição é relevante naquela decisão. A comparação pode ajudar a simplificar o modelo ou mostrar que outra decisão foi misturada nele.

No [caso Rafael](/artigos/caso-rafael), a tabela separa mudança de cargo e mudança de risco para discutir quando iniciar uma revisão. A abertura da revisão é uma decisão; as etapas posteriores exigem seus próprios critérios.

## Erros comuns

Preencher uma condição desconhecida como “não”.

Descartar uma combinação sem verificar se ela pode ocorrer.

Misturar esperado e observado na mesma célula.

Adicionar condições de decisões diferentes até a tabela ficar difícil de interpretar.

## Para praticar

Escolha uma decisão com duas condições. Abra as quatro combinações e confira quais são possíveis. Para cada uma, anote a fonte do esperado ou a pergunta que falta responder. Só então prepare os dados de teste.
