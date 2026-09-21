---
title: "A linguagem do domínio"
description: "Palavras iguais com significados diferentes causam defeitos silenciosos. Como perceber essas diferenças e montar com o time um vocabulário que ajuda a testar."
pubDate: 2026-09-17
tags: ["QA", "comunicação", "glossário", "domínio"]
draft: false
kind: guia
section: tecnica
category: 'Comunicação'
whenUse: "Nas primeiras semanas em um domínio novo, e sempre que duas pessoas parecem usar a mesma palavra para coisas diferentes."
updatedDate: 2026-09-19
---

O painel informa 120 cursos concluídos. O relatório de certificados mostra 97. Antes de procurar um erro de cálculo, vale perguntar o que cada tela chama de concluído. Uma pode contar quem terminou as aulas; outra, quem também teve a atividade aprovada.

Palavras conhecidas podem esconder decisões diferentes. “Ativo”, “cancelado”, “cliente” e “saldo” parecem claras até você precisar montar um exemplo. O significado depende do processo em que o termo é usado.

## Procure o significado no produto

Uma definição de dicionário ou uma explicação de outro projeto pode ajudar na primeira leitura, mas não fecha o esperado de um teste. Pergunte o que precisa acontecer para o produto usar aquela palavra.

> Quando um curso aparece como concluído, quais etapas o aluno já cumpriu?

> Existe alguém com todas as aulas vistas que ainda não pode emitir o certificado?

> Se uma atividade aprovada for devolvida para correção, o status muda?

As respostas transformam um nome de status em condições que você consegue conferir.

## Uma linguagem comum precisa de contexto

Eric Evans, em *Domain-Driven Design*, descreve a linguagem ubíqua como uma linguagem compartilhada pelo time e ligada ao modelo do domínio. Também trabalha a delimitação dos contextos em que esse modelo se aplica. Uma palavra pode ter sentidos diferentes em contextos distintos; a relação entre eles precisa estar clara.

Para o comercial, “cliente” pode incluir quem está negociando. Para o faturamento, pode identificar quem já possui um contrato. Forçar as duas áreas a usar uma definição única pode esconder uma diferença necessária.

No trabalho de QA, descubra qual sentido vale para cada fluxo e como a informação passa de um contexto ao outro. Um glossário ajuda a registrar essa conversa, mas uma lista de palavras sozinha não resolve divergências no modelo ou nos processos.

## Investigue os desencontros

Totais diferentes entre relatórios podem vir de definições distintas, filtros, horários de atualização ou defeitos. Compare primeiro as condições usadas por cada um.

Nomes genéricos de botões também pedem atenção. “Confirmar” pode significar enviar uma solicitação ou autorizar a execução. Peça que o time descreva o efeito: o que muda, quem é avisado e o que ainda está pendente.

Preste atenção às traduções entre código e interface. Um campo chamado `completed` pode indicar uma etapa técnica concluída, enquanto a tela o apresenta como conclusão de todo o processo. Leve um caso que mostre a diferença.

## Registre poucos termos, com exemplos

Comece pelo vocabulário da tarefa atual. Para cada termo, registre a definição no contexto, um exemplo e a distinção que costuma causar confusão.

> **Curso aprovado**
>
> Neste produto, significa que o aluno cumpriu as aulas exigidas e teve a atividade final aprovada.
>
> **Exemplo:** todas as aulas concluídas, atividade aprovada: pode solicitar o certificado.
>
> **Não confundir com:** aulas concluídas, que ainda permite uma atividade pendente; certificado emitido, que exige concluir a emissão.
>
> **Fonte:** regra de conclusão vinculada à tarefa, com responsável e data da confirmação.

Se modalidades diferentes tiverem outras condições, registre essa divisão. Inclua o termo nos testes e nos relatos com o mesmo significado combinado.

## Mantenha perto do trabalho

Guarde o glossário onde o time já consulta as regras e vincule os termos às histórias relevantes. Quando surgir uma definição nova, atualize os exemplos que dependem dela.

Uma mudança de “curso concluído” para “aulas concluídas” pode exigir ajustes em relatório, notificação, API e testes. O valor da definição aparece quando ela acompanha esses usos.

## Erros comuns

Trazer o significado de outro emprego sem conferir o contexto atual.

Tratar a expansão de uma sigla como explicação completa da regra.

Registrar a definição sem um caso que permita aplicá-la.

Usar a mesma palavra para etapas diferentes e esperar que o leitor deduza qual delas vale.

## Para praticar

Escolha três termos da tarefa atual. Escreva o que cada um significa, um exemplo e uma situação que parece se encaixar, mas não se encaixa. Confira com o time onde as definições divergem e atualize os casos de teste afetados.
