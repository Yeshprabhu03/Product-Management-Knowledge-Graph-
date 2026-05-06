---
tags: [technical, strategy]
type: concept
branch: 11 - Technical PM
related: ["Build vs Buy vs Fine-tune", "Model Selection Criteria", 
          "LLM Architecture for PMs"]
created: 2026-05-06
---

# Vendor Evaluation

## Definition
Vendor Evaluation is the structured process by which a Product Manager assesses third-party AI/ML providers, API platforms, and tooling vendors before committing to a build or integration decision. It covers technical capability, pricing model, reliability guarantees, data privacy terms, and strategic lock-in risk.

## Why It Matters for PMs
1. **Cost Structure**: Vendor pricing (per-token, per-seat, per-call) directly determines the unit economics of an AI feature at scale.
2. **Lock-in Risk**: Deeply integrating a vendor API creates switching costs — a vendor deprecating a model or raising prices can strand your product roadmap.
3. **Data Privacy**: Many enterprise customers require contractual guarantees that their data is not used to train vendor models.
4. **Build vs Buy Decision**: A structured evaluation framework prevents the common mistake of defaulting to "just use the API" without assessing total cost and strategic fit.

## How to Apply It
1. **Define Evaluation Criteria**: Score vendors on: accuracy on your task, latency (P50/P99), cost per inference, data privacy terms, uptime SLA, and deprecation policy.
2. **Run a Bake-off**: Test 2-3 vendors on your actual production data sample — not vendor benchmarks.
3. **Model the Cost Curve**: Project cost at 10x current volume; many vendors look cheap at low scale but become the largest COGS line at growth.
4. **Audit the Contract**: Check model deprecation clauses, data retention policies, and whether your input data is used for training.
5. **Assess Switching Cost**: Before signing, prototype what a migration to an alternative would take — this gives you genuine negotiating leverage.

## Real-World Example
> **Klarna — 2023**
> Klarna evaluated OpenAI vs. building in-house for their customer support AI. After a structured bake-off, they chose OpenAI's API and deployed a bot that handled 2.3 million conversations in its first month — equivalent to the work of 700 full-time agents. The evaluation criterion that mattered most was not accuracy but resolution rate and cost-per-resolved-conversation, which the in-house option could not match on timeline.
> *PM Lesson: Evaluate vendors on your business metric, not their benchmark. Klarna's decision turned on cost-per-outcome, not F1 score.*

## Common Pitfalls
- **Benchmark Trust**: Vendor benchmarks use curated datasets; always run evaluations on your own data sample.
- **Ignoring Egress Costs**: Data transfer fees and API call overhead can add 20-40% to the headline per-token price.
- **Single-Vendor Dependency**: Signing multi-year contracts without an exit clause locks you in during a period when the AI market is repricing rapidly.

## Connected Concepts
- [[11 - Technical PM/Build vs Buy vs Fine-tune]] — the strategic decision this evaluation informs
- [[11 - Technical PM/Model Selection Criteria]] — technical criteria for evaluating model performance
- [[10 - GTM & Growth/Cost-to-Serve]] — how vendor cost feeds into unit economics
