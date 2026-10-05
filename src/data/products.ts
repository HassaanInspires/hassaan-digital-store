export interface Product {
  id: string;
  type: "owned" | "affiliate";
  category: "ebook" | "uikit" | "infrastructure";
  title: string;
  subtitle: string;
  description: string;
  price: number;
  badge: string;
  details: {
    format?: string;
    pages?: number;
    deliverables?: string[];
    perk?: string;
    affiliateUrl?: string;
    securityNotice?: string;
  };
}

export const PRODUCTS: Product[] = [
  {
    id: "autonomous-systems-architecture",
    type: "owned",
    category: "ebook",
    title: "Autonomous Systems Architecture",
    subtitle: "A Principal Engineer's Guide to Multi-Model Orchestration & Agentic Reliability",
    description: "Production architectural blueprints, zero-loss state recovery, and high-throughput agent workflows.",
    price: 47,
    badge: "Anchor E-Book · v2.4",
    details: {
      format: "DRM-Protected PDF + Markdown Source",
      pages: 184,
      deliverables: [
        "184-Page Architectural Reference Guide (PDF)",
        "Zero-Trust State Machine & Recovery Checklists",
        "Deterministic Tool Calling & Routing Blueprints",
        "Social DRM Watermarking Security Guarantee",
      ],
      securityNotice: "Server-side Social DRM stamped with buyer email & cryptographic hash.",
    },
  },
  {
    id: "hyper-glass-design-engine",
    type: "owned",
    category: "uikit",
    title: "Hyper-Glass Design System",
    subtitle: "Modern Next.js 15 & React 19 Component Engine with Cinematic Polish",
    description: "Hardware-accelerated frosted glass surfaces, accessible micro-interactions, and design tokens.",
    price: 69,
    badge: "UI Engine · React 19",
    details: {
      format: "Full TypeScript Source + Figma Kit",
      deliverables: [
        "45+ Accessible Glassmorphic Components",
        "Tailwind v4 Token Presets & Animation Hooks",
        "Mobile Safari GPU-Accelerated Layouts",
        "Zero-Config Next.js 15 Starter Integration",
      ],
      securityNotice: "Instant access via 60-second time-limited signed URL.",
    },
  },
  {
    id: "supabase-pro-infrastructure",
    type: "affiliate",
    category: "infrastructure",
    title: "Supabase Cloud Infrastructure",
    subtitle: "Managed PostgreSQL, Row-Level Security & High-Performance Vector Storage",
    description: "The scalable relational foundation for modern applications and zero-trust data protection.",
    price: 0,
    badge: "Official Affiliate · $50 Credit",
    details: {
      perk: "$50 Partner Compute Credit Included",
      affiliateUrl: "https://supabase.com",
      deliverables: [
        "Instant $50 Credit applied to organization billing",
        "Enterprise-grade Row Level Security (RLS)",
        "Private Storage Buckets for digital asset pipelines",
        "Realtime edge subscriptions & vector embeddings",
      ],
    },
  },
];
