import json,sys
from PIL import Image,ImageDraw
S='/tmp/claude-0/-home-user/7865dcbe-c4d3-5b6c-9b2b-153d1666c57c/scratchpad/a/pairs/'
sel=json.load(open(S+'sel.json'))
idx=[int(x) for x in sys.argv[2].split(',')] if len(sys.argv)>2 else range(len(sel))
rows=[]
for k in idx:
  o=sel[k]
  try:a=Image.open(S+o['n']+'-a.png');b=Image.open(S+o['n']+'-b.png')
  except Exception as e: continue
  h=260
  a=a.resize((int(a.width*h/a.height),h));b=b.resize((int(b.width*h/b.height),h))
  r=Image.new('RGB',(a.width+b.width+20,h+24),'white');d=ImageDraw.Draw(r);d.text((4,4),o['n']+' '+o['fr']+' '+o['t']+' jm=%.2f'%o['jm'],fill='black')
  r.paste(a,(0,24));r.paste(b,(a.width+20,24));rows.append(r)
W=max(r.width for r in rows);H=sum(r.height for r in rows)
im=Image.new('RGB',(W,H),'#ccc');y=0
for r in rows: im.paste(r,(0,y));y+=r.height
im.save(sys.argv[1])
