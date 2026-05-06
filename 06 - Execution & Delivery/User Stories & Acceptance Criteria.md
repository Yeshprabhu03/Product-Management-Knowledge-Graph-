---
tags: [execution, agile, ai]
type: framework
branch: 06 - Execution & Delivery
related: ["AI PRD", "Graceful Degradation", "Confidence Indicators"]
created: 2026-05-05
---

#User Stories & Acceptance Criteria

##Definition
The process of drafting user stories and acceptance criteria (AC) for AI features, which must include explicit handling of probabilistic outcomes, edge cases for model uncertainty, and specific requirements for fallback behavior.

##Why It Matters for PMs
Traditional user stories focus on "Happy Paths." For AI, the "Uncertain Path" is equally common. PMs who don't include failure states in their AC leave the system behavior to chance, often resulting in poor user experiences when the model inevitably makes a mistake.

##How to Apply It
1. Incorporate Confidence Levels: Write stories that specify how the UI should change based on model confidence.
2. Define Fallback Actions: Include AC for what happens when the AI service is down or the result is invalid.
3. Detail Negative Constraints: Specify what the AI must *not* do (e.g., "AI must not provide medical advice").
4. Plan for User Feedback: Include stories for capturing "Thumbs up/down" to feed the model's improvement loop.

##Real-World Example
> **Slack — 2024**
> When building "Smart Compose" for Slack, the PM team wrote stories that explicitly addressed uncertainty. One AC stated: "As a user, when the AI is uncertain (confidence < 60%), I want a subtle visual indicator or no suggestion at all, so that I don't over-rely on potentially incorrect completions." This prevented the "clippy" effect of annoying, low-quality suggestions.
> *PM Lesson: Acceptance criteria for AI must cover the "What if it's wrong?" scenario to protect user trust.*

##Common Pitfalls
- Assuming 100% accuracy in the user journey.
- Neglecting to write stories for the data feedback loop (e.g., capturing user corrections).
- Missing AC for latency-related UX (e.g., what to show while the model is thinking).

##Connected Concepts
- [[06 - Execution & Delivery/AI PRD]] — provides the high-level requirements that these stories break down
- [[09 - AI UX Patterns/Graceful Degradation]] — is the design pattern implemented via these user stories
- [[09 - AI UX Patterns/Confidence Indicators]] — are the UI elements often required by AI acceptance criteria
