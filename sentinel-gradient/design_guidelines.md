# Sentinel Gradient LLC — Branding Guide (v1.0)
**Date:** October 2025  
**Owner:** Sentinel Gradient LLC  
**Purpose:** This document defines the brand identity, typography, colors, and usage standards for all digital and print materials associated with Sentinel Gradient LLC.  
**Use Case:** Reference for design systems, website generation, and automated branding tasks.

---

## 1. Brand Identity

**Full Name:** Sentinel Gradient LLC  
**Short Name:** Sentinel Gradient  
**Tagline:** *Advancing Machine Intelligence Through Rigorous Research.*  
**Description:**  
Sentinel Gradient LLC is an artificial intelligence and machine learning research company dedicated to high-integrity, empirically grounded innovation. Our work bridges theory and application across AI safety, LLM fine-tuning, and autonomous systems.

**Tone & Personality:**
- Professional, research-oriented, and articulate  
- Emphasizes trust, intelligence, and precision  
- Avoids hype language (e.g., “revolutionary”, “disruptive”)  
- Prefers empirically grounded verbs: *develop, evaluate, validate, optimize*

---

## 2. Logo Usage

**Primary Logo:** Circular “SG” monogram with gradient from Dark Azure to Light Azure.  
**File:** `/src/app/logo.svg`  
**Usage Notes:**
- Use on dark backgrounds (#0B1624 preferred).  
- Maintain clear space equal to half the logo’s height on all sides.  
- Do not stretch, rotate, or recolor the logo.  

**Favicon:** Simplified “SG” mark without text.

---

## 3. Color Palette

| Name | Hex | RGB | Usage |
|------|-----|-----|--------|
| **Light Azure Blue** | `#1F97C1` | (31, 151, 193) | Primary accent color, buttons, highlights |
| **Dark Azure Blue** | `#25678A` | (37, 103, 138) | Secondary color, section dividers |
| **Gray Azure** | `#505E6A` | (80, 94, 106) | Neutral text, outlines, muted icons |
| **Dark Blue** | `#0B1624` | (11, 22, 36) | Backgrounds, headers, footer |
| **White** | `#FFFFFF` | (255, 255, 255) | Text on dark backgrounds |
| **Off-White** | `#F8F9FA` | (248, 249, 250) | Light background sections |

**Gradient Reference:**  
`linear-gradient(90deg, #25678A 0%, #1F97C1 100%)`

---

## 4. Typography

| Role | Font | Weight | Example Usage |
|------|------|---------|----------------|
| **Primary Heading (H1, H2)** | Playfair Display | 500–700 | Page titles, hero headlines |
| **Subheadings (H3, H4)** | Montserrat | 600 | Section titles |
| **Body Text** | Montserrat | 400 | Paragraphs, descriptions |
| **Emphasis / Quotes** | Playfair Display Italic | 500 | Pull quotes, mission statements |

**CSS Example:**
```css
h1, h2 {
  font-family: 'Playfair Display', serif;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: #FFFFFF;
}

body, p, li {
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  color: #505E6A;
  line-height: 1.7;
}
```


## 5. Layout & Spacing

* **Max content width:** 1200px
* **Grid system:** 12-column responsive
* **Section padding:** 96px top/bottom
* **Whitespace ratio:** 1.5x text line height
* **Border radius:** 12px on cards/buttons
* **Shadows:** subtle (RGBA(0,0,0,0.1))

---

## 6. Imagery & Iconography

**Style Guidelines:**

* Abstract geometric or data-driven visuals preferred.
* Avoid stock photography.
* Use line icons in Gray Azure or white.
* Integrate gradients into illustrations for thematic consistency.

---

## 7. Interaction Design

**Buttons:**

* Primary: Gradient background (#25678A → #1F97C1), white text
* Secondary: Transparent with white border, text color #FFFFFF
* Hover: Lighten gradient by +5% brightness

**Links:**

* Default: `#1F97C1`
* Hover: Underlined + slightly lighter tone `#28A7D3`

**Animations:**

* Soft fade-ins or upward reveals (200–300ms ease-in-out)
* Avoid harsh transitions or rotations.

---

## 8. Accessibility & Contrast

* Minimum contrast ratio: **4.5:1**
* Body text size: minimum 16px
* Ensure all gradient backgrounds maintain legible text.
* Use ARIA roles for dynamic content.

---

## 9. Content Voice & Copy

**Voice Attributes:**

* Confident, data-driven, and formal
* Speaks from a position of research expertise
* Uses active verbs: *design, analyze, construct, validate*
* Avoids vague adjectives (e.g., “amazing”, “incredible”)
* Focuses on clarity and evidence-based value

**Example Tone:**

> “We develop interpretable models for autonomous systems to ensure robust decision-making in uncertain environments.”


## 10. Metadata for Web Generation

```json
{
  "brand_name": "Sentinel Gradient LLC",
  "primary_color": "#1F97C1",
  "secondary_color": "#25678A",
  "neutral_color": "#505E6A",
  "background_color": "#0B1624",
  "fonts": {
    "heading": "Playfair Display",
    "body": "Montserrat"
  },
  "gradient": "linear-gradient(90deg, #25678A 0%, #1F97C1 100%)",
  "max_width": "1200px"
}
```

