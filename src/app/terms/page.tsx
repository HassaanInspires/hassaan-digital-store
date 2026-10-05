import Link from "next/link";

export const metadata = { title: "Terms of Service | M. Hassaan Khan" };

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-24 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto prose prose-zinc lg:prose-lg">
        <Link className="text-sm font-mono text-zinc-400 hover:text-zinc-900 no-underline mb-8 inline-block" href="/">← Back to Store</Link>
        <h1 className="text-4xl font-black tracking-tight text-zinc-950 mb-8">Terms of Service</h1>
        <p className="text-zinc-600">Last updated: October 2026</p>
        <hr className="my-8 border-zinc-100" />
        <h2 className="text-2xl font-bold text-zinc-900 mt-10 mb-4">1. Digital Products & Delivery</h2>
        <p className="text-zinc-600">All products are digital and delivered immediately via email upon successful payment. Due to the irrevocable nature of digital goods, refunds are evaluated on a strict case-by-case basis.</p>
        <h2 className="text-2xl font-bold text-zinc-900 mt-10 mb-4">2. Intellectual Property</h2>
        <p className="text-zinc-600">All materials, blueprints, and code provided are the intellectual property of Muhammad Hassaan Khan. Purchasing a product grants a single-user license for personal or internal business use. Redistribution is strictly prohibited.</p>
        <h2 className="text-2xl font-bold text-zinc-900 mt-10 mb-4">3. Merchant of Record</h2>
        <p className="text-zinc-600">Our order process is conducted by our online reseller Lemon Squeezy. Lemon Squeezy is the Merchant of Record for all our orders. They handle customer service inquiries and returns related to payments.</p>
      </div>
    </main>
  );
}
