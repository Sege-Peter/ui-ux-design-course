# Module 5: Visual Design Foundations (The 8pt Grid, Typography & Color)

Visual design is not mere decoration; it is visual communication. Systematized visual design guides the human eye, reduces cognitive load, reinforces brand identity, and ensures accessible legibility.

---

## 1. The 8pt Spatial Grid System

Modern digital screens have high pixel densities (Retina, 2x, 3x displays). Sizing and spacing elements in multiples of **8** (8px, 16px, 24px, 32px, 40px, 48px, 64px, 80px) ensures visual rhythm and eliminates random pixel values.

```text
Spacing Scale:
4px  ──> Micro (icon to text gap, badge padding) [Half-step]
8px  ──> Compact (inner component padding)
16px ──> Base (gap between form elements, card padding)
24px ──> Medium (gap between distinct cards)
32px ──> Large (section spacing on mobile)
48px ──> XLarge (section spacing on tablet)
64px ──> XXLarge (hero spacing on desktop)
```

### Why 8?
- Divides cleanly into almost all standard screen dimensions (320, 360, 768, 1024, 1280, 1440, 1920).
- Scales without sub-pixel blurring when rendered at 1.5x or 2x resolutions.
- Dramatically speeds up designer and developer alignment.

---

## 2. Typography Hierarchy & Modular Scales

Typography establishes hierarchy and readability. Use a mathematical **Modular Scale** (e.g., Major Third ratio of 1.25):

```text
Display:     48px / Line-height: 56px (1.16x) ── Bold (700)
Heading 1:   38px / Line-height: 46px (1.21x) ── Bold (700)
Heading 2:   30px / Line-height: 38px (1.26x) ── Semi-Bold (600)
Heading 3:   24px / Line-height: 32px (1.33x) ── Semi-Bold (600)
Body Large:  18px / Line-height: 28px (1.55x) ── Regular (400)
Body:        16px / Line-height: 24px (1.50x) ── Regular (400)
Caption:     12px / Line-height: 16px (1.33x) ── Medium (500)
```

### Critical Typographic Rules:
1. **Line-height (Leading):** Large headings need tight line-heights (~110-125%), while small body text requires generous line-heights (~140-160%) to prevent lines from clumping together.
2. **Line Length (Measure):** The optimal reading line length for body text is **45 to 75 characters per line** (including spaces). Lines that are too long tire the reader's eye when moving back to the start of the next line.
3. **Tracking (Letter Spacing):**
   - Headings (>32px): Use slightly *negative* letter spacing (`-0.02em`) to make letters feel tight and deliberate.
   - All-Caps text (<14px): Use slightly *positive* letter spacing (`+0.06em`) to ensure individual letter legibility.

---

## 3. UI Color Systems & The 60-30-10 Rule

A common beginner mistake is splashing brand colors across the entire screen. Professional UI applies color strategically:

```text
┌──────────────────────────────────────────────────────────┐
│  60% NEUTRAL DOMINANT                                    │
│  Backgrounds, white space, canvas surfaces, off-whites   │
│                                                          │
│  ┌───────────────────────────────┐                       │
│  │ 30% STRUCTURAL SECONDARY      │                       │
│  │ Cards, sidebars, borders,     │  ┌─────────────────┐  │
│  │ muted typography, icons       │  │ 10% ACCENT CTA  │  │
│  │                               │  │ Primary Button  │  │
│  └───────────────────────────────┘  └─────────────────┘  │
└──────────────────────────────────────────────────────────┘
```

### The Functional Color Palette:
- **Primary / Brand:** Used for key calls-to-action (CTAs), active navigation states, and primary focal points.
- **Neutrals (Gray Scale):** Used for background canvas (`#F8FAFC`), surfaces (`#FFFFFF`), borders (`#E2E8F0`), and body text (`#0F172A`).
- **Semantic Colors:**
  - **Success Green (`#10B981`):** Confirmations, completed tasks, positive trends.
  - **Warning Amber (`#F59E0B`):** Alerts, expiring sessions, cautions.
  - **Danger Red (`#EF4444`):** Errors, destruct actions (Delete account).
  - **Information Blue (`#3B82F6`):** Neutral notifications, system tips.

---

## 4. Shadows & Elevation Tokens

Realistic UI depth mimics natural light coming from above:

```css
/* Elevation 1: Subtle card rest state */
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);

/* Elevation 2: Card hover state / Dropdowns */
box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.05);

/* Elevation 3: Modals / Floating Action Buttons */
box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05);
```

---

## 🎯 Module 5 Practical Exercise

1. Create a modern Product Pricing Card in Figma utilizing the 8pt grid.
2. Apply the 60-30-10 color rule:
   - 60% neutral background canvas.
   - 30% card surface, border, and secondary details.
   - 10% high-contrast accent button.
3. Apply Elevation 1 at rest, and simulate Elevation 2 on hover.
