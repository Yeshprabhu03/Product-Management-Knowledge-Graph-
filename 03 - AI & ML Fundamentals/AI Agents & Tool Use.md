---
tags: [ai, technical]
type: concept
branch: 03 - AI & ML Fundamentals
related: ["Large Language Models (LLMs)", "Copilot vs Autopilot", "Fallback Logic"]
created: 2026-05-05
---

# 🤖 AI Agents & Tool Use

## 📖 Definition
AI Agents are Large Language Models that have been given the ability to take actions in the real world using "Tools." Using frameworks like ReAct (Reason + Act), the model can "think" through a problem, decide which tool is needed (e.g., browse the web, run a code snippet, call a specific API), and then execute that action to reach a goal. Unlike a static chatbot, an agent can iterate: it sees the result of its action, reasons again, and continues until the task is complete. "Multi-agent" systems involve specialized agents (like an "Orchestrator" and several "Sub-agents") working together.

## 🎯 Why It Matters for PMs
For a Product Manager, agents represent the transition from "AI as a feature" to "AI as a worker." They matter because they:
1. **Solve End-to-End Tasks**: Moving beyond "generating text" to "completing a workflow" (e.g., "Research this company and add it to our CRM").
2. **Increase Utility**: Allowing the AI to bridge the gap between static knowledge and real-time, external data sources.
3. **Create New Interaction Paradigms**: Allowing users to specify a *goal* rather than a series of *steps*, shifting the UI toward "Intent-based" design.

## 🏗️ How to Apply It
1. **Define the Agent's Goal**: Clearly state the narrow objective the agent is trying to achieve (e.g., "Schedule a meeting").
2. **Select and Describe Tools**: Provide the model with a set of well-documented APIs or functions and clear instructions on when to use each.
3. **Implement the Reasoning Loop**: Use a framework (like LangChain or AutoGPT) to manage the ReAct loop, ensuring the model can handle multi-step tasks.
4. **Design for Safety and Control**: Implement "Guardrails" to prevent infinite loops, unauthorized actions, or high-cost tool calls.
5. **Develop the User Interface**: Decide how much of the agent's "thinking" to show the user (transparency) and where to include "Human-in-the-loop" checkpoints for approval.

## 📦 Real-World Example
> **ChatGPT Plugins / GPT Store — 2023**
> When OpenAI launched plugins, they turned ChatGPT from a chatbot into an agent. A user could ask: "Plan a trip to Paris and book a flight." The model would reason that it needed the "Expedia" tool, call the API to find flights, and then present the options to the user. The core product value shifted from the model's internal knowledge to its ability to **route and orchestrate** third-party services to complete a real-world task.
> *PM Lesson: The "Product" for an AI agent is often the quality of its tool selection and its ability to handle multi-step reasoning without getting lost.*

## ⚠️ Common Pitfalls
- **Infinite Loops**: The agent gets stuck in a cycle of reasoning and action that never terminates, wasting tokens and money.
- **Hallucinated Tool Calls**: The model tries to use a tool that doesn't exist or uses a tool with the wrong parameters, leading to system errors.
- **Lack of Transparency**: Users get frustrated when an agent is "thinking" in the background for a long time without showing any progress or intermediate results.

## 🔗 Connected Concepts
- [[03 - AI & ML Fundamentals/Large Language Models (LLMs)]] — the "brain" that powers the agent's reasoning.
- [[09 - AI UX Patterns/Copilot vs Autopilot]] — the design decision of how much autonomy to give the agent.
- [[06 - Execution & Delivery/Fallback Logic]] — the strategy for what happens when the agent fails to complete a task.
