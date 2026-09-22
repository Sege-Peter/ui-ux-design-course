# Module 9: Design-to-Code Handoff & Developer Collaboration

A great design that cannot be built accurately by engineers is a failed design. Design-to-code handoff is not a one-time "throw it over the wall" event—it is an ongoing collaborative conversation.

---

## 1. Why Traditional Handoff Fails

The most frequent friction points between designers and frontend developers:
1. **Missing Edge States:** Designers deliver only the "ideal" sunny-day mockup, leaving developers to guess empty states, 404 errors, long text overflow, and loading skeletons.
2. **Arbitrary Pixel Values:** Designing with random spacings (e.g. `13px`, `27px`, `41px`) instead of an 8pt spatial system forces developers to write messy, one-off CSS rules.
3. **Static Canvas Thinking vs. Fluid Responsive Reality:** Designers build for a fixed `1440px` artboard, but the real world renders across thousands of screen widths.

---

## 2. Preparing Designs for Handoff in Figma

Before inviting developers to inspect your Figma file:

### 1. Structure Files with Clear Page Sections
- `🎨 Cover & Status` (e.g. "In Review", "Ready for Dev", "Shipped")
- `📐 Design Tokens & Components`
- `📱 Screens: Mobile (393px)`
- `💻 Screens: Desktop (1440px)`
- `⚠️ Edge Cases & Empty States`

### 2. The Comprehensive Component State Matrix
Never hand off a component with only a default state. Deliver all 8 states:
```text
┌────────────┬────────────┬────────────┬────────────┐
│  Default   │   Hover    │  Pressed   │   Focus    │
├────────────┼────────────┼────────────┼────────────┤
│  Disabled  │  Loading   │   Error    │   Empty    │
└────────────┴────────────┴────────────┴────────────┘
```

---

## 3. Utilizing Figma Dev Mode

Figma's **Dev Mode** transforms the design canvas into a developer inspection workbench:

- **Redline Measurements:** Hovering over elements displays exact distances, padding, and margins in pixels or `rem`.
- **CSS Variable Mapping:** Dev Mode displays token names (e.g. `var(--color-primary-500)`) instead of raw hex values (`#3B82F6`), preventing hardcoded styles.
- **Code Snippet Generation:** Generates valid CSS, Tailwind CSS utility classes, iOS SwiftUI, or Android Jetpack Compose code.
- **Asset Exporting:** Developers can export SVG icons and WebP images directly at 1x, 2x, or 3x resolutions.

---

## 4. Design Tokens in Code: Automated Synchronization

Using tools like **Style Dictionary** or **Tokens Studio**, design tokens created in Figma export directly into frontend codebases:

```json
// design-tokens.json
{
  "color": {
    "primary": {
      "value": "#3B82F6",
      "type": "color"
    }
  },
  "spacing": {
    "md": {
      "value": "16px",
      "type": "spacing"
    }
  }
}
```

Automatically generates:
```css
/* tokens.css */
:root {
  --color-primary: #3b82f6;
  --spacing-md: 16px;
}
```

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: { primary: '#3B82F6' },
      spacing: { md: '16px' }
    }
  }
};
```

---

## 5. The Golden Checklist Before Developer Sign-Off

- [ ] All frames use Figma **Auto Layout** (no unconstrained absolute elements).
- [ ] Font families and weights match the engineering team's imported web fonts.
- [ ] All colors and spacings map to named design tokens.
- [ ] Icons are flattened vectors with zero unnecessary groups or strokes.
- [ ] Responsive resize behavior has been stress-tested by dragging frame handles.
- [ ] Interactive prototypes show micro-interaction timing and easing curves.

---

## 🎯 Module 9 Practical Exercise

1. Take a completed form screen in Figma.
2. Add a redline annotation layer or use Figma Dev Mode annotations to document:
   - Form input focus state (`2px outline #3B82F6`).
   - Error state text and border token.
   - Exact spacing between form groups (16px base token).
3. Export an icon as an optimized, clean SVG and verify it opens without clipping in a browser.
