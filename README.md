# 🎨 UI/UX Design Master Course & Living Design System

[![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)](https://figma.com)
[![WCAG 2.2](https://img.shields.io/badge/WCAG%202.2-AA%20Compliant-10B981?style=for-the-badge)](https://www.w3.org/WAI/standards-guidelines/wcag/)
[![Design Tokens](https://img.shields.io/badge/W3C-Design%20Tokens-3B82F6?style=for-the-badge)](https://design-tokens.github.io/community-group/format/)
[![License: MIT](https://img.shields.io/badge/License-MIT-purple.svg?style=for-the-badge)](LICENSE)

A comprehensive, industry-aligned curriculum and interactive living design system covering human-centered user research, Double Diamond synthesis, Figma Auto Layout component architecture, W3C design tokens, WCAG 2.2 accessibility, usability testing, and developer handoff.

---

## 🌐 Live Web Hub & Interactive Design System

Explore the interactive web version featuring an **8pt Grid Visualizer**, a real-time **WCAG 2.2 Color Contrast Calculator**, and a living token palette:

🔗 **[https://sege-peter.github.io/ui-ux-design-course/](https://sege-peter.github.io/ui-ux-design-course/)**

---

## 📖 Complete Curriculum Syllabus (10 Modules)

| Module | Core Topics & Competencies | Direct Link |
| :--- | :--- | :--- |
| **01. Introduction to UI/UX Design** | Foundational definitions, UI vs UX comparison, The Double Diamond process, modern tool stack (Figma, FigJam, Google Stitch, Maze), core laws (Visual Hierarchy, 8pt Grid, Fitts's & Jakob's Laws). | [**Module 01**](course/01-introduction-to-ui-ux-design.md) |
| **02. User Research & Personas** | Qualitative vs Quantitative methods, non-leading 1-on-1 interview techniques, 5 Whys, action-oriented User Personas, Customer Journey Maps, and "How Might We" framing. | [**Module 02**](course/02-user-research-personas-and-journey-mapping.md) |
| **03. Information Architecture & Flows** | IA pillars, Open vs Closed Card Sorting, flat vs deep navigation hierarchies, sitemaps, and flowchart symbols for User Flows & Wireflows. | [**Module 03**](course/03-information-architecture-and-user-flows.md) |
| **04. Wireframing & Prototyping** | Fidelity spectrum, grayscale wireframing, Figma Auto Layout (Fixed, Hug, Fill), main components, variants, component properties, and Smart Animate connections. | [**Module 04**](course/04-wireframing-and-prototyping.md) |
| **05. Visual Design Foundations** | The 8pt spatial grid scale, typography scales & line-height rules, optimal reading measure, 60-30-10 color rule, semantic palettes, and 3-level shadow elevation tokens. | [**Module 05**](course/05-visual-design-foundations.md) |
| **06. Design Systems & Tokens** | Atomic Design methodology (Atoms to Pages), 3-tier design token architecture (Global, Semantic, Component-specific), component documentation, and usage guardrails. | [**Module 06**](course/06-design-systems-and-component-libraries.md) |
| **07. Accessibility (WCAG 2.2)** | POUR principles, WCAG AA/AAA color contrast ratios, avoiding color-only cues, 48x48px mobile touch targets, color-blindness accommodations, and keyboard focus states. | [**Module 07**](course/07-accessibility-and-inclusive-design.md) |
| **08. Usability Testing & Metrics** | Jakob Nielsen's 5-user rule, moderated vs unmoderated testing, scenario-based non-leading tasks, 10 Usability Heuristics, Task Success Rate, SEQ, and SUS benchmark. | [**Module 08**](course/08-usability-testing-and-analytics.md) |
| **09. Design-to-Code Handoff** | Overcoming developer friction, Figma Dev Mode redlines, 8 component states matrix, asset export specs (SVG, WebP), Style Dictionary tokens, and engineering sign-off checklist. | [**Module 09**](course/09-design-to-code-handoff-and-collaboration.md) |
| **10. Case Studies & Portfolios** | Quality over quantity, the 8-part case study anatomy, storytelling structure, showcasing the "messy middle", and design portfolio interview preparation tips. | [**Module 10**](course/10-ui-ux-portfolio-and-case-study-guide.md) |
| **11. Tools Directory & Practical Sessions** | Complete directory of 30+ industry UI/UX tools with verified external links, plus 7 step-by-step practical sessions across all lifecycle phases. | [**Module 11**](course/11-ui-ux-tools-directory-and-practical-sessions.md) |

---

## 🛠️ Practical Templates & Rubrics

Jumpstart client projects and design sprints with ready-to-use worksheets:
- [**UX Heuristics Evaluation Checklist**](templates-and-checklists/ux-heuristics-evaluation-checklist.md) – 10-principle inspection sheet with 0-to-4 severity scoring.
- [**User Persona Worksheet Template**](templates-and-checklists/user-persona-template.md) – Standardized user profile worksheet.
- [**Design System Tokens Specification (JSON)**](templates-and-checklists/design-system-tokens-spec.json) – W3C-compliant design tokens for colors, typography, spacing, and elevation.
- [**Project Design Brief & Discovery Template**](templates-and-checklists/design-brief-template.md) – Discovery document aligning business KPIs and design deliverables.

---

## 📂 Repository Directory Structure

```text
ui-ux-design-course/
│
├── course/                                 # 11 In-Depth Course Modules
│   ├── 01-introduction-to-ui-ux-design.md
│   ├── 02-user-research-personas-and-journey-mapping.md
│   ├── 03-information-architecture-and-user-flows.md
│   ├── 04-wireframing-and-prototyping.md
│   ├── 05-visual-design-foundations.md
│   ├── 06-design-systems-and-component-libraries.md
│   ├── 07-accessibility-and-inclusive-design.md
│   ├── 08-usability-testing-and-analytics.md
│   ├── 09-design-to-code-handoff-and-collaboration.md
│   ├── 10-ui-ux-portfolio-and-case-study-guide.md
│   ├── 11-ui-ux-tools-directory-and-practical-sessions.md
│   └── README.md                           # Course roadmap & syllabus index
│
├── templates-and-checklists/               # Real-World Design Worksheets
│   ├── ux-heuristics-evaluation-checklist.md
│   ├── user-persona-template.md
│   ├── design-system-tokens-spec.json
│   └── design-brief-template.md
│
├── index.html                              # Interactive Design System Web Hub
├── css/style.css                           # 8pt Grid, Tokens, & Responsive CSS
├── js/app.js                               # WCAG Contrast Tool & 8pt Grid Overlay
├── assets/favicon.svg                      # Vector Favicon
├── .gitignore                              # Git ignore rules
├── LICENSE                                 # MIT Open Source License
└── README.md                               # Master Repository Documentation
```

---

## 🚀 Running Locally

1. Clone or download the repository:
   ```bash
   git clone https://github.com/Sege-Peter/ui-ux-design-course.git
   cd ui-ux-design-course
   ```
2. Open `index.html` in any modern web browser, or serve with VS Code **Live Server**.

---

## 📜 License

Created by **Sege Peter ENG**. Distributed under the [MIT License](LICENSE). Feel free to use this curriculum for personal study, design bootcamps, and educational workshops!
