


// Secciones de la página principal. Cada una muestra su propia lista de obras.
// Para añadir una obra: copia una línea { name: "...", url: "..." } dentro de su sección.
// La última línea de cada lista NO lleva coma.
const sections = [
  {
    name: "Poesía visual",
    children: [
      { name: "Horizonte", url: "https://metafobian-code.github.io/horizontes/" },
      { name: "Luz rubia", url: "https://metafobian-code.github.io/-Short/" },
      { name: "El significado de las cosas", url: "https://metafobian-code.github.io/signos/" },
      { name: "Nada sostiene", url: "https://metafobian-code.github.io/poema-ascii.html/" },
      { name: "El significante en el sueño", url: "https://metafobian-code.github.io/Sue-o.html/" },
      { name: "Reflejos del día a día", url: "https://metafobian-code.github.io/index.html/" },
      { name: "Cristales en tus ojos", url: "https://metafobian-code.github.io/cystal.index.html/" },
      { name: "Altazor 2.0", url: "https://metafobian-code.github.io/altazor2.0/" },
      { name: "Tenemos un problema", url: "https://metafobian-code.github.io/problemas/" },
      { name: "Mi delirio tiene referencias", url: "https://metafobian-code.github.io/-xicos/" }
    ]
  },
  {
    name: "Código y net art",
    children: [
      { name: "Entropía", url: "https://metafobian-code.github.io/schho/" },
      { name: "JSON del Kernel Aristotélico", url: "https://metafobian-code.github.io/poetrycode/" },
      { name: "Huésped", url: "https://metafobian-code.github.io/host-detected/" },
      { name: "Otro orden", url: "https://metafobian-code.github.io/Test/" },
      { name: "Segmentos", url: "https://metafobian-code.github.io/Intercode/" },
      { name: "Narración persistente", url: "https://metafobian-code.github.io/exec-0/payload/" },
      { name: "Memoria perdida", url: "https://metafobian-code.github.io/memory-lost/" },
      { name: "RGB", url: "https://metafobian-code.github.io/rgb/" },
      { name: "无为", url: "https://metafobian-code.github.io/chong/" },
      { name: "[Π.Π]", url: "https://metafobian-code.github.io/Script/" },
      { name: "PROMPT: Jardín", url: "https://metafobian-code.github.io/-jardin/" },
      { name: "Bloc_notas", url: "https://metafobian-code.github.io/rr/" },
      { name: "Glitch", url: "https://metafobian-code.github.io/Glitch/" },
      { name: "Contexto de tokens", url: "https://metafobian-code.github.io/Tokens/" }
    ]
  },
  {
    name: "Libros y colaboraciones",
    children: [
      { name: "Q0", url: "https://online.fliphtml5.com/vogqc/awym/?fbclid=IwY2xjawU_OsdleHRuA2FlbQIxMQBwZG9mBXNydGMGYXBwX2lkDDM1MDY4NTUzMTcyOAABHm_Xq2fKe3KqErYhhmFPK7PDdmOm-2yhHWiw0hkSH03Td0bIOfsbwkJu7Jtf_aem_y8FjoofX5Eq40AQEidEFlg#p=12" },
      { name: "Verso del delirio", url: "https://online.fliphtml5.com/vogqc/yjdf/?fbclid=IwY2xjawU_PnRleHRuA2FlbQIxMQBwZG9mBXNydGMGYXBwX2lkDDM1MDY4NTUzMTcyOAABHk7SfZQQ8E31jZ3zesDBNvJ9hd9NjmWym-hPcyTyxsBbo6QusaQ5reK6dwUL_aem_3WCunQdTKhdWBy95731CkA#p=1" },
      { name: "Canek, Markov, Tracery y compañía", url: "https://consola.canekzapata.net/de/metafora-404" },
      { name: "Navíos, música de R. Reyes", url: "https://metafobian-code.github.io/Navrr/" },
      { name: "Ansible: la ilusión de cercanía", url: "https://metafobian-code.github.io/-ansibles/ansible-animacion-v5.html" }
    ]
  },
  {
    name: "Ilustraciones, IA y absurdos",
    children: [
      { name: "Ilustración", url: "https://metafobian-code.github.io/Ilustracion/" },
      { name: "Sur", url: "https://metafobian-code.github.io/Sur/" },
      { name: "Ilustración 18", url: "https://metafobian-code.github.io/Nio/" },
      { name: "Antiprisma", url: "https://metafobian-code.github.io/antiprisma/" },
      { name: "Varios", url: "https://metafobian-code.github.io/Varios/" },
      { name: "Varios II", url: "https://metafobian-code.github.io/mas/" },
      { name: "GIFs", url: "https://metafobian-code.github.io/Gifs/" },
      { name: "Colaboración audiovisual", url: "https://vt.tiktok.com/ZSpJyAWkr" },
      { name: "Angel", url: "https://metafobian-code.github.io/Cursor/" },
      { name: "Neón Ne", url: "https://metafobian-code.github.io/infiernol/aureola-infiernol.html" }
    ]
  }
];

// "Lo más reciente": la obra destacada arriba de la página principal.
// Escribe aquí su enlace. Si lo cambias por null, la página elige sola
// la obra cuyo repositorio de GitHub se actualizó por última vez.
const LATEST = null;
const LATEST_FALLBACK = LATEST || "https://metafobian-code.github.io/-ansibles/ansible-animacion-v5.html";
const GITHUB_USER = "metafobian-code";
// Repositorios que nunca deben salir como "lo más reciente" (en minúsculas).
const LATEST_IGNORE = ["metafobia", "metafobia.github.io", "metafobian-code.github.io", "-editable"];
const FADE_MS = 700;
const list = document.getElementById("projectList");
const wrap = document.getElementById("listWrap");
const cat = document.getElementById("cat");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

// ---------- Listado, secciones y navegación ----------
const slug = t => t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

// ---------- Memoria del visitante ----------
// Cada obra visitada se "gasta": su título pierde letras y brillo.
// Se guarda solo en este navegador (localStorage).
const MEM_KEY = "metafobia:visitas";
function loadMem() { try { return JSON.parse(localStorage.getItem(MEM_KEY)) || {}; } catch (e) { return {}; } }
function remember(url) {
  try { const m = loadMem(); m[url] = (m[url] || 0) + 1; localStorage.setItem(MEM_KEY, JSON.stringify(m)); } catch (e) {}
}
function hashStr(t) { let h = 2166136261; for (let i = 0; i < t.length; i++) { h ^= t.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
// Borra letras de forma estable (las mismas cada vez), más cuantas más visitas.
function wear(name, visits) {
  const idxs = [...name].map((c, i) => i).filter(i => name[i] !== " ");
  const lose = Math.min(Math.floor(idxs.length * 0.45), visits * Math.max(1, Math.round(idxs.length / 8)));
  let seed = hashStr(name);
  const rand = () => (seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0) / 4294967296;
  for (let i = idxs.length - 1; i > 0; i--) { const j = Math.floor(rand() * (i + 1)); [idxs[i], idxs[j]] = [idxs[j], idxs[i]]; }
  const gone = new Set(idxs.slice(0, lose));
  return [...name].map((c, i) => gone.has(i) ? "\u00b7" : c).join("");
}

const SLEEP_SECTION = "ilustraciones-ia-y-absurdos"; // sección donde duerme el gatito

function makeItem(name, href, sectionId, n) {
  const li = document.createElement("li");
  li.className = "item";
  if (n) {
    const num = document.createElement("span");
    num.className = "num";
    num.setAttribute("aria-hidden", "true");
    num.textContent = typeof n === "number" ? String(n).padStart(2, "0") : n;
    li.appendChild(num);
  }
  const a = document.createElement("a");
  a.className = "link";
  a.textContent = name;
  a.href = href;
  if (sectionId !== undefined) a.dataset.section = sectionId;
  const visits = sectionId === undefined ? (loadMem()[href] || 0) : 0;
  if (visits) {
    const worn = wear(name, visits);
    a.textContent = worn;
    a.dataset.text = worn;
    a.setAttribute("aria-label", name);
    a.title = visits === 1 ? "ya estuviste aquí" : `ya estuviste aquí ${visits} veces`;
    li.classList.add("worn");
    li.style.setProperty("--wear", Math.min(0.55, 0.18 * visits).toFixed(2));
  }
  li.appendChild(a);
  return li;
}

function render(items, title) {
  list.replaceChildren();
  if (title) {
    const li = document.createElement("li");
    const h = document.createElement("p");
    h.className = "subtitle";
    h.textContent = title;
    li.appendChild(h);
    list.appendChild(li);
    list.appendChild(makeItem("← volver", "#", ""));
  }
  items.forEach((p, i) => list.appendChild(makeItem(p.name, p.url, undefined, i + 1)));
  observeReveal();
}

// ---------- Página principal: lo más reciente + secciones ----------
const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
const allWorks = () => sections.flatMap(sec => sec.children.map(w => ({ ...w, section: sec.name })));
let latestUrl = LATEST_FALLBACK;
let latestExtra = null; // obra nueva que aún no está en ninguna sección

function makeFeatured() {
  const w = latestExtra || allWorks().find(x => x.url === latestUrl) || allWorks()[0];
  const li = makeItem(w.name, w.url, undefined, "✦");
  li.classList.add("featured");
  const label = document.createElement("p");
  label.className = "featured-label";
  label.textContent = "lo más reciente";
  li.prepend(label);
  const where = document.createElement("span");
  where.className = "count";
  where.textContent = w.section;
  li.appendChild(where);
  return li;
}
function renderMain() {
  list.replaceChildren();
  list.appendChild(makeFeatured());
  sections.forEach((sec, i) => {
    const li = makeItem(sec.name, "#" + slug(sec.name), slug(sec.name), ROMAN[i] || String(i + 1));
    li.classList.add("section-item");
    const cnt = document.createElement("span");
    cnt.className = "count";
    cnt.textContent = sec.children.length + (sec.children.length === 1 ? " obra" : " obras");
    li.appendChild(cnt);
    list.appendChild(li);
  });
  observeReveal();
}
// Pregunta a GitHub (una vez por visita) cuál es el repositorio más reciente.
// Si es una obra que ya está en una sección, la destaca con su nombre.
// Si es un repositorio nuevo con GitHub Pages que aún no está en ninguna
// sección, también lo destaca (con su descripción o su nombre).
(async () => {
  const repoOf = u => { const m = u.match(/^https:\/\/[^/]+\.github\.io\/([^/?#]+)/i); return m ? decodeURIComponent(m[1]).toLowerCase() : null; };
  if (LATEST) return; // obra elegida a mano: no se consulta GitHub
  try {
    let repos = null;
    try { repos = JSON.parse(sessionStorage.getItem("metafobia:repos2")); } catch (e) {}
    if (!repos) {
      const r = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=pushed&direction=desc&per_page=50`);
      if (!r.ok) return;
      repos = (await r.json()).map(x => ({ name: x.name, pages: !!x.has_pages, desc: x.description || "" }));
      try { sessionStorage.setItem("metafobia:repos2", JSON.stringify(repos)); } catch (e) {}
    }
    const works = allWorks();
    for (const repo of repos) {
      const n = repo.name.toLowerCase();
      if (LATEST_IGNORE.includes(n)) continue;
      const w = works.find(x => repoOf(x.url) === n);
      if (w) { latestUrl = w.url; latestExtra = null; break; }
      if (repo.pages) {
        const pretty = repo.desc.trim() || repo.name.replace(/^[-_.]+/, "").replace(/[-_]+/g, " ").replace(/\.html?$/i, "");
        latestExtra = { name: pretty, url: `https://${GITHUB_USER}.github.io/${repo.name}/`, section: "nuevo" };
        break;
      }
    }
    const old = list.querySelector(".featured");
    if (old && !location.hash) { const nu = makeFeatured(); nu.classList.add("reveal", "in"); old.replaceWith(nu); measure(); }
  } catch (e) {}
})();

function route() {
  const id = decodeURIComponent(location.hash.slice(1));
  const sec = sections.find(x => slug(x.name) === id);
  if (sec) render(sec.children, sec.name); else renderMain();
  if (!reduceMotion.matches && list.animate) list.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 500, easing: "ease" });
  window.scrollTo(0, 0);
  resetCat();
  if (window.placeSleeper) window.placeSleeper();
}
window.addEventListener("hashchange", route);

function goTo(id) {
  if (id) location.hash = id;
  else { history.pushState(null, "", location.pathname + location.search); route(); }
}

// Clic: desenfoque + desvanecimiento, luego navegar (enlace externo o sección)
function handleClick(e) {
  const a = e.target.closest("a.link");
  if (!a) return;
  if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
  e.preventDefault();
  if (a.classList.contains("leaving")) return;
  a.classList.add("leaving");
  if (!reduceMotion.matches) dissolve(a);
  // el gato salta hasta el renglón elegido; se espera a que llegue
  const jump = typeof catGoTo === "function" ? catGoTo(a) : 0;
  const wait = reduceMotion.matches ? 0 : Math.min(1400, Math.max(FADE_MS, jump * 1000 + 150));
  if ("section" in a.dataset) {
    const id = a.dataset.section;
    setTimeout(() => goTo(id), wait);
  } else {
    const url = a.href;
    remember(a.getAttribute("href"));
    setTimeout(() => { window.location.href = url; }, wait);
  }
}
list.addEventListener("click", handleClick);
// Si el usuario vuelve con "atrás", restaurar los enlaces
window.addEventListener("pageshow", () => {
  document.querySelectorAll(".leaving").forEach(a => a.classList.remove("leaving"));
  fxParts.length = 0;
});

// ---------- Efecto glitch al pasar el ratón ----------
// Las letras se mezclan con signos al azar y vuelven a ordenarse.
const GLYPHS = "░▒▓█<>/\\|_-=+*#%&$@01{}[]";
function scramble(a, D = 420) {
  if (reduceMotion.matches || a.dataset.busy) return;
  const text = a.dataset.text || (a.dataset.text = a.textContent);
  a.dataset.busy = "1";
  a.setAttribute("aria-label", text);
  a.style.minWidth = a.getBoundingClientRect().width + "px";
  a.classList.add("glitching");
  const start = performance.now();
  function tick(now) {
    const k = (now - start) / D;
    if (k >= 1) {
      a.textContent = text; a.style.minWidth = ""; delete a.dataset.busy;
      a.classList.remove("glitching");
      return;
    }
    let out = "";
    for (let i = 0; i < text.length; i++) {
      const ch = text[i];
      if (ch === " " || i / text.length < k * 1.15 - 0.1) out += ch;
      else out += GLYPHS[(Math.random() * GLYPHS.length) | 0];
    }
    a.textContent = out;
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
// "pointerover" funciona con ratón, trackpad de tableta, lápiz y dedo;
// "mouseover" queda como respaldo para navegadores antiguos.
const titleEl = document.querySelector(".title");
const glitchTarget = el => el && el.closest && el.closest("a.link, .title");
function onOver(e) {
  const a = glitchTarget(e.target);
  if (a && !a.contains(e.relatedTarget)) scramble(a, a === titleEl ? 800 : 420);
}
if (window.PointerEvent) document.addEventListener("pointerover", onOver);
else document.addEventListener("mouseover", onOver);
// En pantallas táctiles, tocar el título también lo distorsiona
titleEl.addEventListener("click", () => scramble(titleEl, 800));
// El título se distorsiona solo de vez en cuando
(function autoGlitch() {
  setTimeout(() => { if (!document.hidden) scramble(titleEl, 800); autoGlitch(); }, 6000 + Math.random() * 6000);
})();
document.addEventListener("focusin", e => {
  if (e.target.matches && e.target.matches("a.link")) scramble(e.target);
});

// ---------- Disolver en píxeles al hacer clic ----------
// Se dibuja el título en un lienzo oculto y cada píxel encendido
// se convierte en una partícula que se lleva el viento.
const fxCanvas = document.createElement("canvas");
fxCanvas.className = "fx";
fxCanvas.setAttribute("aria-hidden", "true");
document.body.appendChild(fxCanvas);
const fctx = fxCanvas.getContext("2d");
const fxParts = [];
let fxRunning = false, fxLast = 0;
function sizeFx() {
  const d = Math.min(2, window.devicePixelRatio || 1);
  fxCanvas.width = innerWidth * d; fxCanvas.height = innerHeight * d;
  fxCanvas.style.width = innerWidth + "px"; fxCanvas.style.height = innerHeight + "px";
  fctx.setTransform(d, 0, 0, d, 0, 0);
}
sizeFx();
window.addEventListener("resize", sizeFx);

function dissolve(a) {
  const r = a.getBoundingClientRect();
  const cs = getComputedStyle(a);
  const w = Math.ceil(r.width) + 4, h = Math.ceil(r.height) + 4;
  const off = document.createElement("canvas");
  off.width = w; off.height = h;
  const o = off.getContext("2d");
  o.font = `${cs.fontStyle} ${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`;
  if ("letterSpacing" in o) o.letterSpacing = cs.letterSpacing;
  o.textBaseline = "middle";
  o.fillStyle = "#fff";
  o.fillText(a.dataset.text || a.textContent, 0, h / 2);
  const data = o.getImageData(0, 0, w, h).data;
  const STEP = 2;
  for (let y = 0; y < h; y += STEP) {
    for (let x = 0; x < w; x += STEP) {
      if (data[(y * w + x) * 4 + 3] > 120) {
        const delay = (x / w) * 0.35 + Math.random() * 0.12; // de izquierda a derecha
        fxParts.push({
          x: r.left + x, y: r.top + y - 2, vx: 30 + Math.random() * 70, vy: -20 - Math.random() * 40,
          s: Math.random() < 0.8 ? 2 : 3, age: -delay, life: 0.5 + Math.random() * 0.4
        });
      }
    }
  }
  startFx();
}
function fxFrame(now) {
  const dt = Math.min(0.05, (now - fxLast) / 1000); fxLast = now;
  fctx.clearRect(0, 0, innerWidth, innerHeight);
  for (let i = fxParts.length - 1; i >= 0; i--) {
    const p = fxParts[i];
    p.age += dt;
    if (p.age >= p.life) { fxParts.splice(i, 1); continue; }
    let x = p.x, y = p.y, k = 1;
    if (p.age > 0) {
      p.x += p.vx * dt; p.y += p.vy * dt; p.vy += (p.g === undefined ? -10 : p.g) * dt;
      x = p.x + Math.sin(p.age * 18 + p.y) * 1.5; y = p.y;
      k = 1 - p.age / p.life;
    }
    fctx.fillStyle = `rgba(${p.c || "255,255,255"},${(k * (p.a || 0.95)).toFixed(3)})`;
    fctx.fillRect(Math.round(x / p.s) * p.s, Math.round(y / p.s) * p.s, p.s, p.s);
  }
  if (fxParts.length) requestAnimationFrame(fxFrame);
  else { fxRunning = false; fctx.clearRect(0, 0, innerWidth, innerHeight); }
}

function startFx() {
  if (!fxRunning) { fxRunning = true; fxLast = performance.now(); requestAnimationFrame(fxFrame); }
}

// ---------- El cursor deja polvo de píxeles ----------
let lastDust = 0;
document.addEventListener("pointermove", e => {
  if (reduceMotion.matches || e.pointerType === "touch") return;
  const now = performance.now();
  if (now - lastDust < 28 || fxParts.length > 1500) return;
  lastDust = now;
  const n = 1 + (Math.random() < 0.5 ? 1 : 0);
  for (let i = 0; i < n; i++) {
    fxParts.push({
      x: e.clientX + (Math.random() - 0.5) * 6, y: e.clientY + (Math.random() - 0.5) * 6,
      vx: (Math.random() - 0.5) * 14, vy: 4 + Math.random() * 10, g: 18,
      s: Math.random() < 0.75 ? 2 : 3, age: 0, life: 0.6 + Math.random() * 0.7,
      c: COLORS[(Math.random() * COLORS.length) | 0], a: 0.7
    });
  }
  startFx();
});

// ---------- La ilustración se pixela alrededor del cursor ----------
(() => {
  const col = document.querySelector(".col--right"), img = col && col.querySelector(".art");
  if (!img) return;
  const cv = document.createElement("canvas");
  cv.className = "pixelate";
  col.appendChild(cv);
  const c = cv.getContext("2d");
  const CELL = 12, RAD = 95;
  let W = 0, H = 0, cols = 0, rows = 0, d = 1, small = null, heat = null, running = false, lastT = 0;
  function setup() {
    const src = img;
    if (!src.complete || !src.naturalWidth) return;
    const r = col.getBoundingClientRect();
    W = r.width; H = r.height; d = Math.min(2, window.devicePixelRatio || 1);
    cv.width = Math.round(W * d); cv.height = Math.round(H * d);
    cv.style.width = W + "px"; cv.style.height = H + "px";
    cols = Math.ceil(W / CELL); rows = Math.ceil(H / CELL);
    // copia reducida: cada píxel = color promedio de una celda (como object-fit: cover)
    small = document.createElement("canvas");
    small.width = cols; small.height = rows;
    const sc2 = small.getContext("2d");
    const pos = (getComputedStyle(document.documentElement).getPropertyValue("--image-position").trim() || "50% 50%").split(/\s+/).map(v => parseFloat(v) / 100);
    const k = Math.max(W / src.naturalWidth, H / src.naturalHeight);
    const dw = src.naturalWidth * k, dh = src.naturalHeight * k;
    const ox = (W - dw) * (isNaN(pos[0]) ? 0.5 : pos[0]), oy = (H - dh) * (isNaN(pos[1]) ? 0.5 : pos[1]);
    sc2.imageSmoothingEnabled = true; sc2.imageSmoothingQuality = "high";
    sc2.drawImage(src, ox / CELL, oy / CELL, dw / CELL, dh / CELL);
    heat = new Float32Array(cols * rows);
  }
  function frame(t) {
    const dt = Math.min(0.05, (t - lastT) / 1000); lastT = t;
    c.setTransform(d, 0, 0, d, 0, 0);
    c.clearRect(0, 0, W, H);
    c.imageSmoothingEnabled = false;
    let alive = false;
    for (let i = 0; i < heat.length; i++) {
      let h = heat[i];
      if (h <= 0) continue;
      h -= dt * 0.9; heat[i] = h;
      if (h <= 0) continue;
      alive = true;
      const x = i % cols, y = (i / cols) | 0;
      // algunas celdas se desplazan un poco: aspecto de señal rota
      const j = h > 0.6 && ((i * 7919) % 11 === 0) ? CELL : 0;
      c.globalAlpha = Math.min(1, h * 1.4);
      c.drawImage(small, x, y, 1, 1, x * CELL + j, y * CELL, CELL, CELL);
    }
    c.globalAlpha = 1;
    if (alive) requestAnimationFrame(frame); else running = false;
  }
  function heatAt(px, py) {
    if (!heat) setup();
    if (!heat) return;
    const r = col.getBoundingClientRect();
    const mx = px - r.left, my = py - r.top;
    const x0 = Math.max(0, Math.floor((mx - RAD) / CELL)), x1 = Math.min(cols - 1, Math.ceil((mx + RAD) / CELL));
    const y0 = Math.max(0, Math.floor((my - RAD) / CELL)), y1 = Math.min(rows - 1, Math.ceil((my + RAD) / CELL));
    for (let y = y0; y <= y1; y++) for (let x = x0; x <= x1; x++) {
      const dd = Math.hypot(x * CELL + CELL / 2 - mx, y * CELL + CELL / 2 - my) / RAD;
      if (dd > 1) continue;
      // borde irregular: no todas las celdas se encienden
      if (dd > 0.55 && Math.random() < dd * 0.8) continue;
      const i = y * cols + x;
      heat[i] = Math.max(heat[i], 1.1 - dd * 0.6);
    }
    if (!running) { running = true; lastT = performance.now(); requestAnimationFrame(frame); }
  }
  col.addEventListener("pointermove", e => { if (!reduceMotion.matches) heatAt(e.clientX, e.clientY); });
  col.addEventListener("pointerdown", e => { if (!reduceMotion.matches) heatAt(e.clientX, e.clientY); });
  if (img.complete) setup(); else img.addEventListener("load", setup);
  window.addEventListener("resize", () => { heat = null; setup(); });
})();

// ---------- Aparición escalonada al desplazarse ----------
let revealIO = null;
function observeReveal() {
  const items = [...list.children];
  if (reduceMotion.matches || !("IntersectionObserver" in window)) {
    items.forEach(li => li.classList.add("in")); return;
  }
  if (revealIO) revealIO.disconnect();
  revealIO = new IntersectionObserver(entries => {
    let n = 0;
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      en.target.style.transitionDelay = (n++ * 70) + "ms";
      en.target.classList.add("in");
      revealIO.unobserve(en.target);
    });
  }, { rootMargin: "0px 0px -8% 0px" });
  items.forEach(li => { li.classList.add("reveal"); revealIO.observe(li); });
}

// ---------- Gato ----------
// Camina sobre la parte superior de cada título, a veces se sienta,
// y salta al siguiente renglón dejando una estela de polvo de píxeles.
const catPos = document.getElementById("catPos");
const catBody = document.getElementById("catBody");
const catHead = document.getElementById("catHead");
const tail = document.getElementById("tail");
const legs = [...document.querySelectorAll("#legs line")];
const dust = document.getElementById("dust");
const dctx = dust.getContext("2d");
const PAD = 40; // margen del lienzo alrededor de la lista

const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const ease = x => x * x * (3 - 2 * x);
const lerp = (a, b, k) => a + (b - a) * k;
const rnd = (a, b) => a + Math.random() * (b - a);

let lines = [], sc = 1, dpr = 1;
function measure() {
  const w = wrap.getBoundingClientRect();
  lines = [...list.querySelectorAll(".link")].map(a => {
    const r = a.getBoundingClientRect();
    // en el renglón del gatito dormido, el otro gato no pasa por encima de él
    const cut = a.dataset.section === SLEEP_SECTION ? 72 : 0;
    return { top: r.top - w.top + 1, left: r.left - w.left, right: r.right - w.left - cut, sleep: cut > 0 };
  });
  sc = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--s")) || 1;
  if (idx >= lines.length) idx = Math.max(0, lines.length - 1);
  dpr = Math.min(2, window.devicePixelRatio || 1);
  const cw = Math.ceil(w.width + PAD * 2), ch = Math.ceil(w.height + PAD * 2);
  if (dust.width !== cw * dpr || dust.height !== ch * dpr) {
    dust.width = cw * dpr; dust.height = ch * dpr;
    dust.style.width = cw + "px"; dust.style.height = ch + "px";
  }
}

// Estados: walk → (sit) → crouch → jump → land → walk
let idx = 0, dv = 1, phase = "walk", pt = 0, gait = 0;
// Encuentro: a veces el gato camina hasta el gatito dormido y se acurruca a su lado
let meetPending = false, meetCooldown = 12, napFor = 0, clock = 0, heartT = 0;
const catCurl = document.getElementById("catCurl"), curlBody = document.getElementById("curlBody");
const NAP_IN = 0.55, NAP_OUT = 0.5; // se echa · se levanta
let jumpTarget = null;   // renglón al que salta cuando acompaña un clic
let fish = null;         // pescadito de píxeles cuando le dan de comer

// ---------- Noche ----------
// De 22:00 a 6:00 la página se oscurece y el gato que camina se duerme.
// Para probar otra hora: añade ?hora=23 al final de la dirección.
const HOUR_OVERRIDE = new URLSearchParams(location.search).get("hora");
function hourNow() {
  if (HOUR_OVERRIDE !== null && !isNaN(+HOUR_OVERRIDE)) return +HOUR_OVERRIDE;
  const d = new Date(); return d.getHours() + d.getMinutes() / 60;
}
const isNight = () => { const h = hourNow(); return h >= 22 || h < 6; };
const catEye = document.getElementById("catEye");
let fx = 0, fy = 0, face = 1, x0 = 0, x1 = 0, dur = 2, sitFor = 0;
let jx0 = 0, jy0 = 0, jx1 = 0, jy1 = 0, jdur = 0.7, jh = 18;
let ready = false, dustAcc = 0;
const CROUCH = 0.24, LAND = 0.2;

function planWalk() {
  if (idx + dv < 0 || idx + dv >= lines.length) dv = -dv;
  const L = lines[idx], nx = lines[idx + dv] || L;
  let lo = Math.max(L.left, nx.left) + 16, hi = Math.min(L.right, nx.right) - 16;
  if (hi < lo) lo = hi = clamp((L.left + L.right) / 2, nx.left + 6, nx.right - 6);
  x0 = clamp(fx, Math.min(lo, L.right - 10), Math.max(hi, L.left + 10));
  x1 = (x0 - lo > hi - x0) ? lo : hi;
  if (Math.abs(x1 - x0) < 30) x1 = (x0 - lo < hi - x0) ? hi : lo;
  meetPending = false;
  if (L.sleep && clock > meetCooldown && Math.random() < 0.6) {
    x1 = L.right - 2; meetPending = true; // camina hasta quedar junto al dormido
  }
  dur = Math.max(1.2, Math.abs(x1 - x0) / 42);
  face = Math.sign(x1 - x0) || face;
}
function planJump() {
  const L = lines[idx], nx = lines[idx + dv];
  jx0 = fx; jy0 = L.top;
  jx1 = clamp(fx + face * 22 * sc, nx.left + 10, nx.right - 10);
  jy1 = nx.top;
  const gap = Math.abs(jy1 - jy0);
  jdur = 0.5 + gap / 260;
  jh = (jy1 > jy0 ? 14 : 22 + gap * 0.25) * sc;
}

// ---- Polvo de píxeles ----
const parts = [];
// pez mirando a la izquierda (la cabeza se come primero)
const FISH = [".###...#", "#####.##", "#.######", "#####.##", ".###...#"];
const COLORS = ["255,255,255", "255,255,255", "255,255,255", "190,235,255", "255,200,230"];
function emit(x, y, n, spread, life, up) {
  for (let i = 0; i < n && parts.length < 900; i++) {
    parts.push({
      x: x + rnd(-spread, spread), y: y + rnd(-spread * 0.6, spread * 0.6),
      vx: rnd(-12, 12) - face * rnd(0, 14), vy: rnd(-up, up * 0.4),
      s: Math.random() < 0.7 ? 2 : 3, life: rnd(life * 0.6, life), age: 0,
      c: COLORS[(Math.random() * COLORS.length) | 0]
    });
  }
}
// Corazón de píxeles (5×5 celdas) que sube despacio
const HEART = [".#.#.", "#####", "#####", ".###.", "..#.."];
function drawFish() {
  if (!fish) return;
  const S = 3, cols = FISH[0].length;
  const gone = Math.floor(fish.eaten * (cols + 1)); // columnas ya comidas desde la cabeza
  FISH.forEach((row, j) => [...row].forEach((c, i) => {
    if (c !== "#" || i < gone) return;
    const ix = fish.face > 0 ? i : cols - 1 - i; // la cabeza siempre hacia el gato
    const gx = Math.round((fish.x + (ix - cols / 2) * S + PAD) / S) * S;
    const gy = Math.round((fish.y + (j - FISH.length) * S + PAD) / S) * S;
    dctx.fillStyle = "rgba(140,215,255,.95)";
    dctx.fillRect(gx, gy, S, S);
  }));
}
function emitHeart(x, y) {
  const S = 3, vx = rnd(-3, 3), vy = rnd(-11, -8), life = rnd(2.2, 2.8);
  HEART.forEach((row, j) => [...row].forEach((c, i) => {
    if (c === "#") parts.push({ x: x + (i - 2) * S, y: y + j * S, vx, vy, g: 0, s: S, life, age: 0, c: "255,120,190", heart: true });
  }));
}
function stepDust(dt) {
  dctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  dctx.clearRect(0, 0, dust.width, dust.height);
  for (let i = parts.length - 1; i >= 0; i--) {
    const p = parts[i];
    p.age += dt;
    if (p.age >= p.life) { parts.splice(i, 1); continue; }
    p.vy += (p.g === undefined ? 14 : p.g) * dt; p.vx *= 0.985;
    p.x += p.vx * dt; p.y += p.vy * dt;
    // los corazones aparecen y se desvanecen suavemente; el polvo solo se apaga
    const k = p.heart ? Math.sin(Math.PI * p.age / p.life) : 1 - p.age / p.life;
    // cuantizado a la rejilla del píxel: aspecto de polvo digital
    const gx = Math.round((p.x + PAD) / p.s) * p.s, gy = Math.round((p.y + PAD) / p.s) * p.s;
    dctx.fillStyle = `rgba(${p.c},${(p.heart ? k : k * k * 0.9).toFixed(3)})`;
    dctx.fillRect(gx, gy, p.s, p.s);
  }
  drawFish();
}

// ---- Dibujo del gato (coordenadas locales: patas en y=0, mira a la derecha) ----
function draw(t) {
  let squash = 1, lift = 0, legMode = "walk";
  if (phase === "sit" || phase === "look" || phase === "nap" || phase === "eat") legMode = "sit";
  // Siesta: se echa (el cuerpo de pie se encoge y se desvanece) y aparece enroscado
  let curl = 0;
  if (phase === "nap") {
    curl = Math.min(ease(clamp(pt / NAP_IN, 0, 1)), ease(clamp((napFor - pt) / NAP_OUT, 0, 1)));
    squash = 1 - 0.35 * curl;
  } else if (phase === "sleep") { // de noche: enroscado hasta que amanezca
    curl = ease(clamp(pt / NAP_IN, 0, 1));
    squash = 1 - 0.35 * curl;
  }
  catCurl.setAttribute("opacity", curl.toFixed(2));
  catBody.style.opacity = (1 - curl).toFixed(2);
  if (curl > 0) curlBody.setAttribute("transform", `scale(1 ${(1 + Math.sin(t / 620) * 0.045).toFixed(3)})`);
  // ojos cerrados mientras ronronea
  catEye.setAttribute("ry", phase === "eat" && pt > EAT_END ? "0.25" : "1.5");
  if (phase === "crouch") { squash = 1 - 0.22 * ease(clamp(pt / CROUCH, 0, 1)); legMode = "sit"; }
  if (phase === "jump") legMode = "jump";
  if (phase === "land") { squash = 1 - 0.18 * Math.sin(clamp(pt / LAND, 0, 1) * Math.PI); }

  // patas: [cadera x, desfase de paso]
  const L4 = [[7, 0], [5, 0.5], [-6, 0.5], [-8, 0]];
  L4.forEach(([hx, off], i) => {
    let px = hx, py = 0;
    if (legMode === "walk") {
      const ph = (gait + off) % 1;
      px = hx + Math.sin(ph * Math.PI * 2) * 3.2;
      py = -Math.max(0, Math.cos(ph * Math.PI * 2)) * 2.4;
    } else if (legMode === "sit") {
      px = hx + (hx < 0 ? 3 : 0); py = 0;
    } else { // salto: delanteras estiradas, traseras atrás
      px = hx + (hx > 0 ? 5 : -5); py = -2;
    }
    const l = legs[i];
    l.setAttribute("x1", hx); l.setAttribute("y1", (-7 * squash).toFixed(1));
    l.setAttribute("x2", px.toFixed(1)); l.setAttribute("y2", py.toFixed(1));
  });

  // cola: ondula; erguida cuando se sienta
  const sway = phase === "look" ? Math.sin(t / 140) * 3 : Math.sin(t / (phase === "sit" ? 520 : 260)) * (phase === "sit" ? 4 : 2.5);
  const tipY = phase === "jump" ? -14 : phase === "nap" ? -6 : (phase === "sit" || phase === "look") ? -26 : -23;
  const tipX = phase === "jump" ? -24 : -17 + sway;
  tail.setAttribute("d", `M-10 -11 Q${(-20 + sway * 0.5).toFixed(1)} -13 ${tipX.toFixed(1)} ${tipY.toFixed(1)}`);

  const bob = phase === "walk" ? Math.abs(Math.sin(gait * Math.PI * 2)) * -0.8 : 0;
  const tiltJ = phase === "jump" ? (jy1 > jy0 ? 1 : -1) * Math.cos(clamp(pt / jdur, 0, 1) * Math.PI) * -14 : 0;
  catBody.setAttribute("transform", `translate(0 ${(bob - lift).toFixed(2)}) rotate(${tiltJ.toFixed(1)} 0 -8) scale(1 ${squash.toFixed(3)})`);
  const look = phase === "look" ? lookAng : phase === "nap" ? 22
    : phase === "eat" ? (pt < EAT_DROP ? 10 : pt < EAT_END ? 26 + Math.sin(t / 70) * 6 : -6)
    : phase === "sit" ? Math.sin(t / 900) * 8 : 0;
  catHead.setAttribute("transform", `rotate(${look.toFixed(1)} 12 -15)`);
  catPos.setAttribute("transform", `translate(${fx.toFixed(1)} ${fy.toFixed(1)}) scale(${face * sc} ${sc})`);
}

// Cursor: si se acerca, el gato se detiene y lo mira.
// Mira unos segundos (LOOK_MAX) y luego sigue su camino; durante LOOK_REST
// no vuelve a detenerse aunque el cursor siga cerca.
let ptr = null, lookAng = 0, awayT = 0, lookRestUntil = 0;
const LOOK_MAX = 3, LOOK_REST = 6;
document.addEventListener("pointermove", e => { if (e.pointerType !== "touch") ptr = { x: e.clientX, y: e.clientY }; });
document.documentElement.addEventListener("mouseleave", () => { ptr = null; });
document.addEventListener("pointerdown", e => { ptr = { x: e.clientX, y: e.clientY }; });

let last = null;
function frame(t) {
  if (!ready) { last = null; requestAnimationFrame(frame); return; }
  const dt = last === null ? 0 : Math.min(0.05, (t - last) / 1000);
  last = t; pt += dt; clock += dt;
  const L = lines[idx];

  // ¿está el cursor cerca?
  let near = false, cx = 0, cy = 0;
  if (ptr) {
    const w = wrap.getBoundingClientRect();
    cx = ptr.x - w.left; cy = ptr.y - w.top;
    near = Math.hypot(cx - fx, cy - (fy - 14 * sc)) < 95 * sc;
  }
  // de noche se duerme en cuanto termina lo que estaba haciendo
  if (isNight() && (phase === "walk" || phase === "sit" || phase === "look")) { phase = "sleep"; pt = 0; meetPending = false; }
  if (phase === "sleep") {
    fy = L.top;
    if (!isNight()) { phase = "walk"; pt = 0; planWalk(); }
    draw(t); stepDust(dt); requestAnimationFrame(frame); return;
  }
  if (phase === "eat") {
    fy = L.top;
    if (pt < EAT_DROP) { // el pez cae delante de él
      fish.y = lerp(fish.y0, fish.y1, ease(pt / EAT_DROP));
    } else if (pt < EAT_END) { // come, dejando migas
      fish.y = fish.y1;
      fish.eaten = (pt - EAT_DROP) / (EAT_END - EAT_DROP);
      crumbT -= dt;
      if (crumbT <= 0) { crumbT = 0.16; emit(fish.x - face * 6 * sc, fish.y - 4, 2, 3, 0.6, 12); }
    } else { // ronronea: ondas de píxeles
      fish = null;
      purrT -= dt;
      if (purrT <= 0) { purrT = 0.38; purr(fx + face * 12 * sc, fy - 15 * sc); }
      if (pt >= EAT_TOTAL) { lookRestUntil = clock + 4; phase = "walk"; pt = 0; planWalk(); }
    }
    draw(t); stepDust(dt); requestAnimationFrame(frame); return;
  }
  if (near && clock > lookRestUntil && (phase === "walk" || phase === "sit")) { phase = "look"; pt = 0; meetPending = false; }
  if (phase === "look") {
    fy = L.top;
    if (pt > LOOK_MAX) { // ya miró suficiente: sigue caminando
      phase = "walk"; pt = 0; awayT = 0; lookRestUntil = clock + LOOK_REST; planWalk();
    } else if (near) {
      awayT = 0;
      if (Math.abs(cx - fx) > 6) face = Math.sign(cx - fx);
      const ang = Math.atan2(cy - (fy - 15 * sc), Math.max(8, Math.abs(cx - fx))) * 180 / Math.PI;
      lookAng = lerp(lookAng, clamp(ang, -40, 25), 0.15);
    } else {
      awayT += dt;
      lookAng = lerp(lookAng, 0, 0.08);
      if (awayT > 0.9) { phase = "walk"; pt = 0; awayT = 0; lookRestUntil = clock + 1.5; planWalk(); }
    }
    draw(t); stepDust(dt); requestAnimationFrame(frame); return;
  }

  if (phase === "walk") {
    const prev = fx;
    fx = lerp(x0, x1, ease(clamp(pt / dur, 0, 1)));
    gait += Math.abs(fx - prev) / (16 * sc);
    fy = L.top;
    dustAcc += dt;
    if (dustAcc > 0.14 && Math.abs(fx - prev) > 0.05) { dustAcc = 0; emit(fx - face * 8 * sc, fy - 1, 1, 2, 0.7, 6); }
    if (pt >= dur && meetPending) {
      meetPending = false; phase = "nap"; pt = 0; napFor = rnd(6, 10); meetCooldown = clock + rnd(45, 90);
      face = 1;
      heartT = 0.8;
    } else if (pt >= dur) {
      if (Math.random() < 0.35) { phase = "sit"; sitFor = rnd(0.9, 2.2); }
      else phase = "crouch";
      pt = 0;
    }
  } else if (phase === "nap") {
    fy = L.top;
    // mientras duermen juntos, de vez en cuando sube un corazón
    if (pt > NAP_IN && pt < napFor - NAP_OUT) {
      heartT -= dt;
      if (heartT <= 0) { emitHeart(fx + 18 * sc, fy - 24 * sc); heartT = rnd(1.6, 2.4); }
    }
    if (pt >= napFor) { phase = "walk"; pt = 0; dv = -1; if (idx + dv < 0) dv = 1; planWalk(); }
  } else if (phase === "sit") {
    fy = L.top;
    if (pt >= sitFor) { phase = "crouch"; pt = 0; }
  } else if (phase === "crouch") {
    fy = L.top;
    if (pt >= CROUCH) { planJump(); phase = "jump"; pt = 0; emit(fx, fy - 2, 8, 6, 0.9, 18); }
  } else if (phase === "jump") {
    const q = clamp(pt / jdur, 0, 1);
    fx = lerp(jx0, jx1, q);
    fy = lerp(jy0, jy1, q) - Math.sin(q * Math.PI) * jh;
    // estela: más densa al bajar
    const n = jy1 > jy0 ? 5 : 2;
    emit(fx - face * 6 * sc, fy - 9 * sc, n, 5 * sc, jy1 > jy0 ? 2.2 : 1.3, 10);
    if (q >= 1) {
      idx = jumpTarget !== null ? jumpTarget : idx + dv; jumpTarget = null;
      if (idx + dv < 0 || idx + dv >= lines.length) dv = -dv;
      fy = lines[idx].top; phase = "land"; pt = 0;
      emit(fx, fy - 1, 14, 9, 1.1, 22);
    }
  } else { // land
    fy = L.top;
    if (pt >= LAND) { phase = "walk"; pt = 0; planWalk(); }
  }
  draw(t);
  stepDust(dt);
  requestAnimationFrame(frame);
}

// ---- Darle de comer: al tocar al gato cae un pescadito ----
const EAT_DROP = 0.45, EAT_END = 2.1, EAT_TOTAL = 3.4;
let crumbT = 0, purrT = 0;
function purr(x, y) {
  for (let i = 0; i < 20; i++) {
    const a = (i / 20) * Math.PI * 2;
    parts.push({ x: x + Math.cos(a) * 6, y: y + Math.sin(a) * 6, vx: Math.cos(a) * 34, vy: Math.sin(a) * 34, g: 0, s: 2, life: 0.55, age: 0, c: "255,255,255" });
  }
}
function feed() {
  if (!ready || reduceMotion.matches) return;
  if (!["walk", "sit", "look", "sleep"].includes(phase)) return;
  phase = "eat"; pt = 0; crumbT = 0; purrT = 0; meetPending = false;
  const x = fx + face * 22 * sc;
  fish = { x, y0: fy - 60 * sc, y1: fy - 1, y: fy - 60 * sc, eaten: 0, face };
}
document.getElementById("catHit").addEventListener("click", e => { e.stopPropagation(); e.preventDefault(); feed(); });

// ---- Acompañar: al hacer clic en un enlace, el gato salta hasta ese renglón ----
// Devuelve cuántos segundos tarda el salto (para esperar antes de navegar).
function catGoTo(a) {
  if (!ready || reduceMotion.matches || phase === "jump") return 0;
  const i = [...list.querySelectorAll(".link")].indexOf(a);
  if (i < 0 || !lines[i]) return 0;
  fish = null; meetPending = false;
  if (i === idx) { face = Math.sign((lines[i].left + 30) - fx) || face; phase = "look"; pt = 0; lookAng = 20; return 0; }
  const T = lines[i];
  jx0 = fx; jy0 = lines[idx].top;
  jx1 = clamp(T.left + 26 * sc, T.left + 10, Math.max(T.left + 10, T.right - 10));
  jy1 = T.top;
  const gap = Math.abs(jy1 - jy0);
  jdur = Math.min(0.95, 0.42 + gap / 700);
  jh = (jy1 > jy0 ? 16 : 24 + gap * 0.2) * sc;
  face = Math.sign(jx1 - jx0) || face;
  jumpTarget = i; phase = "jump"; pt = 0;
  emit(fx, fy - 2, 8, 6, 0.9, 18);
  return jdur;
}

function resetCat() {
  ready = false;
  measure();
  if (!lines.length) return;
  idx = 0; dv = 1; phase = "walk"; pt = 0; gait = 0; last = null;
  parts.length = 0; fish = null; jumpTarget = null;
  fx = (lines[0].left + lines[0].right) / 2;
  fy = lines[0].top;
  planWalk();
  if (reduceMotion.matches) { phase = "sit"; draw(0); stepDust(0); return; }
  ready = true;
}
if (window.ResizeObserver) new ResizeObserver(() => { measure(); }).observe(list);
window.addEventListener("resize", measure);
window.addEventListener("load", measure);
if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);

// ---------- Gatito dormido sobre "Ilustraciones, IA y absurdos" ----------
// Enroscado, respira despacio, de vez en cuando mueve la cola y suelta una "z".
const sleeper = (() => {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("class", "sleeper");
  svg.setAttribute("aria-hidden", "true");
  svg.setAttribute("width", "1"); svg.setAttribute("height", "1");
  svg.innerHTML = `
    <g class="sl-pos">
      <path class="sl-tail" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/>
      <g class="sl-body">
        <ellipse cx="0" cy="-6.5" rx="13" ry="6.5" fill="#fff"/>
        <path d="M-15.2 -8 L-15.6 -15.8 L-11.4 -11.6 Z M-10 -11.8 L-6.6 -15.6 L-5.6 -9 Z" fill="#fff"/>
        <circle cx="-11" cy="-6.6" r="5.4" fill="#fff"/>
        <path class="sl-eye-closed" d="M-14.6 -6.6 Q-13 -5 -11.4 -6.6" fill="none" stroke="#000" stroke-width="1" stroke-linecap="round"/>
        <ellipse class="sl-eye-open" cx="-13" cy="-7" rx="1" ry="1.6" fill="#000" opacity="0"/>
        <path d="M-15 -1.2 L-9 -1.2" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/>
      </g>
      <ellipse class="sl-hit" cx="-1" cy="-8" rx="22" ry="14" fill="transparent"/>
      <g class="sl-z" fill="#fff" font-family="Courier New, monospace" font-size="7">
        <text>z</text><text>z</text><text>z</text>
      </g>
    </g>`;
  wrap.appendChild(svg);
  const pos = svg.querySelector(".sl-pos"), body = svg.querySelector(".sl-body");
  const eyeC = svg.querySelector(".sl-eye-closed"), eyeO = svg.querySelector(".sl-eye-open");
  // Despertar: abre un ojo, se estira y vuelve a dormirse
  let wakeT = -1;
  const WAKE = 3.2;
  svg.querySelector(".sl-hit").addEventListener("click", e => {
    e.stopPropagation();
    if (wakeT < 0) wakeT = 0;
  });
  const tailEl = svg.querySelector(".sl-tail"), zs = [...svg.querySelectorAll(".sl-z text")];
  const zState = zs.map(() => ({ age: 99 }));
  let px = 0, py = 0, ssc = 1;

  function place() {
    const gate = list.querySelector(`a.link[data-section="${SLEEP_SECTION}"]`);
    svg.style.display = gate ? "" : "none";
    if (!gate) return;
    const g = wrap.getBoundingClientRect(), r = gate.getBoundingClientRect();
    ssc = (parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--s")) || 1) * 0.95;
    px = r.right - g.left - 22 * ssc;
    py = r.top - g.top + 3;
  }
  window.placeSleeper = place;
  // cola: reposo enroscada al frente; "flick" = se levanta, se curva y vuelve
  function tailPath(k) {
    const cx = lerp(18, 21, k), cy = lerp(2, -10, k);
    const tx = lerp(4, 22, k), ty = lerp(1.2, -17, k);
    return `M12 -3 Q${cx.toFixed(1)} ${cy.toFixed(1)} ${tx.toFixed(1)} ${ty.toFixed(1)}`;
  }
  let nextFlick = 2.5, flickT = -1, nextZ = 1.5, zi = 0, lastT = null;
  function frame(t) {
    const dt = lastT === null ? 0 : Math.min(0.05, (t - lastT) / 1000);
    lastT = t;
    const sec = t / 1000;
    // respiración
    const br = 1 + Math.sin(sec * 1.6) * 0.045;
    let wk = 0;
    if (wakeT >= 0) {
      wakeT += dt;
      const q = wakeT / WAKE;
      // 0–.15 abre el ojo · .15–.6 se estira · .6–1 se acomoda y cierra el ojo
      wk = q < 0.15 ? 0 : q < 0.35 ? ease((q - 0.15) / 0.2) : q < 0.6 ? 1 : q < 0.85 ? 1 - ease((q - 0.6) / 0.25) : 0;
      const eyeOpen = q > 0.05 && q < 0.88;
      eyeO.setAttribute("opacity", eyeOpen ? "1" : "0");
      eyeC.setAttribute("opacity", eyeOpen ? "0" : "1");
      if (q >= 1) { wakeT = -1; nextZ = 1.2; }
    }
    body.setAttribute("transform", `translate(${(-2 * wk).toFixed(2)} 0) scale(${(1 + 0.14 * wk).toFixed(3)} ${(br - 0.08 * wk).toFixed(3)})`);
    // cola en intervalos espaciados
    let k = 0;
    nextFlick -= dt;
    if (nextFlick <= 0 && flickT < 0) flickT = 0;
    if (flickT >= 0) {
      flickT += dt;
      const D = 1.8;
      const q = clamp(flickT / D, 0, 1);
      k = Math.sin(q * Math.PI) * (0.85 + 0.15 * Math.sin(q * Math.PI * 4));
      if (q >= 1) { flickT = -1; nextFlick = 4 + Math.random() * 6; }
    }
    if (wakeT >= 0) k = Math.max(k, Math.min(1, wk * 1.1));
    tailEl.setAttribute("d", tailPath(k));
    // zetas que suben y se desvanecen
    if (wakeT < 0) nextZ -= dt;
    if (nextZ <= 0) { zState[zi].age = 0; zi = (zi + 1) % zs.length; nextZ = 1.1 + Math.random() * 0.6; }
    zs.forEach((z, i) => {
      const st = zState[i]; st.age += dt;
      const a = st.age / 3;
      if (a >= 1) { z.setAttribute("opacity", "0"); return; }
      z.setAttribute("x", (-16 - a * 8 + Math.sin(a * 6) * 2).toFixed(1));
      z.setAttribute("y", (-14 - a * 16).toFixed(1));
      z.setAttribute("font-size", (5 + a * 4).toFixed(1));
      z.setAttribute("opacity", (Math.sin(a * Math.PI) * 0.8).toFixed(2));
    });
    pos.setAttribute("transform", `translate(${px.toFixed(1)} ${py.toFixed(1)}) scale(${ssc})`);
    requestAnimationFrame(frame);
  }
  place();
  if (window.ResizeObserver) new ResizeObserver(place).observe(list);
  window.addEventListener("resize", place);
  window.addEventListener("load", place);
  window.addEventListener("hashchange", () => setTimeout(place, 50));
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(place);
  if (reduceMotion.matches) {
    tailEl.setAttribute("d", tailPath(0));
    zs.forEach(z => z.setAttribute("opacity", "0"));
    pos.setAttribute("transform", `translate(${px} ${py}) scale(${ssc})`);
  } else requestAnimationFrame(frame);
  return { place };
})();

// ---------- Poema escondido en la consola ----------
const POEM = [
  "no abras la metáfora:",
  "adentro hay otra puerta",
  "y detrás de la puerta, un gato",
  "que sueña que es el código",
  "que lo está soñando.",
  "",
  "cada enlace que tocas",
  "se gasta un poco.",
  "esta página te recuerda",
  "mejor de lo que tú la recuerdas."
];
try {
  console.log("%cMetafobia", "font:italic 28px Georgia,serif;color:#fff;text-shadow:-2px 0 #ff3c8c,2px 0 #50dcff;padding:6px 0");
  console.log("%c" + POEM.join("\n"), "font:14px/1.6 Georgia,serif;color:#cfcfcf");
  console.log("%c/* si llegaste hasta aquí, ya eres parte de la obra */", "font:12px monospace;color:#666");
  console.log("%c/* pista: escribe g-a-t-o en cualquier parte de la página */", "font:12px monospace;color:#666");
  console.log("%c/* hay archivos escondidos: prueba abrir /robots.txt */", "font:12px monospace;color:#666");
} catch (e) {}

// ---------- Poema del visitante ----------
// Se compone con lo que el navegador sabe de quien mira. Nada sale de esta página.
const pageStart = performance.now();
async function visitorPoem() {
  const ua = navigator.userAgent;
  const browser = /Edg\//.test(ua) ? "Edge" : /OPR\//.test(ua) ? "Opera" : /Firefox\//.test(ua) ? "Firefox"
    : /SamsungBrowser/.test(ua) ? "Samsung Internet" : /Chrome\//.test(ua) ? "Chrome" : /Safari\//.test(ua) ? "Safari" : "un navegador sin nombre";
  const os = /iPad|Macintosh.*Mobile/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1) ? "un iPad"
    : /iPhone/.test(ua) ? "un iPhone" : /Android/.test(ua) ? (/Mobile/.test(ua) ? "un teléfono Android" : "una tableta Android")
    : /Windows/.test(ua) ? "Windows" : /Mac OS X/.test(ua) ? "un Mac" : /Linux/.test(ua) ? "Linux" : "un sistema que no dice su nombre";
  const d = new Date();
  const days = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
  const hh = d.getHours(), mm = String(d.getMinutes()).padStart(2, "0");
  const momento = hh < 6 ? "de la madrugada" : hh < 12 ? "de la mañana" : hh < 19 ? "de la tarde" : "de la noche";
  const mins = Math.max(1, Math.round((performance.now() - pageStart) / 60000));
  const lines = [
    `eres una pantalla de ${innerWidth} × ${innerHeight}`,
    `mirando desde ${os}, a través de ${browser},`,
    `a las ${hh}:${mm} ${momento} de un ${days[d.getDay()]}.`
  ];
  try {
    if (navigator.getBattery) {
      const b = await navigator.getBattery();
      const pct = Math.round(b.level * 100);
      lines.push(b.charging ? `te estás cargando (${pct} %), como quien respira hondo.` : `te queda ${pct} % de batería`);
    }
  } catch (e) {}
  const tz = (Intl.DateTimeFormat().resolvedOptions().timeZone || "").split("/").pop().replace(/_/g, " ");
  if (tz) lines.push(`tu reloj dice que estás cerca de ${tz}.`);
  if (navigator.maxTouchPoints > 0) lines.push("me tocas con los dedos, no con un ratón.");
  if (matchMedia("(prefers-color-scheme: dark)").matches) lines.push("prefieres la oscuridad. aquí también.");
  const seen = Object.keys(loadMem()).length;
  lines.push(seen ? `ya abriste ${seen} ${seen === 1 ? "obra" : "obras"}: las recuerdo por ti.` : "todavía no has abierto ninguna obra.");
  lines.push(`llevas ${mins} ${mins === 1 ? "minuto" : "minutos"} aquí`);
  lines.push("y aun así viniste.");
  return lines;
}

// ---------- Terminal: la consola de la página acepta comandos ----------
// Botón visible para quien no conoce la consola del navegador.
(() => {
  const btn = document.createElement("button");
  btn.className = "console-btn";
  btn.type = "button";
  btn.innerHTML = '<span aria-hidden="true">&gt;_</span> abrir la consola';
  btn.setAttribute("aria-haspopup", "dialog");
  document.body.appendChild(btn);

  const box = document.createElement("div");
  box.className = "term";
  box.setAttribute("role", "dialog");
  box.setAttribute("aria-modal", "true");
  box.setAttribute("aria-label", "Consola de Metafobia");
  box.hidden = true;
  box.innerHTML = `
    <div class="term-bar"><span>consola — metafobia</span><button type="button" class="term-x" aria-label="Cerrar">×</button></div>
    <pre class="term-out" aria-live="polite"></pre>
    <form class="term-line" autocomplete="off">
      <label for="term-in" class="term-prompt">visitante@metafobia:~$</label>
      <input id="term-in" class="term-in" type="text" spellcheck="false" autocapitalize="off" autocorrect="off" enterkeyhint="go" aria-label="Escribe un comando">
    </form>
    <div class="term-chips" aria-label="Comandos rápidos">
      <span class="dim">prueba:</span>
      <button type="button" data-cmd="ayuda">ayuda</button>
      <button type="button" data-cmd="ls">ls</button>
      <button type="button" data-cmd="whoami">whoami</button>
      <button type="button" data-cmd="gato">gato</button>
      <button type="button" data-cmd="sudo amor">sudo amor</button>
      <button type="button" data-cmd="ls -a">ls -a</button>
    </div>
    <p class="term-help">Escribe un comando y pulsa <kbd>Enter</kbd>, o toca uno de los de arriba.
    Este poema también está escondido en la consola real del navegador: en ordenador pulsa <kbd>F12</kbd>
    (en Mac <kbd>⌘</kbd>+<kbd>⌥</kbd>+<kbd>J</kbd>) y abre la pestaña «Consola».</p>`;
  document.body.appendChild(box);
  const out = box.querySelector(".term-out"), input = box.querySelector(".term-in"), form = box.querySelector(".term-line");
  let timer = null, busy = false, booted = false;
  const history = []; let hpos = 0;

  // escribe líneas con efecto de tecleo; devuelve una promesa
  function print(lines, speed = 14) {
    return new Promise(res => {
      const L = lines.map(l => typeof l === "string" ? { t: l } : l);
      if (reduceMotion.matches || speed === 0) {
        L.forEach(l => { const s = document.createElement("span"); s.className = l.cls || ""; s.textContent = l.t + "\n"; out.appendChild(s); });
        out.scrollTop = out.scrollHeight; res(); return;
      }
      let li = 0, ci = 0, span = null;
      (function step() {
        if (li >= L.length) { res(); return; }
        const l = L[li];
        if (!span) { span = document.createElement("span"); span.className = l.cls || ""; out.appendChild(span); }
        if (ci < l.t.length) { span.textContent += l.t.slice(ci, ci + 2); ci += 2; timer = setTimeout(step, l.cls === "poem" ? speed * 2.4 : speed); }
        else { span.textContent += "\n"; li++; ci = 0; span = null; timer = setTimeout(step, l.t ? 90 : 40); }
        out.scrollTop = out.scrollHeight;
      })();
    });
  }
  const norm = t => t.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").trim();
  const HIDDEN = ["robots.txt", "secreto.txt", ".gato"];

  const COMMANDS = {
    ayuda: async () => print([
      { t: "comandos disponibles:", cls: "cmd" },
      "  ls              lista las secciones",
      "  ls <sección>    lista las obras de una sección (ej: ls 2)",
      "  abrir <obra>    abre una obra (ej: abrir horizonte)",
      "  azar            abre una obra al azar",
      "  whoami          un poema sobre quien mira",
      "  poema           vuelve a leer el poema oculto",
      "  historial       las obras que ya abriste",
      "  cat <archivo>   lee un archivo",
      "  fecha · gato · matrix · limpiar · salir",
      { t: "  (hay más comandos. no todos están en esta lista.)", cls: "dim" }
    ]),
    ls: async (arg) => {
      if (arg === "-a" || arg === "-la" || arg === "-al") {
        return print([...sections.map((s, i) => `drwxr-xr-x  ${ROMAN[i].padEnd(4)}${slug(s.name)}/`),
          ...HIDDEN.map(f => ({ t: `-rw-r--r--      ${f}`, cls: "hit" }))]);
      }
      if (!arg) return print([...sections.map((s, i) => `${ROMAN[i].padEnd(4)}${slug(s.name)}/   (${s.children.length})`),
        { t: "escribe «ls 1» para ver las obras de una sección.", cls: "dim" }]);
      const n = parseInt(arg, 10);
      const sec = !isNaN(n) ? sections[n - 1] : sections.find(s => norm(s.name).includes(norm(arg)) || slug(s.name).startsWith(norm(arg)));
      if (!sec) return print([{ t: `ls: no existe «${arg}»`, cls: "err" }]);
      return print([{ t: sec.name, cls: "cmd" }, ...sec.children.map((w, i) => `  ${String(i + 1).padStart(2, "0")}  ${w.name}`),
        { t: "escribe «abrir» y el nombre (o parte) para abrir una obra.", cls: "dim" }]);
    },
    abrir: async (arg) => {
      if (!arg) return print([{ t: "abrir: ¿qué obra? ej: abrir horizonte", cls: "err" }]);
      const w = allWorks().find(x => norm(x.name).includes(norm(arg)));
      if (!w) return print([{ t: `abrir: no encontré «${arg}». prueba «ls 1».`, cls: "err" }]);
      await print([`abriendo «${w.name}»...`, { t: "  ████████████████ 100%", cls: "hit" }]);
      remember(w.url);
      setTimeout(() => { window.location.href = w.url; }, 500);
    },
    azar: async () => COMMANDS.abrir(allWorks()[(Math.random() * allWorks().length) | 0].name),
    whoami: async () => {
      const l = await visitorPoem();
      return print([{ t: "" }, ...l.map(t => ({ t, cls: "poem" })), { t: "" }]);
    },
    poema: async () => print([{ t: "" }, ...POEM.map(t => ({ t, cls: "poem" })), { t: "" }]),
    historial: async () => {
      const m = loadMem(), works = allWorks();
      const rows = Object.entries(m).map(([u, n]) => { const w = works.find(x => x.url === u); return w ? `  ${String(n).padStart(2)}×  ${w.name}` : null; }).filter(Boolean);
      return print(rows.length ? [{ t: "obras que ya abriste (y cuántas veces):", cls: "cmd" }, ...rows] : [{ t: "historial vacío. todavía no has entrado a ninguna obra.", cls: "dim" }]);
    },
    cat: async (arg) => {
      if (!arg) return print([{ t: "cat: ¿qué archivo? prueba «ls -a».", cls: "err" }]);
      try {
        let path = arg.trim().replace(/^\/+/, "").replace(/\/$/, "");
        if (path === ".gato") path = ".gato/gato.txt"; // .gato es una carpeta con su versión en texto
        const r = await fetch(path, { cache: "no-store" });
        if (!r.ok) throw 0;
        const txt = await r.text();
        return print(txt.replace(/\s+$/, "").split("\n").map(t => ({ t, cls: "file" })), 6);
      } catch (e) { return print([{ t: `cat: ${arg}: no existe el archivo (o la metáfora)`, cls: "err" }]); }
    },
    fecha: async () => print([new Date().toLocaleString("es", { dateStyle: "full", timeStyle: "short" })]),
    gato: async () => { close(); setTimeout(() => window.summonKitten && window.summonKitten(), 250); },
    matrix: async () => {
      await print([{ t: "despertando...", cls: "hit" }]);
      for (let i = 0; i < 420; i++) fxParts.push({ x: Math.random() * innerWidth, y: -Math.random() * innerHeight, vx: 0, vy: 120 + Math.random() * 160, g: 0,
        s: Math.random() < 0.7 ? 2 : 3, age: -Math.random() * 1.5, life: 2.4 + Math.random(), c: "80,255,140", a: 0.9 });
      startFx();
    },
    limpiar: async () => { out.replaceChildren(); },
    salir: async () => close(),
    echo: async (arg) => print([arg || ""]),
    sudo: async (arg) => {
      if (norm(arg) === "amor") return print([`[sudo] contraseña para amor: ********`, { t: "permiso concedido.", cls: "hit" }, { t: "el amor ya estaba instalado. solo faltaba ejecutarlo.", cls: "poem" }], 22);
      return print([{ t: `${arg || "sudo"}: no está en el archivo sudoers. este incidente será reportado al gato.`, cls: "err" }]);
    },
    rm: async (arg) => {
      if (!/metafora/.test(norm(arg))) return print([{ t: `rm: no se puede borrar «${arg}»: aquí nada se borra del todo`, cls: "err" }]);
      await print(["borrando metáforas...", "  rm: la-luna-como-espejo ... ok", "  rm: el-gato-como-sueño ... ok", "  rm: la-página-como-cuerpo ..."], 18);
      document.documentElement.classList.add("broken");
      setTimeout(async () => {
        document.documentElement.classList.remove("broken");
        await print([{ t: "error crítico: las metáforas no se pueden borrar.", cls: "err" }, { t: "solo cambian de lugar.", cls: "poem" }], 22);
      }, 2200);
    },
    hola: async () => print(["hola. el gato también te saluda."]),
    miau: async () => print(["miau."]),
    pwd: async () => print(["/metafobia/entre/las/palabras"]),
    exit: async () => close(), clear: async () => out.replaceChildren(), help: async () => COMMANDS.ayuda(), date: async () => COMMANDS.fecha(),
    open: async (a) => COMMANDS.abrir(a), history: async () => COMMANDS.historial()
  };
  COMMANDS["quien"] = async () => COMMANDS.whoami();

  async function run(raw) {
    const line = raw.trim();
    const sp = document.createElement("span"); sp.className = "cmd"; sp.textContent = `visitante@metafobia:~$ ${line}\n`; out.appendChild(sp);
    if (!line) return;
    history.push(line); hpos = history.length;
    // frases completas (se comparan sin tildes, mayúsculas ni signos)
    const phrase = norm(line).replace(/[¡!¿?.,…]/g, "").replace(/\s+/g, " ").trim();
    const PHRASES = {
      "te extrano": "yo también te extraño.",
      "te quiero": "yo también te quiero."
    };
    if (PHRASES[phrase]) {
      busy = true; input.disabled = true;
      await print([{ t: PHRASES[phrase], cls: "poem" }], 40);
      busy = false; input.disabled = false;
      if (matchMedia("(pointer: fine)").matches) input.focus();
      return;
    }
    const [c, ...rest] = line.split(/\s+/);
    const fn = COMMANDS[norm(c)];
    busy = true; input.disabled = true;
    try {
      if (fn) await fn(rest.join(" "));
      else await print([{ t: `comando no encontrado: ${c}. escribe «ayuda».`, cls: "err" }]);
    } finally {
      busy = false; input.disabled = false;
      if (!box.hidden && matchMedia("(pointer: fine)").matches) input.focus();
      out.scrollTop = out.scrollHeight;
    }
  }
  form.addEventListener("submit", e => { e.preventDefault(); if (busy) return; const v = input.value; input.value = ""; run(v); });
  input.addEventListener("keydown", e => {
    if (e.key === "ArrowUp" && history.length) { hpos = Math.max(0, hpos - 1); input.value = history[hpos]; e.preventDefault(); }
    if (e.key === "ArrowDown" && history.length) { hpos = Math.min(history.length, hpos + 1); input.value = history[hpos] || ""; e.preventDefault(); }
  });
  box.querySelectorAll(".term-chips button").forEach(b => b.addEventListener("click", () => { if (!busy) run(b.dataset.cmd); }));

  async function boot() {
    out.replaceChildren();
    busy = true; input.disabled = true;
    await print([{ t: "> metafobia.leer('poema_oculto.txt')", cls: "cmd" }, { t: "  cargando metáforas... ok", cls: "dim" }, { t: "" }]);
    await print(POEM.map(t => ({ t, cls: "poem" })), 16);
    await print([{ t: "" }, { t: "/* si llegaste hasta aquí, ya eres parte de la obra */", cls: "dim" },
      { t: "/* esta consola acepta comandos. escribe «ayuda». */", cls: "hit" }]);
    busy = false; input.disabled = false;
    if (matchMedia("(pointer: fine)").matches) input.focus();
  }
  function open() {
    box.hidden = false; btn.setAttribute("aria-expanded", "true");
    if (!booted) { booted = true; boot(); } else if (matchMedia("(pointer: fine)").matches) input.focus();
    box.querySelector(".term-x").focus({ preventScroll: true });
    if (matchMedia("(pointer: fine)").matches) setTimeout(() => input.focus(), 50);
  }
  function close() { box.hidden = true; btn.setAttribute("aria-expanded", "false"); btn.focus(); }
  btn.addEventListener("click", open);
  box.querySelector(".term-x").addEventListener("click", close);
  box.addEventListener("click", e => { if (e.target === box) close(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape" && !box.hidden) close(); });
})();

// ---------- Pestaña viva ----------
// Si el visitante se va a otra pestaña, el título le habla; al volver, lo nota.
(() => {
  const BASE = document.title;
  const AWAY = ["¿sigues ahí?", "el gato te espera", "Metafobia", "· · ·", "no cierres la metáfora"];
  let timer = null, i = 0;
  document.addEventListener("visibilitychange", () => {
    clearInterval(timer); clearTimeout(timer);
    if (document.hidden) {
      i = 0; document.title = AWAY[0];
      timer = setInterval(() => { i = (i + 1) % AWAY.length; document.title = AWAY[i]; }, 2200);
    } else {
      document.title = "volviste";
      timer = setTimeout(() => { document.title = BASE; }, 2500);
    }
  });
})();

// ---------- Perderse: ir a una obra al azar ----------
(() => {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "drift-btn";
  btn.innerHTML = '<span aria-hidden="true">↯</span> perderse';
  btn.title = "abre una obra al azar";
  const dock = document.createElement("div");
  dock.className = "dock";
  const cbtn = document.querySelector(".console-btn");
  if (cbtn) dock.appendChild(cbtn);
  dock.appendChild(btn);
  document.body.appendChild(dock);
  btn.addEventListener("click", () => {
    if (btn.classList.contains("leaving")) return;
    const works = allWorks();
    const w = works[(Math.random() * works.length) | 0];
    btn.classList.add("leaving");
    if (!reduceMotion.matches) dissolve(btn);
    remember(w.url);
    setTimeout(() => { window.location.href = w.url; }, reduceMotion.matches ? 0 : FADE_MS);
  });
  window.addEventListener("pageshow", () => btn.classList.remove("leaving"));
})();

// ---------- Secreto: escribir "gato" ----------
// Llueven píxeles y un gatito cruza corriendo la parte de abajo de la pantalla.
(() => {
  let buf = "", busy = false;
  window.summonKitten = () => kitten();
  function kitten() {
    if (busy) return;
    busy = true;
    // lluvia de píxeles
    for (let i = 0; i < 260; i++) {
      fxParts.push({ x: Math.random() * innerWidth, y: -10 - Math.random() * innerHeight * 0.6, vx: (Math.random() - 0.5) * 10, vy: 60 + Math.random() * 90, g: 30,
        s: Math.random() < 0.7 ? 2 : 3, age: -Math.random() * 1.2, life: 2.2 + Math.random() * 1.2, c: COLORS[(Math.random() * COLORS.length) | 0], a: 0.85 });
    }
    startFx();
    if (reduceMotion.matches) { busy = false; return; }
    const NSs = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(NSs, "svg");
    svg.setAttribute("class", "kitten");
    svg.setAttribute("aria-hidden", "true");
    svg.innerHTML = `<g class="k-pos"><path class="k-tail" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/>
      <g stroke="#fff" stroke-width="2.2" stroke-linecap="round"><line class="k-leg"/><line class="k-leg"/><line class="k-leg"/><line class="k-leg"/></g>
      <ellipse cx="0" cy="-10" rx="10" ry="5.2" fill="#fff"/>
      <path d="M7.4 -16.5 L8.6 -24 L11.6 -19.6 Z M12.6 -19.6 L15.8 -24 L16.8 -16.5 Z" fill="#fff"/>
      <circle cx="12" cy="-15" r="5.2" fill="#fff"/><ellipse cx="14.4" cy="-15.8" rx="0.9" ry="1.5" fill="#000"/></g>`;
    document.body.appendChild(svg);
    const pos = svg.querySelector(".k-pos"), legsK = [...svg.querySelectorAll(".k-leg")], tailK = svg.querySelector(".k-tail");
    const S = innerWidth < 760 ? 1.4 : 1.8, D = 4.2, y = innerHeight - 22;
    const t0 = performance.now();
    (function run(now) {
      const q = (now - t0) / 1000 / D;
      const x = -40 + (innerWidth + 80) * q;
      const g = q * D * 5.5;
      [[7, 0], [5, 0.5], [-6, 0.5], [-8, 0]].forEach(([hx, off], i) => {
        const ph = (g + off) % 1;
        legsK[i].setAttribute("x1", hx); legsK[i].setAttribute("y1", -7);
        legsK[i].setAttribute("x2", (hx + Math.sin(ph * Math.PI * 2) * 4).toFixed(1));
        legsK[i].setAttribute("y2", (-Math.max(0, Math.cos(ph * Math.PI * 2)) * 3).toFixed(1));
      });
      tailK.setAttribute("d", `M-9 -11 Q-19 -12 ${(-18 + Math.sin(now / 90) * 2).toFixed(1)} -22`);
      pos.setAttribute("transform", `translate(${x.toFixed(1)} ${(y - Math.abs(Math.sin(g * Math.PI)) * 3).toFixed(1)}) scale(${S})`);
      if (Math.random() < 0.6) fxParts.push({ x: x - 12 * S, y: y - 4, vx: -20 - Math.random() * 20, vy: -Math.random() * 20, g: 30, s: 2, age: 0, life: 0.8, c: COLORS[(Math.random() * COLORS.length) | 0], a: 0.8 });
      startFx();
      if (q < 1) requestAnimationFrame(run); else { svg.remove(); busy = false; }
    })(t0);
  }
  document.addEventListener("keydown", e => {
    if (e.ctrlKey || e.metaKey || e.altKey || e.key.length !== 1) return;
    if (e.target.closest && e.target.closest("input, textarea, [contenteditable]")) return;
    buf = (buf + e.key.toLowerCase()).slice(-4);
    if (buf === "gato") { buf = ""; kitten(); }
  });
  // En pantallas táctiles: tres toques seguidos en el título
  let taps = [];
  titleEl.addEventListener("click", () => {
    const now = performance.now();
    taps = taps.filter(t => now - t < 900); taps.push(now);
    if (taps.length >= 3) { taps = []; kitten(); }
  });
})();

// ---------- Noche y madrugada ----------
(() => {
  const late = document.createElement("p");
  late.className = "late";
  late.setAttribute("aria-live", "polite");
  document.querySelector(".head").appendChild(late);
  function apply() {
    const h = hourNow();
    document.documentElement.classList.toggle("night", isNight());
    // a la madrugada (3:00–5:00) aparece un mensaje escondido
    if (h >= 3 && h < 5) {
      const d = new Date();
      const hh = HOUR_OVERRIDE !== null ? Math.floor(h) : d.getHours();
      const mm = HOUR_OVERRIDE !== null ? "00" : String(d.getMinutes()).padStart(2, "0");
      late.textContent = `son las ${hh}:${mm} y sigues aquí. la metáfora tampoco duerme.`;
      late.classList.add("on");
    } else late.classList.remove("on");
  }
  apply();
  setInterval(apply, 60000);
})();

// ---------- Interferencia sobre la ilustración ----------
// De vez en cuando, una franja de señal rota barre la imagen de arriba abajo.
(() => {
  const col = document.querySelector(".col--right");
  if (!col) return;
  const band = document.createElement("div");
  band.className = "static";
  col.appendChild(band);
  function sweep() {
    if (!document.hidden && !reduceMotion.matches) {
      band.classList.remove("sweep"); col.classList.remove("glitch");
      void band.offsetWidth; // reinicia la animación
      band.classList.add("sweep"); col.classList.add("glitch");
      setTimeout(() => col.classList.remove("glitch"), 900);
    }
    setTimeout(sweep, 12000 + Math.random() * 14000);
  }
  setTimeout(sweep, 5000);
})();

route();
if (!reduceMotion.matches) requestAnimationFrame(frame);
