# Module 4: Wireframing & Interactive Prototyping in Figma

Wireframes and prototypes translate abstract user flows into tangible, testable digital interfaces. They allow teams to validate hypotheses quickly and cheaply before committing engineering resources.

---

## 1. The Fidelity Spectrum

```text
[ Paper Sketch ] ──► [ Low-Fidelity ] ──► [ Mid-Fidelity ] ──► [ High-Fidelity Prototype ]
 Napkin sketch        Grayscale boxes      Detailed layout      Pixel-perfect, interactive
 5 minutes            30 minutes           2 hours              1-2 days
 Validate ideas       Validate layout      Validate copy/logic  Validate usability & handoff
```

### Why Start in Grayscale?
When presenting early designs with full brand colors and photography, stakeholders inevitably discuss colors rather than whether the layout solves the user's problem. **Grayscale wireframing forces focus on structure, readability, and content hierarchy.**

---

## 2. Core Figma Architecture

Mastering Figma requires understanding its native layout engine and component hierarchy:

### Frames vs. Groups
- **Never use Groups for layout.** Groups are simply loose collections of layers without boundary clipping or responsive behavior.
- **Always use Frames.** Frames act like HTML `<div>` containers with native clipping, scrolling overflow, constraints, and Auto Layout support.

---

## 3. Mastering Figma Auto Layout

Auto Layout is Figma's implementation of modern CSS Flexbox. It ensures buttons grow with text, cards reflow responsively, and spacing remains mathematically consistent.

### The 3 Core Resizing Behaviors:
1. **Fixed Size (`width: 320px`):** The layer maintains exact explicit pixel dimensions regardless of parent or children.
2. **Hug Contents (`width: fit-content`):** The frame shrinks or expands to tightly wrap around its child elements plus internal padding.
3. **Fill Container (`width: 100%` / `flex: 1`):** The frame expands to occupy all available space inside its parent frame.

```text
+-----------------------------------------------------------+
| PARENT FRAME (Auto Layout, horizontal gap: 16px)          |
|  +-----------------------+  +--------------------------+  |
|  | Button (Hug Contents) |  | Search Box (Fill Cont.)  |  |
|  +-----------------------+  +--------------------------+  |
+-----------------------------------------------------------+
```

---

## 4. Components, Variants & Component Properties

- **Main Component (`❖`):** The single source of truth template.
- **Instance (`◇`):** An occurrence of the component used across screens. Changes made to the main component automatically propagate to all instances.
- **Variants:** Combining multiple states of a component (e.g., `Default`, `Hover`, `Focused`, `Disabled`, `Loading`) under one unified selector.

### Component Property Types:
- **Variant Property:** Changes visual styles or states (e.g. `size = sm | md | lg`).
- **Boolean Property:** Toggles layer visibility (e.g. `hasIcon = true | false`).
- **Text Property:** Allows direct string editing from the sidebar without double-clicking into deep nested layers.
- **Instance Swap Property:** Allows swapping nested icon components seamlessly.

---

## 5. Prototyping Connections & Micro-interactions

Connecting screens brings designs to life for usability testing:

### Connection Settings:
- **Trigger:** `On Click`, `While Hovering`, `While Pressing`, `On Drag`, `After Delay`.
- **Action:** `Navigate to`, `Open Overlay`, `Scroll to`, `Set Variable`.
- **Transition Animation:**
  - **Instant:** Snaps immediately without transition.
  - **Dissolve:** Cross-fades opacity between screens.
  - **Smart Animate:** Automatically identifies matching layers across two frames and interpolates their position, scale, corner radius, and color smoothly.
- **Easing:** `Ease Out` or `Custom Cubic Bezier` (e.g., cubic-bezier(0.16, 1, 0.3, 1)) creates realistic physics-based motion.

---

## 🎯 Module 4 Practical Exercise

1. Open Figma and create a standard mobile frame (e.g., iPhone 16 / 393 x 852 px).
2. Create an **Auto Layout Button Component** with:
   - Horizontal padding: 24px, Vertical padding: 12px.
   - Text label with Hug Contents.
   - 3 Variants: `Primary (Solid)`, `Secondary (Outlined)`, and `Disabled (Muted)`.
3. Build a low-fidelity login screen wireframe utilizing this button component.
