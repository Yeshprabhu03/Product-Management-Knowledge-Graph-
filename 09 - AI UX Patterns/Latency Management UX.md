---
tags: [ux, ai]
type: pattern
branch: 09 - AI UX Patterns
related: ["Inference & Latency", "Confidence Indicators", "Transparency to Users"]
created: 2026-05-05
---

# ⌛ Latency Management UX

## 📖 Definition
Latency Management UX is the practice of designing user interfaces that mitigate the negative impact of slow AI processing times. Because Large Language Models and complex ML models can take several seconds to generate a response, standard "loading spinners" are often insufficient. Key techniques include **Streaming** (displaying tokens as they are generated), **Progressive Disclosure** (showing the "steps" the AI is taking), **Optimistic UI** (showing the expected result immediately while processing happens in the background), and **Skeleton Screens**.

## 🎯 Why It Matters for PMs
For an AI Product Manager, latency is the #1 enemy of user retention. Managing it via UX is critical because:
1. **Improves Perceived Speed**: A user who sees a model "streaming" text token-by-token feels that the app is fast, even if the total time is the same as a slow loading bar.
2. **Reduces Anxiety**: Showing "what the AI is doing" (e.g., "Searching documentation...") prevents users from thinking the app has crashed or frozen.
3. **Maintains Engagement**: Using the latency period to provide value, such as showing "fun facts," tips, or intermediate results.

## 🏗️ How to Apply It
1. **Implement Token Streaming**: Ensure your backend and frontend support Server-Sent Events (SSE) so users can see the AI's "thoughts" in real-time.
2. **Use "Chain of Thought" Visualization**: For complex tasks, show a list of the sub-tasks the AI is performing (e.g., "1. Analyzing query... 2. Searching database... 3. Summarizing...").
3. **Design for "Async" Workflows**: For very long tasks (>30 seconds), move the interaction to an "activity feed" or send a notification when the result is ready.
4. **Optimize the "Time to First Token" (TTFT)**: Work with engineering to prioritize the start of the response, as this is the most critical metric for perceived speed.
5. **Use Skeleton Screens**: Use placeholder shapes that match the final layout of the AI's output to reduce "layout shift" when the content finally arrives.

## 📦 Real-World Example
> **ChatGPT's "Typing" Effect — 2022**
> OpenAI famously used **Streaming** to solve their massive latency problem. Instead of waiting 10 seconds for a full paragraph to generate, the user sees the words "typing" out at a human-readable speed. This not only makes the app feel "alive" and conversational, but it also allows the user to start reading the first sentence while the rest of the answer is still being computed, effectively "hiding" 90% of the latency.
> *PM Lesson: You don't always need a faster model; sometimes you just need a better "Progressive Disclosure" strategy.*

## ⚠️ Common Pitfalls
- **The "Dead" Spinner**: Using a generic loading spinner for more than 5 seconds, which leads to high abandonment rates in mobile and web apps.
- **Layout Jitters**: The AI content "pops in" and pushes other UI elements around, which is frustrating for users who are trying to read or click.
- **Hiding the Complexity**: Forgetting to tell the user *why* it's taking a long time (e.g., if the AI is performing a massive multi-step reasoning task).

## 🔗 Connected Concepts
- [[03 - AI & ML Fundamentals/Inference & Latency]] — the technical causes of the latency that this UX pattern seeks to manage.
- [[09 - AI UX Patterns/Confidence Indicators]] — using the "thinking time" to also signal the model's level of certainty.
- [[08 - Responsible AI/Transparency to Users]] — being honest about why the AI is "taking a moment" to process a complex request.
