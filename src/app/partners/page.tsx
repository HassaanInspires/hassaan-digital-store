"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Award,
  CheckCircle2,
  ShieldCheck,
  Calendar,
  Clock,
  ExternalLink,
  UserCheck,
} from "lucide-react";
import { COURSES, BOOKS } from "@/data/partners";

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-zinc-950 font-sans selection:bg-zinc-200 selection:text-zinc-900 pt-32 sm:pt-40 pb-32 px-4 sm:px-6">
      {/* TIER 1: The Masterclass Hero - Frosted Depth Chamber */}
      <section className="relative w-full overflow-hidden flex flex-col items-center justify-center pt-24 pb-32 sm:pt-32 sm:pb-40 px-4 text-center">
        {/* Fluid Background Typography (The z-0 Layer) */}
        <div
          className="relative sm:absolute inset-0 flex flex-col items-center justify-start sm:justify-center pointer-events-none select-none z-0 mb-8 sm:mb-0"
          aria-hidden="true"
        >
          <h1 className="font-sans font-black leading-[0.85] text-zinc-900 uppercase text-[15vw] sm:text-[12vw] lg:text-[10vw] tracking-tighter text-balance">
            ZEESHAN-UL-HASSAN<br />USMANI
          </h1>
        </div>

        {/* The Frosted Glass Capsule (The z-10 Layer) */}
        <div
          className="relative z-10 w-full max-w-[280px] sm:max-w-sm aspect-[4/5] rounded-[3rem] bg-white/40 backdrop-blur-md border border-white/60 shadow-2xl flex flex-col items-center justify-center p-6 mt-4 sm:mt-12 transform-gpu"
          style={{ animation: "fadeSlideUp 1s ease-out 0.3s both" }}
        >
          <div className="w-full h-full border-2 border-dashed border-zinc-400/50 rounded-[2rem] flex flex-col items-center justify-center text-zinc-700 gap-2 overflow-hidden">
            <UserCheck className="w-8 h-8 text-zinc-600 mb-1" />
            <span className="font-sans text-xs sm:text-sm font-bold tracking-wider uppercase text-zinc-800">
              PORTRAIT CAPSULE
            </span>
            <span className="font-mono text-[10px] text-zinc-500">
              JPG or Transparent PNG
            </span>
          </div>

          {/* Floating Nametag overlapping bottom edge */}
          <div className="absolute -bottom-4 bg-zinc-900 text-white px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase shadow-xl border border-white/20 z-20 whitespace-nowrap">
            Zeeshan Usmani
          </div>
        </div>
      </section>

      {/* Global Authority Metrics - Full Bleed */}
      <div className="-mx-4 sm:-mx-6 w-[calc(100%+2rem)] sm:w-[calc(100%+3rem)] border-y border-zinc-200 bg-white/50 mb-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-y-0 md:divide-x md:divide-zinc-200">
            <div className="text-center space-y-1.5 md:px-4">
              <div className="text-4xl sm:text-5xl font-black text-zinc-950 tracking-tighter">Top 1%</div>
              <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Kaggle Grandmaster</div>
            </div>
            <div className="text-center space-y-1.5 md:px-4">
              <div className="text-4xl sm:text-5xl font-black text-zinc-950 tracking-tighter">1.7M+</div>
              <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Citizens Upskilled</div>
            </div>
            <div className="text-center space-y-1.5 md:px-4">
              <div className="text-4xl sm:text-5xl font-black text-zinc-950 tracking-tighter">113+</div>
              <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Research Outputs</div>
            </div>
            <div className="text-center space-y-1.5 md:px-4">
              <div className="text-4xl sm:text-5xl font-black text-zinc-950 tracking-tighter">Fulbright</div>
              <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Global Scholar</div>
            </div>
          </div>
        </div>
      </div>

      {/* TIER 2: 1-on-1 Consulting (The Deep Dive) */}
      <section id="mentorship-review" className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column (col-span-5): Clean Typography & Editorial Recommendation */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-zinc-100 text-zinc-800 border border-zinc-200">
              <Award className="w-3.5 h-3.5 text-blue-600" />
              <span>Direct Advisory</span>
            </div>

            <h3 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950 leading-tight">
              Why I recommend his mentorship.
            </h3>

            <div className="space-y-4 text-sm text-zinc-600 leading-relaxed font-normal">
              <p>
                Navigating advanced algorithmic engineering, graduate research abroad, or scalable technical venture architecture often suffers from internet noise and superficial trends. Dr. Usmani provides uncompromising first-principles clarity.
              </p>
              <p>
                His advisory model strips away buzzwords to focus on rigorous mathematical fundamentals, defensible system architecture, and tangible career leverage. Whether preparing for a Ph.D. fellowship or architecting an enterprise ML system, this session delivers actionable precision.
              </p>
            </div>

            {/* Credibility Checklist */}
            <div className="pt-2 space-y-2.5 text-xs sm:text-sm font-medium text-zinc-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Postgraduate research &amp; Fulbright fellowship strategy</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Enterprise AI &amp; data architecture consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Confidential, private 1-on-1 video advisory</span>
              </div>
            </div>
          </div>

          {/* Right Column (col-span-7): Massive Frosted Glass Card */}
          <div className="lg:col-span-7">
            <div className="bg-white/80 backdrop-blur-3xl border border-white shadow-xl rounded-3xl p-8 sm:p-10 space-y-8">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Verified Mentor Access</span>
                </span>
                <span className="font-mono text-xs font-bold text-zinc-500 uppercase tracking-wider">
                  60-Minute Deep Dive
                </span>
              </div>

              <div className="space-y-3">
                <h4 className="font-sans text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950">
                  Private 1-on-1 Strategic Consulting
                </h4>
                <p className="font-sans text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
                  Reserve a dedicated consultation block directly with Dr. Zeeshan Usmani. Tailor the hour to your specific technical challenges, algorithmic blueprints, or doctoral career trajectory.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 py-3 border-y border-zinc-200/60 font-mono text-xs text-zinc-600">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-zinc-400" />
                  <span>Duration: Flexible Slots</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-zinc-400" />
                  <span>Format: Google Meet / Zoom</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <div>
                  <span className="block text-xs font-medium text-zinc-500">Official Booking Channel</span>
                  <span className="text-sm font-bold text-zinc-900">Direct Calendar Reservation</span>
                </div>

                <div className="flex flex-col-reverse sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto mt-4 sm:mt-0">
                  <Link
                    className="font-sans text-sm font-semibold text-zinc-600 hover:text-zinc-950 flex items-center justify-center gap-1 transition-colors group"
                    href="/partners/zeeshan-usmani/mentorship"
                  >
                    <span>View full details</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href="https://zeeshanusmani.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-2.5 bg-zinc-950 hover:bg-zinc-800 text-white rounded-full font-bold text-xs tracking-wide transition-all shadow-md active:scale-95 flex items-center justify-center gap-1.5"
                  >
                    <span>Book Session</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIER 3: Premium Video Courses ("Cinematic Curricula") */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 space-y-10">
        <div className="border-b border-zinc-200/80 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="font-sans text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Tier 3 Curriculum
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950 mt-1">
              Cinematic Curricula
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-zinc-500 max-w-sm">
            Self-paced masterclasses breaking down complex algorithmic engineering and intelligence systems.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {COURSES.map((course) => (
            <article
              key={course.id}
              className="bg-white/80 backdrop-blur-3xl border border-white shadow-xl rounded-3xl p-8 flex flex-col justify-between space-y-6 hover:shadow-2xl transition-all duration-300"
            >
              <div className="space-y-5">
                {/* 16:9 Aspect Video Placeholder Container */}
                <div className="aspect-video bg-zinc-950 rounded-xl mb-6 flex flex-col items-center justify-center text-zinc-500 border border-zinc-800 shadow-xl relative overflow-hidden">
                  <div className="absolute top-4 left-4 bg-white px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase text-zinc-950 shadow-md whitespace-nowrap">
                    {course.badge}
                  </div>
                  <span className="text-xs font-mono tracking-widest uppercase">Video Overview</span>
                </div>

                <div className="space-y-2.5">
                  <div className="flex items-center justify-end">
                    <span className="font-mono text-xs text-zinc-500 font-medium">
                      {course.duration}
                    </span>
                  </div>

                  <h3 className="font-sans text-2xl font-bold tracking-tight text-zinc-950">
                    {course.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                    {course.description}
                  </p>
                </div>
              </div>

              {/* Dual-Actions: Primary solid CTA (Enroll ↗) & Secondary text link (Read my review →) */}
              <div className="pt-4 border-t border-zinc-200/60 flex items-center justify-between gap-4">
                <Link
                  href={`/partners/zeeshan-usmani/courses/${course.id}`}
                  className="font-sans text-xs font-semibold text-zinc-600 hover:text-zinc-950 flex items-center gap-1.5 transition-colors group"
                >
                  <span>Read my review</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href={course.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 min-h-[44px] px-6 rounded-full bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-semibold transition-all active:scale-[0.98] shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950"
                  aria-label={`Enroll in ${course.title}`}
                >
                  <span>Enroll</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-300" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* TIER 4: The Book Library (Top Picks - "Essential Reading") */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 space-y-10">
        <div className="border-b border-zinc-200/80 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="font-sans text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Tier 4 Publications
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950 mt-1">
              Essential Reading
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-zinc-500 max-w-sm">
            Curated volumes published via Guftugu Publications spanning machine learning, computational logic, and career navigation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BOOKS.map((book) => (
            <article
              key={book.id}
              className="bg-white/80 backdrop-blur-3xl border border-white shadow-xl rounded-3xl p-6 flex flex-col justify-between space-y-5 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 ease-out"
            >
              <div className="space-y-4">
                {/* 2:3 Aspect Ratio Book Placeholder Container */}
                <div className="aspect-[2/3] bg-slate-100 rounded-lg mb-6 flex flex-col items-center justify-center text-zinc-400 border border-zinc-200 shadow-inner relative overflow-hidden">
                  <div className="absolute top-4 left-4 bg-zinc-950 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase text-white shadow-md whitespace-nowrap">
                    {book.badge}
                  </div>
                  <span className="text-[10px] font-mono tracking-widest uppercase">Cover Artwork</span>
                </div>

                <div className="space-y-2">
                  <div className="font-mono uppercase tracking-widest text-[10px] text-zinc-500 font-semibold mb-2">
                    {book.pages}
                  </div>

                  <h3 className="font-sans text-base font-bold tracking-tight text-zinc-950 leading-snug">
                    {book.title}
                  </h3>

                  {/* Strictly enforce line-clamp-2 to protect grid height */}
                  <p className="font-sans text-xs text-zinc-600 leading-relaxed font-normal line-clamp-2">
                    {book.description}
                  </p>
                </div>
              </div>

              {/* Card Actions: Primary solid CTA (Get Copy ↗) & Secondary internal review link */}
              <div className="flex items-center justify-between w-full pt-4 mt-auto border-t border-zinc-100">
                <Link
                  href={`/partners/zeeshan-usmani/books/${book.id}`}
                  className="font-sans text-xs font-semibold text-zinc-600 hover:text-zinc-950 flex items-center gap-1 transition-colors group"
                >
                  <span>Read review</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </Link>

                <a
                  href={book.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1 min-h-[36px] px-3.5 rounded-full bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-semibold transition-all active:scale-[0.98] shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950"
                  aria-label={`Get copy of ${book.title}`}
                >
                  <span>Get Copy</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-300" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center pt-12">
          <Link
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-zinc-200 shadow-sm text-sm font-bold text-zinc-900 hover:bg-zinc-50 hover:shadow-md transition-all active:scale-95 group"
            href="/partners/zeeshan-usmani/catalog"
          >
            <span>Explore Full Catalog (50+ Titles)</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-zinc-400 group-hover:text-zinc-900" />
          </Link>
        </div>
      </section>
    </div>
  );
}
