---
tags: [execution, process, ai]
type: pattern
branch: 06 - Execution & Delivery
related: ["Agile for AI Teams", "Online vs Offline Evaluation", "Graceful Degradation"]
created: 2026-05-05
---

# Release Management

## Definition
The specialized process of deploying AI models to production, which involves multi-layered safety checks including **Shadow Mode** (running in the background), **Canary Deployments** (limited traffic), **Champion-Challenger** testing (comparing old vs. new), and robust rollback plans.

## Why It Matters for PMs
Deploying an AI model is riskier than a code change because you cannot "Unit Test" every possible output. PMs must use staggered release strategies to identify "Silent Failures" or negative user impacts in a small group before rolling out to the entire user base.

## How to Apply It
1. Run in Shadow Mode: Log the new model's predictions in production without showing them to users. Compare results against the live model.
2. Use Canary Releases: Roll out the new model to 1% of users, then 5%, then 20%, monitoring [[07 - Metrics & Analytics/AI Metrics|AI Metrics]] at each stage.
3. Champion-Challenger Testing: Run the existing model (Champion) and new model (Challenger) side-by-side to see which one performs better on live business goals.
4. Establish Rollback Triggers: Define the exact "Metric Drop" (e.g., -5% in conversion) that will trigger an automatic revert to the previous model.

## Real-World Example
> **Google — 2018**
> When Google first launched "Smart Reply" for Inbox/Gmail, they didn't just turn it on. They ran the model in **Shadow Mode** for weeks on millions of emails. Engineers and PMs compared the model's "suggested replies" to what users *actually* typed. Only when the shadow model's suggestions aligned with user behavior 80% of the time did they move to a live canary launch.
> *PM Lesson: The "Shadow Phase" is the only way to validate an AI model's real-world accuracy without risking your reputation.*

## Common Pitfalls
- "Big Bang" releases of new models without a shadow phase.
- Failing to have a "Fast Rollback" mechanism in place.
- Not accounting for the latency impact of the "Challenger" model on the production system.

## Connected Concepts
- [[06 - Execution & Delivery/Agile for AI Teams]] — defines where release management fits in the development cycle
- [[07 - Metrics & Analytics/Online vs Offline Evaluation]] — provides the data used to decide if a model can move to the next release stage
- [[09 - AI UX Patterns/Graceful Degradation]] — ensures the product remains functional if a new release fails
