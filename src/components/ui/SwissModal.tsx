"use client";

import React, { useEffect } from "react";
import { X, ExternalLink, Sparkles, CheckCircle2 } from "lucide-react";
import { Product } from "@/data/products";

interface SwissModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function SwissModal({ product, isOpen, onClose }: SwissModalProps) {
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Soft Ambient Backdrop */}
      <div
        className="fixed inset-0 bg-zinc-950/30 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Swiss Modal Dialog */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="swiss-modal-title"
        className="relative z-10 w-full max-w-md rounded-3xl bg-white shadow-2xl border border-zinc-200 p-6 sm:p-8 space-y-6 transform-gpu [transform:translateZ(0)] text-zinc-950 animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-zinc-100 text-zinc-800 border border-zinc-200">
            Verified Partner Perk
          </span>
          <button
            type="button"
            onClick={onClose}
            className="min-h-[44px] min-w-[44px] rounded-full bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center text-zinc-700 hover:text-zinc-950 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Title */}
        <div className="space-y-2">
          <h2
            id="swiss-modal-title"
            className="font-sans text-2xl font-bold tracking-tight text-zinc-950"
          >
            {product.title}
          </h2>
          <p className="font-sans text-xs sm:text-sm font-normal text-zinc-600 leading-relaxed">
            {product.subtitle}
          </p>
        </div>

        {/* Partner Perk Callout */}
        <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80 flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-2xl bg-zinc-950 text-white flex items-center justify-center shrink-0 shadow-md">
            <Sparkles className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <div className="font-sans text-[10px] font-bold uppercase tracking-wider text-zinc-500">
              Community Compute Benefit
            </div>
            <div className="font-sans text-sm font-bold text-zinc-950">
              {product.details.perk || "$50 Partner Compute Credit Included"}
            </div>
          </div>
        </div>

        {/* Benefits Checklist */}
        {product.details.deliverables && (
          <ul className="space-y-2">
            {product.details.deliverables.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 font-sans text-xs font-medium text-zinc-700"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-zinc-950 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        <p className="font-sans text-[11px] font-normal text-zinc-500 leading-snug">
          Partner disclosure: Activating this referral applies complimentary compute credits to your project organization.
        </p>

        {/* Action Button */}
        <div className="pt-2">
          <a
            href={product.details.affiliateUrl || "https://supabase.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full block"
          >
            <button
              type="button"
              className="w-full min-h-[48px] rounded-full bg-zinc-950 hover:bg-zinc-800 text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 shadow-md"
            >
              <span>Claim $50 Credit on Supabase</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
