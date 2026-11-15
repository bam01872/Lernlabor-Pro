(()=>{const W=document.documentElement.clientWidth;const res={};
for(const t of ['home','uben']){go(t);const l=[];for(const e of document.querySelectorAll('body *')){const r=e.getBoundingClientRect();if(r.right>W+1&&r.width>0)l.push(e.tagName+'.'+e.className+'#'+e.id+' w='+Math.round(r.width)+' r='+Math.round(r.right)+' '+(e.innerText||'').slice(0,30).replace(/\n/g,' '))}res[t]=l.slice(0,8)}
return JSON.stringify(res)})()
