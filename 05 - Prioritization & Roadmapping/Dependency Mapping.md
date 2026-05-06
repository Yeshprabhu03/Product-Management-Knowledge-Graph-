---
tags: [prioritization, execution]
type: concept
branch: 05 - Prioritization & Roadmapping
related: ["Product Roadmap", "AI PRD", "Data Pipelines"]
created: 2026-05-05
---

# 🕸️ Dependency Mapping

## 📖 Definition
Dependency Mapping is the process of identifying and visualizing the relationships between different tasks, teams, data sources, and technologies within a product project. In AI development, dependencies are often more complex than in standard software, involving **Technical Dependencies** (e.g., Team A must build the API before Team B can use it), **Data Dependencies** (e.g., the pipeline must be active before the model can train), and **External Dependencies** (e.g., waiting for a third-party model provider to grant API access).

## 🎯 Why It Matters for PMs
For a Product Manager, untracked dependencies are the #1 cause of project delays. Mapping them is essential to:
1. **Unblock the Team**: Ensuring that the "Critical Path" is clear and that no one is waiting on a task they didn't know was their responsibility.
2. **Improve Forecast Accuracy**: Providing a realistic picture of when a feature will actually ship based on the slowest dependency.
3. **Inform Prioritization**: Deciding which "foundation" tasks must be completed in Q1 to enable the "magical" features planned for Q2.

## 🏗️ How to Apply It
1. **Host a Cross-functional Sync**: Bring engineering, data science, and infrastructure leads together to brainstorm all the pieces needed for a feature.
2. **Identify the "Critical Path"**: Determine the sequence of tasks that dictates the minimum time needed to complete the project.
3. **Use a Visual Tool**: Map the dependencies in a tool like Lucidchart, Miro, or a simple Gantt chart to show the flow of work.
4. **Explicitly Name Data Dependencies**: For AI, specifically document when training data, annotation pipelines, and evaluation sets will be ready.
5. **Review Dependencies Weekly**: Check in during sprint planning to see if any new dependencies have emerged or if any "upstream" delays will impact the timeline.

## 📦 Real-World Example
> **AI-Powered Search Launch — 2022**
> A PM building an AI-powered search feature for a large e-commerce site failed to map a critical **Data Dependency**. The ML team was ready to train the retrieval model, but they didn't realize the Data Pipeline team hadn't yet updated the search index to include the new "vector" fields. This hidden 6-week dependency was only discovered midway through the quarter, causing a 2-month launch delay and a significant loss in potential revenue. Post-mortem added "Data Dependency Check" to the mandatory AI PRD template.
> *PM Lesson: In AI, your dependencies aren't just in the code; they are in the data and the infrastructure that moves it.*

## ⚠️ Common Pitfalls
- **Only Mapping Technical Code**: Forgetting that legal reviews, data privacy audits, and manual annotation are also critical dependencies.
- **Ignoring External Vendors**: Assuming that a third-party API will always be available or that their rate limits won't impact your testing and launch.
- **Lack of "Buffer" Time**: Failing to account for the fact that AI research dependencies (e.g., "getting the model to 90% accuracy") are inherently uncertain.

## 🔗 Connected Concepts
- [[05 - Prioritization & Roadmapping/Product Roadmap]] — the high-level plan that dependency mapping makes realistic.
- [[06 - Execution & Delivery/AI PRD]] — the document where dependencies should be explicitly listed during scoping.
- [[04 - Data Strategy/Data Pipelines]] — the primary source of technical dependencies for AI products.
