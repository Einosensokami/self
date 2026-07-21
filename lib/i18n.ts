export type Lang = "zh" | "en";

export type Dictionary = {
  brand: string;
  "nav.about": string;
  "nav.skills": string;
  "nav.experience": string;
  "nav.contact": string;
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
    "nav.skills": "專長",
    "nav.experience": "經歷",
    "nav.contact": "聯絡",
    "hero.eyebrow": "AI APPLICATION PLANNER · TAIWAN",
    "hero.title": "我是 Einosensokami，專注於 AI 應用規劃、工作流程設計與實作。",
    "hero.subtitle": "",
    "hero.ctaPrimary": "認識我的專長",
    "hero.ctaSecondary": "聯絡我",
    "about.label": "01 / ABOUT",
    "about.title": "從想法到可行方案，\n讓技術為人服務。",
    "about.body": "我喜歡站在需求與技術之間，拆解問題、設計流程，並用 AI 工具打造更簡潔可靠的解法。",
    "skills.label": "02 / EXPERTISE",
    "skills.title": "專長與工具",
    "skills.subtitle": "以產品思維串連 AI、程式與自動化工作流程。",
    "experience.label": "03 / EXPERIENCE",
    "experience.title": "正在累積的路徑",
    "experience.e1.period": "2025 — 現在",
    "experience.e1.role": "人工智慧應用工程學士班",
    "experience.e1.org": "國立臺中科技大學",
    "experience.e1.desc": "投入資訊技術、AI 應用與軟體工程的學習與實作。",
    "experience.e2.period": "2026 夏季",
    "experience.e2.role": "教學助理",
    "experience.e2.org": "智慧物流青年 AI 實作培訓",
    "experience.e2.desc": "協助學員完成 AI 實作專題，並提供演算法應用與開發方向的引導。",
    "contact.label": "04 / CONTACT",
    "contact.title": "一起做點有意思的事。",
    "contact.body": "無論是合作、交流，或只是想聊聊 AI 與產品，歡迎來信。",
    "contact.cta": "寄一封信給我",
    "footer.note": "Designed and built by Einosensokami.",
  },
  en: {
    brand: "Einosensokami",
    "nav.about": "About",
    "nav.skills": "Expertise",
    "nav.experience": "Experience",
    "nav.contact": "Contact",
    "hero.eyebrow": "AI APPLICATION PLANNER · TAIWAN",
    "hero.title": "I’m Einosensokami — focused on AI application planning, workflow design, and implementation.",
    "hero.subtitle": "",
    "hero.ctaPrimary": "Explore expertise",
    "hero.ctaSecondary": "Get in touch",
    "about.label": "01 / ABOUT",
    "about.title": "From an idea to a practical path,\nwith technology in service of people.",
    "about.body": "I work between human needs and technology: framing problems, designing workflows, and building simpler, more reliable solutions with AI.",
    "skills.label": "02 / EXPERTISE",
    "skills.title": "Tools of the trade",
    "skills.subtitle": "Connecting AI, code, and automation with a product mindset.",
    "experience.label": "03 / EXPERIENCE",
    "experience.title": "A path in progress",
    "experience.e1.period": "2025 — Present",
    "experience.e1.role": "B.S. Program, AI Application Engineering",
    "experience.e1.org": "National Taichung University of Science and Technology",
    "experience.e1.desc": "Studying information technology, AI applications, and hands-on software engineering.",
    "experience.e2.period": "Summer 2026",
    "experience.e2.role": "Teaching Assistant",
    "experience.e2.org": "Smart Logistics Youth AI Practical Training",
    "experience.e2.desc": "Supported learners on AI projects with guidance on development and applied algorithms.",
    "contact.label": "04 / CONTACT",
    "contact.title": "Let’s make something meaningful.",
    "contact.body": "For a collaboration, an exchange of ideas, or a conversation about AI and products — my inbox is open.",
    "contact.cta": "Send me an email",
    "footer.note": "Designed and built by Einosensokami.",
  },
};

export const defaultLang: Lang = "zh";
export const supportedLangs: Lang[] = ["zh", "en"];
