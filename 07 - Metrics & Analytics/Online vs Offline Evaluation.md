---
tags: [metrics, ai]
type: concept
branch: 07 - Metrics & Analytics
related: ["Experimentation", "AI Metrics", "Release Management"]
created: 2026-05-05
---

# 🧪 Online vs Offline Evaluation

## 📖 Definition
In AI development, **Offline Evaluation** is the process of testing a model on a "held-out" dataset in a controlled environment before it ever sees a real user. **Online Evaluation** is the measurement of the model's actual impact on user behavior and product metrics after it has been deployed to production. The gap between these two is the "Accuracy-Value Gap." A model can have 95% "offline" accuracy but fail miserably "online" because the real-world data is different or because users react to the AI's output in unexpected ways.

## 🎯 Why It Matters for PMs
For an AI Product Manager, managing this gap is critical because:
1. **Identifies Overfitting**: Proving whether the model's high technical scores are real or just a result of memorizing the training data.
2. **Measures User Sentiment**: Technical metrics can't tell you if a user found a suggestion "annoying" or "creepy," only online behavior can.
3. **Informs Model Selection**: Helping the team decide which "Challenger" model to promote to "Champion" based on actual business outcomes, not just benchmark scores.

## 🏗️ How to Apply It
1. **Set Baseline Offline Metrics**: Use precision, recall, and F1 on a representative test set to filter out low-quality models early.
2. **Run in "Shadow Mode"**: Deploy the new model to production and let it make "invisible" predictions alongside the live model to compare their outputs on real-world data.
3. **Implement "Champion-Challenger" (A/B) Tests**: Roll out the new model to a small % of users and measure the impact on core product health metrics (e.g., conversion, retention).
4. **Audit the "Gaps"**: If a model performs well offline but poorly online, investigate if the training data is "stale" or if there is a technical skew in the data pipeline.
5. **Iterate the Evaluation Set**: Use the "failures" from online evaluation to update your offline test set, making it more challenging and representative for the next round.

## 📦 Real-World Example
> **Netflix Recommendation Engine — 2018**
> A new recommendation model at Netflix showed a 92% "Offline" accuracy based on historical watch data. However, when tested "Online" in an A/B test, it resulted in a 10% *decrease* in click-through rate. The investigation revealed that the model was over-optimized on "past behavior" and was failing to suggest new, diverse content that users actually wanted. The "Online" failure proved that accuracy on the past is not the same as value in the future, forcing a complete redesign of the objective function.
> *PM Lesson: The "lab" (Offline) only tells you if the model works; the "wild" (Online) tells you if the model is valuable.*

## ⚠️ Common Pitfalls
- **Trusting the Lab Too Much**: Launching a model to all users based only on a high F1 score, without a "Shadow" or "Canary" phase to see how it handles messy real-world data.
- **Ignoring the Pipeline Skew**: Failing to realize that the data the model sees in production is formatted differently than the data it was trained on.
- **No Path Back to the Lab**: Failing to capture the "online" failures as new examples for the "offline" test set, which prevents the system from improving.

## 🔗 Connected Concepts
- [[07 - Metrics & Analytics/Experimentation]] — the framework used to conduct online evaluation.
- [[07 - Metrics & Analytics/AI Metrics]] — the specific product indicators measured during online evaluation.
- [[06 - Execution & Delivery/Release Management]] — the specialized process of moving a model from offline to online.
