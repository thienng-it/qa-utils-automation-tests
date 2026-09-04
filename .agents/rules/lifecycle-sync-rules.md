# Beads, CodeGraph & Agents Lifecycle Synchronization Rules

This document defines the strict, binding operational rules for keeping **Beads (`bd`)**, **CodeGraph (`@colbymchenry/codegraph`)**, and the **Agent Ecosystem (`AGENTS.md`, `.agents/rules/`, `.agents/skills/`)** synchronized throughout the development lifecycle.

---

## Pillar 1: Beads (`bd`) Lifecycle Synchronization

Beads is the local Dolt-backed issue tracking and persistent memory engine for this repository.

### Triggers & Required Actions

| Lifecycle Event | Trigger Condition | Mandatory Command / Action |
|---|---|---|
| **Session Start / Task Intake** | Agent starts work or receives new user requirement | `bd ready`<br>`bd show <id>`<br>`bd update <id> --claim` |
| **New Discovery / Defect / Tech Debt** | Discovered bug, missing coverage, or sub-task | `bd create --title "<title>" --type [bug\|task\|feature] --epic <epic-id>`<br>*(Never use markdown TODO lists)* |
| **Architectural / Domain Fact Learned** | App URL, selector update, theme mechanism, auth token pattern | `bd remember <key> "<fact-description>"`<br>Verify with: `bd memories` or `bd recall <key>` |
| **Task Completion** | Feature, fix, or test suite passes quality gate | `bd close <id>` |
| **Pre-Commit / Passive Export** | Committing code to git | `npm run beads:sync`<br>*(Runs `bd export -o .beads/issues.jsonl`)* |
| **Session Completion / Handoff** | Ending work session | `git pull --rebase`<br>`git push`<br>*(Pushes both branch commits and `refs/dolt/data` to origin)* |

### Persistent Memory Keys Standard
Maintain the following standard keys in `bd remember`:
- `app-url`: Target AUT URL (`https://kobenguyent.github.io/kobeanqautils/`)
- `brand-locator`: Brand selector (`a.navbar-brand-gradient` with text `KobeanQAUtils`)
- `theme-mechanism`: Theme cycle toggle (`button.theme-cycle-btn` on `<html>`)
- `plans-hierarchy`: Zephyr/JIRA file structure under `plans/`
- `reporting-tiers`: Multi-tier reporting pipeline configuration
- `flakiness-rules`: Auto-waiting and hash routing standards

---

## Pillar 2: CodeGraph AST Intelligence Lifecycle

CodeGraph maintains the SQLite-backed Abstract Syntax Tree (AST), symbol registry, and caller/callee dependency graph for instant agent navigation and impact analysis.

### Triggers & Required Actions

| Lifecycle Event | Trigger Condition | Mandatory Command / Action |
|---|---|---|
| **Structural Code Modification** | Any addition, rename, or deletion in `pages/`, `config/`, `fixtures/`, or `steps_file.ts` | `npm run codegraph:sync`<br>*(Runs `npx codegraph sync .`)* |
| **Pre-Refactoring Impact Analysis** | Before modifying a base class, shared component, or locator constant | `npx codegraph impact <SymbolName>`<br>`npx codegraph callers <SymbolName>`<br>*(Identify all dependent test suites before breaking changes)* |
| **Test Scope Identification** | Changed source files needing targeted test runs | `npx codegraph affected [files...]` |
| **Pre-Commit Quality Gate** | Before staging changes for commit | `npm run quality-gate`<br>Verify: `npm run codegraph:status` reports `✓ Index is up to date` |

---

## Pillar 3: Agent Ecosystem (`AGENTS.md` & `.agents/`) Lifecycle

The Agent Ecosystem contains behavioral rules, situational skill activation engines, and MCP configurations that govern how AI SDETs operate.

### Triggers & Required Actions

| Lifecycle Event | Trigger Condition | Mandatory File to Update |
|---|---|---|
| **New Module / Page Object Added** | New tool added to `pages/` (e.g., MarkdownPreviewPage) | 1. Update `pages/index.ts` re-exports.<br>2. Update `.agents/rules/skill-activation-rules.md` route mapping.<br>3. Run `npm run codegraph:sync`. |
| **Flakiness or DOM Pattern Learned** | Discovered timing nuance, modal animation, or selector change | 1. Update `.agents/rules/codeceptjs-best-practices.md`.<br>2. Update `AGENTS.md` Architectural Directives if repository-wide.<br>3. Record in `bd remember flakiness-rules ...`. |
| **New Testing Capability or Tooling** | Added new MCP server, plugin, or CodeceptJS helper | 1. Update `.agents/mcp_config.json`.<br>2. Update or create skill in `.agents/skills/<skill-name>/SKILL.md`.<br>3. Update `package.json` scripts. |
| **New Environment / Locator Paradigm** | Centralized locators or env configs modified | 1. Update `config/env.config.ts` or `config/locators.config.ts`.<br>2. Update JSDoc docstrings for human & agent readability. |

---

## Pillar 4: Unified Quality Gate & Enforcement

All three pillars are enforced through the unified quality gate command:

```bash
npm run quality-gate
```

This single command automatically:
1. Validates TypeScript strict types: `tsc --noEmit`
2. Syncs CodeGraph AST index: `npx codegraph sync .`
3. Exports active Beads Dolt issues to `.beads/issues.jsonl`

### Git Hooks Integration
Git hooks are managed via `bd hooks install`. The `.git/hooks/pre-commit` and `pre-push` hooks ensure that Beads and code integrity are verified before changes can be committed or pushed.
