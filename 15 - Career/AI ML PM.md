---
tags: [career, roles, ai, ml]
type: concept
branch: 15 - Career
related: ["PM Specializations", "Managing ML Models as Products", "AI Metrics"]
created: 2026-05-06
---

# AI / ML PM

## 📖 Definition
The AI/ML PM is a specialized archetype responsible for products where the core value proposition is powered by probabilistic models rather than deterministic code. While a Core PM writes "If/Then" logic, an AI PM manages **Predictions, Confidence Intervals, and Continuous Learning Loops**. They must understand the ML lifecycle: from data collection and labeling to model evaluation, deployment, and monitoring for drift.

## 🎯 Why It Matters
AI is shifting from a "Research Project" to a "Product Requirement."
1. **Uncertainty Management**: They bridge the gap between "Deterministic" business expectations and "Probabilistic" model realities.
2. **Evaluation Strategy**: They define what "Good" looks like for a model (e.g., "90% Precision vs 85% Recall") based on the user's pain point.
3. **Loop Integrity**: They ensure the product captures "User Feedback" as a high-quality "Label" to retrain and improve the model over time.

## 🏗️ How to Apply It
1. **Model Evaluation (Offline & Online)**: Move beyond simple accuracy to metrics like **Precision, Recall, F1-Score, and Latency**.
2. **Human-in-the-Loop (HITL)**: Design workflows where humans review and correct model outputs to improve quality.
3. **AI UX Design**: Use "Reasoning Disclosure" and "Graceful Degradation" to maintain user trust when the model is uncertain.
4. **Data Flywheels**: Build features that naturally encourage users to provide "Ground Truth" (e.g., "Was this answer helpful?").
5. **Compute/Accuracy Trade-offs**: Decide when to use a massive LLM (GPT-4) vs. a small, fast fine-tuned model (Llama-3).

## 📦 Real-World Example
> **Grammarly — The "Tone Detection" PM — 2022**
> The AI PM for Grammarly's tone detector didn't just "Add a feature." They had to define what "Tone" means mathematically. They coordinated the collection of millions of labeled sentences, managed the trade-off between a model that is "Too Bold" (high recall) vs. "Too Quiet" (high precision), and designed the UI that appears only when the model has >80% confidence. Their primary challenge was "Subjectivity": what one person calls "Confident," another calls "Aggressive." The AI PM solved this by building a feedback loop where users could "Dispute" the tone label, which was then used to fine-tune the model for different user segments.
> *PM Lesson: Deterministic code is 'Right or Wrong.' AI is 'Confident or Uncertain.' The AI PM manages the uncertainty.*

## ⚠️ Common Pitfalls
- **"Solution in Search of a Problem"**: Using a complex Neural Network for a problem that could be solved with a simple regex or a decision tree.
- **Ignoring Inference Costs**: Building a model that is 99% accurate but costs more to run than the user is willing to pay.
- **The "Black Box" Trap**: Launching a model without an explanation or a fallback, leading to user abandonment when it inevitably hallucinating.

## 🔗 Connected Concepts
- [[11 - Technical PM/Managing ML Models as Products|Managing ML Models as Products]] — the operational side of being an AI PM.
- [[07 - Metrics & Analytics/AI Metrics|AI Metrics]] — the "Scorecard" for an AI PM.
- [[09 - AI UX Patterns/UX MOC|UX MOC]] — how to design interfaces for probabilistic products.
