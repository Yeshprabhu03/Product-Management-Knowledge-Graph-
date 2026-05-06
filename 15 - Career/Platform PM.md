---
tags: [career, roles, platform]
type: concept
branch: 15 - Career
related: ["PM Specializations", "Technical PM", "Building vs Buy vs Fine-tune"]
created: 2026-05-06
---

# Platform PM

## 📖 Definition
A Platform PM is an archetype that focuses on building "Common Services" and "Enabling Infrastructure" that other product teams use to build their features. While a Consumer PM builds for "End Users," a Platform PM builds for **"Internal Teams" (Developers, Analysts, Support)**. They create the "Foundation" of the company's tech stack — think auth systems, billing engines, design systems, or AI developer platforms.

## 🎯 Why It Matters
Platform PMs are the "Force Multipliers" of a product organization.
1. **Developer Velocity**: They build tools that allow a feature team to ship in 1 week instead of 1 month by providing "Off-the-shelf" services.
2. **Consistency**: They ensure that "Login" or "Search" looks and behaves the same way across 10 different sub-products.
3. **Efficiency**: They prevent 10 different teams from "Re-inventing the wheel" (e.g., each building their own notification service).

## 🏗️ How to Apply It
1. **Platform as a Product**: Treat internal developers as customers. Conduct interviews, gather requirements, and define "Platform SLAs."
2. **Abstraction Design**: Find the "Common Denominator" across different teams' needs and build a service that is flexible enough to handle 80% of use cases without being overly complex.
3. **Migration Strategy**: The hardest part of platform work is moving teams from the "Old Way" to the "New Way." You need a clear deprecation and adoption roadmap.
4. **Platform Economics**: Measure success by **"Time to Market"** for internal teams and **"Cost Savings"** from centralized services.

## 📦 Real-World Example
> **Uber — The "Michelangelo" Platform PM — 2017**
> Uber realized that 50 different teams were trying to build ML models for things like surge pricing, driver routing, and food delivery. Each team was building their own data pipelines and hosting their own models. The Platform PM team built "Michelangelo" — an internal ML-as-a-service platform. This allowed any PM at Uber to "Drag and Drop" data into a pre-built training pipeline and deploy a model in days instead of months.
> *PM Lesson: A Platform PM's customer is the most demanding customer in the world — another engineer.*

## ⚠️ Common Pitfalls
- **The "Ivory Tower"**: Building a platform that is technically "Perfect" but doesn't solve the actual needs of the feature teams.
- **Under-Communication**: Changing a core API or service without a 6-month warning, breaking half the company's features.
- **Ignoring "Developer UX"**: Thinking that internal tools don't need good documentation or a clean CLI/API because "the users work here."

## 🔗 Connected Concepts
- [[15 - Career/Technical PM|Technical PM]] — the role that most closely overlaps with Platform PM.
- [[11 - Technical PM/Build vs Buy vs Fine-tune|Build vs Buy vs Fine-tune]] — the core strategic decision a Platform PM makes for the company.
- [[14 - Tools & Artifacts/Decision Log|Decision Log]] — a critical artifact for Platform PMs to document architectural choices.
