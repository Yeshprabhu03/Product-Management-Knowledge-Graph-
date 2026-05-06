---
tags: [ai, metrics]
type: concept
branch: 03 - AI & ML Fundamentals
related: ["AI Metrics", "Online vs Offline Evaluation", "Types of ML Problems"]
created: 2026-05-05
---

# Model Evaluation (Offline)

## Definition
Offline Model Evaluation is the process of testing a machine learning model's performance on a "held-out" dataset before it is deployed to production. This provides a safe, controlled environment to measure how well the model generalizes to new data. Key metrics include **Accuracy** (overall % correct), **Precision** (correctness among positive predictions), **Recall** (ability to find all actual positives), **F1 Score** (a balance of P&R), and **AUC-ROC** (performance across all thresholds). A critical PM task is choosing the right metric based on the "cost of failure" for that specific use case.

## Why It Matters for PMs
For a Product Manager, offline evaluation is the "Release Gate." It matters because:
1. **Determines Launch Readiness**: Providing the evidence needed to decide if a model is "good enough" for real users.
2. **Aligns on Trade-offs**: Forcing the team to decide if it's worse to have a "False Positive" (e.g., flagging a safe email as spam) or a "False Negative" (e.g., letting spam through).
3. **Enables Benchmarking**: Allowing you to compare the new "Challenger" model against the current "Champion" in a statistically rigorous way.

## How to Apply It
1. **Define the Success Metric**: Choose the metric that most closely aligns with the user value (e.g., Recall for medical diagnosis, Precision for search ads).
2. **Curate the Test Set**: Ensure the held-out data is diverse and representative of the actual distribution the model will see in the real world.
3. **Analyze the Confusion Matrix**: Look beyond the single accuracy number to see where the model is specifically failing (False Positives vs. False Negatives).
4. **Segment the Evaluation**: Test the model on different sub-groups (e.g., by geography or user type) to identify potential bias or performance gaps.
5. **Set the "Launch Threshold"**: Establish a minimum performance level that must be hit before the model can move to a "Canary" or "Shadow" deployment.

## Real-World Example
> **Stripe Fraud Detection — 2020**
> For a fraud detection system, **Recall** is often the primary metric. If Stripe misses a single fraudulent $10,000 transaction, the cost is massive. However, they must balance this with **Precision**, because flagging too many legitimate transactions as "fraud" would frustrate thousands of honest customers. During offline evaluation, Stripe's PMs must carefully select a "threshold" that maximizes the detection of fraud (Recall) while keeping the rate of "False Alarms" (Precision) at an acceptable level for business health.
> *PM Lesson: Accuracy is a vanity metric in ML; you must understand the specific business cost of being wrong in different ways.*

## Common Pitfalls
- **Using Accuracy for Imbalanced Data**: If 99% of your data is "Safe" and 1% is "Fraud," a model that always says "Safe" will have 99% accuracy but be 0% useful.
- **Data Leakage**: Accidentally including information in the training set that would not be available during real-world inference, leading to "inflated" offline scores.
- **Ignoring the Business Context**: Optimizing for a technical metric (like F1) without considering if that metric actually correlates with a better user experience or higher revenue.

## Connected Concepts
- [[07 - Metrics & Analytics/AI Metrics]] — the product-level metrics that these technical model metrics should drive.
- [[07 - Metrics & Analytics/Online vs Offline Evaluation]] — the critical comparison between "lab" performance and "real-world" performance.
- [[03 - AI & ML Fundamentals/Types of ML Problems]] — how the problem type determines which evaluation metrics are relevant.
