---
tags: [leadership, technical]
type: concept
branch: 12 - Leadership & Stakeholders
related: ["Aha Moment", "Product Health Metrics", "Data Quality"]
created: 2026-05-05
---

# Working with Data Scientists

## Definition
Working with Data Scientists involves collaborating on the extraction of actionable insights from complex datasets to drive product strategy and validation. While ML engineers build "Models that Do Things," Data Scientists build "Analysis that Explains Things." For a PM, a Data Scientist is a strategic partner who helps identify the **Aha Moment**, designs rigorous **Experimentation** (A/B tests), and uncovers hidden patterns of user behavior that inform the roadmap.

## Why It Matters for PMs
For a Product Manager, a great relationship with Data Science is essential for:
1. **Evidence-Based Decisions**: Moving from "guessing" what users want to "proving" it through cohort analysis and behavioral data.
2. **Measuring True Impact**: Ensuring that the results of an A/B test are statistically significant and not just a random fluke or a "novelty effect."
3. **Identifying Growth Levers**: Finding the "Magic Number" (e.g., 7 friends in 10 days) that predicts long-term retention and business success.

## How to Apply It
1. **Define the "Learning Goal" First**: Before asking for a "report," tell the data scientist exactly what decision you are trying to make (e.g., "should we kill this feature?").
2. **Involve Them in Experiment Design**: Bring them in *before* you launch a test to ensure you have the right sample size and "guardrail metrics" to reach a valid conclusion.
3. **Ask for the "Why," not just the "What"**: Instead of just looking at the conversion rate, ask "What segment of users is driving this change, and what do they have in common?"
4. **Give Them Time for "Deep Exploration"**: Budget time for them to look for patterns you haven't thought of, rather than just treating them as a "query service" for your existing questions.
5. **Close the Loop**: When their analysis leads to a product change, share the result with them so they see the real-world impact of their data work.

## Real-World Example
> **The "Hidden Power User" Discovery — 2019**
> A PM at a SaaS company was confused why their "Pro" plan was failing. They asked a Data Scientist to "analyze the churn." The Data Scientist went further and discovered that the "retained" users were all using a specific, obscure "Integrations" feature that wasn't even on the main marketing page. This insight shifted the entire product strategy to focus on integrations, which eventually led to a 3x increase in enterprise conversion.
> *PM Lesson: A Data Scientist shouldn't just answer your questions; they should help you figure out what questions you should be asking.*

## Common Pitfalls
- **The "Query Monkey" Trap**: Treating data scientists as a support team that only runs SQL queries, which wastes their strategic thinking and reasoning abilities.
- **Ignoring Statistical Significance**: Pushing for a "winner" in an A/B test after only 2 days of data because the chart looks positive.
- **Asking for "Everything"**: Requesting a "massive dashboard" that tracks 100 metrics, which leads to "Data Paralysis" where nobody knows which number actually matters.

## Connected Concepts
- [[07 - Metrics & Analytics/Aha Moment]] — the key insight that data scientists help to discover.
- [[07 - Metrics & Analytics/Experimentation]] — the core technical process shared between PMs and Data Science.
- [[04 - Data Strategy/Data Quality]] — the "raw material" that data scientists need to do their job effectively.
