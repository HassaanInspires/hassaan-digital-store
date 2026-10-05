import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Hassaan Khan — Personal Digital Storefront",
  description:
    "Curated high-leverage engineering blueprints, autonomous AI agent frameworks, and developer resources by Muhammad Hassaan Khan.",
  metadataBase: new URL("https://store.muhammadhassaankhan.com"),
  openGraph: {
    title: "Muhammad Hassaan Khan — Personal Digital Storefront",
    description:
      "Curated high-leverage engineering blueprints, autonomous AI agent frameworks, and developer resources by Muhammad Hassaan Khan.",
    url: "https://store.muhammadhassaankhan.com",
    siteName: "Muhammad Hassaan Khan Store",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Hassaan Khan — Personal Digital Storefront",
    description:
      "Curated high-leverage engineering blueprints, autonomous AI agent frameworks, and developer resources by Muhammad Hassaan Khan.",
    creator: "@HassaanInspires",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import { SwissNavBar } from "@/components/ui/SwissNavBar";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-palette="emerald" data-font="geist">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} font-sans antialiased min-h-screen bg-white text-zinc-950 selection:bg-zinc-200 selection:text-zinc-900`}
      >
        <SwissNavBar />
        {children}
        <footer className="w-full bg-white border-t border-zinc-100 py-12 px-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-sm font-mono text-zinc-400 uppercase tracking-widest">
              © {new Date().getFullYear()} M. Hassaan Khan
            </div>
            <div className="flex items-center gap-6 text-sm font-medium text-zinc-500">
              <Link className="hover:text-zinc-950 transition-colors" href="/privacy">Privacy</Link>
              <Link className="hover:text-zinc-950 transition-colors" href="/terms">Terms</Link>
              <Link className="hover:text-zinc-950 transition-colors" href="/contact">Contact</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
