/* ===== Version 11: Zahl und Einheit nie trennen =====
   Leerzeichen zwischen Zahl und Einheit (auch %, °C, €) und zwischen Tausendergruppen werden geschützt,
   eine Zahl mit Bruch-Einheit (.fru) samt folgendem Satzzeichen steht in einem nicht umbrechenden Kasten. */
(()=>{
const U=['%','‰','°C','°F','°','K','V','kV','mV','µV','A','mA','kA','µA','W','kW','MW','GW','mW','Wh','kWh','MWh','GWh','Ah','mAh','Hz','kHz','MHz','GHz','Ω','kΩ','MΩ','mΩ','VA','kVA','MVA','var','kvar','Mvar','F','µF','nF','pF','mF','H','mH','T','mT','N','kN','MN','mN','Nm','N·m','kNm','kN·m','Pa','kPa','MPa','GPa','hPa','bar','mbar','m','mm','cm','dm','km','µm','μm','nm','m²','m³','mm²','mm³','cm²','cm³','dm²','dm³','km²','l','L','ml','dl','cl','hl','Liter','g','kg','mg','µg','t','s','ms','µs','min','h','d','a','mol','kmol','mmol','J','kJ','MJ','GJ','cal','kcal','€','ct','Cent','Euro','EUR','dB','dB(A)','lx','lm','cd','U','Stück','Stk.','Teile','Teil','Jahre','Jahren','Jahr','Tage','Tagen','Tag','Monate','Monaten','Monat','Wochen','Woche','Stunden','Stunde','Minuten','Minute','Sekunden','Sekunde','Schichten','Schicht','Prozent','Prozentpunkte','Grad','Mbit','kbit','bit','Byte','kB','MB','GB','HRC','HB','HV','ppm','rad','sr','Bq','Gy','Sv','eV','K⁻¹','1/K','mol/l'];
const rq=x=>x.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'),L='A-Za-zÄÖÜäöüßµμΩ0-9_²³';
const RU=new RegExp('(\\d)[ \\u2009](?=(?:'+U.slice().sort((a,b)=>b.length-a.length).map(rq).join('|')+')(?!['+L+']))','g');
const RT=/(^|[^\d,.])(\d{1,3})((?:[  ]\d{3})+)(?![\d,])/g;
const SKIP=/^(svg|input|textarea|select|option|script|style|code)$/i;
const fix=s=>s.replace(RU,'$1 ').replace(RT,(m,a,b,c)=>a+b+c.replace(/[  ]/g,' '));
const glue=root=>{if(!root)return;
 const tw=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode:n=>{if(!/\d[  ]/.test(n.nodeValue))return NodeFilter.FILTER_REJECT;for(let e=n.parentNode;e&&e!==root.parentNode;e=e.parentNode){if(e.nodeType===1&&(SKIP.test(e.nodeName)||e.isContentEditable))return NodeFilter.FILTER_REJECT}return NodeFilter.FILTER_ACCEPT}}),T=[];
 while(tw.nextNode())T.push(tw.currentNode);
 T.forEach(n=>{const v=fix(n.nodeValue);if(v!==n.nodeValue)n.nodeValue=v});
 root.querySelectorAll('.fru').forEach(f=>{if(f.parentNode.classList.contains('nw'))return;const p=f.previousSibling;if(!p||p.nodeType!==3)return;
  const m=/(\S*\d)[\s ]$/.exec(p.nodeValue);if(!m)return;
  const w=document.createElement('span');w.className='nw';p.nodeValue=p.nodeValue.slice(0,m.index);f.before(w);w.append(m[1]+' ',f);
  const nx=w.nextSibling;if(nx&&nx.nodeType===3){const k=/^[.,;:!?)»“]+/.exec(nx.nodeValue);if(k){w.append(k[0]);nx.nodeValue=nx.nodeValue.slice(k[0].length)}}})};
/* ---------- Texte stehen nicht über: lieber etwas kleinere Schrift als ein Wort mitten im Wort brechen ---------- */
const BLK=/^(block|list-item|flex|grid|inline-block|inline-flex|inline-grid|table-cell|table-caption|flow-root)$/;
const leaf=e=>{for(const c of e.children){const d=getComputedStyle(c).display;if(d==='block'||d==='list-item'||d==='flex'||d==='grid'||d==='table'||d==='flow-root'||c.tagName==='svg'||c.tagName==='IMG'||c.tagName==='TABLE'||c.tagName==='INPUT'||c.tagName==='SELECT'||c.tagName==='TEXTAREA')return false}return true};
const own=e=>[...e.childNodes].some(n=>n.nodeType===3&&n.nodeValue.trim())||[...e.children].some(c=>getComputedStyle(c).display==='inline'&&c.textContent.trim());
function fitHtml(root){if(!root||!root.isConnected)return;
 const E=[root,...root.querySelectorAll('*')].filter(e=>{if(e.closest('svg,script,style,textarea,select,option,input'))return false;if(!e.offsetParent&&getComputedStyle(e).position!=='fixed')return false;
  const cs=getComputedStyle(e);if(!BLK.test(cs.display)||cs.overflowX!=='visible'||cs.textOverflow==='ellipsis')return false;return own(e)&&leaf(e)});
 E.forEach(e=>{if(e.dataset.ow==null)e.dataset.ow=e.style.overflowWrap||'';e.style.overflowWrap='normal';e.style.wordBreak='normal'});
 let O=E.filter(e=>e.scrollWidth>e.clientWidth+1);
 for(let i=0;i<6&&O.length;i++){O.forEach(e=>{const f=parseFloat(getComputedStyle(e).fontSize);if(e.dataset.fs0==null)e.dataset.fs0=f;if(f>e.dataset.fs0*.72)e.style.fontSize=(f*.94).toFixed(2)+'px'});O=O.filter(e=>e.scrollWidth>e.clientWidth+1)}
 O.forEach(e=>{e.style.overflowWrap='anywhere'});window.llNoFit=O}
const SVQ='.skb svg.mlsk,.simsv svg';
function fitSvg(s){if(!s||!s.isConnected)return;const S=s.getBoundingClientRect();if(!S.width)return;const A=S.width*S.height;
 const sh=[...s.querySelectorAll('circle,ellipse,rect')].filter(e=>!e.closest('defs,pattern,clipPath,mask,marker,symbol')).map(e=>({e,r:e.getBoundingClientRect(),c:e.tagName!=='rect'})).filter(o=>o.r.width>6&&o.r.height>6&&o.r.width*o.r.height<A*.25);
 s.querySelectorAll('text').forEach(t=>{if(!t.textContent.trim()||t.hasAttribute('data-fru')||t.closest('defs'))return;let r=t.getBoundingClientRect();if(!r.width)return;
  const cx=(r.left+r.right)/2,cy=(r.top+r.bottom)/2;let av=Infinity,best=null;
  for(const o of sh){const b=o.r;if(cx<b.left||cx>b.right||cy<b.top||cy>b.bottom||b.height<r.height*.8)continue;if(best&&b.width*b.height>=best.width*best.height)continue;best=b;
   if(o.c){const R=b.height/2,dy=Math.min(R,Math.abs(cy-(b.top+R))+r.height*.3);av=b.width*Math.sqrt(Math.max(0,1-(dy/R)**2))-2}else av=b.width-3}
  let k=1;if(best&&r.width>av+.5)k=Math.min(k,av/r.width);
  const an=getComputedStyle(t).textAnchor;const room=an==='middle'?2*Math.min(cx-S.left,S.right-cx):an==='end'?r.right-S.left:S.right-r.left;if(r.width>room+.5)k=Math.min(k,room/r.width);
  if(k<.995){const f=parseFloat(getComputedStyle(t).fontSize);t.style.fontSize=(f*Math.max(.6,k)).toFixed(2)+'px'}})}
window.llFitSvg=fitSvg;
const st=document.createElement('style');st.textContent='.nw{white-space:nowrap}';document.head.append(st);
const R=new Set();let q=0;
const run=()=>{q=0;let roots=[...R];R.clear();if(roots.some(x=>x.id==='view'||x.id==='nm')||roots.length>40)roots=['view','nm'].map(id=>document.getElementById(id)).filter(Boolean);
 roots=roots.filter(x=>x.isConnected&&!roots.some(y=>y!==x&&y.contains(x)));
 roots.forEach(x=>{glue(x)});roots.forEach(x=>{const b=x.closest('p,li,div,section,details,td,button,label')||x;fitHtml(b)});
 const sv=new Set();roots.forEach(x=>{if(x.closest('svg'))sv.add(x.closest('svg'));else x.querySelectorAll('svg').forEach(v=>sv.add(v))});
 const mine=[...sv].filter(v=>!(innerWidth<=700&&v.matches(SVQ)));if(mine.length)requestAnimationFrame(()=>requestAnimationFrame(()=>requestAnimationFrame(()=>mine.forEach(fitSvg))))};
const mo=new MutationObserver(ms=>{for(const m of ms){const t=m.target.nodeType===1?m.target:m.target.parentElement;if(t)R.add(t)}if(!q)q=requestAnimationFrame(run)});
['view','nm'].forEach(id=>{const e=document.getElementById(id);if(e){mo.observe(e,{childList:true,subtree:true,characterData:true});R.add(e)}});
let RW=innerWidth;addEventListener('resize',()=>{if(innerWidth===RW)return;RW=innerWidth;document.querySelectorAll('#view [data-fs0]').forEach(e=>{e.style.fontSize=''});R.add(document.getElementById('view'));if(!q)q=requestAnimationFrame(run)});
window.llGlue=glue;run();
})();
