---
tags: [data, operations]
type: concept
branch: 04 - Data Strategy
related: ["Data Quality", "Feedback Loops", "Model Evaluation (Offline)"]
created: 2026-05-05
---

# 🏷️ Data Collection & Labeling

## 📖 Definition
Data Collection is the process of gathering the raw inputs needed for a product, while **Labeling** (or Annotation) is the process of adding "Ground Truth" tags to that data so a model can learn from it. Signals can be **Implicit** (actions like clicks, dwell time, and scrolls) or **Explicit** (user actions like star ratings, "thumbs up," or manual corrections). Labeling can be performed by internal teams, crowdsourced workers (e.g., Amazon MTurk), or increasingly by "AI-assisted" tools that use a large model to label data for a smaller one.

## 🎯 Why It Matters for PMs
For a Product Manager, the labeling strategy is a core part of the "Build" plan because:
1. **Determines Model Quality**: The accuracy of your "labels" sets the theoretical maximum accuracy of your model.
2. **Influences Cost and Speed**: Manual labeling is the slowest and most expensive part of the AI development lifecycle.
3. **Captures the "Aha Moment"**: Identifying which implicit user signals actually correlate with long-term retention and value.

## 🏗️ How to Apply It
1. **Instrument Implicit Signals First**: Capture every "Correction" or "Ignore" action in the UI, as these are high-signal, "free" labels from your users.
2. **Draft Clear Labeling Guidelines**: If using human annotators, provide a detailed "Rubric" with examples to ensure consistency (Inter-annotator agreement).
3. **Balance Quantity vs. Quality**: Determine if you need 1,000 "perfect" labels from experts or 100,000 "good enough" labels from a crowd.
4. **Implement "Active Learning"**: Use the model to identify the most "uncertain" data points and prioritize those for human labeling to maximize training efficiency.
5. **Measure Labeler Consistency**: Use metrics like **Cohen's Kappa** to ensure that different human labelers are agreeing on the same data points.

## 📦 Real-World Example
> **Netflix — 2015**
> Netflix famously shifted its data strategy from **Explicit** signals (5-star ratings) to **Implicit** signals (play time, completion rate, and browsing history). They found that what users *said* they liked (high-brow documentaries they never watched) was a poor predictor of what they actually *did* (binge-watching sitcoms). By prioritizing implicit "labels" from actual behavior, they were able to build a recommendation engine that significantly increased user retention and "percentage match" accuracy.
> *PM Lesson: Implicit behavioral data is almost always a more honest "label" of user value than explicit ratings or surveys.*

## ⚠️ Common Pitfalls
- **Inconsistent Guidelines**: Giving vague instructions to labelers (e.g., "is this content good?"), which leads to a noisy dataset that confuses the model.
- **Survivorship Bias**: Only collecting data from users who stayed with the product, while missing the "labels" from the users who churned because the product failed them.
- **Underestimating the "Human-in-the-loop" Cost**: Forgetting to budget for the ongoing cost of manual labeling as you expand into new domains or languages.

## 🔗 Connected Concepts
- [[04 - Data Strategy/Data Quality]] — ensuring the labels and collected data are accurate and consistent.
- [[04 - Data Strategy/Feedback Loops]] — how the captured user labels flow back into model retraining.
- [[03 - AI & ML Fundamentals/Model Evaluation (Offline)]] — using the "Ground Truth" labels to test model performance.
