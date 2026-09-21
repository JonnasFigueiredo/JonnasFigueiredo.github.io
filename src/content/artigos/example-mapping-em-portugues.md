---
title: "Example Mapping: regras, exemplos e perguntas na mesma mesa"
description: "Como usar Example Mapping para esclarecer uma história antes do desenvolvimento, com um exemplo completo e o que levar da conversa para o teste."
pubDate: 2026-09-16
updatedDate: 2026-09-19
tags: ["Example Mapping", "BDD", "PO", "exemplos", "refinamento"]
draft: false
kind: guia
section: tecnica
category: 'Colaboração'
whenUse: "Quando existe alguém que pode confirmar a regra e a história ainda tem dúvidas que precisam aparecer antes do código."
---

A história pede que uma pessoa consiga cancelar a própria reserva de sala. Parece pequena até surgirem as perguntas: pode cancelar no horário de início? E uma reunião recorrente? É preciso avisar alguém?

Matt Wynne apresentou o [Example Mapping](https://cucumber.io/blog/bdd/example-mapping-introduction/) para organizar conversas como essa. A técnica separa história, regras, exemplos e perguntas. O grupo consegue enxergar o que já entendeu e o que ainda precisa descobrir.

## Prepare a conversa

Escolha uma história e reúna quem traz as perspectivas de negócio, desenvolvimento e teste. Inclua outras pessoas quando a decisão depender delas. Combine um tempo para trabalhar; Wynne sugere cerca de 25 minutos como referência para uma história pequena.

Use cartões ou um quadro compartilhado. Escreva o tipo de informação em cada cartão, mesmo quando usar as cores habituais:

| Tipo | O que registrar | Cor habitual |
| --- | --- | --- |
| História | O que o grupo está discutindo. | Amarelo |
| Regra | Uma condição ou restrição da história. | Azul |
| Exemplo | Um caso concreto que ilustra a regra. | Verde |
| Pergunta | Algo que ainda precisa ser esclarecido. | Vermelho |

Não é necessário escrever em Gherkin durante essa conversa. Primeiro esclareça o comportamento; depois escolha como registrar e automatizar os testes.

## Percorra um exemplo completo

Considere a história **permitir que a pessoa cancele a própria reserva de sala**. Para esta conversa, o grupo está tratando de uma reserva avulsa, num único fuso, com precisão de segundos.

A primeira regra proposta é permitir o cancelamento antes do início. O QA pergunta pelo instante exato, e o grupo confirma que às 14h já será tarde para cancelar uma reunião marcada para as 14h.

A segunda regra determina que um cancelamento permitido com menos de uma hora de antecedência também gere um aviso ao responsável pela sala. O aviso informa a alteração; não exige uma nova aprovação.

| Regra discutida | Exemplo | Resultado confirmado para o exemplo |
| --- | --- | --- |
| Cancelar antes do início | Reunião às 14h, solicitação às 13h59min59s | Permitir. |
| Cancelar antes do início | Reunião às 14h, solicitação às 14h | Recusar. |
| Avisar quando faltar menos de uma hora | Reunião às 14h, cancelamento às 13h | Permitir, sem esse aviso. |
| Avisar quando faltar menos de uma hora | Reunião às 14h, cancelamento às 13h00min01s | Permitir e enviar o aviso. |

Então aparece a recorrência. Cancelar significa alterar só um encontro ou encerrar toda a série? Como a resposta depende da equipe que administra as salas, a pergunta fica separada, com uma pessoa responsável pela consulta.

Os quatro exemplos já permitem conferir duas decisões. A pergunta sobre recorrência continua visível, sem receber um resultado inventado para completar o quadro.

## Leia o mapa antes de encerrar

Muitas regras podem indicar que vale dividir a história. Muitos exemplos numa regra podem revelar condições diferentes escondidas na mesma frase. Perguntas em aberto mostram o que o grupo ainda precisa aprender.

Avalie o efeito das dúvidas. Uma pergunta sobre uma modalidade que pode ser separada do escopo é diferente de uma pergunta que muda todas as reservas. O time decide como seguir considerando essas dependências.

Você também não precisa produzir exemplos apenas para preencher cartões. Use-os onde ajudam a esclarecer o comportamento e a preparar os testes.

## Leve os acordos para a história

Guarde as regras e os exemplos confirmados com a referência à conversa. Vincule as perguntas aos responsáveis e atualize o mapa quando as respostas chegarem.

Depois prepare ambiente, dados e evidências para executar os casos. Se houver várias condições combinadas, uma [tabela de decisão](/artigos/tabela-de-decisao) pode ajudar a ampliar o conjunto. Se a ordem dos acontecimentos importar, examine as [transições de estados](/artigos/transicao-de-estados).

## Para ir além

A [documentação do Cucumber](https://cucumber.io/docs/bdd/example-mapping/) resume a técnica. *Discovery*, de Gáspár Nagy e Seb Rose, aprofunda a descoberta de comportamento com exemplos. *Specification by Example*, de Gojko Adzic, trata do uso desses exemplos no trabalho de especificação e teste. As duas leituras estão no [catálogo](/leituras).

## Para praticar

Escolha uma história pequena. Leve uma regra que você já conhece e dois casos que ajudem a conferi-la. Durante a conversa, registre separadamente os acordos e as perguntas. Ao terminar, combinem qual parte pode avançar e quem busca as respostas restantes.
