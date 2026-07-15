"use client";

import { useLang } from "@/components/lang-provider";

const EXPERIENCES = [
  {
    year: "2025/09 — 現在",
    roleKey: "exp.e1.role" as const,
    orgKey: "exp.e1.org" as const,
    descKey: "exp.e1.desc" as const,
  },
  {
    year: "2026/07 — 2026/08",
    roleKey: "exp.e2.role" as const,
    orgKey: "exp.e2.org" as const,
    descKey: "exp.e2.desc" as const,
  },
];

export function SectionExperience() {
  const { t } = useLang();
  return (
    <section id="experience" className="py-24 bg-muted/40">
      <div className="mx-auto max-w-[980px] px-6">
        <header className="mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight">
            {t["exp.title"]}
          </h2>
          <p className="mt-2 text-muted-foreground">{t["exp.subtitle"]}</p>
        </header>

        <ol className="relative border-l border-border pl-6 ml-2 space-y-7">
          {EXPERIENCES.map((exp, i) => (
            <li key={i} className="relative">
              <span className="absolute -left-[31px] top-2 h-2.5 w-2.5 rounded-full bg-foreground ring-4 ring-background" />
              <span className="block font-serif text-sm text-foreground mb-1">
                {exp.year}
              </span>
              <h3 className="text-lg font-serif font-bold">{t[exp.roleKey]}</h3>
              <p className="text-sm text-muted-foreground mt-0.5 mb-2">
                {t[exp.orgKey]}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t[exp.descKey]}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
