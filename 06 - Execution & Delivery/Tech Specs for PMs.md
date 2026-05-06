---
tags: execution technical
created: 2026-05-05
---

# 💻 Tech Specs for PMs

## 📖 Overview
While engineers write the Technical Design Document (TDD), PMs often need to contribute to or review "Tech Specs" to ensure technical decisions align with product goals. This note bridges that gap.

## 🎯 When Would I Use This?
1. **Pre-Planning**: To understand technical feasibility before finalizing a PRD.
2. **Trade-off Discussions**: When engineering says "this will take 3 months" and you need to understand why.
3. **Data Infrastructure**: When planning how events and metrics will be tracked.

## 🏗️ What PMs Should Look For
1. **Data Schema**: How will this data be stored? Is it scalable?
2. **APIs**: Are we building new endpoints or reusing old ones?
3. **Latency/Performance**: How fast will this be for the user?
4. **Error Handling**: What happens when something goes wrong? (The "Sad Path").

## 🛠️ Essential Technical Vocabulary for PMs
- **CRUD**: Create, Read, Update, Delete.
- **REST vs. GraphQL**: Different ways to structure APIs.
- **Microservices**: Breaking the app into smaller, independent pieces.
- **Tech Debt**: The "interest" paid on quick-and-dirty code.

---

## 🔗 Connected Concepts
- [[06 - Technical PM/Technical PM MOC|Technical PM MOC]]
- [[03 - Execution & Delivery/PRD Template|PRD Template]]
