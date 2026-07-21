"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { LangToggle } from "@/components/lang-toggle";
import { useLang } from "@/components/lang-provider";

const nav = ["about", "skills", "experience", "contact"] as const;

export function SectionHeader() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-4 flex max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="text-sm font-bold tracking-[0.18em] text-white">{t.brand.toUpperCase()}</a>
        <div className="hidden items-center gap-8 md:flex">
          <nav className="flex gap-6 text-sm text-white/65">
            {nav.map((item) => <a key={item} href={`#${item}`} className="transition hover:text-[#d9ff64]">{t[`nav.${item}`]}</a>)}
          </nav>
          <LangToggle />
        </div>
        <div className="flex items-center gap-3 md:hidden">
          <LangToggle />
          <button type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)} className="text-white"><>{open ? <X size={21} /> : <Menu size={21} />}</></button>
        </div>
      </div>
      {open && <nav className="mx-5 mt-3 rounded-2xl border border-white/10 bg-[#10221e]/95 p-5 shadow-2xl backdrop-blur md:hidden">
        {nav.map((item) => <a key={item} href={`#${item}`} onClick={() => setOpen(false)} className="block border-b border-white/10 py-3 text-sm text-white last:border-0">{t[`nav.${item}`]}</a>)}
      </nav>}
    </header>
  );
}
