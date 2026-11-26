// honeypot: la poción guarda la puerta. Al beberla se abre la obra que se había elegido.
(() => {
  // solo se puede salir hacia las obras de Metafobia (nada de redirecciones a sitios extraños)
  const OK = ["metafobian-code.github.io", "metafobia.net", "www.metafobia.net", "metafobia.github.io",
    "online.fliphtml5.com", "consola.canekzapata.net", "vt.tiktok.com"];
  let dest = "/";
  try {
    const a = new URLSearchParams(location.search).get("a");
    if (a) { const u = new URL(a, location.origin); if (u.protocol === "https:" && OK.includes(u.hostname)) dest = u.href; }
  } catch (e) {}
  const LINES = ["ya estás dentro.", "nada fue lo que parecía.", "la miel era el anzuelo.", "bebiste: ahora mira."];
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let gone = false;
  function drink() {
    if (gone) return; gone = true;
    document.getElementById("msg").textContent = LINES[(Math.random() * LINES.length) | 0];
    document.body.classList.add("drink");
    setTimeout(() => { location.href = dest; }, reduce ? 300 : 2300);
  }
  document.getElementById("potion").addEventListener("click", drink);
  document.getElementById("hint").addEventListener("click", drink);
  addEventListener("keydown", e => { if (e.key === "Enter" && document.activeElement === document.body) drink(); });
  window.addEventListener("pageshow", () => { gone = false; document.body.classList.remove("drink"); });
})();
