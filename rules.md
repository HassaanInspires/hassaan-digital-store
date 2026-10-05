# PROJECT RULES & NON-NEGOTIABLE LAWS

These rules are immutable standards for all agents, code generators, and human collaborators operating on `store.muhammadhassaankhan.com`.

---

## 0. Critical Architecture Laws (Phase 3 Override)

### LAW 1: Zero Terminal UI
* The developer/terminal aesthetic is **permanently banned**.
* **Zero monospace fonts for body text**: All body copy, subtitles, features, and UI labels must use clean, premium sans-serif typography (e.g., Geist Sans, Inter, Plus Jakarta Sans).
* **Zero fake code editors**: No mock IDEs, terminal prompt widgets, or pseudo-code tabs.
* **Zero dark mode**: Pure light theme only.

### LAW 2: Cinematic Minimalism
* Cut standard copywriting length by **80%**. A landing page converts best when secondary distractions are eliminated and massive white space is used for visual balance.
* Rely on **one big, bold header** and **one clear primary CTA**.
* Concise, punchy product descriptions (strictly under 20 words per asset).

### LAW 3: Visual Asset Generation (Strict Human Restriction)
* The Graphic Generator agent MUST create high-quality, abstract 3D placeholders for digital products (e.g., E-Books, UI Kits, Architecture blueprints).
* **Strict Restriction**: Generated images and vectors must **strictly exclude any human models, faces, figures, or silhouettes**.
* Use sleek typographic covers, isometric prisms, floating acrylic slabs, and spatial geometric compositions only.

### PERFORMANCE & ACCESSIBILITY LAWS:
* **Mobile Safari GPU Hack**: All frosted glass components utilizing `backdrop-blur` must include `transform-gpu` or `[transform:translateZ(0)]` to force GPU hardware acceleration and prevent CPU rasterization lag on iOS Safari.
* **WCAG Text Legibility**: All text inside glassmorphic cards must use high-contrast dark tones (`text-slate-900`, `text-zinc-950`) and slightly heavier weights (`font-medium` or `font-semibold`) to guarantee crystal-clear legibility over background mesh gradients.

---

## 1. Design & UI Laws (Strict High-Tech Light Theme)
1. **Light Theme Only:**
   * Pure crisp backgrounds (`#FFFFFF`, `#FAFAFA`, `#F8FAFC`).
   * Sharp, precise borders (`#E2E8F0`, `#E4E4E7`, `border-white/80`).
   * High-contrast foregrounds (`#09090B`, `#0F172A`, `#18181B`).
   * **Absolute Zero Dark Mode:** No dark background classes (no `dark:` modifiers, no dark-mode toggles, no dark neutral canvas).
2. **Mobile Usability & Accessibility:**
   * All interactive elements (buttons, links, triggers, form controls) MUST satisfy minimum touch targets of $\ge 44 \times 44\text{ px}$.
   * Interactive elements must feature clear visible focus states (`focus-visible:ring-2 focus-visible:ring-offset-2`).
   * Contrast ratios for text must meet or exceed WCAG AA/AAA standards ($\ge 4.5:1$ for normal text, $\ge 3:1$ for large text).
   * Semantic HTML structure must be strictly enforced (`header`, `main`, `nav`, `section`, `article`, `footer`).

---

## 2. Security & Zero-Trust Architecture
1. **Zero-Trust Asset Delivery:**
   * No direct public URLs for purchased digital downloads.
   * Supabase Private Storage Buckets only, delivered via 60-second time-limited Signed URLs.
   * Edge Middleware validation of user JWT before issuing signed download links.
2. **Cryptographic Webhook Verification:**
   * All incoming Lemon Squeezy webhooks must verify `X-Signature` using HMAC SHA-256 with the secret key prior to processing payloads.
   * Reject unauthenticated or mis-signed webhook requests with HTTP 401/403 immediately.
3. **Social DRM & Watermarking:**
   * Server-side PDF stamping using `pdf-lib` embedding buyer details (verified customer name, customer email, timestamp).
   * Steganographic transaction IDs embedded via zero-width unicode characters in textual asset layers.

---

## 3. Engineering & Code Standards
1. **Framework:** Next.js 15+ App Router, React 19, TypeScript in strict mode.
2. **Path Aliasing:** Use `@/*` for all internal source imports.
3. **Icons & Components:** Lucide React icons, Tailwind CSS utility classes, headless Radix primitives.
4. **Living Documentation:** Any architectural modification or discovery must immediately be recorded in `docs/specs.md` and `docs/ui-hierarchy.md`.

---

## 4. Execution Protocol & Phase Discipline
1. **Sequential Phase Control:** Never advance to subsequent phases without explicit user instruction.
2. **Two-Step Iteration Loop in Phase 3:**
   * Draft Concept -> First Halt (`"CONCEPT [N] DRAFT COMPLETE. Awaiting command to run Agent Army Audit."`)
   * Audit & Polish -> Second Halt (`"CONCEPT [N] FINALIZED. Awaiting approval to proceed to Concept [N+1]."`)
3. **Audit Enforcement:** Every concept must be audited by Mobile QA, UX Researcher, and Security Auditor before finalization.
