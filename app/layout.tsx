import type { Metadata } from "next";
import { LangProvider } from "@/components/lang-provider";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Einosensokami — AI Application Planner",
  description: "Einosensokami's portfolio — AI application planning, workflow design, and implementation. 喜歡站在需求與技術之間，用 AI 打造更簡潔可靠的解法。",
  openGraph: {
    title: "Einosensokami — AI Application Planner",
    description: "AI application planning, workflow design, and implementation portfolio.",
    type: "website",
    locale: "zh_TW",
    alternateLocale: "en_US",
    siteName: "Einosensokami",
  },
  twitter: {
    card: "summary_large_image",
    title: "Einosensokami — AI Application Planner",
    description: "AI application planning, workflow design, and implementation portfolio.",
  },
  keywords: ["Einosensokami", "AI", "portfolio", "Taiwan", "workflow", "Next.js"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-Hant" className="h-full antialiased" suppressHydrationWarning><body className="min-h-full"><LangProvider><ThemeProvider>{children}</ThemeProvider></LangProvider></body></html>;
}
