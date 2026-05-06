---
tags: [data, operations]
type: concept
branch: 04 - Data Strategy
related: ["Data Collection & Labeling", "Bias & Fairness", "Data Pipelines"]
created: 2026-05-05
---

# 🧹 Data Quality

## 📖 Definition
Data Quality is the measure of how well a dataset satisfies the requirements for its intended use in a product or model. In AI, "Garbage In, Garbage Out" is the ultimate rule: the performance ceiling of any model is set by the quality of its training data. Data quality is typically measured across four dimensions: **Completeness** (no missing values), **Consistency** (uniform formats), **Accuracy** (reflecting ground truth), and **Timeliness** (freshness). High-quality data ensures that model predictions are reliable, fair, and actionable.

## 🎯 Why It Matters for PMs
For a Product Manager, data quality is a primary risk management task because:
1. **Prevents Silent Failures**: Ensuring the model doesn't start giving "confidently wrong" answers due to corrupted or stale inputs.
2. **Ensures Fairness**: Identifying and correcting biases in the data before they are "baked into" the model's weights.
3. **Optimizes Engineering Time**: Reducing the 80% of time data scientists usually spend "cleaning" data rather than building models.

## 🏗️ How to Apply It
1. **Define Quality Standards**: Establish clear "schemas" and validation rules for all incoming data sources.
2. **Implement Data Profiling**: Regularly run statistical checks to identify outliers, missing values, or unexpected shifts in data distribution.
3. **Audit for Bias**: Specifically check if your data under-represents certain groups or reflects historical prejudices that the model might amplify.
4. **Automate Validation**: Build "Data Quality Checks" into your pipelines that automatically flag or block corrupted data from entering the warehouse.
5. **Establish Data Stewardship**: Assign clear ownership for the health of each major data source, ensuring there is a "point person" for quality issues.

## 📦 Real-World Example
> **Amazon's Hiring AI — 2018**
> Amazon attempted to build an AI to screen resumes, training it on 10 years of historical hiring data. However, because the tech industry had been predominantly male, the historical data was "biased." The model learned to penalize resumes that included the word "women's" (e.g., "women's chess club captain") and favored resumes with aggressive "masculine" verbs. The **Data Quality failure** (lack of representative and fair data) forced Amazon to scrap the project before it was ever deployed.
> *PM Lesson: Data quality is not just about "clean columns"; it is about ensuring your data is a fair and accurate representation of the world you want to build.*

## ⚠️ Common Pitfalls
- **Format vs. Content Bias**: Assuming that because a dataset has no "Null" values, it is "High Quality." Data can be technically perfect but factually wrong or biased.
- **Ignoring the "Long Tail"**: Only checking quality for the "average" user while missing massive data errors for niche segments or edge cases.
- **No Feedback Loop for Corrections**: Having a system where data errors are found by users but never fed back into the source to be fixed.

## 🔗 Connected Concepts
- [[04 - Data Strategy/Data Collection & Labeling]] — the process of creating the "Ground Truth" for quality data.
- [[08 - Responsible AI/Bias & Fairness]] — the ethical dimension of data quality analysis.
- [[04 - Data Strategy/Data Pipelines]] — the infrastructure that must enforce quality standards.
