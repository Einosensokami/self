export type Lang = "zh" | "en";

export type Dictionary = {
  brand: string;
  "nav.skills": string;
  "nav.experience": string;
  "nav.contact": string;

  "hero.eyebrow": string;
  "hero.name": string;
  "hero.subtitle": string;
  "hero.ctaPrimary": string;
  "hero.ctaSecondary": string;
  "hero.controls": string;
  "hero.desc": string;
  "hero.title": string;

  "panel.title": string;
  "panel.rows": string;
  "panel.cols": string;
  "panel.spacing": string;
  "panel.duration": string;
  "panel.animation": string;
  "panel.animation.pulse": string;
  "panel.animation.wave": string;
  "panel.animation.random": string;
  "panel.pulseEffect": string;
  "panel.mouseGlow": string;
  "panel.opacityMin": string;
  "panel.opacityMax": string;
  "panel.randomize": string;
  "panel.close": string;

  "skills.title": string;
  "skills.subtitle": string;
  "skills.frontend": string;
  "skills.backend": string;
  "skills.tools": string;
  "skills.soft": string;
  "skills.soft1": string;
  "skills.soft2": string;
  "skills.soft3": string;

  "exp.title": string;
  "exp.subtitle": string;
  "exp.e1.role": string;
  "exp.e1.org": string;
  "exp.e1.desc": string;
  "exp.e2.role": string;
  "exp.e2.org": string;
  "exp.e2.desc": string;

  "contact.title": string;
  "contact.subtitle": string;

  "footer.rights": string;
  "footer.note": string;
};

export const dictionaries: Record<Lang, Dictionary> = {
  zh: {
    brand: "永恆戰神 Einosensokami",

    "nav.skills": "技能",
    "nav.experience": "經歷",
    "nav.contact": "聯絡",

    "hero.eyebrow": "嗨，你好，我是",
    "hero.name": "吳秉翔",
    "hero.subtitle": "AI應用規劃師",
    "hero.title": "DataGrid Hero",
    "hero.desc":
      "一個生成式、互動式的 hero 元件，使用 React 打造。可透過控制面板即時調整網格動畫。",
    "hero.ctaPrimary": "看我的技能",
    "hero.ctaSecondary": "與我聯絡",
    "hero.controls": "控制面板 (H)",

    "panel.title": "網格控制",
    "panel.rows": "行數",
    "panel.cols": "列數",
    "panel.spacing": "間距",
    "panel.duration": "週期（秒）",
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
    "footer.note": "Built with Next.js + shadcn/ui + Tailwind CSS.",
  },

  en: {
    brand: "永恆戰神 Einosensokami",

    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.contact": "Contact",

    "hero.eyebrow": "Hi, I'm",
    "hero.name": "吳秉翔 (John Wu)",
    "hero.subtitle": "AI Application Planner",
    "hero.title": "DataGrid Hero",
    "hero.desc":
      "A generative, interactive hero component built with React. Customize the grid animation using the control panel.",
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
    "skills.subtitle":
      "Focusing on AI-driven development, optimization, and workflow planning.",
    "skills.frontend": "AI App Development",
    "skills.backend": "AI Productivity Tools",
    "skills.tools": "Prompting & Planning",
    "skills.soft": "Collaboration & Mgmt",
    "skills.soft1": "Cross-domain Communication",
    "skills.soft2": "AI Knowledge Bases",
    "skills.soft3": "Requirements & Product Planning",

    "exp.title": "Experience",
    "exp.subtitle": "The path so far.",
    "exp.e1.role":
      "Bachelor Degree Program of Artificial Intelligence Application Engineering (Enrolled)",
    "exp.e1.org": "National Taichung University of Science and Technology",
    "exp.e1.desc":
      "Focusing on information technology, AI applications, and related software engineering studies.",
    "exp.e2.role": "Teaching Assistant",
    "exp.e2.org": "Smart Logistics Youth AI Practical Training Program",
    "exp.e2.desc":
      "Assisted students with AI practical project development and algorithm application guidance.",

    "contact.title": "Get in touch",
    "contact.subtitle":
      "For collaborations, a chat, or just to say hi — my inbox is open.",

    "footer.rights": "All rights reserved.",
    "footer.note": "Built with Next.js + shadcn/ui + Tailwind CSS.",
  },
};

export const defaultLang: Lang = "zh";
export const supportedLangs: Lang[] = ["zh", "en"];
