import type { Lang } from "@/lib/i18n";

type Project = {
  repo: string;
  url?: string;
  name: Record<Lang, string>;
  description: Record<Lang, string>;
  stack: string;
  category: string;
};

// Project summaries are curated from the repositories' README files.
// Forks are excluded: a fork alone does not establish a contribution.
export const projects: Project[] = [
  {
    repo: "sitecompass",
    url: "https://sitecompass.tunai0511edu.workers.dev",
    name: { zh: "址南針 SiteCompass", en: "SiteCompass · Storefront Intelligence" },
    description: {
      zh: "榮獲 2026 第 31 屆 InnoServe 商業治理 AI 創新組第一名。整合商工登記、稅籍與人口等開放資料，建立店面門牌履歷並估算三年收店風險，協助創業者在簽約前評估選址。",
      en: "First Place, 2026 InnoServe Commercial Governance AI Innovation. Combines business-registration, tax, and population data to build storefront histories and estimate three-year closure risk before a lease is signed.",
    },
    stack: "TypeScript · React 19 · MapLibre GL · Cloudflare Workers · AI Agents",
    category: "INNOSERVE 2026 · FIRST PLACE",
  },
  {
    repo: "cathay-intent-sentinel",
    name: { zh: "Cathay IntentSentinel 國泰意圖哨兵", en: "Cathay IntentSentinel" },
    description: {
      zh: "為 AI Agent 支付設計的風控閘道，結合預算與商戶政策檢查、隔離簽章、x402 支付及 STIX 威脅情資，並提供 MCP 整合。",
      en: "A policy gateway for AI agent payments, combining budget and merchant checks, isolated signing, x402 payments, STIX threat intelligence, and MCP integration.",
    },
    stack: "TypeScript · React · Node.js · MCP · x402",
    category: "AGENT SECURITY",
  },
  {
    repo: "wanchun-market-link",
    name: { zh: "萬春・廟口通", en: "Wanchun Market Link" },
    description: {
      zh: "LINE AI 創新創業競賽示範原型，以文化導覽、情境推薦、領券與店家核銷串起廟口探索體驗；使用虛構店家與優惠資料。",
      en: "A LINE AI competition prototype connecting cultural guides, contextual recommendations, coupons, and merchant redemption, using fictional merchants and offers.",
    },
    stack: "TypeScript · LINE MINI App · Supabase",
    category: "PRODUCT PROTOTYPE",
  },
  {
    repo: "secondary-sidebar-terminal",
    name: { zh: "Secondary Sidebar Terminal", en: "Secondary Sidebar Terminal" },
    description: {
      zh: "VS Code 擴充套件，將原生終端機開在右側編輯器群組，保留底部終端機，讓 AI CLI、測試與開發指令能並行使用。",
      en: "A VS Code extension that opens native terminals in a right-hand editor group while keeping the bottom terminal available for tests and other commands.",
    },
    stack: "JavaScript · VS Code Extension API",
    category: "DEVELOPER TOOLS",
  },
  {
    repo: "phone-audio-receiver",
    name: { zh: "手機音訊接收器", en: "Phone Audio Receiver" },
    description: {
      zh: "以 PowerShell 製作 Windows 手機音訊接收工具，提供 ShairportQt AirPlay 啟動器與藍牙接收介面，將手機聲音送到電腦播放。",
      en: "A Windows utility with a ShairportQt AirPlay launcher and a Bluetooth receiver interface, built with PowerShell to play phone audio through a computer.",
    },
    stack: "PowerShell · Windows · AirPlay · Bluetooth",
    category: "DESKTOP UTILITIES",
  },
  {
    repo: "windows-computer-use-mcp",
    name: { zh: "Windows Computer Use MCP", en: "Windows Computer Use MCP" },
    description: {
      zh: "無額外 npm 依賴的本機 MCP 伺服器，提供桌面截圖、視窗查詢及應用程式白名單控制，串接支援 stdio MCP 的 AI 開發工具。",
      en: "A local MCP server with no npm dependencies, offering screenshots, window inspection, and allowlisted application control for AI tools that support stdio MCP.",
    },
    stack: "JavaScript · Node.js · MCP · Windows",
    category: "AI AUTOMATION",
  },
  {
    repo: "AI-powered_stock_prediction_assistant",
    name: { zh: "AI 個股預測小幫手", en: "AI-powered Stock Prediction Assistant" },
    description: {
      zh: "以 Streamlit 比較線性迴歸與 PyTorch LSTM 的股價預測，搭配 Plotly 圖表、模型評估及 Gemini 分析報告，作為學習與研究實作。",
      en: "A learning and research app comparing linear regression and PyTorch LSTM stock forecasts, with Plotly charts, model evaluation, and Gemini-generated analysis.",
    },
    stack: "Python · Streamlit · PyTorch · Plotly · Gemini",
    category: "MACHINE LEARNING",
  },
  {
    repo: "vision_nav_agent",
    name: { zh: "Vision-Aided AR Navigation Agent", en: "Vision-Aided AR Navigation Agent" },
    description: {
      zh: "結合 OpenCV、OpenClaw Agent 與語音指引的視障輔助導航探索，提供電腦端與手機網頁模式，嘗試將環境感知轉化為行動提示。",
      en: "An assistive navigation project combining OpenCV, an OpenClaw agent, and voice guidance, with desktop and mobile web modes for exploring environmental awareness.",
    },
    stack: "Python · OpenCV · OpenClaw",
    category: "COMPUTER VISION",
  },
  {
    repo: "pet",
    name: { zh: "AI 互動桌寵", en: "AI Desktop Pet" },
    description: {
      zh: "透明置頂、可拖曳的互動桌寵，提供聊天面板、語音朗讀與 OpenAI-compatible API 串接，也能以本機規則離線回覆。",
      en: "A draggable desktop companion with a transparent always-on-top window, chat, speech, OpenAI-compatible API support, and offline rule-based replies.",
    },
    stack: "JavaScript · Desktop UI · LLM API",
    category: "INTERACTIVE EXPERIENCE",
  },
  {
    repo: "anime",
    name: { zh: "YourAnimes 新番更新表", en: "YourAnimes Schedule" },
    description: {
      zh: "以 Python 標準函式庫整理 YourAnimes 新番資料，依星期輸出 Markdown 或 CSV，並提供可搜尋、按季度查詢的本機儀表板。",
      en: "A Python standard-library tool that organizes YourAnimes schedules by weekday, exports Markdown or CSV, and provides a searchable local dashboard with seasonal queries.",
    },
    stack: "Python · Web Scraping · Dashboard",
    category: "EVERYDAY AUTOMATION",
  },
  {
    repo: "Data_Science_Einosensokami",
    name: { zh: "資料科學與網頁資料擷取", en: "Data Science & Web Scraping" },
    description: {
      zh: "資料科學課程實作，練習以 requests、BeautifulSoup 與 Selenium 擷取電影、匯率、新聞及運動資料，整理為 CSV 與文字輸出。",
      en: "Coursework using requests, BeautifulSoup, and Selenium to collect movie, exchange-rate, news, and sports data and organize it into CSV and text outputs.",
    },
    stack: "Python · requests · BeautifulSoup · Selenium",
    category: "DATA COLLECTION",
  },
];

export const githubRepositoriesUrl = "https://github.com/Einosensokami?tab=repositories";
