# Module 11: Comprehensive UI/UX Tools Directory & Practical Hands-On Sessions

Mastering UI/UX requires fluency across the modern product design stack. This directory provides verified external links, categorized industry tools, and step-by-step practical sessions for each phase of the product development lifecycle.

---

## 🧭 Navigation by Lifecycle Phase

1. [Phase 1: Discovery, Research & Empathy](#phase-1-discovery-research--empathy)
2. [Phase 2: AI-Powered Ideation & Rapid Generation](#phase-2-ai-powered-ideation--rapid-generation)
3. [Phase 3: Vector Layout, UI Design & Design Systems](#phase-3-vector-layout-ui-design--design-systems)
4. [Phase 4: Advanced Interaction Prototyping & Motion](#phase-4-advanced-interaction-prototyping--motion)
5. [Phase 5: Usability Testing, Heatmaps & Analytics](#phase-5-usability-testing-heatmaps--analytics)
6. [Phase 6: Accessibility (a11y) & Inclusive Design Tools](#phase-6-accessibility-a11y--inclusive-design-tools)
7. [Phase 7: Design-to-Code Handoff & Token Management](#phase-7-design-to-code-handoff--token-management)

---

## Phase 1: Discovery, Research & Empathy

Tools used to understand user problems, conduct stakeholder workshops, synthesize qualitative interviews, and map journeys.

| Tool | Core Use Case | Pricing Model | External Link |
| :--- | :--- | :--- | :--- |
| **FigJam** | Collaborative whiteboarding, sticky-note affinity mapping, and user journey flowcharts. | Free tier / Paid with Figma | [figma.com/figjam ↗](https://www.figma.com/figjam/) |
| **Miro** | Enterprise visual collaboration, remote design thinking workshops, and sitemapping. | Free tier / Team subscription | [miro.com ↗](https://miro.com/) |
| **Dovetail** | Research repository, video transcription, customer quote tagging, and insight clustering. | Free trial / Paid subscription | [dovetail.com ↗](https://dovetail.com/) |
| **Notion** | Centralized documentation, interview question repositories, and product design briefs. | Free for individuals / Paid teams | [notion.so ↗](https://www.notion.so/) |
| **Typeform** | Conversational quantitative user surveys with conditional branching logic. | Free tier / Paid subscription | [typeform.com ↗](https://www.typeform.com/) |
| **Optimal Workshop** | Information architecture testing: Tree testing, card sorting, and first-click analysis. | Free trial / Paid tiers | [optimalworkshop.com ↗](https://www.optimalworkshop.com/) |

### 🛠️ Practical Session 1: Affinity Mapping in FigJam
- **Objective:** Synthesize raw interview transcripts from 5 participants into actionable theme clusters.
- **Step-by-Step Instructions:**
  1. Open [FigJam](https://www.figma.com/figjam/) and create a new board named `Sprint 1 - User Research Synthesis`.
  2. Paste user quotes into color-coded digital sticky notes (e.g. Green = Delight, Red = Frustration, Yellow = Workaround).
  3. Group related stickies into thematic clusters (e.g. *"Confusion on Shipping Costs"*, *"Search Filter Visibility"*).
  4. Use the voting stamp tool with your team to rank the top 3 user pain points.
  5. Formulate 2 actionable **"How Might We" (HMW)** problem statements at the bottom of the board.

---

## Phase 2: AI-Powered Ideation & Rapid Generation

Tools that accelerate initial wireframing, eliminate blank-canvas paralysis, and provide competitive design intelligence.

| Tool | Core Use Case | Pricing Model | External Link |
| :--- | :--- | :--- | :--- |
| **Google Stitch** | Generative AI tool (Google Labs) transforming natural language or sketches into responsive UI layouts. | Free experimental access | [stitch.withgoogle.com ↗](https://stitch.withgoogle.com/) |
| **UX Pilot** | AI assistant for generating user interview scripts, wireflow outlines, and competitive matrices. | Freemium | [uxpilot.ai ↗](https://www.uxpilot.ai/) |
| **Galileo AI** | Generates editable, multi-layer vector UI screens for Figma from text prompts. | Paid with free trial credits | [usegalileo.ai ↗](https://www.usegalileo.ai/) |
| **Mobbin** | Hand-curated library of 300,000+ real iOS, Android, and Web production UI screens and user flows. | Free browsing / Paid Pro | [mobbin.com ↗](https://mobbin.com/) |
| **Page Flows** | Video screen recordings of user onboarding, checkout, and upgrade flows from top digital brands. | Subscription | [pageflows.com ↗](https://pageflows.com/) |

### 🛠️ Practical Session 2: Competitive Benchmark & Flow Analysis via Mobbin
- **Objective:** Benchmark the onboarding flows of 3 premier SaaS applications to design an industry-standard signup process.
- **Step-by-Step Instructions:**
  1. Visit [Mobbin](https://mobbin.com/) and filter by **Flows ➔ Onboarding**.
  2. Select 3 apps in your domain (e.g. Linear, Duolingo, Stripe).
  3. Screenshot the step-by-step screens and paste them into Figma.
  4. Count the number of mandatory form fields required before reaching the value moment ("Aha!" moment).
  5. Identify how each app implements progress bars (Heuristic #1: Visibility of System Status) and social OAuth shortcuts.

---

## Phase 3: Vector Layout, UI Design & Design Systems

The primary production workspaces for creating wireframes, component libraries, and pixel-perfect high-fidelity mockups.

| Tool | Core Use Case | Operating System | External Link |
| :--- | :--- | :--- | :--- |
| **Figma** | Industry standard for collaborative UI design, Auto Layout, variants, and design systems. | Web, macOS, Windows | [figma.com ↗](https://www.figma.com/) |
| **Penpot** | The leading open-source, web-standards-based design and prototyping platform. | Web browser, Self-hosted | [penpot.app ↗](https://penpot.app/) |
| **Sketch** | Pioneer vector design tool with native macOS performance and symbol libraries. | macOS native | [sketch.com ↗](https://www.sketch.com/) |
| **Adobe XD** | Adobe's vector interface design tool with Creative Cloud asset integration. | Windows, macOS | [helpx.adobe.com/xd ↗](https://helpx.adobe.com/xd/get-started.html) |

### 🛠️ Practical Session 3: Building a Responsive Auto Layout Card in Figma
- **Objective:** Create a production-ready, accessible pricing card using Figma Auto Layout and variants.
- **Step-by-Step Instructions:**
  1. Open [Figma](https://www.figma.com/) and press `F` to create a Desktop Frame (1440 x 900 px).
  2. Press `T` to type a price tag (e.g. `$29/month`). Set to `Semi-Bold 32px` on an 8pt baseline.
  3. Select your text layer and press `Shift + A` to wrap it in an **Auto Layout Frame**.
  4. Set padding: `Vertical = 24px`, `Horizontal = 24px`, `Corner Radius = 12px`.
  5. Add a Primary Button inside the card and set its horizontal resizing to **Fill Container** so it expands responsively.
  6. Press `Cmd/Ctrl + Alt + K` to convert the card into a **Main Component (`❖`)**.
  7. Add a Component Variant for the `"Popular / Recommended"` state with a distinct 2px brand border.

---

## Phase 4: Advanced Interaction Prototyping & Motion

Tools for building high-fidelity realistic interactions, sensor gestures, and web-ready vector animations.

| Tool | Core Use Case | Key Strength | External Link |
| :--- | :--- | :--- | :--- |
| **ProtoPie** | High-fidelity prototypes with conditional logic, formulas, camera input, and device sensors. | Native device testing | [protopie.io ↗](https://www.protopie.io/) |
| **Framer** | Interactive visual website builder that exports production React code with native CMS. | Real web canvas | [framer.com ↗](https://www.framer.com/) |
| **Principle** | Timeline-based micro-interaction animator for complex drag, swipe, and scroll physics. | Spring animations | [principleformac.com ↗](https://principleformac.com/) |
| **LottieFiles** | Platform for testing, editing, and embedding lightweight JSON-based vector animations. | Ultra-lightweight file size | [lottiefiles.com ↗](https://lottiefiles.com/) |
| **Rive** | Real-time interactive vector graphics with state machines that react dynamically to code. | Dynamic runtime physics | [rive.app ↗](https://rive.app/) |

### 🛠️ Practical Session 4: Smart Animate Micro-interactions in Figma
- **Objective:** Prototype a toggle switch that animates smoothly between `Off` (gray) and `On` (brand blue).
- **Step-by-Step Instructions:**
  1. In Figma, draw a rounded rectangle (width: 52px, height: 32px, corner radius: 9999px) with fill `#E2E8F0`.
  2. Place a white circle knob (diameter: 24px) aligned to the left with 4px padding.
  3. Duplicate the frame. On the second frame, slide the knob to the right and change the background fill to `#3B82F6`.
  4. Select both frames and click **Create Component Set**.
  5. Switch to the **Prototype tab** (`Shift + E`). Drag a blue connection wire from State 1 to State 2.
  6. Interaction Details:
     - **Trigger:** `On Click`
     - **Action:** `Change to`
     - **Animation:** `Smart Animate`, `Ease Out (300ms)`.
  7. Click the **Present button (▶)** to test the physics of the toggle switch.

---

## Phase 5: Usability Testing, Heatmaps & Analytics

Tools to evaluate designs with real users, collect quantitative success metrics, and monitor post-launch behavior.

| Tool | Core Use Case | Test Type | External Link |
| :--- | :--- | :--- | :--- |
| **Maze** | Unmoderated remote testing platform integrating directly with Figma prototypes. | Click-paths, Heatmaps, Drop-off | [maze.co ↗](https://maze.co/) |
| **Useberry** | Prototype user testing tool with card sorting, tree testing, and first-click tests. | IA & Prototype testing | [useberry.com ↗](https://www.useberry.com/) |
| **Lookback** | Moderated user interview platform with simultaneous face, audio, and screen recording. | Live qualitative testing | [lookback.com ↗](https://lookback.com/) |
| **Hotjar** | Behavioral analytics platform tracking scroll-depth heatmaps and anonymous session recordings. | Live website auditing | [hotjar.com ↗](https://www.hotjar.com/) |
| **UserTesting** | On-demand enterprise human insights platform with targeted participant recruitment. | Global audience testing | [usertesting.com ↗](https://www.usertesting.com/) |

### 🛠️ Practical Session 5: Unmoderated Usability Audit via Maze
- **Objective:** Measure the Task Completion Rate and Drop-off Rate for an e-commerce checkout flow.
- **Step-by-Step Instructions:**
  1. Copy your clickable Figma prototype share link.
  2. Create a free test project on [Maze](https://maze.co/) and paste your Figma link.
  3. Define a **Mission Block**:
     - *Task Scenario:* "You want to buy a pair of running shoes. Find size 10 and complete checkout."
     - *Expected Path:* Screen 1 ➔ Screen 2 (Product) ➔ Screen 3 (Cart) ➔ Screen 4 (Confirmation).
  4. Send the test link to 5 participants.
  5. Analyze the resulting **Heatmap report**:
     - Identify where users clicked unexpectedly (mis-click rate > 20% flags a usability issue).
     - Calculate the average **Time on Task** and **System Usability Scale (SUS)** score.

---

## Phase 6: Accessibility (a11y) & Inclusive Design Tools

Tools to audit color contrast, simulate color blindness, and verify compliance with WCAG 2.2 standards.

| Tool | Core Use Case | Platform | External Link |
| :--- | :--- | :--- | :--- |
| **Stark** | Complete accessibility suite: Contrast checks, focus order, vision simulators, and alt-text audits. | Figma Plugin & Browser Ext | [getstark.co ↗](https://www.getstark.co/) |
| **WebAIM Contrast Checker** | Mathematical color contrast verification engine calculating exact AA/AAA ratios. | Web-based | [webaim.org/contrastchecker ↗](https://webaim.org/resources/contrastchecker/) |
| **Axe DevTools** | The standard automated accessibility testing engine used by software engineers. | Chrome/Edge/Firefox Ext | [deque.com/axe/devtools ↗](https://www.deque.com/axe/devtools/) |
| **Color Oracle** | Real-time full-screen color blindness simulator (Deuteranopia, Protanopia, Tritanopia). | macOS, Windows, Linux | [colororacle.org ↗](https://colororacle.org/) |
| **WhoCanUse** | Evaluates how color contrast affects people with different visual impairments, cataracts, and screen glares. | Web-based | [whocanuse.com ↗](https://whocanuse.com/) |

### 🛠️ Practical Session 6: Running a Stark Contrast & Vision Audit in Figma
- **Objective:** Audit a form and button system to guarantee 100% WCAG 2.2 AA compliance.
- **Step-by-Step Instructions:**
  1. In Figma, open the **Plugins** menu and search for **Stark**.
  2. Select your screen and launch the **Contrast Checker**.
  3. Verify all body copy meets or exceeds **4.5:1** against the card background.
  4. Open the **Vision Simulator** in Stark and switch to **Deuteranopia (Red-Green Color Blindness)**.
  5. Observe your error state. Ensure the error message includes an icon (e.g. `⚠️`) and descriptive text rather than relying on a red border alone.

---

## Phase 7: Design-to-Code Handoff & Token Management

Tools that bridge the gap between design mockups and front-end code repositories.

| Tool | Core Use Case | Integration | External Link |
| :--- | :--- | :--- | :--- |
| **Figma Dev Mode** | Inspection canvas displaying CSS box models, spacing tokens, and asset downloads. | Native inside Figma | [figma.com/dev-mode ↗](https://www.figma.com/dev-mode/) |
| **Tokens Studio for Figma** | Connects Figma variables directly to JSON design tokens and pushes to GitHub. | Figma Plugin / GitHub Sync | [tokens.studio ↗](https://tokens.studio/) |
| **Style Dictionary** | Amazon's build system that transforms JSON design tokens into CSS, Sass, iOS, and Android code. | CLI / Node.js build tool | [amzn.github.io/style-dictionary ↗](https://amzn.github.io/style-dictionary/) |
| **Storybook** | Frontend workshop environment for building, testing, and documenting UI components in isolation. | React, Vue, Web Components | [storybook.js.org ↗](https://storybook.js.org/) |
| **Zeplin** | Version-locked design specification platform generating connected design systems and component links. | Web & Desktop | [zeplin.io ↗](https://zeplin.io/) |

### 🛠️ Practical Session 7: Exporting W3C Design Tokens to CSS Variables
- **Objective:** Export a color and spacing token palette from Figma and import it into a production CSS file.
- **Step-by-Step Instructions:**
  1. Define your 3 core tokens in Figma Local Variables:
     - `brand-primary: #3B82F6`
     - `spacing-base: 16px`
     - `radius-card: 12px`
  2. Launch the **Tokens Studio** plugin and export the tokens as `tokens.json`.
  3. Create a `tokens.css` file in your code editor and paste the variables:
     ```css
     :root {
       --brand-primary: #3b82f6;
       --spacing-base: 16px;
       --radius-card: 12px;
     }
     ```
  4. Apply these variables to a live HTML card component to verify parity between Figma and the browser.
