import {methods,fields,blank,restore,example,compileNote,emptyCase,type Investigation,type Field,type Method,type Case} from '../data/investigation';
import {contexts} from '../data/learning';

const storageKey='jonnas-investigation';
const maxCases=20;
const stageCount=5;

export function initInvestigation() {
  const found=document.querySelector<HTMLElement>('#investigation');
  if(!found) return;
  const root:HTMLElement=found;
  const $=<T extends HTMLElement>(selector:string)=>root.querySelector<T>(selector)!;

  let note:Investigation=blank();
  let stage=0;
  let saving=false;
  let pendingReplace:(()=>void)|null=null;

  try {
    const stored=localStorage.getItem(storageKey);
    const restored=stored?restore(JSON.parse(stored)):null;
    if(restored) { note=restored; saving=true; }
  } catch { /* Storage is optional. */ }

  const tabs=[...root.querySelectorAll<HTMLButtonElement>('[role=tab]')];
  const panels=[...root.querySelectorAll<HTMLElement>('[role=tabpanel]')];
  const cases=$('#cases');
  const template=document.querySelector<HTMLTemplateElement>('#case-template')!;
  const dialog=$<HTMLDialogElement>('#replace-dialog');
  const saveBox=$<HTMLInputElement>('#save-locally');
  const saveStatus=$('#save-status');

  function persist() {
    try {
      if(saving) localStorage.setItem(storageKey,JSON.stringify({format:1,note}));
      else localStorage.removeItem(storageKey);
      saveStatus.textContent=saving?'Guardado apenas neste navegador. Desmarque para apagar.':'Sem salvamento local. O texto pode ser perdido ao sair ou recarregar.';
    } catch {
      saveStatus.textContent='Este navegador não permitiu salvar. Copie a nota antes de sair.';
    }
  }

  function hasContent() {
    return fields.some(key=>note[key].trim()) || note.cases.some(c=>Object.values(c).some(v=>v.trim()));
  }

  function renderFields(skip?:Element|null) {
    root.querySelectorAll<HTMLInputElement|HTMLTextAreaElement>('[data-field]').forEach(el=>{
      if(el!==skip) el.value=note[el.dataset.field as Field];
    });
    $<HTMLInputElement>('#po').checked=note.po;
    $<HTMLInputElement>('#docs').checked=note.docs;
    $<HTMLSelectElement>('#rule-status').value=note.status;
    $<HTMLSelectElement>('#method').value=note.method;
  }

  function renderCases() {
    cases.replaceChildren(...note.cases.map((c,i)=>{
      const item=template.content.firstElementChild!.cloneNode(true) as HTMLElement;
      item.dataset.index=String(i);
      item.querySelector('h3')!.textContent=`Caso ${i+1}`;
      item.querySelectorAll<HTMLTextAreaElement>('[data-case-field]').forEach(el=>{ el.value=c[el.dataset.caseField as keyof Case]; });
      const remove=item.querySelector<HTMLButtonElement>('.remove-case')!;
      remove.disabled=note.cases.length<=1;
      remove.setAttribute('aria-label',`Remover caso ${i+1}`);
      return item;
    }));
    $<HTMLButtonElement>('#add-case').disabled=note.cases.length>=maxCases;
  }

  function renderDerived() {
    const context=contexts.find(c=>c.po===note.po&&c.docs===note.docs)!;
    $('#context-title').textContent=`${note.po?'Com':'Sem'} PO, ${note.docs?'com':'sem'} documentação`;
    $('#context-action').textContent=context.action;
    $<HTMLAnchorElement>('#context-study').href=`/artigos/${context.slug}`;
    $<HTMLAnchorElement>('#context-study').textContent=`Ver o caso “${context.title}”`;

    const method=methods[note.method];
    $('#method-prompt').textContent=method.prompt;
    $<HTMLAnchorElement>('#method-study').href=method.href;
    const views:Record<string,Method>={'#mapping-work':'mapping','#table-work':'tabela','#limits-work':'limites','#explore-work':'explorar'};
    for(const [selector,id] of Object.entries(views)) $(selector).hidden=note.method!==id;
    root.querySelectorAll<HTMLElement>('[data-mirror]').forEach(el=>{ el.textContent=note[el.dataset.mirror as Field].trim()||'Ainda não preenchido.'; });

    $('#example-warning').hidden=!note.example;
    $<HTMLSelectElement>('#example-select').value=note.example;

    const gaps:string[]=[];
    if(!note.decision.trim()) gaps.push('A pergunta sobre a decisão está vazia.');
    if(!note.rule.trim()) gaps.push('A interpretação da regra não foi escrita.');
    if(!note.source.trim()) gaps.push('Nenhuma fonte registrada.');
    if(!note.authority.trim()) gaps.push('Falta dizer quem pode confirmar.');
    if(note.status==='hypothesis') gaps.push('A regra ainda está marcada como hipótese.');
    const noExpected=note.cases.filter(c=>!c.expected.trim()).length;
    if(noExpected) gaps.push(noExpected===1?'Um caso está sem resultado esperado.':`${noExpected} casos estão sem resultado esperado.`);
    if(!note.pending.trim()) gaps.push('Nenhuma pendência registrada. Vale perguntar se não sobrou mesmo nenhuma dúvida.');
    $('#review-gaps').replaceChildren(...(gaps.length?gaps:['Nenhum campo principal em aberto.']).map(text=>Object.assign(document.createElement('p'),{textContent:text})));

    const compiled=compileNote(note);
    $<HTMLTextAreaElement>('#compiled-note').value=compiled;
    $('#memory-note').textContent=compiled;
    persist();
  }

  function renderAll() { renderFields(); renderCases(); renderDerived(); }

  function showStage(next:number,focus=false) {
    stage=Math.max(0,Math.min(stageCount-1,next));
    tabs.forEach((tab,i)=>{ tab.setAttribute('aria-selected',String(i===stage)); tab.tabIndex=i===stage?0:-1; });
    panels.forEach((panel,i)=>{ panel.hidden=i!==stage; });
    $<HTMLButtonElement>('#previous-stage').disabled=stage===0;
    $<HTMLButtonElement>('#next-stage').hidden=stage===stageCount-1;
    $('#stage-count').textContent=`Etapa ${stage+1} de ${stageCount}`;
    if(focus) tabs[stage].focus();
  }

  function replaceWith(build:()=>Investigation) {
    const apply=()=>{ note=build(); renderAll(); showStage(0); };
    if(!hasContent()) return apply();
    pendingReplace=apply;
    if(typeof dialog.showModal==='function') dialog.showModal();
    else if(confirm('Substituir a investigação atual?')) apply();
  }

  root.addEventListener('input',event=>{
    const el=event.target as HTMLInputElement|HTMLTextAreaElement;
    if(el.dataset.field) {
      note[el.dataset.field as Field]=el.value.slice(0,10000);
      renderFields(el);
      renderDerived();
    } else if(el.dataset.caseField) {
      const index=Number(el.closest<HTMLElement>('.case-item')?.dataset.index);
      if(note.cases[index]) { note.cases[index][el.dataset.caseField as keyof Case]=el.value.slice(0,10000); renderDerived(); }
    }
  });

  root.addEventListener('change',event=>{
    const el=event.target as HTMLElement;
    if(el.id==='po'||el.id==='docs') note[el.id]=(el as HTMLInputElement).checked;
    else if(el.id==='rule-status') note.status=(el as HTMLSelectElement).value==='confirmed'?'confirmed':'hypothesis';
    else if(el.id==='method') { const value=(el as HTMLSelectElement).value; if(value in methods) note.method=value as Method; }
    else if(el.id==='save-locally') saving=(el as HTMLInputElement).checked;
    else return;
    renderDerived();
  });

  cases.addEventListener('click',event=>{
    const button=(event.target as HTMLElement).closest('.remove-case');
    if(!button||note.cases.length<=1) return;
    note.cases.splice(Number(button.closest<HTMLElement>('.case-item')!.dataset.index),1);
    renderCases(); renderDerived();
  });

  $('#add-case').addEventListener('click',()=>{
    if(note.cases.length>=maxCases) return;
    note.cases.push(emptyCase());
    renderCases(); renderDerived();
    cases.lastElementChild?.querySelector('textarea')?.focus();
  });

  tabs.forEach((tab,i)=>{
    tab.addEventListener('click',()=>showStage(i));
    tab.addEventListener('keydown',event=>{
      const moves:Record<string,number>={ArrowRight:i+1,ArrowLeft:i-1,Home:0,End:stageCount-1};
      if(!(event.key in moves)) return;
      event.preventDefault();
      showStage((moves[event.key]+stageCount)%stageCount,true);
    });
  });
  const scrollToTabs=()=>root.querySelector('.stage-tabs')!.scrollIntoView({block:'nearest'});
  $('#previous-stage').addEventListener('click',()=>{ showStage(stage-1); scrollToTabs(); });
  $('#next-stage').addEventListener('click',()=>{ showStage(stage+1); scrollToTabs(); });

  $('#load-example').addEventListener('click',()=>{
    const id=$<HTMLSelectElement>('#example-select').value;
    replaceWith(()=>id?example(id):blank());
  });
  $('#new-note').addEventListener('click',()=>replaceWith(blank));
  $('#cancel-replace').addEventListener('click',()=>{ pendingReplace=null; dialog.close(); });
  $('#confirm-replace').addEventListener('click',()=>{ dialog.close(); pendingReplace?.(); pendingReplace=null; });

  $('#copy-note').addEventListener('click',async()=>{
    const output=$<HTMLTextAreaElement>('#compiled-note');
    const status=$('#copy-status');
    try { await navigator.clipboard.writeText(output.value); status.textContent='Nota copiada.'; }
    catch {
      output.select();
      status.textContent=document.execCommand('copy')?'Nota copiada.':'Não foi possível copiar. Selecione o texto e copie manualmente.';
    }
  });

  $('#reveal-note').addEventListener('click',event=>{
    const button=event.currentTarget as HTMLButtonElement;
    const reference=$('#memory-reference');
    reference.hidden=!reference.hidden;
    button.setAttribute('aria-expanded',String(!reference.hidden));
  });

  saveBox.checked=saving;
  renderAll();
  showStage(0);
  root.hidden=false;
}
