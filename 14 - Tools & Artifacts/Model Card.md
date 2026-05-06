---
tags: [artifact, ai]
type: artifact
branch: 14 - Tools & Artifacts
related: ["Red Team Report", "Datasheet for Datasets", "Bias & Fairness"]
created: 2026-05-05
---

# 📄 Model Card

## 📖 Definition
A Model Card is a standardized, short document providing essential information about a machine learning model. Think of it as a "Nutrition Label" for AI. It typically covers: **Intended Use**, **Out-of-scope uses**, **Training Data description**, **Performance Metrics** across demographic groups, **Known Limitations**, **Ethical Considerations**, and **Contact Information**. Originally proposed by researchers at Google in 2018, it has since become the industry standard for transparent AI documentation.

## 🎯 Why It Matters
For a PM, a model card is not just a "technical spec"—it is a strategic communication tool:
1. **Sales & Procurement**: Enterprise buyers (especially in regulated industries like Finance or Healthcare) now require model cards as part of their vendor security and compliance review.
2. **Internal Alignment**: It ensures that the Sales and Marketing teams don't "over-promise" what the model can do, preventing customer churn and legal exposure.
3. **Safety & Governance**: It serves as the primary "Record of Truth" for the model’s performance and bias, which is essential for compliance with the EU AI Act.

## 🏗️ How to Apply It
1. **Section 1: Model Details**: Name, version, type, and date.
2. **Section 2: Intended Use**: Who should use it? For what tasks?
3. **Section 3: Factors**: What demographic or environmental factors might affect performance?
4. **Section 4: Metrics**: What were the evaluation scores? (Precision, Recall, F1, etc.)
5. **Section 5: Training & Eval Data**: Where did the data come from? Was it balanced?
6. **Section 6: Quantitative Analysis**: Show the performance "Breakdown" by group to highlight any bias.

## 📦 Real-World Example
> **Anthropic's Claude Model Card — 2023**
> Anthropic’s model card for Claude is a benchmark for the industry. Instead of just listing "Accuracy" scores, it explicitly lists **Failure Modes** (e.g., "The model may still hallucinate on obscure historical dates") and **Safety Properties** (e.g., "The model is trained to refuse requests for PII"). Their enterprise sales team cited this transparency as a primary differentiator. Regulated industries chose Anthropic over competitors specifically because the model card provided their internal compliance teams with the "Evidence" they needed to approve the tool in weeks rather than months.
> *PM Lesson: Model cards are a "Sales Tool" as much as a "Safety Tool." Transparency about limitations builds more trust than hiding them.*

## ⚠️ Common Pitfalls
- **"After-the-fact" Documentation**: Writing the model card the day before launch as a "formality," rather than using it as a design doc during development.
- **Treating it as PR**: Omitting known failure modes or "polishing" the metrics to make the model look better than it is in reality.
- **Vague Metrics**: Using "global" accuracy scores while hiding the fact that the model performs poorly on specific, critical sub-groups.

## 🔗 Connected Concepts
- [[14 - Tools & Artifacts/Red Team Report]] — the "Attack" documentation that complements the model card's "Performance" documentation.
- [[14 - Tools & Artifacts/Datasheet for Datasets]] — the documentation for the "Fuel" that created the model.
- [[08 - Responsible AI/Bias & Fairness]] — the core ethical challenge that model cards help to manage.
