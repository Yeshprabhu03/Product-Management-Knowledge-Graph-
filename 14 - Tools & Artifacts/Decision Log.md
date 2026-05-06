---
tags: [artifact, process]
type: artifact
branch: 14 - Tools & Artifacts
related: ["AI PRD", "Trade-off Frameworks", "Stakeholder Communication"]
created: 2026-05-05
---

# Decision Log

## Definition
A Decision Log (also known as an ADR — Architecture Decision Record) is a living document that captures the "Why" behind product and technical decisions, not just the "What" was decided. It is a historical record that includes: **Date**, **Decision Made**, **Context at the time**, **Options considered**, **Rationale chosen**, **Trade-offs accepted**, and **Stakeholders involved**. The goal is to provide a permanent "Institutional Memory" that prevents teams from relitigating the same debates every few months.

## Why It Matters
For a PM, the decision log is a "Force Multiplier" for productivity:
1. **Prevents "Circular Debates"**: When a new team member asks "Why aren't we using [X] model?", you can simply point them to the log entry from 6 months ago.
2. **Speeds Up Onboarding**: New hires can read the log to understand the "Logic" of the current system without needing 20 hours of 1-on-1 meetings.
3. **Improves Decision Quality**: The act of *writing down* the rationale forces the PM to be more rigorous and data-driven in their thinking.

## How to Apply It
A standard Decision Log entry should be short (1 page max) and include:
1. **Title**: The specific decision (e.g., "Switching to RAG for Docs").
2. **Status**: Proposed, Accepted, or Superseded.
3. **Context**: What was the problem? What were the constraints (budget, time, accuracy)?
4. **Options**: List at least two alternatives (e.g., "Fine-tuning" vs. "RAG").
5. **Rationale**: Why did you pick the winner? (e.g., "RAG is 10x cheaper and easier to update").
6. **Consequences**: What did we give up? (e.g., "Higher latency for the first query").

## Real-World Example
> **The RAG vs. Fine-tuning Debate — 2023**
> A PM at an enterprise SaaS company was building a knowledge base bot. They chose **RAG** (Retrieval Augmented Generation) over fine-tuning. The **Decision Log** entry noted: *"Chose RAG because client data changes weekly — a fine-tuned model would be stale within days, and retraining would cost $8K per run. RAG adds 200ms of latency, but ensures data is always current."* Eight months later, a new Lead Engineer proposed fine-tuning because "it's more elegant." The PM shared the decision log. The debate was resolved in 5 minutes because the original constraints (data volatility and cost) were still true.
> *PM Lesson: The decision log is your team's "Institutional Memory." Without it, you are doomed to repeat the same meetings every time the team structure changes.*

## Common Pitfalls
- **"What" vs. "Why"**: Recording only the outcome (e.g., "We picked Azure") without documenting the alternatives that were rejected.
- **Letting it Go Stale**: Not updating the log when a decision is "Superseded" by a new one, leading to conflicting "Sources of Truth."
- **Too much Bureaucracy**: Making the log so long and complex that nobody wants to write in it or read it.

## Connected Concepts
- [[06 - Execution & Delivery/AI PRD]] — the document that often triggers a decision log entry.
- [[05 - Prioritization & Roadmapping/Trade-off Frameworks]] — the mental tools used to reach the decisions in the log.
- [[12 - Leadership & Stakeholders/Stakeholder Communication]] — the process of sharing the "Why" with the broader organization.
