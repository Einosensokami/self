"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { LangToggle } from "@/components/lang-toggle";
import { ThemeToggle } from "@/components/theme-toggle";
import { useLang } from "@/components/lang-provider";

const nav = ["about", "skills", "experience", "contact"] as const;

export function SectionHeader() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  return <header className="absolute inset-x-0 top-0 z-50"><div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-8 lg:px-12"><a href="#top" className="text-sm font-bold tracking-[.17em]">{t.brand.toUpperCase()}</a><div className="hidden items-center gap-8 md:flex"><nav className="flex gap-6 text-sm text-[#50606f] dark:text-white/60">{nav.map((item) => <a key={item} href={`#${item}`} className="transition hover:text-[#db6049]">{t[`nav.${item}`]}</a>)}</nav><LangToggle /><ThemeToggle /></div><div className="flex items-center gap-3 md:hidden"><LangToggle /><ThemeToggle /><button type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}><>{open ? <X size={21} /> : <Menu size={21} />}</></button></div></div>{open && <nav className="mx-5 rounded-2xl border border-[#1e2a38]/10 bg-white p-5 shadow-xl dark:border-white/10 dark:bg-[#1e2a38] md:hidden">{nav.map((item) => <a key={item} href={`#${item}`} onClick={() => setOpen(false)} className="block border-b border-[#1e2a38]/10 py-3 text-sm last:border-0 dark:border-white/10">{t[`nav.${item}`]}</a>)}</nav>}</header>;
}
