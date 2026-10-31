const ME = {
  name: "Ульяна Макарова",
  host: "lyalya",                                   
  role: "творческий разработчик в процессе · веб · дизайн · игры",
  about: [
    "Привет! Я Ульяна, студентка 2 курса по направлению «Системное программирование».",
    "Люблю путешествовать, вкусно кушать, ходить по магазинам и танцевать",
    "Я родилась во Владивостоке, занимаюсь танцами с 4х лет и до сих пор",
    "Хороший уровень понимания английского языка. Люблю смотреть видео на ютубе или фильмы/сериалы на английском (нууууу когда есть время....)",
    "На данный момент работаю кассиром-баристой в Кофемашине",
    "Мне нравятся веб, дизайн и игры: люблю придумывать идеи и превращать их в работающие штуки.",
    "Цель: стать разработчиком и делать продукты, которыми приятно пользоваться."
  ],
  skills: [["Python", 70], ["C++", 45], ["HTML и CSS", 30], ["JavaScript", 20], ["Git и GitHub", 50]],   // число = уровень в процентах
  projects: [
    { name: "ТёмныйФефу", desc: "пародийный даркнет-маркетплейс с мини-играми", href: "https://github.com/weqsvert/temny-fefu" },
    { name: "ToDo-лист", desc: "учебный проект: список задач", href: "https://github.com/weqsvert/to-do-list" },
    { name: "Image Switcher", desc: "переключатель картинок на JS", href: "https://github.com/weqsvert/knopka-kartinka" },
    { name: "My Personal Card", desc: "этот сайт-визитка", href: "https://github.com/weqsvert/my-persCard" }
  ],
  hobbies: ["музыка", "танцы", "игры", "прогулки"],

  photos: [
    { src: "photo4.jpg", cap: "работаюю"},
    { src: "photo5.jpg", cap: "моя собака"},
    { src: "photo1.jpg", cap: "это я"},
    { src: "photo2.jpg", cap: "танцую"}
  ],
  telegram: "https://t.me/weqsvert",
  github: "https://github.com/weqsvert",
  email: "ulikmulik2008@mail.ru"
};
/* =============================================================== */

const $ = s => document.querySelector(s);
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const fine = matchMedia("(hover: hover) and (pointer: fine)").matches;
const sleep = ms => new Promise(r => setTimeout(r, ms));
const esc = s => s.replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

/* ---------- Имя выезжает по буквам ---------- */
let n = 0;
document.querySelectorAll("[data-split]").forEach(el => {
  el.innerHTML = [...el.textContent.trim()].map(ch => `<span class="ch" style="--i:${n++}">${ch}</span>`).join("");
});
requestAnimationFrame(() => setTimeout(() => document.body.classList.add("loaded"), 100));
$("#year").textContent = new Date().getFullYear();

/* ---------- Фото-полароиды ---------- */
const tilt = [-6, 5, -3, 4, -5];
const figure = (p, i) => `
  <figure class="polaroid" style="--r:${tilt[i % 5]}deg;--i:${i}" data-depth="${(i + 1) * 9}">
    <div class="ph"><span>${p.emoji}</span><img src="${p.src}" alt="${p.cap}" loading="lazy" onerror="this.remove()"></div>
    <figcaption>${p.cap}</figcaption>
  </figure>`;
$("#stack").innerHTML = ME.photos.slice(0, 3).map(figure).join("");

/* ---------- ТЕРМИНАЛ ---------- */
const out = $("#out"), input = $("#cmd"), prompt = `guest@${ME.host}:~$`;
$("#ps1").textContent = prompt;

// Печать строк в терминал (каждая появляется с небольшой задержкой)
function print(lines, cls = "") {
  [].concat(lines).forEach((html, k) => {
    const d = document.createElement("div");
    d.className = "l " + cls;
    d.style.setProperty("--k", k);
    d.innerHTML = html;
    out.appendChild(d);
  });
  out.scrollTop = out.scrollHeight;
}

// Описание команд (используется в help и для кнопок под терминалом)
const DESC = {
  about: "кто я такая", skills: "что умею", projects: "что сделала", hobbies: "что люблю",
  photos: "фотографии", contacts: "как связаться", clear: "очистить экран", help: "список команд"
};
const bar = v => "█".repeat(Math.round(v / 10)) + "░".repeat(10 - Math.round(v / 10));

const commands = {
  help: () => ["<span class=hl>Доступные команды:</span>",
    ...Object.entries(DESC).map(([c, d]) => `  <span class=ok>${c.padEnd(10)}</span><span class=dim>${d}</span>`)],
  whoami: () => [`<span class=ok>${ME.name}</span>`, `<span class=dim>${ME.role}</span>`],
  about: () => ME.about,
  skills: () => ME.skills.map(([s, v]) => `${s.padEnd(14)}<span class=ok>${bar(v)}</span> <span class=dim>${v}%</span>`),
  projects: () => ME.projects.map(p => `<span class=hl>▸ <a href="${p.href}">${p.name}</a></span>\n  <span class=dim>${p.desc}</span>`),
  hobbies: () => [ME.hobbies.map(h => `<span class=hl>#${h}</span>`).join("   ")],
  photos: () => [`<div class="gallery">${ME.photos.map(figure).join("")}</div>`],
  contacts: () => [
    `<span class=hl>Telegram</span>  <a href="${ME.telegram}" target="_blank" rel="noopener">${ME.telegram.replace("https://", "")}</a>`,
    `<span class=hl>GitHub</span>    <a href="${ME.github}" target="_blank" rel="noopener">${ME.github.replace("https://", "")}</a>`,
    `<span class=hl>Почта</span>     ${ME.email}  <button data-copy="${ME.email}">скопировать</button>`
  ],
  clear: () => { out.innerHTML = ""; return []; },
  // пасхалки
  hello: () => ["Привет-привет! 👋 Введи <span class=ok>help</span>, чтобы узнать, что тут можно делать."],
  coffee: () => ["☕ Кофе налит. Продуктивность +10%, дедлайны −0%."],
  sudo: () => ["Доступ запрещён: прав нет, зато есть контакты. Введи <span class=ok>contacts</span>."],
  ls: () => [Object.keys(DESC).join("   ")]
};

const history = []; let hIndex = 0;
function run(raw) {
  const text = raw.trim();
  if (!text) return;
  print(`<span class=ps>${prompt}</span> ${esc(text)}`, "cmd");
  history.push(text); hIndex = history.length;
  const cmd = text.toLowerCase().split(/\s+/)[0];
  const result = commands[cmd] ? commands[cmd]() : [`команда не найдена: ${esc(cmd)}. Введи <span class=ok>help</span>.`];
  if (result.length) print(result);
}

$("#form").addEventListener("submit", e => { e.preventDefault(); run(input.value); input.value = ""; });
input.addEventListener("keydown", e => {
  if (e.key === "ArrowUp" && hIndex > 0) { input.value = history[--hIndex]; e.preventDefault(); }
  if (e.key === "ArrowDown") { input.value = history[++hIndex] || ""; e.preventDefault(); }
  if (e.key === "Tab") {                                   // автодополнение
    e.preventDefault();
    const m = Object.keys(commands).find(c => c.startsWith(input.value.toLowerCase()) && input.value);
    if (m) input.value = m;
  }
});
addEventListener("keydown", e => {                          // «/» переносит курсор в терминал
  if (e.key === "/" && document.activeElement !== input) {
    e.preventDefault(); $("#terminal").scrollIntoView({ behavior: "smooth" }); input.focus();
  }
});
$("#term").addEventListener("click", e => { if (!getSelection().toString() && !e.target.closest("a,button")) input.focus(); });
document.addEventListener("click", e => {                   // кнопка «скопировать» в контактах
  const b = e.target.closest("[data-copy]");
  if (b) navigator.clipboard.writeText(b.dataset.copy).then(() => b.textContent = "скопировано ✓").catch(() => b.textContent = b.dataset.copy);
});

// Кнопки-подсказки под терминалом (удобно на телефоне)
$("#chips").innerHTML = Object.keys(DESC).map(c => `<button>${c}</button>`).join("");
$("#chips").addEventListener("click", e => { if (e.target.tagName === "BUTTON") run(e.target.textContent); });

// Как будто кто-то печатает команду на клавиатуре
async function typeCommand(text) {
  input.readOnly = true;
  for (const ch of text) { input.value += ch; await sleep(reduce ? 0 : 70); }
  await sleep(reduce ? 0 : 250);
  input.value = ""; run(text); input.readOnly = false;
}
// Приветствие запускается, когда терминал появляется на экране
new IntersectionObserver(async (entries, obs) => {
  if (!entries[0].isIntersecting) return;
  obs.disconnect();
  await typeCommand("whoami"); await sleep(reduce ? 0 : 700); await typeCommand("help");
}, { threshold: 0.35 }).observe($("#term"));

/* ---------- Эффекты мыши (только на устройствах с мышью) ---------- */
if (fine && !reduce) {
  const glow = $("#glow");
  addEventListener("mousemove", e => {
    glow.style.opacity = 1;
    glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    const nx = e.clientX / innerWidth - 0.5, ny = e.clientY / innerHeight - 0.5;   // параллакс фото
    document.querySelectorAll("#stack .polaroid").forEach(f => {
      const d = +f.dataset.depth;
      f.style.setProperty("--tx", nx * d + "px");
      f.style.setProperty("--ty", ny * d + "px");
    });
  });
}