---
tags: [artifact, ai]
type: artifact
branch: 14 - Tools & Artifacts
related: ["Model Card", "Data Quality", "Data Collection & Labeling"]
created: 2026-05-05
---

# Datasheet for Datasets

## Definition
A Datasheet for Datasets is a standardized document that records the creation, composition, and intended use of a machine learning dataset. If a "Model Card" is a nutrition label for a model, a "Datasheet" is a detailed origin story for the data itself. It covers: **Motivation** (why was it collected?), **Composition** (what’s in it?), **Collection Process**, **Preprocessing** applied, **Intended Uses**, **Distribution Terms**, and a **Maintenance Plan**.

## Why It Matters
For a PM, a datasheet is the primary defense against "Garbage In, Garbage Out":
1. **Bias Identification**: It forces the team to document *how* the data was collected, which often reveals hidden representation biases before training even begins.
2. **Legal Protection**: In the era of data copyright lawsuits, having a clear record of "Data Rights" and "Collection Methodology" is an essential legal asset.
3. **Reproducibility**: It ensures that a new PM or Engineer can understand the "Source of Truth" without having to dig through old SQL queries or undocumented scripts.

## How to Apply It
1. **Section 1: Motivation**: Who funded the collection? What was the goal?
2. **Section 2: Composition**: How many instances? What are the labels? Are there missing values?
3. **Section 3: Collection**: How was the data acquired? (Scraping, manual labeling, sensor data?)
4. **Section 4: Preprocessing**: Was it cleaned, normalized, or anonymized?
5. **Section 5: Uses**: What tasks is this dataset *not* suitable for? (e.g., "Do not use this for medical diagnosis").
6. **Section 6: Distribution**: How is it shared? What are the license terms?

## Real-World Example
> **The Common Crawl Challenge — 2021**
> Common Crawl is the largest openly available web dataset, used to train almost every major LLM (including GPT-4). However, it has no "Official Datasheet." This means every team using it must independently audit it for toxic content, PII, and legal exposure. In contrast, internal teams at companies like **IBM** and **Google** that implemented "Mandatory Datasheets" for their fine-tuning datasets reported catching representation bias issues (e.g., a lack of non-US data) 3x earlier in the development cycle. They saved months of "retraining" time because the datasheet flagged the problem before the GPUs were even turned on.
> *PM Lesson: A dataset without a datasheet is a liability. What you don't document, you can't defend. Documentation is a "Shift Left" on quality control.*

## Common Pitfalls
- **Documenting the "What" but not the "How"**: Describing the data composition but omitting the "Collection Methodology," which is where most biases are introduced.
- **The "Static" Document**: Writing a datasheet once and never updating it as the dataset evolves with new labels or filtered content.
- **Treating it as a Formal "Checkbox"**: Filling out the datasheet after the model has already been shipped, which defeats the purpose of the audit.

## Connected Concepts
- [[14 - Tools & Artifacts/Model Card]] — the downstream artifact that relies on the accuracy of the datasheet.
- [[04 - Data Strategy/Data Quality]] — the primary technical metric that datasheets aim to protect.
- [[04 - Data Strategy/Data Collection & Labeling]] — the process that must be documented in the datasheet.
