export function remarkStudyBlocks() {
  return tree => {
    const result = [];
    let story = false;
    for (const node of tree.children) {
      if (story && node.type !== 'paragraph') { result.push({type:'html',value:'</section>'}); story=false; }
      if (node.type==='heading' && node.depth===2 && node.children.map(child=>child.value||'').join('')==='Na história do João') {
        result.push({type:'html',value:'<section class="story">'}); result.push(node); story=true;
      } else result.push(node);
    }
    if(story) result.push({type:'html',value:'</section>'});
    tree.children=result;
  };
}

const text = node => node.type==='text' ? node.value : (node.children||[]).map(text).join('');
const isEl = (node, tag) => node.type==='element' && node.tagName===tag;
const h = (tagName, className, children=[], extra={}) => ({type:'element', tagName, properties:{className, ...extra}, children});

/** Classifica citações: pergunta curta, mensagem de chat ou exemplo. */
function classifyQuote(node) {
  const paragraphs = node.children.filter(child=>isEl(child,'p'));
  const body = text(node).trim();
  if (paragraphs.length===1 && body.endsWith('?') && body.length<260 && !/^(Oi|Olá|Pessoal)\b/.test(body)) return 'ask';
  if (/^(Oi|Olá|Pessoal|Obrigad|Resumo|Sobre|Conferi|Encontrei|Testamos|Pedido)/.test(body)) return 'msg';
  return 'example';
}

function decorateQuote(node) {
  const kind = classifyQuote(node);
  node.properties = {...node.properties, className:[kind==='ask'?'ask':'msg']};
  if (kind==='ask') return;
  const label = kind==='msg' ? 'Mensagem de exemplo' : 'Exemplo';
  node.children.unshift(h('div',['msg-head'],[
    h('span',[],[{type:'text',value:label}]),
    h('button',['copy-quote'],[{type:'text',value:'Copiar'}],{type:'button',hidden:true}),
  ]));
}

export function rehypeStudyTables() {
  return tree => {
    const visit = node => {
      if(!node.children) return;
      node.children=node.children.map(child=>{
        if(child.tagName==='table') return {type:'element',tagName:'div',properties:{className:['table-scroll'],tabIndex:0,role:'region','aria-label':'Tabela de exemplos'},children:[child]};
        if(child.tagName==='blockquote') decorateQuote(child);
        visit(child); return child;
      });
    };
    visit(tree);

    // Seções especiais no nível do texto: "Erros comuns" e "Para praticar".
    const out = [];
    const kids = tree.children;
    for (let i=0; i<kids.length; i++) {
      const node = kids[i];
      const title = isEl(node,'h2') ? text(node).trim() : '';
      if (title==='Erros comuns' || title==='Para praticar') {
        const group = [];
        let j = i+1;
        while (j<kids.length && !isEl(kids[j],'h2')) { group.push(kids[j]); j++; }
        if (title==='Erros comuns') {
          out.push(node, h('div',['pitfalls'],group));
        } else {
          out.push(h('section',['practice'],[node, ...group, h('label',['done'],[
            h('input',[],[],{type:'checkbox'}),
            {type:'text',value:' Fiz este exercício'},
          ])]));
        }
        i = j-1;
      } else out.push(node);
    }
    tree.children = out;
  };
}
