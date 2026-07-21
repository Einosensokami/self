"use client";

import { ArrowDownRight, ArrowUpRight, Bot, Code2, Mail, Network, Sparkles } from "lucide-react";
import { useLang } from "@/components/lang-provider";

const capabilities = [
  { icon: Sparkles, title: "AI Strategy", items: ["LLM applications", "Prompt systems", "Solution design"] },
  { icon: Code2, title: "Build & Prototype", items: ["Python", "TypeScript", "Rapid prototypes"] },
  { icon: Network, title: "Automation", items: ["n8n workflows", "AI agents", "Knowledge systems"] },
  { icon: Bot, title: "Product Thinking", items: ["Requirements", "User flows", "Cross-domain communication"] },
];

export function SectionGridPage() {
  const { t } = useLang();
  const experiences = [
    { period: t["experience.e1.period"], role: t["experience.e1.role"], org: t["experience.e1.org"], desc: t["experience.e1.desc"] },
    { period: t["experience.e2.period"], role: t["experience.e2.role"], org: t["experience.e2.org"], desc: t["experience.e2.desc"] },
  ];

  return <div id="top" className="overflow-hidden bg-[#0b1715] text-[#f4f7ee]">
    <main>
      <section className="relative isolate min-h-screen px-5 pb-14 pt-32 sm:px-8 lg:px-12">
        <div className="hero-orbit absolute left-1/2 top-1/2 -z-10 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full" />
        <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-6xl flex-col justify-between">
          <div className="max-w-5xl">
            <p className="mb-7 flex items-center gap-2 text-[11px] font-semibold tracking-[0.19em] text-[#d9ff64]"><span className="h-1.5 w-1.5 rounded-full bg-[#d9ff64]" />{t["hero.eyebrow"]}</p>
            <h1 className="max-w-5xl whitespace-pre-line text-[clamp(3.4rem,9vw,8.4rem)] font-semibold leading-[0.91] tracking-[-0.075em]">{t["hero.title"]}</h1>
            <div className="mt-10 flex flex-col gap-6 border-l border-[#d9ff64]/60 pl-5 sm:ml-[27%] sm:max-w-md">
              <p className="text-base leading-7 text-white/65">{t["hero.subtitle"]}</p>
              <div className="flex flex-wrap gap-3">
                <a href="#skills" className="inline-flex items-center gap-2 rounded-full bg-[#d9ff64] px-5 py-3 text-sm font-semibold text-[#0b1715] transition hover:bg-white">{t["hero.ctaPrimary"]}<ArrowDownRight size={16} /></a>
                <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#d9ff64] hover:text-[#d9ff64]">{t["hero.ctaSecondary"]}<ArrowUpRight size={16} /></a>
              </div>
            </div>
          </div>
          <div className="mt-16 flex items-end justify-between border-t border-white/10 pt-5 text-xs uppercase tracking-[0.15em] text-white/45"><span>Scroll to explore</span><span>01 — 04</span></div>
        </div>
      </section>

      <section id="about" className="border-y border-white/10 bg-[#10221e] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-12">
          <p className="section-label lg:col-span-3">{t["about.label"]}</p>
          <div className="lg:col-span-9"><h2 className="max-w-4xl whitespace-pre-line text-4xl font-medium leading-tight tracking-[-0.045em] sm:text-6xl">{t["about.title"]}</h2><p className="mt-8 max-w-xl text-lg leading-8 text-white/60">{t["about.body"]}</p></div>
        </div>
      </section>

      <section id="skills" className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-6xl"><div className="mb-14 grid gap-5 lg:grid-cols-12"><p className="section-label lg:col-span-3">{t["skills.label"]}</p><div className="lg:col-span-9"><h2 className="text-4xl font-medium tracking-[-0.045em] sm:text-6xl">{t["skills.title"]}</h2><p className="mt-4 text-white/60">{t["skills.subtitle"]}</p></div></div>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
            {capabilities.map(({ icon: Icon, title, items }, index) => <article key={title} className="group min-h-64 bg-[#0b1715] p-6 transition hover:bg-[#16332b] sm:p-8"><div className="flex justify-between"><Icon size={23} className="text-[#d9ff64]" /><span className="text-xs text-white/40">0{index + 1}</span></div><h3 className="mt-16 text-2xl font-medium tracking-[-0.03em]">{title}</h3><ul className="mt-5 space-y-2 text-sm text-white/55">{items.map((item) => <li key={item}>— {item}</li>)}</ul></article>)}
          </div>
        </div>
      </section>

      <section id="experience" className="bg-[#d9ff64] px-5 py-24 text-[#0b1715] sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-6xl"><div className="grid gap-5 lg:grid-cols-12"><p className="section-label text-[#0b1715]/60 lg:col-span-3">{t["experience.label"]}</p><h2 className="text-4xl font-medium tracking-[-0.045em] sm:text-6xl lg:col-span-9">{t["experience.title"]}</h2></div>
          <ol className="mt-16 border-t border-[#0b1715]/20">{experiences.map((item, index) => <li key={item.role} className="grid gap-4 border-b border-[#0b1715]/20 py-8 md:grid-cols-12"><p className="text-sm font-medium md:col-span-2">{item.period}</p><div className="md:col-span-6"><h3 className="text-xl font-semibold tracking-[-0.03em]">{item.role}</h3><p className="mt-2 text-sm text-[#0b1715]/65">{item.org}</p></div><p className="text-sm leading-6 text-[#0b1715]/70 md:col-span-4">{item.desc}</p><span className="hidden text-right text-sm md:block">0{index + 1}</span></li>)}</ol>
        </div>
      </section>

      <section id="contact" className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32"><div className="mx-auto max-w-6xl"><p className="section-label">{t["contact.label"]}</p><div className="mt-14 grid gap-10 lg:grid-cols-12"><div className="lg:col-span-8"><h2 className="max-w-3xl text-5xl font-medium tracking-[-0.06em] sm:text-7xl">{t["contact.title"]}</h2><p className="mt-7 max-w-lg text-lg leading-8 text-white/60">{t["contact.body"]}</p></div><a href="mailto:buw8683@gmail.com" className="group flex h-fit items-center justify-between rounded-2xl bg-white px-6 py-5 text-sm font-semibold text-[#0b1715] transition hover:bg-[#d9ff64] lg:col-span-4">{t["contact.cta"]}<Mail size={19} className="transition group-hover:-translate-y-1 group-hover:translate-x-1" /></a></div></div></section>
    </main>
    <footer className="border-t border-white/10 px-5 py-6 text-xs text-white/40 sm:px-8 lg:px-12"><div className="mx-auto flex max-w-6xl justify-between"><span>© {new Date().getFullYear()} JOHN WU</span><span>{t["footer.note"]}</span></div></footer>
  </div>;
}
