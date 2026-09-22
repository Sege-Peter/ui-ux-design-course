# Module 1: Introduction to UI/UX Design

---

## 1. Foundational Definitions

### User Experience (UX) Design

UX design focuses on the overall experience, usability, and satisfaction a person feels when interacting with a digital or physical product. It governs **how it works**, ensuring the product solves a real problem efficiently, intuitively, and without unnecessary friction.

* **Core questions:** Who is the user? What goal are they trying to achieve? Where do they get confused or stuck?
* **Primary outputs:** User research, personas, empathy maps, user flows, information architecture, wireframes, and usability test reports.

### User Interface (UI) Design

UI design focuses on the visual and tactile presentation of the product. It governs **how it looks and feels**, translating UX structural decisions into an aesthetic, accessible, and brand-aligned interface.

* **Core questions:** Is the visual hierarchy clear? Are interactive elements discoverable? Do colors meet accessibility contrast thresholds?
* **Primary outputs:** Typography systems, color palettes, spacing systems, micro-interactions, component libraries, and pixel-perfect high-fidelity mockups.

### UI vs. UX Comparison

| Attribute | User Experience (UX) | User Interface (UI) |
| :--- | :--- | :--- |
| **Primary Focus** | Logic, system flow, and ease of use | Visual styling, aesthetics, and direct interaction |
| **Stage in Lifecycle** | Discovery, strategy, and structural architecture | Visual execution, design systems, and prototyping |
| **Key Metrics** | Task completion rate, time-on-task, bounce rate | Brand consistency, visual hierarchy, aesthetic delight |
| **Analogous Role** | The engine, chassis, and steering dynamics of a car | The dashboard dials, paint finish, and interior seating |

---

## 2. The Core UI/UX Process (The Double Diamond)

```text
       Discover            Define            Develop            Deliver
     (Research)         (Synthesis)        (Ideation)          (Testing)
     
        /\                  \  /              /\                  \  /
       /  \                  \/              /  \                  \/
      /    \                /  \            /    \                /  \
     /      \              /    \          /      \              /    \
    /        \            /      \        /        \            /      \
    ══════════════════════════════════════════════════════════════════════
     PROBLEM SPACE      PROBLEM FRAMING    SOLUTION SPACE     SOLUTION LAUNCH
```

1. **Discover (Research):** Conduct stakeholder interviews, field surveys, competitor benchmarking, and user interviews to understand the problem space without assuming solutions.
2. **Define (Synthesis):** Frame user pain points into actionable challenges. Build personas, journey maps, and "How Might We" statements.
3. **Develop (Ideation & Wireframing):** Brainstorm multiple interface concepts, sketch paper prototypes, structure information architecture, and draft low-fidelity wireframes.
4. **Deliver (High-Fidelity & Testing):** Build interactive prototypes in tools like Figma, conduct usability evaluations, iterate on feedback, and package components for developer handoff.

---

## 3. The Modern UI/UX Tool Stack

```text
Discovery & Strategy        Visuals & Prototyping        AI Acceleration & Code
  ┌───────────────┐           ┌───────────────┐           ┌───────────────┐
  │ FigJam / Miro │    ───►   │     Figma     │    ───►   │ Google Stitch │
  │ (User Flows)  │           │(Design Systems│           │   / Framer    │
  └───────────────┘           └───────────────┘           └───────────────┘
```

### Core Vector & Prototyping Tools

* **Figma:** The industry standard for interface design and prototyping. Runs in the browser and desktop, enabling real-time multi-player collaboration, component-based design systems, responsive layout engines (Auto Layout), and developer inspection modes.
* **Sketch:** A macOS-based vector tool widely used for enterprise UI design and symbol libraries.
* **Adobe XD:** Adobe’s desktop platform for wireframing, UI layout, and vector prototyping.

### AI-Native Design & Rapid Generation

* **Google Stitch:** An AI design tool from Google Labs (powered by multimodal Gemini models). It converts natural language prompts, wireframes, or rough sketches into responsive UI layouts and clean frontend code (HTML/CSS, Tailwind).
  * *Workflow role:* Ideal for rapid ideation, generating multi-screen layout variants in minutes to eliminate the "blank canvas" paralysis before importing assets into Figma for fine-tuning.
* **UX Pilot / Galileo AI:** AI systems that generate editable Figma layers directly from descriptive interface prompts.

### Research, Whiteboarding & Diagramming

* **FigJam:** Figma’s native whiteboarding space for affinity mapping, sprint retrospectives, user journey diagrams, and team brainstorming sessions.
* **Miro:** An enterprise collaborative whiteboarding platform for mapping information architecture, sitemaps, and remote workshop exercises.
* **Notion:** Used for user research repositories, interview synthesis, design briefs, and project roadmaps.

### Testing, Accessibility & Handoff

* **Maze / Useberry:** Remote unmoderated usability testing platforms that plug directly into Figma prototypes to record user click-paths, heatmaps, and drop-off rates.
* **Stark / Contrast:** Plugins for Figma to verify WCAG color contrast ratios, test color-blindness simulation modes, and ensure accessibility compliance.
* **Zeplin / Figma Dev Mode:** Tools that inspect typography scales, margins, and design tokens to convert UI components into CSS/code for front-end developers.

---

## 4. Core Principles Introduced in Module 1

* **Visual Hierarchy:** Directing the user’s eye using contrast, size, weight, and negative space so primary actions (e.g., "Submit", "Checkout") are immediately obvious.
* **The 8pt Spatial Grid:** Sizing and spacing UI elements in increments of 8 (8px, 16px, 24px, 32px) to maintain visual rhythm and streamline front-end CSS implementation.
* **Fitts's Law:** The time required to rapidly move to a target area is a function of the ratio between the distance to the target and the width of the target (buttons must be large enough and close enough to touch easily).
* **Jakob's Law:** Users spend most of their time on other apps; your interfaces should adhere to standard conventions (e.g., shopping cart at top-right, search bar near top) so they do not have to relearn how to navigate your system.

---

## 5. Module 1 Practice Exercise

1. Select any everyday mobile app on your phone (e.g., your primary ride-hailing or banking app).
2. Take a screenshot of the main screen.
3. Label 3 **UX decisions** (e.g., "Primary call-to-action is anchored to the bottom thumb zone for one-handed operation").
4. Label 3 **UI decisions** (e.g., "Active state uses high-contrast brand color `#0066FF` against a neutral `#F4F4F4` background").
