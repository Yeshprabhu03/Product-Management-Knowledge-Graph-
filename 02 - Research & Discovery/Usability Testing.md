---
tags: [research, ux]
type: concept
branch: 02 - Research & Discovery
related: ["User Interviews", "Surveys", "Continuous Discovery"]
created: 2026-05-05
---

# Usability Testing

## Definition
Usability Testing is the process of evaluating a product or feature by observing real users as they attempt to complete specific tasks. Tests can be **Moderated** (where a researcher guides the user) or **Unmoderated** (where the user completes tasks on their own via a remote tool). The primary goal is to identify points of friction, confusion, or mental model mismatches. Key metrics gathered during testing include **Task Completion Rate**, **Time-on-Task**, **Error Rate**, and **Subjective Satisfaction Score**.

## Why It Matters for PMs
For a Product Manager, usability testing is the ultimate reality check. It helps:
1. **Reduce Development Risk**: Identifying major UI/UX issues in a prototype before the engineering team writes any production code.
2. **Understand Mental Models**: Seeing if users understand how the product is "supposed" to work or if they are confused by the terminology or navigation.
3. **Prioritize Fixes**: Providing clear evidence of which friction points are causing the most frustration and should be addressed first.

## How to Apply It
1. **Define Task Scenarios**: Create realistic goals for the user to achieve (e.g., "Find and delete the most recent invoice") rather than telling them exactly what buttons to click.
2. **Recruit External Participants**: Ensure you are testing with people who are not familiar with the product; testing with coworkers often produces skewed results.
3. **Use the "Think-Aloud" Protocol**: Encourage users to narrate their thoughts and frustrations as they move through the interface.
4. **Identify Friction Points**: Look for "stumble" moments — places where the user hesitates, makes a mistake, or expresses confusion.
5. **Synthesize into Actionable Fixes**: Group the findings into themes and work with design and engineering to prioritize the most critical improvements.

## Real-World Example
> **Dropbox — 2008**
> In their early testing, the Dropbox team realized that users were struggling to find their files after they had "synced" them. The users' mental model of "syncing" was inconsistent — some thought it meant the files were "gone" from their computer, others couldn't find the web interface. By observing these struggles, the team renamed key folders to match user language and added clearer visual indicators of sync status, which reduced their support ticket volume by 35%.
> *PM Lesson: Usability testing often reveals that your biggest "product" problems are actually simple "language" or "navigation" problems.*

## Common Pitfalls
- **Leading the Participant**: Giving hints or "helping" the user when they get stuck, which prevents you from seeing the real point of failure.
- **Testing with the "Wrong" Users**: Testing with experts when your goal is to optimize the onboarding for new users.
- **Fixing the UI Instead of the Problem**: Changing a button color when the real issue is that the user doesn't understand the underlying concept of the feature.

## Connected Concepts
- [[02 - Research & Discovery/User Interviews]] — the qualitative research that helps you define the tasks for usability testing.
- [[02 - Research & Discovery/Continuous Discovery]] — making usability testing a regular, weekly habit for the entire product team.
- [[09 - AI UX Patterns/AI Onboarding]] — a specific area of the product that requires intense and frequent usability testing.
