---
tags: [framework, prioritization]
type: framework
branch: 13 - Frameworks & Models
related: ["Product Roadmap", "Product Health Metrics"]
created: 2026-05-05
---

#RICE Prioritization

##Definition
RICE is a scoring system developed by Intercom to help product managers prioritize features, ideas, and projects by evaluating them across four factors: **Reach**, **Impact**, **Confidence**, and **Effort**.

##When Would I Use This?
1. **Backlog Grooming**: When you have a massive list of features and need an objective way to sort them.
2. **Stakeholder Management**: When you need to explain why a requested feature isn't being built yet using a data-driven rationale.
3. **Roadmap Planning**: To identify "low-hanging fruit" (high reach/impact, low effort).

##How to Apply It
The RICE score is calculated as:
$$(Reach \times Impact \times Confidence) / Effort = RICE Score$$

1. **Reach**: How many people will this impact in a given timeframe (e.g., users per month)?
2. **Impact**: How much will this contribute to the goal? (Massive = 3x, High = 2x, Medium = 1x, Low = 0.5x, Minimal = 0.25x).
3. **Confidence**: How sure are you about your estimates? (High = 100%, Medium = 80%, Low = 50%).
4. **Effort**: How much time will it take from all team members (e.g., person-months)?

##Real-World Example
> **Intercom — 2015**
> Intercom invented RICE to solve internal prioritization wars. When evaluating whether to build a "Saved Replies" feature, they scored it: Reach=500 users/month, Impact=2x (High), Confidence=80%, Effort=1 person-month → RICE=800. This outscored a more "exciting" AI feature with a score of 200, killing the debate.
> *PM Lesson: A scoring system depoliticizes roadmap decisions by replacing opinion with structured estimation.*

##Common Pitfalls
- **Over-optimism**: Inflating confidence scores without data.
- **Complexity Bias**: Forgetting that Effort includes design, QA, and marketing, not just engineering.

---

##Connected Concepts
- [[05 - Prioritization & Roadmapping/Product Roadmap]] — provides the visual for prioritization decisions
- [[07 - Metrics & Analytics/Product Health Metrics]] — provides the baseline metrics for Reach and Impact
