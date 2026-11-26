// la puerta que dejé abierta — trampas que no registran nada: solo responden.
(() => {
  const out = document.getElementById('out'), back = document.querySelector('a.back');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const wait = ms => new Promise(r => setTimeout(r, reduce ? 0 : ms));
  async function type(lines) {
    const caret = document.createElement('span'); caret.className = 'caret';
    for (const [t, cls] of lines) {
      const s = document.createElement('span'); if (cls) s.className = cls; out.appendChild(s); out.appendChild(caret);
      for (const ch of t) { s.textContent += ch; await wait(cls === 'poem' ? 45 : 16); }
      s.textContent += '\n'; await wait(t ? 260 : 120);
    }
    if (back) back.classList.add('on');
  }
  // páginas señuelo: el texto está en <script type="text/plain" id="lines"> (una línea por renglón; "> " = comando, "# " = nota, "! " = alerta)
  const src = document.getElementById('lines');
  if (src && out) type(src.textContent.replace(/^\n|\n\s*$/g, '').split('\n').map(l =>
    l.startsWith('> ') ? [l, 'cmd'] : l.startsWith('# ') ? [l.slice(2), 'dim'] : l.startsWith('! ') ? [l.slice(2), 'warn'] : [l, l.trim() ? 'poem' : '']));

  // panel falso: no envía nada; escribas lo que escribas, responde un verso
  const form = document.getElementById('login');
  if (form) {
    const msg = document.getElementById('msg'), box = document.querySelector('main');
    const R = [
      'contraseña incorrecta: el poema no tiene dueño.',
      'acceso denegado. las llaves también ardieron.',
      'usuario no encontrado. tampoco yo, la mayoría de las noches.',
      'error 403: aquí nadie administra el delirio.',
    ];
    let n = 0;
    form.addEventListener('submit', e => {
      e.preventDefault();
      form.reset();                                   // nada se queda: ni en la página ni en ningún lado
      if (n < R.length - 1) { msg.textContent = R[n++]; box.classList.remove('glitch'); void box.offsetWidth; box.classList.add('glitch'); return; }
      msg.textContent = R[R.length - 1];
      setTimeout(() => {
        box.classList.add('burn');
        setTimeout(() => {
          box.classList.remove('burn'); box.innerHTML = '';
          const pre = document.createElement('pre'); pre.id = 'out'; box.appendChild(pre);
          const a = document.createElement('a'); a.className = 'back'; a.href = '/'; a.textContent = '← volver a Metafobia'; box.appendChild(a);
          const o2 = pre, b2 = a;
          (async () => {
            const caret = document.createElement('span'); caret.className = 'caret';
            for (const [t, c] of [['> intruso.detectado()', 'cmd'], ['# no guardé tu nombre. no guardé nada.', 'dim'], ['', ''], ['te vi entrar por la puerta que dejé abierta.', 'poem'],
              ['buscabas el control:', 'poem'], ['aquí solo hay metáforas', 'poem'], ['y ya son tuyas también.', 'poem']]) {
              const s = document.createElement('span'); if (c) s.className = c; o2.appendChild(s); o2.appendChild(caret);
              for (const ch of t) { s.textContent += ch; await wait(c === 'poem' ? 45 : 16); }
              s.textContent += '\n'; await wait(t ? 260 : 120);
            }
            b2.classList.add('on');
          })();
        }, reduce ? 0 : 1600);
      }, 900);
    });
  }
})();
