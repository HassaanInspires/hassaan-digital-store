import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { SwissProductCard } from "@/components/ui/SwissProductCard";
import { LemonSqueezyCheckoutButton } from "@/components/products/LemonSqueezyCheckoutButton";
import { StudioProductRender } from "@/components/ui/StudioProductRender";

// Use standard Next.js 15 metadata generation
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { data } = await supabase.from("products").select("title, description").eq("slug", slug).single();
  if (!data) return { title: "Product Not Found" };
  return { title: `${data.title} | M. Hassaan Khan`, description: data.description };
}

// Generate static routes at build time
export async function generateStaticParams() {
  const { data: products } = await supabase.from("products").select("slug").eq("is_active", true);
  return (products || []).map((product) => ({ slug: product.slug }));
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // 100% Pure Supabase Fetch
  const { data: dbProduct, error } = await supabase
    .from("products")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !dbProduct) {
    notFound();
  }

  // Extract UI metadata from the JSONB column (with safe fallbacks)
  const meta = dbProduct.ui_metadata || {};
  const isAffiliate = meta.type === "affiliate";

  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <Link className="inline-flex items-center text-sm font-mono text-zinc-500 hover:text-zinc-900 transition-colors mb-12" href="/">
          ← Back to Hub
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Column: Editorial & Specs (70%) */}
          <div className="lg:col-span-8 space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3">
                <span className="bg-zinc-900 text-white px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-sm">
                  {meta.badge || "Standard Edition"}
                </span>
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                  {meta.category || "Digital Product"}
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-zinc-950 tracking-tighter leading-[1.1]">
                {dbProduct.title}
              </h1>
              <p className="text-xl sm:text-2xl text-zinc-600 leading-relaxed max-w-3xl">
                {dbProduct.subtitle}
              </p>
            </div>

            {/* Render details if they exist in JSONB */}
            {meta.details && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-zinc-200/60">
                {meta.details.deliverables && (
                  <div className="bg-white p-6 rounded-2xl border border-zinc-200/50 shadow-sm">
                    <h3 className="text-sm font-bold text-zinc-950 uppercase tracking-widest mb-4">Included Assets</h3>
                    <ul className="space-y-3">
                      {meta.details.deliverables.map((item: string, i: number) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-zinc-600">
                          <svg className="w-5 h-5 text-zinc-900 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            <article className="prose prose-zinc lg:prose-lg mt-12 max-w-none text-zinc-600">
              <h2 className="text-2xl font-bold text-zinc-900 mb-6">Overview</h2>
              <p className="leading-relaxed">{dbProduct.description}</p>
            </article>
          </div>

          {/* Right Column: Checkout Sticky Card (30%) */}
          <div className="lg:col-span-4 relative">
            <div className="sticky top-32 bg-white/80 backdrop-blur-2xl border border-white shadow-2xl rounded-[2rem] p-8 flex flex-col gap-8">
              <div className="aspect-[4/3] w-full rounded-xl bg-slate-100/50 border border-zinc-100 flex items-center justify-center p-4 relative overflow-hidden">
                <StudioProductRender type={meta.category || "ebook"} />
              </div>
              
              <div>
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-4xl font-black tracking-tighter text-zinc-950">
                    ${Number(dbProduct.price).toFixed(2)}
                  </span>
                  <span className="text-sm text-zinc-500 font-medium mb-1">USD</span>
                </div>
                <p className="text-sm text-zinc-500 font-medium">{isAffiliate ? "External Referral Partner" : "Lifetime Access & Updates"}</p>
              </div>

              <div className="pt-6 border-t border-zinc-100">
                <LemonSqueezyCheckoutButton affiliateUrl={meta.affiliateUrl} isAffiliate={isAffiliate} productId={dbProduct.lemon_squeezy_product_id} variantId={dbProduct.lemon_squeezy_variant_id} price={dbProduct.price} title={dbProduct.title} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
