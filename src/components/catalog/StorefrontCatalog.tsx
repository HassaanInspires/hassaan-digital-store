"use client";
import React, { useState, useMemo } from "react";
import { SwissProductCard } from "../ui/SwissProductCard";

interface StorefrontCatalogProps {
  products: any[];
}

export function StorefrontCatalog({ products }: StorefrontCatalogProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  // Helper to extract normalized category for any product
  const getProductCategory = (p: any): string => {
    const raw = (p.ui_metadata?.category || p.category || "").toLowerCase();
    if (raw === "uikit" || raw === "ui-kit" || raw === "ui") return "uikit";
    if (raw === "infrastructure" || raw === "infra" || raw === "cloud") return "infrastructure";
    if (raw === "ebook" || raw === "book") return "ebook";
    if (p.slug?.includes("glass") || p.title?.toLowerCase().includes("glass") || p.id?.includes("glass")) return "uikit";
    if (p.slug?.includes("infra") || p.title?.toLowerCase().includes("infra") || p.id?.includes("infra") || p.slug?.includes("supabase")) return "infrastructure";
    return "ebook";
  };

  // Dynamically compute available categories from products payload
  const categories = useMemo(() => {
    const cats = new Set<string>();
    if (Array.isArray(products) && products.length > 0) {
      products.forEach((p) => {
        cats.add(getProductCategory(p));
      });
    }
    // If fewer than 2 categories detected in active dataset, ensure standard catalog facets exist
    if (cats.size < 2) {
      cats.add("ebook");
      cats.add("uikit");
      cats.add("infrastructure");
    }
    return ["All", ...Array.from(cats)];
  }, [products]);

  // Filter products by active category
  const filteredProducts = useMemo(() => {
    if (!products || products.length === 0) return [];
    if (activeCategory.toLowerCase() === "all") return products;
    return products.filter((p) => getProductCategory(p) === activeCategory.toLowerCase());
  }, [products, activeCategory]);

  // Clean human-readable facet labels
  const getCategoryLabel = (cat: string) => {
    switch (cat.toLowerCase()) {
      case "all":
        return "All";
      case "ebook":
        return "E-Books";
      case "uikit":
        return "UI Kits";
      case "infrastructure":
        return "Infrastructure";
      default:
        return cat.charAt(0).toUpperCase() + cat.slice(1);
    }
  };

  return (
    <div className="space-y-8">
      {/* Dynamic Filter Navigation Bar - ALWAYS Rendered */}
      <div className="flex flex-wrap items-center gap-2.5">
        {categories.map((category) => {
          const isActive = activeCategory.toLowerCase() === category.toLowerCase();
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`text-[10px] uppercase tracking-widest px-5 py-2.5 rounded-full font-bold transition-all duration-300 cursor-pointer ${
                isActive
                  ? "bg-zinc-950 text-white shadow-md shadow-zinc-950/10"
                  : "bg-white text-zinc-600 border border-zinc-200/80 hover:border-zinc-300 hover:text-zinc-950 shadow-sm"
              }`}
            >
              {getCategoryLabel(category)}
            </button>
          );
        })}
      </div>

      {/* Product Grid or Zero-Result State */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <SwissProductCard key={product.id || product.slug} product={product} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center rounded-3xl border border-dashed border-zinc-200 bg-white/60 p-8 space-y-3">
          <p className="text-sm font-semibold text-zinc-700">
            No products found matching &ldquo;{getCategoryLabel(activeCategory)}&rdquo;.
          </p>
          <p className="text-xs text-zinc-400">
            Try switching facets or browsing all architectural assets.
          </p>
          <button
            type="button"
            onClick={() => setActiveCategory("All")}
            className="mt-2 inline-flex items-center text-xs font-bold text-zinc-950 underline underline-offset-4 hover:text-blue-600 transition-colors"
          >
            Reset Filter
          </button>
        </div>
      )}
    </div>
  );
}
