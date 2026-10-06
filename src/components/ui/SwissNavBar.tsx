"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ShoppingBag, Menu, X } from "lucide-react";

interface SwissNavBarProps {
  onOpenAnchor?: () => void;
}

export function SwissNavBar({ onOpenAnchor }: SwissNavBarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-[60] w-[calc(100%-2rem)] max-w-2xl h-14 bg-zinc-900/60 backdrop-blur-2xl backdrop-saturate-150 border border-white/10 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center justify-between px-2 sm:px-4 transition-all">
        {/* Left: Minimal High-Contrast Monogram Logo (HK) linking to Home */}
        <Link
          href="/"
          onClick={() => setMobileMenuOpen(false)}
          className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-full py-1 pl-1 pr-4 hover:bg-white/10 transition-colors"
        >
          <div className="w-9 h-9 rounded-full bg-white text-zinc-950 flex items-center justify-center font-bold text-xs tracking-wider shadow-sm group-hover:scale-105 transition-transform">
            HK
          </div>
          <span className="font-sans text-xs font-bold tracking-widest uppercase text-white hidden sm:inline">
            Storefront
          </span>
        </Link>

        {/* Center: Global Apple-Style Navigational Links (Hidden on Mobile) */}
        <nav
          className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-wide"
          aria-label="Global Store Navigation"
        >
          <Link href="/" className="text-white/70 hover:text-white transition-colors py-2">
            Home
          </Link>
          <Link href="/catalog" className="text-white/70 hover:text-white transition-colors py-2">
            Catalog
          </Link>
          <Link href="/partners" className="text-white/70 hover:text-white transition-colors py-2">
            Partners
          </Link>
        </nav>

        {/* Right: Cart Button & Mobile Menu Toggle */}
        <div className="flex items-center justify-end gap-2 pr-1">
          {onOpenAnchor ? (
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAnchor();
              }}
              className="w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all active:scale-95 border border-white/10 shadow-sm"
              aria-label="Open Cart"
            >
              <ShoppingBag className="w-4 h-4 text-white/90" />
            </button>
          ) : (
            <Link
              href="/catalog"
              className="w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all active:scale-95 border border-white/10 shadow-sm"
              aria-label="Browse Catalog"
            >
              <ShoppingBag className="w-4 h-4 text-white/90" />
            </Link>
          )}

          {/* Mobile Menu Toggle (Visible only on mobile) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all active:scale-95 border border-white/10 shadow-sm"
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-4 h-4 text-white/90" />
            ) : (
              <Menu className="w-4 h-4 text-white/90" />
            )}
          </button>
        </div>
      </header>

      {/* Full-Screen Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-zinc-950/80 backdrop-blur-xl flex flex-col items-center justify-center animate-in fade-in duration-300">
          <nav className="flex flex-col items-center gap-8 text-2xl font-bold tracking-tight">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-zinc-300 transition-colors">
              Home
            </Link>
            <Link href="/catalog" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-zinc-300 transition-colors">
              Catalog
            </Link>
            <Link href="/partners" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-zinc-300 transition-colors">
              Partners
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
