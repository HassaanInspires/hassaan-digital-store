"use client";
import { useState } from "react";
import Link from "next/link";
import { BOOKS } from "../../../../data/partners";

export default function CatalogGrid() {
  const [activeFilter, setActiveFilter] = useState<"All" | "Personal" | "Community">("All");
  
  const filteredBooks = BOOKS.filter(book => activeFilter === "All" ? true : book.trustTier === activeFilter);

  return (
    <div className="w-full">
      <div className="w-full flex sm:justify-start gap-2 mb-10 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {["All", "Personal", "Community"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveFilter(tab as "All" | "Personal" | "Community")}
            className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all whitespace-nowrap ${
              activeFilter === tab
                ? "bg-zinc-950 text-white"
                : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 hover:text-zinc-950"
            }`}
          >
            {tab === "All" ? "All Works" : tab === "Personal" ? "Vetted Only" : "Community"}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBooks.map((book) => (
          <Link
            href={`/partners/zeeshan-usmani/books/${book.id}`}
            key={book.id}
            className="bg-white rounded-[2rem] p-4 shadow-sm border border-zinc-100 flex flex-col group hover:shadow-xl hover:border-zinc-200 hover:-translate-y-1 transition-all duration-300"
          >
            {/* CHUNK 2: Museum-Framed Image Container */}
            <div className="bg-zinc-50/80 rounded-2xl aspect-[4/5] relative flex flex-col items-center justify-center overflow-hidden mb-5 border border-zinc-100">
              <div className="absolute top-3 left-3 bg-zinc-900/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[9px] font-bold tracking-widest uppercase text-white shadow-sm border border-white/10 z-10">
                {book.badge}
              </div>
              {book.coverImage ? (
                <img src={book.coverImage} alt={book.title} className="w-full h-full object-contain p-4 sm:p-6 group-hover:scale-105 transition-transform duration-700" />
              ) : (
                <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-400">Cover Artwork</span>
              )}
            </div>

            {/* Metadata Container */}
            <div className="px-2 pb-2 flex flex-col flex-grow">
              {/* CHUNK 3: Monochromatic Editorial Metadata */}
              <div className="flex items-center justify-between mb-4 mt-2 px-1">
                <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-widest">{book.pages}</span>
                {book.trustTier === 'Personal' ? (
                  <span className="px-2.5 py-1 rounded-md text-[9px] font-bold tracking-widest uppercase bg-zinc-950 text-white shadow-sm">
                    ✓ Vetted
                  </span>
                ) : (
                  <span className="px-2.5 py-1 rounded-md text-[9px] font-bold tracking-widest uppercase bg-transparent text-zinc-500 border border-zinc-200">
                    Community
                  </span>
                )}
              </div>

              <h3 className="text-lg font-bold text-zinc-950 leading-tight mb-2 px-1 group-hover:text-zinc-600 transition-colors">
                {book.title}
              </h3>

              <p className="text-sm text-zinc-500 leading-relaxed mb-6 px-1 line-clamp-3">
                {book.description}
              </p>

              {/* Editorial Curator Note */}
              {book.curatorNote && (
                <div className="border-l-2 border-emerald-400 pl-3 mb-6">
                  <p className="text-xs text-zinc-600 italic font-serif leading-relaxed">&ldquo;{book.curatorNote}&rdquo;</p>
                </div>
              )}

              {/* CHUNK 4: Collision-Free Split Footer */}
              <div className="mt-auto flex items-center justify-between pt-5 border-t border-zinc-100">
                <span className="text-[11px] font-semibold tracking-wide text-zinc-500 group-hover:text-zinc-950 transition-colors flex items-center gap-1">
                  {book.trustTier === 'Personal' ? 'Read review' : 'View details'} <span className="text-sm leading-none">→</span>
                </span>
                <span className="bg-zinc-950 text-white px-4 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-md group-hover:bg-zinc-800 transition-colors flex items-center gap-1">
                  Get Copy <span className="text-xs leading-none">↗</span>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
