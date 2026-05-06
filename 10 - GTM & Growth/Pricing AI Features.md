---
tags: [gtm, ai]
type: framework
branch: 10 - GTM & Growth
related: ["Cost Metrics", "Business Models", "AI Metrics"]
created: 2026-05-05
---

# Pricing AI Features

## Definition
Pricing AI Features is the strategic process of determining how to capture value from machine learning capabilities. Because AI has high variable costs (GPU/inference), traditional "flat" SaaS pricing can be dangerous. Common AI pricing models include: **Usage-based** (pay-per-token/query), **Tiered/Premium** (AI reserved for higher plans), **Add-on** (AI as a separate monthly fee), and **Value-based** (charging based on the outcome, e.g., "per successful resolution"). The goal is to align the price with the user's perceived value while maintaining a healthy gross margin.

## Why It Matters for PMs
For an AI Product Manager, pricing is a critical part of the "Product-Business Fit." It matters because:
1. **Protects Margins**: Ensuring that your most "power users" don't cost you more in inference fees than they pay in subscription.
2. **Drives Adoption**: Low-friction pricing (like a free tier) encourages users to build a habit with the AI, while higher tiers capture value from professionals.
3. **Signals Quality**: A separate "AI Add-on" can signal that the feature is premium and high-value, rather than just a standard tool.

## How to Apply It
1. **Analyze Your "Cost-to-Serve"**: Know exactly what a "heavy," "medium," and "light" user costs you in compute fees each month.
2. **Align Price with "Aha" Value**: If the value is "time saved," consider usage-based pricing; if the value is "peace of mind," consider a flat monthly subscription.
3. **Use "Credit" Systems**: Provide a fixed number of "AI credits" per month to manage costs while giving users a predictable bill.
4. **Test "Free-to-Paid" Gates**: Identify the specific point where users are most likely to pay for AI (e.g., after their 10th generated summary).
5. **Monitor Margin by Segment**: Ensure that enterprise customers aren't receiving "unlimited" AI that destroys the profit from their contract.

## Real-World Example
> **Intercom's "Fin" AI Bot — 2023**
> Intercom took a radical approach to AI pricing with their "Fin" bot. Instead of charging a flat monthly fee, they charge **$0.99 per successful resolution**. If the bot doesn't solve the customer's problem, the customer doesn't pay. This "Outcome-based" pricing perfectly aligns Intercom's incentives with their customers' goals. It also handles their high inference costs, as they only pay for the model when it successfully generates revenue.
> *PM Lesson: For high-cost AI, outcome-based or usage-based pricing is the safest way to scale without sacrificing gross margins.*

## Common Pitfalls
- **Underpricing the AI**: Including "Unlimited GPT-4" in a $10/month plan, which leads to immediate financial loss as usage grows.
- **Complex Token Pricing**: Charging users in "tokens" or "compute units" that they don't understand, which creates "billing anxiety" and reduces usage.
- **Ignoring the Competition**: Pricing your AI add-on so high that users stick with a generic, "good enough" free alternative from a competitor.

## Connected Concepts
- [[07 - Metrics & Analytics/Cost Metrics]] — the data that must drive all AI pricing decisions.
- [[01 - Strategy & Vision/Business Models]] — the broader revenue framework that AI pricing lives within.
- [[10 - GTM & Growth/Cost-to-Serve]] — the "floor" for any pricing conversation.
