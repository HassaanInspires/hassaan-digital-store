import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { StorefrontCatalog } from "@/components/catalog/StorefrontCatalog";
import { FlatProductCover } from "@/components/ui/FlatProductCover";
import { Product, PRODUCTS } from "@/data/products";

export default async function ConceptThreePage() {
  const { data: products, error } = await supabase
    .from('products')
    .select('*')
    .eq('is_active', true)
    .order('created_at', { ascending: false });

  if (error) console.error("Supabase fetch error:", error.message);

  const initialProducts: any[] = (products && products.length > 0) ? products : PRODUCTS;
  const allProducts: any[] = initialProducts.length > 1
    ? initialProducts
    : [
        ...initialProducts,
        ...PRODUCTS.filter(
          (item: Product) => !initialProducts.some((p: any) => p.slug === item.id || p.id === item.id)
        ),
      ];

  const anchorEbook =
    allProducts.find((p: any) => p.slug === "autonomous-systems-architecture" || p.id === "autonomous-systems-architecture") || null;
  const remainingProducts = allProducts.filter(
    (p: any) => p.slug !== "autonomous-systems-architecture" && p.id !== "autonomous-systems-architecture"
  );

  return (
    <div className="min-h-screen text-zinc-950 font-sans selection:bg-zinc-200 selection:text-zinc-900 bg-white">
      <main className="pt-24 pb-20">
        
        {/* HERO SECTION: Ultra-Premium Apple-Style Landing */}
        <section className="relative w-full overflow-hidden flex flex-col items-center justify-center text-center min-h-[85vh] pt-32 pb-32 border-b border-zinc-100">
          
          {/* Glassmorphic Background Elements */}
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-60 -z-20" />
          
          {/* Massive subtle glow orb behind the text for the transparent navbar to interact with */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-100/40 rounded-[100%] blur-[120px] -z-10 pointer-events-none" />
          
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-100 fill-mode-both inline-flex items-center gap-2 px-4 py-1.5 bg-white/80 backdrop-blur-md border border-zinc-200/60 rounded-full shadow-sm mb-8 relative z-10">
            <span className="w-1.5 h-1.5 bg-zinc-900 rounded-full animate-pulse" />
            <span className="font-sans text-xs font-bold tracking-tight text-zinc-600">
              Storefront 2026
            </span>
          </div>

          <h1 className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 fill-mode-both font-sans text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] max-w-5xl relative z-10">
            <span className="bg-gradient-to-br from-zinc-950 via-zinc-800 to-zinc-500 bg-clip-text text-transparent">
              Engineered for clarity.
            </span>
            <br/>
            <span className="text-zinc-950">
              Built for leverage.
            </span>
          </h1>

          <p className="animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300 fill-mode-both mt-8 font-sans text-lg md:text-xl text-zinc-600 max-w-2xl leading-relaxed relative z-10">
            Curated architectural blueprints, production component engines, and high-performance infrastructure by Muhammad Hassaan Khan.
          </p>

          <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500 fill-mode-both mt-12 flex flex-col items-center gap-6 relative z-10">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              {anchorEbook && (
                <Link 
                  href={`/products/${anchorEbook.slug}`}
                  className="group px-8 py-4 bg-zinc-950 hover:bg-zinc-800 text-white font-sans text-sm font-semibold rounded-full flex items-center gap-3 transition-all shadow-xl hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-0.5"
                >
                  Explore Anchor Release
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
              <a 
                href="#catalog"
                className="px-8 py-4 bg-white hover:bg-zinc-50 border border-zinc-200 text-zinc-900 font-sans text-sm font-semibold rounded-full transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                Browse Catalog
              </a>
            </div>

            {/* Micro Trust Signal directly under CTA */}
            <div className="flex items-center gap-4 mt-2">
              <div className="flex -space-x-2">
                {[1,2,3,4,5].map((i) => (
                  <div key={i} className="w-7 h-7 rounded-full border-2 border-white bg-zinc-200 flex items-center justify-center overflow-hidden">
                    {/* Placeholder for avatars, using a generic silhouette or initial */}
                    <span className="text-[9px] font-bold text-zinc-400">{i}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-bold text-zinc-800">Trusted by 5,000+ engineers</span>
                <span className="text-[10px] text-zinc-500 font-medium">Lifetime Access • Encrypted Delivery</span>
              </div>
            </div>
          </div>
        </section>

        {/* PRIMARY ANCHOR PRODUCT SHOWCASE (Flat 2D UI) */}
        {anchorEbook && (
          <section className="max-w-6xl mx-auto px-6 py-24 border-b border-zinc-100">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center bg-white/60 backdrop-blur-xl border border-zinc-200/60 p-8 sm:p-12 rounded-[2rem] shadow-sm">
              <div className="lg:col-span-5 rounded-[1.5rem] overflow-hidden border border-zinc-100">
                <FlatProductCover
                  category="ebook"
                  title={anchorEbook.title}
                  badge="Anchor Edition"
                />
              </div>
              <div className="lg:col-span-7 space-y-6">
                <span className="inline-block px-3 py-1.5 bg-zinc-100/80 text-zinc-800 font-sans text-xs font-semibold rounded-full border border-zinc-200/50">
                  Primary Release
                </span>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-950 leading-none">
                  {anchorEbook.title}
                </h2>
                <p className="text-lg text-zinc-600 leading-relaxed max-w-xl">
                  {anchorEbook.subtitle}
                </p>
                <div className="space-y-3 pt-4">
                  <div className="flex items-center gap-3 text-sm font-medium text-zinc-800">
                    <CheckCircle2 className="w-5 h-5 text-zinc-400" />
                    Zero-loss state machine workflows
                  </div>
                  <div className="flex items-center gap-3 text-sm font-medium text-zinc-800">
                    <CheckCircle2 className="w-5 h-5 text-zinc-400" />
                    Server-side DRM watermark protection
                  </div>
                </div>
                <div className="pt-6 flex items-center gap-6">
                  <span className="text-3xl font-black text-zinc-950">${anchorEbook.price}</span>
                  <Link
                    href={`/products/${anchorEbook.slug}`}
                    className="px-6 py-3 bg-zinc-950 hover:bg-zinc-800 text-white font-semibold rounded-full flex items-center gap-2 transition-colors shadow-md"
                  >
                    Inspect Details <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CATALOG SECTION */}
        {remainingProducts.length > 0 && (
          <section id="catalog" className="max-w-6xl mx-auto px-6 py-24">
            <div className="mb-12">
              <span className="font-mono text-[10px] font-bold tracking-widest uppercase text-zinc-500 block mb-2">
                Precision Catalog
              </span>
              <h2 className="text-4xl font-black tracking-tight text-zinc-950">
                All Engineering Assets
              </h2>
            </div>
            <StorefrontCatalog products={remainingProducts} />
          </section>
        )}
      </main>
    </div>
  );
}
