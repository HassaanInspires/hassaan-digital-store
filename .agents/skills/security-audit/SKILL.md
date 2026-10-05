---
name: security-audit
description: Security verification for HMAC SHA-256 signatures, zero-trust Supabase storage, social DRM PDF stamping, and steganography.
---

# Security Audit Skill

## Purpose
Enforces cryptographic and zero-trust data protection standards across the entire application lifecycle.

## Verification Checklist
1. **Webhook Integrity:** All incoming Lemon Squeezy requests must have valid `crypto.createHmac('sha256', secret)` match against `x-signature`.
2. **Private Storage:** Supabase bucket configuration must disallow public reads.
3. **Signed URLs:** Time-to-live for asset delivery signed URLs must not exceed 60 seconds.
4. **Social DRM:** Server-side stamping on PDF downloads with `pdf-lib` containing verified buyer email and timestamp.
5. **Steganography:** Zero-width character insertion into textual code or markdown digital assets.
