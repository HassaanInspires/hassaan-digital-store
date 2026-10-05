---
name: mobile-qa
description: Mobile QA, viewport responsiveness, touch target compliance, and accessibility auditing.
---

# Mobile QA & Accessibility Skill

## Purpose
Guarantees mobile usability and ergonomic compliance across all viewports.

## Audit Criteria
1. **Touch Targets:** Verify all interactive elements have bounding boxes $\ge 44 \times 44\text{ px}$.
2. **Breakpoints:** Test layout reflow at 360px, 640px, 768px, 1024px, 1280px, 1536px.
3. **No Horizontal Scroll:** `overflow-x: hidden` on root, no elements causing viewport overflow.
4. **Interactive States:** Distinct hover, active, focus-visible states on all triggers.
