---
tags: [execution, technical, risk]
type: concept
branch: 06 - Execution & Delivery
related: ["Model Drift & Degradation", "Data Quality", "Release Management"]
created: 2026-05-05
---

#Technical Debt in AI

##Definition
The accumulation of hidden costs in an AI system that arise from the unique properties of machine learning. It is categorized into four main types: **Model Debt** (using outdated architectures), **Data Debt** (stale training data), **Annotation Debt** (evolving label definitions), and **Monitoring Debt** (lack of visibility into production performance).

##Why It Matters for PMs
AI technical debt is more dangerous than standard code debt because it "fails silently." A model won't crash when it becomes stale; it will simply start giving lower-quality answers. PMs must prioritize "Maintenance Sprints" to avoid a catastrophic loss of product value.

##How to Apply It
1. Audit Model Freshness: Regularly check if your model's performance on current real-world data matches its training performance.
2. Track Label Consistency: Ensure that if you change how you label data today, your historical data is also updated or re-evaluated.
3. Automate Monitoring: Invest in "Alerting" for when model confidence or accuracy drops below a certain threshold in production.
4. Plan for Model Sunset: Define when a model is "too old" and must be replaced by a newer architecture.

##Real-World Example
> **Travel Tech Company — 2020**
> A major travel recommendation engine was built on models trained on years of historical data. When COVID-19 hit, user behavior changed overnight. Because the company had **Data Debt** (they relied on a stale, 2-year-old training set), the model continued to recommend international flights and luxury cruises throughout 2020. This led to a massive drop in conversion and significant brand damage as users felt the product was "out of touch."
> *PM Lesson: In AI, the world moves faster than your training set; data debt is a business risk, not just a technical one.*

##Common Pitfalls
- Assuming that once a model is "Done" it will stay accurate forever.
- Building custom models for everything instead of using "Buy" solutions that are maintained by others.
- Failing to document the "Data Lineage" (where the data came from and how it was processed).

##Connected Concepts
- [[03 - AI & ML Fundamentals/Model Drift & Degradation]] — is the most common symptom of technical debt in AI
- [[04 - Data Strategy/Data Quality]] — is the primary prevention against "Data Debt"
- [[06 - Execution & Delivery/Release Management]] — provides the framework for deploying "fixes" to AI debt
