"use client";

import { useLang } from "@/components/lang-provider";
import type { Dictionary } from "@/lib/i18n";

type GroupDef = {
  titleKey: keyof Dictionary;
  tags: ReadonlyArray<string>;
};

const GROUPS: GroupDef[] = [
  {
    titleKey: "skills.frontend",
    tags: [
      "LLM API 串接 (OpenAI / Claude / Gemini)",
      "Python / TypeScript",
      "AI Agent 設計與開發",
    ],
  },
  {
    titleKey: "skills.backend",
    tags: [
      "openclaw",
      "hermes agent",
      "Codex / Claude / Gemini",
      "n8n 工作流自動化",
    ],
  },
  {
    titleKey: "skills.tools",
    tags: [
      "System Prompts 系統提示詞",
      "結構化提示詞優化",
      "AI 工作流自動化",
      "使用者體驗與流程設計",
    ],
  },
  {
    titleKey: "skills.soft",
    tags: ["skills.soft1", "skills.soft2", "skills.soft3"] as const,
  },
];

export function SectionSkills() {
  const { t } = useLang();
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-[980px] px-6">
        <header className="mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight text-foreground">
            {t["skills.title"]}
          </h2>
          <p className="mt-2 text-muted-foreground max-w-2xl">
            {t["skills.subtitle"]}
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {GROUPS.map((g) => (
            <div key={g.titleKey}>
              <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-foreground border-b border-border pb-2 mb-4">
                {t[g.titleKey]}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {g.tags.map((tag, i) => {
                  // 兩種 tag：純字串 / dict 鍵
                  const isDictKey =
                    typeof tag === "string" && tag.startsWith("skills.");
                  const text = isDictKey ? t[tag as keyof Dictionary] : tag;
                  return (
                    <li
                      key={`${g.titleKey}-${i}`}
                      className="rounded-full border border-border px-3 py-1 text-sm bg-card/60 backdrop-blur-sm transition-colors hover:border-foreground hover:text-foreground"
                    >
                      {text}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
