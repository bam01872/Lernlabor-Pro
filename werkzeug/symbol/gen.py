import math
def defs(p):
    return f'''<defs>
<radialGradient id="{p}bg" cx="50%" cy="45%" r="70%"><stop offset="0" stop-color="#3a3f48"/><stop offset="1" stop-color="#1b1e24"/></radialGradient>
<linearGradient id="{p}liq" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fdba74"/><stop offset="1" stop-color="#ea580c"/></linearGradient>
<linearGradient id="{p}gear" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fb923c"/><stop offset="1" stop-color="#c2410c"/></linearGradient>
<pattern id="{p}grid" width="32" height="32" patternUnits="userSpaceOnUse"><path d="M32 0H0V32" fill="none" stroke="#fb923c" stroke-opacity=".06" stroke-width="2"/></pattern>
<clipPath id="{p}bowl"><circle cx="256" cy="310" r="104"/></clipPath>
</defs>
<rect width="512" height="512" fill="url(#{p}bg)"/><rect width="512" height="512" fill="url(#{p}grid)"/>'''
def flask(p, bubbles=True):
    b = f'''<circle cx="342" cy="128" r="19" fill="#fb923c"/><circle cx="370" cy="88" r="12" fill="#fb923c" fill-opacity=".8"/><circle cx="326" cy="68" r="8" fill="#fb923c" fill-opacity=".6"/>''' if bubbles else ''
    return f'''<path d="M222 100 V197 A118 118 0 1 0 290 197 V100 M204 96 H308" fill="none" stroke="#000" stroke-width="29" stroke-linecap="round" stroke-linejoin="round"/>
<g clip-path="url(#{p}bowl)"><path d="M140 312 C190 286 222 286 256 304 S326 328 372 298 V430 H140Z" fill="url(#{p}liq)"/>
<path d="M140 312 C190 286 222 286 256 304 S326 328 372 298" fill="none" stroke="#fed7aa" stroke-width="6" stroke-opacity=".75"/>
<circle cx="222" cy="352" r="10" fill="#1b1e24" fill-opacity=".25"/><circle cx="288" cy="372" r="7" fill="#1b1e24" fill-opacity=".25"/></g>
<circle cx="238" cy="262" r="9" fill="#fb923c"/>
<path d="M222 100 V197 A118 118 0 1 0 290 197 V100 M204 96 H308" fill="none" stroke="#f8fafc" stroke-width="17" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M238 128 H256 M238 152 H250 M238 176 H256" stroke="#fb923c" stroke-width="7" stroke-linecap="round"/>{b}'''
def gear_path(cx,cy,ro,ri,n,hole):
    pts=[]
    for i in range(n):
        a0=2*math.pi*i/n; w=2*math.pi/n
        for frac,r in [(0.0,ri),(0.12,ri),(0.22,ro),(0.53,ro),(0.63,ri),(1.0,ri)]:
            a=a0+frac*w-math.pi/2
            pts.append((cx+r*math.cos(a),cy+r*math.sin(a)))
    d='M'+' L'.join(f'{x:.1f} {y:.1f}' for x,y in pts)+'Z'
    d+=f' M{cx+hole} {cy} A{hole} {hole} 0 1 0 {cx-hole} {cy} A{hole} {hole} 0 1 0 {cx+hole} {cy}Z'
    return d
def v1():
    p='a'
    g=gear_path(256,256,212,178,12,146)
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">{defs(p)}<path d="{g}" fill="url(#{p}gear)" fill-rule="evenodd"/><circle cx="256" cy="256" r="146" fill="#1b1e24" fill-opacity=".35"/><g transform="translate(256 262) scale(.56) translate(-256 -248)">{flask(p)}</g></svg>'
def v2():
    p='b'
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">{defs(p)}<g transform="translate(232 222) scale(.8) translate(-256 -248)">{flask(p)}</g>
<rect x="276" y="372" width="196" height="96" rx="24" fill="#f97316"/><text x="374" y="440" text-anchor="middle" font-family="'Schibsted Grotesk','Arial Black',Arial,sans-serif" font-weight="800" font-size="66" letter-spacing="3" fill="#1b1e24">PRO</text></svg>'''
def v3():
    p='c'
    cx,cy=256,256; R=214; r=132
    shades=['#fb923c','#f97316','#ea580c','#fb923c','#f97316','#ea580c']
    out=''
    for i in range(6):
        a0=math.radians(-90+60*i-30); a1=math.radians(-90+60*i+30)
        P=[(cx+R*math.cos(a0),cy+R*math.sin(a0)),(cx+R*math.cos(a1),cy+R*math.sin(a1)),(cx+r*math.cos(a1),cy+r*math.sin(a1)),(cx+r*math.cos(a0),cy+r*math.sin(a0))]
        out+=f'<path d="M{P[0][0]:.1f} {P[0][1]:.1f} L{P[1][0]:.1f} {P[1][1]:.1f} L{P[2][0]:.1f} {P[2][1]:.1f} L{P[3][0]:.1f} {P[3][1]:.1f}Z" fill="{shades[i]}" stroke="#1b1e24" stroke-width="10" stroke-linejoin="round"/>'
    hexin=' '.join(f'{cx+(r-4)*math.cos(math.radians(-90+60*i-30)):.1f},{cy+(r-4)*math.sin(math.radians(-90+60*i-30)):.1f}' for i in range(6))
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">{defs(p)}{out}<polygon points="{hexin}" fill="#23272e"/><g transform="translate(256 262) scale(.47) translate(-256 -248)">{flask(p,False)}</g></svg>'
for n,f in [('v1-zahnrad',v1),('v2-pro-schild',v2),('v3-sechseck',v3)]:
    open(n+'.svg','w').write(f())
