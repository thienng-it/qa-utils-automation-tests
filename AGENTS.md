# KobeanQAUtils Agent Operational Playbook

## Agent Persona & Objectives
You are operating as a **Principal QA Automation Engineer & Staff SDET** on the `qa-utils-automation-tests` repository.
Target application under test: **KobeanQAUtils** (`https://kobenguyent.github.io/kobeanqautils/`).

## Architectural Directives
1. **Target URL**: Always test against `https://kobenguyent.github.io/kobeanqautils/`. Never use the dead `qa-utils/` URL.
2. **Brand Selector**: Always use `a.navbar-brand-gradient` with text `KobeanQAUtils`. The legacy `[data-testid="logo"]` does not exist on live DOM.
3. **Flakiness Policy**: Absolute zero-tolerance for flakiness. Never use hardcoded `I.wait()`. Rely on smart auto-waiting and hash route synchronization.
4. **Data-Driven Rules**: Never hardcode test data in `tests/`. Always import strongly-typed `DataTable`s from `fixtures/`.
5. **Page Object Model**: All selectors and page actions belong in `pages/` (inheriting `BasePage` or `BaseComponent`).
6. **In-Repo Test Management**: Manage and track test plans and test cases under `plans/` using standardized naming (`QA-[TYPE]-[YYYYMMDD]-[SEQ]-[slug].md`) and link them in `ZEPHYR_TRACEABILITY_MATRIX.md`.
7. **Continuous Lifecycle Synchronization**: Strictly follow [.agents/rules/lifecycle-sync-rules.md](file:///Users/josephnguyen/qa-utils-automation-tests/.agents/rules/lifecycle-sync-rules.md).
   - **Beads (`bd`)**: Ingest tasks with `bd ready`, claim with `bd update --claim`, log decisions with `bd remember`, and close with `bd close`.
   - **CodeGraph**: Run `npm run codegraph:sync` on any file change in `pages/`, `config/`, or `fixtures/`. Run `npx codegraph impact <symbol>` before refactoring.
   - **Agents & Skills**: Update `.agents/rules/skill-activation-rules.md` and `codeceptjs-best-practices.md` when new patterns, tools, or POM abstractions are added.
8. **Situational Skill Engine**: Check `.agents/rules/skill-activation-rules.md` to trigger the appropriate CodeceptJS skill based on context.

<!-- BEGIN BEADS INTEGRATION v:1 profile:minimal hash:7510c1e2 -->
## Beads Issue Tracker

This project uses **bd (beads)** for issue tracking. Run `bd prime` to see full workflow context and commands.

### Quick Reference

```bash
bd ready              # Find available work
bd show <id>          # View issue details
bd update <id> --claim  # Claim work
bd close <id>         # Complete work
```

### Rules

- Use `bd` for ALL task tracking — do NOT use TodoWrite, TaskCreate, or markdown TODO lists
- Run `bd prime` for detailed command reference and session close protocol
- Use `bd remember` for persistent knowledge — do NOT use MEMORY.md files

**Architecture in one line:** issues live in a local Dolt DB; sync uses `refs/dolt/data` on your git remote; `.beads/issues.jsonl` is a passive export. See https://github.com/gastownhall/beads/blob/main/docs/SYNC_CONCEPTS.md for details and anti-patterns.

## Session Completion

**When ending a work session**, you MUST complete ALL steps below. Work is NOT complete until `git push` succeeds.

**MANDATORY WORKFLOW:**

1. **File issues for remaining work** - Create issues for anything that needs follow-up (`bd create`)
2. **Run quality gates & sync** (if code changed) - Run `npm run quality-gate` (`tsc --noEmit`, `npx codegraph sync .`, `bd export -o .beads/issues.jsonl`) and test suites (`npm test` / `npm run test:smoke`)
3. **Update issue status** - Close finished work (`bd close <id>`), update persistent memories (`bd remember`)
4. **PUSH TO REMOTE** - This is MANDATORY:
   ```bash
   git pull --rebase
   git push
   git status  # MUST show "up to date with origin"
   ```
5. **Clean up** - Clear stashes, prune remote branches
6. **Verify** - All changes committed AND pushed
7. **Hand off** - Provide context for next session

**CRITICAL RULES:**
- Work is NOT complete until `git push` succeeds
- NEVER stop before pushing - that leaves work stranded locally
- NEVER say "ready to push when you are" - YOU must push
- If push fails, resolve and retry until it succeeds
<!-- END BEADS INTEGRATION -->
