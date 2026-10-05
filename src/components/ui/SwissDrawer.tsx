"use client";

import React, { useEffect, useState } from "react";
import { X, ShieldCheck, Download, CheckCircle2, ArrowRight } from "lucide-react";
import { Product } from "@/data/products";
import { StudioProductRender } from "./StudioProductRender";

interface SwissDrawerProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function SwissDrawer({ product, isOpen, onClose }: SwissDrawerProps) {
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !product) return null;

  const handleCheckout = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      alert(
        `Initiating Lemon Squeezy Checkout for "${product.title}" ($${product.price}). HMAC signature verification enforced.`
      );
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end overflow-hidden h-[100dvh]">
      {/* Soft Ambient Backdrop */}
      <div
        className="fixed inset-0 bg-zinc-950/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Swiss Slide-Over Sheet (Strict Flex Column h-full max-h-[100dvh] overflow-hidden) */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="swiss-drawer-title"
        className="relative z-10 w-full max-w-lg bg-white shadow-2xl border-l border-zinc-200 flex flex-col h-full max-h-[100dvh] overflow-hidden transform-gpu [transform:translateZ(0)] transition-transform duration-300 ease-out animate-in slide-in-from-right duration-300"
      >
        {/* 1. Header: Fixed and non-collapsible (shrink-0) */}
        <div className="shrink-0 px-6 py-4 border-b border-zinc-100 flex items-center justify-between bg-white z-10">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-zinc-100 text-zinc-800 border border-zinc-200">
            {product.badge}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="min-h-[44px] min-w-[44px] rounded-full bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center text-zinc-700 hover:text-zinc-950 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950"
            aria-label="Close drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 2. Scrollable Body: Independent flex-1 min-h-0 container that scrolls smoothly */}
        <div className="flex-1 min-h-0 overflow-y-auto p-6 space-y-6 overscroll-contain">
          <div className="rounded-2xl overflow-hidden border border-zinc-200/80">
            <StudioProductRender
              type={product.category}
              title={product.title}
              badge={product.badge}
            />
          </div>

          <div className="space-y-2">
            <h2
              id="swiss-drawer-title"
              className="font-sans text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950 leading-tight"
            >
              {product.title}
            </h2>
            <p className="font-sans text-sm font-normal text-zinc-600 leading-relaxed">
              {product.subtitle}
            </p>
          </div>

          {/* Pricing Box */}
          <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/80 flex items-center justify-between">
            <div>
              <span className="font-sans text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                Single Commercial License
              </span>
              <div className="font-sans text-3xl font-extrabold text-zinc-950">
                ${product.price}.00
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-700 bg-white px-3 py-1.5 rounded-full border border-zinc-200 shadow-sm">
              <Download className="w-3.5 h-3.5 text-emerald-600" />
              <span>Instant Download</span>
            </div>
          </div>

          {/* Deliverables Checklist */}
          {product.details.deliverables && (
            <div className="space-y-3">
              <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-zinc-500">
                Specifications &amp; Included Assets
              </h3>
              <ul className="space-y-2.5">
                {product.details.deliverables.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 font-sans text-xs sm:text-sm font-medium text-zinc-800"
                  >
                    <CheckCircle2 className="w-4 h-4 text-zinc-950 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Zero-Trust Social DRM Security Guarantee */}
          <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-1.5">
            <div className="flex items-center gap-2 font-sans text-xs font-bold text-zinc-950">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Zero-Trust Asset Security</span>
            </div>
            <p className="font-sans text-xs font-normal text-zinc-600 leading-relaxed">
              {product.details.securityNotice ||
                "Delivered via an ephemeral 60-second signed URL with server-side social DRM watermarking."}
            </p>
          </div>
        </div>

        {/* 3. Sticky Bottom Container: shrink-0, sticky bottom-0, shadow separator */}
        <div className="shrink-0 sticky bottom-0 bg-white border-t border-zinc-200 z-20 p-5 sm:p-6 shadow-[0_-12px_24px_rgba(0,0,0,0.06)] space-y-2">
          <button
            type="button"
            onClick={handleCheckout}
            disabled={isProcessing}
            className="w-full min-h-[48px] rounded-full bg-zinc-950 hover:bg-zinc-800 active:scale-[0.99] text-white font-sans text-sm font-semibold transition-all flex items-center justify-center gap-2 shadow-lg shadow-zinc-950/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950"
          >
            {isProcessing ? (
              <span>Connecting Secure Checkout...</span>
            ) : (
              <>
                <span>Complete Purchase with Lemon Squeezy</span>
                <ArrowRight className="w-4 h-4 text-zinc-300" />
              </>
            )}
          </button>
          <p className="text-center font-sans text-[11px] font-medium text-zinc-500">
            Encrypted checkout · Zero-trust HMAC SHA-256 webhook verified
          </p>
        </div>
      </div>
    </div>
  );
}
