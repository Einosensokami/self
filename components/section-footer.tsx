"use client";

import { useLang } from "@/components/lang-provider";

export function SectionFooter() {
  const { t } = useLang();
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-[980px] px-6 flex flex-col items-center gap-1.5 text-center text-sm text-muted-foreground">
        <p>
          © {new Date().getFullYear()} {t.brand}. {t["footer.rights"]}
        </p>
        <p className="text-xs opacity-70">{t["footer.note"]}</p>
      </div>
    </footer>
  );
}
