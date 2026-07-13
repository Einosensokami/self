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
    "hero.ctaPrimary": "看我的作品",
    "hero.ctaSecondary": "與我聯絡",

    "skills.title": "技能與專長",
    "skills.subtitle": "我熟悉並且經常使用的工具與技術。",
    "skills.frontend": "前端",
    "skills.backend": "後端",
    "skills.tools": "工具與流程",
    "skills.soft": "軟實力",
    "skills.soft1": "跨團隊溝通",
    "skills.soft2": "專案管理",
    "skills.soft3": "技術寫作",

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
    "exp.e1.role": "助教",
    "exp.e1.org": "智慧物流青年AI實戰養成班",
    "exp.e1.desc": "協助學員進行 AI 實戰專案開發與演算法應用指導。",

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
    "hero.ctaPrimary": "See my work",
    "hero.ctaSecondary": "Get in touch",

    "skills.title": "Skills",
    "skills.subtitle": "Tools and technologies I work with day to day.",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.tools": "Tooling",
    "skills.soft": "Soft skills",
    "skills.soft1": "Cross-team communication",
    "skills.soft2": "Project management",
    "skills.soft3": "Technical writing",

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
    "exp.e1.role": "Teaching Assistant",
    "exp.e1.org": "Smart Logistics Youth AI Practical Training Program",
    "exp.e1.desc": "Assisted students with AI practical project development and algorithm application guidance.",

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

/* ---------- 初始化 ---------- */
document.addEventListener("DOMContentLoaded", () => {
  setupLanguageToggle();
  setupHeaderOnScroll();
  setupMobileMenu();
  setupScrollReveal();
  setupFooterYear();
});
