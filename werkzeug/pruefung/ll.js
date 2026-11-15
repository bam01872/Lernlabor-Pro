const {chromium}=require('playwright');const S=__dirname;const L=(...a)=>console.log(...a);
(async()=>{const b=await chromium.launch();const c=await b.newContext({viewport:{width:320,height:568},isMobile:true,hasTouch:true});await c.addInitScript(()=>{try{localStorage.setItem('ll_tour','1')}catch(e){}});const p=await c.newPage();
await p.goto('about:blank');await p.goto('http://localhost:8767/');await p.waitForTimeout(1200);
await p.goto('http://localhost:8767/#thema/hydraulik');await p.waitForTimeout(1200);L('hash',p.url());
await p.addStyleTag({content:'.tiph,.tip{display:none!important}'});
await p.screenshot({path:S+'/ll-320-top.png'});
L(await p.evaluate(()=>[...document.querySelectorAll('button')].filter(b=>/Vermuten|Ansehen|Ausprobieren|Üben/.test(b.innerText)&&b.offsetParent).map(b=>b.className+':'+b.innerText.replace(/\n/g,' ')).slice(0,6).join(' ; ')));
await p.goBack();await p.waitForTimeout(800);L('nach Zurück',p.url());
await b.close()})();
