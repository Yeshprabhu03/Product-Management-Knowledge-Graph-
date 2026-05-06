---
tags: [strategy, business]
type: framework
branch: 13 - Frameworks & Models
related: ["Business Models", "Build vs Buy vs Fine-tune", "Flywheel Thinking"]
created: 2026-05-05
---

# Platform Thinking

## Definition
A strategy where a product is built not just as a standalone application, but as an infrastructure layer (often via APIs or SDKs) that allows external developers or internal teams to build their own solutions on top of it.

## Why It Matters for PMs
For AI, the "Platform" layer (the models and infrastructure) often captures more value than any single application. PMs must decide if they are building a "Point Solution" (an app for one problem) or a "Platform" (a capability for many problems), as this dictates the business model and technical architecture.

## How to Apply It
1. Identify the "Core Capability": What is the one thing your AI does best (e.g., translation, image generation)?
2. Design for External Use: Build clean, versioned APIs from Day 1.
3. Incentivize Developers: Provide documentation, SDKs, and a marketplace for others to find and use your platform.
4. Capture Value at the "Tax" Layer: Monetize based on API usage or a percentage of the value created on top of your platform.

## Real-World Example
> **OpenAI — 2022 to Present**
> OpenAI's most successful move was not launching ChatGPT, but launching the OpenAI API. By allowing millions of developers to build AI features into their apps, OpenAI captured the value of the "AI Boom" across every industry simultaneously. They didn't have to build a legal assistant, a medical summarizer, or a coding tool; they just provided the "Intelligence Infrastructure" (the platform) that everyone else paid to use.
> *PM Lesson: A successful platform lets other people do the hard work of finding product-market fit for you.*

## Common Pitfalls
- Building a platform before you have a successful "First App" to prove it works.
- Poor API design that makes it too hard for external developers to integrate.
- Failing to protect the platform's "Core Moat" while allowing others to build on it.

## Connected Concepts
- [[01 - Strategy & Vision/Business Models]] — platform thinking is a specific, high-leverage business model
- [[11 - Technical PM/Build vs Buy vs Fine-tune]] — is the decision that often leads to a platform strategy
- [[13 - Frameworks & Models/Flywheel Thinking]] — platforms create the strongest flywheels as more developers attract more users
