---
tags: [ai, technical]
type: concept
branch: 03 - AI & ML Fundamentals
related: ["Build vs Buy vs Fine-tune", "Cost Metrics", "AI Metrics"]
created: 2026-05-05
---

# ⚡ Inference & Latency

## 📖 Definition
**Inference** is the process of a trained model making a real-time prediction or generation based on new input. **Latency** is the time it takes for that process to complete and return a result to the user. In AI products, latency is often the primary bottleneck for user experience. Key factors influencing latency include model size (parameters), hardware (GPU/CPU), quantization (compressing the model), and batching. For PMs, managing the "Latency Budget" is a critical architectural decision that often requires trading off accuracy for speed.

## 🎯 Why It Matters for PMs
For a Product Manager, inference and latency are crucial because:
1. **Dictates UX Design**: A 200ms latency allows for real-time autocomplete; a 5-second latency requires a loading spinner or an async "we'll email you" workflow.
2. **Impacts Retention**: Research shows that even small increases in latency significantly decrease user engagement and task completion rates.
3. **Controls Costs**: Faster inference typically requires less compute time per query, which directly improves the product's gross margins at scale.

## 🏗️ How to Apply It
1. **Set a Latency SLA**: Define the maximum acceptable time for each user action (e.g., "Search results must appear in <500ms").
2. **Benchmark Different Models**: Test the trade-off between a "Large" model (higher accuracy, higher latency) and a "Small" model (lower accuracy, lower latency).
3. **Implement "Streaming"**: For LLMs, show the output token-by-token so the user *perceives* the system as fast even if the total generation takes several seconds.
4. **Optimize the Stack**: Work with engineering to explore techniques like **Quantization** (reducing precision to gain speed) or using specialized inference engines (like vLLM).
5. **Monitor Latency at P99**: Look beyond the "Average" latency to see the "Worst-case" (99th percentile) experience, which is often where users actually churn.

## 📦 Real-World Example
> **GitHub Copilot — 2023**
> GitHub Copilot faces an extreme latency constraint: code suggestions must appear within milliseconds of a user typing. To achieve this, they don't use their most powerful model (GPT-4) for inline autocomplete; it's simply too slow. Instead, they use a **distilled, specialized model** optimized for speed. They reserve the more accurate, slower GPT-4 for the "Copilot Chat" feature, where users are willing to wait a few seconds for a complex architectural explanation.
> *PM Lesson: The right model for the job is often determined by the user's latency tolerance, not just the model's accuracy score.*

## ⚠️ Common Pitfalls
- **Using the Largest Model Everywhere**: Over-engineering simple tasks with massive models that make the product feel sluggish and expensive.
- **Ignoring the Network Latency**: Forgetting that the "total" latency includes the model time *plus* the time to send data over the internet, especially for mobile users.
- **Not Testing Under Load**: A model that is fast for one user may slow down significantly when thousands of users are making requests simultaneously.

## 🔗 Connected Concepts
- [[11 - Technical PM/Build vs Buy vs Fine-tune]] — how latency influences the decision to build your own model vs. use an API.
- [[07 - Metrics & Analytics/Cost Metrics]] — the direct relationship between inference speed and infrastructure cost.
- [[07 - Metrics & Analytics/AI Metrics]] — tracking how latency affects product-level success metrics like activation and retention.
