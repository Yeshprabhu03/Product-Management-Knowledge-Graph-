---
tags: [strategy, growth, ai]
type: framework
branch: 13 - Frameworks & Models
related: ["Data as a Product Asset", "Feedback Loops", "Competitive Landscape"]
created: 2026-05-05
---

# Flywheel Thinking

## Definition
A concept where a business system is designed as a self-reinforcing loop. In AI, this is often called the Data Flywheel: More Users → More Data → Better Model → Better Product → More Users. Each turn of the wheel makes the product more defensible and the competitor's job harder.

## Why It Matters for PMs
In AI, the "Moat" is rarely the code; it's the data loop. PMs must design their products specifically to capture the "Turn" of the wheel, ensuring that every user interaction provides a signal that makes the next interaction better for everyone.

## How to Apply It
1. Identify the "Core Driver": What is the one thing that, if improved, brings more users? (e.g., Recommendation Accuracy).
2. Design the "Data Catch": How does the product naturally capture feedback from those users? (e.g., "Skip" or "Like").
3. Automate the "Model Update": Ensure there is a short path between receiving data and improving the model.
4. Measure the "Acceleration": Track how much faster the model improves as user volume increases.

## Real-World Example
> **TikTok — 2018 to Present**
> TikTok's dominance is built on a perfect AI Flywheel. Every second a user spends watching (or skipping) a video provides a high-signal data point. This data immediately feeds the recommendation model, which makes the next video more relevant. Better videos keep users on the app longer, which attracts more creators, which provides more data. This loop allowed TikTok to break through the "Network Effect" moat of YouTube and Facebook in less than 3 years.
> *PM Lesson: A flywheel that turns faster than the competition's is the only sustainable moat in the AI era.*

## Common Pitfalls
- Building a product that doesn't capture feedback, leaving the "Wheel" disconnected.
- Not having the technical infrastructure to update the model quickly (the "Wheel" turns too slowly).
- Relying on "Static" data that doesn't get better as more users join.

## Connected Concepts
- [[04 - Data Strategy/Data as a Product Asset]] — the data captured by the flywheel is your primary asset
- [[04 - Data Strategy/Feedback Loops]] — are the specific technical components that power the flywheel
- [[01 - Strategy & Vision/Competitive Landscape]] — your flywheel determines your relative strength against competitors
