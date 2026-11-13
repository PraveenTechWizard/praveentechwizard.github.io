/* Builds the page from js/data.js. Edit data.js, not this file, to change content. */
document.documentElement.classList.add("js");
const $ = id => document.getElementById(id);
const todo = s => /^TODO/.test(s) ? `<span class="todo">${s}</span>` : s;
const PLAY = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4.5v15l13-7.5z"/></svg>';

/* ---------- Components ---------- */
const playerHTML = it => `<div class="player" data-title="${it.title}">
    <img src="${it.poster}" alt="Gameplay preview of ${it.title}" loading="lazy">
    <button class="play" type="button" aria-label="Play gameplay video of ${it.title}"><span>${PLAY}</span></button></div>`;

function projectHTML(p) {
  const media = p.video
    ? playerHTML(p)
    : `<div class="player empty"><p>Gameplay video goes here.<br><span class="todo">TODO: add a file to assets/video/ and set "video" in js/data.js</span></p></div>`;
  const shots = p.shots.length
    ? `<div class="shots">${p.shots.map((s, i) => `<button type="button" data-shot="${s}" aria-label="Open screenshot ${i + 1} of ${p.title}"><img src="${s}" alt="" loading="lazy"></button>`).join("")}</div>` : "";
  const link = [p.play ? `<a class="btn" href="${p.play}" target="_blank" rel="noopener">Play on itch.io</a>` : "",
    p.repo === "TODO" ? `<span class="todo">TODO: add GitHub repo link</span>`
    : p.repo ? `<a class="btn" href="${p.repo}" target="_blank" rel="noopener">View on GitHub</a>` : ""].join("");
  return `<article class="project reveal" style="--accent:${p.accent}" aria-labelledby="t-${p.title.replace(/\W/g, "")}">
    <header class="p-head"><h3 id="t-${p.title.replace(/\W/g, "")}">${p.title}</h3>
      <p class="ptype">${p.type}${p.status ? `<span class="status">${p.status}</span>` : ""}</p></header>
    <div class="p-media">${media}${shots}</div>
    <div class="p-body">
      <p>${p.desc}</p>
      <h4>My contribution</h4><p>${p.contribution}</p>
      ${p.mechanics.length ? `<h4>Key mechanics</h4><ul>${p.mechanics.map(m => `<li>${m}</li>`).join("")}</ul>` : ""}
      <ul class="chips" aria-label="Technologies">${p.tech.map(t => `<li>${t}</li>`).join("")}</ul>
      ${link ? `<div class="plinks">${link}</div>` : ""}
    </div></article>`;
}

/* ---------- Render ---------- */
$("project-list").innerHTML = PROJECTS.map(projectHTML).join("");
const colors = ["#f2b366", "#7ed3c4", "#ef8f7b", "#9db4f2"];
$("skill-list").innerHTML = SKILLS.map(([name, items], i) =>
  `<div class="reveal" style="--c:${colors[i % 4]};--d:${i * .08}s"><h3>${name}</h3><ul>${items.map(x => `<li>${x}</li>`).join("")}</ul></div>`).join("");
const L = (label, url, ext = true) => `<a href="${url}"${ext ? ' target="_blank" rel="noopener"' : ""}>${label}</a>`;
$("social").innerHTML = [L("GitHub", SITE.github), L("LinkedIn", SITE.linkedin), L("itch.io", SITE.itch), L("Email", "mailto:" + SITE.email, false)].map(x => `<li>${x}</li>`).join("");
$("contact-list").innerHTML =
  `<li><span>Email</span>${L(SITE.email, "mailto:" + SITE.email, false)}</li>
   <li><span>GitHub</span>${L(SITE.github.replace("https://", ""), SITE.github)}</li>
   <li><span>itch.io</span>${L("praveen-kumar007.itch.io", SITE.itch)}</li>
   <li><span>LinkedIn</span>${L("praveen-kumar-j", SITE.linkedin)}</li>`;

/* Resume: buttons appear once the files are available (embedded, or found on a web server). */
function showResume(pdf, docx) {
  const a = `href="${pdf}" download="Praveen-Kumar-Resume.pdf"`;
  $("resume-slot").innerHTML = `<a class="btn primary" ${a}>Download Resume (PDF)</a>` +
    (docx ? ` <a class="btn" href="${docx}" download="Praveen-Kumar-Resume.docx">Word version</a>` : "");
  $("social").insertAdjacentHTML("beforeend", `<li><a ${a}>Resume</a></li>`);
}
const asBlob = u => u.startsWith("data:") ? fetch(u).then(r => r.blob()).then(b => URL.createObjectURL(b)) : Promise.resolve(u);
$("resume-slot").innerHTML = `<span class="todo">Resume coming soon (add your PDF to the resume/ folder)</span>`;
const found = SITE.resume.startsWith("data:") ? Promise.resolve(true) : fetch(SITE.resume, { method: "HEAD" }).then(r => r.ok).catch(() => false);
found.then(ok => ok && Promise.all([asBlob(SITE.resume), SITE.resumeDocx ? asBlob(SITE.resumeDocx) : null]).then(([pdf, docx]) => showResume(pdf, docx)));

/* ---------- Mechanics slider: swipe or use the arrows, one video at a time ---------- */
(function () {
  const track = $("car-track"), dots = $("car-dots"), prev = $("car-prev"), next = $("car-next"), count = $("car-count");
  track.innerHTML = MECHANICS.map((m, i) => `<article class="slide" style="--accent:${m.accent}" role="group" aria-roledescription="slide" aria-label="${i + 1} of ${MECHANICS.length}: ${m.title}">
      ${playerHTML(m)}
      <div><h3>${m.title}</h3><p>${m.desc}</p>
        <ul class="pts">${m.points.map(x => `<li>${x}</li>`).join("")}</ul>
        <ul class="chips" aria-label="Technologies">${m.tech.map(t => `<li>${t}</li>`).join("")}</ul></div></article>`).join("");
  dots.innerHTML = MECHANICS.map((m, i) => `<button type="button" aria-label="Show ${m.title}" data-i="${i}"></button>`).join("");
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let cur = 0;
  const go = (i, smooth = true) => track.scrollTo({ left: Math.max(0, Math.min(MECHANICS.length - 1, i)) * track.clientWidth, behavior: smooth && !reduce ? "smooth" : "auto" });
  const sync = () => {
    const i = Math.round(track.scrollLeft / (track.clientWidth || 1));
    if (i !== cur) { track.querySelectorAll("video").forEach(v => v.pause()); cur = i; }
    dots.querySelectorAll("button").forEach((b, k) => k === i ? b.setAttribute("aria-current", "true") : b.removeAttribute("aria-current"));
    prev.disabled = i === 0; next.disabled = i === MECHANICS.length - 1;
    count.textContent = `${i + 1} / ${MECHANICS.length}`;
  };
  prev.addEventListener("click", () => go(cur - 1));
  next.addEventListener("click", () => go(cur + 1));
  dots.addEventListener("click", e => { const b = e.target.closest("button"); if (b) go(+b.dataset.i); });
  track.addEventListener("scroll", () => requestAnimationFrame(sync), { passive: true });
  track.addEventListener("keydown", e => {
    if (e.key === "ArrowRight") { e.preventDefault(); go(cur + 1); }
    if (e.key === "ArrowLeft") { e.preventDefault(); go(cur - 1); }
  });
  addEventListener("resize", () => go(cur, false));
  sync();
})();

/* ---------- Video: swap poster for a real player on click ---------- */
document.addEventListener("click", e => {
  const box = e.target.closest(".player[data-title]");
  if (box && e.target.closest(".play")) {
    document.querySelectorAll("video").forEach(v => v.pause());
    const p = [...PROJECTS, ...MECHANICS].find(x => x.title === box.dataset.title);
    const v = document.createElement("video");
    Object.assign(v, { poster: p.poster, controls: true, autoplay: true, playsInline: true, preload: "auto" });
    v.setAttribute("aria-label", "Gameplay video of " + p.title);
    box.replaceChildren(v);
    if (p.video.startsWith("data:")) fetch(p.video).then(r => r.blob()).then(b => { v.src = URL.createObjectURL(b); });
    else v.src = p.video;
    v.focus();
    return;
  }
  const shot = e.target.closest("[data-shot]");
  if (shot) { const d = $("lightbox"); d.querySelector("img").src = shot.dataset.shot; d.showModal(); }
});
$("lb-close").addEventListener("click", () => $("lightbox").close());
$("lightbox").addEventListener("click", e => { if (e.target.id === "lightbox") e.target.close(); });

/* ---------- Scroll feel: reveal, active nav link, progress bar ---------- */
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
}), { threshold: .12 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

const links = [...document.querySelectorAll("nav a")];
const spy = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) links.forEach(a => a.hash === "#" + e.target.id ? a.setAttribute("aria-current", "true") : a.removeAttribute("aria-current"));
}), { rootMargin: "-45% 0px -50% 0px" });
document.querySelectorAll("main section").forEach(s => spy.observe(s));

const bar = document.querySelector(".progress");
addEventListener("scroll", () => requestAnimationFrame(() => {
  const h = document.documentElement;
  bar.style.transform = `scaleX(${h.scrollTop / (h.scrollHeight - h.clientHeight || 1)})`;
}), { passive: true });
