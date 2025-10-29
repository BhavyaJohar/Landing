# AGENTS.md  
**Project:** Sentinel Gradient LLC Website  
**Version:** 1.0  
**Purpose:** Define page-specific user stories and acceptance criteria for autonomous development agents. Each agent should reference `/design_guidelines.md` in the project root to ensure full brand compliance.

---

## General Instructions
- Always reference and adhere to `/design_guidelines.md` for colors, typography, layout, and spacing.  
- Maintain consistent gradient usage (`#25678A → #1F97C1`).  
- Follow accessibility standards (WCAG 2.1, 4.5:1 contrast minimum).  
- All copy must align with the voice defined in `/design_guidelines.md` (“research-oriented, formal, precise”).  
- Use the brand fonts:
  - **Headings:** Playfair Display  
  - **Body Text:** Montserrat  

---

## User Story 1 — Landing Page (Home)
**As a visitor**, I want to understand immediately what Sentinel Gradient LLC does and feel confident in its credibility as a research company,  
**so that** I am encouraged to learn more or contact the company for collaboration.

### Acceptance Criteria
- Implement hero section featuring:
  - Logo centered left or top-left.
  - Tagline: *“Advancing Machine Intelligence Through Rigorous Research.”* (Playfair Display, white text)
  - Supporting paragraph explaining company focus (Montserrat, light gray).
  - Two CTAs:  
    - **Primary:** “Explore Our Research” (gradient background)  
    - **Secondary:** “Contact for Collaboration” (transparent white border)
- Background must use a subtle animated gradient or data-flow visual within the **Dark Blue (#0B1624)** color space.
- Below hero: three evenly spaced cards labeled  
  **Research**, **Development**, **Consulting**  
  Each card must contain:
  - Icon (white line art)
  - One-sentence description in Montserrat
- Include smooth scroll reveal animations.
- Footer with copyright notice and minimal contact info.
- Responsive behavior across breakpoints (desktop, tablet, mobile).

---

## User Story 2 — About Page
**As a potential client or contracting officer**, I want to quickly understand Sentinel Gradient’s mission, expertise, and credibility,  
**so that** I can evaluate whether to consider it for research partnerships or contracting opportunities.

### Acceptance Criteria
- Hero section:  
  - Title: “Research with Purpose.”  
  - Short paragraph summarizing mission (Playfair Display for heading, Montserrat for body).
- Two-column layout:
  - **Left column:** mission text, values, or methodology.  
  - **Right column:** abstract AI visualization or gradient graphic.
- Include section titled **Our Approach** describing methodology and principles (3–4 bullet points).
- Add **Team or Founder** section:
  - Placeholder for 1–2 bios or headshots.  
  - Use circular photos and Montserrat captions.
- Include link to download a **Capability Statement (PDF)**.
- All typography and spacing per `/design_guidelines.md`.

---

## User Story 3 — Research / Capabilities Page
**As a research collaborator or technical reviewer**, I want to see a detailed breakdown of Sentinel Gradient’s technical competencies,  
**so that** I can identify alignment with my project or program requirements.

### Acceptance Criteria
- Page title: “Our Expertise.”  
- Use 4–6 cards or tiles in a responsive grid layout.  
- Each card must contain:
  - Title (Playfair Display)
  - Short technical description (Montserrat)
  - Optional keyword tags (NLP, LLMs, AI Safety, etc.)
- Example sections:
  1. Machine Learning Research  
  2. AI Safety & Interpretability  
  3. Applied LLM Engineering  
  4. Autonomous Systems  
  5. Data-Centric AI  
- Use alternating background sections: Off-White (#F8F9FA) and Dark Blue (#0B1624) for contrast.
- Include a “Learn More / Contact Us” button at bottom linking to contact page.
- All visual dividers should use brand gradient line.

---

## User Story 4 — Contracts / SBIR Page
**As a government program manager or industry partner**, I want to see Sentinel Gradient’s contract readiness and technical domains,  
**so that** I can evaluate eligibility for collaboration or SBIR participation.

### Acceptance Criteria
- Title: “Ready for Collaboration.”  
- Section 1: **SBIR/STTR Focus**
  - Short paragraph explaining readiness for government R&D projects.
- Section 2: **Core Capabilities**
  - List of NAICS/PSC codes (placeholders if pending).  
  - List of prior research areas or projects (bulleted list).
- Section 3: **Download Capability Statement (PDF)** button styled in Light Azure Blue.
- Section 4: **Contact CTA**
  - Inline form: Name, Email, Organization, Message.
- Maintain minimalist layout with Montserrat text and Playfair headings.
- Use Dark Azure Blue as header bar background.

---

## User Story 5 — Contact Page
**As a visitor or potential collaborator**, I want to contact Sentinel Gradient easily and securely,  
**so that** I can inquire about partnerships or technical engagements.

### Acceptance Criteria
- Title: “Contact Sentinel Gradient.”  
- Include short paragraph explaining collaboration intent.  
- Contact form fields:
  - Name
  - Organization
  - Email
  - Message (multi-line)
- Button: “Submit Inquiry” (gradient background)  
- Include footer displaying:
  - Business address (or “Virginia, USA” placeholder)
  - Email: `contact@sentinelgradient.com`
  - LinkedIn icon (monochrome white)
- Include success message and basic form validation.
- Layout must align with `/design_guidelines.md`.

---

## User Story 6 — Global Components & Layout
**As a frontend developer agent**, I need reusable components to ensure design consistency across all pages,  
**so that** changes to branding automatically propagate.

### Acceptance Criteria
- Implement global components:
  - **Header/Navbar:** logo left, nav links right, collapses on mobile  
  - **Footer:** consistent across all pages with copyright, contact info, and gradient divider line  
  - **Buttons:** primary (gradient), secondary (outline), disabled (Gray Azure)  
  - **Cards:** shadowed panels with border-radius per design guide  
  - **Form Inputs:** Montserrat, 16px min font, rounded corners (8px)
- Use consistent max-width container (1200px).
- Import typography and color variables from `/design_guidelines.md`.

---

## User Story 7 — Accessibility & Testing
**As a QA or test automation agent**, I want to validate that the site is compliant with accessibility and responsiveness standards,  
**so that** it can pass audits and public sector requirements.

### Acceptance Criteria
- Verify WCAG 2.1 AA color contrast (≥4.5:1).  
- Confirm all interactive elements are reachable via keyboard navigation.  
- Validate ARIA roles are defined for navigation, forms, and buttons.  
- Check responsive breakpoints: 320px, 768px, 1024px, 1440px.  
- Run Lighthouse accessibility score ≥95.  
- All pages must load in under 1.5 seconds on standard broadband.

---

## Dev Environment Tips
- Reference `/design_guidelines.md` when defining Tailwind theme extensions (colors, typography, shadows).  
- Run `npm run lint` and `npm run test` before committing changes.  
- Use `npm run dev` to start the Next.js development server with hot reload.  
- For animations, use `framer-motion` with Tailwind integration.  
- Avoid heavy component libraries unless compliant with typography and spacing rules in `/design_guidelines.md`.  
- Store reusable UI components in `/components/ui` and global styles in `/styles/globals.css`.  
- Configure all brand colors and fonts in `tailwind.config.js` for global access.  

---

## PR Instructions
- Title format: `[SentinelGradient] <PageName>: <ChangeDescription>`  
- Ensure all pages satisfy acceptance criteria before merge.  
- Include screenshot previews or deployed URL with each PR.  
- Maintain visual fidelity to `/design_guidelines.md` in all updates.
