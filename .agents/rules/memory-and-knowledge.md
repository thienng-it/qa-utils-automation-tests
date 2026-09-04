# Beads & CodeGraph Memory and Knowledge Rules

## 1. Beads (`bd`) Persistent Memory Standard

- **Initialization**: Every project must have `.beads/` initialized via `bd init`.
- **Knowledge Retention**: Store key architectural facts using `bd remember <key> <value>`:
  - `app-url`: `https://kobenguyent.github.io/kobeanqautils/`
  - `brand-locator`: `a.navbar-brand-gradient` with text `KobeanQAUtils`
  - `theme-mechanism`: Cycling button `button.theme-cycle-btn` updating class on `<html>`
- **Task Synchronization**: Every JIRA/Zephyr ticket created in `plans/` must be mirrored as a task in Beads (`bd task add "QA-TC-..."`).
- **Liveness & Audit**: Before starting a new work item, query memory via `bd recall <key>`. Upon completing a task, mark it done via `bd task done <id>`.

## 2. CodeGraph AST Intelligence Standard

- **AST Indexing**: Index local code using `npx codegraph init .`.
- **Impact Analysis**: When modifying a Page Object or Base Class, query CodeGraph to identify all dependent test suites and callers before making breaking changes.
- **Knowledge Specs**: Keep `.agents/knowledge/` synchronized with system architecture, symbol maps, and route definitions.
