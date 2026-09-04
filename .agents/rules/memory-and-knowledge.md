# Beads & CodeGraph Memory and Knowledge Rules

> **Binding Reference**: For complete lifecycle event tables, triggers, and enforcement standards, see [.agents/rules/lifecycle-sync-rules.md](file:///Users/josephnguyen/qa-utils-automation-tests/.agents/rules/lifecycle-sync-rules.md).

## 1. Beads (`bd`) Persistent Memory Standard

- **Initialization & Tracking**: Local issue tracking is governed by `.beads/` backed by a local Dolt DB.
- **Task Claiming & Lifecycle**:
  - Review ready work: `bd ready`
  - Inspect task details: `bd show <id>`
  - Claim task: `bd update <id> --claim`
  - Mark task complete: `bd close <id>`
  - Never use markdown TODO lists; create tasks with `bd create --title "..." --type [bug|task|feature]`.
- **Knowledge Retention (`bd remember`)**: Store and recall architectural facts using `bd remember <key> "<value>"`:
  - `app-url`: `https://kobenguyent.github.io/kobeanqautils/`
  - `brand-locator`: `a.navbar-brand-gradient` with text `KobeanQAUtils`
  - `theme-mechanism`: Cycling button `button.theme-cycle-btn` updating class on `<html>`
  - `plans-hierarchy`: Zephyr/JIRA file structure under `plans/`
  - `reporting-tiers`: Multi-tier reporting pipeline configuration
  - `flakiness-rules`: Auto-waiting and hash routing standards
- **Sync & Remote Push**: Always run `npm run beads:sync` (`bd export -o .beads/issues.jsonl`) before commits. Session completion requires `git push` which synchronizes both code and `refs/dolt/data`.

## 2. CodeGraph AST Intelligence Standard

- **Continuous Indexing**: Run `npm run codegraph:sync` (`npx codegraph sync .`) whenever Page Objects, Components, Locators, or test fixtures are created or modified.
- **Status Verification**: Run `npm run codegraph:status` (`npx codegraph status .`) to confirm that the index is up to date with zero unindexed files.
- **Impact Analysis**: When modifying a Page Object, Component, or base class:
  - Run `npx codegraph impact <symbol>` to see downstream impact.
  - Run `npx codegraph callers <symbol>` to discover all referencing test suites.
  - Run `npx codegraph affected [files...]` to select which tests must be run.

## 3. Agent Ecosystem & Rules Standard

- **Rule Alignment**: Whenever a new architectural pattern, locator standard, or custom actor method is added:
  - Update `AGENTS.md` Directives.
  - Update `.agents/rules/skill-activation-rules.md` and `.agents/rules/codeceptjs-best-practices.md`.
  - Update `.agents/mcp_config.json` if new MCP tooling is integrated.
