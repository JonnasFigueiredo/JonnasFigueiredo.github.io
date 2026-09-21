---
title: "Valores-limite"
description: "Como escolher casos perto de quantidades, valores e horários em que o resultado da regra muda."
pubDate: 2026-09-17
tags: ["QA", "valor-limite", "D+1", "calendário"]
draft: false
kind: guia
section: tecnica
category: 'Técnica de teste'
whenUse: "Quando valores próximos de um horário, quantidade ou prazo podem mudar o resultado previsto pela regra."
updatedDate: 2026-09-19
---

Uma regra permite até 500 caracteres. Testar apenas um texto de 100 e outro de 800 deixa de fora o ponto em que a decisão muda: 500 deve ser aceito e 501 deve ser recusado? Antes de executar, confirme também como o produto conta os caracteres.

A análise de valores-limite concentra os testes nas fronteiras entre faixas. O ISTQB apresenta a técnica na seção 4.2.2 do [syllabus CTFL](https://bstqb.qa/files/syllabus_ctfl_4.0br.pdf). Ela pode ser aplicada a quantidades, valores e horários, desde que a ordem e a unidade estejam definidas.

## Confirme a fronteira e sua precisão

Pergunte qual valor separa os comportamentos e em qual faixa o limite está incluído. “Até 500” e “menos de 500” produzem esperados diferentes para 500.

Depois identifique os valores vizinhos que o produto distingue. Para um contador inteiro, são unidades. Para um valor monetário com duas casas decimais, podem ser centavos. Para um horário, confirme se o sistema considera minutos, segundos ou milissegundos.

## Um horário de corte muda mais de uma data

Considere o exemplo de prazo usado neste guia. A confirmação da operação define uma data-base, chamada D; a liquidação ocorre um dia útil depois dessa base. Confirmações anteriores às 16h usam o dia útil atual. Depois das 16h, a base passa ao próximo dia útil.

Para calcular os casos abaixo, considere sexta-feira, dias úteis de segunda a sexta, sem feriados, fuso UTC-3 e precisão de segundos. O horário de exatamente 16h ainda não foi definido na história.

| Horário de confirmação | Data-base D | Liquidação esperada |
| --- | --- | --- |
| 15h59min59s | Sexta | Segunda |
| 16h00min00s | A confirmar | A confirmar |
| 16h00min01s | Segunda | Terça |
| 16h30min00s | Segunda | Terça |

Esses resultados vêm da regra do exemplo. O calendário, o evento inicial e o corte precisam ser definidos para cada produto.

## Feche a inclusão do limite antes de avaliar o teste

O caso de exatamente 16h leva uma pergunta a quem responde pela regra. Depois de esclarecer, identifique o último valor de uma faixa e o primeiro da seguinte. Se a precisão for de milissegundos, 15h59min59s já não será o vizinho imediatamente anterior ao corte.

Para conferir o cálculo, guarde o horário efetivamente usado pelo sistema. O clique no aplicativo e a confirmação da operação podem ocorrer em instantes diferentes.

Em outro conjunto de casos, introduza um feriado previsto no calendário de teste. Recalcule primeiro a data-base, depois a data de liquidação. Mudar horário e calendário ao mesmo tempo pode dificultar a investigação de uma divergência.

## O que o exemplo ensina

Um teste de segunda para terça pode passar sem examinar o corte. No caso que motivou o guia, uma confirmação na sexta às 16h30 deveria resultar em terça, mas o sistema programava segunda. O teste comum não havia exercitado a condição que mudava a data-base.

Use os casos de fronteira junto de outros casos relevantes. Valores vazios, formatos inválidos e permissões, por exemplo, podem precisar de investigação separada.

## Erros comuns

Testar perto do limite sem confirmar se ele está incluído.

Usar uma unidade maior que a precisão real do produto.

Calcular um prazo com o calendário ou evento inicial errado.

Adotar o resultado atual do sistema para preencher um esperado ainda indefinido.

## Para praticar

Escolha um limite da sua tarefa. Registre a unidade, a precisão, a inclusão da fronteira e os valores vizinhos. Calcule os esperados antes da execução e indique a fonte de cada decisão.
