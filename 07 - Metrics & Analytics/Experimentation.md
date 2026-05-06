---
tags: [metrics, process]
type: concept
branch: 07 - Metrics & Analytics
related: ["Online vs Offline Evaluation", "Multi-armed Bandits", "Product Health Metrics"]
created: 2026-05-05
---

# 🔬 Experimentation

## 📖 Definition
Experimentation is the rigorous process of testing hypotheses about product changes using a controlled framework, most commonly **A/B Testing**. It involves splitting users into a **Control group** (current version) and a **Treatment group** (new version) and measuring the impact on a specific metric. Key concepts include **Statistical Significance** (the probability that the result isn't due to chance), **Minimum Detectable Effect (MDE)**, and the **Novelty Effect** (the temporary spike in engagement that occurs just because a feature is new).

## 🎯 Why It Matters for PMs
For a Product Manager, experimentation is the "scientific method" for building products. It:
1. **Eliminates "HiPPO" Bias**: Moving the decision-making power from the "Highest Paid Person's Opinion" to actual user behavior data.
2. **De-risks Major Launches**: Allowing the team to test a new idea with a small percentage of traffic before rolling it out to the entire user base.
3. **Measures Incremental Value**: Proving exactly how much a specific feature contributed to a business outcome like retention or revenue.

## 🏗️ How to Apply It
1. **Draft a Strong Hypothesis**: "If we [Change X], then [Metric Y] will improve by [Z%], because [Reasoning]."
2. **Determine Sample Size and Duration**: Use power analysis to ensure you have enough users to reach a statistically significant result within a reasonable timeframe.
3. **Randomize the Split**: Ensure users are assigned to groups in a way that avoids bias (e.g., don't put all "power users" in the treatment group).
4. **Monitor "Guardrail Metrics"**: Track secondary metrics (like latency or support tickets) to ensure your improvement in one area isn't causing a catastrophic failure in another.
5. **Decide Based on Data, Not Just P-values**: Consider the business context — even if a result is significant, is the improvement large enough to justify the ongoing maintenance cost?

## 📦 Real-World Example
> **Booking.com — 2010s to Present**
> Booking.com is famous for its culture of radical experimentation. At any given time, they are running over 1,000 simultaneous A/B tests on everything from button colors to the order of search results. They don't make "big product bets"; they make thousands of small, validated wins. This culture of "data over opinion" allowed them to grow from a small startup to a $15B revenue powerhouse by compounding the wins from millions of individual user experiments.
> *PM Lesson: The most successful products are built through the compounding interest of thousands of small, validated experiments, not a single "genius" vision.*

## ⚠️ Common Pitfalls
- **"Peeking" at Results**: Stopping an experiment early as soon as the results look positive, which leads to "False Positives" and incorrect conclusions.
- **Testing Too Many Variants**: Trying to test 10 different versions of a feature at once, which requires a massive amount of traffic to reach significance.
- **Ignoring the "Novelty Effect"**: Assuming a 10% lift in the first 3 days will last forever, when it's actually just users clicking on a "new" button out of curiosity.

## 🔗 Connected Concepts
- [[07 - Metrics & Analytics/Online vs Offline Evaluation]] — the comparison between "test" results and real-world production performance.
- [[07 - Metrics & Analytics/Multi-armed Bandits]] — an advanced form of experimentation that optimizes for the "winner" in real-time.
- [[07 - Metrics & Analytics/Product Health Metrics]] — the high-level KPIs that experiments are designed to move.
