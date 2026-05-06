---
tags: [metrics, experimentation]
type: concept
branch: 07 - Metrics & Analytics
related: ["Experimentation", "Online vs Offline Evaluation", "AI Metrics"]
created: 2026-05-05
---

# 🎰 Multi-armed Bandits

## 📖 Definition
Multi-armed Bandits (MAB) is an adaptive experimentation framework that optimizes for a winning variant in real-time, unlike traditional A/B tests that split traffic equally until a fixed conclusion. Named after a gambler at a row of slot machines ("one-armed bandits"), the algorithm balances **Exploration** (trying different versions to find the best) and **Exploitation** (routing more traffic to the current leader). This significantly reduces the "opportunity cost" of showing a suboptimal version to users for the full duration of a test.

## 🎯 Why It Matters for PMs
For a Product Manager, Multi-armed Bandits are a powerful tool because they:
1. **Reduce "Waste"**: Minimizing the number of users who see a "losing" variant, which is critical for high-traffic or high-revenue features.
2. **Speed Up Optimization**: Allowing the system to "find the winner" and capitalize on it much faster than a standard two-week A/B test.
3. **Handle Dynamic Winning**: Useful for content that decays quickly (like news or trending topics), where the "best" version might change hourly.

## 🏗️ How to Apply It
1. **Identify the Right Use Case**: Choose MAB for features with many variants (e.g., headlines, thumbnails) where you care more about "maximizing the outcome" than "causal proof."
2. **Define the Reward**: Clearly specify what metric the algorithm should optimize for (e.g., clicks, watch time, or conversion).
3. **Set the Exploration Budget**: Determine how much traffic you are willing to "waste" on testing new variants (epsilon-greedy or Thompson sampling).
4. **Integrate with the Product Flow**: Ensure the UI can dynamically switch variants based on the algorithm's real-time decisions.
5. **Monitor for Stability**: Watch for "Feedback Loops" where the algorithm prematurely picks a winner because of a small, early spike in data.

## 📦 Real-World Example
> **Netflix Thumbnail Optimization — 2016**
> Netflix doesn't run a standard 2-week A/B test to find the best artwork for a new show. If they have 5 different thumbnails, they use a **Multi-armed Bandit** to test them. Within hours, the algorithm detects if "Thumbnail A" is performing better than the others and starts showing it to 80% of the audience. This allows Netflix to maximize views on a new release immediately, rather than waiting 14 days to decide which artwork is best.
> *PM Lesson: Use Multi-armed Bandits when the "cost of being wrong" during the experiment is high, or when the "winner" is likely to change over time.*

## ⚠️ Common Pitfalls
- **No Causal Inference**: Bandits are great for "finding the winner," but they make it much harder to calculate *why* a variant won or what the specific "lift" was compared to a control.
- **Premature Convergence**: The algorithm "locks in" on a variant too early because of a random fluke in the first 100 users, missing the actual long-term winner.
- **Ignoring Context**: A standard bandit treats all users the same; for personalized products, you may need a "Contextual Bandit" that considers user attributes.

## 🔗 Connected Concepts
- [[07 - Metrics & Analytics/Experimentation]] — the traditional framework that MAB aims to optimize.
- [[07 - Metrics & Analytics/Online vs Offline Evaluation]] — the process of measuring the real-world "reward" for the bandit.
- [[07 - Metrics & Analytics/AI Metrics]] — the success indicators that the bandit uses as its objective function.
