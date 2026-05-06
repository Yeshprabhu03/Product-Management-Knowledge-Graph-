---
tags: [ai, risk]
type: concept
branch: 03 - AI & ML Fundamentals
related: ["RAG (Retrieval Augmented Generation)", "Transparency to Users", "Confidence Indicators"]
created: 2026-05-05
---

# Hallucination

## Definition
Hallucination is a phenomenon where a Large Language Model generates information that is factually incorrect but presented with high confidence. This happens because LLMs are "probabilistic engines" designed to predict the most likely next token, not "databases" retrieving ground truth. Hallucinations can be **Factual** (wrong dates/names), **Source** (fictional citations), or **Reasoning** (flawed logic). Managing this risk is the single biggest challenge for PMs bringing LLMs into high-stakes or regulated industries.

## Why It Matters for PMs
For a Product Manager, hallucinations are the primary threat to:
1. **User Trust**: A single confident, wrong answer can cause a user to abandon the product entirely, especially in professional contexts.
2. **Brand Reputation**: High-profile hallucinations (like an AI lawyer citing fake cases) can lead to PR crises and legal liability.
3. **Safety and Compliance**: In domains like healthcare or finance, hallucinations can lead to dangerous real-world outcomes and regulatory fines.

## How to Apply It
1. **Implement RAG**: Ground the model's answers in a specific set of verified documents to provide a "source of truth."
2. **Design for Verification**: Use UI patterns like citations and "links to source" so users can easily fact-check the AI's claims.
3. **Tune System Prompts**: Explicitly tell the model "I don't know" is a valid answer and forbid it from using external knowledge if the answer isn't in the provided text.
4. **Use Multi-Step Verification**: Have one LLM generate an answer and a second "critic" LLM check that answer for factual consistency.
5. **Calibrate User Expectations**: Use onboarding and "confidence indicators" to remind users that the AI is a collaborative assistant, not a definitive source of truth.

## Real-World Example
> **Microsoft Bing Chat (Copilot) — 2023**
> Early in its launch, Bing Chat was caught "hallucinating" full legal citations and financial data that looked perfect but were completely fabricated. To solve this, Microsoft moved to a **Source-Centric UI**. Now, every factual claim is accompanied by a numbered citation that links directly to the webpage where the information was found. This doesn't eliminate hallucination, but it shifts the product from a "trust me" experience to a "verify me" experience, which is much more acceptable for professional users.
> *PM Lesson: You cannot fully "fix" hallucination in the model, so you must "design" for it in the product.*

## Common Pitfalls
- **Assuming RAG Fully Solves It**: RAG reduces hallucination, but the model can still misunderstand the retrieved text or combine facts in a way that creates a new falsehood.
- **Hiding AI's Limitations**: Pretending the AI is infallible in your marketing, which leads to a massive "trust gap" when it inevitably makes a mistake.
- **No Human-in-the-loop**: Allowing the AI to make high-stakes decisions (like medical advice or financial transactions) without a mandatory human review step.

## Connected Concepts
- [[03 - AI & ML Fundamentals/RAG (Retrieval Augmented Generation)]] — the technical strategy for providing models with a factual grounding.
- [[08 - Responsible AI/Transparency to Users]] — the ethical and UX requirement to disclose AI's probabilistic nature.
- [[09 - AI UX Patterns/Confidence Indicators]] — the UI patterns used to signal when the model is less certain of its answer.
