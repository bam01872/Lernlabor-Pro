const {chromium,open,S}=require('./lib');const fs=require('fs');
const FRS=(process.argv[3]||'me,el,ch,ku,mt,lo').split(',');const VK=process.argv[2]||'m';const dark=process.argv[4]==='dark';
(async()=>{const b=await chromium.launch();const out=[];
for(const fr of FRS){const p=await open(b,VK,{q:'?fr='+fr,dark,ls:{'lernlabor-pro-tour':'1','lernlabor-pro-tips':'{}'}});
 const list=await p.evaluate(()=>FACH.flatMap(f=>D[f].modules.map((m,i)=>[f,i,m.t])));
 for(const [f,i,t] of list){
  await p.evaluate(([f,i])=>{modSel[f]=i;go(f);scrollTo(0,0)},[f,i]);await p.waitForTimeout(250);
  // open all details/collapsibles in Nachschlagen
  const r=await p.evaluate(()=>{
   document.querySelectorAll('details').forEach(d=>{if(!d.querySelector('.mm'))d.open=true});
   const W=document.documentElement.clientWidth;const res={docOver:document.documentElement.scrollWidth-W,outside:[],clip:[],small:[],svgSmall:0,svgTot:0,svgMin:99,svgOv:[],slash:[],tap:[]};
   const vis=e=>{const s=getComputedStyle(e);if(s.display==='none'||s.visibility==='hidden')return false;const r=e.getBoundingClientRect();return r.width>0&&r.height>0};
   const nav=document.querySelector('#fs');
   for(const e of document.querySelectorAll('#view *')){if(!vis(e))continue;if(e.closest('svg')&&e.tagName!=='svg')continue;const r=e.getBoundingClientRect();
    if(r.right>W+1&&!e.closest('[style*="overflow"],.tw,.tscroll')){let sc=false;for(let a=e.parentElement;a;a=a.parentElement){const s=getComputedStyle(a);if(/auto|scroll|hidden|clip/.test(s.overflowX)){sc=true;break}}if(!sc)res.outside.push(e.tagName+'.'+e.className+' '+(e.innerText||'').slice(0,30)+' r='+Math.round(r.right))}
    const s=getComputedStyle(e);
    if(/hidden|clip/.test(s.overflowX)&&e.scrollWidth>e.clientWidth+2&&e.tagName!=='svg'&&s.textOverflow!=='ellipsis')res.clip.push(e.tagName+'.'+e.className+' '+(e.innerText||'').slice(0,30)+' '+e.scrollWidth+'>'+e.clientWidth);
    if(e.childNodes.length&&[...e.childNodes].some(n=>n.nodeType===3&&n.textContent.trim())){const fsz=parseFloat(s.fontSize);if(fsz<12)res.small.push(fsz+'px '+e.tagName+'.'+e.className+' '+e.textContent.trim().slice(0,25))}
    if(e.matches('button,a,input,select,[role=button],summary')){const h=r.height,w=r.width;if((h<24||w<24))res.tap.push(e.tagName+'.'+e.className+' '+(e.innerText||e.value||'').slice(0,20)+' '+Math.round(w)+'x'+Math.round(h))}
   }
   const texts=[...document.querySelectorAll('#view svg text')].filter(vis);
   const bx=[];
   for(const t of texts){const fs=parseFloat(getComputedStyle(t).fontSize);const m=t.getScreenCTM();if(!m)continue;const eff=fs*Math.hypot(m.a,m.b);res.svgTot++;if(eff<9)res.svgSmall++;res.svgMin=Math.min(res.svgMin,eff);
     const r=t.getBoundingClientRect();if(t.textContent.trim().length>1)bx.push([r,t.textContent.trim().slice(0,20),t.closest('svg')])}
   for(let a=0;a<bx.length;a++)for(let c=a+1;c<bx.length;c++){const [r1,t1,s1]=bx[a],[r2,t2,s2]=bx[c];if(s1!==s2)continue;const ox=Math.min(r1.right,r2.right)-Math.max(r1.left,r2.left),oy=Math.min(r1.bottom,r2.bottom)-Math.max(r1.top,r2.top);if(ox>2&&oy>2&&ox*oy>0.2*Math.min(r1.width*r1.height,r2.width*r2.height))res.svgOv.push(t1+' ⟷ '+t2)}
   const tw=document.createTreeWalker(document.querySelector('#view'),NodeFilter.SHOW_TEXT);let n;while(n=tw.nextNode()){if(n.parentElement.closest('svg,script,style,input,textarea'))continue;const m=n.textContent.match(/(?:\d|\b)\s?(?:€|[a-zA-Zμ°²³]{1,4})\/(?:[a-zA-Z]{1,4}|\(|\d)/g);if(m)res.slash.push(...m)}
   for(const t of texts){const m=t.textContent.match(/[a-zA-Zμ€°²³]{1,4}\/[a-zA-Z(]{1,4}/g);if(m)res.slash.push('SVG:'+m.join(','))}
   res.svgMin=Math.round(res.svgMin*10)/10;return res});
  out.push({fr,f,i,t,...r});
 }
 out.push({fr,errs:p._errs});await p.context().close();
}
fs.writeFileSync(S+`/scan-${process.env.TAG||""}${VK}${dark?'-dark':''}-${FRS.join('')}.json`,JSON.stringify(out,null,0));
await b.close();
const T=out.filter(o=>o.t);console.log(VK,'topics',T.length,'docOver',T.filter(o=>o.docOver>0).length,'outside',T.filter(o=>o.outside.length).length,'clip',T.filter(o=>o.clip.length).length,'small',T.filter(o=>o.small.length).length,'svgSmallTopics',T.filter(o=>o.svgSmall).length,'svgSmall',T.reduce((a,o)=>a+o.svgSmall,0),'/',T.reduce((a,o)=>a+o.svgTot,0),'svgOv',T.reduce((a,o)=>a+o.svgOv.length,0),'slash',T.reduce((a,o)=>a+o.slash.length,0),'errs',out.filter(o=>o.errs&&o.errs.length).map(o=>o.fr+':'+o.errs.slice(0,3)));
})();
