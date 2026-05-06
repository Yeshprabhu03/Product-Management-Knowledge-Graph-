---
tags: [prioritization, framework, roadmap]
type: framework
branch: 13 - Frameworks & Models
related: ["Product Roadmap", "Trade-off Frameworks", "RICE Prioritization"]
created: 2026-05-05
---

#Value vs Complexity

##Definition
A strategic prioritization matrix used to evaluate features or initiatives by mapping them on two axes: the expected business or user Value (Y-axis) and the technical or operational Complexity (X-axis). It helps identify "Quick Wins," "Big Bets," and "Time Wasters."

##Why It Matters for PMs
PMs are constantly bombarded with ideas. This framework provides an objective visual for why some high-value ideas must be deferred (too complex) and why some "simple" tasks should be done immediately (low complexity, medium value). It is the primary tool for negotiating scope with engineering.

##How to Apply It
1. List Potential Features: Gather all ideas from the backlog.
2. Estimate Value: Score from 1-10 based on impact on the North Star metric.
3. Estimate Complexity: Work with engineering to get a "T-Shirt Size" (S, M, L) or story point estimate.
4. Map the Quadrants:
    - Quick Wins: High Value, Low Complexity (Do now).
    - Big Bets: High Value, High Complexity (Plan as strategic pillars).
    - Fill-ins: Low Value, Low Complexity (Do when time permits).
    - Time Wasters: Low Value, High Complexity (Kill or defer).

##Real-World Example
> **Figma — 2018**
> When planning their "Teams" product, Figma's PMs mapped two major features: "Multiplayer Cursors" (High Value, High Complexity) and "Custom Keyboard Shortcuts" (Medium Value, Low Complexity). While the cursors were the "Vision," they were technically risky. They chose to ship the keyboard shortcuts and basic file sharing first (the Quick Wins) to prove the collaboration thesis to users while the engineering team spent 6 months building the complex real-time engine for cursors.
> *PM Lesson: Quick wins buy you the credibility and time needed to execute on your Big Bets.*

##Common Pitfalls
- "Complexity" only accounting for engineering time, ignoring design or legal effort.
- "Value" being based on gut feeling instead of data or user research.
- Letting "Big Bets" crowd out all the Quick Wins, leading to a "shipping drought."

##Connected Concepts
- [[05 - Prioritization & Roadmapping/Product Roadmap]] — is the visual output of a Value vs. Complexity exercise
- [[05 - Prioritization & Roadmapping/Trade-off Frameworks]] — provide the logic for moving items between quadrants
- [[13 - Frameworks & Models/RICE Prioritization]] — is a more quantitative evolution of this matrix
