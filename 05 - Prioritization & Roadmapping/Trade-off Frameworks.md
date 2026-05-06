---
tags: [prioritization, decision]
type: framework
branch: 05 - Prioritization & Roadmapping
related: ["AI-Specific Prioritization", "Build vs Buy vs Fine-tune", "Cost Metrics"]
created: 2026-05-05
---

# ⚖️ Trade-off Frameworks

## 📖 Definition
Trade-off Frameworks are structured approaches to making explicit decisions when faced with competing priorities or limited resources. Common models include the **"Iron Triangle"** (Scope vs. Time vs. Cost), **"Model Trade-offs"** (Accuracy vs. Latency vs. Inference Cost), and **"Strategic Trade-offs"** (Short-term Revenue vs. Long-term Moat). The goal of these frameworks is to move away from "implicit" decisions (which happen by default) to "explicit" decisions that are documented, communicated, and aligned with the overall strategy.

## 🎯 Why It Matters for PMs
For a Product Manager, trade-offs are the "daily bread." Frameworks are essential because:
1. **Depoliticizes Decisions**: Moving the conversation from "my opinion vs. your opinion" to a structured comparison of different paths.
2. **Ensures Consistency**: Helping the team make the same types of trade-offs across different features (e.g., "we always prioritize latency over 1% more accuracy").
3. **Clarifies Strategy**: Making the underlying strategic choices (e.g., "we are a speed-to-market company") visible through the decisions that are made.

## 🏗️ How to Apply It
1. **Identify the Competing Variables**: Clearly name the two or three things you are trying to balance (e.g., "Feature Completeness" vs. "Launch Date").
2. **Visualize the Options**: Create a "Choice Matrix" or use the Iron Triangle to show what happens to one variable if you optimize for another.
3. **Consult the Strategy**: Use the high-level Product Vision and Strategy as the "tie-breaker" (e.g., if we are the "Easiest to use," we cannot trade off UX for speed).
4. **Document the "Why"**: Use a **Decision Log** to record the rationale for the trade-off so it can be referenced when stakeholders ask questions later.
5. **Communicate the Impact**: Ensure that leadership and the execution team understand the consequences of the trade-off (e.g., "Choosing a faster launch means skipping these three edge cases").

## 📦 Real-World Example
> **OpenAI: GPT-4 vs. GPT-3.5 Turbo — 2023**
> Product Managers at companies using OpenAI APIs face a classic **AI Trade-off**. GPT-3.5 Turbo is 10x cheaper and 5x faster, while GPT-4 is significantly more accurate on complex reasoning tasks. A PM building a simple "Email Subject Line Generator" must explicitly trade off GPT-4's quality for the cost and speed of GPT-3.5, as the user doesn't need "genius-level" reasoning for a 5-word subject line. Using GPT-4 would be a "bad trade-off" for the product's gross margins and UX speed.
> *PM Lesson: A "good" trade-off is one that maximizes the user's specific definition of value, even if it means sacrificing technical "excellence."*

## ⚠️ Common Pitfalls
- **The "We Can Have It All" Delusion**: Failing to make an explicit trade-off and hoping the team can simply "work harder" to ship everything on time with high quality.
- **Implicit Defaults**: Letting the engineering or design lead make a trade-off by default without checking if it aligns with the business strategy.
- **Not Revisiting Trade-offs**: Sticking with a decision (like using a slow, accurate model) even as new technology (like faster, accurate models) makes the original trade-off obsolete.

## 🔗 Connected Concepts
- [[05 - Prioritization & Roadmapping/AI-Specific Prioritization]] — the specific trade-offs faced by AI product teams.
- [[11 - Technical PM/Build vs Buy vs Fine-tune]] — a massive strategic trade-off involving cost, control, and time-to-market.
- [[07 - Metrics & Analytics/Cost Metrics]] — the data used to measure the "cost" side of many trade-off decisions.
