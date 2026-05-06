---
tags: [execution, risk, ux]
type: pattern
branch: 06 - Execution & Delivery
related: ["Graceful Degradation", "Release Management", "Hallucination"]
created: 2026-05-05
---

# Fallback Logic

## Definition
The hierarchy of degradation designed to handle model failures, high latency, or uncertainty. A robust fallback system ensures that the user is always provided with value, moving from the most complex AI solution to a simpler "Rules-based" system, and finally to a manual or "Standard" state.

## Why It Matters for PMs
AI is inherently unreliable. PMs must ensure the "Core Value" of the product is protected even when the model is down or confused. This prevents "Dead Ends" in the user journey and maintains the perception of a high-quality product.

## How to Apply It
1. Define Confidence Thresholds: Set the level below which the AI output is considered "Unreliable."
2. Implement Heuristic Fallbacks: If the AI fails, use a simple set of "If-Then" rules to provide a baseline answer.
3. Provide Manual Overrides: Allow the user to "Fix" or "Ignore" the AI's mistake easily.
4. Design the "Quiet Failure": In many cases, if the AI is unsure, the best UX is to show nothing at all rather than a broken interface.

## Real-World Example
> **Grammarly — 2024**
> Grammarly's writing assistant has a multi-layered fallback system. If the advanced LLM-based "Tone Rewriter" fails to load or is uncertain, the system falls back to a rules-based "Grammar Checker." If even that fails, the product simply functions as a standard text editor with native browser spell-check. The user is never presented with a "Broken" or "Empty" state; they can always finish their task.
> *PM Lesson: A feature that fails gracefully is perceived as more reliable than a "smarter" feature that crashes when it's confused.*

## Common Pitfalls
- Showing a "Confident Wrong" answer because there is no fallback logic.
- Not testing the product with the AI service "Turned Off" during QA.
- Failing to notify the user (transparently) when the product has shifted to a "Limited" mode.

## Connected Concepts
- [[09 - AI UX Patterns/Graceful Degradation]] — is the broader design principle that fallback logic enables
- [[06 - Execution & Delivery/Release Management]] — uses fallback logic as a safety net during model rollouts
- [[03 - AI & ML Fundamentals/Hallucination]] — is the specific type of AI error that fallback logic aims to hide or mitigate
