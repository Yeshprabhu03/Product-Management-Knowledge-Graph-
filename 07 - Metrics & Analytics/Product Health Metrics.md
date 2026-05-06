---
tags: [metrics]
type: metric
branch: 07 - Metrics & Analytics
related: ["Aha Moment", "North Star Metric", "Experimentation"]
created: 2026-05-05
---

# Product Health Metrics

## Definition
Product Health Metrics are the set of key performance indicators (KPIs) used to measure the overall performance, growth, and sustainability of a product. A common framework for organizing these metrics is **AARRR** (Pirate Metrics): **Acquisition** (new users), **Activation** (reaching the Aha moment), **Retention** (users returning), **Referral** (users inviting others), and **Revenue** (monetization). Among these, Retention is typically considered the most critical "health" indicator, as acquisition is wasted if users do not find enough value to return.

## Why It Matters for PMs
For a Product Manager, health metrics are the "vitals" of the product. They help:
1. **Identify Performance Gaps**: Pinpointing exactly where users are dropping out of the funnel (e.g., high acquisition but low activation).
2. **Prioritize the Roadmap**: Directing engineering and design effort toward the metric that is currently the biggest bottleneck to growth.
3. **Communicate Success**: Providing a clear, data-driven story to stakeholders and leadership about how the product is trending.

## How to Apply It
1. **Map Your Funnel**: Clearly define the steps a user takes from first hearing about the product (Acquisition) to paying or becoming a loyalist (Revenue).
2. **Identify Leading Indicators**: Find the "upstream" metrics (like Activation) that strongly predict "downstream" success (like Retention).
3. **Set Baselines and Targets**: Determine your current performance for each health metric and set realistic, time-bound targets for improvement.
4. **Segment the Data**: Analyze health metrics by customer segment, geography, or cohort to identify hidden patterns of success or failure.
5. **Monitor and Alert**: Set up dashboards that provide real-time visibility into these vitals and alert the team if a metric (like Day 1 Retention) drops unexpectedly.

## Real-World Example
> **Slack — 2014**
> In its early days, Slack's primary health metric wasn't just "Daily Active Users." They discovered a critical **Activation** insight: teams that sent 2,000 messages had a 93% chance of retaining long-term. Every product decision was then focused on driving teams to that 2,000-message threshold as quickly as possible. This "Activation Rate" became their most important health metric, as it was a leading indicator of the long-term success of every new team on the platform.
> *PM Lesson: A health metric is only useful if it's actionable; find the specific user behavior that "unlocks" long-term value.*

## Common Pitfalls
- **Vanity Metric Obsession**: Focusing on "Registered Users" or "Page Views" that look good on a chart but don't actually correlate with user value or business growth.
- **Ignoring Retention**: Spending all resources on Acquisition while the product has a "leaky bucket," where users leave as fast as they arrive.
- **Mismatched Definitions**: Not having a clear, shared definition of what an "Active User" actually is (e.g., is it a login, or is it a specific high-value action?).

## Connected Concepts
- [[07 - Metrics & Analytics/Aha Moment]] — the specific activation milestone that drives product health.
- [[01 - Strategy & Vision/North Star Metric]] — the single metric that the health metrics should ultimately support.
- [[07 - Metrics & Analytics/Experimentation]] — the process used to improve specific health metrics through testing.
