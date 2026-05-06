---
tags: [ai, technical]
type: concept
branch: 03 - AI & ML Fundamentals
related: ["Model Evaluation (Offline)", "AI-Specific Prioritization", "Build vs Buy vs Fine-tune"]
created: 2026-05-05
---

# Types of ML Problems

## Definition
Machine Learning problems are categorized based on the nature of the task and the type of data involved. The primary types are: **Classification** (assigning items to discrete categories), **Regression** (predicting a continuous numerical value), **Ranking** (ordering items by relevance), **Clustering** (grouping similar items without labels), **Generation** (creating new content), and **Anomaly Detection** (identifying outliers). Choosing the correct problem type is a foundational PM task, as it dictates the model architecture, data requirements, and evaluation metrics.

## Why It Matters for PMs
For a Product Manager, identifying the ML problem type is crucial because:
1. **Determines Data Strategy**: Different problems require different types and volumes of labeled data (e.g., classification needs many labeled examples).
2. **Defines Success Metrics**: Success for a ranking problem (e.g., NDCG) is measured differently than for a regression problem (e.g., RMSE).
3. **Optimizes Resource Allocation**: Prevents using an expensive, complex model (like generation) for a problem that could be solved with a simpler one (like classification).

## How to Apply It
1. **Define the User Outcome**: Start with the specific value you want to provide (e.g., "help users find the right song").
2. **Analyze the Data Inputs**: What information do you have available? Is it labeled, unlabeled, numerical, or categorical?
3. **Map Outcome to ML Type**:
    - Assigning labels? → **Classification**
    - Predicting a score or price? → **Regression**
    - Ordering a list? → **Ranking**
    - Discovering hidden patterns? → **Clustering**
4. **Select Evaluation Metrics**: Match the metrics to the problem type (e.g., Precision/Recall for classification).
5. **Iterate with Engineering**: Discuss the feasibility and trade-offs of the chosen problem type with your ML engineers.

## Real-World Example
> **Spotify — 2024**
> Spotify utilizes multiple ML problem types within a single user experience. They use **Ranking** for personalized playlist recommendations (Discover Weekly), **Classification** for explicit content detection, **Generation** for automated podcast transcripts, and **Anomaly Detection** to identify fraudulent Premium accounts or bot activity. By correctly framing each sub-problem, they can apply the most efficient model for each specific task.
> *PM Lesson: Complex product features are often a composition of several different, well-defined ML problem types.*

## Common Pitfalls
- **Overkill with Generation**: Using a Large Language Model to perform a task that could be done faster and cheaper with a simple classifier.
- **Misframing Ranking as Classification**: Trying to predict a "yes/no" for every item instead of ordering them by the probability of being the best match.
- **Ignoring Data Balance**: Building a classifier for a rare event (like fraud) without accounting for the fact that 99.9% of your data is the "non-event" class.

## Connected Concepts
- [[03 - AI & ML Fundamentals/Model Evaluation (Offline)]] — the metrics used to measure success for each problem type.
- [[05 - Prioritization & Roadmapping/AI-Specific Prioritization]] — deciding which ML problems are worth solving first.
- [[11 - Technical PM/Build vs Buy vs Fine-tune]] — the execution decision once the problem type is identified.
