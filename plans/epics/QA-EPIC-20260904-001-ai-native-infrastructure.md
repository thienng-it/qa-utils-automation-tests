# [QA-EPIC-20260904-001] AI-Native Infrastructure & Dual MCP Integration

## Epic Metadata
- **Epic ID**: `QA-EPIC-20260904-001`
- **Created Datetime**: `2026-09-04T08:35:00+07:00`
- **Last Updated**: `2026-09-04T08:35:00+07:00`
- **Type**: `Epic`
- **Priority**: `P0 - Blocker`
- **Status**: `IN PROGRESS`
- **Labels**: `[ai-native, mcp, codegraph, beads, infrastructure]`
- **Lead Assignee**: Principal SDET & AI Agent
- **Target Milestone**: Phase 1

---

## 1. Objective & Scope
Establish the AI-Native foundational infrastructure enabling autonomous AI agents and human engineers to develop, run, inspect, and heal automation tests. Integrate the native CodeceptJS MCP server (`codeceptjs-mcp`), CodeGraph local AST intelligence (`@colbymchenry/codegraph`), Beads (`bd`) persistent memory graph, and 6 official CodeceptJS skills with an actionable situational rule engine.

## 2. Key Deliverables
- [x] Package dependency modernization (CodeceptJS 4.1, Allure, CodeGraph, axe-core).
- [ ] Beads (`bd`) workspace initialization and persistent memory ingestion.
- [ ] CodeGraph AST indexing of repository symbols and page objects.
- [ ] Dual MCP configuration in `.agents/mcp_config.json` and `.cursor/mcp.json`.
- [ ] Official CodeceptJS skills installed in `.agents/skills/`.
- [ ] Situational rules engine in `.agents/rules/` and `AGENTS.md`.

## 3. Child Test Plans & Test Cases
- [QA-PLAN-20260904-001](file:///plans/test-plans/QA-PLAN-20260904-001-universal-crawler-plan.md)
- [QA-TC-20260904-017](file:///plans/test-cases/discovery/QA-TC-20260904-017-all-64-tools-health-crawl.md)
