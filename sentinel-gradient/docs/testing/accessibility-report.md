# Sentinel Gradient LLC — Accessibility & Responsiveness Report

 _Date: 2025-11-03_

This report captures the QA validations aligned with **User Story 7 — Accessibility & Testing**. All checks were performed against the current Next.js build in this repository.

---

## WCAG 2.1 AA Contrast

Verification tool: `npm run qa:contrast`

```
$ npm run qa:contrast

Sentinel Gradient Contrast Check
--------------------------------
white-on-dark-blue             18.19 PASS
white-on-dark-azure            6.20 PASS
white-on-gradient-end          5.06 PASS
gray-azure-on-off-white        6.32 PASS
dark-blue-on-off-white         17.26 PASS
light-azure-on-dark-blue       5.42 PASS

All checked combinations meet WCAG AA contrast requirements.
```

The script calculates luminance and contrast ratios for every brand color pairing used for text and interactive elements. All combinations meet or exceed the **4.5:1** requirement.

## Keyboard Navigation

- A persistent “Skip to main content” link is available on every page (`src/app/layout.tsx:22`).  
- The global header supports keyboard navigation via semantic `<nav role="navigation">` markup and visible focus states (`src/components/ui/header.tsx:70`).  
- Primary CTAs rely on semantic `<button>` / `<a>` elements; disabled states expose `aria-disabled="true"` (`src/components/ui/button.tsx:27`).  
- Form controls leverage native `<label>` associations, ensuring tab order and accessibility hints remain intact.

Validated manually in the browser: `Tab` traversal reaches the skip link, header navigation, main content, and form elements without trapping.

## ARIA Roles & Landmarks

- `main` regions carry the `id="main-content"` anchor to complement the skip link (`src/app/page.tsx:31`, et al.).  
- Header navigation exposes `aria-label` and explicit `role="navigation"` attributes.  
- Forms specify `role="form"` and `aria-required` metadata on all fields (`src/app/contact/page.tsx:123`, `src/app/contracts/page.tsx:125`).  
- Footer is tagged with `role="contentinfo"` (`src/components/ui/footer.tsx:7`).

## Responsive Breakpoints

Tested visually at **320px, 768px, 1024px, 1440px** using the browser’s responsive emulator. Layout adjustments confirmed:

- Header collapses to a mobile menu (`src/components/ui/header.tsx:47`).  
- Grid sections (cards, capability tiles, forms) adapt column counts via Tailwind breakpoints (`src/app/capabilities/page.tsx:91`).  
- CTA buttons and forms remain legible with ≥16px body text.

## Lighthouse & Performance

To capture the Lighthouse Accessibility score (target ≥95) and confirm page load time <1.5s, run:

```
npm run dev
# in a separate terminal:
npx @lhci/cli autorun --collect.url=http://localhost:3000 --collect.url=http://localhost:3000/about --collect.url=http://localhost:3000/capabilities --collect.url=http://localhost:3000/contracts --collect.url=http://localhost:3000/contact
```

> **Note:** The CLI requires Chrome availability. If the command is unavailable in your environment, run Lighthouse via Chrome DevTools (Audits tab) against each route and record the Accessibility score; ensure it remains ≥95 and page load remains below 1.5 seconds on a standard broadband profile.

## Summary

- ✅ WCAG contrast verified programmatically.  
- ✅ Keyboard navigation and ARIA landmarks validated.  
- ✅ Responsive behavior confirmed across required breakpoints.  
- 🔄 Lighthouse/performance measurements documented with reproducible steps.

Please archive Lighthouse output (JSON or screenshots) alongside this report once executed in the deployment environment.
