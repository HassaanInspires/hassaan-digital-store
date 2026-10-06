import React from "react";
import Link from "next/link";
import { FlatProductCover } from "./FlatProductCover";
import { LemonBuyButton } from "../checkout/LemonBuyButton";

export function SwissProductCard({ product }: { product: any }) {
  const meta = product.ui_metadata || {};
  
  const rawCat = (meta.category || product.category || "").toLowerCase();
  const category = (
    rawCat === "uikit" || rawCat === "ui-kit" || rawCat === "ui" ? "uikit" :
    rawCat === "infrastructure" || rawCat === "infra" || rawCat === "cloud" ? "infrastructure" :
    rawCat === "ebook" || rawCat === "book" ? "ebook" :
    product.slug?.includes("glass") || product.title?.toLowerCase().includes("glass") || product.id?.includes("glass") ? "uikit" :
    product.slug?.includes("infra") || product.title?.toLowerCase().includes("infra") || product.slug?.includes("supabase") || product.id?.includes("infra") || product.id?.includes("supabase") ? "infrastructure" :
    "ebook"
  );

  const badge = meta.badge || product.badge || (
    category === "uikit" ? "UI Kit" :
    category === "infrastructure" ? "Infrastructure" :
    "E-Book"
  );

  const categoryLabel = (
    category === "uikit" ? "UI Kit" :
    category === "infrastructure" ? "Infrastructure" :
    "E-Book"
  );

  const slug = product.slug || product.id || "";

  const originalPrice = meta.original_price ?? product.original_price ?? (
    (slug === "hyper-glass-design-engine") ? 99 :
    (meta.originalPrice ?? null)
  );
  const hasDiscount = Boolean(originalPrice && Number(originalPrice) > Number(product.price));

  return (
    <div className="group relative flex flex-col bg-white/60 backdrop-blur-xl border border-zinc-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1 rounded-[24px] overflow-hidden transition-all duration-500">
      
      {/* 2D Flat Cover Area */}
      <Link href={`/products/${slug}`} className="block relative p-4 pb-0">
        <div className="rounded-[16px] overflow-hidden bg-zinc-50 border border-zinc-100 relative">
          <FlatProductCover
            category={category}
            title={product.title}
            badge={badge}
          />
          {/* Top Left: Glassy Category Pill */}
          <div className="absolute top-4 left-4 z-20">
            <span className="bg-white/80 backdrop-blur-md text-zinc-900 border border-zinc-200/50 px-3 py-1.5 rounded-full text-[9px] font-black tracking-widest uppercase shadow-sm">
              {categoryLabel}
            </span>
          </div>
        </div>
      </Link>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <Link href={`/products/${slug}`} className="block mb-2">
          <h3 className="text-xl font-bold tracking-tight text-zinc-950 leading-snug group-hover:text-blue-600 transition-colors line-clamp-1">
            {product.title}
          </h3>
        </Link>
        <p className="text-sm text-zinc-500 leading-relaxed line-clamp-2 mb-6">
          {product.subtitle || product.description}
        </p>

        {/* Condensed Action Row */}
        <div className="mt-auto pt-5 border-t border-zinc-200/50 flex items-center justify-between gap-4">
          <div className="flex flex-col">
            <span className="text-xl font-black text-zinc-950 tracking-tighter leading-none">
              {Number(product.price) === 0 ? "Free" : `$${Number(product.price).toFixed(2)}`}
            </span>
            {hasDiscount && (
              <span className="text-xs font-mono text-zinc-400 line-through mt-1">
                ${Number(originalPrice).toFixed(2)}
              </span>
            )}
          </div>
          
          <div className="w-32 [&>a]:rounded-full">
            <LemonBuyButton variantId={meta.lemon_variant_id || product.lemon_variant_id} />
          </div>
        </div>
      </div>
    </div>
  );
}
