---
name: architecture-review
description: Architecture governance and system design skill for Next.js App Router, Supabase, and Lemon Squeezy integration.
---

# Architecture Review Skill

## Purpose
Validates system structure, modular boundaries, type safety, and living documentation alignment.

## Checkpoints
1. **Directory Integrity:** Enforce clean separation between `src/app/`, `src/components/`, `src/lib/`, and `docs/`.
2. **Type Safety:** Ensure all component props, API contracts, and database models are strictly typed in TypeScript.
3. **Living Document Sync:** Whenever dependencies or schemas shift, update `/docs/specs.md` immediately.
