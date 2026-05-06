---
tags: [ux, ai]
type: pattern
branch: 09 - AI UX Patterns
related: ["Confidence Indicators", "Transparency to Users", "Hallucination"]
created: 2026-05-05
---

# 🧠 Reasoning Disclosure

## 📖 Definition
Reasoning Disclosure is an AI UX pattern where the system explains the "why" and "how" behind its output to the user. This spectrum ranges from a **"Black Box"** (no explanation) to a **"Full Chain-of-Thought"** (showing every intermediate step). The goal is to provide just enough disclosure for the user to either **Trust** the answer (if it’s correct) or **Correct** the answer (if it’s wrong), without overwhelming them with technical jargon or excessive detail.

## 🎯 Why It Matters
For a PM, disclosure is the "Trust Bridge." It matters because:
1. **Reduces the "Uncanny Valley"**: Helping users understand *why* the AI made a specific, perhaps unexpected, recommendation.
2. **Enables Debugging**: Allowing users to see where the AI went wrong (e.g., "Oh, it used the wrong PDF as a source") so they can fix their prompt.
3. **Calibrates Confidence**: If the AI discloses that it's "guessing based on limited data," the user knows not to treat the output as a definitive fact.

## 🏗️ How to Apply It
1. **Match Disclosure to Stakes**: For high-stakes decisions (e.g., medical or financial), show the full reasoning. For low-stakes (e.g., a music recommendation), keep it hidden.
2. **Source Citations**: Provide inline links to the "Ground Truth" data the AI used. This is the most effective form of disclosure.
3. **Progressive Disclosure**: Show a "summary" of the reasoning by default, with a "Show Details" button for power users.
4. **"Thought Traces"**: Use a "Thinking..." state that shows high-level steps (e.g., "Searching documentation," "Summarizing results," "Checking for bias").

## 📦 Real-World Example
> **Perplexity AI’s Inline Citations — 2023**
> Perplexity AI doesn't just give you an answer; it provides a "Reasoning Disclosure" by showing numbered citations for every factual claim. Users can hover over a citation to see the exact source snippet. This disclosure became the core product differentiator over ChatGPT for research-oriented users. In user tests, Perplexity’s "Trust Score" was 4.2/5, compared to 2.8/5 for tools that provided the same answer but without the sources. Users felt that the **Source = Truth**, and the disclosure allowed them to verify the AI's "Reasoning" in seconds.
> *PM Lesson: Transparency about how the AI arrived at an answer is often more valuable to the user than the answer itself. Disclosure is the foundation of long-term retention.*

## ⚠️ Common Pitfalls
- **"Technical Vomit"**: Showing raw logs or complex probability scores that are technically correct but humanly uninterpretable.
- **"Hallucinated Reasoning"**: The AI explaining a reasoning path that doesn't actually match how the model produced the answer (a common issue in LLMs).
- **Cognitive Overload**: Forcing the user to read a 5-paragraph "explanation" for a simple 1-sentence answer.

## 🔗 Connected Concepts
- [[09 - AI UX Patterns/Confidence Indicators]] — signaling "how sure" the AI is, which is a key part of disclosure.
- [[08 - Responsible AI/Transparency to Users]] — the ethical requirement that drives the need for disclosure.
- [[03 - AI & ML Fundamentals/Hallucination]] — the primary failure mode that disclosure helps to mitigate.
