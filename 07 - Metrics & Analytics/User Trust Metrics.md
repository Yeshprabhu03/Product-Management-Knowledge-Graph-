---
tags: [metrics, ai]
type: metric
branch: 07 - Metrics & Analytics
related: ["AI Metrics", "Confidence Indicators", "Human-in-the-Loop UX"]
created: 2026-05-05
---

# User Trust Metrics

## Definition
User Trust Metrics are a specialized set of indicators used to measure how much users rely on and believe in a product's AI outputs. Unlike general satisfaction, trust is specifically about the **Calibration** between a user's expectations and the model's actual performance. Key metrics include **Override Rate** (how often users manually change an AI output), **Abandonment Rate** (how often users give up on the AI and switch to manual), and **Trust Score** (qualitative measure of reliability). A critical goal is to avoid "Over-trust" (users following the AI when it's wrong) and "Under-trust" (users ignoring the AI even when it's right).

## Why It Matters for PMs
For an AI Product Manager, trust metrics are the "canary in the coal mine" for:
1. **Long-Term Adoption**: If users don't trust the AI, they will eventually stop using it, regardless of how "accurate" the technical benchmarks are.
2. **Safety and Liability**: Identifying scenarios where users are over-relying on the AI for high-stakes tasks, which can lead to errors and legal risks.
3. **UX Improvement**: Guiding the design of "Confidence Indicators" and "Reasoning Disclosures" to help users calibrate their trust appropriately.

## How to Apply It
1. **Measure the "Silent Rejection"**: Track how often users see an AI suggestion but choose to type their own response instead.
2. **Analyze "Correction Depth"**: Are users making small "style" edits to AI output (High Trust), or are they deleting the entire thing and starting over (Low Trust)?
3. **Perform "Trust Calibration" Surveys**: Ask users "How often do you verify the AI's answer?" to see if their trust level matches the model's actual accuracy.
4. **Monitor "Escalation Rate"**: In chatbots or agents, track how quickly a user asks for a "human," which is a direct proxy for loss of trust in the AI's capability.
5. **Segment Trust by Task Type**: Identify if users trust the AI for "creative" tasks (low stakes) but distrust it for "factual" tasks (high stakes).

## Real-World Example
> **Gmail Smart Compose — 2018**
> For the "Smart Compose" team, the **Override Rate** was the primary metric of trust. If a user habitually pressed "Tab" to accept a suggestion but then immediately "backspaced" to delete it, that was a signal of a "failed trust moment." By monitoring these micro-corrections, the team discovered that the model was too "generic" for professional emails, leading to a fine-tuning sprint focused on formal tone, which significantly reduced overrides.
> *PM Lesson: Trust is built in the micro-interactions; every backspace or override is a valuable piece of feedback on your model's trust calibration.*

## Common Pitfalls
- **Optimizing for Acceptance Only**: High acceptance doesn't always mean high trust; sometimes it means "lazy" users who are letting the AI make mistakes.
- **Ignoring the "First Failure"**: A single high-profile AI mistake (hallucination) can destroy trust that took months of successful interactions to build.
- **No Path to Recovery**: Having a product where users can find an AI error but have no easy way to report it or fix it, which leaves them feeling "trapped" by the AI.

## Connected Concepts
- [[07 - Metrics & Analytics/AI Metrics]] — the technical and business metrics that drive the baseline for trust.
- [[09 - AI UX Patterns/Confidence Indicators]] — the UI tools used to manage and calibrate user trust in real-time.
- [[09 - AI UX Patterns/Human-in-the-Loop UX]] — the design pattern that uses human review to protect and build trust.
