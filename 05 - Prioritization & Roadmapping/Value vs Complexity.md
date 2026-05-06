---
tags: [prioritization, framework]
type: framework
branch: 05 - Prioritization & Roadmapping
related: ["RICE Prioritization", "Trade-off Frameworks", "Product Roadmap"]
created: 2026-05-05
---

# Value vs Complexity

## Definition
Value vs. Complexity is a prioritization matrix used to evaluate features or initiatives by mapping them on two axes: **Business/User Value** (Y-axis) and **Implementation Complexity** (X-axis). It results in four quadrants: **Quick Wins** (High Value, Low Complexity), **Strategic Bets** (High Value, High Complexity), **Fill-ins** (Low Value, Low Complexity), and **Time Sinks** (Low Value, High Complexity). This visual tool helps teams decide where to invest their limited resources for the maximum possible impact.

## Why It Matters for PMs
For a Product Manager, the Value vs. Complexity matrix is essential for:
1. **Negotiating Scope**: Helping the team identify "high-cost" items that offer "low-value," allowing them to be cut or deferred.
2. **Building Momentum**: Identifying the "Quick Wins" that can be shipped early to build credibility with users and stakeholders.
3. **Strategic Planning**: Ensuring that the team is not only doing easy tasks (Fill-ins) but is also making progress on long-term, high-impact "Strategic Bets."

## How to Apply It
1. **List All Initiatives**: Gather all potential features or projects for the upcoming cycle.
2. **Estimate Value**: Score each item (e.g., 1-10) based on its expected impact on your North Star Metric or business goals.
3. **Estimate Complexity**: Work with engineering and design to "T-Shirt Size" (S, M, L) the effort required for each item.
4. **Map to the Matrix**: Place the items in the appropriate quadrant on the board.
5. **Develop a Plan**:
    - **Quick Wins**: Do these first.
    - **Strategic Bets**: Plan for 1-2 per quarter.
    - **Fill-ins**: Do these when time permits (e.g., between sprints).
    - **Time Sinks**: Avoid these at all costs.

## Real-World Example
> **Figma's Early Feature Mix — 2017**
> During their early growth, Figma's PMs mapped two major features: "Multiplayer Cursors" (High Value, High Complexity) and "Custom Keyboard Shortcuts" (Medium Value, Low Complexity). While the cursors were the "Strategic Bet" that would define their category, they were technically risky and slow to build. They chose to ship the **Keyboard Shortcuts** first (the Quick Win) to build user trust and show progress while the engineering team spent the next 6 months tackling the complex multiplayer engine.
> *PM Lesson: A healthy roadmap is a mix of Quick Wins to keep users engaged and Strategic Bets to change the competitive landscape.*

## Common Pitfalls
- **Underestimating Complexity**: Optimism bias in engineering leads to "Quick Wins" turning into "Time Sinks" halfway through development.
- **Overestimating Value**: Assuming a feature is valuable just because a few loud users asked for it, without validating the actual impact at scale.
- **Ignoring the Fill-ins**: Sometimes small "low value" items (like fixing a typo or a broken link) have a disproportionately high impact on user trust and professional feel.

## Connected Concepts
- [[13 - Frameworks & Models/RICE Prioritization]] — a more quantitative scoring method that can be used to derive the "Value" score for the matrix.
- [[05 - Prioritization & Roadmapping/Trade-off Frameworks]] — the logic used to decide if a "Strategic Bet" is worth the complexity.
- [[05 - Prioritization & Roadmapping/Product Roadmap]] — the tactical execution document that the matrix helps to populate.
