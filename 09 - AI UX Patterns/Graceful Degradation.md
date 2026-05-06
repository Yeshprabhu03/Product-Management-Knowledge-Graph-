---
tags: [ux, ai]
type: pattern
branch: 09 - AI UX Patterns
related: ["Fallback Logic", "Copilot vs Autopilot", "Confidence Indicators"]
created: 2026-05-05
---

# Graceful Degradation

## Definition
Graceful Degradation is a design pattern where an AI product is engineered to remain functional and helpful even when the AI component fails, is uncertain, or is completely unavailable (due to latency, cost, or network issues). Instead of showing a "Loading Error" or a blank state, the product "degrades" to a simpler, more reliable alternative. This involves a **Fallback Hierarchy**:
1. **AI Output** (The ideal state).
2. **Rules-based/Heuristic alternative** (The "safe" state).
3. **Manual path/Human input** (The "legacy" state).

## Why It Matters
For a PM, "Failure" is a first-class feature of AI. Because models are probabilistic, they will eventually miss an edge case. Graceful degradation ensures that:
1. **Reliability > Novelty**: The user can always complete their task, even if the "magical" AI part isn't working.
2. **Reduced Frustration**: Users are much more forgiving of a "limited" feature than a "broken" one.
3. **Wider Operational Window**: You can deploy the product even in environments with high latency or intermittent connectivity.

## How to Apply It
1. **Identify the "Critical Path"**: Determine the one thing the user *must* be able to do (e.g., "send a message").
2. **Design the "Safety Net"**: Create a rules-based version of the feature that requires zero AI (e.g., a simple keyword search fallback for a semantic search engine).
3. **Seamless Transitions**: The switch from AI to Fallback should be invisible to the user. No "Loading" spinners or "Error: AI disconnected" banners.
4. **Confidence Thresholds**: Use a "Confidence Indicator" to decide when to trigger the fallback (e.g., if model confidence < 0.6, show the rules-based result instead).

## Real-World Example
> **Grammarly’s Seamless Fallback — 2022**
> Grammarly uses complex AI for deep tone detection and rephrasing suggestions. However, these models can occasionally be slow or fail to load due to high server load. When the AI fails, Grammarly’s **Native Spell-check** (a non-AI, dictionary-based system) activates immediately. The user never sees a "broken" state or a loading spinner; the suggestions just become slightly less sophisticated for a few seconds. In session recordings, 94% of users didn't even notice the transition. This "Silent Fallback" is why Grammarly feels more reliable than many "AI-first" competitors who show a blank panel when their API is down.
> *PM Lesson: Design the failure state as carefully as the success state. The fallback is not an "edge case"—it is the foundation of user trust.*

## Common Pitfalls
- **"All or Nothing" AI**: Building the product such that if the AI API is down, the entire app is unusable.
- **Visible Degradation**: Announcing the failure to the user (e.g., "AI is busy, using old search instead"), which makes the product feel "cheap" or "broken."
- **Poor "Safety Net" Quality**: Having a fallback that is so bad it's actually worse than showing no result at all.

## Connected Concepts
- [[06 - Execution & Delivery/Fallback Logic]] — the technical implementation of this UX pattern.
- [[09 - AI UX Patterns/Copilot vs Autopilot]] — the interaction model that determines how much the user relies on the AI.
- [[09 - AI UX Patterns/Confidence Indicators]] — the signal used to trigger a graceful degradation.
