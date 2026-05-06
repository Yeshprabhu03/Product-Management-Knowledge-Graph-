---
tags: [career, roles, data]
type: concept
branch: 15 - Career
related: ["PM Specializations", "Data Strategy MOC", "Data as a Product Asset"]
created: 2026-05-06
---

# Data PM

## 📖 Definition
A Data PM is an archetype that treats "Data" as the product itself. They manage data platforms, analytics tooling, feature stores, and business intelligence systems. Their "Users" are often internal analysts, data scientists, and other PMs who need high-quality, real-time data to make decisions. The Data PM is responsible for **Data Governance, Quality, Lineage, and Accessibility**.

## 🎯 Why It Matters
In the "AI Era," data is the raw fuel for every model. A Data PM is the gatekeeper of that fuel.
1. **Model Performance**: A model is only as good as the data it's trained on. The Data PM ensures the training set is representative and clean.
2. **Institutional Truth**: They ensure that when two different departments look at "Revenue," they see the same number.
3. **Privacy by Design**: They manage the complex trade-offs between "Data Utility" and "User Privacy" (GDPR/CCPA).

## 🏗️ How to Apply It
1. **Data Taxonomy**: Define a standardized "Language" for events and properties across the entire company.
2. **Quality Monitoring**: Set up automated "Data SLAs" (Service Level Agreements) that alert when a data pipeline is broken or delivering null values.
3. **Self-Service Analytics**: Build or buy tools (like a "Data Catalog") that allow non-technical users to find and use data without asking an engineer.
4. **Feature Store Management**: Manage the lifecycle of the data "Features" used by ML models to ensure they are available at inference time without skew.

## 📦 Real-World Example
> **Netflix — The "Personalization Data" PM — 2020**
> At Netflix, every "click" and "pause" is a data point. The Data PM for the Personalization team doesn't build the "Recommendation Engine" (that's the AI/ML PM). Instead, they build the **Real-time Data Pipeline** that feeds those clicks into the model. They had to solve the "Cold Start" problem: how do we get data from a brand-new user into the recommendation model in under 100 milliseconds? They designed a stream-processing architecture that treated user behavior as a live event stream rather than a batch-processed database.
> *PM Lesson: The AI/ML PM gets the credit for the "Algorithm," but the Data PM builds the "Infrastructure" that makes the algorithm smart.*

## ⚠️ Common Pitfalls
- **"Data for Data's Sake"**: Collecting petabytes of data without a clear product use-case or ROI.
- **The "Data Silo"**: Building a platform that is so technically complex that only data engineers can use it.
- **Ignoring "Data Freshness"**: Providing high-quality data that is 24 hours old in a world that requires real-time responses.

## 🔗 Connected Concepts
- [[04 - Data Strategy/Data Strategy MOC|Data Strategy MOC]] — the branch dedicated to the work of the Data PM.
- [[04 - Data Strategy/Data Quality|Data Quality]] — the primary success metric for a Data PM.
- [[04 - Data Strategy/Data as a Product Asset|Data as a Product Asset]] — the strategic mindset of the Data PM.
