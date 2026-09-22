# Module 11: Industry-Wide UI/UX Tools Directory & Hands-On Practical Sessions

A comprehensive, industry-standard breakdown of the primary tools used across the modern product design lifecycle, paired with direct verified external links and 8 hands-on practical lab sessions.

---

## 🧭 Directory Navigation (8 Workflow Categories)

1. [Primary UI & Vector Design (The Industry Core)](#1-primary-ui--vector-design-the-industry-core)
2. [UX Research, Whiteboarding & Information Architecture](#2-ux-research-whiteboarding--information-architecture)
3. [Wireframing & Low-Fidelity Prototyping](#3-wireframing--low-fidelity-prototyping)
4. [Advanced Interaction, Micro-Interactions & Motion](#4-advanced-interaction-micro-interactions--motion)
5. [AI-Native UI & Generative Workflow Tools](#5-ai-native-ui--generative-workflow-tools)
6. [Usability Testing & Analytics](#6-usability-testing--analytics)
7. [Developer Handoff & Design-to-Code Bridges](#7-developer-handoff--design-to-code-bridges)
8. [Essential Figma Plugins for Daily Workflow](#8-essential-figma-plugins-for-daily-workflow)

---

## 1. Primary UI & Vector Design (The Industry Core)

These are the primary environments where actual visual interfaces, screen layouts, design systems, and component libraries are constructed.

| Tool | Core Strength & Description | Platform | External Link |
| :--- | :--- | :--- | :--- |
| **Figma** | The dominant industry standard. Browser-based, real-time collaborative canvas for UI design, design systems (Auto Layout, Tokens/Variables), and developer handoff. | Web, macOS, Windows | [figma.com ↗](https://www.figma.com/) |
| **Sketch** | Native macOS vector UI editor. Widely used by privacy-focused organizations, enterprise teams, and designers who prefer local-first symbol libraries. | macOS native | [sketch.com ↗](https://www.sketch.com/) |
| **Adobe XD** | Adobe’s desktop vector tool for wireframing and prototyping (in maintenance mode within the Creative Cloud suite). | Windows, macOS | [helpx.adobe.com/xd ↗](https://helpx.adobe.com/xd/get-started.html) |
| **Penpot** | The leading open-source, web-based alternative to Figma that relies natively on standard CSS web standards (flexbox and grid) for layout. | Web, Self-hosted | [penpot.app ↗](https://penpot.app/) |

### 🛠️ Practical Session 1: Production Component Variants in Figma
- **Objective:** Build an atomic, accessible button component set with multiple variants and properties.
- **Step-by-Step Instructions:**
  1. Open [Figma](https://www.figma.com/) and press `T` to create a label: `"Save Changes"`.
  2. Press `Shift + A` to wrap it in an Auto Layout frame.
  3. Configure Auto Layout dimensions: `Vertical padding = 12px`, `Horizontal padding = 24px`, `Corner radius = 8px`.
  4. Create 3 distinct variants:
     - **Primary:** Solid brand blue background (`#3B82F6`), white text.
     - **Secondary:** Outlined border (`1.5px solid #E2E8F0`), neutral dark text (`#0F172A`).
     - **Destructive:** Danger red background (`#EF4444`), white text.
  5. Add a boolean property `hasIcon` to toggle an optional left-aligned vector icon.
  6. Publish this to your team library and test dragging instances into a fresh screen.

---

## 2. UX Research, Whiteboarding & Information Architecture

Used for discovery, synthesis, customer journey maps, user flows, and workshop facilitation.

| Tool | Core Strength & Description | Platform | External Link |
| :--- | :--- | :--- | :--- |
| **FigJam** | Figma’s integrated collaborative whiteboard for diagrams, sticky notes, voting widgets, and retrospectives. | Web, iPad | [figma.com/figjam ↗](https://www.figma.com/figjam/) |
| **Miro** | Enterprise-grade virtual whiteboard used for customer journey maps, product roadmaps, and stakeholder workshops. | Web, Desktop, Mobile | [miro.com ↗](https://miro.com/) |
| **Mural** | Collaborative workspace optimized for guided design thinking workshops and team exercises. | Web, Teams, Zoom | [mural.co ↗](https://www.mural.co/) |
| **Whimsical** | Fast, lightweight tool for wireframes, mind maps, user flows, and technical flowcharts. | Web-based | [whimsical.com ↗](https://whimsical.com/) |
| **Dovetail** | UX research repository tool for tagging transcripts, clustering qualitative user quotes, and synthesizing interview insights. | Web-based | [dovetail.com ↗](https://dovetail.com/) |
| **Optimal Workshop** | Specialized platform for information architecture: tree testing (Treejack), card sorting (OptimSort), and first-click testing (Chalkmark). | Web-based | [optimalworkshop.com ↗](https://www.optimalworkshop.com/) |

### 🛠️ Practical Session 2: Information Architecture & Card Sorting
- **Objective:** Evaluate and structure an e-commerce sitemap using open card sorting techniques.
- **Step-by-Step Instructions:**
  1. Open [Whimsical](https://whimsical.com/) or [FigJam](https://www.figma.com/figjam/).
  2. Create 20 digital sticky cards representing product catalog items (e.g., *"Wireless Noise-Cancelling Headphones"*, *"USB-C Fast Charger"*, *"Ergonomic Desk Chair"*).
  3. Invite 2 peers to group cards into intuitive buckets and assign each bucket a clear category label.
  4. Compare the mental models: Did participants group by *Device Type* (Audio vs Power) or by *Context* (Work From Home vs Commute)?
  5. Draft a 2-level sitemap tree reflecting the consensus.

---

## 3. Wireframing & Low-Fidelity Prototyping

Used to test structural layouts and user flows without getting distracted by visual polish (colors, typography, images).

| Tool | Core Strength & Description | Platform | External Link |
| :--- | :--- | :--- | :--- |
| **Balsamiq** | Deliberately uses a rough, hand-drawn comic aesthetic to keep early stakeholder focus entirely on logic and functionality. | Web, Desktop | [balsamiq.com ↗](https://balsamiq.com/) |
| **Axure RP** | Advanced wireframing and interaction documentation tool that supports variables, conditional logic, and database-like data grids. | macOS, Windows | [axure.com ↗](https://www.axure.com/) |
| **OmniGraffle** | macOS/iPadOS diagramming tool frequently used for wireframing, structural schematics, and technical user flows. | macOS, iOS | [omnigroup.com/omnigraffle ↗](https://www.omnigroup.com/omnigraffle/) |

### 🛠️ Practical Session 3: Lo-Fi Wireframing in Balsamiq
- **Objective:** Build a low-fidelity wireframe to resolve a checkout friction point without getting bogged down in visual styling.
- **Step-by-Step Instructions:**
  1. Open [Balsamiq](https://balsamiq.com/) and drag a Browser Window container onto the canvas.
  2. Add low-fidelity UI components: Accordion steps for *Shipping Address*, *Payment Method*, and *Review Order*.
  3. Use generic placeholder blocks for logos and images to force reviewers to comment exclusively on layout hierarchy and field counts.
  4. Share the wireframe with your team and capture feedback on the checkout sequence before opening Figma.

---

## 4. Advanced Interaction, Micro-Interactions & Motion

When standard Figma click-through transitions aren't enough to represent real app mechanics, device hardware, or physics.

| Tool | Core Strength & Description | Platform | External Link |
| :--- | :--- | :--- | :--- |
| **ProtoPie** | Prototyping platform supporting device sensors (camera, gyroscope, microphone), formulas, and cross-device interaction. | macOS, Windows, Mobile | [protopie.io ↗](https://www.protopie.io/) |
| **Principle** | macOS tool designed for rapid micro-interaction design, timeline transitions, and animated interface elements. | macOS native | [principleformac.com ↗](https://principleformac.com/) |
| **Rive** | Real-time interactive vector graphics with state machines that run directly in code at 60+ FPS. | Web, Desktop, Runtimes | [rive.app ↗](https://rive.app/) |
| **LottieFiles** | Platform for creating, editing, and embedding lightweight JSON-based vector animations across iOS, Android, and Web. | Web, Plugins, Mobile | [lottiefiles.com ↗](https://lottiefiles.com/) |
| **Origami Studio** | Built by Meta; uses a visual patch/node-based editor to design realistic gestures, physics animations, and sensor inputs. | macOS native | [origami.design ↗](https://origami.design/) |

### 🛠️ Practical Session 4: Spring Physics & Micro-Interactions in ProtoPie
- **Objective:** Create a prototype where dragging a payment card over a threshold triggers haptic-like card snap physics.
- **Step-by-Step Instructions:**
  1. Import your card mockup from Figma into [ProtoPie](https://www.protopie.io/).
  2. Add a **Drag Trigger** to the card layer.
  3. Add a **Move Response** tied to pointer movement along the Y-axis.
  4. Set conditional boundaries: `If card.y > 300`, trigger a **Scale** and **Spring Easing** snap animation into the checkout dock.
  5. Run the prototype on ProtoPie Player on your mobile phone to test tactile feel.

---

## 5. AI-Native UI & Generative Workflow Tools

Tools that convert text prompts, wireframe screenshots, or hand-drawn sketches into editable digital layouts or production code.

| Tool | Core Strength & Description | Platform | External Link |
| :--- | :--- | :--- | :--- |
| **Google Stitch** | Google Labs multimodal AI tool that converts natural language prompts or sketches into responsive UI layouts and clean frontend markup. | Web-based | [stitch.withgoogle.com ↗](https://stitch.withgoogle.com/) |
| **Uizard** | AI design tool that scans hand-drawn paper sketches or wireframe screenshots and converts them into editable digital UI layouts. | Web-based | [uizard.io ↗](https://uizard.io/) |
| **v0 (by Vercel)** | Generative UI copilot that turns natural language descriptions into production-ready React (Tailwind CSS, shadcn/ui) interfaces. | Web-based | [v0.dev ↗](https://v0.dev/) |
| **Galileo AI** | Generates editable, multi-layer vector UI screens directly for Figma from written descriptions. | Web-based | [usegalileo.ai ↗](https://www.usegalileo.ai/) |
| **UX Pilot** | AI assistant for generating user interview scripts, wireflow outlines, and competitive design matrices. | Web-based | [uxpilot.ai ↗](https://www.uxpilot.ai/) |

### 🛠️ Practical Session 5: Paper Sketch to Digital Interface via Uizard
- **Objective:** Accelerate initial wireframe digitizing from napkin sketches.
- **Step-by-Step Instructions:**
  1. Take a piece of paper and sketch a 3-part dashboard screen (Header, Metric cards, Activity list).
  2. Snap a photo with your smartphone.
  3. Upload the image to [Uizard](https://uizard.io/) using the **Sketch to Wireframe** scanner.
  4. Inspect the generated vector elements and adjust layout spacing to conform to the 8pt spatial grid.

---

## 6. Usability Testing & Analytics

Used to test design hypotheses with representative users and track post-launch behavioral engagement.

| Tool | Core Strength & Description | Test Type | External Link |
| :--- | :--- | :--- | :--- |
| **Maze** | Plugs directly into Figma prototypes for remote, unmoderated user testing, heatmaps, and success-rate tracking. | Unmoderated Prototype | [maze.co ↗](https://maze.co/) |
| **Lookback** | For live, moderated qualitative user interviews with screen-recording and face-cam capture. | Moderated Qualitative | [lookback.com ↗](https://lookback.com/) |
| **Useberry** | Tracks usability metrics, user flows, and click heatmaps directly on interactive prototypes. | Prototype Testing | [useberry.com ↗](https://www.useberry.com/) |
| **Hotjar** | Session recording and behavior-analytics tools used once an interface goes live (scroll maps, rage clicks). | Post-Launch Analytics | [hotjar.com ↗](https://www.hotjar.com/) |
| **UXCam** | In-depth mobile app behavioral analytics: crash session recordings, funnel drop-offs, and gesture heatmaps. | Native Mobile Analytics| [uxcam.com ↗](https://uxcam.com/) |

### 🛠️ Practical Session 6: Running a Remote Usability Test on Maze
- **Objective:** Measure whether users can complete an onboarding task without guidance.
- **Step-by-Step Instructions:**
  1. Link your interactive Figma prototype to a new test in [Maze](https://maze.co/).
  2. Define a clear scenario prompt: *"You have just downloaded the app. Sign up using your work email and create a project named 'Alpha'."*
  3. Define the critical path (Screen 1 ➔ Screen 2 ➔ Screen 3).
  4. Send to 5 participants.
  5. Review the resulting **Aggregated Heatmap** to identify mis-clicks and note average duration on each screen.

---

## 7. Developer Handoff & Design-to-Code Bridges

Used to ensure design tokens, spacing, and assets translate cleanly into production code without ambiguity.

| Tool | Core Strength & Description | Integration | External Link |
| :--- | :--- | :--- | :--- |
| **Figma Dev Mode** | Built-in inspection tool that translates Figma components and variables into CSS, Swift, and Kotlin. | Native in Figma | [figma.com/dev-mode ↗](https://www.figma.com/dev-mode/) |
| **Zeplin** | Specialized workspace for organizing handoff specs, asset exporting, and developer documentation. | Web & Desktop | [zeplin.io ↗](https://zeplin.io/) |
| **Framer** | Hybrid tool where visual canvas design directly produces live, responsive React-based websites and CMS pages. | Web & Hosting | [framer.com ↗](https://www.framer.com/) |
| **Tokens Studio** | Bridges Figma design tokens directly into Git repositories and JSON formats for engineering teams. | Figma Plugin / GitHub | [tokens.studio ↗](https://tokens.studio/) |
| **Style Dictionary** | Open-source build system that transforms JSON design tokens into platform-specific CSS variables, Sass, and Android XML. | CLI / Node.js | [amzn.github.io/style-dictionary ↗](https://amzn.github.io/style-dictionary/) |

### 🛠️ Practical Session 7: Design-to-Code Synchronization
- **Objective:** Connect Figma variables directly to a GitHub repository using Tokens Studio.
- **Step-by-Step Instructions:**
  1. Install [Tokens Studio](https://tokens.studio/) in Figma.
  2. Create a global color token: `color.primary = #3B82F6`.
  3. Configure sync with your GitHub repository: Enter repo URL and personal access token.
  4. Push changes from Figma: Tokens Studio creates a commit with an updated `tokens.json`.
  5. Review the commit on GitHub and verify your frontend application picks up the new token.

---

## 8. Essential Figma Plugins for Daily Workflow

Plugins that dramatically accelerate everyday design production, accessibility auditing, and code export.

| Plugin | Category | What It Does | Direct Plugin Link |
| :--- | :--- | :--- | :--- |
| **Iconify** | Icons | Search and import over 100,000 open-source vector icons (Material, FontAwesome, Lucide) directly as SVG layers. | [Iconify on Figma Community ↗](https://www.figma.com/community/plugin/735098390272722638/iconify) |
| **Feather Icons** | Icons | Minimalist, 24x24 pixel-perfect open-source vector icon set on an 8pt grid. | [Feather Icons on Figma ↗](https://www.figma.com/community/plugin/744047968581015511/feather-icons) |
| **FlatIcon** | Icons & Graphics | Millions of vector icons and stickers across dozens of design aesthetics. | [FlatIcon on Figma ↗](https://www.figma.com/community/plugin/1159900057037748897/flaticon) |
| **Content Reel** | Content Fillers | Rapidly populates realistic avatars, full names, dates, addresses, and phone numbers with 1 click. | [Content Reel on Figma ↗](https://www.figma.com/community/plugin/731627008704299635/content-reel) |
| **Unsplash** | Content Fillers | Inserts royalty-free editorial photography directly into vector shapes and frames. | [Unsplash on Figma ↗](https://www.figma.com/community/plugin/738454987945972471/unsplash) |
| **Stark** | Accessibility | Audits WCAG contrast ratios, checks focus order, and simulates 8 types of color blindness. | [Stark on Figma ↗](https://www.figma.com/community/plugin/732603254453395948/stark-contrast-accessibility-checker) |
| **Contrast** | Accessibility | Real-time WCAG AA & AAA contrast checker that updates automatically as you select layers. | [Contrast on Figma ↗](https://www.figma.com/community/plugin/733159463094855731/contrast) |
| **Adee** | Accessibility | Comprehensive accessibility tool for color contrast, touch target testing, and alt-text generator. | [Adee on Figma ↗](https://www.figma.com/community/plugin/846875936855138127/adee-comprehensive-accessibility-tool) |
| **Anima** | Code Export | Converts Figma prototypes into responsive React, Vue, HTML, and CSS code. | [Anima on Figma ↗](https://www.figma.com/community/plugin/857346521132618398/anima-figma-to-code) |
| **Builder.io** | Code Export | AI-assisted code generation converting Figma screens into clean Tailwind CSS / React components. | [Builder.io on Figma ↗](https://www.figma.com/community/plugin/747985167520967365/builder-io-figma-to-code) |

### 🛠️ Practical Session 8: Rapid Prototyping with Content Reel & Stark
- **Objective:** Populate a contact list mockup with realistic data and ensure 100% WCAG 2.2 AA accessibility.
- **Step-by-Step Instructions:**
  1. In Figma, create a contact card layout with a circular avatar frame, name text layer, and email text layer.
  2. Duplicate the card 5 times in a vertical Auto Layout stack.
  3. Select all avatar frames, launch [Content Reel](https://www.figma.com/community/plugin/731627008704299635/content-reel), and click **Avatars** to fill diverse portraits instantly.
  4. Select the name text layers and click **Full Names** in Content Reel.
  5. Select the entire card stack and run [Stark](https://www.figma.com/community/plugin/732603254453395948/stark-contrast-accessibility-checker) to verify that the secondary email text meets the minimum **4.5:1 ratio**.
