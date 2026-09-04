# [QA-PLAN-20260904-001] Universal 64-Tool Discovery & Health Crawler Test Plan

## Plan Metadata
- **Plan ID**: `QA-PLAN-20260904-001`
- **Created Datetime**: `2026-09-04T08:35:00+07:00`
- **Last Updated**: `2026-09-04T08:35:00+07:00`
- **Type**: `Test Plan`
- **Parent Epic**: [QA-EPIC-20260904-002](file:///plans/epics/QA-EPIC-20260904-002-64-tool-discovery-health.md)
- **Priority**: `P0 - Blocker`
- **Status**: `READY`
- **Labels**: `[ai-native, data-driven, discovery, tier-1-crawler, p0-smoke]`
- **Target URL**: `https://kobenguyent.github.io/kobeanqautils/`

---

## 1. Strategy & Objectives
Verify that 100% of the 64 tools available in KobeanQAUtils resolve cleanly, render their expected title/header, produce zero unhandled JavaScript console errors, and are indexed in the global navbar autocomplete search dropdown.

## 2. Test Cases in Scope
- [QA-TC-20260904-017](file:///plans/test-cases/discovery/QA-TC-20260904-017-all-64-tools-health-crawl.md): Universal 64-Tool Discovery Health Crawler.
- [QA-TC-20260904-018](file:///plans/test-cases/discovery/QA-TC-20260904-018-navbar-search-autocomplete-index.md): Global Navbar Search Autocomplete Index.

## 3. Automation Implementation
- Script: `tests/discovery/all_tools_health_test.ts`
- Script: `tests/discovery/search_index_test.ts`
- Fixture: `fixtures/catalog.data.ts`
