export interface CourseOffering {
  id: string;
  title: string;
  badge: string;
  duration: string;
  description: string;
  reviewQuote: string;
  url: string;
  coverImage?: string;
  syllabusModules?: { title: string; description: string }[];
  coreConcepts?: string[];
}

export interface BookOffering {
  id: string;
  title: string;
  badge: string;
  pages: string;
  description: string;
  url: string;
  coverImage?: string;
  topTakeaways?: string[];
  galleryImages?: string[];
  trustTier: "Personal" | "Community";
  curatorNote?: string;
}

export const COURSES: CourseOffering[] = [
  {
    id: "ai-llm-masterclass",
    title: "Applied AI & LLM Systems Engineering",
    badge: "Flagship Masterclass",
    duration: "18 Modules · Self-Paced",
    description:
      "A comprehensive production curriculum covering autonomous agent architecture, fine-tuning methodologies, vector retrieval engines, and scalable inference infrastructure.",
    reviewQuote:
      "This course demystifies large language model deployment. Dr. Usmani focuses on real production constraints rather than synthetic toy benchmarks.",
    url: "https://zeeshanusmani.com",
    syllabusModules: [
      {
        title: "Module 1: Large Foundation Models & Pretraining Mechanics",
        description: "Transformer architectures, attention heads, tokenization limits, and distributed compute clusters.",
      },
      {
        title: "Module 2: Autonomous Agentic Loops & Deterministic Tool Use",
        description: "Designing self-healing agent loops, JSON schema function calling, and structured error fallback.",
      },
      {
        title: "Module 3: Production RAG & Vector Retrieval at Scale",
        description: "Hybrid search, semantic chunking, re-ranking strategies, and low-latency embeddings cache.",
      },
      {
        title: "Module 4: Post-Training, SFT & Direct Preference Optimization",
        description: "Curating instruction datasets, parameter-efficient fine-tuning (LoRA), and alignment evaluations.",
      },
    ],
  },
  {
    id: "algorithmic-problem-solving",
    title: "Data Science & Algorithmic Problem Solving",
    badge: "Foundational Series",
    duration: "24 Hours HD · Practical Exercises",
    description:
      "Deep exploration of exploratory data science, Bayesian inference, distributed compute pipelines, and statistical modeling for senior engineering roles.",
    reviewQuote:
      "An indispensable masterclass for any engineer transitioning into serious machine learning. The mathematical groundings are crystal clear.",
    url: "https://zeeshanusmani.com",
    coreConcepts: [
      "Bayesian inference & statistical modeling in large-scale pipelines",
      "Dynamic programming & discrete combinatorial optimization",
      "Asymptotic complexity benchmarking under high concurrency",
      "Distributed stream processing with fault-tolerant state stores",
    ],
  },
];

export const BOOKS: BookOffering[] = [
  {
    id: "computational-thinking",
    title: "Computational Thinking & Logic",
    badge: "Guftugu Bestseller",
    pages: "260 Pages · Print & PDF",
    description:
      "Core foundational primer on algorithmic complexity, discrete structures, and modern computational logic for engineers.",
    url: "https://guftugu.com",
    trustTier: "Personal",
    curatorNote: "One of the most profound mathematical primers I have read this year.",
    topTakeaways: [
      "Algorithmic decomposition patterns for complex systems engineering",
      "Mathematical proofs translated into idiomatic software design patterns",
      "Heuristic optimization strategies when asymptotic complexity hits bounds",
    ],
    galleryImages: [
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop",
    ],
  },
  {
    id: "applied-ml",
    title: "Applied Machine Learning with Python",
    badge: "Technical Manual",
    pages: "310 Pages · Code Included",
    description:
      "Real-world modeling patterns, regression frameworks, clustering techniques, and deployment paradigms using standard toolchains.",
    url: "https://guftugu.com",
    trustTier: "Community",
    curatorNote: "Currently a top-rated Gufhtugu Bestseller. Community reviews highlight its practical deployment patterns.",
  },
  {
    id: "big-data-mining",
    title: "Big Data Mining & Analytics",
    badge: "Research Series",
    pages: "295 Pages · Case Studies",
    description:
      "Systematic analysis of petabyte-scale data lakes, distributed query engines, streaming architectures, and analytics pipelines.",
    url: "https://guftugu.com",
    trustTier: "Community",
  },
  {
    id: "ai-career-roadmap",
    title: "The AI Engineer's Career Handbook",
    badge: "Career Strategy",
    pages: "180 Pages · Guidebook",
    description:
      "Strategic roadmap for navigating postgraduate research, industry leadership, AI venture creation, and high-leverage technical consulting.",
    url: "https://guftugu.com",
    trustTier: "Personal",
    topTakeaways: [
      "Strategic navigation of doctoral research versus industry R&D careers",
      "High-leverage technical consulting frameworks for AI specialists",
      "Defensible IP creation and venture establishment roadmap",
    ],
  },
];
