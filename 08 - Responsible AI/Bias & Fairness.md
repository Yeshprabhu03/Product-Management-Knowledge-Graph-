---
tags: [responsible-ai, risk]
type: concept
branch: 08 - Responsible AI
related: ["Data Quality", "Transparency to Users", "Bias & Fairness"]
created: 2026-05-05
---

# Bias & Fairness

## Definition
Bias in AI occurs when a machine learning model produces results that are systematically prejudiced against certain groups of people, often due to historical inequities in the training data or flaws in the algorithm's design. **Fairness** is the practice of identifying, measuring, and mitigating these biases to ensure that the model's outcomes are equitable across all demographic groups (e.g., race, gender, age). Key concepts include **Group Fairness** (equal outcomes for groups) and **Individual Fairness** (similar individuals treated similarly).

## Why It Matters for PMs
For a Product Manager, managing bias is a critical part of "Product Excellence" because:
1. **Prevents User Harm**: Ensuring that the product doesn't exclude or unfairly penalize marginalized groups (e.g., in hiring, lending, or healthcare).
2. **Protects Brand Reputation**: Avoiding the massive PR crises and "Trust Debt" that occur when an AI is caught being biased.
3. **Ensures Regulatory Compliance**: Meeting the requirements of emerging laws like the EU AI Act, which mandates bias testing for high-risk systems.

## How to Apply It
1. **Audit the Training Data**: Specifically check if your dataset under-represents certain groups or contains historical labels that reflect past prejudices.
2. **Select Fairness Metrics**: Choose the metrics that matter most for your use case (e.g., **Disparate Impact**, **Equal Opportunity**, or **Demographic Parity**).
3. **Perform Segmented Evaluation**: Test your model's performance (Precision/Recall) separately for every major demographic group to identify "performance gaps."
4. **Implement Mitigation Techniques**: Work with ML engineering to apply "Pre-processing" (balancing the data), "In-processing" (adding fairness constraints to the model), or "Post-processing" (adjusting the outputs).
5. **Establish a "Fairness Council"**: Create a cross-functional group (Legal, Ethics, Product, Eng) to review high-stakes AI features before launch.

## Real-World Example
> **Apple Card's Credit Limit Controversy — 2019**
> When Apple Card launched, users reported that husbands were receiving significantly higher credit limits than their wives, even when they had similar financial profiles. While the algorithm didn't explicitly use "gender" as a variable, it was likely using "proxy" variables that were biased. This led to a massive PR crisis and a formal investigation by the New York Department of Financial Services. It served as a wake-up call that "not including gender" is not enough to prevent "gender bias" in a complex model.
> *PM Lesson: Bias is "silent" and "sneaky"; you must proactively hunt for it through segmented testing rather than assuming your model is "neutral."*

## Common Pitfalls
- **"Fairness through Blindness"**: Thinking that by removing a variable (like race) from the data, the model will be unbiased. Models often find "proxy" variables (like zip code) that recreate the same bias.
- **Optimizing for a Single Metric**: Failing to realize that different fairness metrics are often mathematically incompatible; you must choose the one that aligns with your specific ethical goal.
- **Ignoring the "Socio-technical" Context**: Focusing only on the math while missing the fact that the entire "system" (the human + the AI) might be biased in its implementation.

## Connected Concepts
- [[04 - Data Strategy/Data Quality]] — the primary source of bias in AI systems.
- [[08 - Responsible AI/Transparency to Users]] — the requirement to be honest about model limitations and bias risks.
- [[08 - Responsible AI/Fairness Metrics]] — the specific technical scores used to measure bias.
