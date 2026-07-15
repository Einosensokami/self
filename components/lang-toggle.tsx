"use client";

import { useLang } from "@/components/lang-provider";
import { supportedLangs, type Lang } from "@/lib/i18n";

const labels: Record<Lang, string> = { zh: "中", en: "EN" };

export function LangToggle() {
  const { lang, setLang } = useLang();

  return (
    <div
      role="group"
      aria-label="Language switcher"
      className="flex items-center gap-1.5 text-sm text-muted-foreground"
    >
      {supportedLangs.map((code, i) => (
        <span key={code} className="flex items-center gap-1.5">
          {i > 0 && <span className="text-border">/</span>}
          <button
            type="button"
            data-lang-btn={code}
            aria-pressed={lang === code}
            onClick={() => setLang(code)}
            className={
              "px-1 pb-0.5 border-b border-transparent transition-colors " +
              (lang === code
                ? "text-foreground font-semibold border-foreground"
                : "hover:text-foreground")
            }
          >
            {labels[code]}
          </button>
        </span>
      ))}
    </div>
  );
}
