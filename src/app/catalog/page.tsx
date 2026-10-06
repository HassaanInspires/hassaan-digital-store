import React from "react";
import { PRODUCTS } from "@/data/products";
import { StorefrontCatalog } from "@/components/catalog/StorefrontCatalog";

export default function CatalogPage() {
  return (
    <div className="min-h-screen text-zinc-950 font-sans selection:bg-zinc-200 selection:text-zinc-900 pt-32 sm:pt-40 pb-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-3 max-w-2xl">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-zinc-100 text-zinc-800 border border-zinc-200">
            Precision Catalog · 2026
          </span>
          <h1 className="font-sans text-4xl sm:text-6xl font-black tracking-tighter text-zinc-950 leading-[0.95]">
            Engineering Blueprints &amp; Tooling
          </h1>
          <p className="font-sans text-base sm:text-lg text-zinc-600 leading-relaxed">
            Direct access to production-tested architectures, accessible UI systems, and curated cloud infrastructure.
          </p>
        </div>

        {/* Dynamic Filtered Product Grid */}
        <div className="pt-4">
          <StorefrontCatalog products={PRODUCTS} />
        </div>
      </div>
    </div>
  );
}
