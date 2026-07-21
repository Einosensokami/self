import type { Metadata } from "next";
import { LangProvider } from "@/components/lang-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Einosensokami — AI Application Planner",
  description: "Einosensokami's portfolio for AI application planning, workflow design, and implementation.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-Hant" className="h-full antialiased" suppressHydrationWarning><body className="min-h-full"><LangProvider>{children}</LangProvider></body></html>;
}
