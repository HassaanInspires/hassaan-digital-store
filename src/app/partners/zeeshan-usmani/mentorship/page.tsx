import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Private 1-on-1 Strategic Consulting | Dr. Zeeshan Usmani",
  description:
    "A dedicated, flexible consultation block to architect your systems, refine algorithmic models, or map your postgraduate trajectory.",
};

export default function MentorshipPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-40 pb-32 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <Link
          className="inline-flex items-center text-sm font-mono text-zinc-500 hover:text-zinc-900 transition-colors mb-12"
          href="/partners"
        >
          ← Back to Hub
        </Link>

        {/* Centered Hero & Badge */}
        <div className="text-center space-y-6 mb-16">
          <span className="inline-block px-4 py-1.5 text-xs font-bold tracking-widest uppercase bg-emerald-100 text-emerald-900 rounded-full">
            Verified Mentor Access
          </span>
          <h1 className="text-5xl sm:text-7xl font-black text-zinc-950 tracking-tight leading-[1.05]">
            Private 1-on-1
            <br />
            Strategic Consulting
          </h1>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            A dedicated, flexible consultation block to architect your systems, refine algorithmic models, or map your postgraduate trajectory.
          </p>
        </div>

        {/* Agenda & Prep Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-white p-8 rounded-3xl border border-zinc-200/60 shadow-sm">
            <h2 className="text-lg font-bold text-zinc-900 mb-4 font-mono uppercase tracking-widest">
              The Agenda
            </h2>
            <ul className="space-y-4 text-zinc-600 font-medium">
              <li className="flex gap-3">
                <span>01.</span> Current Architecture Review
              </li>
              <li className="flex gap-3">
                <span>02.</span> Bottleneck Identification
              </li>
              <li className="flex gap-3">
                <span>03.</span> Scalability Roadmapping
              </li>
            </ul>
          </div>
          <div className="bg-zinc-900 p-8 rounded-3xl shadow-xl text-zinc-300">
            <h2 className="text-lg font-bold text-white mb-4 font-mono uppercase tracking-widest">
              Preparation
            </h2>
            <p className="mb-4">To maximize value, please prepare:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2 text-emerald-400">
                ✓ System diagrams or codebase access
              </li>
              <li className="flex gap-2 text-emerald-400">
                ✓ Specific technical blockers
              </li>
            </ul>
          </div>
        </div>

        {/* Mento-Style Review & Testimonial */}
        <div className="mt-20 pt-16 border-t border-zinc-200">
          <h2 className="text-center text-sm font-bold font-mono tracking-widest text-zinc-400 uppercase mb-8">
            What Engineers Say
          </h2>
          <div className="bg-white p-8 sm:p-12 rounded-[2rem] border border-zinc-200/60 text-center shadow-sm max-w-3xl mx-auto">
            <p className="text-xl sm:text-2xl font-medium text-zinc-700 leading-relaxed mb-6 italic font-serif">
              &quot;Dr. Usmani re-architected our entire data pipeline in 45 minutes. The ROI on this session is incalculable.&quot;
            </p>
            <div className="font-mono text-xs uppercase tracking-widest text-zinc-500">
              — Senior Systems Architect, Dubai
            </div>
          </div>
        </div>

        {/* Floating Sticky CTA Pill Bar */}
        <div className="fixed bottom-8 left-0 right-0 flex justify-center z-50 pointer-events-none">
          <div className="pointer-events-auto bg-white/90 backdrop-blur-xl p-2 rounded-full shadow-2xl border border-zinc-200/80 flex items-center gap-6 pl-6">
            <span className="font-mono text-sm font-bold text-zinc-900">
              Flexible Slots
            </span>
            <a
              href="https://zeeshanusmani.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-zinc-950 hover:bg-zinc-800 text-white rounded-full font-bold text-sm tracking-wide transition-all shadow-lg active:scale-95"
            >
              Book Session ↗
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
