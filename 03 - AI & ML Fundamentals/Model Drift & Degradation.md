---
tags: [ai, operations]
type: concept
branch: 03 - AI & ML Fundamentals
related: ["Feedback Loops", "AI Metrics", "Technical Debt in AI"]
created: 2026-05-05
---

# 📉 Model Drift & Degradation

## 📖 Definition
**Model Drift** is the phenomenon where a machine learning model's performance decreases over time because the real-world environment it operates in has changed since it was trained. It is generally categorized into **Data Drift** (the distribution of the input data changes) and **Concept Drift** (the relationship between the input and the target output changes). Unlike software bugs, model degradation is "silent" — the system won't crash, but it will start providing lower-quality, less accurate results, leading to a "stealth" loss of product value.

## 🎯 Why It Matters for PMs
For a Product Manager, monitoring drift is essential for:
1. **Maintaining Product Quality**: Ensuring that the "Aha Moment" your model provided at launch doesn't slowly disappear as the world evolves.
2. **Managing Risk**: Identifying when a model (like a fraud detector or pricing engine) has become dangerous or unprofitable due to changing patterns.
3. **Informing Retraining Schedules**: Moving away from "guessing" when to retrain a model to a data-driven approach based on actual performance decay.

## 🏗️ How to Apply It
1. **Define a Performance Baseline**: Establish the "Golden Set" of data and metrics (e.g., Accuracy, F1) that represents success at launch.
2. **Implement Input Monitoring**: Use statistical tests (like KL Divergence) to detect if the "distribution" of incoming user data is shifting away from the training set.
3. **Track "Proxy" Quality Metrics**: If you cannot get "ground truth" labels quickly, track user behavior (e.g., "acceptance rate" or "override rate") as a leading indicator of drift.
4. **Establish Drift Thresholds**: Set clear alerts for when performance drops below a certain level, triggering an investigation or an automatic retraining pipeline.
5. **Develop a Retraining Strategy**: Decide how often the model needs fresh data — whether it's daily (for news/stock trends) or quarterly (for general language tasks).

## 📦 Real-World Example
> **E-commerce Demand Forecasting — 2020**
> Many e-commerce companies had sophisticated ML models to predict inventory needs based on years of historical data. When COVID-19 hit, **Concept Drift** occurred overnight. The relationship between "past behavior" and "future needs" was completely broken. Models that were trained on 2019 data began predicting massive demand for luggage and office wear, while failing to predict the surge in home-office gear. The PMs who caught this drift through input monitoring were able to pivot to "rules-based" systems or rapid retraining much faster than those who relied on monthly sales reports.
> *PM Lesson: In a changing world, your model's biggest enemy is its own historical training data.*

## ⚠️ Common Pitfalls
- **No Monitoring Post-Deployment**: Assuming that because a model was 95% accurate in the "lab" (offline), it will stay that way forever in the "wild" (online).
- **Scheduled-Only Retraining**: Retraining every month regardless of whether it's needed, which is expensive and doesn't protect you from sudden, rapid drift.
- **Ignoring "Silent" Failures**: Only investigating when the system crashes, while missing the fact that the model's "confidence" is slowly dropping across all users.

## 🔗 Connected Concepts
- [[04 - Data Strategy/Feedback Loops]] — the systems used to capture new data for retraining after drift is detected.
- [[07 - Metrics & Analytics/AI Metrics]] — the product-level KPIs that often show the first business signs of model degradation.
- [[06 - Execution & Delivery/Technical Debt in AI]] — the long-term cost of ignoring model maintenance and monitoring.
