"use client";

import { useEffect, useState } from "react";
import { LangToggle } from "@/components/lang-toggle";
import { useLang } from "@/components/lang-provider";

const NAV_IDS = ["skills", "experience", "contact"] as const;

export function SectionHeader() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={
        "sticky top-0 z-50 backdrop-blur bg-background/80 border-b transition-colors " +
        (scrolled ? "border-border" : "border-transparent")
      }
    >
      <div className="mx-auto flex h-16 max-w-[980px] items-center gap-6 px-6">
        <a
          href="#top"
          aria-label="Home"
          className="font-serif font-bold tracking-tight mr-auto text-base"
        >
          {t.brand}
        </a>

        <nav
          aria-label="Primary"
          className={
            "items-center gap-7 text-sm text-muted-foreground " +
            (menuOpen
              ? "flex flex-col absolute top-16 left-0 right-0 bg-background border-b border-border px-6 py-5 gap-5 items-start"
              : "hidden md:flex")
          }
        >
          {NAV_IDS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setMenuOpen(false)}
              className="hover:text-foreground transition-colors"
            >
              {t[`nav.${id}` as keyof typeof t]}
            </a>
          ))}
        </nav>

        <LangToggle />

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden flex h-9 w-9 flex-col items-center justify-center gap-[5px]"
        >
          <span className="block h-[1.5px] w-5 bg-foreground" />
          <span className="block h-[1.5px] w-5 bg-foreground" />
          <span className="block h-[1.5px] w-5 bg-foreground" />
        </button>
      </div>
    </header>
  );
}
