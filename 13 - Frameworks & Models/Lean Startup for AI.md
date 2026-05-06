---
tags: [strategy, process, ai]
type: framework
branch: 13 - Frameworks & Models
related: ["Continuous Discovery", "Experimentation", "Opportunity Solution Tree"]
created: 2026-05-05
---

#Lean Startup for AI

##Definition
The application of the "Build-Measure-Learn" loop to AI product development. It emphasizes validating user demand and the viability of an AI solution with the minimum possible investment, often using techniques like Wizard of Oz testing where humans simulate the AI's output.

##Why It Matters for PMs
Building custom ML models is expensive and slow. PMs should use Lean principles to prove that a user actually wants the automated outcome before hiring a data science team or spending months on model training. It de-risks the most expensive part of the AI roadmap.

##How to Apply It
1. Define the Hypothesis: "If we provide an AI summary of this data, users will save 10 mins per day."
2. Run a Wizard of Oz Test: Have a human manually write the summaries for a small group of users to see if it actually saves them time.
3. Use Off-the-shelf APIs: Validate the value with a generic LLM (like GPT-4) before building a custom, fine-tuned model.
4. Measure the "Aha Moment": Track if the automated result actually drives the desired user behavior.

##Real-World Example
> **Clipboard Health — 2023**
> Before building a complex machine learning algorithm for their nurse-to-shift matching system, Clipboard Health used a Lean/Wizard of Oz approach. They had human operators manually "match" nurses to shifts in the background. Once they proved that this "Matching" service significantly reduced hospital staffing shortages and that nurses were happy with the assignments, they only then invested the engineering resources to build the automated ML algorithm.
> *PM Lesson: Don't build an algorithm for a problem that humans haven't proven is worth solving.*

##Common Pitfalls
- Building a custom model before validating the "Job to be Done."
- Ignoring the cost of the "Wizard" (human) and not planning for how to scale it with AI.
- Over-engineering the "MVP" when a simple prompt-engineered prototype would suffice.

##Connected Concepts
- [[02 - Research & Discovery/Continuous Discovery]] — provides the "Learning" part of the lean loop
- [[07 - Metrics & Analytics/Experimentation]] — is the primary method for "Measuring" in the loop
- [[13 - Frameworks & Models/Opportunity Solution Tree]] — helps visualize the different "Lean" paths you can take to an outcome
