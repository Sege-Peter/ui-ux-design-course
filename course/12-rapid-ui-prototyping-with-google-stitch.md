# Module 12: Rapid UI Prototyping with Google Stitch

---

### 1. What is Google Stitch?

**Google Stitch** is an AI-powered generative UI design and front-end prototyping tool from Google Labs (built on multimodal Gemini models). It bridges early UX discovery and visual delivery by translating **natural language prompts, hand-drawn paper sketches, wireframes, and reference screenshots** directly into structured UI screens, interactive flows, and production-ready code.

#### Where Stitch Sits in the UI/UX Pipeline

```text
Phase 1: UX Discovery    ──►   Phase 2: Rapid Concepting   ──►   Phase 3: Production Design & Systems
  (FigJam / Miro)                (Google Stitch AI)                      (Figma)
• Problem definition           • Text-to-UI exploration          • Auto Layout component builds
• User flows & sketches        • Sketch-to-UI conversion         • Design tokens / Figma Variables
• Information architecture     • Instant clickable multi-screens • Dev Mode inspection & handoff
```

* **Stitch's role:** Eliminates the "blank canvas" block. Instead of manually building basic frames and dummy layouts from scratch, you generate baseline variants in seconds.
* **Figma's role:** Refinement and scale. You export the generated layouts into Figma to apply design tokens, tweak pixel-level Auto Layout hierarchies, enforce accessibility compliance, and wire complex prototypes.

---

### 2. Core Capabilities & AI Generation Modes

| Feature / Mode | Underlying Engine | Best Used For |
| :--- | :--- | :--- |
| **Standard Mode (Text-to-UI)** | Gemini Flash | Rapid screen generation and copy-paste export into editable Figma layers. |
| **Experimental Mode (Vision / Sketch-to-UI)** | Gemini Pro | Uploading low-fi sketches, napkin drawings, or wireframe images and turning them into styled mockups. |
| **Multi-Screen Flows** | Gemini Pro | Generating interconnected screen flows (e.g., Cart ➔ Shipping ➔ Payment Confirmation) with visual consistency. |
| **Code Export** | Frontend Synthesis | Exporting clean HTML, CSS, React, and Tailwind CSS markup directly from the canvas. |

---

### 3. Prompting Framework for UI: The "Zoom-Out, Zoom-In" Model

Generative AI produces generic interfaces when given vague prompts (e.g., *"Make a food app screen"*). Professional UI prompting requires structural constraints.

```text
[Context & Target User]
       │
       ▼
[Screen Goal & Architecture]
       │
       ▼
[Component Inventory & Layout Rules]
       │
       ▼
[Visual Style, Theme & Constraints]
```

#### Production-Grade Prompt Template

```text
Context: Mobile app screen for an on-demand grocery and local fresh produce delivery platform.
Target User: Busy urban professionals ordering groceries during evening transit.
Screen Goal: Rapid cart checkout and delivery slot confirmation.

Screen Type: Mobile UI (iOS native style, 390px width).

Layout & Hierarchy:
- Top app bar: Screen title "Secure Checkout" with back button and clear progress indicator (Step 2 of 3).
- Primary section: Delivery address card with radio toggle and an "Edit" button.
- Secondary section: Time-window selector presented as a horizontal pill carousel ("Today 6-8 PM", "Tomorrow 8-10 AM").
- Tertiary section: Order summary accordion displaying item subtotal, delivery fee, and highlighted promotional discount.
- Bottom anchor: Sticky bottom bar containing total price in large bold weight and a full-width "Place Order" CTA button.

Visual Direction:
- Clean, modern, high-contrast aesthetic.
- Color palette: Deep forest green primary (#1E4620), neutral warm-gray background (#F7F7F5), subtle card borders with no heavy drop shadows.
- Accessibility: Minimum 48px touch targets for buttons and clear visual contrast for text elements.
```

---

### 4. Hands-On Workflow: From Paper Sketch to Google Stitch to Figma

#### Step 1: Sketching the Low-Fi Wireframe
* Draw a rough wireframe on paper or in FigJam.
* Box out the top navigation, hero stat card, list items, and bottom navigation bar.
* Keep it simple—focus purely on placement and hierarchy, not colors or styling.

```text
+-----------------------------------+
|  [<]  Profile & Settings    [⚙]   |
+-----------------------------------+
|  (Avatar) Alex Rivera             |
|  alex.rivera@example.com          |
|  [ Edit Profile ]                 |
+-----------------------------------+
|  NOTIFICATIONS                    |
|  Push Alerts              [ (O) ] |
|  Email Digest             [ (O) ] |
|  Weekly Summary           [ ( ) ] |
+-----------------------------------+
|  PREFERENCES                      |
|  Dark Mode                [ (O) ] |
|  Haptic Feedback          [ (O) ] |
+-----------------------------------+
|  [ Sign Out (Destructive) ]       |
+-----------------------------------+
```

#### Step 2: Ingestion & Generation in Stitch
1. Open **Google Stitch** (`https://stitch.withgoogle.com/`) and start a new project.
2. Switch to **Experimental Mode** and select **Mobile** canvas (`390px` viewport).
3. Upload your wireframe sketch or screenshot.
4. Attach a concise directive:
> *"Convert this wireframe into a modern health & fitness dashboard. Dark mode, emerald green accents, rounded cards (16px radius), and clean typography."*

#### Step 3: Screen Branching & Variant Exploration
* Use Stitch's canvas to branch out:
* Select the generated screen and prompt: *"Create an alternate version with high-density data tables instead of cards."*
* Compare the two directions side by side on the infinite canvas.

#### Step 4: Import to Figma & System Refinement
1. In Stitch Standard Mode, copy the generated design layout.
2. Paste the elements into your primary **Figma project file**.
3. Convert static frame groups into reusable components:
   * Reorganize layers into strict **Auto Layout** (check padding and `Fill container` vs. `Hug contents`).
   * Bind color values to your design system's **Figma Color Variables**.
   * Replace generated placeholder icons with unified vector icons from your icon set (e.g., Feather, Lucide, or Iconify).

---

### 5. Practical Limitations & Best Practices

* **Stitch is for ideation, not design system governance:** Stitch does not manage token inheritance, variable modes, or nested component libraries. Treat Stitch outputs as high-fidelity wireframes that must be cleaned up in Figma.
* **Watch out for layout bugs:** AI-generated screens often have minor alignment issues, missing icons, or fixed-width layers that do not scale smoothly. Always inspect auto-layout containers in Figma after importing.
* **Data privacy hygiene:** Disable AI model training toggles in account settings before feeding proprietary enterprise wireframes or internal dashboard screenshots into generative tools.

---

### 6. Bridge to Code: Exporting from Canvas to Production

When prototyping with Stitch, frontend engineers can directly review generated component markup (HTML, Tailwind CSS, or React JSX) as an early scaffolding baseline:

```html
<!-- Example of Stitch Generated Tailwind Scaffolding -->
<section class="max-w-md mx-auto p-4 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
  <div class="flex items-center justify-between py-3 border-b border-slate-100 dark:border-slate-800">
    <div>
      <h4 class="text-sm font-semibold text-slate-900 dark:text-white">Push Notifications</h4>
      <p class="text-xs text-slate-500">Receive real-time order and shipment alerts</p>
    </div>
    <!-- Accessible Switch Toggle -->
    <button role="switch" aria-checked="true" class="w-11 h-6 bg-emerald-600 rounded-full relative transition-colors focus:ring-2 focus:ring-emerald-500 focus:outline-none">
      <span class="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5 shadow-sm transition-transform"></span>
    </button>
  </div>
</section>
```

---

### 7. Module Assignment

1. Take a rough sketch of a **Profile & Notification Settings** screen.
2. Run it through Google Stitch to generate both a **Light Mode** and **Dark Mode** variant.
3. Export the primary screen into Figma, structure it with proper Auto Layout, and hook up two interactive hover/tap states.
