"use client";

import { useLang } from "@/components/lang-provider";

const CONTACTS = [
  {
    label: "buw8683@gmail.com",
    href: "mailto:buw8683@gmail.com",
    icon: "✉",
  },
  {
    label: "GitHub",
    href: "https://github.com/SSJohnWu",
    icon: "GH",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/your-handle",
    icon: "in",
  },
] as const;

export function SectionContact() {
  const { t } = useLang();
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-[980px] px-6 text-center">
        <header className="mb-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight">
            {t["contact.title"]}
          </h2>
          <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
            {t["contact.subtitle"]}
          </p>
        </header>

        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-10">
          {CONTACTS.map((c) => (
            <li key={c.label}>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-3 px-5 py-4 border border-border rounded-md bg-background transition-colors hover:border-foreground"
              >
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-foreground text-background text-[11px] font-semibold">
                  {c.icon}
                </span>
                <span>{c.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
