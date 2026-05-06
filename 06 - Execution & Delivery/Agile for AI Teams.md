---
tags: [execution, agile, process]
type: framework
branch: 06 - Execution & Delivery
related: ["Technical Debt in AI", "Online vs Offline Evaluation", "Model Drift & Degradation"]
created: 2026-05-05
---

# Agile for AI Teams

## Definition
An adaptation of Agile and Scrum methodologies designed to accommodate the non-linear nature of machine learning development, including research spikes, model training cycles, and the inherent uncertainty of experimental outcomes.

## Why It Matters for PMs
Standard Agile assumes that "Engineered" work is predictable. ML work is more like "Science"—it involves discovery and experimentation. PMs must adapt sprints to allow for research that might not yield a "shippable" feature every two weeks, without losing the momentum of the development cycle.

## How to Apply It
1. Use Research Spikes: Dedicate specific time-boxed periods for data exploration and feasibility testing.
2. Decouple Research from Integration: Allow the ML team to iterate on models in parallel with the product team building the UI.
3. Measure Progress by "Learning" as well as "Shipping": Value the data insights gained from a failed model experiment.
4. Implement Model Training Sprints: Recognize that training and evaluation have different cadences than standard front-end development.

## Real-World Example
> **SaaS Startup — 2023**
> A product team at a mid-sized SaaS company struggled to fit ML work into two-week sprints. They transitioned to a "4-Week Cycle" for AI: Week 1 was data preparation and baseline modeling; Week 2 was focused on active experimentation; Week 3 was offline evaluation and tuning; and Week 4 was integration, testing, and setting up production monitoring. This allowed the ML engineers the "Deep Work" time needed for model training while keeping the product on a predictable release schedule.
> *PM Lesson: You cannot force a model to be accurate on a 2-week schedule; you can only force the team to be disciplined about the experimentation process.*

## Common Pitfalls
- Treating ML experiments as "Tasks" that can be estimated with 100% certainty.
- Failing to build in time for data cleaning and labeling at the start of a project.
- Ignoring the need for post-deployment monitoring as part of the "Definition of Done."

## Connected Concepts
- [[06 - Execution & Delivery/Technical Debt in AI]] — is often the result of rushing ML cycles to fit standard Agile sprints
- [[07 - Metrics & Analytics/Online vs Offline Evaluation]] — are the "Checkpoints" used to measure progress in an AI sprint
- [[03 - AI & ML Fundamentals/Model Drift & Degradation]] — is the primary risk that Agile monitoring should mitigate post-launch
