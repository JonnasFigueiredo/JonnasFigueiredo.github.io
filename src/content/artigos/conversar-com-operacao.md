---
title: "Conversar com a operação"
description: "Quem executa o processo todo dia sabe onde a tela termina e o trabalho continua. Como observar, o que perguntar e como respeitar o tempo de quem está operando."
pubDate: 2026-09-17
tags: ["QA", "comunicação", "operação", "observação", "processo"]
draft: false
kind: guia
section: tecnica
category: 'Comunicação'
whenUse: "Quando o sistema faz parte de um processo físico ou manual, e você precisa saber o que acontece depois que a tela diz que terminou."
updatedDate: 2026-09-19
---

A tela mostra “aprovado”, mas o reembolso ainda não foi pago. Alguém precisa conferir os dados, incluir o valor num lote e acompanhar o retorno do banco. Se o teste termina na aprovação, essas etapas ficam fora da sua investigação.

Operação é quem executa o processo apoiado pelo sistema. Pode ser expedição, financeiro, recepção ou uma equipe de campo. Conversar com essas pessoas ajuda a entender o significado de um resultado e o trabalho que acontece antes e depois dele.

## Acompanhe um caso do começo ao fim

O IIBA inclui a observação entre as técnicas do BABOK para conhecer o trabalho no contexto em que ele acontece. Na prática, peça para acompanhar uma tarefa que tenha relação com a sua dúvida. Quem faz o mesmo processo todos os dias pode omitir etapas ao explicá-lo de memória.

> Oi! Estou preparando os testes da alteração de dados de reembolso. Queria entender o que acontece entre a aprovação e o envio do lote. Posso acompanhar um caso com vocês, num horário combinado? Meu objetivo é identificar quais etapas precisamos conferir no sistema.

Combine se você vai perguntar durante a execução ou anotar para conversar depois. Quando houver atendimento ou uma atividade que exija concentração, prefira guardar as perguntas. Para processos remotos, uma demonstração com dados de teste pode ser suficiente.

## Observe as decisões, não só os cliques

No exemplo do reembolso, a equipe abre uma planilha antes de montar o lote. Em vez de concluir que a planilha deveria desaparecer, pergunte qual conferência ela permite fazer.

> O que você procura nessa lista antes de incluir o reembolso?

> Em que situação você separa um caso para resolver depois?

> Se os dados mudarem depois da aprovação, o que precisa ser conferido de novo?

Observe também as esperas. Entre aprovar e enviar pode haver tempo para o usuário alterar uma informação. Depois do envio, o sistema pode precisar aguardar uma confirmação externa. São situações diferentes, mesmo que a tela apresente um único status.

Anote onde outra área assume o trabalho e como recebe a informação. Um aviso por mensagem pode ser parte de um acordo necessário ou um contorno para uma integração incompleta. A pergunta seguinte é quem definiu esse caminho e por quê.

## Explique o que você viu

Ao terminar a observação, devolva a sequência para quem acompanhou:

> Pelo que entendi, a aprovação autoriza incluir o reembolso no lote. Antes do envio, vocês conferem os dados novamente. Depois do envio, uma alteração exige tratar o retorno daquele lote. Em que parte essa descrição precisa de correção?

Se a pessoa executa o processo, mas não decide a regra, peça a indicação do responsável. Se ela responde pela decisão, registre o alcance da confirmação. Uma orientação válida para pagamentos de uma unidade pode não valer para outra.

## Leve o processo para o teste

Suponha que a regra confirmada seja: alterar dados após a aprovação devolve o reembolso para conferência enquanto o lote não foi enviado. Prepare esse estado em homologação e confira o efeito da alteração.

Depois investigue separadamente o que acontece após o envio do lote. O resultado esperado pode ser outro, e a integração precisa oferecer um sinal para distinguir “enviado”, “recebido” e “concluído”. Essas diferenças orientam testes de [transição de estados](/artigos/transicao-de-estados).

Se possível, mostre o caso à operação em uma demonstração. Ela pode perceber que um dado importante ficou de fora ou que o nome de um status não corresponde ao trabalho.

## Cuide do retorno

Diga o que você vai levar ao time e volte com a decisão. Se uma entrega mudar um procedimento, combine com quem responde pela operação como e quando a mudança será comunicada. A correção do sistema e a adoção de um novo processo podem acontecer em momentos diferentes.

## Erros comuns

Observar apenas a tela e deixar de perguntar o que orienta cada decisão.

Interromper uma atividade em horário de pico sem combinar antes.

Concluir que todo trabalho fora do sistema é desperdício ou defeito.

Testar uma alteração de status sem preparar os eventos anteriores que o processo exige.

## Para praticar

Escolha uma mensagem de sucesso do produto. Descubra quem recebe o resultado e acompanhe a próxima etapa. Anote uma espera, uma conferência e uma passagem para outra área. Compare essas observações com os seus testes.
