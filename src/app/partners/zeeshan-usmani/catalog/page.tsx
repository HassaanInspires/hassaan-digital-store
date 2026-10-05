import { Metadata } from "next";
import Link from "next/link";
import CatalogGrid from "./CatalogGrid";

export const metadata: Metadata = {
  title: "The Complete Catalog | Dr. Zeeshan Usmani",
  description: "Explore the complete library of Dr. Zeeshan Usmani's books and masterclasses. Featuring verified ethical reviews and community-driven curriculum data.",
};

export default function CatalogPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 sm:pt-40 pb-20">
      <main className="max-w-6xl mx-auto px-4 sm:px-6">
        <Link href="/partners" className="inline-flex items-center text-sm font-mono tracking-widest text-zinc-400 hover:text-zinc-900 uppercase transition-colors mb-12">
          ← Back to Hub
        </Link>
        
        <h1 className="text-4xl sm:text-5xl font-black text-zinc-950 tracking-tighter mb-6">
          The Complete Catalog
        </h1>
        
        <div className="bg-white border border-zinc-200 shadow-sm rounded-xl p-4 sm:p-6 mb-12 text-sm text-zinc-600 leading-relaxed max-w-3xl">
          <strong className="text-zinc-950">Curator&apos;s Note:</strong> Items marked &apos;Vetted&apos; have been reviewed directly. Items marked &apos;Community&apos; are aggregated official curriculum. This page contains verified affiliate links.
        </div>
        
        <CatalogGrid />
      </main>
    </div>
  );
}
