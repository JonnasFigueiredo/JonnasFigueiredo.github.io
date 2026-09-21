---
title: "Como investigar regras de negócio sem PO disponível"
description: "Como buscar interlocutores, comparar casos e registrar hipóteses quando o PO não está disponível para esclarecer uma regra."
pubDate: 2026-09-16
tags: ["QA", "regras de negócio", "investigação"]
draft: false
kind: 'guia'
whenUse: "Quando falta acesso ao PO e a resposta pode estar distribuída entre chamados, operação, documentos e código."
updatedDate: 2026-09-19
---

A tarefa chegou para teste, mas você ainda não sabe por que uma alteração é permitida num caso e bloqueada em outro. O PO está indisponível e a história não explica a diferença. Você pode começar comparando os casos e procurando quem conhece o processo.

O objetivo dessa primeira investigação é encontrar a condição que muda o resultado e a pessoa ou o registro que pode confirmá-la.

## Comece com a diferença entre dois casos

Imagine um portal de empréstimo de equipamentos. Duas reservas têm retirada prevista para amanhã. Em uma, o horário pode ser alterado; na outra, o botão está bloqueado.

Anote o tipo de equipamento, a unidade, o estado da reserva e a mensagem apresentada. Se ainda não sabe qual diferença importa, deixe as possibilidades visíveis: proximidade do horário, equipamento separado ou regra própria da unidade.

> A separação desta reserva já começou? O bloqueio depende disso ou do tempo que falta para a retirada?

Uma pergunta assim dá à operação algo concreto para explicar. Se a resposta for “nesses casos a gente liga para ajustar”, pergunte quando o procedimento é usado e quem o definiu.

## Procure quem conhece cada parte

O suporte pode localizar ocorrências. A operação pode mostrar a separação do equipamento. Desenvolvimento pode explicar qual condição bloqueia o botão. O responsável pelo serviço pode confirmar se esse é o comportamento desejado.

O IIBA descreve [entrevistas](https://www.iiba.org/knowledgehub/business-analysis-body-of-knowledge-babok-guide/10-techniques/10-25-interviews/) e [observação](https://www.iiba.org/knowledgehub/business-analysis-body-of-knowledge-babok-guide/10-techniques/10-31-observation/) no BABOK. Aqui, a escolha depende da lacuna: se falta uma explicação, converse; se a sequência não está clara, acompanhe um caso.

Ao ouvir a resposta, [explique de volta](/artigos/explicar-de-volta): “Entendi que iniciar a separação impede trocar o horário, mesmo faltando um dia para a retirada. Quem pode confirmar essa condição para a unidade que estamos testando?”.

## Separe as hipóteses com novos casos

Se uma reserva usa outro equipamento e outra unidade, comparar apenas as duas não mostra qual condição explica o bloqueio. Em homologação, prepare casos equivalentes e varie a condição investigada.

Você pode descobrir que o botão depende do início da separação. Isso explica a implementação observada. Para definir o esperado, confira a política do serviço ou a decisão de quem responde pela regra.

Se houver divergência, registre o caso em que ela muda o resultado. “A política permite alteração até duas horas antes; a implementação bloqueia assim que começa a separação” dá ao responsável uma decisão específica para avaliar.

## Deixe a investigação utilizável

Registre a pergunta, a interpretação, o exemplo e a fonte na própria tarefa. Identifique se a resposta já foi confirmada e para quais unidades ou modalidades vale.

Quando faltar resposta, deixe a pendência com impacto e próximo passo. Enquanto ela é resolvida, você pode trabalhar nos critérios já esclarecidos. Combine com o time se a dúvida impede a conclusão da história.

## Para praticar

Escolha uma tarefa com dúvida de regra. Anote duas explicações possíveis para o comportamento e qual caso ajudaria a distingui-las. Procure a pessoa que conhece essa parte do processo e registre como confirmar o esperado.
