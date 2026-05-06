---
tags: technical ai concept
created: 2026-05-05
---

# 📈 Managing ML Models as Products

## 💡 Overview
Unlike traditional software, Machine Learning models are "alive"—they decay, they learn, and they require constant monitoring. A PM for ML must think in terms of **Precision**, **Recall**, and **Dataset Drift**.

## 🏗️ Core Principles
1. **Data is the Product**: The model is only as good as the training data. Data strategy = Product strategy.
2. **Iterative Feedback Loops**: Building ways for users to provide feedback (thumbs up/down) that retrains the model.
3. **Probabilistic Success**: Accepting that the product won't be 100% correct all the time.

## 🎯 Practical Application
- **Precision vs. Recall Trade-offs**: In a medical AI, you want high Recall (don't miss anything). In a spam filter, you want high Precision (don't block good emails).
- **A/B Testing Models**: Running "Shadow Mode" where the new model makes predictions in the background before going live.

---

## 🔗 Connected Concepts
- [[06 - Technical PM/Generative AI Product Strategy|Gen AI Strategy]]
- [[05 - Metrics & Growth/Metrics MOC|Metrics MOC]]
