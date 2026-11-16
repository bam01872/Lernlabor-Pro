#!/usr/bin/env python3
"""Baut die Dozentenversion von Lernlabor Pro (wie Lernlabor tools/build-dozent.py).
Aufruf: python3 build-dozent.py index.html /mnt/project-files/dozent/lernlabor-pro_dozent.html [Ordner mit fonts/]
Quelle ist immer die fertig gebaute index.html (werkzeug/build.py), nie die Einzelteile.
Die Dozentendatei nie ins Repo, nicht auf GitHub Pages und nicht als öffentliches Artifact.
Das Skript macht genau vier Dinge und bricht sonst ab:
1. prüft, dass <title>Lernlabor Pro</title> und const DOZENT=false; je genau einmal vorkommen,
2. ersetzt den Titel durch „Dozent · Lernlabor Pro“,
3. ersetzt const DOZENT=false; durch const DOZENT=true;,
4. bettet jede src:url(fonts/….woff2) als base64 ein (3 Schriften), damit die Datei ohne Server läuft."""
import sys,os,re,base64
src,out=sys.argv[1],sys.argv[2]
root=sys.argv[3] if len(sys.argv)>3 else os.path.dirname(os.path.abspath(src))
T='<title>Lernlabor Pro</title>';S='const DOZENT=false;';NF=3
s=open(src,encoding='utf-8').read()
assert s.count(T)==1,('Titel nicht genau einmal',s.count(T))
assert s.count(S)==1,('const DOZENT=false; nicht genau einmal',s.count(S))
s=s.replace(T,'<title>Dozent · Lernlabor Pro</title>').replace(S,'const DOZENT=true;')
def f(m):
    return 'src:url(data:font/woff2;base64,'+base64.b64encode(open(os.path.join(root,m.group(1)),'rb').read()).decode()+')'
s,n=re.subn(r'src:url\((fonts/[^)]+\.woff2)\)',f,s)
assert n==NF,('Schriften',n,'erwartet',NF)
open(out,'w',encoding='utf-8').write(s)
print('ok',os.path.getsize(out),'Bytes')
