---
tags: [responsible-ai, compliance]
type: concept
branch: 08 - Responsible AI
related: ["Privacy & Compliance", "Transparency to Users", "Explainability (XAI)"]
created: 2026-05-05
---

# 🇪🇺 EU AI Act

## 📖 Definition
The EU AI Act is the world's first comprehensive legal framework for artificial intelligence, designed to ensure that AI systems used in the EU are safe, transparent, and under human control. It follows a **Risk-based Approach**, categorizing AI systems into four levels: **Unacceptable Risk** (banned), **High Risk** (strictly regulated), **Limited Risk** (transparency obligations), and **Minimal Risk** (no regulation). For PMs, "High Risk" systems (e.g., critical infrastructure, education, employment) face the most intense requirements, including mandatory conformity assessments and human oversight.

## 🎯 Why It Matters for PMs
For a Product Manager, the EU AI Act is the "GDPR of AI." It matters because:
1. **Determines Technical Architecture**: High-risk systems must be designed for "human oversight" and "explainability" from day one.
2. **Influences Market Entry**: Non-compliance can lead to fines of up to €35M or 7% of global turnover, and the inability to sell in the massive EU market.
3. **Sets Global Standards**: Similar to GDPR, many companies are adopting EU AI Act standards globally to simplify their operations and "future-proof" their products.

## 🏗️ How to Apply It
1. **Classify Your System's Risk**: Determine if your AI falls into the "High Risk" category (e.g., hiring tools, credit scoring, or critical infrastructure).
2. **Implement Data Governance**: Ensure your training and testing data meets the high standards for quality and bias mitigation required by the Act.
3. **Build for Transparency**: Develop "Instructions for Use" and UI patterns that help users understand the system's purpose and limitations.
4. **Ensure Human Oversight**: Design the product so that a human can intervene, override, or shut down the AI system at any time.
5. **Establish a Compliance Registry**: Maintain detailed technical documentation and "logs" of system performance and incidents as required for High-Risk systems.

## 📦 Real-World Example
> **A Global HR Tech Company — 2024**
> An HR company building an AI tool to rank job applicants discovered that their product is classified as **"High Risk"** under the EU AI Act. This changed their roadmap from focusing on "new features" to focusing on "compliance features." They had to spend two quarters building a "Human-in-the-loop" approval dashboard and a detailed logging system to track why the AI ranked certain candidates higher, ensuring they could pass a conformity assessment before launching in Germany and France.
> *PM Lesson: Regulation is a "dependency" in your roadmap; for High-Risk AI, compliance is a prerequisite for revenue.*

## ⚠️ Common Pitfalls
- **Ignoring the Risk Tier**: Assuming your product is "Minimal Risk" when it actually touches a regulated area like "Employment" or "Biometrics."
- **Lack of Documentation**: Failing to keep the technical logs and "Data Lineage" records required for High-Risk systems, which makes them illegal to operate in the EU.
- **Ignoring "General Purpose AI" Rules**: Thinking the Act only applies to small models, while forgetting that massive LLMs have their own specific transparency and systemic risk obligations.

## 🔗 Connected Concepts
- [[04 - Data Strategy/Privacy & Compliance]] — the broader regulatory landscape for user data.
- [[08 - Responsible AI/Transparency to Users]] — the specific UX requirements mandated by the "Limited Risk" and "High Risk" tiers.
- [[08 - Responsible AI/Explainability (XAI)]] — the technical capability required to fulfill the Act's transparency mandates.
