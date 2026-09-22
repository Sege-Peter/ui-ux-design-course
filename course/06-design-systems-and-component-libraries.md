# Module 6: Design Systems & Component Libraries

A Design System is a single source of truth for an entire organization. It comprises design principles, visual tokens, reusable components, and documentation that allow multidisciplinary teams to design and build cohesive digital products at scale.

---

## 1. The Anatomy of a Design System

A mature design system is much more than a Figma UI kit:

```text
┌────────────────────────────────────────────────────────────────────────┐
│                          THE DESIGN SYSTEM                             │
│                                                                        │
│  ┌────────────────────┐  ┌────────────────────┐  ┌──────────────────┐  │
│  │   Design Tokens    │  │  Component Library │  │  Documentation   │  │
│  │ (Colors, Spacing,  │  │ (Figma Components  │  │ (Usage guidelines│  │
│  │  Typography, Shadow│  │  & Code Components)│  │  Do's and Don'ts)│  │
│  └────────────────────┘  └────────────────────┘  └──────────────────┘  │
│                                                                        │
│  ┌────────────────────────────────────────────┐  ┌──────────────────┐  │
│  │            Brand Guidelines                │  │ Voice & Tone     │  │
│  │       (Logos, Iconography, Imagery)        │  │ (Copywriting std)│  │
│  └────────────────────────────────────────────┘  └──────────────────┘  │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Atomic Design Methodology (Brad Frost)

Atomic Design breaks interfaces down into hierarchical building blocks:

```text
Atoms ────► Molecules ────► Organisms ────► Templates ────► Pages
(Button,    (Search Bar:     (Site Header:   (Dashboard     (Live screen
 Input,      Input + Button   Logo + Search   Wireframe      with real
 Icon)       + Icon)          + Profile)      Structure)     user data)
```

1. **Atoms:** Indivisible fundamental elements: color swatches, font styles, icons, HTML form labels, single buttons.
2. **Molecules:** Groups of atoms functioning together as a simple unit: a search form combining an `<input>`, an `<icon>`, and a `<button>`.
3. **Organisms:** Complex, distinct sections of an interface composed of molecules and atoms: a complete site header navigation bar or a product card grid.
4. **Templates:** Page-level objects that arrange organisms into a cohesive layout structure, focusing on content density and responsiveness without final copy.
5. **Pages:** Specific instances of templates filled with real production content, photography, and live data to test performance.

---

## 3. The 3-Tier Design Token Architecture

Design Tokens are the visual atoms of a design system stored as platform-agnostic data (JSON, CSS variables, iOS Swift, Android XML).

```text
[ Tier 1: Global / Reference Tokens ]
  "blue-500": "#3B82F6"
  "space-16": "16px"
  "font-inter": "Inter, sans-serif"
         │
         ▼
[ Tier 2: Semantic / Alias Tokens ]
  "color-interactive-primary": "{blue-500}"
  "spacing-card-padding": "{space-16}"
         │
         ▼
[ Tier 3: Component-Specific Tokens ]
  "btn-primary-bg": "{color-interactive-primary}"
  "btn-primary-padding-x": "{spacing-card-padding}"
```

### Why 3 Tiers?
If your brand rebrands from Blue to Purple, you simply update the Tier 2 Alias token (`color-interactive-primary` ➔ `{purple-500}`), and every button, badge, and tab across iOS, Android, and Web updates automatically without editing hundreds of individual components.

---

## 4. Writing Component Documentation: "Do's and Don'ts"

Every component in a design system needs explicit usage guardrails:

| Component: Primary Button | Correct Usage (DO) | Incorrect Usage (DON'T) |
| :--- | :--- | :--- |
| **Hierarchy** | Use for the single most important action on a page (e.g., "Save Changes"). | Never place 3 primary solid buttons next to each other on the same screen. |
| **Labeling** | Use action-oriented verbs: "Create Project", "Pay $45.00". | Avoid vague single words like "Submit", "Go", or "Click Here". |
| **State** | Include loading spinners during asynchronous operations. | Never leave the button active while a network request is inflight (prevents double charges). |

---

## 🎯 Module 6 Practical Exercise

1. Open your Figma design system sandbox.
2. Create an **Atomic Input Field Molecule**:
   - Label atom (14px Semi-bold)
   - Input Box atom with border token and 8pt padding token
   - Helper/Error text atom (12px Regular)
3. Configure variants for: `Default`, `Focused (2px border outline)`, and `Error (Danger red token)`.
