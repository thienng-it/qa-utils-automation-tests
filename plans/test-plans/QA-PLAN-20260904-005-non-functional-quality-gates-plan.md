# [QA-PLAN-20260904-005] Non-Functional Quality Gates Test Plan

## Plan Metadata
- **Plan ID**: `QA-PLAN-20260904-005`
- **Created Datetime**: `2026-09-04T08:35:00+07:00`
- **Last Updated**: `2026-09-04T09:45:00+07:00`
- **Parent Epic**: `QA-EPIC-20260904-005`
- **Type**: `Test Plan`
- **Status**: `ACTIVE / PASSING`
- **Execution Target**: Live Production (`https://kobenguyent.github.io/kobeanqautils/`)

---

## 1. Test Strategy
Audit non-functional quality gates including web accessibility compliance, performance budgets, and client-side memory stability to prevent regressions in user experience and accessibility.

## 2. Test Scope & Coverage
- **WCAG 2.1 AA Audits**: Automated zero-violation enforcement using `@axe-core/playwright` across Homepage, UUID Generator, Base64, and JSON Formatter.
- **Core Web Vitals & Performance**: DOM Complete (< 3000ms), Load Event (< 5000ms), DOM node count (< 3500 elements).
- **Stress & Stability**: 1,000 UUID generation load test and 10-tool rapid navigation endurance test.

## 3. Automation Assets
- Suites:
  - `tests/accessibility/a11y_test.ts` (4 scenarios)
  - `tests/performance/cwv_test.ts` (2 scenarios)
  - `tests/stress/stress_test.ts` (2 scenarios)
