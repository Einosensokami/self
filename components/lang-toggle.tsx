"use client";

import { useLang } from "@/components/lang-provider";
import { supportedLangs, type Lang } from "@/lib/i18n";

const labels: Record<Lang, string> = { zh: "中", en: "EN" };

export function LangToggle() {
  const { lang, setLang } = useLang();
  return <div role="group" aria-label="Language switcher" className="flex rounded-full border border-[#1e2a38]/15 p-1 text-xs font-semibold">{supportedLangs.map((code) => <button key={code} type="button" aria-pressed={lang === code} onClick={() => setLang(code)} className={`rounded-full px-2.5 py-1 transition ${lang === code ? "bg-[#1e2a38] text-white" : "text-[#50606f] hover:text-[#1e2a38]"}`}>{labels[code]}</button>)}</div>;
}
