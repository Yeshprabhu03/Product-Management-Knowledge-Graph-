---
tags: [prioritization, framework]
type: framework
branch: 05 - Prioritization & Roadmapping
related: ["Product Roadmap", "Trade-off Frameworks", "RICE Prioritization"]
created: 2026-05-05
---

# MoSCoW

## Definition
MoSCoW is a prioritization technique used in management, business analysis, and software development to reach a common understanding with stakeholders on the importance they place on the delivery of each requirement. The acronym stands for: **Must have** (critical for launch), **Should have** (important but can be deferred), **Could have** (desirable but not necessary), and **Won't have** (specifically excluded from this release). It is particularly effective for managing scope and preventing "feature creep" during a development cycle.

## Why It Matters for PMs
For a Product Manager, MoSCoW is essential for:
1. **Setting Realistic Expectations**: Clearly communicating to stakeholders what will and will not be in the upcoming release.
2. **Protecting the MVP**: Ensuring the "Must haves" are prioritized over "Nice to haves" when time or resources are limited.
3. **Clarifying Scope Boundaries**: Using the "Won't have" category to explicitly name the ideas that are being deferred, preventing them from sneaking back into the sprint.

## How to Apply It
1. **List All Requirements**: Gather all the potential features, bugs, and tasks for the next release or sprint.
2. **Categorize by Criticality**:
    - **Must**: If this isn't included, the product is a failure or legally non-compliant.
    - **Should**: Important features that add significant value but aren't vital for day one.
    - **Could**: Small improvements or "delighters" that can be cut if time runs out.
    - **Won't**: Ideas that the team has agreed are out of scope for this specific cycle.
3. **Review with Stakeholders**: Get buy-in from engineering, design, and business owners on the categorization.
4. **Enforce the "Won't" List**: Use the list as a defensive tool during the build phase to prevent new requests from derailing the timeline.
5. **Re-evaluate Every Cycle**: Move items between categories as the project progresses and new information becomes available.

## Real-World Example
> **Figma's Multiplayer Launch — 2016**
> When Figma was building its revolutionary real-time collaboration feature, they used MoSCoW to manage the massive technical risk. **Must Have**: Real-time cursor and object sync (the core innovation). **Should Have**: Comments (critical for teams but technically separate). **Could Have**: In-app chat. **Won't Have**: Offline mode. By being explicit about "Won't Have: Offline Mode," they saved months of complex engineering work and were able to ship the core multiplayer experience on time, which defined their market position.
> *PM Lesson: Prioritization is more about what you say "No" to than what you say "Yes" to; the "Won't" list is your most powerful tool for shipping on time.*

## Common Pitfalls
- **"Must Have" Inflation**: Everything becomes a Must Have, which makes the framework useless for actual prioritization and leads to burnout.
- **Ignoring the "Won't" List**: Failing to explicitly name the deferred features, which leads to stakeholders assuming they are still being built.
- **Lack of Engineering Input**: Categorizing something as "Could Have" when it is actually a prerequisite for a "Must Have."

## Connected Concepts
- [[05 - Prioritization & Roadmapping/Product Roadmap]] — the high-level plan that MoSCoW helps detail.
- [[05 - Prioritization & Roadmapping/Trade-off Frameworks]] — the logic used to decide which category a feature falls into.
- [[13 - Frameworks & Models/RICE Prioritization]] — a more quantitative scoring method that can be used alongside MoSCoW.
