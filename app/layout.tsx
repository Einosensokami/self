import type { Metadata } from "next";
import { Inter, Noto_Sans_TC, Noto_Serif_TC } from "next/font/google";
import { LangProvider } from "@/components/lang-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const notoSansTC = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const notoSerifTC = Noto_Serif_TC({
  variable: "--font-noto-serif-tc",
  weight: ["500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "永恆戰神 Einosensokami · Personal Site",
  description:
    "自我介紹網站 — 關於我、技能、作品集與聯絡資訊。（AI 應用規劃師）",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fontStack = `${inter.style.fontFamily}, ${notoSansTC.style.fontFamily}, system-ui, sans-serif`;
  const serifStack = `${notoSerifTC.style.fontFamily}, Georgia, serif`;

  return (
    <html
      lang="zh-Hant"
      className={`${inter.variable} ${notoSansTC.variable} ${notoSerifTC.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col"
        style={
          {
            fontFamily: fontStack,
            ["--font-serif" as string]: serifStack,
          } as React.CSSProperties
        }
      >
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
