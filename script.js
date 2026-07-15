/* ============================================================
   自我介紹網站 · script.js
   - 中英雙語切換
   - Header scroll 樣式
   - 手機版選單
   - Scroll reveal
   ============================================================ */

/* ---------- 1. 翻譯字典 ----------
   集中管理所有需要國際化的字串。
   key 路徑用「.」分隔，對應 HTML 中 data-i18n="key"。
--------------------------------- */
const translations = {
  zh: {
    brand: "永恆戰神 Einosensokami",
    "nav.skills": "技能",
    "nav.projects": "作品",
    "nav.experience": "經歷",
    "nav.contact": "聯絡",

    "hero.eyebrow": "嗨，你好，我是",
    "hero.name": "吳秉翔",
    "hero.subtitle": "AI應用規劃師",
    "hero.ctaPrimary": "看我的技能",
    "hero.ctaSecondary": "與我聯絡",
    "hero.controls": "控制面板 (H)",

    "panel.title": "網格控制",
    "panel.rows": "行數",
    "panel.cols": "列數",
    "panel.spacing": "間距",
    "panel.duration": "週期 (秒)",
    "panel.animation": "動畫類型",
    "panel.animation.pulse": "由中心脈動",
    "panel.animation.wave": "波紋",
    "panel.animation.random": "隨機",
    "panel.pulseEffect": "脈動效果",
    "panel.mouseGlow": "滑鼠發光",
    "panel.opacityMin": "最小透明度",
    "panel.opacityMax": "最大透明度",
    "panel.randomize": "隨機組合 (R)",
    "panel.close": "關閉 (H)",

    "skills.title": "技能與專長",
    "skills.subtitle": "我專注於以 AI 工具進行開發、規劃與日常工作流優化。",
    "skills.frontend": "AI 應用開發",
    "skills.backend": "AI 生產力工具",
    "skills.tools": "提示工程與規劃",
    "skills.soft": "協作與管理",
    "skills.soft1": "跨領域溝通",
    "skills.soft2": "AI 知識庫管理",
    "skills.soft3": "需求分析與產品規劃",

    "projects.title": "作品集",
    "projects.subtitle": "近期做過、喜歡的幾個專案。",
    "projects.viewDemo": "看 Demo →",
    "projects.viewCode": "原始碼 →",
    "projects.p1.title": "作品標題一",
    "projects.p1.desc": "簡短描述這個作品在做什麼、你負責的部分、解決了什麼問題。",
    "projects.p2.title": "作品標題二",
    "projects.p2.desc": "第二個作品的簡述。這裡可以是 side project、open source 或工作專案。",
    "projects.p3.title": "作品標題三",
    "projects.p3.desc": "第三個作品。挑選你最滿意的三到六個，最有代表性的放前面。",

    "exp.title": "經歷",
    "exp.subtitle": "走過的路。",
    "exp.e1.role": "人工智慧應用工程學士學位學程 (就讀中)",
    "exp.e1.org": "國立臺中科技大學",
    "exp.e1.desc": "專注於資訊技術、人工智慧應用及相關學科學習。",
    "exp.e2.role": "助教",
    "exp.e2.org": "智慧物流青年AI實戰養成班",
    "exp.e2.desc": "協助學員進行 AI 實戰專案開發與演算法應用指導。",

    "contact.title": "與我聯絡",
    "contact.subtitle": "想合作、聊聊天，或只是想打聲招呼 — 都歡迎。",

    "footer.rights": "All rights reserved.",
    "footer.note": "用純 HTML / CSS / JS 手作 · 無框架、無建置工具。",
  },

  en: {
    brand: "永恆戰神 Einosensokami",
    "nav.skills": "Skills",
    "nav.projects": "Work",
    "nav.experience": "Experience",
    "nav.contact": "Contact",

    "hero.eyebrow": "Hi, I'm",
    "hero.name": "吳秉翔 (John Wu)",
    "hero.subtitle": "AI Application Planner",
    "hero.ctaPrimary": "See my skills",
    "hero.ctaSecondary": "Get in touch",
    "hero.controls": "Controls (H)",

    "panel.title": "Grid Controls",
    "panel.rows": "Rows",
    "panel.cols": "Columns",
    "panel.spacing": "Spacing",
    "panel.duration": "Duration (s)",
    "panel.animation": "Animation Type",
    "panel.animation.pulse": "Pulse from Center",
    "panel.animation.wave": "Wave",
    "panel.animation.random": "Random",
    "panel.pulseEffect": "Pulse Effect",
    "panel.mouseGlow": "Mouse Glow",
    "panel.opacityMin": "Opacity Min",
    "panel.opacityMax": "Opacity Max",
    "panel.randomize": "Randomize (R)",
    "panel.close": "Close (H)",

    "skills.title": "Skills",
    "skills.subtitle": "Focusing on AI-driven development, optimization, and workflow planning.",
    "skills.frontend": "AI App Development",
    "skills.backend": "AI Productivity Tools",
    "skills.tools": "Prompting & Planning",
    "skills.soft": "Collaboration & Mgmt",
    "skills.soft1": "Cross-domain Communication",
    "skills.soft2": "AI Knowledge Bases",
    "skills.soft3": "Requirements & Product Planning",

    "projects.title": "Selected work",
    "projects.subtitle": "A few things I've built recently that I'm proud of.",
    "projects.viewDemo": "Live demo →",
    "projects.viewCode": "Source →",
    "projects.p1.title": "Project one",
    "projects.p1.desc": "What it does, what your role was, and the problem it solved.",
    "projects.p2.title": "Project two",
    "projects.p2.desc": "Could be a side project, OSS contribution, or work project — your call.",
    "projects.p3.title": "Project three",
    "projects.p3.desc": "Three to six projects, ordered with the strongest first.",

    "exp.title": "Experience",
    "exp.subtitle": "The path so far.",
    "exp.e1.role": "Bachelor Degree Program of Artificial Intelligence Application Engineering (Enrolled)",
    "exp.e1.org": "National Taichung University of Science and Technology",
    "exp.e1.desc": "Focusing on information technology, AI applications, and related software engineering studies.",
    "exp.e2.role": "Teaching Assistant",
    "exp.e2.org": "Smart Logistics Youth AI Practical Training Program",
    "exp.e2.desc": "Assisted students with AI practical project development and algorithm application guidance.",

    "contact.title": "Get in touch",
    "contact.subtitle": "For collaborations, a chat, or just to say hi — my inbox is open.",

    "footer.rights": "All rights reserved.",
    "footer.note": "Hand-crafted with plain HTML / CSS / JS. No framework, no build step.",
  },
};

/* ---------- 2. 套用翻譯 ---------- */
function applyTranslations(lang) {
  const dict = translations[lang];
  if (!dict) return;

  // 更新所有 data-i18n 元素
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  // 更新 <html> lang 屬性（影響瀏覽器內建行為 + 螢幕閱讀器）
  document.documentElement.lang = lang === "zh" ? "zh-Hant" : "en";

  // 切換按鈕狀態
  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    const active = btn.getAttribute("data-lang-btn") === lang;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-pressed", String(active));
  });

  // 儲存偏好
  localStorage.setItem("preferred-lang", lang);
}

/* ---------- 3. 語言切換處理 ---------- */
function setupLanguageToggle() {
  // 點擊切換
  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang-btn");
      applyTranslations(lang);
    });
  });

  // 讀取上次偏好（預設中文）
  const saved = localStorage.getItem("preferred-lang") || "zh";
  applyTranslations(saved);
}

/* ---------- 4. Header 在捲動時加邊框 ---------- */
function setupHeaderOnScroll() {
  const header = document.querySelector(".site-header");
  if (!header) return;
  const onScroll = () => {
    header.classList.toggle("scrolled", window.scrollY > 4);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ---------- 5. 手機版選單 ---------- */
function setupMobileMenu() {
  const toggle = document.querySelector(".menu-toggle");
  if (!toggle) return;

  toggle.addEventListener("click", () => {
    const open = document.body.classList.toggle("menu-open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "關閉選單" : "開啟選單");
  });

  // 點擊選單後自動關閉
  document.querySelectorAll(".site-nav a").forEach((a) => {
    a.addEventListener("click", () => {
      document.body.classList.remove("menu-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* ---------- 6. Scroll reveal ---------- */
function setupScrollReveal() {
  const targets = document.querySelectorAll(
    ".section-head, .skill-group, .project-card, .timeline li, .social-list li"
  );
  targets.forEach((el) => el.classList.add("reveal"));

  if (!("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("visible"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  targets.forEach((el) => io.observe(el));
}

/* ---------- 7. Footer 年份 ---------- */
function setupFooterYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

/* ---------- 8. DataGridHero · 動態網格 ----------
   復刻 data-grid-hero.tsx 的效果：
   - rows × cols 網格，cell 顏色與透明度由 cfg 決定
   - 三種 pulse 模式：pulse（由中心向外）、wave（斜角波紋）、random
   - 滑鼠發光追蹤
   - 控制面板（sliders + toggle + select）
   - 鍵盤快捷鍵 H（開關面板）/ R（隨機）
----------------------------------------- */
function setupDataGridHero() {
  const hero = document.querySelector(".data-grid-hero");
  if (!hero) return;

  const grid = document.getElementById("hero-bg-grid");
  const mouseGlow = document.getElementById("hero-mouse-glow");
  const panel = document.getElementById("hero-control-panel");
  const toggle = document.getElementById("hero-controls-toggle");
  if (!grid || !panel || !toggle) return;

  // 預設設定
  const cfg = {
    rows: 25,
    cols: 35,
    spacing: 4,
    duration: 5,
    color: "hsl(150, 100%, 50%)",
    animationType: "pulse",
    pulseEffect: true,
    mouseGlow: true,
    opacityMin: 0.05,
    opacityMax: 0.6,
  };

  // ---- 工具 ----
  const rand = (min, max) => Math.random() * (max - min) + min;

  // 依照 cfg 把每個 cell 加上 --delay / --duration / --opacity-* 變數
  function buildGrid() {
    grid.style.gridTemplateColumns = `repeat(${cfg.cols}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${cfg.rows}, 1fr)`;
    grid.style.gap = `${cfg.spacing}px`;
    grid.style.color = cfg.color;

    const centerRow = Math.floor(cfg.rows / 2);
    const centerCol = Math.floor(cfg.cols / 2);
    const frag = document.createDocumentFragment();

    for (let r = 0; r < cfg.rows; r++) {
      for (let c = 0; c < cfg.cols; c++) {
        const cell = document.createElement("div");
        cell.className = "grid-cell";

        if (cfg.pulseEffect) {
          let delay;
          if (cfg.animationType === "wave") {
            delay = (r + c) * 0.1;
          } else if (cfg.animationType === "random") {
            delay = Math.random() * cfg.duration;
          } else {
            // pulse: 由中心向外
            const dr = Math.abs(r - centerRow);
            const dc = Math.abs(c - centerCol);
            delay = Math.sqrt(dr * dr + dc * dc) * 0.2;
          }
          cell.style.setProperty("--delay", `${delay.toFixed(3)}s`);
          cell.style.setProperty("--duration", `${cfg.duration}s`);
          cell.style.setProperty("--opacity-min", String(cfg.opacityMin));
          cell.style.setProperty("--opacity-max", String(cfg.opacityMax));
        } else {
          cell.classList.add("no-pulse");
          cell.style.setProperty("--opacity-min", String(cfg.opacityMin));
        }

        frag.appendChild(cell);
      }
    }
    grid.replaceChildren(frag);
  }

  // 把 cfg 同步回 UI（給隨機 / 雙語切換後初始化用）
  function syncUIToCfg() {
    panel.querySelectorAll("[data-key]").forEach((el) => {
      const key = el.dataset.key;
      if (el.tagName === "INPUT" && el.type === "range") {
        el.value = cfg[key];
      } else if (el.tagName === "SELECT") {
        el.value = cfg[key];
      } else if (el.getAttribute("role") === "switch") {
        el.setAttribute("aria-checked", String(!!cfg[key]));
      }
    });
    // 同步數字顯示
    panel.querySelectorAll("[data-display]").forEach((el) => {
      const key = el.dataset.display;
      const v = cfg[key];
      const decimals =
        key === "duration" || key === "opacityMin" || key === "opacityMax" ? 2 : 0;
      el.textContent = Number(v).toFixed(decimals);
    });
  }

  function setMouseGlowOpacity() {
    if (!mouseGlow) return;
    mouseGlow.style.setProperty(
      "--mouse-glow-opacity",
      cfg.mouseGlow ? "1" : "0"
    );
  }

  // ---- 滑鼠發光追蹤 ----
  if (mouseGlow) {
    hero.addEventListener("mousemove", (e) => {
      const rect = hero.getBoundingClientRect();
      mouseGlow.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
      mouseGlow.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
    });
  }

  // ---- 控制面板開關 ----
  function openPanel() {
    panel.hidden = false;
    toggle.setAttribute("aria-expanded", "true");
  }
  function closePanel() {
    panel.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
  }
  function togglePanel() {
    panel.hidden ? openPanel() : closePanel();
  }

  toggle.addEventListener("click", togglePanel);
  const closeBtn1 = document.getElementById("hero-panel-close");
  const closeBtn2 = document.getElementById("hero-panel-close-2");
  if (closeBtn1) closeBtn1.addEventListener("click", closePanel);
  if (closeBtn2) closeBtn2.addEventListener("click", closePanel);

  // ---- 滑桿 / 下拉 / 開關 接線 ----
  panel.querySelectorAll('input[type="range"][data-key]').forEach((input) => {
    const key = input.dataset.key;
    const decimals =
      key === "duration" || key === "opacityMin" || key === "opacityMax" ? 2 : 0;

    input.addEventListener("input", (e) => {
      const val = parseFloat(e.target.value);
      cfg[key] = val;
      const display = panel.querySelector(`[data-display="${key}"]`);
      if (display) display.textContent = val.toFixed(decimals);
      buildGrid();
    });
  });

  panel.querySelectorAll("select[data-key]").forEach((sel) => {
    sel.addEventListener("change", (e) => {
      cfg[sel.dataset.key] = e.target.value;
      buildGrid();
    });
  });

  panel.querySelectorAll('button[role="switch"][data-key]').forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.key;
      cfg[key] = !cfg[key];
      btn.setAttribute("aria-checked", String(cfg[key]));
      if (key === "mouseGlow") setMouseGlowOpacity();
      buildGrid();
    });
  });

  // ---- 隨機化 ----
  function randomize() {
    const colors = [
      "hsl(150, 100%, 50%)",
      "hsl(300, 100%, 70%)",
      "hsl(180, 100%, 60%)",
      "hsl(50, 100%, 60%)",
      "hsl(25, 100%, 60%)",
    ];
    const anims = ["pulse", "wave", "random"];
    cfg.rows = Math.floor(rand(15, 40));
    cfg.cols = Math.floor(rand(15, 40));
    cfg.spacing = Math.floor(rand(2, 8));
    cfg.duration = Number(rand(3, 10).toFixed(1));
    cfg.color = colors[Math.floor(Math.random() * colors.length)];
    cfg.animationType = anims[Math.floor(Math.random() * anims.length)];
    cfg.pulseEffect = Math.random() > 0.2;
    cfg.mouseGlow = Math.random() > 0.3;
    cfg.opacityMin = Number(rand(0.05, 0.2).toFixed(2));
    cfg.opacityMax = Number(rand(0.5, 1.0).toFixed(2));
    syncUIToCfg();
    setMouseGlowOpacity();
    buildGrid();
  }
  const randBtn = document.getElementById("hero-randomize");
  if (randBtn) randBtn.addEventListener("click", randomize);

  // ---- 鍵盤快捷鍵 ----
  window.addEventListener("keydown", (e) => {
    const tag = (e.target.tagName || "").toLowerCase();
    if (tag === "input" || tag === "select" || tag === "textarea") return;
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    const k = e.key.toLowerCase();
    if (k === "h") {
      e.preventDefault();
      togglePanel();
    } else if (k === "r") {
      e.preventDefault();
      randomize();
    }
  });

  // ---- 初始化 ----
  syncUIToCfg();
  setMouseGlowOpacity();
  buildGrid();
}

/* ---------- 初始化 ---------- */
document.addEventListener("DOMContentLoaded", () => {
  setupLanguageToggle();
  setupHeaderOnScroll();
  setupMobileMenu();
  setupScrollReveal();
  setupFooterYear();
  setupDataGridHero();
});
