---
tags: [metrics, ai]
type: metric
branch: 07 - Metrics & Analytics
related: ["Model Evaluation (Offline)", "User Trust Metrics", "Cost Metrics"]
created: 2026-05-05
---

# AI Metrics

## Definition
AI Metrics are the product-level indicators used to measure the performance, impact, and health of machine learning features. While data scientists focus on "Technical Metrics" (like Precision, Recall, and F1), AI PMs must translate these into **"Business/User Metrics"**. These include: **Automation Rate** (% of tasks handled without human input), **User Acceptance Rate** (% of AI suggestions that are accepted), **Override/Correction Rate** (% of AI outputs that users manually edit), and **Hallucination Rate** (% of outputs flagged as factually incorrect).

## Why It Matters for PMs
For an AI Product Manager, these metrics are essential to:
1. **Measure Real-World Value**: Determining if the AI is actually saving users time or if they are spending more time "fixing" its mistakes.
2. **Align Technical Goals with Business Outcomes**: Helping the engineering team understand that "99% accuracy" is meaningless if the 1% failure occurs in the most critical user path.
3. **Monitor Silent Degradation**: Identifying when a model's quality is dropping in the "wild" (Online) compared to how it performed in the "lab" (Offline).

## How to Apply It
1. **Select the Primary "Value" Metric**: Identify the one metric that best captures the AI's utility (e.g., "Resolution Rate" for a chatbot).
2. **Instrument User Corrections**: Ensure every "undo," "rewrite," or "delete" of an AI output is captured as a "negative" signal in your metrics.
3. **Track "Confidence Calibration"**: Measure how often the model is "confident" but "wrong," as this is the biggest driver of user distrust.
4. **Monitor Cost vs. Performance**: Track the **Cost Per Inference** alongside quality metrics to ensure the feature remains profitable as it scales.
5. **Segment by Model Version**: Use "Champion-Challenger" metrics to compare the live performance of a new model version against the current production model.

## Real-World Example
> **Intercom's Fin AI Bot — 2023**
> Intercom's primary AI metric for their "Fin" support bot is the **Resolution Rate**. This is defined as the percentage of customer queries that the bot successfully answers without the user ever needing to speak to a human agent. While they also track technical accuracy, Resolution Rate is what their customers (business owners) actually care about and pay for. It drives the product's pricing model directly and serves as the team's North Star.
> *PM Lesson: Your primary AI metric should be a business outcome, not a mathematical score; measure the "work" the AI is doing, not just its accuracy.*

## Common Pitfalls
- **Reporting Only Technical Metrics**: Giving leadership an "F1 Score" instead of explaining how many hours of user time the AI saved.
- **Ignoring the Correction Rate**: Thinking a high "Acceptance Rate" is good, without realizing that users are only accepting the AI's output because they've given up on trying to fix it.
- **Optimizing the Wrong Metric**: Increasing "Resolution Rate" by making the bot "ignore" difficult questions, which improves the metric but destroys the user experience.

## Connected Concepts
- [[03 - AI & ML Fundamentals/Model Evaluation (Offline)]] — the technical metrics that these product metrics should be built upon.
- [[07 - Metrics & Analytics/User Trust Metrics]] — the psychological impact of AI performance on the user base.
- [[07 - Metrics & Analytics/Cost Metrics]] — the financial side of running high-performance AI features.
