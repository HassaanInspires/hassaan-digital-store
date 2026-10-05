import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2 } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { SwissProductCard } from "@/components/ui/SwissProductCard";
import { StudioProductRender } from "@/components/ui/StudioProductRender";
import { Product } from "@/data/products";

export default async function ConceptThreePage() {
  // Fetch active products directly from Supabase
  const { data: products, error } = await supabase
    .from('products')
    .select('*')
    .eq('is_active', true)
    .order('created_at', { ascending: false });

  if (error) {
    console.error("Supabase fetch error:", error.message);
  }

  // Safely fallback to empty arrays if database is empty during initial setup
  const safeProducts = products || [];
  
  // Example of how to separate an anchor product if your UI requires it
  const anchorEbook = safeProducts.find((p) => p.slug === "autonomous-systems-architecture") || null;
  const remainingProducts = safeProducts.filter((p) => p.slug !== "autonomous-systems-architecture");

  return (
    <div className="min-h-screen bg-white text-zinc-950 font-sans selection:bg-zinc-200 selection:text-zinc-900 overflow-x-clip">
      {/* Main Content Area */}
      <main className="pt-14">
        {/* 2. HERO SECTION: Swiss Minimalism with Extreme Negative Space (pt-40) & Tighter Tracking */}
        <section
          id="overview"
          className="max-w-5xl mx-auto px-4 sm:px-6 pt-28 sm:pt-32 pb-24 sm:pb-32 text-center flex flex-col items-center justify-center space-y-8"
        >
          {/* Version Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-semibold text-zinc-800">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            <span>Storefront 2026 · Swiss Architecture</span>
          </div>

          {/* Massive, Bold, Center-Aligned Headline with tracking-tighter & leading-[0.92] */}
          <h1 className="font-sans text-6xl sm:text-7xl lg:text-[5.5rem] font-black tracking-tighter text-zinc-950 text-balance leading-[0.92]">
            Engineered for clarity. Built for leverage.
          </h1>

          {/* Hyper-Clean Subhead */}
          <p className="font-sans text-lg sm:text-2xl font-normal text-zinc-600 max-w-2xl mx-auto text-balance leading-relaxed">
            Curated architectural blueprints, production component engines, and high-performance infrastructure by Muhammad Hassaan Khan.
          </p>

          {/* Apple-Style Pill CTA Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            {anchorEbook ? (
              <Link 
                href={`/products/${anchorEbook.slug}`}
                className="w-full sm:w-auto min-h-[50px] px-8 rounded-full bg-zinc-950 hover:bg-zinc-800 text-white font-sans text-sm font-semibold transition-all active:scale-[0.98] shadow-lg shadow-zinc-950/15 flex items-center justify-center gap-2"
              >
                <span>Explore Anchor E-Book</span>
                <ArrowRight className="w-4 h-4 text-zinc-300" />
              </Link>
            ) : null}
            <a href="#catalog" className="w-full sm:w-auto">
              <button
                type="button"
                className="w-full sm:w-auto min-h-[50px] px-8 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-900 border border-zinc-200 font-sans text-sm font-semibold transition-all active:scale-[0.98]"
              >
                Browse Catalog
              </button>
            </a>
          </div>
        </section>

        {/* 3. PRIMARY ANCHOR PRODUCT SHOWCASE: Apple Feature Banner */}
        {anchorEbook && (
          <section
            id="anchor-ebook"
            className="max-w-6xl mx-auto px-4 sm:px-6 pb-20 sm:pb-28"
          >
            <div className="rounded-3xl bg-zinc-50 border border-zinc-200/90 p-8 sm:p-14 lg:p-16 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                {/* Product Copy & Metadata */}
                <div className="lg:col-span-6 space-y-6 text-left">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white text-zinc-800 border border-zinc-200 shadow-sm">
                    <BookOpen className="w-3.5 h-3.5 text-zinc-900" />
                    <span>Primary Release · 184 Pages</span>
                  </span>

                  <h2 className="font-sans text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 leading-tight">
                    {anchorEbook.title}
                  </h2>

                  <p className="font-sans text-base sm:text-lg font-normal text-zinc-600 leading-relaxed">
                    {anchorEbook.subtitle}
                  </p>

                  {/* Key Deliverables Highlights */}
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-zinc-700">
                      <CheckCircle2 className="w-4 h-4 text-zinc-950 shrink-0" />
                      <span>Zero-loss state machine &amp; deterministic routing workflows</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-zinc-700">
                      <CheckCircle2 className="w-4 h-4 text-zinc-950 shrink-0" />
                      <span>Server-side social DRM watermark protection with <code className="font-semibold text-zinc-900">pdf-lib</code></span>
                    </div>
                  </div>

                  {/* CTA & Price */}
                  <div className="pt-4 flex flex-wrap items-center gap-5">
                    <Link
                      href={`/products/${anchorEbook.slug}`}
                      className="min-h-[48px] px-7 rounded-full bg-zinc-950 hover:bg-zinc-800 text-white font-sans text-sm font-semibold transition-all active:scale-[0.98] shadow-md flex items-center gap-2"
                    >
                      <span>Inspect Details &amp; Buy</span>
                      <ArrowRight className="w-4 h-4 text-zinc-300" />
                    </Link>
                    <span className="font-sans text-2xl font-black text-zinc-950">
                      ${anchorEbook.price}
                    </span>
                  </div>
                </div>

                {/* Studio Physical Product Render */}
                <div className="lg:col-span-6 flex justify-center">
                  <div className="w-full max-w-md">
                    <StudioProductRender
                      type="ebook"
                      title={anchorEbook.title}
                      badge="Anchor Edition"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 4. PREMIUM PRODUCT GRID: Flawlessly Aligned 3-Column Studio Grid */}
        {remainingProducts.length > 0 && (
          <section
            id="catalog"
            className="max-w-6xl mx-auto px-4 sm:px-6 pb-28 sm:pb-36 space-y-10"
          >
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-zinc-200 pb-6">
              <div>
                <span className="font-sans text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  Precision Catalog
                </span>
                <h2 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950 mt-1">
                  All Engineering Assets
                </h2>
              </div>
              <p className="font-sans text-xs sm:text-sm text-zinc-500 max-w-xs">
                Every asset is architected for zero-friction integration in production stacks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {remainingProducts.map((product) => (
                <SwissProductCard
                  key={product.id}
                  product={product as unknown as Product}
                />
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
