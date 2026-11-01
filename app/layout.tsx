import type { Metadata } from "next";
import { LangProvider } from "@/components/lang-provider";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Einosensokami — AI Application Planner",
  description: "Einosensokami 的作品集：AI Agent、MCP 整合、LINE 產品原型、Python 資料分析，以及 VS Code 與 Windows 開發工具。",
  openGraph: {
    title: "Einosensokami — AI Application Planner",
    description: "AI agents, MCP integrations, LINE prototypes, Python data projects, and developer tools by Einosensokami.",
    type: "website",
    locale: "zh_TW",
    alternateLocale: "en_US",
    siteName: "Einosensokami",
  },
  twitter: {
    card: "summary_large_image",
    title: "Einosensokami — AI Application Planner",
    description: "AI agents, MCP integrations, LINE prototypes, Python data projects, and developer tools by Einosensokami.",
  },
  keywords: ["Einosensokami", "AI Agent", "MCP", "portfolio", "Taiwan", "Python", "VS Code", "LINE MINI App"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-Hant" className="h-full antialiased" suppressHydrationWarning><body className="min-h-full"><LangProvider><ThemeProvider>{children}</ThemeProvider></LangProvider></body></html>;
}
/* deploy trigger */
