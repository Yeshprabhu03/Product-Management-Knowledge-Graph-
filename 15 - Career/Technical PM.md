---
tags: [career, roles, technical]
type: concept
branch: 15 - Career
related: ["PM Specializations", "LLM Architecture for PMs", "API Design for AI"]
created: 2026-05-06
---

# Technical PM

## 📖 Definition
A Technical PM (TPM) is an archetype that focuses on products where the primary "User" is often another developer or a machine. They manage infrastructure, APIs, developer platforms, and internal services. While a Core PM focuses on the UI/UX, the Technical PM focuses on **Performance, Scalability, Reliability, and Latency**. They must be able to "Speak Eng" fluently, understand system architecture, and make trade-offs that involve compute costs and architectural debt.

## 🎯 Why It Matters
As companies move toward "AI-First" architectures, the Technical PM becomes a critical strategic asset.
1. **System Thinking**: They understand how a change in one microservice impacts the entire platform's latency.
2. **Efficiency**: They are responsible for the **COGS** (Cost of Goods Sold) by optimizing compute and API usage.
3. **Developer Experience (DX)**: They ensure that the company's internal or external APIs are intuitive, well-documented, and stable.

## 🏗️ How to Apply It
1. **API First Design**: Define the "Contract" between services before any UI is built.
2. **Infrastructure Roadmapping**: Plan for scaling (e.g., moving from a monolith to microservices or implementing a Vector DB) before the system hits a bottleneck.
3. **Internal Stakeholder Management**: Your "Customers" are often the engineering teams inside your own company. Use RFCs (Request for Comments) instead of traditional PRDs.
4. **Latency Budgeting**: Define and enforce strict P99 latency requirements for critical services.

## 📦 Real-World Example
> **Stripe — The "Payments API" PM — 2019**
> A Technical PM at Stripe owns the "Checkout API." Their success isn't measured by a "Buy Button" click rate (that's the Core PM), but by **API Reliability (99.999% uptime)** and **Time to First Successful Call** for a new developer. When Stripe decided to support new payment methods globally, the Technical PM had to design a polymorphic API structure that could handle thousands of different local regulations and currencies without breaking the experience for existing developers.
> *PM Lesson: Technical PMs build the "Pipes" that make the "Magic" possible. If you don't notice their work, they are doing a great job.*

## ⚠️ Common Pitfalls
- **The "Over-Engineering" Trap**: Building a complex, scalable system for a product that hasn't found Product-Market Fit yet.
- **Losing the "Why"**: Getting so deep into architectural debates with engineers that you forget how this service actually helps the end-user.
- **Being a "Project Manager" for Eng**: Merely tracking tickets for the engineering team instead of setting the technical strategy.

## 🔗 Connected Concepts
- [[11 - Technical PM/Technical PM MOC|Technical PM MOC]] — the central hub for the technical skills required for this role.
- [[11 - Technical PM/LLM Architecture for PMs|LLM Architecture for PMs]] — a core technical domain for modern TPMs.
- [[11 - Technical PM/API Design for AI|API Design for AI]] — the primary artifact of the Technical PM.
