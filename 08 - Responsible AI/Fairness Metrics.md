---
tags: [responsible-ai, metrics]
type: metric
branch: 08 - Responsible AI
related: ["Bias & Fairness", "Explainability (XAI)", "Model Evaluation (Offline)"]
created: 2026-05-05
---

# Fairness Metrics

## Definition
Fairness Metrics are the quantitative indicators used to measure how equitably an AI system performs across different demographic groups (e.g., race, gender, age). Because "fairness" is a philosophical concept, engineers have developed several mathematical definitions:
1. **Demographic Parity**: Ensuring that the "Positive Prediction Rate" is the same for all groups (e.g., 20% of men and 20% of women are approved).
2. **Equalized Odds**: Ensuring that the "True Positive Rate" and "False Positive Rate" are the same for all groups (e.g., the model is equally likely to correctly identify a qualified candidate regardless of gender).
3. **Individual Fairness**: Ensuring that "similar individuals" receive "similar outcomes."

## Why It Matters
For a PM, fairness metrics are critical because **these definitions are often mathematically incompatible**. You cannot optimize for all of them at once. Choosing one metric means accepting a degradation in another. This is a **Product Decision**, not a technical one.
1. **Selection Bias**: If you don't measure fairness, your model will naturally inherit the biases of your training data.
2. **Audit Readiness**: These metrics are the primary "Evidence" required to pass compliance audits for high-risk systems under the EU AI Act.

## How to Apply It
1. **Identify the "Protected Attributes"**: Determine which demographic groups are at risk of being marginalized by your model's decisions.
2. **Select the "Target Definition"**: Choose the metric that best aligns with your ethical and product goals (e.g., "Equal Opportunity" for hiring vs. "Accuracy" for medical triage).
3. **Segmented Evaluation**: Run your offline evaluation separately for each group and compare the scores.

## Real-World Example
> **LinkedIn Job Recommendations — 2018**
> LinkedIn noticed that their automated job recommendation engine was showing fewer senior roles to women, even when their profiles were qualified. To fix this, they chose **Equalized Odds** as their primary fairness metric. This meant ensuring that qualified candidates from all demographics had an equal chance of seeing a high-value role. Implementing this required a trade-off: they had to accept a slight decrease in overall "global" accuracy to achieve a more equitable distribution. The result was a 42% reduction in the gender visibility gap for senior roles within 6 months.
> *PM Lesson: There is no "neutral" setting for a model. Every model selection is an ethical choice. Document your chosen metric and the resulting trade-offs explicitly in your model card.*

## Common Pitfalls
- **Applying One Metric Everywhere**: Thinking that "Demographic Parity" is always the answer, even when it might lead to less accurate outcomes for the very people you are trying to help.
- **"Fairness through Blindness"**: Assuming that because you removed "Gender" from the training data, the model is fair. Models often find "proxy" variables (like shopping history) that recreate the same bias.
- **Zero Transparency**: Not disclosing which fairness metric was chosen and why to the stakeholders or users.

## Connected Concepts
- [[08 - Responsible AI/Bias & Fairness]] — the qualitative problem that these metrics aim to quantify.
- [[03 - AI & ML Fundamentals/Model Evaluation (Offline)]] — the broader technical framework these metrics live within.
- [[08 - Responsible AI/EU AI Act]] — the legal framework that mandates these measurements.
