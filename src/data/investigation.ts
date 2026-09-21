export const methods = {
  comparar: { title:'Comparar casos', prompt:'Mantenha as condições conhecidas iguais e varie o que pode explicar a diferença. Dois resultados distintos são pistas, não confirmação da regra.', href:'/artigos/escolher-testes-para-entender-regras' },
  mapping: { title:'Example Mapping', prompt:'Separe a história, a regra, os exemplos e as perguntas. Confirme o esperado com quem responde pela decisão. Perguntas sem resposta continuam abertas.', href:'/artigos/example-mapping-em-portugues' },
  tabela: { title:'Tabela de decisão', prompt:'Defina duas condições e examine as quatro combinações viáveis. Use “não” apenas quando houver informação suficiente; desconhecido não equivale a falso.', href:'/artigos/tabela-de-decisao' },
  estados: { title:'Transição de estados', prompt:'No estado inicial, descreva como você chegou até ali. Registre o evento, o efeito esperado e o estado observado depois do processamento.', href:'/artigos/transicao-de-estados' },
  limites: { title:'Valores-limite', prompt:'Defina a fronteira e a menor variação relevante. Prepare um caso antes, outro no limite e outro depois. Não invente a inclusão do limite se ela estiver indefinida.', href:'/artigos/valores-limite' },
  explorar: { title:'Teste exploratório', prompt:'Comece com um objetivo. Registre cada experimento e use a descoberta para escolher o próximo. Preserve a sequência e o que não foi coberto.', href:'/artigos/teste-exploratorio' },
} as const;
export type Method = keyof typeof methods;
export const fields = ['decision','impact','rule','source','authority','pending','owner','next','conditionA','conditionB','outcome00','outcome10','outcome01','outcome11','boundary','precision','inclusion','nextExperiment','memory','correction'] as const;
export type Field = typeof fields[number];
export interface Case { initial:string; action:string; expected:string; observed:string }
export type Investigation = Record<Field,string> & { po:boolean; docs:boolean; status:'hypothesis'|'confirmed'; method:Method; cases:Case[]; example:string };
export const emptyCase = ():Case => ({initial:'',action:'',expected:'',observed:''});
export function blank():Investigation {
  return {...Object.fromEntries(fields.map(key=>[key,''])),po:false,docs:false,status:'hypothesis',method:'comparar',cases:[emptyCase(),emptyCase()],example:''} as Investigation;
}
export function restore(value:unknown):Investigation | null {
  if(!value || typeof value!=='object') return null;
  const raw=value as Record<string,unknown>;
  if(raw.format!==1 || !raw.note || typeof raw.note!=='object') return null;
  const saved=raw.note as Record<string,unknown>;
  if(!Array.isArray(saved.cases)||saved.cases.length>20||!saved.cases.length) return null;
  const note=blank();
  for(const key of fields) { if(typeof saved[key]!=='string')return null; note[key]=(saved[key] as string).slice(0,10000); }
  if(typeof saved.po!=='boolean'||typeof saved.docs!=='boolean'||!(saved.method as string in methods)||!['hypothesis','confirmed'].includes(String(saved.status)))return null;
  note.po=saved.po; note.docs=saved.docs; note.method=saved.method as Method; note.status=saved.status as Investigation['status'];
  note.example=typeof saved.example==='string'?saved.example.slice(0,100):'';
  note.cases=[];
  for(const candidate of saved.cases) {
    if(!candidate||typeof candidate!=='object') return null;
    const row=emptyCase();
    for(const key of Object.keys(row) as (keyof Case)[]) { if(typeof candidate[key]!=='string')return null; row[key]=candidate[key].slice(0,10000); }
    note.cases.push(row);
  }
  return note;
}
export function example(id:string):Investigation {
  const note=blank(); note.example=id;
  if(id==='caixa') Object.assign(note,{decision:'Quando o cancelamento aceito precisa impedir a expedição?',impact:'Devolver o dinheiro e enviar o produto mesmo assim.',rule:'Neste recorte fictício, antes da entrega registrada à transportadora, o cancelamento aceito deve impedir a expedição. Depois, encaminha para devolução.',source:'História fictícia da palestra: demonstração da expedição e confirmação de Rosângela.',authority:'Rosângela, responsável pela operação no exemplo.',status:'confirmed',method:'estados',pending:'O que acontece se o cancelamento chegar durante a coleta?',owner:'Responsáveis pelo produto, integração e expedição.',next:'Preparar a sequência concorrente e confirmar o esperado.',cases:[{initial:'Pedido pago, etiqueta impressa, caixa ainda na loja.',action:'Aceitar cancelamento, conferir processamento e tentar registrar saída.',expected:'Bloquear a saída.',observed:'Saída autorizada, no exemplo.'},{initial:'Entrega à transportadora já registrada.',action:'Solicitar cancelamento.',expected:'Encaminhar para devolução.',observed:'Encaminhamento para devolução, no exemplo.'}]});
  if(id==='marias') Object.assign(note,{docs:true,decision:'O que este fluxo compara para permitir continuar?',impact:'Associar o pedido à pessoa errada.',rule:'No protocolo fictício, o pedido precisa pertencer à pessoa identificada. Nome igual não substitui a correspondência dos identificadores.',source:'Protocolo e especificação vigentes da clínica fictícia, trecho de identificação da coleta.',authority:'Responsável pelo protocolo aplicável.',status:'confirmed',cases:[{initial:'Etiqueta: Maria, prontuário 114. Pedido: Maria, prontuário 508.',action:'Conferir o pedido e tentar continuar.',expected:'Bloquear.',observed:'Bloqueio relatado no roteiro.'},{initial:'Etiqueta e pedido do prontuário 114; demais conferências atendidas.',action:'Tentar continuar com o pedido correspondente.',expected:'Permitir continuidade.',observed:'Continuidade relatada no roteiro.'}],pending:'Quais outras conferências fazem parte desse fluxo?',owner:'Responsável pelo protocolo.',next:'Localizar as condições adicionais na especificação.'});
  if(id==='clique') Object.assign(note,{po:true,method:'mapping',decision:'Quando uma nova tentativa de pagamento deve evitar outra cobrança?',impact:'Cobrar duas vezes a mesma compra ou impedir uma segunda compra legítima.',rule:'Na mesma sessão, repetir a compra com a mesma identificação e os mesmos dados não deve gerar outra cobrança. Compras distintas e válidas podem ter o mesmo valor.',source:'Conversa fictícia entre João, Beatriz e Felipe.',authority:'Beatriz confirma o objetivo de negócio; Felipe esclarece a identidade da compra.',status:'confirmed',cases:[{initial:'Compra 81 confirmada; resposta não chegou à cliente.',action:'Repetir com a mesma identificação e os mesmos dados.',expected:'Uma cobrança para a compra 81.',observed:''},{initial:'Compras 81 e 82, distintas e válidas, com o mesmo valor.',action:'Concluir as duas compras.',expected:'Duas cobranças, uma por compra.',observed:''}],pending:'E se a mesma identificação vier com outro valor?',owner:'Felipe.',next:'Consultar o contrato da integração antes de confirmar o esperado.'});
  if(id==='rafael') Object.assign(note,{po:true,docs:true,method:'tabela',decision:'Quando a movimentação deve iniciar uma revisão no produto?',impact:'Ignorar uma mudança de risco ou confundir revisão aberta com autorização para mudar de atividade.',rule:'No recorte fictício validado com Letícia, a mudança de risco confirmada inicia a revisão, com ou sem alteração do título do cargo.',source:'Regra de produto na documentação fictícia, conferida com Letícia.',authority:'Letícia, PO. A aplicação de exigências especializadas segue para o responsável competente.',status:'confirmed',conditionA:'Título do cargo mudou?',conditionB:'A avaliação confirmou mudança de risco?',outcome00:'Não por esses motivos.',outcome10:'Não por esses motivos.',outcome01:'Iniciar revisão.',outcome11:'Iniciar revisão.',cases:[{initial:'Rafael mantém o título; avaliação registrada confirma mudança de risco.',action:'Registrar solicitação de movimentação.',expected:'Iniciar revisão no produto.',observed:''},{initial:'Somente o título mudou; avaliação confirma ausência de mudança de risco.',action:'Registrar solicitação de movimentação.',expected:'Não iniciar revisão por esses motivos.',observed:''}],pending:'Quais condições precisam ser comprovadas antes de concluir a etapa de movimentação?',owner:'PO e responsável competente pela aplicação da exigência.',next:'Validar a proposta e o trecho normativo aplicável. Revisão aberta não comprova exame nem autorização.'});
  return note;
}
const answer=(value:string, fallback='Não informado.')=>value.trim()||fallback;
export function compileNote(note:Investigation):string {
  const rows=note.cases.map((c,i)=>`Caso ${i+1}\nEstado inicial: ${answer(c.initial)}\nAção: ${answer(c.action)}\nEsperado: ${answer(c.expected,'Em aberto.')}\nObservado: ${answer(c.observed,'Não executado ou ainda não registrado.')}`).join('\n\n');
  let method='';
  if(note.method==='tabela') method=`\n\nCondição A: ${answer(note.conditionA)}\nCondição B: ${answer(note.conditionB)}\nA não, B não: ${answer(note.outcome00,'Em aberto.')}\nA sim, B não: ${answer(note.outcome10,'Em aberto.')}\nA não, B sim: ${answer(note.outcome01,'Em aberto.')}\nA sim, B sim: ${answer(note.outcome11,'Em aberto.')}`;
  if(note.method==='limites') method=`\n\nFronteira: ${answer(note.boundary)}\nPrecisão, unidade e calendário: ${answer(note.precision)}\nInclusão do limite: ${answer(note.inclusion,'Pendente de confirmação.')}`;
  if(note.method==='explorar') method=`\n\nPróximo experimento: ${answer(note.nextExperiment)}`;
  return `${note.example?'EXEMPLO FICTÍCIO PARA ESTUDO\n\n':''}PERGUNTA\n${answer(note.decision)}\nImpacto: ${answer(note.impact)}\nContexto: ${note.po?'com PO acessível':'sem PO acessível'}, ${note.docs?'com documentação confiável':'sem documentação confiável'} para esta decisão.\n\nRESPOSTA\nSituação declarada por quem preencheu: ${note.status==='confirmed'?'regra confirmada neste recorte':'hipótese'}.\n${answer(note.rule)}\n\nEXEMPLO\nTécnica: ${methods[note.method].title}.\n${rows}${method}\n\nFONTE\n${answer(note.source)}\nQuem confirma: ${answer(note.authority)}\n\nPENDENTE\n${answer(note.pending,'Nenhuma pendência registrada.')}\nResponsável: ${answer(note.owner)}\nPróxima ação: ${answer(note.next)}${note.correction.trim()?'\n\nCORREÇÃO NA RETOMADA\n'+note.correction:''}\n\nRegistro de investigação: revise os exemplos, as fontes e as pendências antes de compartilhar.`;
}
