# Module 8: Usability Testing, Heuristics & Metrics

Usability testing evaluates a product by testing it on representative users. It strips away personal designer assumptions and replaces them with empirical behavioral data.

---

## 1. The Power of 5 Users (Jakob Nielsen's Law)

Many teams delay usability testing because they believe they need dozens of participants. Research by Jakob Nielsen and Tom Landauer proves that **testing with just 5 users uncovers ~85% of all core usability problems**.

```text
Usability Problems Found (%)
100% ┤                                 ╭───────
 80% ┤                      ╭──────────╯ (5 users ≈ 85%)
 60% ┤             ╭────────╯
 40% ┤      ╭──────╯
 20% ┤  ╭───╯
  0% ┴──┴──────┴──────┴──────┴──────┴──────┴──
       1      2      3      4      5      6   Number of Test Users
```

> [!TIP]
> It is far more effective to run **three small tests with 5 users** across iterations than a single massive test with 15 users at the end of a project.

---

## 2. Moderated vs. Unmoderated Testing

| Feature | Moderated Usability Testing | Unmoderated Usability Testing |
| :--- | :--- | :--- |
| **Facilitator** | Real-time human researcher present (Zoom / In-person) | Self-paced automated tool (Maze, UserTesting, Useberry) |
| **User Interaction** | "Think-Aloud Protocol" with live probe questions | User follows prompt scripts independently |
| **Best For** | Deep exploratory discovery, observing emotional reactions | Fast quantitative validation, click-path heatmaps, time-on-task |
| **Cost & Speed** | High coordination effort, slower scheduling | Low cost, rapid turnaround (hundreds of tests in hours) |

---

## 3. Writing Effective, Non-Leading Test Tasks

How you prompt users determines whether your data is valid or corrupted:

```text
❌ POOR / LEADING PROMPT:
"Click on the blue filter button on the top right and find the vegetarian recipes."
* Problem: You gave away the navigation path and button color!

✅ EXCELLENT / SCENARIO-BASED PROMPT:
"Imagine you are preparing dinner for a vegetarian friend tonight. Find a recipe you could cook in under 30 minutes and add it to your saved list."
* Benefit: Tests whether the user can discover the filters and navigate on their own.
```

---

## 4. Jakob Nielsen's 10 Usability Heuristics

A **Heuristic Evaluation** is an inspection method where UX specialists audit an interface against established usability principles:

1. **Visibility of system status:** Always keep users informed about what is going on (loading spinners, progress bars, upload percentages).
2. **Match between system and real world:** Speak the user's language with words, phrases, and concepts familiar to them rather than internal database jargon.
3. **User control and freedom:** Provide clear "emergency exits" without having to go through an extended process (Undo, Cancel, Close buttons).
4. **Consistency and standards:** Follow platform conventions (Jakob's Law); don't reinvent standard patterns.
5. **Error prevention:** Eliminate error-prone conditions or check for them and present users with confirmation dialogs before they commit to an action (e.g. "Are you sure you want to delete this file?").
6. **Recognition rather than recall:** Minimize memory load by making elements, actions, and options visible.
7. **Flexibility and efficiency of use:** Cater to both inexperienced and experienced users (keyboard shortcuts, custom dashboards).
8. **Aesthetic and minimalist design:** Interfaces should not contain information that is irrelevant or rarely needed. Every extra unit of information competes with relevant information.
9. **Help users recognize, diagnose, and recover from errors:** Error messages should be expressed in plain language (no error codes like `ERR_404_NULL`), precisely indicate the problem, and constructively suggest a solution.
10. **Help and documentation:** Even though systems should be usable without documentation, concise help and searchable FAQs must be readily accessible.

---

## 5. Core Usability Metrics

- **Task Completion Rate:** The percentage of participants who successfully complete the assigned task goal. Target: `> 80%`.
- **Time on Task:** Average time taken to achieve the goal.
- **Single Ease Question (SEQ):** A 1-to-7 rating scale asked immediately after each task: *"Overall, how easy or difficult was it to complete this task?"*
- **System Usability Scale (SUS):** A 10-item industry standard questionnaire resulting in a score from 0 to 100. **The industry benchmark average is 68.** Scores above 80 indicate world-class usability.

---

## 🎯 Module 8 Practical Exercise

1. Choose an e-commerce or SaaS website.
2. Conduct a **Heuristic Evaluation** using Nielsen's 10 principles.
3. Identify 3 heuristic violations, take screenshots, explain why each violates a principle, and sketch a proposed redesign fix.
