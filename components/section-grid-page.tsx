"use client";

import { ArrowDownRight, ArrowUpRight, ExternalLink, Mail } from "lucide-react";
import { useLang } from "@/components/lang-provider";
import { useReveal } from "@/hooks/use-reveal";

const openSourceProjects = [
  {
    name: "AI-powered Stock Prediction Assistant",
    description: "以 Python 實作的 AI 股票預測助理。",
    language: "Python",
    type: "個人開源",
    url: "https://github.com/Einosensokami/AI-powered_stock_prediction_assistant",
  },
  {
    name: "Web-Ferret-Pet",
    description: "使用 HTML、CSS、JavaScript 製作的去背白雪貂網頁桌寵。",
    language: "JavaScript",
    type: "個人開源",
    url: "https://github.com/Einosensokami/Web-Ferret-Pet",
  },
  {
    name: "Vision-Aided AR Navigation Agent",
    description: "結合 OpenCV 與 AI Agent，協助視障者及銀髮族進行環境感知與安全導航。",
    language: "Python",
    type: "參與開源",
    url: "https://github.com/Einosensokami/vision_nav_agent",
  },
  {
    name: "AgentAQI",
    description: "以台灣空氣品質為核心，提供個人化健康資訊與 AI Agent 輔助服務。",
    language: "Python",
    type: "參與開源",
    url: "https://github.com/Tunai-0511/aqi-tw-personal",
  },
];

const favoriteGames = [
  { name: "原神", image: "game-icons/genshin-impact.jpg" },
  { name: "崩壞：星穹鐵道", image: "game-icons/honkai-star-rail.jpg" },
  { name: "魔物獵人：荒野", image: "game-icons/monster-hunter-wilds.jpg" },
  { name: "暗影詩章：凌越世界", image: "game-icons/shadowverse-worlds-beyond.jpg" },
  { name: "空洞騎士", image: "game-icons/hollow-knight-switch.jpg" },
  { name: "遊戲王 Master Duel", image: "game-icons/yu-gi-oh-master-duel.jpg" },
  { name: "鳴潮", image: "game-icons/wuthering-waves.jpg" },
];

export function SectionGridPage() {
  const { t } = useLang();
  useReveal();
  const experiences = [
    { period: t["experience.e1.period"], role: t["experience.e1.role"], org: t["experience.e1.org"], desc: t["experience.e1.desc"] },
    { period: t["experience.e2.period"], role: t["experience.e2.role"], org: t["experience.e2.org"], desc: t["experience.e2.desc"] },
  ];

  return <div id="top" className="relative overflow-hidden bg-[#f7f3ec] text-[#1e2a38] dark:bg-[#0f1724] dark:text-[#e8e4de]">
    <div
      className="portfolio-scene"
      aria-hidden="true"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgb(247 243 236 / .45), rgb(247 243 236 / .68) 58%, rgb(247 243 236 / .9)), url('portfolio-landscape.png')",
      }}
    />
    <main className="relative z-10">
      <section className="relative px-5 pb-16 pt-28 sm:px-8 lg:px-12 lg:pt-36">
        <div className="mx-auto grid max-w-6xl items-end gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="mb-7 text-[11px] font-bold tracking-[0.18em] text-[#db6049]">{t["hero.eyebrow"]}</p>
            <h1 className="max-w-3xl whitespace-pre-line text-[clamp(2.25rem,3.8vw,3.75rem)] font-medium leading-[1.32] tracking-[-0.045em] text-pretty">{t["hero.title"]}</h1>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#skills" className="inline-flex items-center gap-2 rounded-full bg-[#1e2a38] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#db6049] dark:bg-white dark:text-[#0f1724] dark:hover:bg-[#db6049]">{t["hero.ctaPrimary"]}<ArrowDownRight size={16} /></a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-[#1e2a38]/20 px-5 py-3 text-sm font-semibold transition hover:border-[#1e2a38] dark:border-white/20 dark:hover:border-white/60">{t["hero.ctaSecondary"]}<ArrowUpRight size={16} /></a>
            </div>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-[25rem] lg:col-span-5">
            <div className="absolute inset-0 rotate-6 rounded-[34%] bg-[#db6049]" />
            <div className="absolute inset-5 -rotate-6 overflow-hidden rounded-[34%] bg-[#1e2a38] p-2 shadow-xl dark:bg-[#1a2636]">
              <img src="einosensokami-avatar.png" alt="Einosensokami" className="h-full w-full rounded-[30%] object-cover" />
            </div>
            <span className="absolute -bottom-3 -left-2 rounded-full bg-[#f6d6b9] px-4 py-2 text-xs font-bold shadow-sm">EINOSENSOKAMI</span>
          </div>
        </div>
        <div className="mx-auto mt-20 flex max-w-6xl justify-between border-t border-[#1e2a38]/15 pt-4 text-[11px] font-bold tracking-[.15em] text-[#7a8490] dark:border-white/15 dark:text-white/40"><span>PORTFOLIO / 2026</span><span>TAIWAN</span></div>
      </section>

      <section id="about" className="reveal px-5 py-24 sm:px-8 lg:px-12 lg:py-32"><div className="mx-auto max-w-6xl"><div className="grid gap-5 lg:grid-cols-12"><p className="section-label lg:col-span-3">{t["about.label"]}</p><div className="lg:col-span-9"><h2 className="text-4xl font-medium tracking-[-.05em] sm:text-6xl whitespace-pre-line">{t["about.title"]}</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-[#50606f] dark:text-white/60">{t["about.body"]}</p></div></div></div></section>

      <section id="skills" className="reveal px-5 py-24 sm:px-8 lg:px-12 lg:py-32"><div className="mx-auto max-w-6xl"><div className="grid gap-5 lg:grid-cols-12"><p className="section-label lg:col-span-3">01 / OPEN SOURCE</p><div className="lg:col-span-9"><h2 className="text-4xl font-medium tracking-[-.05em] sm:text-6xl">開源專案</h2><p className="mt-4 text-[#50606f] dark:text-white/60">我在 GitHub 上實作、分享與參與的開源作品。</p></div></div><div className="mt-14 grid gap-4 sm:grid-cols-2">{openSourceProjects.map((project, index) => <a key={project.name} href={project.url} target="_blank" rel="noreferrer" className="group rounded-3xl bg-white/45 p-7 shadow-sm backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/70 dark:bg-white/5 dark:hover:bg-white/10 sm:p-9"><div className="flex items-start justify-between"><span className="text-sm font-semibold text-[#1e2a38]/50 dark:text-white/30">0{index + 1}</span><ExternalLink size={20} className="transition group-hover:-translate-y-1 group-hover:translate-x-1" /></div><p className="mt-10 text-xs font-bold tracking-[.14em] text-[#db6049]">{project.type}</p><h3 className="mt-3 text-2xl font-semibold tracking-[-.035em]">{project.name}</h3><p className="mt-4 text-sm leading-6 text-[#50606f] dark:text-white/50">{project.description}</p><p className="mt-8 text-xs font-bold tracking-[.14em] text-[#db6049]">{project.language}</p></a>)}</div></div></section>

      <section id="games" className="reveal px-5 py-24 sm:px-8 lg:px-12 lg:py-32"><div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-12"><p className="section-label lg:col-span-3">02 / 喜歡的遊戲</p><div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:col-span-9 xl:grid-cols-4">{favoriteGames.map((game) => <article key={game.name} className="group overflow-hidden rounded-3xl bg-white/45 p-3 shadow-sm backdrop-blur-sm dark:bg-white/5"><img src={game.image} alt={`${game.name} 應用程式圖示`} className="aspect-square w-full rounded-2xl object-cover transition duration-300 group-hover:scale-[1.03]" /><p className="px-2 pb-2 pt-4 text-sm font-semibold tracking-[-.02em]">{game.name}</p></article>)}</div></div></section>

      <section id="experience" className="reveal px-5 py-24 sm:px-8 lg:px-12 lg:py-32"><div className="mx-auto max-w-6xl"><div className="grid gap-5 lg:grid-cols-12"><p className="section-label lg:col-span-3">{t["experience.label"]}</p><h2 className="text-4xl font-medium tracking-[-.05em] sm:text-6xl lg:col-span-9">{t["experience.title"]}</h2></div><ol className="mt-16 border-t border-[#1e2a38]/20 dark:border-white/20">{experiences.map((item, index) => <li key={item.role} className="grid gap-4 border-b border-[#1e2a38]/20 py-8 dark:border-white/20 md:grid-cols-12"><p className="text-sm font-semibold md:col-span-2">{item.period}</p><div className="md:col-span-6"><h3 className="text-xl font-semibold tracking-[-.03em]">{item.role}</h3><p className="mt-2 text-sm text-[#50606f] dark:text-white/60">{item.org}</p></div><p className="text-sm leading-6 text-[#50606f] dark:text-white/50 md:col-span-4">{item.desc}</p><span className="hidden text-right text-sm text-[#7a8490] dark:text-white/30 md:block">0{index + 1}</span></li>)}</ol></div></section>

      <section id="contact" className="reveal px-5 py-24 text-[#1e2a38] dark:text-[#e8e4de] sm:px-8 lg:px-12 lg:py-32"><div className="mx-auto max-w-6xl border-t border-[#1e2a38]/20 pt-16 dark:border-white/20"><p className="section-label">{t["contact.label"]}</p><div className="mt-14 grid gap-10 lg:grid-cols-12"><div className="lg:col-span-8"><h2 className="max-w-3xl text-5xl font-semibold tracking-[-.065em] sm:text-7xl">{t["contact.title"]}</h2><p className="mt-7 max-w-lg text-lg leading-8 text-[#50606f] dark:text-white/60">{t["contact.body"]}</p></div><div className="flex h-fit flex-col gap-3 lg:col-span-4"><a href="mailto:buw8683@gmail.com" className="group flex items-center justify-between rounded-full bg-[#1e2a38] px-6 py-5 text-sm font-semibold text-white transition hover:bg-white hover:text-[#1e2a38] dark:bg-white/10 dark:hover:bg-white dark:hover:text-[#0f1724]"><span>buw8683@gmail.com</span><Mail size={19} className="transition group-hover:-translate-y-1 group-hover:translate-x-1" /></a><a href="https://github.com/Einosensokami" target="_blank" rel="noreferrer" className="group flex items-center justify-between rounded-full bg-[#1e2a38] px-6 py-5 text-sm font-semibold text-white transition hover:bg-white hover:text-[#1e2a38] dark:bg-white/10 dark:hover:bg-white dark:hover:text-[#0f1724]"><span>github.com/Einosensokami</span><ExternalLink size={19} className="transition group-hover:-translate-y-1 group-hover:translate-x-1" /></a></div></div>
      <div className="mt-10 flex gap-3 lg:col-span-12">
        <a href="https://www.instagram.com/Einosensokami" target="_blank" rel="noreferrer" className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1e2a38] text-white transition hover:bg-[#db6049] dark:bg-white/10" title="Instagram">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
        </a>
        <a href="https://www.facebook.com/einosensokami" target="_blank" rel="noreferrer" className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1e2a38] text-white transition hover:bg-[#db6049] dark:bg-white/10" title="Facebook">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
        </a>
        <div className="group relative flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1e2a38] text-white transition hover:bg-[#db6049] dark:bg-white/10" title="LINE ID">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 5.82 2 10.5c0 3.67 3.12 6.77 7.35 7.85-.1.85-.38 2.65-.43 3.06-.08.6.22.6.47.43.19-.13 2.7-1.84 3.8-2.59.63.09 1.27.14 1.91.14 5.52 0 10-3.82 10-8.5S17.52 2 12 2zm5.48 6.15c-.04-.12-.15-.18-.3-.18h-.12c-.1 0-.2.04-.27.1l-.73.85c-.2.22-.5.32-.78.26-.4-.08-.84-.22-1.28-.46-.83-.44-1.58-.97-2.16-1.45-.15-.12-.32-.18-.48-.18h-.1c-.17 0-.33.1-.42.26l-.08.16c-.14.27-.1.57.1.82.55.68 1.43 1.57 2.62 2.2.22.12.46.18.7.18.26 0 .5-.08.7-.25.36-.3.78-.83 1.1-1.32.08-.12.16-.24.25-.34l.04-.04c.08-.08.18-.12.28-.12h.5c.15 0 .27.1.3.24.04.18.06.36.04.54-.08.68-.42 1.3-.92 1.82-.5.5-1.12.88-1.78 1.12-.16.06-.24.22-.2.38.04.14.16.24.3.26h.04c.88 0 1.7-.28 2.36-.8.82-.64 1.3-1.56 1.36-2.6.06-1.08-.2-2.1-.74-2.98z"/></svg>
          <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-[#1e2a38] px-3 py-1.5 text-xs text-white opacity-0 transition group-hover:opacity-100 dark:bg-white/20">john0913666</span>
        </div>
      </div>
    </div></section>
    </main>
    <footer className="relative z-10 bg-[#1e2a38] px-5 py-6 text-xs text-white/55 sm:px-8 lg:px-12 dark:bg-[#0a0f1a]"><div className="mx-auto flex max-w-6xl justify-between"><span>© {new Date().getFullYear()} EINOSENSOKAMI</span><span>{t["footer.note"]}</span></div></footer>
  </div>;
}
