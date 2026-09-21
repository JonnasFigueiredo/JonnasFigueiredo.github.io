---
title: "Leia a documentação com uma pergunta em mãos"
description: "Uma forma prática de localizar a regra aplicável, esclarecer termos e transformar a leitura da documentação em exemplos verificáveis."
pubDate: 2026-09-16
tags: ["QA", "documentação", "regras de negócio"]
draft: false
kind: 'guia'
whenUse: "Quando existe documentação, mas você ainda precisa encontrar o trecho aplicável ou esclarecer uma interpretação."
updatedDate: 2026-09-19
---

Você abre uma documentação extensa e encontra dezenas de páginas sobre reservas. A tarefa, porém, exige uma resposta específica: depois que a primeira reunião aconteceu, ainda é possível alterar uma série recorrente?

Essa pergunta ajuda a localizar por onde começar. Procure as regras de alteração e amplie a leitura quando o trecho depender de outra definição. Assim você liga o estudo à decisão que precisa testar.

## Confira se o trecho vale para o caso

Antes de usar uma orientação, veja qual versão do produto, modalidade e período ela cobre. Um texto sobre reservas avulsas pode usar as mesmas palavras de um texto sobre recorrência e prever outro comportamento.

O IIBA inclui a [análise documental no BABOK](https://www.iiba.org/knowledgehub/business-analysis-body-of-knowledge-babok-guide/10-techniques/10-18-document-analysis/) como forma de obter informações em materiais existentes. No trabalho de QA, isso envolve tanto localizar uma definição quanto perceber uma lacuna ou conflito entre registros.

Leia os parágrafos próximos, as definições e os links de que o trecho depende. Confira quem mantém o documento e se uma decisão mais recente o alterou. A data da última edição ajuda, mas não prova sozinha que aquela é a versão aplicável à tarefa.

## Transforme a frase em um exemplo

O documento diz: “Alterações são permitidas antes do início da reserva”. Numa série recorrente, início significa o primeiro encontro da série ou o encontro que será alterado?

Monte um caso: reuniões às terças, das 14h às 15h. A primeira já aconteceu e a pessoa quer mudar apenas a terceira.

| Interpretação | Resultado para o caso |
| --- | --- |
| Início é o primeiro encontro da série | A alteração fica bloqueada. |
| Início é o encontro escolhido | A alteração ainda pode ser permitida. |

Se o texto não distingue as duas leituras, leve esse exemplo a quem mantém a regra. Repetir a frase da documentação como esperado esconderia a mesma dúvida dentro do teste.

## Veja que tipo de informação encontrou

Um exemplo mostra um caso. Uma regra define condições. Um procedimento orienta como executar uma tarefa. Um registro de incidente descreve o que aconteceu. Eles podem se complementar, mas têm funções diferentes.

O histórico de uma correção, por exemplo, pode explicar por que uma condição foi adicionada. Confira se a decisão foi incorporada à versão atual antes de usá-la como referência.

Termos do produto também precisam de contexto. Um [glossário](/artigos/linguagem-do-dominio) ajuda a registrar o significado de “série”, “encontro” e “reserva” com exemplos, sem obrigar cada pessoa a reconstruir a distinção.

## Registre a resposta perto do teste

Vincule o trecho, a interpretação confirmada e o caso. Se houver duas fontes incompatíveis, preserve as referências e diga qual decisão precisa ser tomada. Se faltar acesso a um documento citado, registre essa dependência.

Ao mudar a regra, você conseguirá localizar os exemplos afetados. A nota também ajuda quem chegar depois a entender por que aquele resultado foi escolhido.

## Para praticar

Pegue uma regra escrita da tarefa atual. Monte um exemplo que o trecho responda e outro que deixe uma dúvida. Confira versão e alcance, depois encaminhe o segundo caso com a pergunta que falta resolver.
