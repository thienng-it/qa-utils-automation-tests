# Living Zephyr Traceability Matrix

## Executive Summary
This document provides 100% bidirectional traceability between Business Requirements, JIRA Epics, Zephyr Test Cases, Automation Page Objects, Fixture DataTables, Test Scripts, and CI Quality Gates for **KobeanQAUtils**.

---

## 1. Traceability Summary by Functional Area

| Epic ID | Epic Title | Test Plan | Automated TCs | Automation Target | Primary Page Object | Fixture File |
| :--- | :--- | :--- | :---: | :--- | :--- | :--- |
| **QA-EPIC-20260904-001** | AI-Native Infrastructure | QA-PLAN-20260904-001 | 3 | CodeceptJS MCP & CodeGraph | `steps_file.ts` | N/A |
| **QA-EPIC-20260904-002** | 64-Tool Discovery & Health | QA-PLAN-20260904-001 | 2 | 64 Tools Surface & Search | `BasePage.ts` | `catalog.data.ts` |
| **QA-EPIC-20260904-003** | Data-Driven Converters | QA-PLAN-20260904-002 | 9 | Base64, JSON, JWT, Epoch, Color | `Base64Page`, `JsonPage`, `JwtPage` | `base64.data.ts`, `json.data.ts` |
| **QA-EPIC-20260904-004** | Data-Driven Generators | QA-PLAN-20260904-003 | 7 | UUID, Hash, Password, OTP | `UuidPage`, `HashPage` | `uuid.data.ts`, `hash.data.ts` |
| **QA-EPIC-20260904-005** | Spatial Navigation & Portals | QA-PLAN-20260904-004 | 3 | Home, Navbar, QA Palace | `HomePage`, `NavBar` | `testData.ts` |
| **QA-EPIC-20260904-006** | Specialized Interactive Flows | QA-PLAN-20260904-004 | 3 | CTFL Exam, Kanban, Checklists | `BasePage.ts` | `routes.data.ts` |
| **QA-EPIC-20260904-007** | Non-Functional Quality Gates | QA-PLAN-20260904-005 | 3 | WCAG AA, CWV Budgets, Stress | `steps_file.ts` | `Metrics.ts` |
| **QA-EPIC-20260904-008** | Enterprise 3-Tier Reporting | QA-PLAN-20260904-005 | 2 | Allure 3, Step Summary, Dashboard | N/A | `output/stats.json` |

---

## 2. Granular Zephyr Test Case Traceability Registry

| Ticket ID | Test Case Title | Priority | Tier | Automated Script | Page Object | Fixture Matrix | Beads Task |
| :--- | :--- | :---: | :---: | :--- | :--- | :--- | :--- |
| **QA-TC-20260904-001** | Base64 ASCII Encode & Decode | P0 | Tier 2 | `tests/e2e/converters/base64_test.ts` | `Base64Page.ts` | `fixtures/base64.data.ts` | `bd-task-tc-001` |
| **QA-TC-20260904-002** | Base64 Malformed Padding Error | P1 | Tier 2 | `tests/e2e/converters/base64_test.ts` | `Base64Page.ts` | `fixtures/base64.data.ts` | `bd-task-tc-002` |
| **QA-TC-20260904-003** | Base64 Unicode & Emoji Support | P2 | Tier 2 | `tests/e2e/converters/base64_test.ts` | `Base64Page.ts` | `fixtures/base64.data.ts` | `bd-task-tc-003` |
| **QA-TC-20260904-004** | JSON Beautify Indentation & Minify | P0 | Tier 2 | `tests/e2e/converters/json_test.ts` | `JsonFormatterPage.ts` | `fixtures/json.data.ts` | `bd-task-tc-004` |
| **QA-TC-20260904-005** | JSON Syntax Error Alert Banner | P1 | Tier 2 | `tests/e2e/converters/json_test.ts` | `JsonFormatterPage.ts` | `fixtures/json.data.ts` | `bd-task-tc-005` |
| **QA-TC-20260904-006** | JWT Valid Token Decode & Claims | P0 | Tier 2 | `tests/e2e/converters/jwt_test.ts` | `JwtPage.ts` | `fixtures/jwt.data.ts` | `bd-task-tc-006` |
| **QA-TC-20260904-007** | JWT Expired Token Status Badge | P1 | Tier 2 | `tests/e2e/converters/jwt_test.ts` | `JwtPage.ts` | `fixtures/jwt.data.ts` | `bd-task-tc-007` |
| **QA-TC-20260904-008** | Unix Timestamp Epoch <-> UTC ISO | P0 | Tier 2 | `tests/e2e/converters/timestamp_test.ts` | `TimestampPage.ts` | `fixtures/timestamp.data.ts`| `bd-task-tc-008` |
| **QA-TC-20260904-009** | Color Converter Synchronized HEX/RGB/HSL | P1 | Tier 2 | `tests/e2e/converters/color_test.ts` | `ColorPage.ts` | `fixtures/color.data.ts` | `bd-task-tc-009` |
| **QA-TC-20260904-010** | UUID v4 RFC 4122 Compliance | P0 | Tier 2 | `tests/e2e/generators/uuid_test.ts` | `UuidPage.ts` | `fixtures/uuid.data.ts` | `bd-task-tc-010` |
| **QA-TC-20260904-011** | UUID v1 Timestamp Structure | P1 | Tier 2 | `tests/e2e/generators/uuid_test.ts` | `UuidPage.ts` | `fixtures/uuid.data.ts` | `bd-task-tc-011` |
| **QA-TC-20260904-012** | UUID Batch 100 Uniqueness Check | P1 | Tier 2 | `tests/e2e/generators/uuid_test.ts` | `UuidPage.ts` | `fixtures/uuid.data.ts` | `bd-task-tc-012` |
| **QA-TC-20260904-013** | Hash SHA-256 RFC Test Vectors | P0 | Tier 2 | `tests/e2e/generators/hash_test.ts` | `HashPage.ts` | `fixtures/hash.data.ts` | `bd-task-tc-013` |
| **QA-TC-20260904-014** | Hash MD5 Empty String RFC Vector | P1 | Tier 2 | `tests/e2e/generators/hash_test.ts` | `HashPage.ts` | `fixtures/hash.data.ts` | `bd-task-tc-014` |
| **QA-TC-20260904-015** | Password Entropy & Character Bounds | P1 | Tier 2 | `tests/e2e/generators/password_test.ts` | `PasswordPage.ts` | `fixtures/password.data.ts` | `bd-task-tc-015` |
| **QA-TC-20260904-016** | OTP TOTP 6-Digit Secret Generation | P1 | Tier 2 | `tests/e2e/generators/otp_test.ts` | `OtpPage.ts` | `fixtures/otp.data.ts` | `bd-task-tc-016` |
| **QA-TC-20260904-017** | Universal 64-Tool Discovery Crawler | P0 | Tier 1 | `tests/discovery/all_tools_health_test.ts`| `BasePage.ts` | `fixtures/catalog.data.ts` | `bd-task-tc-017` |
| **QA-TC-20260904-018** | Global Navbar Search Autocomplete Index | P0 | Tier 1 | `tests/discovery/search_index_test.ts` | `NavBar.ts` | `fixtures/catalog.data.ts` | `bd-task-tc-018` |
| **QA-TC-20260904-019** | Homepage Brand & Random Quote Shuffle | P0 | Tier 2 | `tests/e2e/navigation/home_test.ts` | `HomePage.ts` | `data/testData.ts` | `bd-task-tc-019` |
| **QA-TC-20260904-020** | Navbar Theme Cycling (Dark/Light/Dim) | P1 | Tier 2 | `tests/e2e/navigation/navbar_test.ts` | `NavBar.ts` | `data/testData.ts` | `bd-task-tc-020` |
| **QA-TC-20260904-021** | QA Palace Portal Category Navigation | P1 | Tier 2 | `tests/e2e/navigation/palace_test.ts` | `PalacePage.ts` | `data/testData.ts` | `bd-task-tc-021` |
| **QA-TC-20260904-022** | CTFL v4 Practice Exam Scoring Flow | P1 | Tier 3 | `tests/e2e/specialized/ctfl_exam_test.ts`| `BasePage.ts` | `data/routes.data.ts` | `bd-task-tc-022` |
| **QA-TC-20260904-023** | Kanban Board Task Card Lifecycle | P1 | Tier 3 | `tests/e2e/specialized/kanban_test.ts` | `BasePage.ts` | `data/routes.data.ts` | `bd-task-tc-023` |
| **QA-TC-20260904-024** | Checklist State Persistence in LocalStorage| P1 | Tier 3 | `tests/e2e/specialized/checklists_test.ts`| `BasePage.ts` | `data/routes.data.ts` | `bd-task-tc-024` |
| **QA-TC-20260904-025** | Automated WCAG 2.1 AA Accessibility Audit | P1 | Tier 4 | `tests/accessibility/a11y_test.ts` | `steps_file.ts` | N/A | `bd-task-tc-025` |
| **QA-TC-20260904-026** | Core Web Vitals Performance Budget | P1 | Tier 4 | `tests/performance/cwv_test.ts` | `steps_file.ts` | `models/Metrics.ts` | `bd-task-tc-026` |
| **QA-TC-20260904-027** | Client-Side 10k UUID & 5MB JSON Stress | P1 | Tier 4 | `tests/stress/stress_test.ts` | `UuidPage.ts` | `fixtures/json.data.ts` | `bd-task-tc-027` |
