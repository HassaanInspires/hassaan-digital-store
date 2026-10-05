"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Product } from "@/data/products";
import { StudioProductRender } from "./StudioProductRender";

interface SwissProductCardProps {
  product: Product;
  onAction?: (product: Product) => void;
}

export function SwissProductCard({ product, onAction }: SwissProductCardProps) {
  const router = useRouter();
  const isAffiliate = product.type === "affiliate";

  const handleAction = () => {
    if (onAction) {
      onAction(product);
    } else {
      router.push(`/products/${product.id}`);
    }
  };

  return (
    <div
      onClick={handleAction}
      className="group cursor-pointer rounded-2xl sm:rounded-3xl bg-white border border-zinc-200/90 p-5 sm:p-6 flex flex-col justify-between space-y-6 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:border-zinc-300 transform-gpu [transform:translateZ(0)]"
    >
      {/* Studio Render Viewport with scale physics on card hover */}
      <div className="w-full overflow-hidden rounded-xl sm:rounded-2xl">
        <StudioProductRender
          type={product.category}
          title={product.title}
          badge={product.badge}
        />
      </div>

      {/* Card Content */}
      <div className="space-y-4 flex-1 flex flex-col justify-between">
        <div className="space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wide uppercase bg-zinc-100 text-zinc-700 border border-zinc-200/60">
              {product.badge}
            </span>
            <span className="font-sans text-sm font-bold text-zinc-950">
              {isAffiliate ? "Free Perk" : `$${product.price}.00`}
            </span>
          </div>

          <h3 className="font-sans text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 group-hover:text-blue-600 transition-colors">
            {product.title}
          </h3>

          <p className="font-sans text-xs sm:text-sm font-normal text-zinc-600 leading-relaxed line-clamp-2">
            {product.subtitle}
          </p>
        </div>

        {/* Action Bar */}
        <div className="pt-3 border-t border-zinc-100 flex items-center justify-between">
          <span className="font-sans text-xs font-semibold text-zinc-950 group-hover:text-blue-600 flex items-center gap-1.5 transition-colors">
            <span>{isAffiliate ? "Claim $50 Credit" : "Explore Details"}</span>
            {isAffiliate ? (
              <ExternalLink className="w-3.5 h-3.5" />
            ) : (
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            )}
          </span>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleAction();
            }}
            className="min-h-[44px] min-w-[44px] px-4 rounded-full bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-semibold flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950"
            aria-label={`Open details for ${product.title}`}
          >
            {isAffiliate ? "Referral" : "View"}
          </button>
        </div>
      </div>
    </div>
  );
}
