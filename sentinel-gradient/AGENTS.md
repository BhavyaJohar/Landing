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
  - Placeholder for 2 bios and headshots.  
  - Use circular photos and Montserrat captions.
- Include link to download a **Capability Statement (PDF)**.
- All typography and spacing per `/design_guidelines.md`.

## User Story 3 — Research / Capabilities Page

**As a research collaborator or technical reviewer**, I want to see a detailed breakdown of Sentinel Gradient’s technical competencies,
**so that** I can identify alignment with my project or program requirements.

### Acceptance Criteria

* **Page title:** “Our Expertise.”

* **Layout:** 4–6 responsive cards or tiles in a structured grid.

* **Each card must include:**

  * Title (Playfair Display)
  * Short technical description (Montserrat)
  * Optional keyword tags (e.g., LLMs, Interpretability, Reliability)

* **Example sections (tailored to Sentinel Gradient’s team expertise):**

  1. **Applied Machine Learning Research** –
     Evidence-driven modeling across classification, anomaly detection, and time-series analysis. Focus on building reproducible, high-assurance ML pipelines for defense and biomedical domains.
     *Tags: ML, TensorFlow, PyTorch, Time Series, Model Evaluation*

  2. **AI Safety & Interpretability** –
     Frameworks for explainable AI and model accountability. Includes interpretability tooling, bias detection, and traceable model auditing for mission-critical applications.
     *Tags: AI Safety, Interpretability, Explainability, Governance*

  3. **Applied LLM Engineering** –
     Development of domain-specific LLMs and language interfaces, drawing from PsychBERT and operational fine-tuning work. Includes LangChain pipelines and prompt optimization.
     *Tags: LLMs, NLP, Transformers, Prompt Engineering*

  4. **Autonomous & Data-Centric Systems** –
     Integration of ML and autonomy research from NASA and applied partners. Designing systems that adapt to uncertainty and maintain performance in contested environments.
     *Tags: Autonomy, Simulation, Anomaly Detection, Robotics*

  5. **Systems Engineering & Deployment** –
     Full-stack infrastructure connecting research prototypes to production-ready tools. Includes AWS, React, and Express-based architectures for operational dashboards.
     *Tags: Full Stack, AWS, React, System Integration*

  6. **Quantitative Modeling & Decision Analytics** –
     Translating data into strategic insight. Building analytical pipelines and APIs that support investment, acquisition, and technical evaluation decisions.
     *Tags: Quantitative Analysis, Data Science, APIs, Decision Support*

* **Visual Design Requirements:**

  * Alternating background sections:

    * Off-White (`#F8F9FA`)
    * Dark Blue (`#0B1624`)
  * Gradient dividers using Sentinel Gradient’s brand line.

* **Interaction:**

  * “Learn More / Contact Us” button at the bottom linking to `/contact`.
  * Responsive layout for desktop, tablet, and mobile.

---

## User Story 4 — Contracts / SBIR Page

**As a government program manager or industry partner**, I want to see Sentinel Gradient’s contract readiness and technical domains,
**so that** I can evaluate eligibility for collaboration or SBIR participation.

---

### Acceptance Criteria

* **Page Title:** “Ready for Collaboration.”
* **Visual Style:**

  * Matches About/Capabilities pages: dark gradient background, subtle hero aurora, glass-style cards.
  * Playfair Display for headings, Montserrat for body text.
  * Light Azure (`#1F97C1`) used for accents, buttons, and gradient dividers.
  * Layout stays minimalist—clear section spacing, no alternating backgrounds.

---

### Section 1 — SBIR/STTR Focus

* Brief narrative emphasizing readiness for U.S. government R&D projects.
* Copy Example:

  > Sentinel Gradient LLC is a research-native artificial intelligence and machine learning firm positioned for federal R&D and SBIR/STTR collaboration. Our programs emphasize reproducible methodologies, model interpretability, and contracting fluency—bridging the gap between scientific innovation and operational capability.
  >
  > We specialize in autonomy assurance, generative modeling, and trustworthy AI evaluation, supporting partners across defense, public sector, and enterprise domains.

---

### Section 2 — Core Capabilities

* Display as a **two-column card grid**:

  1. **Contract Identifiers & NAICS Codes**

     * *541511 – Custom Computer Programming Services*
     * *541715 – Research and Development in the Physical, Engineering, and Life Sciences (except Nanotechnology and Biotechnology)*
     * *541512 – Computer Systems Design Services*
  2. **Applied Research Areas**

     * AI Safety, Interpretability, and Assurance
     * Applied LLM Engineering and Domain-Specific NLP
     * Autonomous System Evaluation and Simulation
     * Quantitative Modeling and Decision Analytics
     * Full-Stack Systems and MLOps Integration
     * Data Governance and Responsible Deployment

---

### Section 3 — Download Capability Statement

* Prominent **Light Azure button** (`btn-primary` or `btn-secondary` with Light Azure hue).
* Button text: **“Download Capability Statement (PDF)”**
* Action: Opens or downloads `/documents/sentinel-gradient-capability-statement.pdf` in a new tab.
* Button sits inside a centered card or within a bordered CTA block (`bg-white/5`, rounded-3xl, shadow-2xl, backdrop-blur`).

---

### Section 4 — Contact CTA

* Inline form integrated into the same page (no redirect):

  * **Fields:** Name, Email, Organization, Message
  * **Submit button:** “Send Inquiry” — styled with Light Azure accent
* Form contained in a rounded `card-surface` panel below the download section.
* On submit, displays success toast or confirmation message.

---

### Visual Layout Summary

1. Hero header (“Ready for Collaboration.”) with gradient underline.
2. SBIR/STTR focus paragraph.
3. Dual-column core capabilities grid (NAICS + Research Areas).
4. Centered PDF download CTA card.
5. Inline contact form in final section.
6. Footer identical to other pages.

---

### Example Tagline / Subtext (optional)

> Contract-ready research built for verifiability, accountability, and mission relevance.

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
