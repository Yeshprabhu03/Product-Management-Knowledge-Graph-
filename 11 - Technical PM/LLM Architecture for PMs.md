---
tags: [technical, ai]
type: concept
branch: 11 - Technical PM
related: ["Large Language Models (LLMs)", "Inference & Latency", "Model Selection Criteria"]
created: 2026-05-05
---

# LLM Architecture for PMs

## Definition
LLM Architecture for PMs refers to the high-level understanding of how a Large Language Model system is structured, from the user's prompt to the final output. This includes the **Frontend** (UI), the **Orchestration Layer** (managing prompts, memory, and tool use), the **Model Layer** (the LLM itself), and the **Data Layer** (Vector DBs and RAG). For a PM, the "architecture" is less about the internal neural weights and more about how these components interact to deliver speed, accuracy, and cost-efficiency.

## Why It Matters for PMs
For a Technical PM, understanding the architecture is essential to:
1. **Manage Latency**: Identifying which part of the stack (retrieval vs. inference) is causing delays for the user.
2. **Optimize Costs**: Deciding where to use "smaller" models in the workflow to reduce the total token spend.
3. **Ensure Reliability**: Designing the "Orchestration" logic to handle model failures, timeouts, and hallucinations gracefully.

## How to Apply It
1. **Map the Request/Response Flow**: Draw a diagram showing how a user's query travels through the retriever, the prompt template, and the model.
2. **Select the Orchestration Framework**: Decide whether to use a library like **LangChain** or **LlamaIndex** to manage the complexity of multi-step AI tasks.
3. **Design the Prompt Pipeline**: Create a system for versioning and testing prompts independently of the model code.
4. **Implement Caching**: Work with engineering to store common AI responses in a cache to reduce latency and cost for frequently asked questions.
5. **Establish Monitoring**: Set up tracing (using tools like LangSmith or Arize) to see exactly where "reasoning" goes wrong in the multi-component architecture.

## Real-World Example
> **Jasper AI — 2022**
> Jasper's architecture is more than just a wrapper around GPT-4. They built a sophisticated **Orchestration Layer** that includes specialized "Brand Voice" memory and a proprietary template engine. When a user asks for a blog post, Jasper doesn't just send one prompt. It first retrieves the user's style guide (Data Layer), injects it into a multi-step prompt sequence (Orchestration), and then uses a series of model calls to generate and then "polish" the text. This architecture is what allowed them to charge a premium over a generic chatbot.
> *PM Lesson: Your product's value is often in the "Orchestration" of several AI components, not just the base model.*

## Common Pitfalls
- **Over-complicating the Stack**: Using 10 different tools and databases for a simple feature that could have been handled with a single model call.
- **Ignoring the "Middle Layer"**: Failing to invest in prompt management and orchestration, leading to "spaghetti code" that is impossible to debug or version.
- **Hard-coding Model Logic**: Building an architecture that is so tightly coupled to one specific model provider that you can't easily switch when a better/cheaper one arrives.

## Connected Concepts
- [[03 - AI & ML Fundamentals/Large Language Models (LLMs)]] — the core component of the architecture.
- [[03 - AI & ML Fundamentals/Inference & Latency]] — the primary performance metric of the architecture.
- [[11 - Technical PM/Model Selection Criteria]] — the logic used to pick the right components for the architecture.
