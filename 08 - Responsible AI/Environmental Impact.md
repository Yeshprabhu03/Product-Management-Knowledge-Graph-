---
tags: [responsible-ai, sustainability]
type: concept
branch: 08 - Responsible AI
related: ["Cost Metrics", "Build vs Buy vs Fine-tune", "Inference & Latency"]
created: 2026-05-05
---

# 🌍 Environmental Impact of AI

## 📖 Definition
The Environmental Impact of AI refers to the ecological footprint of machine learning systems, primarily measured in carbon emissions (CO2e) and water consumption. This impact occurs in two major stages: **Training** (the one-time, massive energy cost to build a model) and **Inference** (the recurring, marginal energy cost every time a user makes a query). While training a large model like GPT-3 can emit ~550 tonnes of CO2, the aggregate cost of inference for millions of daily users can quickly surpass training costs within a year of operation.

## 🎯 Why It Matters
For a PM, tracking environmental impact is no longer just a "CSR" (Corporate Social Responsibility) activity; it is a core technical efficiency problem:
1. **Financial Alignment**: In AI, "Carbon Cost" and "Compute Cost" are directly correlated. Optimizing for sustainability also optimizes your **Gross Margins**.
2. **Regulatory Pressure**: Emerging laws (like the EU AI Act) and corporate reporting standards are starting to mandate transparency in AI energy consumption.
3. **Consumer Trust**: A growing segment of "Eco-conscious" users and developers prefer platforms that optimize for efficiency.

## 🏗️ How to Apply It
1. **Model Distillation**: Train a smaller "student" model to replicate the performance of a large "teacher" model for inference.
2. **Quantization**: Reduce the precision of model weights (e.g., from FP32 to INT8) to lower the compute required for each token.
3. **Regional Compute**: Schedule heavy training jobs in data centers powered by 100% renewable energy or during "off-peak" hours when the grid is cleanest.

## 📦 Real-World Example
> **Google's PaLM 2 Efficiency Focus — 2023**
> When developing PaLM 2, Google engineers treated **Environmental Efficiency** as a "Tier 1" metric alongside accuracy. By using a more efficient training objective and a smaller, more optimized architecture, PaLM 2 outperformed its predecessor (PaLM 1) while being significantly smaller and cheaper to run. Google was also the first major lab to publish "Energy-per-query" metrics in their technical report, signaling that efficiency is a competitive product feature.
> *PM Lesson: Inference cost and carbon cost are essentially the same problem. Making your product "greener" is functionally equivalent to making it "more profitable."*

## ⚠️ Common Pitfalls
- **"Bigger is Better" Fallacy**: Defaulting to the largest available frontier model for simple tasks (like summarization) that a model 1/10th the size could handle.
- **Ignoring the "Inference Tail"**: Focusing only on the training carbon cost while ignoring the fact that your 100M daily users are driving a massive, silent carbon footprint.
- **Lack of Measurement**: Having no visibility into the "Watt-hours per request" in your engineering or product dashboards.

## 🔗 Connected Concepts
- [[07 - Metrics & Analytics/Cost Metrics]] — the financial side of the environmental footprint.
- [[11 - Technical PM/Build vs Buy vs Fine-tune]] — the strategic choice that determines your long-term energy consumption.
- [[03 - AI & ML Fundamentals/Inference & Latency]] — the technical performance metrics that drive energy usage.
