# Module 7: Accessibility (a11y) & Inclusive Design (WCAG 2.2)

Accessibility ensures that digital interfaces can be perceived, navigated, and operated by everyone—including people with visual, auditory, cognitive, neurological, and motor impairments, as well as situational disabilities (e.g., bright sunlight glare, holding a baby with one arm).

---

## 1. The POUR Principles (WCAG 2.2)

The Web Content Accessibility Guidelines (WCAG) are organized around four core pillars:

1. **Perceivable:** Information and user interface components must be presentable to users in ways they can perceive (e.g. text alternatives for non-text content, adequate color contrast).
2. **Operable:** Interface components and navigation must be operable (e.g. fully navigable via keyboard alone, sufficient time to read content, no seizure-inducing animations).
3. **Understandable:** Information and the operation of the user interface must be understandable (e.g. readable text, predictable navigation, clear form error correction instructions).
4. **Robust:** Content must be robust enough that it can be interpreted reliably by a wide variety of user agents, including assistive technologies (screen readers).

---

## 2. Color Contrast Ratios (WCAG 2.2 AA & AAA)

Poor contrast is the #1 accessibility failure on the modern web.

```text
+-----------------------+-----------------------+-----------------------+
| Text Size             | WCAG Level AA (Req.)  | WCAG Level AAA (Opt.) |
+-----------------------+-----------------------+-----------------------+
| Normal Body Text      | Minimum 4.5 : 1       | Minimum 7.0 : 1       |
| (< 18px regular)      |                       |                       |
+-----------------------+-----------------------+-----------------------+
| Large Text            | Minimum 3.0 : 1       | Minimum 4.5 : 1       |
| (>= 18px or >=14px bld|                       |                       |
+-----------------------+-----------------------+-----------------------+
| UI Components/Borders | Minimum 3.0 : 1       | Minimum 4.5 : 1       |
| (Form fields, toggles)|                       |                       |
+-----------------------+-----------------------+-----------------------+
```

### Contrast Comparison Examples:
- `#737373` on `#FFFFFF` = **4.7 : 1** ➔ ✅ Passes WCAG AA
- `#9E9E9E` on `#FFFFFF` = **2.8 : 1** ➔ ❌ Fails (Illegible for low-vision users)

---

## 3. The Golden Rule of Color: Never Rely on Color Alone

Color should enhance an interface, but it must **never be the sole visual cue** to convey state, error, or critical information.

```text
BAD (Color only):
[ Email Input Box ] (Border turns red, no message)
* Red-green color-blind users cannot detect the error state!

GOOD (Color + Shape + Text):
[ Email Input Box ] (Border turns red, ⚠️ icon appears, helper text: "Please enter a valid email address.")
```

---

## 4. Touch Target Dimensions (Mobile Ergonomics)

To prevent mis-taps and support users with tremors or limited motor control:

- **WCAG 2.2 Criterion 2.5.8 (Target Size):** Minimum **24 x 24 CSS pixels**, but recommended **44 x 44 px** (Apple Human Interface Guidelines) or **48 x 48 dp** (Google Material Design).
- **Spatial Separation:** Maintain at least **8px of spacing** between adjacent touch targets to prevent accidental activations.

```text
┌───────────────────────────────────────┐
│              48px Touch               │
│   ┌───────────────────────────────┐   │
│   │       24px Visual Icon        │   │
│   └───────────────────────────────┘   │
└───────────────────────────────────────┘
```
*Pro Tip: An icon can visually be 24px, but its interactive hit-box padding frame should expand to 48px.*

---

## 5. Focus Indicators & Keyboard Navigability

Power users and individuals with motor disabilities navigate interfaces exclusively using the <kbd>Tab</kbd>, <kbd>Shift+Tab</kbd>, and <kbd>Enter</kbd> keys.

- **Never remove focus outlines (`outline: none` in CSS) without providing a high-contrast replacement.**
- Design a distinct **Focus State token** in your Figma component library (e.g. `2px solid #3B82F6` with `2px offset`).

---

## 🎯 Module 7 Practical Exercise

1. Open your portfolio design or a mobile app screen in Figma.
2. Install the free **Stark** or **Contrast** plugin in Figma.
3. Test your primary button text, body text, and placeholder inputs.
4. If any pair fails the **4.5:1 ratio**, adjust the tint or background until it reaches full WCAG AA compliance.
