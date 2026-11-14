// El gato camina de un lado a otro por abajo, se detiene a olfatear y deja polvo.
(() => {
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const pos = document.getElementById("pos"), head = document.getElementById("head"), tail = document.getElementById("tail");
  const legs = [...document.querySelectorAll("#lost line")], q = document.getElementById("q");
  const cv = document.getElementById("dust"), c = cv.getContext("2d");
  let W, H, d, parts = [];
  function size() { d = Math.min(2, devicePixelRatio || 1); W = innerWidth; H = innerHeight; cv.width = W * d; cv.height = H * d; }
  size(); addEventListener("resize", size);
  const S = innerWidth < 600 ? 1.5 : 2;
  let x = W * 0.2, dir = 1, mode = "walk", t0 = 0, gait = 0, last = performance.now();
  function frame(now) {
    const dt = Math.min(0.05, (now - last) / 1000); last = now;
    const y = H - 28;
    if (mode === "walk") {
      x += dir * 55 * dt; gait += dt * 3.2;
      if (Math.random() < 0.25) parts.push({ x: x - dir * 10 * S, y: y - 2, vx: -dir * 15, vy: -Math.random() * 12, life: .8, age: 0 });
      if (x > W - 40 || x < 40) dir = -dir;
      if (Math.random() < 0.004) { mode = "sniff"; t0 = now; }
    } else if (now - t0 > 2200) mode = "walk";
    [[7, 0], [5, .5], [-6, .5], [-8, 0]].forEach(([hx, off], i) => {
      const ph = (gait + off) % 1, walk = mode === "walk";
      legs[i].setAttribute("x1", hx); legs[i].setAttribute("y1", -7);
      legs[i].setAttribute("x2", (hx + (walk ? Math.sin(ph * 6.283) * 3.2 : 0)).toFixed(1));
      legs[i].setAttribute("y2", (walk ? -Math.max(0, Math.cos(ph * 6.283)) * 2.4 : 0).toFixed(1));
    });
    const sniff = mode === "sniff" ? 24 + Math.sin(now / 80) * 4 : 0;
    head.setAttribute("transform", `rotate(${sniff.toFixed(1)} 12 -15)`);
    tail.setAttribute("d", `M-10 -11 Q-20 -13 ${(-17 + Math.sin(now / 300) * 3).toFixed(1)} -24`);
    q.setAttribute("opacity", mode === "sniff" ? (0.5 + 0.5 * Math.sin(now / 200)).toFixed(2) : "0");
    pos.setAttribute("transform", `translate(${x.toFixed(1)} ${y}) scale(${dir * S} ${S})`);
    c.setTransform(d, 0, 0, d, 0, 0); c.clearRect(0, 0, W, H);
    for (let i = parts.length - 1; i >= 0; i--) {
      const p = parts[i]; p.age += dt;
      if (p.age > p.life) { parts.splice(i, 1); continue; }
      p.x += p.vx * dt; p.y += p.vy * dt; p.vy += 14 * dt;
      c.fillStyle = `rgba(255,255,255,${((1 - p.age / p.life) * .8).toFixed(2)})`;
      c.fillRect(Math.round(p.x / 2) * 2, Math.round(p.y / 2) * 2, 2, 2);
    }
    if (!reduce) requestAnimationFrame(frame);
  }
  if (reduce) { mode = "sniff"; frame(performance.now()); } else requestAnimationFrame(frame);
})();
