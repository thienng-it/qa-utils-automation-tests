# [QA-EPIC-20260904-002] Universal 64-Tool Discovery & Health Crawler

## Epic Metadata
- **Epic ID**: `QA-EPIC-20260904-002`
- **Created Datetime**: `2026-09-04T08:35:00+07:00`
- **Last Updated**: `2026-09-04T09:45:00+07:00`
- **Type**: `Epic`
- **Priority**: `P0 - Critical`
- **Status**: `IN PROGRESS`
- **Labels**: `[discovery, crawler, catalog, health-check, tier-1]`
- **Lead Assignee**: Principal SDET & AI Agent
- **Target Milestone**: Release 2026.1

---

## 1. Objective & Scope
Guarantee 100% surface discovery and health across the entire portfolio of 64 interactive QA tools in KobeanQAUtils (`https://kobenguyent.github.io/kobeanqautils/`). Every route must load dynamically, render its expected title/header within SLA (< 10s), trigger zero unhandled JavaScript console exceptions, and be indexed by the global search bar (`#navbar-search`).

## 2. Key Deliverables
- [x] Canonical 64-tool route registry in `data/routes.data.ts`.
- [x] Parameterized CodeceptJS `dataTable` catalog fixture in `fixtures/catalog.data.ts`.
- [x] Autonomous crawler test suite in `tests/discovery/all_tools_health_test.ts`.
- [x] Global search index verification suite in `tests/discovery/search_index_test.ts`.
- [ ] Automated health gate integrated into CI pipeline.

## 3. Child Test Plans & Test Cases
- [QA-PLAN-20260904-001](file:///plans/test-plans/QA-PLAN-20260904-001-universal-crawler-plan.md)
- [QA-TC-20260904-017](file:///plans/test-cases/discovery/QA-TC-20260904-017-all-64-tools-health-crawl.md)
- [QA-TC-20260904-018](file:///plans/test-cases/discovery/QA-TC-20260904-018-search-autocomplete-index.md)
