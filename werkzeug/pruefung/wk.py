import gi,sys,os
gi.require_version('Gtk','3.0');gi.require_version('WebKit2','4.1')
from gi.repository import Gtk,WebKit2,GLib
W=int(os.environ.get('W','320'));w=Gtk.OffscreenWindow();w.set_default_size(W,700);v=WebKit2.WebView();w.add(v);w.show_all()
JS=open(sys.argv[2]).read()
def done(obj,r,h):
  try: print(obj.evaluate_javascript_finish(r).to_string())
  except Exception as e: print('ERR',e)
  Gtk.main_quit()
st=[0]
def changed(view,ev):
  if ev==WebKit2.LoadEvent.FINISHED:
    st[0]+=1
    if st[0]==1:
      GLib.timeout_add(800,lambda:(v.evaluate_javascript("localStorage.setItem('lernlabor-pro-tour','1');location.reload()",-1,None,None,None,None,None),False)[1])
    else:
      GLib.timeout_add(1800,lambda:(v.evaluate_javascript(JS,-1,None,None,None,done,None),False)[1])
v.connect('load-changed',changed);v.load_uri('http://localhost:8765/'+sys.argv[1]);Gtk.main()
