---
title: "Flaky test não é azar: é acoplamento com o ambiente"
description: "Todo teste intermitente esconde uma dependência não declarada: tempo, ordem de execução, estado compartilhado ou rede. Um roteiro para descobrir qual delas é, em vez de aumentar o timeout e seguir em frente."
pubDate: 2026-08-12
tags: ["automação", "Selenium", "boas práticas"]
---

O teste passa na sua máquina. Passa de novo. Falha no pipeline. Você roda outra vez e passa.
Alguém abre um PR configurando três tentativas e a vida segue.

O problema é que esse teste parou de ser um teste. Ele virou um gerador de ruído, e o custo real
não é o tempo perdido, é que o time aprende a ignorar vermelho. Depois de algumas semanas, uma
falha legítima passa despercebida porque "esse aí sempre falha".

Teste intermitente não é azar. É sempre uma dependência que o teste tem mas não declarou.

## As quatro fontes

Na prática, quase toda intermitência que já investiguei caiu em uma destas quatro.

### 1. Tempo

A mais comum em UI. O teste assume que algo já aconteceu quando ainda não aconteceu.

O sintoma clássico é a espera fixa espalhada pelo código, ou um sleep que "resolveu" o problema.
Ele não resolveu, apenas calibrou o teste para a velocidade da sua máquina naquele dia. Na máquina
do CI, que é mais lenta e roda quatro jobs em paralelo, a janela não vale mais.

A correção é sempre a mesma: espere pela **condição**, não pelo relógio. Espere o elemento ficar
clicável, espere a requisição terminar, espere o indicador de carregamento sumir. Se você não
consegue expressar a condição, esse é o bug de verdade, porque a aplicação não está te dando um sinal
observável de que terminou.

### 2. Ordem de execução

O teste passa sozinho e falha na suíte, ou o contrário. Isso significa que ele depende de algo
que outro teste deixou para trás: um registro no banco, uma sessão aberta, um cache quente.

O diagnóstico é direto: rode a suíte em ordem aleatória. Se a taxa de falha muda, você tem
acoplamento de ordem. A maioria dos runners suporta isso com uma flag.

A correção é cada teste construir o próprio estado e limpá-lo depois. Custa mais tempo de
execução e vale cada segundo.

### 3. Estado compartilhado e paralelismo

Dois testes rodando ao mesmo tempo usam o mesmo usuário, o mesmo registro, a mesma fila. Um
altera, o outro lê.

O sintoma característico é que a intermitência **aumenta quando você aumenta o paralelismo**,
e essa é uma correlação que vale a pena medir antes de sair caçando. A correção passa por dados
isolados por execução: usuário gerado na hora, identificador único por thread, schema por worker.

### 4. Rede e dependências externas

Serviço de terceiro, ambiente compartilhado, DNS, latência. Aqui vale distinguir o que você está
testando: se o objetivo é o seu fluxo, o terceiro deveria estar simulado. Se o objetivo é a
integração de verdade, esse teste provavelmente não pertence ao pipeline que roda a cada commit.

## Como investigar de fato

O instinto é olhar o teste que falhou. Quase nunca é o caminho mais curto. O roteiro que
funciona:

1. **Meça antes de consertar.** Rode o teste isolado 50 vezes. Depois rode a suíte inteira 20
   vezes. As duas taxas de falha, comparadas, já eliminam metade das hipóteses.
2. **Não confie no print da falha.** Guarde o vídeo, o HTML da página no momento do erro e os
   logs do backend correlacionados por horário. O print mostra o sintoma; os logs mostram a
   causa.
3. **Reproduza no ambiente errado de propósito.** Rode com CPU limitada, com rede lenta, com
   paralelismo dobrado. Se a taxa dispara, você achou a dimensão.
4. **Só então mude o código.**

## O que fazer enquanto não conserta

Quarentena, não repetição automática. Mova o teste para um conjunto separado que roda mas não
bloqueia o merge, com prazo e responsável. Repetir a execução até passar esconde o problema e
mantém a falsa sensação de cobertura.

E registre a taxa de intermitência como métrica visível do time. O que não é medido não é
priorizado, e teste flaky é sempre a coisa que alguém vai consertar na semana que vem.

## O incômodo que vale a pena

Na maioria das vezes que persegui um flaky até o fim, o que estava por trás não era um problema
do teste. Era uma condição de corrida real na aplicação, que em produção aparece uma vez a cada
mil requisições e vira um chamado que ninguém consegue reproduzir.

O teste intermitente foi só o primeiro lugar onde ela ficou visível.
