import Link from "next/link";

export const metadata = { title: "Contact | M. Hassaan Khan" };

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-24 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center">
        <Link className="text-sm font-mono text-zinc-400 hover:text-zinc-900 mb-12 inline-block" href="/">← Back to Store</Link>
        <h1 className="text-5xl font-black tracking-tight text-zinc-950 mb-6">Contact Support</h1>
        <p className="text-lg text-zinc-600 mb-12 max-w-xl mx-auto">For technical assistance, billing inquiries, or mentorship scheduling, please reach out directly.</p>
        <div className="bg-slate-50 border border-zinc-100 rounded-2xl p-8 sm:p-12">
          <a href="mailto:support@muhammadhassaankhan.com" className="inline-block bg-zinc-950 text-white px-8 py-4 rounded-full font-bold tracking-wide hover:bg-zinc-800 transition-colors shadow-lg hover:-translate-y-1">
            support@muhammadhassaankhan.com
          </a>
          <p className="text-sm text-zinc-500 mt-6 font-mono uppercase tracking-widest">Expected response time: 24-48 Hours</p>
        </div>
      </div>
    </main>
  );
}
