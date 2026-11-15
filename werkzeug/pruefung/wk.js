(()=>{const out=[];const W=document.documentElement.clientWidth;
for(const t of ['home','uben','fall','oral','sim','stand','betrieb']){go(t);const sw=document.documentElement.scrollWidth;if(sw>W)out.push(t+':'+sw)}
for(const f of FACH)D[f].modules.forEach((m,i)=>{modSel[f]=i;go(f);document.querySelectorAll('details').forEach(d=>{if(!d.querySelector('.mm'))d.open=true});const sw=document.documentElement.scrollWidth;if(sw>W){let w='';for(const e of document.querySelectorAll('#view *')){const r=e.getBoundingClientRect();if(r.right>W+1){w=e.tagName+'.'+e.className+' '+Math.round(r.right);}}out.push(m.t+':'+sw+' '+w)}});
return JSON.stringify({W,n:out.length,out:out.slice(0,15),ua:navigator.userAgent.slice(-40)})})()
