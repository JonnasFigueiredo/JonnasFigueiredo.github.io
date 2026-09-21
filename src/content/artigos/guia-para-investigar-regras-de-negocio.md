---
title: "Comece com uma decisão."
description: "Um guia para encontrar a regra, conferir o entendimento e guardar o que você aprendeu."
pubDate: 2026-09-16
tags: ["QA", "guia", "regras de negócio"]
draft: false
kind: guia
section: guia
category: Guia prático
updatedDate: 2026-09-19
---

Você abre uma tarefa, entende a tela e consegue imaginar alguns testes. Mas, se alguém perguntar por que aquele resultado é o certo, a resposta ainda não vem. É nesse ponto que este guia começa.

Dominar uma regra de negócio é conseguir explicar qual decisão ela orienta, em quais condições o resultado muda e de onde veio essa definição. Você constrói esse entendimento investigando uma decisão de cada vez. O caminho abaixo ajuda a começar mesmo quando o PO está ocupado ou a documentação não responde a tudo.

## Recortar

“Preciso entender o financeiro” é um assunto grande demais para orientar o próximo passo. “Qual evento inicia a contagem do prazo deste pagamento?” já permite procurar um trecho, uma pessoa e um caso.

Escolha uma decisão da tarefa atual: permitir uma alteração, calcular uma data, bloquear uma saída, emitir um certificado. Anote o que você sabe e qual parte ainda impede prever o resultado. Inclua a consequência de errar: cobrar duas vezes, perder um prazo, impedir uma operação legítima.

Com esse recorte, você consegue pedir ajuda sem exigir que alguém explique o produto inteiro. Também consegue perceber se a investigação está respondendo à pergunta ou se abriu outro assunto que merece ser tratado à parte.

## Investigar

Comece pelas fontes disponíveis. A documentação pode explicar a regra; o suporte pode localizar casos; a operação pode mostrar uma etapa que a tela esconde; desenvolvimento pode esclarecer como os eventos são processados. Ao conversar, procure também quem responde pela decisão.

Três perguntas ajudam a avançar:

> Me mostra dois casos parecidos que terminaram diferente?

> O que acontece depois que a tela diz que terminou?

> Onde encontro essa regra e quem pode esclarecer uma exceção?

Se os casos diferem em horário, estado e tipo de cliente, ainda há várias explicações possíveis. Use essas diferenças para preparar a próxima pergunta. Quando encontrar um documento, leia o trecho com suas definições, versão e contexto de aplicação.

## Contextos

### Sem PO e sem documentação confiável

Procure quem atende os clientes e quem executa o processo. Compare ocorrências, acompanhe uma delas e anote onde o trabalho muda de caminho. Um procedimento manual pode revelar uma exceção, uma limitação do sistema ou um controle necessário. Pergunte por que ele existe antes de concluir.

No caso [A caixa vai sair?](/artigos/caso-caixa), acompanhar a expedição mostra por que a etiqueta impressa ainda não significa entrega à transportadora. O texto sobre [investigar sem PO](/artigos/investigar-regras-sem-po) detalha como chegar à pessoa que confirma a regra.

### Com PO e pouca documentação

Leve uma interpretação e dois exemplos para discutir. No [Example Mapping](/artigos/example-mapping-em-portugues), o grupo separa história, regras, exemplos e perguntas. O registro deixa claro o que foi combinado e o que precisa de outra resposta.

O caso [Segundo clique](/artigos/caso-segundo-clique) mostra essa conversa: repetir uma tentativa de pagamento e fazer outra compra do mesmo valor exigem resultados diferentes.

### Com documentação e sem PO acessível

Leia com a sua pergunta em mãos. Confira se o texto trata daquele produto, perfil e situação. Transforme a orientação em um exemplo: ela permite prever o resultado ou ainda deixa duas interpretações?

Em [Duas Marias](/artigos/caso-marias), a documentação explica o que um bloqueio protege. O texto sobre [leitura da documentação](/artigos/ler-documentacao-com-uma-pergunta) mostra como ligar uma dúvida ao trecho que pode respondê-la.

### Com PO e documentação disponíveis

Use a conversa para discutir exceções e comparar a regra escrita com casos concretos. Ter as duas fontes facilita o trabalho, mas uma palavra como “confirmar” ainda pode esconder decisões diferentes.

Em [Rafael muda de atividade](/artigos/caso-rafael), abrir uma revisão e autorizar uma mudança são etapas distintas. Uma [tabela de decisão](/artigos/tabela-de-decisao) organiza as condições para a primeira; as exigências da etapa seguinte precisam ser esclarecidas com seus responsáveis.

## Conferir

[Explique de volta](/artigos/explicar-de-volta): “Neste caso, entendi que o resultado seria este. Qual condição faria a resposta mudar?”. Use um exemplo em que duas interpretações produzam respostas diferentes. É mais fácil corrigir um caso específico do que perceber uma discordância escondida num “entendi”.

Depois, escolha como testar. Combinações de condições pedem uma [tabela de decisão](/artigos/tabela-de-decisao). A ordem dos eventos pede [estados e transições](/artigos/transicao-de-estados). Prazos e quantidades pedem atenção aos [valores-limite](/artigos/valores-limite). Se cada descoberta orientar o próximo teste, organize uma [sessão exploratória](/artigos/teste-exploratorio).

Escreva o esperado antes de executar e registre o observado depois. Se o esperado ainda for uma hipótese, mantenha essa informação junto do caso. Em processos assíncronos, descubra como reconhecer a conclusão do processamento para não confundir uma espera com o resultado final.

## Registrar e retomar

Deixe uma nota na própria tarefa, com cinco campos:

| Campo | O que registrar |
| --- | --- |
| Pergunta | A decisão que você está investigando. |
| Resposta | A regra entendida, suas condições e o que já foi confirmado. |
| Exemplo | Estado inicial, ação, esperado e observado. Se ainda não executou, anote. |
| Fonte | O trecho ou a conversa que sustenta a resposta, com data e responsável. |
| Pendente | A dúvida restante, seu impacto e quem vai ajudar a resolvê-la. |

A [ferramenta de investigação](/ferramenta) ajuda a montar essa nota. Você pode começar com um exemplo preenchido ou usar uma tarefa sua. [Usar o guia na prática](/artigos/usar-o-guia-na-pratica) acompanha as etapas da ferramenta.

Quando voltar ao assunto, tente explicar a regra antes de abrir o registro. Confira o que esqueceu e atualize o que mudou. O texto sobre [aprender sem decorar tudo](/artigos/aprender-regras-sem-decorar-tudo) mostra como fazer essa retomada.

Uma investigação pode terminar com uma resposta ou com uma dúvida bem encaminhada. Nos dois casos, o time precisa conseguir entender de onde você partiu, o que descobriu e qual decisão ainda falta tomar.

## Para ir além

As práticas deste guia se apoiam em análise de negócio, teste de software, colaboração por exemplos e aprendizagem. A [bibliografia comentada](/artigos/bibliografia-comentada) explica a contribuição de cada referência. Em [Leituras](/leituras), você pode escolher pelo assunto que precisa aprofundar agora.
