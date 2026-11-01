export type Lang = "zh" | "en";

export type Dictionary = {
  brand: string;
  "nav.about": string;
  "nav.skills": string;
  "nav.experience": string;
  "nav.contact": string;
  "nav.card": string;
  "hero.eyebrow": string;
  "hero.title": string;
  "hero.subtitle": string;
  "hero.ctaPrimary": string;
  "hero.ctaSecondary": string;
  "about.label": string;
  "about.title": string;
  "about.body": string;
  "skills.label": string;
  "skills.title": string;
  "skills.subtitle": string;
  "projects.viewAll": string;
  "games.label": string;
  "experience.label": string;
  "experience.title": string;
  "experience.e1.period": string;
  "experience.e1.role": string;
  "experience.e1.org": string;
  "experience.e1.desc": string;
  "experience.e2.period": string;
  "experience.e2.role": string;
  "experience.e2.org": string;
  "experience.e2.desc": string;
  "experience.e2.link1.title": string;
  "experience.e2.link2.title": string;
  "contact.label": string;
  "contact.title": string;
  "contact.body": string;
  "contact.cta": string;
  "footer.note": string;
};

export const dictionaries: Record<Lang, Dictionary> = {
  zh: {
    brand: "Einosensokami",
    "nav.about": "關於我",
    "nav.skills": "專案",
    "nav.experience": "經歷",
    "nav.contact": "聯絡",
    "nav.card": "交流名片",
    "hero.eyebrow": "AI APPLICATION PLANNER · TAIWAN",
    "hero.title": "我是 Einosensokami。",
    "hero.subtitle": "從 AI Agent、產品原型到開發工具，把想法做成能實際操作的作品。",
    "hero.ctaPrimary": "看看我的專案",
    "hero.ctaSecondary": "聯絡我",
    "about.label": "00 / ABOUT",
    "about.title": "從想法到可行方案，\n讓技術為人服務。",
    "about.body": "我喜歡站在需求與技術之間，拆解問題、設計流程，再把解法做出來。近期實作涵蓋 AI Agent 風控與 MCP 整合、LINE 服務原型、Python 資料分析，以及讓日常開發更順手的 VS Code 與 Windows 工具。",
    "skills.label": "01 / PROJECTS",
    "skills.title": "在 GitHub 上實作的想法",
    "skills.subtitle": "從 AI 與資料，到產品與桌面工具。以下依公開 repo 文件整理，完整作品與最新進度可至 GitHub 查看。",
    "projects.viewAll": "查看全部 GitHub repositories",
    "games.label": "02 / 喜歡的遊戲",
    "experience.label": "03 / EXPERIENCE",
    "experience.title": "正在累積的路徑",
    "experience.e1.period": "2025 — 現在",
    "experience.e1.role": "人工智慧應用工程學士班",
    "experience.e1.org": "國立臺中科技大學",
    "experience.e1.desc": "投入資訊技術、AI 應用與軟體工程的學習與實作。",
    "experience.e2.period": "2026 夏季",
    "experience.e2.role": "教學助理 (TA)",
    "experience.e2.org": "青年 AI 實戰養成班 · 智慧物流班（工研院服科中心）",
    "experience.e2.desc": "擔任實戰養成班教學助理，協助學員完成 AI 物流與演算法實作專題開發。",
    "experience.e2.link1.title": "養成班官網",
    "experience.e2.link2.title": "學員專題成果展",
    "contact.label": "04 / CONTACT",
    "contact.title": "一起做點有意思的事。",
    "contact.body": "無論是合作、交流，或只是想聊聊 AI 與產品，歡迎來信。",
    "contact.cta": "寄一封信給我",
    "footer.note": "Designed and built by Einosensokami.",
  },
  en: {
    brand: "Einosensokami",
    "nav.about": "About",
    "nav.skills": "Projects",
    "nav.experience": "Experience",
    "nav.contact": "Contact",
    "nav.card": "Card",
    "hero.eyebrow": "AI APPLICATION PLANNER · TAIWAN",
    "hero.title": "I’m Einosensokami.",
    "hero.subtitle": "Turning ideas into working projects, from AI agents and product prototypes to developer tools.",
    "hero.ctaPrimary": "Explore my projects",
    "hero.ctaSecondary": "Get in touch",
    "about.label": "00 / ABOUT",
    "about.title": "From an idea to a practical path,\nwith technology in service of people.",
    "about.body": "I work between human needs and technology: framing problems, designing workflows, and building practical solutions. My recent projects span AI agent payment controls, MCP integrations, LINE service prototypes, Python data analysis, and VS Code and Windows utilities that make everyday development easier.",
    "skills.label": "01 / PROJECTS",
    "skills.title": "Ideas built on GitHub",
    "skills.subtitle": "AI, data, products, and desktop tools, curated from public repository documentation. Visit GitHub for the full collection and latest progress.",
    "projects.viewAll": "View all GitHub repositories",
    "games.label": "02 / FAVORITE GAMES",
    "experience.label": "03 / EXPERIENCE",
    "experience.title": "A path in progress",
    "experience.e1.period": "2025 — Present",
    "experience.e1.role": "B.S. Program, AI Application Engineering",
    "experience.e1.org": "National Taichung University of Science and Technology",
    "experience.e1.desc": "Studying information technology, AI applications, and hands-on software engineering.",
    "experience.e2.period": "Summer 2026",
    "experience.e2.role": "Teaching Assistant (TA)",
    "experience.e2.org": "Youth AI Practical Training · Smart Logistics (ITRI SSTC)",
    "experience.e2.desc": "Guided learners through hands-on AI logistics projects, algorithm development, and practical implementations.",
    "experience.e2.link1.title": "Program Page",
    "experience.e2.link2.title": "Student Projects Showcase",
    "contact.label": "04 / CONTACT",
    "contact.title": "Let’s make something meaningful.",
    "contact.body": "For a collaboration, an exchange of ideas, or a conversation about AI and products — my inbox is open.",
    "contact.cta": "Send me an email",
    "footer.note": "Designed and built by Einosensokami.",
  },
};

export const defaultLang: Lang = "zh";
export const supportedLangs: Lang[] = ["zh", "en"];
