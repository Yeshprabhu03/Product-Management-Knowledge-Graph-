---
tags: [data, technical]
type: concept
branch: 04 - Data Strategy
related: ["Data as a Product Asset", "Data Quality", "Model Drift & Degradation"]
created: 2026-05-05
---

# Data Pipelines

## Definition
Data Pipelines are the automated systems that extract data from various sources, transform it into a usable format, and load it into a destination (like a data warehouse, feature store, or model training environment). In ML, pipelines are critical for ensuring that the data used for **Training** is identical in structure and processing to the data used for **Inference** (preventing "Training-Serving Skew"). Modern pipelines often include "Feature Stores" to centralize and version the mathematical inputs used by models across different teams.

## Why It Matters for PMs
For a Product Manager, data pipelines are the "unseen" infrastructure that determines:
1. **Model Reliability**: Ensuring the model always has the fresh, accurate data it needs to make high-quality predictions.
2. **Speed to Market**: A well-designed pipeline allows the team to retrain and deploy new models in hours rather than weeks.
3. **Data Integrity**: Preventing "silent failures" where a model gives wrong answers because its data source was broken or delayed.

## How to Apply It
1. **Map the Data Lineage**: Understand where every piece of data in your model comes from and what transformations happen to it along the way.
2. **Ensure Training-Serving Symmetry**: Work with engineering to guarantee that the code used to process data in the "lab" is the exact same code used in "production."
3. **Implement Feature Versioning**: Use a feature store or versioning system so you can easily "roll back" to a previous data state if a new model fails.
4. **Set Up Data Monitoring**: Create alerts for pipeline "freshness" (is data arriving on time?) and "validity" (is the data format what we expected?).
5. **Optimize for Latency**: For real-time features, ensure the pipeline can process and serve data fast enough to stay within your latency budget.

## Real-World Example
> **Uber's Michelangelo ML Platform — 2017**
> Before building Michelangelo, Uber's teams struggled with "Training-Serving Skew." Data scientists would build models using complex transformations in Python, but engineers would have to rewrite that logic in Java for production. This led to models failing because they were seeing slightly different data in the wild than in the lab. Michelangelo introduced a **Centralized Feature Store** that ensured both training and inference used the identical, pre-calculated features, reducing model deployment failures by over 70%.
> *PM Lesson: A model is only as reliable as the pipeline that feeds it; consistent data processing is more important than model complexity.*

## Common Pitfalls
- **Training-Serving Skew**: The #1 cause of ML production failures; using different data processing logic in development vs. production.
- **Ignoring Data Lineage**: Having a pipeline where nobody knows exactly where the data came from, making it impossible to debug bias or errors.
- **Batching When You Need Real-Time**: Using an ETL pipeline that updates daily for a feature (like a fraud detector) that needs second-by-second fresh data.

## Connected Concepts
- [[04 - Data Strategy/Data as a Product Asset]] — the raw material that the pipelines process.
- [[04 - Data Strategy/Data Quality]] — the standards that the pipeline must enforce at every step.
- [[03 - AI & ML Fundamentals/Model Drift & Degradation]] — the problem that pipelines help solve through automated retraining.
