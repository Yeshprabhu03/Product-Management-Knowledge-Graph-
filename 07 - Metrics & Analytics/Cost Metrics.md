---
tags: [metrics, commercial]
type: metric
branch: 07 - Metrics & Analytics
related: ["Business Models", "Build vs Buy vs Fine-tune", "AI Metrics"]
created: 2026-05-05
---

# Cost Metrics

## Definition
Cost Metrics in AI products refer to the financial indicators used to track the efficiency and sustainability of machine learning features. Unlike traditional software, where marginal cost is near zero, AI has significant **Variable Costs** that scale linearly with usage. Key metrics include **Cost Per Inference** (the model API or GPU cost per query), **Gross Margin Impact** (AI cost as a % of revenue), **Cost Per Resolution** (for support bots), and **Compute Overhead**. Monitoring these is essential for ensuring that a product remains profitable as its user base grows.

## Why It Matters for PMs
For an AI Product Manager, cost metrics are as important as accuracy metrics because:
1. **Determines Pricing Strategy**: You cannot price a product correctly if you don't know the "cost-to-serve" for each user's AI requests.
2. **Informs Model Selection**: Helping the team decide when to trade off a small amount of accuracy for a "smaller" model that is 10x cheaper to run.
3. **Ensures Scalability**: Identifying "high-cost" features that might become unsustainable "money-pits" if they go viral or if power users abuse them.

## How to Apply It
1. **Model Cost-at-Scale**: Before launch, calculate the expected inference costs for 100K, 1M, and 10M users based on your current model choice.
2. **Implement Per-Feature Attribution**: Track which specific AI features are driving the most cost to identify where optimization is most needed.
3. **Track "Cost-Accuracy" Frontiers**: Map different models on a chart showing their cost vs. their performance to find the most efficient "sweet spot" for your budget.
4. **Optimize Model Architecture**: Work with engineering to explore **Quantization**, **Caching**, or **Distillation** to reduce the cost per query.
5. **Set Budget Alerts**: Create hard limits or alerts that trigger if a specific user or feature starts consuming a disproportionate amount of compute budget.

## Real-World Example
> **The GPT-4 "Margin Crisis" — 2023**
> A startup launched a popular AI writing tool using the GPT-4 API during their beta. At 10,000 users, the inference costs were manageable. However, as they scaled to 100,000 users, their **Cost Per Inference** hit $1.80 per user/day, while they were only charging $20/month. They were losing money on every active user. They had to pivot their "Model Strategy" immediately, switching 80% of the simpler queries to a fine-tuned GPT-3.5 Turbo, which reduced their costs by 90% while maintaining the same user satisfaction.
> *PM Lesson: Model selection is a financial decision; you must architect your product for "Unit Economic Success," not just technical performance.*

## Common Pitfalls
- **The "Beta" Trap**: Assuming that because you can afford the API costs for 500 beta users, the business model will work for 5 million users.
- **Ignoring Heavy Users**: Failing to account for the "top 1%" of users who might make 1,000x more AI requests than the average user, destroying your margins.
- **Static Modeling**: Failing to revisit your cost metrics as model providers lower their prices or as more efficient open-source alternatives become available.

## Connected Concepts
- [[01 - Strategy & Vision/Business Models]] — the revenue strategy that must be aligned with your cost structure.
- [[11 - Technical PM/Build vs Buy vs Fine-tune]] — the core execution decision driven by cost metrics.
- [[07 - Metrics & Analytics/AI Metrics]] — the quality metrics that must be balanced against the cost metrics.
