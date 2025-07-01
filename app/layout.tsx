import type React from "react";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar/page";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kirtan Sonagra - Frontend Developer",
  description:
    "Portfolio of Kirtan Sonagra, a passionate Frontend Developer specializing in React.js and Next.js",
  keywords: "Frontend Developer, React, Next.js, JavaScript, Portfolio",
  authors: [{ name: "Kirtan Sonagra" }],
  openGraph: {
    title: "Kirtan Sonagra - Frontend Developer",
    description: "Portfolio of Kirtan Sonagra, a passionate Frontend Developer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-slate-50`}
      >
        <Navbar />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
