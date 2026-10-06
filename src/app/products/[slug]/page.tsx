import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { FlatProductCover } from "@/components/ui/FlatProductCover";
import { LemonBuyButton } from "@/components/checkout/LemonBuyButton";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Markdown from "react-markdown";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { data } = await supabase.from("products").select("title, description").eq("slug", slug).single();
  if (!data) return { title: "Product Not Found" };
  return { title: `${data.title} | M. Hassaan Khan`, description: data.description };
}

export async function generateStaticParams() {
  const { data: products } = await supabase.from("products").select("slug").eq("is_active", true);
  return (products || []).map((product) => ({ slug: product.slug }));
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const { data: dbProduct, error } = await supabase
    .from("products")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !dbProduct) {
    notFound();
  }

  const meta = dbProduct.ui_metadata || {};
  const isAffiliate = meta.type === "affiliate";

  // Use the universal variant ID resolution
  const variantId = dbProduct.lemon_squeezy_variant_id || meta.lemon_variant_id;

  return (
    <main className="min-h-screen bg-white pt-32 pb-24 px-6 selection:bg-zinc-200 selection:text-zinc-900">
      <div className="max-w-7xl mx-auto">
        <Link className="group inline-flex items-center gap-2 text-sm font-bold text-zinc-950 mb-12" href="/">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Hub
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          {/* Left Column: Massive 2D Cover & Overview (60%) */}
          <div className="lg:col-span-7 space-y-12">
            <FlatProductCover 
              title={dbProduct.title} 
              category={meta.category || "ebook"} 
              badge={meta.badge || "Primary Release"} 
            />
            
            <article className="prose prose-zinc lg:prose-lg prose-headings:font-black prose-a:text-blue-600 hover:prose-a:text-blue-500 max-w-none text-zinc-600">
              {dbProduct.content_markdown ? (
                <Markdown>{dbProduct.content_markdown}</Markdown>
              ) : (
                <>
                  <h2>Overview</h2>
                  <p className="leading-relaxed whitespace-pre-wrap">{dbProduct.description}</p>
                </>
              )}
            </article>
          </div>

          {/* Right Column: Sticky Checkout & Checklist (40%) */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-32 bg-white/60 backdrop-blur-3xl border border-zinc-200/50 shadow-2xl rounded-[2.5rem] p-8 sm:p-10 flex flex-col gap-8 overflow-hidden">
              {/* Subtle gradient glow behind the card */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -z-10" />

              {/* Badges */}
              <div className="flex items-center gap-3">
                <span className="bg-zinc-100/80 text-zinc-800 border border-zinc-200/50 px-3 py-1.5 text-xs font-sans font-semibold rounded-full">
                  {meta.badge || "Standard Edition"}
                </span>
              </div>
              
              {/* Title & Author */}
              <div>
                <h1 className="text-4xl sm:text-5xl font-black text-zinc-950 tracking-tighter leading-[1.05] mb-4">
                  {dbProduct.title}
                </h1>
                <p className="text-lg text-zinc-600 leading-relaxed mb-6">
                  {dbProduct.subtitle}
                </p>
                <div className="flex items-center gap-3 pt-6 border-t border-zinc-200/50">
                  <div className="w-10 h-10 rounded-full bg-zinc-950 flex items-center justify-center text-white font-bold text-sm shadow-md">
                    HK
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-zinc-950">M. Hassaan Khan</span>
                    <span className="text-xs text-zinc-500">Principal Architect</span>
                  </div>
                </div>
              </div>

              {/* Bento Checklist (No harsh box, just seamlessly integrated) */}
              {meta.details?.deliverables && (
                <div className="pt-6 border-t border-zinc-200/50">
                  <h3 className="text-[11px] font-semibold text-zinc-500 uppercase tracking-widest mb-4">Included Assets</h3>
                  <ul className="space-y-4">
                    {meta.details.deliverables.map((item: string, i: number) => (
                      <li key={i} className="flex items-start gap-3 text-sm font-medium text-zinc-800">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Price & Checkout */}
              <div className="pt-6 border-t border-zinc-200/50 space-y-6">
                <div>
                  <div className="flex items-end gap-2 mb-1">
                    <span className="text-5xl font-black tracking-tighter text-zinc-950 leading-none">
                      ${Number(dbProduct.price).toFixed(2)}
                    </span>
                    <span className="text-sm text-zinc-500 font-bold mb-1">USD</span>
                  </div>
                  <p className="text-sm text-emerald-600 font-medium">
                    {isAffiliate ? "External Referral Partner" : "Lifetime Access & Updates"}
                  </p>
                </div>

                <div>
                  {isAffiliate ? (
                    <a
                      href={meta.affiliateUrl || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center bg-zinc-950 hover:bg-zinc-800 text-white py-4 px-6 rounded-full text-sm font-semibold transition-all shadow-lg"
                    >
                      Access Partner Deal
                    </a>
                  ) : (
                    <div className="[&>a]:rounded-full [&>a]:py-4 [&>a]:shadow-lg">
                      <LemonBuyButton variantId={variantId} />
                    </div>
                  )}
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
