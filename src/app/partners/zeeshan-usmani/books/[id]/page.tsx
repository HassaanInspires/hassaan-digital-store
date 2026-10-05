import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BOOKS } from "@/data/partners";

interface BookPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return BOOKS.map((book) => ({
    id: book.id,
  }));
}

export default async function BookDetailPage({ params }: BookPageProps) {
  const { id } = await params;
  const book = BOOKS.find((b) => b.id === id);

  if (!book) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 pt-40 pb-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <Link
          className="inline-flex items-center text-sm font-mono text-zinc-500 hover:text-zinc-900 transition-colors mb-12"
          href="/partners"
        >
          ← Back to Hub
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Left Column (70%): Editorial Hierarchy & Conditional Takeaways */}
          <div className="lg:col-span-8 space-y-12">
            <header>
              <span className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest uppercase bg-zinc-900 text-white rounded-full">
                {book.badge}
              </span>
              <h1 className="text-5xl sm:text-6xl font-black text-zinc-950 tracking-tight leading-[1.1] mb-6">
                {book.title}
              </h1>
              <p className="text-xl text-zinc-600 leading-relaxed max-w-2xl">
                {book.description}
              </p>
            </header>

            {/* Conditional Top 3 Takeaways Grid */}
            {book.topTakeaways && book.topTakeaways.length > 0 && (
              <section>
                <h2 className="text-sm font-bold font-mono tracking-widest text-zinc-400 uppercase mb-6">
                  Top 3 Takeaways
                </h2>
                <div className="grid gap-4">
                  {book.topTakeaways.map((takeaway, i) => (
                    <div
                      key={i}
                      className="p-6 bg-white border border-zinc-200/50 rounded-2xl shadow-sm text-zinc-800 leading-relaxed font-medium"
                    >
                      {takeaway}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Conditional Inside the Book Gallery */}
            {book.galleryImages && book.galleryImages.length > 0 && (
              <section className="my-12">
                <h2 className="text-sm font-bold font-mono tracking-widest text-zinc-400 uppercase mb-6">
                  Inside the Book
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {book.galleryImages.map((img, i) => (
                    <div
                      key={i}
                      className="aspect-[4/3] relative rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200/60 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <img
                        src={img}
                        alt="Book interior preview"
                        className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Editorial Prose Container */}
            <article className="prose prose-zinc lg:prose-lg mt-12 max-w-none">
              <h2 className="text-2xl font-bold text-zinc-900">Why I Recommend This</h2>
              <p className="text-zinc-600 leading-relaxed">
                This is where the long-form editorial review will be injected from the database in the future. The typography plugin will automatically format paragraphs, bold text, and lists.
              </p>
            </article>
          </div>

          {/* Right Column (30% Sticky): Frosted Glass Metadata Card */}
          <div className="lg:col-span-4 relative">
            <div className="sticky top-32 bg-white/80 backdrop-blur-2xl border border-white shadow-2xl rounded-[2rem] p-8 flex flex-col space-y-8">
              <div className="space-y-2">
                <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest">
                  Metadata
                </h3>
                <div className="text-2xl font-bold text-zinc-900">
                  {book.pages.includes("Pages") ? book.pages : `${book.pages} Pages`}
                </div>
              </div>

              <a
                href={book.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-zinc-950 hover:bg-zinc-800 text-white rounded-full font-bold text-sm tracking-wide text-center transition-all shadow-lg active:scale-95"
              >
                Access Official Copy ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
