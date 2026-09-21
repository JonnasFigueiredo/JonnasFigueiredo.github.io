---
title: "Teste exploratório"
description: "Como conduzir uma sessão com objetivo, usar as descobertas para escolher o próximo teste e preservar as evidências."
pubDate: 2026-09-17
tags: ["QA", "teste exploratório", "evidências", "expedição"]
draft: false
kind: guia
section: tecnica
category: 'Técnica de teste'
whenUse: "Quando cada descoberta muda a próxima pergunta e você precisa aprender sobre o comportamento do produto enquanto testa."
updatedDate: 2026-09-19
---

Você tenta cancelar um pedido antes da coleta e o sistema ainda permite a saída. Essa descoberta sugere outra pergunta: o problema também aparece quando a entrega é registrada primeiro?

No teste exploratório, o que você aprende durante a execução orienta os próximos testes. O ISTQB descreve essa relação na seção 4.4.2 do [syllabus CTFL](https://bstqb.qa/files/syllabus_ctfl_4.0br.pdf). Em *Explore It!*, Elisabeth Hendrickson aprofunda a exploração de software e a procura de comportamentos que merecem investigação.

## Comece com um objetivo

“Explorar a loja” deixa muitas possibilidades abertas. “Investigar o efeito do cancelamento entre a impressão da etiqueta e a entrega à transportadora” define uma decisão, um intervalo do processo e uma consequência.

Reserve um período para a sessão, prepare dados de teste e anote o que já sabe da regra. Inclua perguntas ainda abertas e como você vai observar o resultado da integração.

## Use cada resultado para escolher o próximo passo

No exemplo, o responsável pela expedição confirmou que um cancelamento aceito antes da entrega precisa impedir a saída. Você prepara o pedido etiquetado, cancela, confere a conclusão do processamento e tenta registrar a entrega.

Se a saída for autorizada, preserve a evidência e a sequência. Você pode repetir o caso para investigar a consistência ou mudar a ordem dos eventos para entender o alcance da divergência.

| Pergunta da execução | Observação | Próximo passo possível |
| --- | --- | --- |
| O cancelamento processado impede a saída? | A saída foi autorizada. | Repetir com outro pedido nas mesmas condições. |
| O que acontece se a entrega vier primeiro? | A solicitação segue para devolução. | Comparar a ordem e os eventos das duas execuções. |
| E se os eventos chegarem durante a coleta? | Ainda não investigado. | Esclarecer o esperado e preparar a concorrência. |

A tabela é um registro de investigação, não uma sequência obrigatória. Você escolhe o próximo caso pelo que precisa esclarecer.

## Preserve o caminho até a descoberta

Anote estado inicial, ações, dados, horários e resultado. Uma imagem final pode mostrar a falha sem explicar como ela surgiu. Identificadores dos pedidos e mensagens ajudam a reencontrar a execução.

Quando mudar uma condição, diga qual foi. Se alterou várias para explorar rapidamente, registre isso e depois reduza o caso para investigar quais influenciam o resultado.

Se ainda não houver esperado confirmado, registre o comportamento e a razão da suspeita. Você pode abrir uma dúvida de regra ou um relato de problema com essa incerteza explícita.

## Pare para consolidar

Ao terminar o período, reúna descobertas, evidências, perguntas e áreas que ficaram de fora. Se surgiu outro assunto, proponha uma nova sessão com objetivo próprio.

O [caso da caixa](/artigos/caso-caixa) mostra a relação entre observação da operação e teste. A [ferramenta de investigação](/ferramenta) oferece campos para registrar os casos e o próximo experimento.

## Erros comuns

Executar sem uma pergunta e perder a relação entre os casos.

Guardar apenas o resultado final, sem a sequência.

Continuar testando sem consolidar o que já foi descoberto.

Confundir uma hipótese de causa com uma explicação demonstrada.

## Para praticar

Escolha uma dúvida e reserve um período para explorá-la. A cada execução, anote o resultado e por que escolheu o próximo caso. Ao terminar, escreva uma descoberta, uma pergunta pendente e uma parte que ficou fora da sessão.
