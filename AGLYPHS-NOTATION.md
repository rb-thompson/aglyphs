# AGLYPHS-NOTATION.md

**Aglyphs** — Compact symbolic notation system for Grok-powered agentic teams and operator stacks.

*Version 0.2.0 — 2026-03-25*

## 1. Core Primitives (Building Blocks)

These are the foundational symbols. Use superscripts for types (`Λˣ` = Grok model) and subscripts for instances (`𝔾₁`).

| Glyph | Name              | Meaning                                      | Grok/Team Usage                  |
|-------|-------------------|----------------------------------------------|----------------------------------|
| 𝔾     | Grok Agent        | xAI Grok-powered autonomous agent            | Main reasoning agent             |
| 𝔸     | General Agent     | Any non-Grok agent                           | Worker / specialist agents       |
| Λ     | LLM Core          | Reasoning / generation model                 | Brain (Λˣ = Grok model)          |
| 𝕋     | Tool              | External tool, API, or function              | Function calling / actions       |
| 𝕄     | Memory            | State / context store                        | 𝕄ˢ (short), 𝕄ˡ (long), 𝕄ᵛ (vector/RAG) |
| ⊙     | Perceiver         | Input / observation                          | User prompt or environment       |
| ▷     | Actor             | Output / action executor                     | Final response or tool result    |
| ⎈     | Planner           | Planning / task decomposition                | Hierarchical planning            |
| ⨁     | Agentic Operator  | Supervisor / router / orchestrator           | Central team controller          |
| ⊕     | Human-in-the-Loop | Human oversight / approval                   | Safety & critical decisions      |
| ⊛     | Environment       | External world / context                     | APIs, databases, real-world feedback |
| ⇄     | Collaboration Link| Peer-to-peer agent communication             | Team member interaction          |

## 2. Operators & Modifiers

### Flow Operators

| Glyph | Name         | Meaning                          |
|-------|--------------|----------------------------------|
| →     | Sequential   | Next step in a chain             |
| ⊕     | Parallel     | Concurrent execution             |
| ⇄     | Collaborate  | Agents communicate / negotiate   |
| ⇑     | Hierarchical | Operator delegates to subordinates |
| ⟳     | Loop / ReAct | Feedback cycle / iteration       |
| ⊚     | Reflect      | Self-critique or reflection step |
| ⊗     | Compose      | Combine modules inside one agent |

### Modifiers & Syntax

- `{goal: ...}` — Objective or constraint
- `[config]` — Sub-system or configuration scope
- Superscript: type (e.g. 𝕄ᵛ, Λˣ)
- Subscript: instance (e.g. 𝔾₁, 𝔸₂)
- `( )` — Internal execution flow

## 3. Ready-to-Use Patterns for Grok + Agentic Operator/Team

| # | Pattern Name                     | Aglyph Formula                                                                 | Description                                           |
|---|----------------------------------|--------------------------------------------------------------------------------|-------------------------------------------------------|
| 1 | Basic Grok ReAct Agent           | 𝔾[Λˣ ⊗ 𝕋] (⊙ → Λ → ⊚ → ▷) ⟳                                                  | Single Grok agent with tools, reflection, and looping |
| 2 | Grok as Central Agentic Operator | ⨁(𝔾) [Λˣ + 𝕄ˡ + 𝕋] ⇑ {team}                                                  | Grok acts as the supervisor/orchestrator              |
| 3 | Hierarchical Operator + Specialist Team | ⨁(𝔾) ⇑ {𝔸₁[research + 𝕄ᵛ], 𝔸₂[execution + 𝕋], 𝔸₃[analysis]}               | Grok Operator delegates to specialized agents         |
| 4 | Collaborative Grok-powered Team  | ⨁(𝔾) (⇄ 𝔾₁ ⇄ 𝔾₂ ⇄ 𝔸₃) [𝕄_shared] ⊕ 𝕋                                        | Grok + multiple agents collaborating with shared memory |
| 5 | Full Production Loop with Human Approval | 𝔾[Λˣ] → ⨁ → (⊙ → ⊚ → ⊕ → ▷) ⟳                                          | Grok workflow with reflection and human oversight     |
| 6 | Grok Operator with Shared Memory Team | ⨁(𝔾) [𝕄_shared + 𝕋] (⇄ 𝔸_team) ⟳                                        | Persistent memory across the entire team              |
| 7 | Parallel Research + Execution    | ⨁(𝔾) (𝔸_research ⊕ 𝔸_execution) → ▷                                          | Grok coordinates parallel subtasks                    |
| 8 | Reflection-Heavy Grok Agent      | 𝔾[Λˣ ⊗ 𝕄ˡ] (⊙ → Λ → ⊚ → ⊚ → ▷) ⟳                                            | Multiple reflection steps for high-quality output     |

## 4. Advanced Usage Tips

- **Nesting**: `⨁(𝔾[Λˣ]) ⇑ 𝔸[𝕄ᵛ ⊗ 𝕋]`
- **Constraints**: `𝔾{goal: "max quality"} [Λˣ]`
- **Shared State**: `[𝕄_shared]` at team level
- **Escape to text**: Use parentheses for complex subflows: `(𝔸₁ → 𝕋 → 𝔸₂)`

This notation is intentionally minimal. Add new glyphs only when they fill a clear gap.
