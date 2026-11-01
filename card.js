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

/* ---------- МОЙ ПУТЬ (таймлайн): меняй даты и тексты здесь ---------- */
ME.timeline = [
  { date: "9 марта 2008",      title: "Родилась во Владивостоке", text: "С этого всё и началось." },
  { date: "В 4 года",          title: "Первые танцы",             text: "Пошла на современные танцы и с тех пор не останавливаюсь." },
  { date: "Сентябрь 2023",     title: "K-pop",                    text: "Начала заниматься k-pop танцами." },
  { date: "2024",              title: "Команда iyoose",           text: "Пришла в команду iyoose и танцую в ней до сих пор." },
  { date: "2024",              title: "Первая работа",            text: "Устроилась официанткой в «Ух ты блин»." },
  { date: "2025",              title: "ДВФУ",                     text: "Поступила в ДВФУ." },
  { date: "Май 2026",          title: "За барной стойкой",        text: "В «Ух ты блин» перешла работать на бар." },
  { date: "Конец июня 2026",   title: "Кофемашина",               text: "Устроилась в «Кофемашину» и работаю там до сих пор." },
  { date: "Сейчас",            title: "Второй курс",              text: "Учусь, танцую в iyoose, варю кофе и делаю сайты вроде этого.", now: true }
];

/* ---------- ENGLISH VERSION: английские тексты ---------- */
const ME_EN = {
  name: "Ulyana Makarova",
  role: "creative developer in progress · web · design · games",
  about: [
    "Hi! I'm Ulyana, a 2nd-year student majoring in Systems Programming.",
    "I love traveling, good food, shopping and dancing.",
    "I was born in Vladivostok. I've been dancing since I was 4, and I still do.",
    "I have a good command of English. I like watching YouTube videos, movies and series in English (well... when I have time...)",
    "Right now I work as a cashier-barista at Kofemashina.",
    "I'm into web, design and games: I love coming up with ideas and turning them into working things.",
    "Goal: to become a developer and build products that are a pleasure to use."
  ],
  skills: [["Python", 70], ["C++", 45], ["HTML & CSS", 30], ["JavaScript", 20], ["Git & GitHub", 50]],
  projects: ME.projects.map((p, i) => ({
    ...p,
    name: ["TyomnyFefu", "ToDo list", "Image Switcher", "My Personal Card"][i] || p.name,
    desc: ["parody darknet marketplace with mini-games", "learning project: a task list", "image switcher in JS", "this business-card site"][i] || p.desc
  })),
  hobbies: ["music", "dancing", "games", "walks"],
  photos: ME.photos.map((p, i) => ({ ...p, cap: ["at work", "my dog", "this is me", "dancing"][i] || p.cap })),
  timeline: [
    { date: "March 9, 2008",   title: "Born in Vladivostok", text: "Where it all began." },
    { date: "Age 4",           title: "First dance classes", text: "Started contemporary dance and haven't stopped since." },
    { date: "September 2023",  title: "K-pop",               text: "Started K-pop dance classes." },
    { date: "2024",            title: "Team iyoose",         text: "Joined the iyoose dance team and still dance with them." },
    { date: "2024",            title: "First job",           text: "Started as a waitress at “Ух ты блин”." },
    { date: "2025",            title: "FEFU",                text: "Enrolled at FEFU (Far Eastern Federal University)." },
    { date: "May 2026",        title: "Behind the bar",      text: "Moved to the bar at “Ух ты блин”." },
    { date: "Late June 2026",  title: "Kofemashina",         text: "Joined Kofemashina, where I still work." },
    { date: "Now",             title: "Second year",         text: "Studying, dancing in iyoose, making coffee and building sites like this one.", now: true }
  ]
};
const ME_RU = JSON.parse(JSON.stringify(ME));     // копия русских данных, чтобы переключаться обратно

const DESC_T = {
  ru: { about: "кто я такая", timeline: "мой путь", skills: "что умею", projects: "что сделала", hobbies: "что люблю", photos: "фотографии",
        contacts: "как связаться", neofetch: "сводка обо мне", theme: "сменить цвета сайта", dance: "потанцуем?", confetti: "праздник!",
        lang: "язык: lang en / lang ru", clear: "очистить экран", help: "список команд" },
  en: { about: "who I am", timeline: "my journey", skills: "what I can do", projects: "what I've built", hobbies: "what I love", photos: "photos",
        contacts: "get in touch", neofetch: "quick summary", theme: "change site colors", dance: "shall we dance?", confetti: "party time!",
        lang: "language: lang en / lang ru", clear: "clear screen", help: "list of commands" }
};

const T = {
  ru: {
    name: ME_RU.name, pageTitle: "✦ Макарова Ульяна",
    metaDesc: "Ульяна Макарова: студентка 2 курса, системное программирование. Веб, дизайн, игры. Спроси меня в терминале.",
    tag: "✦ студентка 2 курса · системное программирование",
    lead: "Творческий разработчик в процессе. Нравится веб, дизайн и игры.",
    cta: "Спроси меня в терминале ↓",
    hint: "Нажми <kbd>/</kbd>, чтобы ввести команду, <kbd>Tab</kbd> дополняет, <kbd>↑</kbd> вспоминает прошлую.",
    jLabel: "Мой путь", jTitle: "Как всё начиналось",
    avail: "Доступные команды:", nf: c => `команда не найдена: ${c}. Введи <span class=ok>help</span>.`,
    mail: "Почта", copy: "скопировать", copied: "скопировано ✓",
    who: "Кто", roleL: "Роль", langs: "Языки", likes: "Любит", shell: "zsh (почти)", themeL: "тема", yay: "🎉 ура!",
    hello: "Привет-привет! 👋 Введи <span class=ok>help</span>, чтобы узнать, что тут можно делать.",
    coffee: "☕ Кофе налит. Продуктивность +10%, дедлайны −0%.",
    sudo: "Доступ запрещён: прав нет, зато есть контакты. Введи <span class=ok>contacts</span>.",
    clock: "Во Владивостоке сейчас", away: "✦ вернись, тут вкусно пахнет кофе ☕",
    langSet: "язык: русский ✦", ribbon: ["лучший кофе", "танцы"]
  },
  en: {
    name: ME_EN.name, pageTitle: "✦ Ulyana Makarova",
    metaDesc: "Ulyana Makarova: 2nd-year student, systems programming. Web, design, games. Ask me in the terminal.",
    tag: "✦ 2nd-year student · systems programming",
    lead: "Creative developer in progress. Into web, design and games.",
    cta: "Ask me in the terminal ↓",
    hint: "Press <kbd>/</kbd> to type a command, <kbd>Tab</kbd> autocompletes, <kbd>↑</kbd> recalls the last one.",
    jLabel: "My journey", jTitle: "How it all started",
    avail: "Available commands:", nf: c => `command not found: ${c}. Type <span class=ok>help</span>.`,
    mail: "Email", copy: "copy", copied: "copied ✓",
    who: "Name", roleL: "Role", langs: "Languages", likes: "Likes", shell: "zsh (kind of)", themeL: "theme", yay: "🎉 yay!",
    hello: "Hello there! 👋 Type <span class=ok>help</span> to see what you can do here.",
    coffee: "☕ Coffee poured. Productivity +10%, deadlines −0%.",
    sudo: "Access denied: no permissions, but I do have contacts. Type <span class=ok>contacts</span>.",
    clock: "Vladivostok time:", away: "✦ come back, it smells like coffee here ☕",
    langSet: "language: English ✦", ribbon: ["best coffee", "dance"]
  }
};
let lang = (navigator.language || "ru").toLowerCase().startsWith("ru") ? "ru" : "en";   // язык браузера по умолчанию
try { lang = localStorage.getItem("lang") || lang; } catch (e) {}
const t = k => T[lang][k];

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
    <div class="ph"><span>${p.emoji || "✨"}</span><img src="${p.src}" alt="${p.cap}" loading="lazy" onerror="this.remove()"></div>
    <figcaption>${p.cap}</figcaption>
  </figure>`;
function renderStack() { $("#stack").innerHTML = ME.photos.slice(0, 3).map(figure).join(""); }
renderStack();

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
    if (!cls && k < 12) setTimeout(blip, k * 55);   // звук появления строки
  });
  out.scrollTop = out.scrollHeight;
}

// Описание команд (используется в help и для кнопок под терминалом)
const DESC = {                 // тексты подставляются в setLang (на нужном языке)
  about: "", timeline: "", skills: "", projects: "", hobbies: "", photos: "", contacts: "",
  neofetch: "", theme: "", dance: "", confetti: "", lang: "", clear: "", help: ""
};
const bar = v => "█".repeat(Math.round(v / 10)) + "░".repeat(10 - Math.round(v / 10));

const commands = {
  help: () => [`<span class=hl>${t("avail")}</span>`,
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
    `<span class=hl>${t("mail")}</span>     ${ME.email}  <button data-copy="${ME.email}">${t("copy")}</button>`
  ],
  timeline: () => ME.timeline.map(e => `<span class=ok>${e.date}</span>  <span class=hl>${e.title}</span>\n  <span class=dim>${e.text}</span>`),
  lang: a => { setLang(["ru", "en"].includes(a[0]) ? a[0] : (lang === "ru" ? "en" : "ru"), true); return []; },
  clear: () => { out.innerHTML = ""; return []; },
  neofetch: () => {
    const logo = [" ╭───────╮ ", " │ ◕   ◕ │ ", " │   ‿   │ ", " ╰─┬───┬─╯ ", "   ┴   ┴   "];
    const row = (k, v) => `<span class=hl>${k.padEnd(9)}</span>${v}`;
    const info = [
      `<span class=ok>guest</span>@<span class=ok>${ME.host}</span>`, "─────────────────────",
      row(t("who"), ME.name), row(t("roleL"), ME.role.split(" · ")[0]),
      row(t("langs"), ME.skills.map(x => x[0]).join(", ")), row(t("likes"), ME.hobbies.join(", ")),
      row("Shell", t("shell")),
      ["#ffb3d6", "#c4b5ff", "#8ff0c9", "#ffd27a", "#a9d8ff"].map(c => `<span style="color:${c}">████</span>`).join("")
    ];
    return [`<div class="nf"><pre>${logo.join("\n")}</pre><div>${info.join("\n")}</div></div>`];
  },
  theme: () => { themeIndex = (themeIndex + 1) % THEMES.length; applyTheme(); return [`${t("themeL")}: <span class=ok>${THEMES[themeIndex].name[lang]}</span> ✦`]; },
  confetti: () => { confetti(); return [t("yay")]; },
  dance: () => {
    const frames = ["♪ ┏(･o･)┛ ♪", "♪ ┗(･o･)┓ ♪", "♪ ┏(･o･)┓ ♪", "♪ ┗(･o･)┛ ♪"];
    const d = document.createElement("div"); d.className = "l"; out.appendChild(d);
    let i = 0;
    const id = setInterval(() => { d.textContent = frames[i++ % frames.length]; out.scrollTop = out.scrollHeight; if (i > 18) clearInterval(id); }, 220);
    return [];
  },
  // пасхалки
  hello: () => [t("hello")],
  coffee: () => [t("coffee")],
  sudo: () => [t("sudo")],
  ls: () => [Object.keys(DESC).join("   ")]
};

const history = []; let hIndex = 0;
function run(raw) {
  const text = raw.trim();
  if (!text) return;
  print(`<span class=ps>${prompt}</span> ${esc(text)}`, "cmd");
  history.push(text); hIndex = history.length;
  const cmd = text.toLowerCase().split(/\s+/)[0];
  const result = commands[cmd] ? commands[cmd](text.split(/\s+/).slice(1)) : [t("nf")(esc(cmd))];
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
  if (b) navigator.clipboard.writeText(b.dataset.copy).then(() => b.textContent = t("copied")).catch(() => b.textContent = b.dataset.copy);
});

// Кнопки-подсказки под терминалом (удобно на телефоне)
$("#chips").innerHTML = Object.keys(DESC).map(c => `<button>${c}</button>`).join("");
$("#chips").addEventListener("click", e => { if (e.target.tagName === "BUTTON") run(e.target.textContent); });

// Как будто кто-то печатает команду на клавиатуре
async function typeCommand(text) {
  input.readOnly = true;
  for (const ch of text) { input.value += ch; click(); await sleep(reduce ? 0 : 70); }
  await sleep(reduce ? 0 : 250);
  input.value = ""; enterKey(); run(text); input.readOnly = false;
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

/* ---------- ЗВУКИ ---------- */
// Настоящие щелчки клавиш лежат в файле typing.mp3 (нарезаны из твоей записи).
// Если файл не загрузился, включаются синтезированные клавиши, поэтому звук есть в любом случае.
const SPRITE = {
  file: "typing.mp3", slot: 0.2, len: 0.15,
  keys: Array.from({ length: 20 }, (_, i) => i),   // 20 разных нажатий для букв
  enter: [20, 21, 22]                              // 3 глубоких нажатия для Enter
};
let ctx = null, master = null, sprite = null, lastKey = -1;
let soundOn = true;
try { soundOn = localStorage.getItem("sound") !== "off"; } catch (e) {}

// Браузеры разрешают звук только после клика или нажатия клавиши, поэтому «движок» запускается на первом действии
function audio() {
  if (!ctx) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
    master = ctx.createGain();
    master.gain.value = 0.5;                      // общая громкость (от 0 до 1)
    master.connect(ctx.destination);
    loadSprite();
  }
  if (ctx.state === "suspended") ctx.resume();
  return ctx;
}
["pointerdown", "keydown", "touchend"].forEach(ev => addEventListener(ev, audio, { once: true }));
const ready = () => soundOn && ctx && ctx.state === "running";

async function loadSprite() {
  try {
    const res = await fetch(SPRITE.file);
    sprite = await ctx.decodeAudioData(await res.arrayBuffer());
  } catch (e) { sprite = null; }
}

// Проигрывает случайный кусочек из typing.mp3 (чуть меняя тон и громкость, чтобы не звучало одинаково)
function playKey(list, vol) {
  let i;
  do { i = list[Math.floor(Math.random() * list.length)]; } while (i === lastKey && list.length > 1);
  lastKey = i;
  const src = ctx.createBufferSource(); src.buffer = sprite;
  src.playbackRate.value = 0.94 + Math.random() * 0.12;
  const g = ctx.createGain(); g.gain.value = vol * (0.8 + Math.random() * 0.4);
  src.connect(g); g.connect(master);
  src.start(0, i * SPRITE.slot, SPRITE.len);
}

function click(heavy = false) {
  if (!ready()) return;
  if (sprite) { playKey(heavy ? SPRITE.enter : SPRITE.keys, heavy ? 0.9 : 0.7); return; }
  const t = ctx.currentTime, len = Math.floor(ctx.sampleRate * 0.045);   // запасной вариант: синтез
  const buf = ctx.createBuffer(1, len, ctx.sampleRate), d = buf.getChannelData(0);
  for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 3);
  const src = ctx.createBufferSource(); src.buffer = buf;
  const filter = ctx.createBiquadFilter(); filter.type = "bandpass";
  filter.frequency.value = (heavy ? 1200 : 2200) * (0.85 + Math.random() * 0.4); filter.Q.value = 1.1;
  const g = ctx.createGain(); g.gain.value = heavy ? 0.9 : 0.6;
  src.connect(filter); filter.connect(g); g.connect(master); src.start(t);
}
const enterKey = () => click(true);

// Звук появления строки в терминале: тихое «нажатие» (или мягкий блип, если файл не загрузился)
function blip() {
  if (!ready()) return;
  if (sprite) { playKey(SPRITE.keys, 0.3); return; }
  const t = ctx.currentTime, o = ctx.createOscillator(), g = ctx.createGain();
  o.frequency.value = 700 + Math.random() * 500;
  g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.18, t + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.12);
  o.connect(g); g.connect(master); o.start(t); o.stop(t + 0.13);
}

input.addEventListener("keydown", e => {            // звук твоего набора в терминале
  if (input.readOnly) return;
  if (e.key === "Enter") enterKey();
  else if (e.key.length === 1 || e.key === "Backspace") click();
});

const soundBtn = $("#sound");                       // кнопка 🔊/🔇
function showSound() { soundBtn.textContent = soundOn ? "🔊" : "🔇"; soundBtn.setAttribute("aria-pressed", soundOn); }
showSound();
soundBtn.addEventListener("click", () => {
  soundOn = !soundOn;
  try { localStorage.setItem("sound", soundOn ? "on" : "off"); } catch (e) {}
  showSound();
  if (soundOn) { audio(); setTimeout(() => click(true), 60); }
});

/* ---------- БЕГУЩАЯ ЛЕНТА ---------- */
function renderRibbon() {
  const ribbon = [...ME.hobbies, ...ME.skills.map(x => x[0]), ...t("ribbon")];
  $("#marquee").innerHTML = ribbon.map(w => `<span>${w}</span>`).join("").repeat(4);
}

/* ---------- ТЕМЫ ЦВЕТА (команда theme) ---------- */
const THEMES = [
  { name: { ru: "розовая", en: "pink" },     c: ["#ffb3d6", "#c4b5ff", "#ffd2b3", "#b4f3da"], g: ["#ffe6f1", "#ece4ff", "#dff7ee"] },
  { name: { ru: "мятная", en: "mint" },      c: ["#a8f0d4", "#a9d8ff", "#d8f5a8", "#ffd6e8"], g: ["#e0fbf1", "#e3f2ff", "#fff3e0"] },
  { name: { ru: "лавандовая", en: "lavender" },  c: ["#cbb8ff", "#ffb3e6", "#a8c8ff", "#f3d1ff"], g: ["#efe8ff", "#ffe6f7", "#e6efff"] },
  { name: { ru: "персиковая", en: "peach" },  c: ["#ffcba4", "#ffb3b3", "#ffe39e", "#ffd6f0"], g: ["#fff0e6", "#ffe6e6", "#fff8e0"] }
];
let themeIndex = 0;
try { themeIndex = (+localStorage.getItem("theme") || 0) % THEMES.length; } catch (e) {}
function applyTheme() {
  const t = THEMES[themeIndex], r = document.documentElement.style;
  t.c.forEach((v, i) => r.setProperty(`--c${i + 1}`, v));
  t.g.forEach((v, i) => r.setProperty(`--g${i + 1}`, v));
  try { localStorage.setItem("theme", themeIndex); } catch (e) {}
}
applyTheme();

/* ---------- КОНФЕТТИ (команда confetti и клик по имени) ---------- */
function confetti(x = innerWidth / 2, y = innerHeight / 3) {
  if (reduce) return;
  const cv = $("#confetti"), c = cv.getContext("2d");
  cv.width = innerWidth; cv.height = innerHeight;
  const colors = ["#ff9ccf", "#b9a6ff", "#8ff0c9", "#ffd27a", "#ffb3d6", "#a9d8ff"];
  const bits = Array.from({ length: 140 }, () => ({
    x, y, vx: (Math.random() - .5) * 14, vy: Math.random() * -13 - 3, g: .35 + Math.random() * .15,
    s: 5 + Math.random() * 6, r: Math.random() * 6, vr: (Math.random() - .5) * .4,
    color: colors[Math.floor(Math.random() * colors.length)]
  }));
  let frames = 0;
  (function tick() {
    c.clearRect(0, 0, cv.width, cv.height);
    bits.forEach(b => {
      b.x += b.vx; b.y += b.vy; b.vy += b.g; b.vx *= .99; b.r += b.vr;
      c.save(); c.translate(b.x, b.y); c.rotate(b.r); c.fillStyle = b.color; c.fillRect(-b.s / 2, -b.s / 4, b.s, b.s / 2); c.restore();
    });
    if (++frames < 150) requestAnimationFrame(tick); else c.clearRect(0, 0, cv.width, cv.height);
  })();
}
document.querySelector("h1").addEventListener("click", e => { confetti(e.clientX, e.clientY); click(true); });

/* ---------- ИСКОРКИ ЗА КУРСОРОМ ---------- */
if (fine && !reduce) {
  let lx = 0, ly = 0;
  const sparkColors = ["#ff9ccf", "#b9a6ff", "#8ff0c9", "#ffd27a"];
  addEventListener("mousemove", e => {
    if (Math.hypot(e.clientX - lx, e.clientY - ly) < 30) return;     // искорка каждые ~30 пикселей
    lx = e.clientX; ly = e.clientY;
    const s = document.createElement("span");
    s.className = "spark"; s.textContent = "✦";
    s.style.left = lx + "px"; s.style.top = ly + "px";
    s.style.color = sparkColors[Math.floor(Math.random() * sparkColors.length)];
    s.style.setProperty("--dx", (Math.random() * 40 - 20) + "px");
    s.addEventListener("animationend", () => s.remove());
    document.body.appendChild(s);
  });
}

/* ---------- МЕЛОЧИ ---------- */
// Часы: сколько сейчас времени у тебя (поменяй пояс и город при необходимости)
const TZ = "Asia/Vladivostok", CITY = "Во Владивостоке";
function tickClock() {
  $("#clock").textContent = `${t("clock")} ${new Date().toLocaleTimeString(lang === "ru" ? "ru-RU" : "en-GB", { hour: "2-digit", minute: "2-digit", timeZone: TZ })}`;
}
tickClock(); setInterval(tickClock, 20000);

// Название вкладки меняется, когда на неё не смотрят
document.addEventListener("visibilitychange", () => {
  document.title = document.hidden ? t("away") : t("pageTitle");
});


/* ---------- ТАЙМЛАЙН: появление карточек и заполнение линии ---------- */
const tlObserver = new IntersectionObserver(entries => entries.forEach(en => {
  if (en.isIntersecting) { en.target.classList.add("in"); tlObserver.unobserve(en.target); }
}), { threshold: 0.25 });

function renderTimeline() {
  $("#tl").innerHTML = ME.timeline.map(e =>
    `<li class="tl-item${e.now ? " now" : ""}"><span class="tl-dot"></span><div class="tl-card"><span class="tl-date">${e.date}</span><h3>${e.title}</h3><p>${e.text}</p></div></li>`
  ).join("");
  document.querySelectorAll(".tl-item").forEach(el => tlObserver.observe(el));
}
function tlProgress() {                                   // цветная линия «дорастает» по мере прокрутки
  const r = $(".tl-wrap").getBoundingClientRect();
  const p = reduce ? 1 : Math.min(1, Math.max(0, (innerHeight * 0.6 - r.top) / r.height));
  $("#tlFill").style.transform = `scaleY(${p})`;
}
addEventListener("scroll", tlProgress, { passive: true });

/* ---------- ЯЗЫК RU / EN ---------- */
function renderName() {                                    // имя снова выезжает по буквам на новом языке
  const parts = ME.name.split(" "); let k = 0;
  document.querySelectorAll("h1 .line").forEach((el, i) => {
    el.innerHTML = [...(parts[i] || "")].map(ch => `<span class="ch" style="--i:${k++}">${ch}</span>`).join("");
  });
  $("h1").setAttribute("aria-label", ME.name);
  document.body.classList.remove("loaded");
  requestAnimationFrame(() => setTimeout(() => document.body.classList.add("loaded"), 60));
}

function setLang(l, announce = false) {
  lang = l;
  try { localStorage.setItem("lang", l); } catch (e) {}
  Object.assign(ME, ME_RU, l === "en" ? ME_EN : {});       // подменяем данные на нужный язык
  Object.assign(DESC, DESC_T[l]);
  document.documentElement.lang = l;
  document.title = t("pageTitle");
  document.querySelector('meta[name="description"]').content = t("metaDesc");
  document.querySelectorAll("[data-i18n]").forEach(el => { el.innerHTML = t(el.dataset.i18n); });
  $("#lang").textContent = l === "ru" ? "EN" : "RU";
  renderName(); renderStack(); renderRibbon(); renderTimeline(); tickClock(); tlProgress();
  if (announce) { out.innerHTML = ""; print(t("langSet")); print(commands.help()); }
}
$("#lang").addEventListener("click", () => { setLang(lang === "ru" ? "en" : "ru", true); click(true); });
setLang(lang);