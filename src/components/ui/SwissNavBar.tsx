"use client";

import React from "react";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";

interface SwissNavBarProps {
  onOpenAnchor?: () => void;
}

export function SwissNavBar({ onOpenAnchor }: SwissNavBarProps) {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-3xl h-14 bg-[#09090b]/85 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl flex items-center justify-between px-6 transition-all">
      {/* Left: Minimal High-Contrast White Monogram Logo (HK) linking to Home */}
      <Link
        href="/"
        className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-full py-1"
      >
        <div className="w-8 h-8 rounded-full bg-white text-zinc-950 flex items-center justify-center font-bold text-xs tracking-wider shadow-sm group-hover:bg-zinc-200 transition-colors">
          HK
        </div>
        <span className="font-sans text-xs font-bold tracking-tight text-white hidden sm:inline">
          Studio
        </span>
      </Link>

      {/* Center: Global Apple-Style Navigational Links */}
      <nav
        className="flex items-center gap-6 sm:gap-8 text-xs font-medium tracking-wide"
        aria-label="Global Store Navigation"
      >
        <Link
          href="/"
          className="text-white/70 hover:text-white transition-colors py-1 text-xs font-medium"
        >
          Home
        </Link>
        <Link
          href="/catalog"
          className="text-white/70 hover:text-white transition-colors py-1 text-xs font-medium"
        >
          Catalog
        </Link>
        <Link
          href="/partners"
          className="text-white/70 hover:text-white transition-colors py-1 text-xs font-medium"
        >
          Partners
        </Link>
      </nav>

      {/* Right: Cart Button */}
      <div className="flex items-center gap-2">
        {onOpenAnchor ? (
          <button
            type="button"
            onClick={onOpenAnchor}
            className="min-h-[36px] bg-white/10 hover:bg-white/20 text-white rounded-full px-4 py-1.5 text-xs font-semibold flex items-center gap-2 transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white border border-white/10"
            aria-label="Open Cart"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-white/90" />
            <span className="hidden xs:inline">Cart ($47)</span>
          </button>
        ) : (
          <Link
            href="/products/autonomous-systems-architecture"
            className="min-h-[36px] bg-white/10 hover:bg-white/20 text-white rounded-full px-4 py-1.5 text-xs font-semibold flex items-center gap-2 transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white border border-white/10"
            aria-label="Open Cart"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-white/90" />
            <span className="hidden xs:inline">Cart ($47)</span>
          </Link>
        )}
      </div>
    </header>
  );
}
