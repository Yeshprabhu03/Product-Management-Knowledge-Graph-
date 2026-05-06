---
tags: [execution, technical, documentation]
type: artifact
branch: 06 - Execution & Delivery
related: ["AI PRD", "API Design for PMs"]
created: 2026-05-05
---

# Tech Specs for PMs

## Definition
A technical specification document written or co-authored by a Product Manager that outlines the technical constraints, architectural decisions, and infrastructure requirements for a feature before engineering begins.

## Why It Matters for PMs
When PMs understand the technical "How," they can make better trade-offs on scope and timing. Writing a tech spec forces the PM to confront issues like latency, data privacy, and backward compatibility early, preventing expensive pivots during the build phase.

## How to Apply It
1. Document the Data Flow: Show how data enters, is processed, and is stored in the system.
2. Define API Schemas: Specify the inputs, outputs, and error codes for any new endpoints.
3. List Infrastructure Requirements: Identify needs for new databases, compute resources, or third-party services.
4. Assess Security and Privacy: Document how data is encrypted and who has access to it.

## Real-World Example
> **Stripe — 2012**
> Stripe's PM team required every API change to go through a "PM Tech Review" — a 1-page spec written by the PM, not the engineer. This forced PMs to understand latency implications, backward compatibility, and error states before design started. It reduced back-and-forth by 60% and became an industry model for PM-engineering collaboration.
> *PM Lesson: A PM who can write a tech spec doesn't replace the engineer — they make the engineer 2x faster by arriving at implementation with constraints already mapped.*

## Common Pitfalls
- Over-stepping into "How" to write the code (leave that to engineers).
- Ignoring edge cases like network failure or data corruption.
- Not keeping the spec updated as the technical design evolves.

## Connected Concepts
- [[06 - Execution & Delivery/AI PRD]] — provides the functional requirements that the tech spec supports
- [[11 - Technical PM/API Design for AI]] — is the primary technical domain for many PM tech specs
