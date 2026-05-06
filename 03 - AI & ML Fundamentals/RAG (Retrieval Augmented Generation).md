---
tags: [ai, technical]
type: concept
branch: 03 - AI & ML Fundamentals
related: ["Hallucination", "Embeddings & Vector Databases", "Data Pipelines"]
created: 2026-05-05
---

# RAG (Retrieval Augmented Generation)

## Definition
Retrieval Augmented Generation (RAG) is an architecture that combines the reasoning capabilities of a Large Language Model with the accuracy of a retrieval system. It works by first "retrieving" relevant documents or data from an external source (like a vector database) and then providing that context to the LLM to "generate" an answer. This allows the model to answer questions about proprietary data or current events that were not included in its original training set, significantly reducing hallucinations and improving factual accuracy.

## Why It Matters for PMs
For a Product Manager, RAG is the most important bridge between "General AI" and "Product Value" because it:
1. **Solves the Knowledge Gap**: Enables the AI to work with your company's private docs, customer data, or real-time news.
2. **Improves User Trust**: Allows the system to provide citations and links back to the source data, making the AI's answers verifiable.
3. **Controls Costs**: It is often significantly cheaper and faster to update a RAG database than it is to fine-tune a model on new data.

## How to Apply It
1. **Identify the Data Source**: Determine which proprietary documents or databases contain the "ground truth" the AI needs.
2. **Develop a Chunking Strategy**: Break large documents into smaller, semantically meaningful "chunks" that can be easily retrieved.
3. **Select a Retriever**: Choose an embedding model and a vector database that can quickly find the most relevant chunks based on a user's query.
4. **Draft the "System Prompt"**: Instruct the LLM to *only* use the provided context to answer the question and to cite its sources.
5. **Monitor and Tune**: Track retrieval quality (did we find the right docs?) separately from generation quality (did the LLM summarize them correctly?).

## Real-World Example
> **Notion AI — 2023**
> Notion AI uses a RAG architecture to power its "Q&A" feature. When a user asks a question like "What was the decision in last week's meeting?", the system doesn't rely on the LLM's general knowledge. Instead, it searches the user's specific Notion workspace for relevant meeting notes, retrieves the text, and feeds it into the model. This keeps sensitive data secure within the user's vault while still enabling the AI to provide accurate, workspace-specific answers.
> *PM Lesson: RAG is the best way to build "AI on your own data" while maintaining security and factual integrity.*

## Common Pitfalls
- **Poor Retrieval Quality**: If the retriever finds irrelevant or outdated documents, the LLM will generate a "correct-sounding" but useless answer.
- **Assuming RAG Eliminates Hallucination**: While it reduces the risk, the model can still misunderstand the retrieved context or ignore its instructions to stick to the provided text.
- **Ignoring Latency**: The two-step process (Retrieve + Generate) adds latency, which can degrade the user experience if not optimized.

## Connected Concepts
- [[03 - AI & ML Fundamentals/Hallucination]] — the primary problem that RAG is designed to solve.
- [[03 - AI & ML Fundamentals/Embeddings & Vector Databases]] — the technical infrastructure that makes RAG retrieval possible.
- [[04 - Data Strategy/Data Pipelines]] — the systems required to keep the RAG database up-to-date.
