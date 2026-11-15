const {chromium,open,S}=require('./lib');
(async()=>{const b=await chromium.launch();const p=await open(b,'m');
await p.screenshot({path:S+'/e1-start.png',fullPage:true});
console.log(await p.evaluate(()=>({title:document.title,hash:location.hash,ls:Object.keys(localStorage),text:document.body.innerText.slice(0,1500),globals:Object.keys(window).filter(k=>/^[A-Z]{1,4}$|^go|^show|^nav|^render/.test(k)).join(',')})));
console.log(p._errs);await b.close()})();
