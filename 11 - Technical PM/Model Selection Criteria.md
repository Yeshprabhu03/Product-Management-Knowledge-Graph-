---
tags: [technical, strategy]
type: framework
branch: 11 - Technical PM
related: ["Large Language Models (LLMs)", "Inference & Latency", "Cost Metrics"]
created: 2026-05-05
---

# Model Selection Criteria

## Definition
Model Selection Criteria is the framework used by PMs and Engineers to decide which machine learning model to use for a specific feature. In the era of "Foundation Models," this involves choosing between **Closed-source APIs** (e.g., GPT-4, Gemini, Claude) and **Open-source Models** (e.g., Llama-3, Mistral). The selection is a multi-variable trade-off between **Intelligence** (reasoning capability), **Latency** (speed), **Cost** (per token), **Context Window** (memory), and **Data Privacy** (where the data is processed).

## Why It Matters for PMs
For a Technical PM, model selection is the most impactful "Build" decision because it determines:
1. **The Product's Value Ceiling**: A model that is "too small" will fail at complex reasoning tasks, while one that is "too big" will be too slow for real-time UX.
2. **Unit Economics**: The difference in cost between a "Frontier" model and a "Small" model can be 100x, which determines if the feature is profitable.
3. **Vendor Lock-in**: Choosing an API provider vs. an open-source model impacts your long-term flexibility and control over your technical stack.

## How to Apply It
1. **Benchmark on your "Real" Data**: Don't trust general benchmarks (like MMLU); test 3-5 different models on a "Golden Set" of your actual user prompts and desired outputs.
2. **Define your "Efficiency Frontier"**: Map the models on a chart showing **Cost vs. Quality**. Usually, you want the cheapest model that hits your "Utility Threshold."
3. **Assess Context Window Needs**: If your feature involves summarizing 100-page documents, you must prioritize models with large context windows (100K+ tokens).
4. **Evaluate Data Residency**: If you are in a regulated industry (Finance/Healthcare), "Open-source on your own VPC" might be the only viable choice for privacy.
5. **Plan for "Multi-model" Orchestration**: Use a high-quality model for complex reasoning and a smaller, faster model for simple classification or summarization tasks within the same feature.

## Real-World Example
> **Duolingo — 2023**
> Duolingo uses a **Multi-model Strategy**. For their high-end "Roleplay" and "Explain my Answer" features, they use **GPT-4** because it requires deep, nuanced reasoning in multiple languages. However, for simpler tasks like generating "daily notifications" or "lesson hints," they use smaller, faster, proprietary models or fine-tuned open-source models. This allows them to maximize "Intelligence" where it matters while keeping "Costs" and "Latency" low for the majority of the app experience.
> *PM Lesson: There is no "Best Model"; there is only the "Most Efficient Model" for a specific task.*

## Common Pitfalls
- **Defaulting to the "Hype" Model**: Using the newest, most expensive model for a simple task (like sentiment analysis) that could have been done for 1/100th the cost.
- **Ignoring the Context-to-Cost Ratio**: Forgetting that large context windows become exponentially more expensive; sometimes it's better to use RAG than a 1M token window.
- **Not Testing for "Model Decay"**: Failing to realize that model providers occasionally update their "stable" versions, which can lead to sudden drops in your product's performance.

## Connected Concepts
- [[03 - AI & ML Fundamentals/Large Language Models (LLMs)]] — the category of technology being selected.
- [[07 - Metrics & Analytics/Cost Metrics]] — the primary business constraint on model selection.
- [[03 - AI & ML Fundamentals/Inference & Latency]] — the primary technical constraint on model selection.
