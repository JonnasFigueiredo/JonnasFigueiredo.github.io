---
title: "Segundo clique"
description: "Compare repetição de pagamento e nova compra para esclarecer cobranças esperadas e preservar dúvidas sobre a integração."
pubDate: 2026-09-17
tags: ["QA", "Example Mapping", "pagamentos", "exemplos"]
draft: false
kind: guia
section: caso
category: 'Análise de negócio'
whenUse: "Quando uma regra discutida pelo time parece clara, mas exemplos semelhantes podem exigir resultados diferentes."
updatedDate: 2026-09-19
---

O pagamento foi confirmado, mas a resposta não chegou ao aplicativo. A cliente tenta novamente. A história diz que ela não pode ser cobrada duas vezes. O time ainda precisa distinguir essa repetição de outra compra legítima do mesmo valor.

Neste caso do guia, João leva dois exemplos para uma conversa com Beatriz e Felipe. Há PO acessível, mas pouca documentação sobre a decisão.

## Na história do João

O primeiro caso repete a compra 81, na mesma sessão, com a mesma identificação e os mesmos dados. Beatriz confirma que deve haver uma cobrança. Felipe explica como a identidade da compra é preservada na integração.

O segundo caso tem duas compras distintas, 81 e 82, válidas e com o mesmo valor. O esperado são duas cobranças. Comparar apenas o valor faria o sistema bloquear uma compra legítima.

## Os exemplos expõem outra pergunta

| Caso discutido | Resultado esperado | Situação |
| --- | --- | --- |
| Compra 81 repetida com a mesma identificação e os mesmos dados | Uma cobrança. | Confirmado para o caso. |
| Compras 81 e 82, distintas, válidas e com o mesmo valor | Duas cobranças. | Confirmado para o caso. |
| Mesma identificação com valor diferente | Em aberto. | Felipe vai consultar o contrato da integração. |

A última linha deixa de ser uma suposição silenciosa e passa a ser uma pergunta com responsável. Essa separação entre regras, exemplos e perguntas é o que o [Example Mapping](/artigos/example-mapping-em-portugues) ajuda a organizar.

## O que falta levar para o teste

A conversa define esperados; a história não apresenta a execução desses pagamentos. Para testar, ainda é necessário preparar as tentativas, acompanhar o processamento e conferir quantas cobranças foram registradas para cada compra.

O número de cliques pode ser diferente do número de requisições, porque o aplicativo ou a integração também podem repetir tentativas. Combine com desenvolvimento como observar essas mensagens e relacioná-las à compra.

O recorte discutido considera a mesma sessão. Outras sessões, intervalos de repetição e mudanças de dados precisam ser examinados conforme o contrato do produto e da integração.

## Erros comuns

Deduzir que duas compras são iguais apenas porque têm o mesmo valor.

Conferir só a mensagem da tela sem acompanhar o resultado das cobranças.

Preencher uma pergunta com o resultado mais plausível para encerrar o refinamento.

## Para ir além

Veja [explicar de volta](/artigos/explicar-de-volta) para escolher casos que distinguem interpretações e [conversar com desenvolvimento](/artigos/conversar-com-desenvolvimento) para preparar a observação da integração.

## Para praticar

Escolha uma operação que pode ser repetida no seu produto. Descreva um caso de nova tentativa e outro de nova operação válida. Confira como o produto identifica cada um e qual resultado deveria aparecer.
