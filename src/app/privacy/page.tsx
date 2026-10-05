import Link from "next/link";

export const metadata = { title: "Privacy Policy | M. Hassaan Khan" };

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-24 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto prose prose-zinc lg:prose-lg">
        <Link className="text-sm font-mono text-zinc-400 hover:text-zinc-900 no-underline mb-8 inline-block" href="/">← Back to Store</Link>
        <h1 className="text-4xl font-black tracking-tight text-zinc-950 mb-8">Privacy Policy</h1>
        <p className="text-zinc-600">Last updated: October 2026</p>
        <hr className="my-8 border-zinc-100" />
        <h2 className="text-2xl font-bold text-zinc-900 mt-10 mb-4">1. Information Collection</h2>
        <p className="text-zinc-600">We collect information that you provide directly to us when you make a purchase, subscribe to a newsletter, or communicate with us. Payment processing is securely handled by our Merchant of Record, Lemon Squeezy.</p>
        <h2 className="text-2xl font-bold text-zinc-900 mt-10 mb-4">2. Use of Information</h2>
        <p className="text-zinc-600">We use the information we collect to deliver digital products, process transactions, and send technical notices. We do not sell your personal data to third parties.</p>
        <h2 className="text-2xl font-bold text-zinc-900 mt-10 mb-4">3. Data Security</h2>
        <p className="text-zinc-600">We implement industry-standard security measures. However, no digital transmission is entirely secure. All payment data is encrypted and managed exclusively by our payment processors.</p>
      </div>
    </main>
  );
}
