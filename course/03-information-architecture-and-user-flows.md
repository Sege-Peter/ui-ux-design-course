# Module 3: Information Architecture & User Flows

Information Architecture (IA) is the structural design of shared information environments. It dictates how content is labeled, organized, and navigated so that users can intuitively locate what they need without cognitive overload.

---

## 1. The Core Pillars of Information Architecture

1. **Organization Systems:** How information is categorized (Alphabetical, Chronological, Topical, Task-oriented, Audience-specific).
2. **Labeling Systems:** How information is named and represented (e.g. "Account Settings" vs "Profile Preferences").
3. **Navigation Systems:** How users move through content (Global header nav, Breadcrumbs, Sticky footers, Faceted search filters).
4. **Search Systems:** How users query and discover content when browsing paths are slower than direct querying.

---

## 2. Card Sorting Techniques

Card sorting is a generative research method used to design or evaluate information architecture with real users.

```text
+-----------------------+-----------------------+-----------------------+
|   Open Card Sorting   |  Closed Card Sorting  |  Hybrid Card Sorting  |
+-----------------------+-----------------------+-----------------------+
| Participants sort     | Participants sort     | Predefined categories |
| topics into groups    | topics into fixed,    | are provided, but     |
| and name their own    | predetermined         | participants can also |
| categories.           | categories.           | invent new ones.      |
| Best for: Discovery   | Best for: Validation  | Best for: Refinement  |
+-----------------------+-----------------------+-----------------------+
```

---

## 3. Hierarchy Depth: Flat vs. Deep Structures

```text
FLAT STRUCTURE (Wide Breadth, Shallow Depth)
Home ──┬── Products
       ├── Pricing
       ├── Documentation
       └── Support
* Benefit: Fewer clicks required; all core sections visible immediately.

DEEP STRUCTURE (Narrow Breadth, Multiple Sub-levels)
Home ──> Products ──> Enterprise ──> Cloud ──> Security ──> Compliance
* Danger: Higher risk of users getting lost or abandoning search paths.
```

> [!TIP]
> Modern UX favors **flat architectures** with clear categorization and contextual search over deep nested hierarchies.

---

## 4. User Flows vs. Wireflows

### User Flow
A step-by-step flowchart diagram illustrating the complete path a user traverses through a digital product to achieve a specific task.

```text
[ Start ] ──> ( Sign In Page ) ──> { Has 2FA Enabled? }
                                       │
                        ┌──────────────┴──────────────┐
                        ▼                             ▼
                     [ Yes ]                        [ No ]
                        │                             │
              ( Enter OTP SMS Code )                  │
                        │                             │
                        └──────────────┬──────────────┘
                                       ▼
                              ( Main Dashboard )
```

### Standard Flowchart Symbols:
- **Rounded Rectangle (Pill):** Start or End of a flow.
- **Rectangle:** A screen, page, or state.
- **Diamond:** A decision point branching into multiple logic paths (e.g., "Logged in?", "Cart empty?").
- **Arrow with Label:** Action taken (e.g., "Tap Submit", "Swipe Left").

### Edge Cases and Non-Happy Paths:
Every user flow must account for:
1. **Empty States:** What does a user see when they have no saved projects or zero notifications?
2. **Error States:** What happens when the network disconnects, payment fails, or input validation errors occur?
3. **Partial States:** What happens while data is actively streaming or pagination is loading?

---

## 🎯 Module 3 Practical Exercise

1. Design a visual user flow for a user who wants to:
   - Browse a recipe catalog.
   - Filter by "Vegetarian" and "Under 30 Minutes".
   - Bookmark their favorite recipe.
2. Clearly identify at least 1 decision diamond and 1 error/empty state (e.g., "0 recipes match criteria").
