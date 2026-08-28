---
title: "Como testar um LLM em CI sem gastar um centavo de API"
description: "Modelos de linguagem são não-determinísticos, e isso quebra a premissa básica de qualquer suíte de testes. Dá para resolver com respostas gravadas, baselines versionados e um provedor falso, sem chamar a API de verdade no pipeline."
pubDate: 2026-08-20
tags: ["IA", "CI", "estratégia de testes"]
---

Toda suíte de testes que já escrevi parte de uma premissa: dada a mesma entrada, o sistema
devolve a mesma saída. É isso que permite escrever uma asserção e confiar nela.

Modelos de linguagem quebram essa premissa. A mesma pergunta pode gerar respostas diferentes a
cada chamada, e mesmo com temperatura zero uma troca de versão do modelo do lado do provedor
muda o resultado sem aviso. O efeito prático é conhecido: ou o time não testa o que a IA
produz, ou cria um pipeline que falha de forma aleatória e que todo mundo aprende a ignorar.

## O problema não é o não-determinismo, é a pergunta

A pergunta que a maioria dos times tenta responder no teste é "a resposta está certa?". Essa
pergunta não tem asserção possível quando existem mil respostas certas.

A pergunta útil é outra: **"minha última mudança de prompt ou de modelo melhorou ou piorou a
qualidade?"** Essa é comparativa, e comparação é algo que se automatiza.

## Separe as duas coisas que você está testando

Na prática, existem dois testes escondidos dentro de "testar a IA".

O primeiro é **a sua aplicação**: o parsing da resposta, o tratamento de erro, o timeout, o
retry, o contrato da API, o que acontece quando o modelo devolve JSON inválido. Isso é a maior
parte do risco real e é completamente determinístico.

O segundo é **a qualidade do modelo**: se a resposta é fiel à fonte, se responde ao que foi
perguntado, se recusa o que deveria recusar.

O erro comum é misturar os dois no mesmo teste e chamar a API de verdade para ambos.

## Para a aplicação: um provedor falso

Todo o primeiro grupo roda contra um provedor falso que devolve respostas gravadas. Custo zero,
tempo de execução em milissegundos, e você consegue exercitar exatamente os cenários que são
difíceis de provocar contra a API real:

- o modelo devolveu JSON malformado
- o modelo devolveu vazio
- a chamada estourou o timeout
- veio erro 429 de rate limit
- a resposta veio truncada no meio

Esses são os bugs que derrubam o serviço em produção, e nenhum deles precisa de uma chamada real
para ser reproduzido. Grave as respostas uma vez, versione junto com o código, rode a cada commit.

## Para a qualidade: baseline e comparação

O segundo grupo é onde entra o não-determinismo de verdade. A técnica é a mesma de teste de
regressão visual: você não afirma que a saída está certa, você afirma que **não piorou em
relação a um baseline aprovado**.

O ciclo funciona assim:

- Monte um conjunto de casos de avaliação com entrada e resultado esperado. Não a resposta
  literal, mas os critérios que ela precisa cumprir.
- Rode o conjunto contra o modelo e registre o resultado como baseline, versionado no
  repositório.
- A cada mudança de prompt ou de modelo, rode de novo e compare com o baseline.
- O pipeline falha se a métrica cair além de um limite que você definiu.

O ponto importante é que o baseline é um artefato revisável. Quando ele muda, isso aparece no
diff do pull request e alguém precisa aprovar. A mudança de qualidade deixa de ser invisível.

## Onde as métricas entram

Para casos de RAG, algumas métricas dão asserção objetiva sem precisar julgar o texto:

- **Recall de retrieval**: o trecho correto estava entre os recuperados? Isso é binário e não
  depende do modelo generativo.
- **Fidelidade**: cada afirmação da resposta está sustentada por um trecho recuperado?
- **Taxa de recusa**: em entradas que deveriam ser recusadas, o sistema recusou?

As duas primeiras são checáveis com heurísticas determinísticas em boa parte dos casos. Só o que
sobra depois disso precisa de julgamento por modelo, e aí a chamada real vira opt-in, rodando
fora do pipeline principal, no ritmo que o orçamento permitir.

## O resultado

O pipeline principal roda a cada commit, é determinístico, custa zero e falha só quando algo
realmente quebrou. A avaliação cara roda quando você decide, e o baseline garante que uma queda
de qualidade apareça como um diff e não como uma surpresa em produção.

Foi por esse caminho que acabei construindo boa parte das minhas
[ferramentas de qualidade](/projetos): a ideia em todas é a mesma, transformar "avaliar um
modelo" em algo que o CI consegue responder com verde ou vermelho.
