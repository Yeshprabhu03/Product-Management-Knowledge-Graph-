---
tags: [ai, technical]
type: concept
branch: 03 - AI & ML Fundamentals
related: ["RAG (Retrieval Augmented Generation)", "Data Pipelines", "Types of ML Problems"]
created: 2026-05-05
---

# 🗺️ Embeddings & Vector Databases

## 📖 Definition
**Embeddings** are numerical representations of meaning where words, sentences, or documents are converted into high-dimensional vectors (arrays of numbers). In this "vector space," items with similar meanings are positioned close to each other. **Vector Databases** (such as Pinecone, Milvus, or pgvector) are specialized systems designed to store, index, and retrieve these vectors based on semantic similarity rather than traditional keyword matching. This technology is the backbone of modern semantic search, recommendation systems, and RAG architectures.

## 🎯 Why It Matters for PMs
For a Product Manager, understanding embeddings is critical for:
1. **Improving Search and Discovery**: Moving beyond "exact match" to find what the user *meant*, not just what they *typed*.
2. **Building Recommendation Engines**: Finding "similar items" (products, jobs, content) by looking at their proximity in the embedding space.
3. **Scaling AI Features**: Allowing the product to efficiently search through millions of documents in milliseconds to find the context for an LLM prompt.

## 🏗️ How to Apply It
1. **Select an Embedding Model**: Choose a model (like OpenAI's `text-embedding-3` or open-source alternatives) that matches your domain and language.
2. **Process Your Data**: Convert your text, images, or products into vectors and store them in a vector database.
3. **Implement Semantic Retrieval**: When a user performs a search, convert their query into a vector and use the database to find the "nearest neighbors."
4. **Tune for Relevance**: Adjust the "distance metric" (e.g., Cosine Similarity) and retrieval parameters to find the right balance of precision and recall.
5. **Monitor for Latency at Scale**: As your database grows from thousands to millions of vectors, work with engineering to implement indexing strategies like HNSW to maintain speed.

## 📦 Real-World Example
> **LinkedIn Job Matching — 2022**
> LinkedIn uses embeddings to match candidates to job postings. A job titled "Software Engineer" and a candidate profile that says "Full Stack Developer" might not share many keywords, but their embeddings will be very close in vector space. By switching from keyword-only search to embedding-based semantic matching, LinkedIn increased its job application rate by over 30%, as users were finally seeing roles that matched their actual skills rather than just their titles.
> *PM Lesson: Embeddings allow you to solve the "vocabulary problem" where users and systems use different words to describe the same thing.*

## ⚠️ Common Pitfalls
- **Confusing Semantic with Keyword Search**: Semantic search is great for meaning but can be worse for specific IDs, names, or brand terms; many products need a "hybrid" approach.
- **Ignoring Data Freshness**: If your embeddings aren't updated as your content changes, the "similar items" surfaced will become irrelevant or broken.
- **The "Black Box" Problem**: It can be difficult for a PM to explain *why* two items are considered similar in a high-dimensional space, making debugging relevance issues challenging.

## 🔗 Connected Concepts
- [[03 - AI & ML Fundamentals/RAG (Retrieval Augmented Generation)]] — the primary use case for vector databases in the LLM era.
- [[04 - Data Strategy/Data Pipelines]] — the systems that ensure data is correctly embedded and stored.
- [[03 - AI & ML Fundamentals/Types of ML Problems]] — how embeddings are used to solve ranking and clustering tasks.
