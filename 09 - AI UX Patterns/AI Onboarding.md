---
tags: [ux, growth]
type: pattern
branch: 09 - AI UX Patterns
related: ["Aha Moment", "Transparency to Users", "Confidence Indicators"]
created: 2026-05-05
---

# AI Onboarding

## Definition
AI Onboarding is the specialized first-run experience designed to introduce users to the capabilities, limitations, and interaction patterns of an AI-powered product. Unlike standard onboarding, which focuses on "where the buttons are," AI onboarding must focus on **Expectation Management** and **Instructional Scaffolding**. It helps users understand how to "prompt" or interact with the model to get the best results, while simultaneously building the "Trust Contract" by disclosing known limitations and data usage.

## Why It Matters for PMs
For an AI Product Manager, the onboarding is the most critical lever for:
1. **Reducing the "Empty State" Problem**: Using AI to generate initial content or suggestions so the user sees value immediately.
2. **Preventing Disappointment**: Being honest about what the AI can't do (e.g., "I can't browse the live web") before the user tries and fails.
3. **Teaching Prompt Literacy**: Helping users move from vague queries ("make me a plan") to high-value prompts ("make me a 1,200-calorie meal plan with no dairy").

## How to Apply It
1. **Lead with "Sample Prompts"**: Don't give users a blank chat box; provide "Starters" or "Templates" that show them what a successful interaction looks like.
2. **Disclose the "AI Nature"**: Use the very first screen to explain that the responses are generated and might be inaccurate (Transparency).
3. **Interactive Tutorials**: Walk the user through a "Golden Path" task where they see the AI succeed, helping them reach the **Aha Moment** in under 60 seconds.
4. **Set Expectations for Latency**: If the AI takes 10 seconds to respond, explain that it's "thinking" or "searching" so the user doesn't think the app is broken.
5. **Collect Initial Preferences**: Use the onboarding to "personalize" the model (e.g., "What is your professional role?") to make the very first output feel relevant.

## Real-World Example
> **Perplexity AI — 2024**
> Perplexity's onboarding is a masterclass in AI value-delivery. Their home page is a search bar, but it's surrounded by "trending" queries and categories. When a new user types their first question, the UI shows the "Source Retrieval" process in real-time before the answer appears. This teaches the user three things immediately: 1. You can ask anything. 2. We search the web for you. 3. We cite our sources. This "showing the work" is a core part of their onboarding trust strategy.
> *PM Lesson: The best AI onboarding doesn't tell the user what the AI can do; it shows the AI doing it while explaining the "why."*

## Common Pitfalls
- **Overpromising in the Hero Text**: Using language like "Ask me anything" when the model is actually limited to a narrow set of data or tasks.
- **Skipping the Limitations Disclosure**: Trying to make the AI seem "magical" by hiding the risk of hallucination, which leads to immediate loss of trust when an error occurs.
- **Too Much Technical Jargon**: Explaining "LLMs" or "Neural Networks" during onboarding when the user just wants to know "How does this save me time?"

## Connected Concepts
- [[07 - Metrics & Analytics/Aha Moment]] — the goal of the AI onboarding journey.
- [[08 - Responsible AI/Transparency to Users]] — the ethical foundation of the onboarding experience.
- [[09 - AI UX Patterns/Confidence Indicators]] — the UI tools used to manage expectations during and after onboarding.
