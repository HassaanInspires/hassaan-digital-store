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
import { CmdKMenu } from "@/components/ui/CmdKMenu";
import Link from "next/link";
import Script from "next/script";
import { supabase } from "@/lib/supabase";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Fetch products for global search
  const { data: products } = await supabase.from("products").select("id, slug, title, subtitle").eq("is_active", true);

  return (
    <html lang="en" data-palette="emerald" data-font="geist">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} font-sans antialiased min-h-screen bg-zinc-50 text-zinc-950 selection:bg-zinc-200 selection:text-zinc-900`}
      >
        <CmdKMenu products={products || []} />
        <SwissNavBar />
        {children}
        <footer className="w-full bg-zinc-950 text-white pt-24 pb-12 px-6 border-t border-zinc-900">
          <div className="max-w-6xl mx-auto flex flex-col gap-16">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
              <div>
                <h2 className="font-sans text-5xl md:text-7xl font-black tracking-tighter text-white leading-none">
                  HASSAAN<br/>KHAN.
                </h2>
                <p className="mt-4 font-mono text-[10px] font-bold tracking-widest uppercase text-zinc-400">
                  Principal Architect · Digital Storefront
                </p>
              </div>
              <div className="flex flex-col gap-3 font-sans text-sm font-bold text-zinc-400 text-right">
                <Link className="hover:text-white transition-colors" href="/catalog">Catalog</Link>
                <Link className="hover:text-white transition-colors" href="/partners">Partners</Link>
                <Link className="hover:text-white transition-colors" href="/contact">Contact</Link>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-zinc-800">
              <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-bold">
                © {new Date().getFullYear()} M. Hassaan Khan
              </div>
              <div className="flex items-center gap-6 text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-500">
                <Link className="hover:text-white transition-colors" href="/privacy">Privacy</Link>
                <Link className="hover:text-white transition-colors" href="/terms">Terms</Link>
              </div>
            </div>
          </div>
        </footer>
        <Script src="https://app.lemonsqueezy.com/js/lemon.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
