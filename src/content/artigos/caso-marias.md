---
title: "Duas Marias"
description: "Use a documentação e exemplos controlados para distinguir coincidência de nomes de correspondência entre identificadores."
pubDate: 2026-09-17
tags: ["QA", "análise documental", "identificação", "regras de negócio"]
draft: false
kind: guia
section: caso
category: 'Análise de negócio'
whenUse: "Quando um bloqueio parece incorreto, mas existe documentação vigente que pode explicar a decisão do sistema."
updatedDate: 2026-09-19
---

A recepção pede a retirada de um bloqueio. O nome é o mesmo no pedido e na etiqueta, então parece que o sistema está recusando uma combinação correta. Antes de propor a mudança, João procura o que o fluxo precisa conferir além do nome.

Neste caso do guia, há documentação disponível, mas não há PO acessível para responder à dúvida. A pergunta que orienta a leitura é: quais identificadores precisam corresponder para continuar?

## Na história do João

Carla apresenta o bloqueio. João consulta o protocolo e a especificação vigentes, que exigem a correspondência entre o pedido e a pessoa identificada. Dois registros com o mesmo nome ainda podem pertencer a pessoas diferentes.

Ele prepara a comparação em homologação. A etiqueta identifica Maria da Silva pelo prontuário 114, enquanto o pedido pertence ao prontuário 508. Depois troca o pedido pelo correspondente ao 114, preservando as demais condições.

## O que a comparação mostrou

| Etiqueta | Pedido | Esperado | Observado |
| --- | --- | --- | --- |
| Maria, prontuário 114 | Maria, prontuário 508 | Bloquear. | Bloqueio. |
| Maria, prontuário 114 | Maria, prontuário 114 | Permitir continuar, com as demais conferências atendidas. | Continuidade. |

O bloqueio investigado corresponde à regra encontrada. A coincidência dos nomes havia escondido a diferença entre os identificadores. O resultado pode ser explicado à recepção com o trecho e os dois casos, mantendo o controle previsto no processo.

## Como repetir o raciocínio

Quando alguém pedir a remoção de um bloqueio, descubra qual situação ele procura impedir. Localize o requisito, confira seu alcance e monte um caso que distinga a suspeita inicial da regra documentada.

Use dados de teste e registre o que mudou entre as execuções. Se alterar nome, pedido e identificador ao mesmo tempo, pode ficar difícil explicar qual relação mudou o resultado.

A comparação deste caso esclarece uma condição do fluxo. Outras conferências de identificação precisam de seus próprios exemplos e critérios.

## Erros comuns

Usar a urgência da operação como justificativa para remover um controle antes de entendê-lo.

Presumir que nomes iguais identificam a mesma pessoa.

Usar um protocolo de outro fluxo sem conferir sua aplicação.

## Para ir além

[Leia a documentação com uma pergunta em mãos](/artigos/ler-documentacao-com-uma-pergunta) mostra como encontrar o trecho e transformar sua interpretação em um exemplo.

## Para praticar

Escolha um bloqueio do produto e escreva o que ele protege. Identifique a condição que você mudaria entre dois testes para conferir essa explicação e localize a fonte do esperado.
