"use client";
import React from "react";
import { Lock } from "lucide-react";

interface LemonBuyButtonProps {
  variantId?: string;
}

export function LemonBuyButton({ variantId }: LemonBuyButtonProps) {
  if (variantId) {
    return (
      <a
        href={`https://store.muhammadhassaankhan.com/checkout/buy/${variantId}`}
        className="lemonsqueezy-button flex items-center justify-center gap-2 w-full bg-zinc-950 hover:bg-zinc-800 text-white py-3.5 px-4 rounded-full text-xs font-bold tracking-widest uppercase shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all"
      >
        <Lock className="w-3.5 h-3.5 text-zinc-400" />
        Secure Checkout
      </a>
    );
  }
  return (
    <button
      disabled
      className="flex items-center justify-center gap-2 w-full bg-zinc-100/80 border border-zinc-200/60 text-zinc-400 py-3.5 px-4 rounded-full text-xs font-bold tracking-widest uppercase shadow-none cursor-not-allowed transition-all"
    >
      Coming Soon
    </button>
  );
}
