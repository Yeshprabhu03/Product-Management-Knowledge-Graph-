---
tags: [technical, ai]
type: pattern
branch: 11 - Technical PM
related: ["The PM Guide to APIs", "Inference & Latency", "AI Agents & Tool Use"]
created: 2026-05-05
---

# 🔌 API Design for AI

## 📖 Definition
API Design for AI refers to the specialized techniques used to build interfaces that connect AI models to applications or to each other. Unlike traditional REST APIs, AI APIs must handle **Streaming Responses** (token-by-token), **Long-running Tasks** (async processing), and **Probabilistic Outputs**. A critical area is "Function Calling" (or Tool Use), where the API is designed so that a model can "understand" how to call it, requiring highly structured documentation and consistent error handling.

## 🎯 Why It Matters for PMs
For a Technical PM, the design of the AI API is the "Contract" that determines:
1. **User Experience Speed**: Whether a user sees results immediately (Streaming) or waits for a full generation (Non-streaming).
2. **System Composability**: How easily your AI feature can be integrated into other parts of the company's ecosystem or used as a "tool" by an AI agent.
3. **Model Reliability**: Ensuring that the model always receives the data it needs in the correct format to avoid "hallucinated" parameters.

## 🏗️ How to Apply It
1. **Enable Streaming by Default**: For LLM features, always design for Server-Sent Events (SSE) to minimize the perceived latency for the end-user.
2. **Design for "Function Calling"**: Write your API specifications (like OpenAPI/Swagger) with very clear descriptions and types so that LLMs can "read" and call them accurately.
3. **Implement Robust Error Handling**: AI can provide "messy" inputs; ensure your API has strong validation and returns clear, actionable errors when the AI sends something invalid.
4. **Use Asynchronous Patterns**: For high-latency tasks (like image generation), use a "Task ID" pattern where the API returns immediately and the user polls for the result.
5. **Versioning for Probabilistic Behavior**: When updating the model behind an API, use versioned endpoints so that existing integrations don't break when the model's "tone" or "reasoning" changes.

## 📦 Real-World Example
> **OpenAI's Function Calling — 2023**
> OpenAI revolutionized AI API design by introducing "Function Calling." Instead of a PM having to "parse" the AI's text output to find an address or a date, the API allows the model to output **Structured JSON** that perfectly matches a pre-defined schema. This moved the API design from "Text-in, Text-out" to "Intent-in, Data-out," making it 10x easier for PMs to build reliable integrations between LLMs and existing software systems.
> *PM Lesson: The best AI APIs are those that allow the model to "talk" to your software in a structured, predictable format.*

## ⚠️ Common Pitfalls
- **Missing Documentation for the AI**: Forgetting that if an AI is calling your API, the "description" field in your JSON schema is just as important as the code itself.
- **Ignoring Rate Limits**: Failing to design for the scenario where a single AI agent makes 100 API calls in a second, crashing your backend.
- **Synchronous-only Design**: Building an API that blocks the connection while the model "thinks," which leads to timeouts and a terrible user experience.

## 🔗 Connected Concepts
- [[11 - Technical PM/The PM Guide to APIs]] — the foundational knowledge of how APIs work.
- [[03 - AI & ML Fundamentals/Inference & Latency]] — the performance constraint that drives API design choices.
- [[03 - AI & ML Fundamentals/AI Agents & Tool Use]] — the primary "users" of specialized AI APIs.
