---
tags: technical concept
created: 2026-05-05
---

# 🔌 The PM Guide to APIs

## 💡 Overview
APIs (Application Programming Interfaces) are the glue of the modern web. For many B2B products, the **API IS the product** (e.g., Stripe, Twilio, Plaid).

## 🏗️ Core Principles
1. **Consistency**: Naming conventions and structures should be predictable.
2. **Backward Compatibility**: Never break a customer's integration. Use versioning (`/v1/`, `/v2/`).
3. **Documentation as UX**: For an API product, the documentation is the primary user interface.

## 🎯 Practical Application
- **API First Design**: Writing the API contract (OpenAPI/Swagger) before writing the code.
- **Webhooks**: How your product notifies other systems when something happens (e.g., a payment was successful).
- **Rate Limiting**: Preventing one user from crashing the system by limiting their requests.

---

## 🔗 Connected Concepts
- [[03 - Execution & Delivery/Tech Specs for PMs|Tech Specs for PMs]]
- [[09 - Case Studies/Slack - Product-Led Growth|Slack (API Ecosystem)]]
