---
title: "Como escrever um relato de problema útil"
description: "Título, contexto, impacto e evidência para que o time consiga investigar um problema e decidir o que fazer."
pubDate: 2026-09-17
tags: ["QA", "comunicação", "relato de defeito", "escrita"]
draft: false
kind: guia
section: tecnica
category: 'Comunicação'
whenUse: "Quando você encontrou uma divergência e precisa que outra pessoa entenda, reproduza e decida o que fazer."
updatedDate: 2026-09-19
---

“Cupom não funciona” informa pouco para quem vai investigar. “Cupom de primeira compra é aceito para cliente com pedido entregue” já mostra o comportamento e a condição em que ele apareceu.

Um relato precisa permitir que outra pessoa entenda o problema, avalie a consequência e continue a investigação. Quem prioriza procura o impacto; quem corrige procura o contexto e a reprodução; quem consulta meses depois precisa saber o que foi decidido.

Cem Kaner, James Bach e Bret Pettichord abordam a comunicação de problemas em *Lessons Learned in Software Testing*. Essa parte do trabalho merece o mesmo cuidado que a execução: a informação encontrada precisa chegar ao time de forma utilizável.

## Escreva o título depois de entender o caso

Prefira descrever o comportamento com a condição relevante. Evite diagnosticar a causa antes de investigá-la.

| Título vago | Título que situa o problema |
| --- | --- |
| Erro no cupom | Cupom de primeira compra é aceito para cliente com pedido entregue |
| Bug no relatório | Exportação omite o último dia do período selecionado |
| Cadastro quebrado | Cadastro de dependente falha para data de nascimento em 29/02/2000 |

O título não precisa carregar todos os detalhes. Ambiente, versão e dados de teste podem ficar no corpo, desde que sejam fáceis de localizar.

## Separe o que viu do que concluiu

Registre o observado com dados, sequência e evidência. Depois descreva o esperado e a base usada para chegar a ele: critério de aceite, contrato da API, comportamento anterior, necessidade do usuário ou outra referência pertinente.

Nem todo problema chega com uma regra escrita. Perda de dados, uma falha de execução ou uma contradição evidente no produto podem justificar um relato enquanto o time esclarece os critérios. Explique a consequência e o que sustenta a suspeita. Quando a dúvida for de interpretação, identifique essa incerteza em vez de apresentar um acordo que não existe.

Você também não precisa conhecer a causa para registrar. “O desconto foi aplicado” é observação. “A consulta ao histórico falhou” é hipótese, a menos que a investigação já tenha demonstrado isso.

## Mostre uma reprodução que outra pessoa consiga seguir

Inclua o ambiente e a versão, o estado inicial, os dados de teste necessários, as ações e o resultado. Se o problema for intermitente, informe as tentativas e preserve horários e identificadores.

Um exemplo completo, com dados fictícios:

> **Título:** Cupom de primeira compra é aceito para cliente com pedido entregue
>
> **Ambiente:** homologação, versão 2.8.0.
>
> **Impacto observado:** o desconto de 15% foi aplicado a uma conta de teste que já tinha uma compra entregue. Se esse comportamento ocorrer na campanha, clientes fora do público previsto poderão receber o desconto. Ainda não investigamos ocorrências em produção.
>
> **Base do esperado:** a história 482 define que clientes com compra entregue não podem usar o cupom PRIMEIRACOMPRA.
>
> **Preparação:** cliente de teste 1023, com pedido 88731 entregue. Produto elegível para a campanha, sem outro desconto.
>
> **Passos:** entrar com essa conta, adicionar o produto, aplicar PRIMEIRACOMPRA e concluir o pedido com o meio de pagamento de teste.
>
> **Observado:** desconto de 15% no resumo e no pedido 88802, concluído às 14h32. Evidências anexadas à tarefa.
>
> **Esperado:** recusar o cupom e manter o valor sem o desconto.
>
> **Comparação:** com outra conta, sem pedidos anteriores, o cupom foi aceito conforme previsto.
>
> **Pendente:** confirmar como a campanha trata contas que têm apenas pedidos cancelados.

O exemplo distingue a ocorrência em homologação da possível consequência em produção. Também preserva uma dúvida sobre outro caso, sem misturá-la ao problema já descrito.

## Recorte a evidência

Use imagem quando o problema for visual, vídeo quando a sequência ajudar e logs quando eles mostrarem os eventos relevantes. Identificadores e horários permitem reencontrar a execução.

Evite anexar um arquivo inteiro sem indicar o trecho. Preserve o contexto necessário e mascare informações pessoais ou credenciais. Diga o que a evidência mostra para que o leitor saiba o que procurar.

## Continue a conversa até haver uma decisão

Uma conversa curta pode esclarecer uma divergência de ambiente ou uma mudança recente de regra. Registre o resultado na tarefa para que a informação não se perca no chat.

Se o problema for adiado, anote motivo, responsável e eventual condição para reavaliar. Se a regra usada estava errada, corrija o esperado. Se surgir impacto novo, leve esse dado à priorização. O texto sobre [discordar sem disputa](/artigos/discordar-sem-disputa) ajuda a apresentar essa revisão.

## Erros comuns

Descrever uma causa presumida como fato.

Generalizar “acontece sempre” depois de uma execução.

Usar urgência e adjetivos no lugar da consequência observada.

Juntar problemas independentes que precisam de decisões diferentes.

Esperar uma especificação perfeita para comunicar um problema relevante.

## Para praticar

Releia um relato seu como se fosse a pessoa que vai investigar. O título situa o comportamento? Você conseguiria preparar os dados e seguir os passos? Está claro o que foi observado, o que era esperado e o que ainda é hipótese? Reescreva as partes que dependem de informação só sua.
