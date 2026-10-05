# UI HIERARCHY & ROUTING STRUCTURE

## 1. Routing Architecture (App Router)

```
src/app/
├── layout.tsx                   # Global root layout (Geist font, light theme base, global headers)
├── page.tsx                     # Verified blank staging page / Phase 3 concept router
├── globals.css                  # High-tech light theme tokens, CSS custom properties
├── concept-1/
│   └── page.tsx                 # Concept 1: Precision Monolith
├── concept-2/
│   └── page.tsx                 # Concept 2: High-Density Terminal Grid
├── concept-3/
│   └── page.tsx                 # Concept 3: Modern Kinetic Editorial
├── concept-4/
│   └── page.tsx                 # Concept 4: Modular Swiss Blueprint
├── concept-5/
│   └── page.tsx                 # Concept 5: Minimalist Cyber-Clean
├── api/
│   └── webhooks/
│       └── lemonsqueezy/
│           └── route.ts         # HMAC SHA-256 verified webhook endpoint
└── sitemap.ts                   # Next.js Metadata API sitemap generator
```

---

## 2. Component Hierarchy Tree

```
<RootLayout>
│
├── <Header>
│   ├── <BrandIdentity> (Muhammad Hassaan Khan — Engineering Studio)
│   ├── <StatusPill> (Live System Status / Available for Projects)
│   └── <NavLinks> (Store, Blueprints, Affiliates, About, Contact)
│
├── <ConceptPageWrapper> (Dynamic concept container)
│   │
│   ├── <HeroSection>
│   │   ├── <BreadcrumbBadge> (e.g. `// PERSONAL DIGITAL STOREFRONT v1.0`)
│   │   ├── <Headline> ("High-Leverage Engineering Blueprints & Digital Tools")
│   │   └── <FilterBar> (All, AI Agents, Next.js Starters, Security, Curated Affiliates)
│   │
│   ├── <ProductGrid>
│   │   ├── <OwnedAssetCard> (Digital Blueprint with Instant Slide-over Checkout)
│   │   │   ├── <ThumbnailPreview> (Generated high-res SVG / tech schematic)
│   │   │   ├── <BadgeRow> (`v1.4`, `TypeScript`, `Supabase`)
│   │   │   ├── <PriceTag> ($49.00 / Instant Download)
│   │   │   └── <TriggerButton> (Opens <ProductDetailDrawer>)
│   │   │
│   │   └── <AffiliateResourceCard> (Curated External Tool with Referral Flow)
│   │       ├── <ThumbnailPreview> (Platform logo / UI preview)
│   │       ├── <BadgeRow> (`Cloud Infrastructure`, `Partner Tier`)
│   │       ├── <PerkTag> ($100 Free Compute Credit)
│   │       └── <TriggerButton> (Opens <AffiliateReferralModal>)
│   │
│   ├── <ProductDetailDrawer> (Slide-Over Sheet for Owned Assets)
│   │   ├── <DrawerHeader> (Title, version, author metadata)
│   │   ├── <FeatureBreakdown> (Architecture diagrams, deliverables list)
│   │   ├── <SecurityDisclaimer> (Zero-trust social DRM stamped upon delivery)
│   │   └── <LemonSqueezyCheckoutCTA> (Initiates Lemon Squeezy secure checkout)
│   │
│   └── <AffiliateReferralModal> (External Referral Dialog)
│       ├── <ModalHeader> (Tool info & disclosure)
│       ├── <ExclusivePerkBanner>
│       └── <ExternalRedirectCTA> (Direct link with referral parameter `↗`)
│
├── <Footer>
│   ├── <Copyright> (© 2026 Muhammad Hassaan Khan)
│   ├── <EngineeringSpecs> (Next.js 15 · Supabase · Lemon Squeezy)
│   └── <SocialLinks> (GitHub, LinkedIn, Twitter/X)
│
└── <FloatingSandboxWidget> (Fixed bottom-right client-side switcher)
    ├── <TypographySelector> (Toggles Pairing A, B, or C via CSS class on body)
    ├── <PaletteSelector> (Toggles Palette 1, 2, or 3 via CSS dataset on html)
    └── <ConceptQuickNav> (Direct jump between /concept-1 to /concept-5)
```

---

## 3. Global Interactive Sandbox Specification
Every concept in Phase 3 mounts the `<FloatingSandboxWidget />`:
* **State Management:** Stored in client state or `localStorage` to persist across concept navigation.
* **Tokens Controlled:**
  * `data-palette="emerald"` (Palette 1: Precision Emerald)
  * `data-palette="amber"` (Palette 2: Monolith Cyber-Amber)
  * `data-palette="cobalt"` (Palette 3: Hyper-Cobalt)
  * `data-font="geist"` (Pairing A: Geist Sans + Geist Mono)
  * `data-font="inter"` (Pairing B: Inter + JetBrains Mono)
  * `data-font="jakarta"` (Pairing C: Plus Jakarta Sans + Geist)
* **Ergonomics:** Positioned fixed at `bottom-5 right-5` with a collapsible toggle button meeting $\ge 44 \times 44\text{ px}$ touch target requirements.
