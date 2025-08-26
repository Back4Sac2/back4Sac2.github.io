import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Back4Sac2's Blog",
  description: "개발자 Back4Sac2의 개인 블로그입니다. 기술, 개발, 일상에 대한 글을 공유합니다.",
  keywords: ["개발", "프로그래밍", "블로그", "기술"],
  authors: [{ name: "Back4Sac2" }],
  creator: "Back4Sac2",
  openGraph: {
    title: "Back4Sac2's Blog",
    description: "개발자 Back4Sac2의 개인 블로그입니다.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.variable} font-sans antialiased bg-gray-50 dark:bg-gray-900`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
