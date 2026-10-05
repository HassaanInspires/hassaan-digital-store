# TECHNICAL SPECIFICATIONS & ARCHITECTURE

## 1. Domain & Mission
* **Domain:** `store.muhammadhassaankhan.com`
* **Purpose:** Muhammad Hassaan Khan Personal Digital Storefront — standalone platform for premium digital assets, engineering blueprints, AI agent templates, and curated developer affiliate resources.
* **Context Isolation:** Independent from any e-commerce legacy logic of Avicyn, upholding high-tech engineering rigor.

---

## 2. Core Stack Architecture
* **Framework:** Next.js 15+ (App Router)
* **Runtime:** Node.js v24.14 / Edge Runtime (Vercel)
* **Language:** TypeScript 5+ (Strict Mode)
* **Styling:** Tailwind CSS (Strictly Light Theme tokens)
* **Headless UI & Primitives:** Radix UI primitives, Lucide React icons, `clsx`, `tailwind-merge`, `class-variance-authority`
* **Animation & Polish:** Tailwind transition utilities & micro-interactions
* **Database & Auth:** Supabase PostgreSQL with migrations tracked in `supabase/migrations/`
* **Payments & Billing:** Lemon Squeezy with HMAC SHA-256 webhook cryptographic verification

---

## 3. Design System & Token Architecture (Strict Light Theme)

### Core Light Theme Philosophy
* High-contrast, hyper-clean developer aesthetic.
* Crisp off-white & white canvases.
* Hairline precision borders (`1px solid #E2E8F0` / `#E4E4E7`).
* Monospace micro-badges (`// Fixed-Price`, `[01]`, `0x4F`).
* Zero dark mode.

### Researched Typography Pairings (Switchable via Sandbox Widget)
1. **Pairing A (Hassaan Portfolio Inspired / High-Tech Standard):**
   * UI & Headings: `Geist Sans` (`var(--font-geist-sans)`)
   * Code & Micro-labels: `Geist Mono` (`var(--font-geist-mono)`)
   * Aesthetic: Precision engineered, minimalist, authoritative.
2. **Pairing B (Pragmatic Tech / High-Performance Dev Tool):**
   * UI & Headings: `Inter`
   * Code & Badges: `JetBrains Mono`
   * Aesthetic: Utilitarian, crisp, industry-standard dev tooling.
3. **Pairing C (Kinetic Architecture / High-End Studio):**
   * Headings: `Plus Jakarta Sans`
   * Body: `Geist Sans`
   * Accents & Data: `JetBrains Mono`
   * Aesthetic: Elevated modern editorial tech with geometric geometry.

### Researched Color Palettes (Switchable via Sandbox Widget)
1. **Palette 1: Precision Emerald (Inspired by Hassaan Portfolio):**
   * Canvas Background: `#FFFFFF`
   * Sub-surface / Cards: `#F8FAFC`
   * Elevated Surface: `#F1F5F9`
   * Border: `#E2E8F0` (Border Hover: `#CBD5E1`)
   * Foreground: `#09090B` (Muted: `#64748B`)
   * Primary Accent: `#059669` (Pulse: `#10B981`)
   * Accent Light Tint: `#ECFDF5`
2. **Palette 2: Monolith Cyber-Amber (Linear / Industrial Precision):**
   * Canvas Background: `#FAFAFA`
   * Sub-surface / Cards: `#FFFFFF`
   * Elevated Surface: `#F4F4F5`
   * Border: `#E4E4E7` (Border Hover: `#A1A1AA`)
   * Foreground: `#18181B` (Muted: `#71717A`)
   * Primary Accent: `#D97706` (Hover: `#B45309`)
   * Accent Light Tint: `#FFFBEB`
3. **Palette 3: Hyper-Cobalt (Vercel / High-Velocity Cloud):**
   * Canvas Background: `#F8FAFC`
   * Sub-surface / Cards: `#FFFFFF`
   * Elevated Surface: `#F1F5F9`
   * Border: `#E2E8F0` (Border Hover: `#94A3B8`)
   * Foreground: `#020617` (Muted: `#475569`)
   * Primary Accent: `#2563EB` (Hover: `#1D4ED8`)
   * Accent Light Tint: `#EFF6FF`

---

## 4. Security & Cryptographic Contracts

### 4.1. Lemon Squeezy HMAC SHA-256 Webhook Verification
```typescript
import crypto from 'node:crypto';

export function verifyLemonSqueezySignature(
  rawBody: string,
  signatureHeader: string | null,
  secret: string
): boolean {
  if (!signatureHeader || !secret) return false;
  const hmac = crypto.createHmac('sha256', secret);
  const digest = Buffer.from(hmac.update(rawBody).digest('hex'), 'utf8');
  const signature = Buffer.from(signatureHeader, 'utf8');
  
  if (digest.length !== signature.length) return false;
  return crypto.timingSafeEqual(digest, signature);
}
```

### 4.2. Zero-Trust Asset Delivery Pipeline
1. Client completes purchase via Lemon Squeezy checkout.
2. Verified webhook receives `order_created` event and records license in Supabase.
3. When user requests download:
   * Edge Middleware validates user authentication session.
   * Server queries Supabase RLS with buyer ID verification.
   * Generates a 60-second time-limited signed URL from private Supabase Storage bucket.
   * Triggers social DRM PDF stamping with `pdf-lib` embedding buyer's email and unique transaction ID.

---

## 5. Concept 1: Premium Glassmorphism Architecture
* **Route:** `/concept-1`
* **Visual Direction:** Cinematic minimalism with soft colorful mesh gradient and frosted glass surfaces.
* **Frosted Cards:** `backdrop-blur-md` (~10px), `bg-white/60`, `border-white/80`, `shadow-[0_8px_30px_rgb(0,0,0,0.04)]`, with `transform-gpu` to eliminate iOS Safari blur lag.
* **Contrast Compliance:** Deep dark tones (`text-slate-900`) and `font-medium`/`font-semibold` body copy ensuring WCAG contrast compliance.
* **Zero Terminal UI:** Banned monospace body text. Pure sans-serif (Geist Sans / Inter).
* **Anchor Digital Asset:** Premium E-Book (*"Autonomous Systems Architecture"*), featuring abstract 3D geometric/typographic cover art without any human figures.
* **Interactive Elements:**
  * Slide-over Sheet for owned assets with Lemon Squeezy checkout integration.
  * Modal for affiliate referral links (`↗`).
  * Floating client-side Sandbox Switcher for typography, palettes, and navigation.

