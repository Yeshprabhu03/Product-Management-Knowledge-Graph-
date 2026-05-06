---
tags: [technical, strategy]
type: framework
branch: 11 - Technical PM
related: ["Model Selection Criteria", "Fine-tuning", "Cost Metrics"]
created: 2026-05-05
---

# 🏗️ Build vs Buy vs Fine-tune

## 📖 Definition
Build vs. Buy vs. Fine-tune is the core strategic framework for AI execution. **Buy** involves using a third-party API (like OpenAI) for a general-purpose model. **Fine-tune** involves taking a base model and training it on proprietary data to specialize it for a narrow task. **Build** involves training a custom model from scratch or self-hosting an open-source model (like Llama) on your own infrastructure. For a PM, this is a trade-off between **Speed-to-Market** (Buy), **Strategic Differentiation** (Fine-tune), and **Control/Privacy** (Build).

## 🎯 Why It Matters for PMs
For a Technical PM, this decision defines the product's long-term competitive moat and unit economics. It matters because:
1. **Determines Time-to-Market**: "Buying" an API allows you to launch in days, while "Building" can take months of engineering and data preparation.
2. **Allocates R&D Budget**: Deciding whether to spend your limited engineering time on "Model Research" vs. "Product Features."
3. **Manages Data Risk**: "Building" or "Self-hosting" is often the only way to satisfy strict enterprise data security and privacy requirements.

## 🏗️ How to Apply It
1. **Start with "Buy" (The Prototype)**: Always validate the user value with an off-the-shelf API first. If users don't love the feature with GPT-4, they won't love it with a custom model either.
2. **Evaluate the "Proprietary Data" Advantage**: If you have unique data that no one else has, **Fine-tuning** is the path to creating a model that outperforms generic competitors.
3. **Analyze the Cost-at-Scale**: If your feature is going viral and your API bill is exploding, "Building" (self-hosting an open-source model) can improve your gross margins by 80-90%.
4. **Consider the "Control" Requirement**: If you need a model to never change and to be fully auditable, you must move away from "Black Box" APIs toward a "Build/Self-host" strategy.
5. **Review Every 6 Months**: Technology moves so fast that a feature that required "Building" last year might be a "Buy" commodity today.

## 📦 Real-World Example
> **Notion AI — 2023 to 2024**
> Notion started with a **"Buy" strategy**, using OpenAI's APIs to quickly launch "Notion AI." This allowed them to capture the market demand while GenAI was peaking. However, once they saw the usage patterns and the high API costs, they began a **"Fine-tune/Self-host" strategy** for specific sub-features (like search and summarization) to improve performance on "workspace data" and drastically reduce their variable costs. They used "Buy" to win the market and "Fine-tune" to defend it and improve margins.
> *PM Lesson: The most successful companies move from Buy → Fine-tune → Build as they scale and identify their unique data advantages.*

## ⚠️ Common Pitfalls
- **Building Too Early**: Spending 6 months training a custom model for a feature that turns out to have zero user demand.
- **Ignoring the "Buy" Costs at Scale**: Failing to plan for the "Margin Crisis" that occurs when an API-based feature becomes highly popular.
- **Underestimating the "Build" Maintenance**: Thinking that "Building" a model is a one-time cost, while forgetting the ongoing need for retraining, monitoring, and infrastructure management.

## 🔗 Connected Concepts
- [[11 - Technical PM/Model Selection Criteria]] — the framework used to pick the specific model after the "Build vs Buy" decision is made.
- [[03 - AI & ML Fundamentals/Fine-tuning]] — the technical process that represents the "middle path" of this framework.
- [[07 - Metrics & Analytics/Cost Metrics]] — the primary business driver for moving from "Buy" to "Build."
