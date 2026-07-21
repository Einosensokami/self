"use client";

import { ArrowDownRight, ArrowUpRight, ExternalLink, Mail } from "lucide-react";
import { useLang } from "@/components/lang-provider";

const openSourceProjects = [
  {
    name: "AI-powered Stock Prediction Assistant",
    description: "以 Python 實作的 AI 股票預測助理。",
    language: "Python",
    url: "https://github.com/Einosensokami/AI-powered_stock_prediction_assistant",
  },
  {
    name: "Web-Ferret-Pet",
    description: "使用 HTML、CSS、JavaScript 製作的去背白雪貂網頁桌寵。",
    language: "JavaScript",
    url: "https://github.com/Einosensokami/Web-Ferret-Pet",
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
  const experiences = [
    { period: t["experience.e1.period"], role: t["experience.e1.role"], org: t["experience.e1.org"], desc: t["experience.e1.desc"] },
    { period: t["experience.e2.period"], role: t["experience.e2.role"], org: t["experience.e2.org"], desc: t["experience.e2.desc"] },
  ];

  return <div id="top" className="relative overflow-hidden bg-[#f7f3ec] text-[#1e2a38]">
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
              <a href="#skills" className="inline-flex items-center gap-2 rounded-full bg-[#1e2a38] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#db6049]">{t["hero.ctaPrimary"]}<ArrowDownRight size={16} /></a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-[#1e2a38]/20 px-5 py-3 text-sm font-semibold transition hover:border-[#1e2a38]">{t["hero.ctaSecondary"]}<ArrowUpRight size={16} /></a>
            </div>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-[25rem] lg:col-span-5">
            <div className="absolute inset-0 rotate-6 rounded-[34%] bg-[#db6049]" />
            <div className="absolute inset-5 -rotate-6 overflow-hidden rounded-[34%] bg-[#1e2a38] p-2 shadow-xl">
              <img src="einosensokami-avatar.png" alt="Einosensokami" className="h-full w-full rounded-[30%] object-cover" />
            </div>
            <span className="absolute -bottom-3 -left-2 rounded-full bg-[#f6d6b9] px-4 py-2 text-xs font-bold shadow-sm">EINOSENSOKAMI</span>
          </div>
        </div>
        <div className="mx-auto mt-20 flex max-w-6xl justify-between border-t border-[#1e2a38]/15 pt-4 text-[11px] font-bold tracking-[.15em] text-[#7a8490]"><span>PORTFOLIO / 2026</span><span>TAIWAN</span></div>
      </section>

      <section id="skills" className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32"><div className="mx-auto max-w-6xl"><div className="grid gap-5 lg:grid-cols-12"><p className="section-label lg:col-span-3">01 / OPEN SOURCE</p><div className="lg:col-span-9"><h2 className="text-4xl font-medium tracking-[-.05em] sm:text-6xl">開源專案</h2><p className="mt-4 text-[#50606f]">我在 GitHub 上持續實作與分享的作品。</p></div></div><div className="mt-14 grid gap-4 sm:grid-cols-2">{openSourceProjects.map((project, index) => <a key={project.name} href={project.url} target="_blank" rel="noreferrer" className="group rounded-3xl bg-white/45 p-7 shadow-sm backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/70 sm:p-9"><div className="flex items-start justify-between"><span className="text-sm font-semibold text-[#1e2a38]/50">0{index + 1}</span><ExternalLink size={20} className="transition group-hover:-translate-y-1 group-hover:translate-x-1" /></div><h3 className="mt-14 text-2xl font-semibold tracking-[-.035em]">{project.name}</h3><p className="mt-4 text-sm leading-6 text-[#50606f]">{project.description}</p><p className="mt-8 text-xs font-bold tracking-[.14em] text-[#db6049]">{project.language}</p></a>)}</div></div></section>

      <section id="about" className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32"><div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-12"><p className="section-label lg:col-span-3">02 / 喜歡的遊戲</p><div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:col-span-9 xl:grid-cols-4">{favoriteGames.map((game) => <article key={game.name} className="group overflow-hidden rounded-3xl bg-white/45 p-3 shadow-sm backdrop-blur-sm"><img src={game.image} alt={`${game.name} 應用程式圖示`} className="aspect-square w-full rounded-2xl object-cover transition duration-300 group-hover:scale-[1.03]" /><p className="px-2 pb-2 pt-4 text-sm font-semibold tracking-[-.02em]">{game.name}</p></article>)}</div></div></section>

      <section id="experience" className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32"><div className="mx-auto max-w-6xl"><div className="grid gap-5 lg:grid-cols-12"><p className="section-label lg:col-span-3">{t["experience.label"]}</p><h2 className="text-4xl font-medium tracking-[-.05em] sm:text-6xl lg:col-span-9">{t["experience.title"]}</h2></div><ol className="mt-16 border-t border-[#1e2a38]/20">{experiences.map((item, index) => <li key={item.role} className="grid gap-4 border-b border-[#1e2a38]/20 py-8 md:grid-cols-12"><p className="text-sm font-semibold md:col-span-2">{item.period}</p><div className="md:col-span-6"><h3 className="text-xl font-semibold tracking-[-.03em]">{item.role}</h3><p className="mt-2 text-sm text-[#50606f]">{item.org}</p></div><p className="text-sm leading-6 text-[#50606f] md:col-span-4">{item.desc}</p><span className="hidden text-right text-sm text-[#7a8490] md:block">0{index + 1}</span></li>)}</ol></div></section>

      <section id="contact" className="px-5 py-24 text-[#1e2a38] sm:px-8 lg:px-12 lg:py-32"><div className="mx-auto max-w-6xl border-t border-[#1e2a38]/20 pt-16"><p className="section-label">{t["contact.label"]}</p><div className="mt-14 grid gap-10 lg:grid-cols-12"><div className="lg:col-span-8"><h2 className="max-w-3xl text-5xl font-semibold tracking-[-.065em] sm:text-7xl">{t["contact.title"]}</h2><p className="mt-7 max-w-lg text-lg leading-8 text-[#50606f]">{t["contact.body"]}</p></div><div className="flex h-fit flex-col gap-3 lg:col-span-4"><a href="mailto:buw8683@gmail.com" className="group flex items-center justify-between rounded-full bg-[#1e2a38] px-6 py-5 text-sm font-semibold text-white transition hover:bg-white hover:text-[#1e2a38]"><span>buw8683@gmail.com</span><Mail size={19} className="transition group-hover:-translate-y-1 group-hover:translate-x-1" /></a><a href="https://github.com/Einosensokami" target="_blank" rel="noreferrer" className="group flex items-center justify-between rounded-full bg-[#1e2a38] px-6 py-5 text-sm font-semibold text-white transition hover:bg-white hover:text-[#1e2a38]"><span>github.com/Einosensokami</span><ExternalLink size={19} className="transition group-hover:-translate-y-1 group-hover:translate-x-1" /></a></div></div></div></section>
    </main>
    <footer className="relative z-10 bg-[#1e2a38] px-5 py-6 text-xs text-white/55 sm:px-8 lg:px-12"><div className="mx-auto flex max-w-6xl justify-between"><span>© {new Date().getFullYear()} EINOSENSOKAMI</span><span>{t["footer.note"]}</span></div></footer>
  </div>;
}
