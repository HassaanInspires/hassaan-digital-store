import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { COURSES } from "@/data/partners";

interface CoursePageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return COURSES.map((course) => ({
    id: course.id,
  }));
}

export default async function CourseDetailPage({ params }: CoursePageProps) {
  const { id } = await params;
  const course = COURSES.find((c) => c.id === id);

  if (!course) {
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
          {/* Left Column (70%): Editorial Hierarchy & Dynamic Syllabus/Concepts */}
          <div className="lg:col-span-8 space-y-12">
            <header>
              <span className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest uppercase bg-zinc-900 text-white rounded-full">
                {course.badge}
              </span>
              <h1 className="text-5xl sm:text-6xl font-black text-zinc-950 tracking-tight leading-[1.1] mb-6">
                {course.title}
              </h1>
              <p className="text-xl text-zinc-600 leading-relaxed max-w-2xl">
                {course.description}
              </p>
            </header>

            {/* Condition A: Curriculum Syllabus Modules */}
            {course.syllabusModules && course.syllabusModules.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-zinc-900 mb-6">Curriculum</h2>
                <div className="space-y-4">
                  {course.syllabusModules.map((mod, i) => (
                    <div
                      key={i}
                      className="p-6 bg-white border border-zinc-200/60 rounded-2xl"
                    >
                      <h3 className="font-bold text-zinc-900">{mod.title}</h3>
                      <p className="text-zinc-600 mt-2">{mod.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Condition B: Core Concepts Fallback */}
            {(!course.syllabusModules || course.syllabusModules.length === 0) &&
              course.coreConcepts &&
              course.coreConcepts.length > 0 && (
                <section>
                  <h2 className="text-2xl font-bold text-zinc-900 mb-6">Core Concepts</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {course.coreConcepts.map((concept, i) => (
                      <div
                        key={i}
                        className="p-5 bg-white border border-zinc-200/60 rounded-xl text-zinc-800 font-medium"
                      >
                        {concept}
                      </div>
                    ))}
                  </div>
                </section>
              )}

            {/* Injected Review Quote */}
            {course.reviewQuote && (
              <blockquote className="relative pl-6 sm:pl-8 my-16 border-l-4 border-zinc-200">
                <p className="text-2xl sm:text-3xl font-medium text-zinc-700 leading-relaxed tracking-tight italic font-serif">
                  &quot;{course.reviewQuote}&quot;
                </p>
              </blockquote>
            )}

            {/* Editorial Prose Review Container */}
            <article className="prose prose-zinc lg:prose-lg mt-12 max-w-none">
              <h2 className="text-2xl font-bold text-zinc-900">My Review</h2>
              <p className="text-zinc-600 leading-relaxed">
                Long-form editorial review injected here.
              </p>
            </article>
          </div>

          {/* Right Column (30% Sticky): Frosted Glass Enrollment Card */}
          <div className="lg:col-span-4 relative">
            <div className="sticky top-32 bg-white/80 backdrop-blur-2xl border border-white shadow-2xl rounded-[2rem] p-8 flex flex-col space-y-8">
              <div className="space-y-2">
                <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest">
                  Duration
                </h3>
                <div className="text-2xl font-bold text-zinc-900">{course.duration}</div>
              </div>

              <a
                href={course.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-zinc-950 hover:bg-zinc-800 text-white rounded-full font-bold text-sm tracking-wide text-center transition-all shadow-lg active:scale-95"
              >
                Enroll in Masterclass ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
