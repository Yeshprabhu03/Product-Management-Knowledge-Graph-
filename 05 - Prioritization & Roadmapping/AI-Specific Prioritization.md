---
tags: [prioritization, ai]
type: concept
branch: 05 - Prioritization & Roadmapping
related: ["Trade-off Frameworks", "Build vs Buy vs Fine-tune", "Model Evaluation (Offline)"]
created: 2026-05-05
---

# 🤖 AI-Specific Prioritization

## 📖 Definition
AI-Specific Prioritization is the practice of adding AI-specific variables to traditional prioritization frameworks. Because AI features are probabilistic and research-heavy, PMs must evaluate factors like **Feasibility** (do we have the data?), **Accuracy Thresholds** (what's the minimum performance needed to be useful?), and **Cold Start Risks** (how much data is needed before the feature works?). It also involves the "Build vs. Buy vs. Fine-tune" decision, as the path chosen significantly impacts the timeline and resource requirements.

## 🎯 Why It Matters for PMs
For an AI PM, standard prioritization isn't enough because:
1. **Manages High Uncertainty**: ML projects have a higher chance of "failure" (not reaching accuracy targets) than traditional software projects.
2. **Considers Data as a Prerequisite**: A high-value idea is useless if the team doesn't have the "raw material" (data) to train a model for it.
3. **Balances Accuracy vs. Utility**: Helping the team decide whether to spend 3 months gaining 2% more accuracy or shipping a "good enough" version today.

## 🏗️ How to Apply It
1. **Assess Data Availability**: For every feature idea, ask: "Do we already have the data, or will we need to spend months collecting and labeling it?"
2. **Define the "Utility Threshold"**: Determine the minimum accuracy or performance level below which the feature provides zero or negative value to the user.
3. **Evaluate the "Cost of Failure"**: Prioritize low-risk AI features (e.g., recommendations) over high-risk ones (e.g., medical advice) if accuracy is still uncertain.
4. **Factor in "Human-in-the-loop" Requirements**: Consider if a feature will require expensive manual review, which adds ongoing operational costs.
5. **Use "Research Spikes"**: Prioritize 1-2 week engineering "spikes" to test feasibility before committing a full quarter to an AI initiative.

## 📦 Real-World Example
> **LegalTech Startup — 2023**
> A PM at a legal tech company had to prioritize two features: "Full Contract Generation" (High Value, High Risk) and "Contract Clause Highlighting" (Medium Value, Low Risk). Research showed that users needed 99% accuracy for generation, but the model only hit 85%. The PM deprioritized generation and focused on **Clause Highlighting**, which could be 100% accurate using a simpler, rules-based AI approach. This delivered value immediately while the research team spent the next 6 months improving the generation model in the background.
> *PM Lesson: In AI, the most "exciting" feature is often the wrong one to prioritize if your model hasn't yet hit the necessary utility threshold.*

## ⚠️ Common Pitfalls
- **Ignoring the Cold Start Problem**: Prioritizing a feature that requires a massive amount of user data before it becomes useful, without a plan for how to get that initial data.
- **Accuracy Obsession**: Spending too much time chasing "perfect" accuracy when a "good enough" model with a strong UI fallback would satisfy users.
- **Underestimating Annotation Costs**: Forgetting that a "High Feasibility" model might still require $50K and 3 months of manual labeling to reach its potential.

## 🔗 Connected Concepts
- [[05 - Prioritization & Roadmapping/Trade-off Frameworks]] — the general logic used to compare AI and non-AI initiatives.
- [[11 - Technical PM/Build vs Buy vs Fine-tune]] — the execution decision that must be prioritized based on cost and time.
- [[03 - AI & ML Fundamentals/Model Evaluation (Offline)]] — the technical metrics that define whether an AI feature has hit its priority threshold.
