---
tags: [leadership, technical]
type: concept
branch: 12 - Leadership & Stakeholders
related: ["PM-Engineering Collaboration", "Managing ML Models as Products", "Model Evaluation (Offline)"]
created: 2026-05-05
---

# 🤖 Working with ML Engineers

## 📖 Definition
Working with ML Engineers refers to the specialized collaboration required to build, deploy, and maintain machine learning models. Unlike traditional software engineering, where logic is "deterministic" (If X, then Y), ML engineering is "probabilistic" and research-intensive. A PM's role is to bridge the gap between "Mathematical Excellence" and "Product Value," ensuring that the engineers are optimizing for the metrics that actually matter to users and the business.

## 🎯 Why It Matters for PMs
For an AI Product Manager, the relationship with ML engineers is the "Core Engine" of the product. It matters because:
1. **Navigates Research Uncertainty**: Helping the team decide when a model is "good enough" for production vs. when more research is needed.
2. **Aligns Metrics**: Ensuring the technical optimization (e.g., minimizing RMSE) actually leads to a better user experience (e.g., better price predictions).
3. **Manages "The Wall"**: Helping engineers understand that the model must eventually work within the constraints of real-world latency, cost, and user trust.

## 🏗️ How to Apply It
1. **Define the "Objective Function" Together**: Ensure you both agree on what the model should be "trying to do" (e.g., maximize clicks vs. maximize long-term retention).
2. **Translate Product Requirements to Technical Constraints**: Instead of saying "make it fast," say "it must have a P99 latency of <200ms to work in our real-time UI."
3. **Respect the "Experimentation Cycle"**: Understand that ML engineers need time for "Training Runs" and "Hyperparameter Tuning" which can't always be perfectly scheduled in a 2-week sprint.
4. **Build a Shared "Golden Set"**: Collaborate on the 1,000 "Perfect Examples" that the model must get right before it can be considered a success.
5. **Ask for "Confidence Intervals"**: Instead of asking "Is it right?", ask "How sure is the model of this result, and what are the known failure modes?"

## 📦 Real-World Example
> **The "Accuracy Trap" — 2022**
> An ML team at a travel startup spent 4 months increasing a model's accuracy from 91% to 93%. While technically impressive, the PM realized that the 2% gain had zero impact on the user's booking rate. The PM shifted the collaboration toward **Inference Speed**. By working together to reduce latency from 2 seconds to 400ms, they saw a 15% lift in conversion, proving that for this specific task, "Speed" was more valuable than "Perfection."
> *PM Lesson: An ML engineer's job is to optimize the model; your job is to tell them which variable is worth optimizing for the user.*

## ⚠️ Common Pitfalls
- **Treating ML as "Magic"**: Expecting engineers to solve a problem without providing the necessary "Ground Truth" data or a clear definition of success.
- **The "Silo" Effect**: Letting the ML team work in isolation for 6 months without regular check-ins on how the "Model" fits into the "UX."
- **Focusing on "Accuracy" only**: Ignoring the "Cost-per-query" or "Latency" until it's too late to fix the architecture for production.

## 🔗 Connected Concepts
- [[11 - Technical PM/PM-Engineering Collaboration]] — the broader context of technical partnership.
- [[11 - Technical PM/Managing ML Models as Products]] — the shared goal of this collaboration.
- [[03 - AI & ML Fundamentals/Model Evaluation (Offline)]] — the technical metrics that drive the daily work of ML engineers.
