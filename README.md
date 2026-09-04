# KobeanQAUtils Enterprise Automation Testing Framework

[![E2E Quality Gate](https://github.com/thienng-it/qa-utils-automation-tests/actions/workflows/ci.yml/badge.svg)](https://github.com/thienng-it/qa-utils-automation-tests/actions)
[![TypeScript 5.x](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![CodeceptJS 4.1](https://img.shields.io/badge/CodeceptJS-4.1-yellow.svg)](https://codecept.io/)
[![Playwright](https://img.shields.io/badge/Playwright-Chromium-green.svg)](https://playwright.dev/)
[![Allure 3 Report](https://img.shields.io/badge/Allure-Report%203-orange.svg)](https://allurereport.org/)
[![Accessibility WCAG 2.1 AA](https://img.shields.io/badge/A11y-WCAG%202.1%20AA-purple.svg)](https://www.w3.org/WAI/WCAG21/quickref/)

Enterprise-grade, AI-native, data-driven End-to-End (E2E) Test Automation Framework for **KobeanQAUtils** (`https://kobenguyent.github.io/kobeanqautils/`). Built by Principal QA Automation Engineers to deliver zero-flakiness, 100% surface discovery across all 64 tools, parameterized edge-case batteries, non-functional quality gates (A11y & Core Web Vitals), and complete in-repo JIRA/Zephyr traceability.

---

## 🏛️ Architectural Overview

```
qa-utils-automation-tests/
├── .agents/                 # AI Agent operational plugins, MCP configs & situational rule engines
│   ├── mcp_config.json      # Dual MCP server configuration (CodeceptJS MCP)
│   ├── rules/               # Rule engine triggering CodeceptJS skills dynamically
│   └── skills/              # Official CodeceptJS skills (Core, POM, Data-Driven, Best Practices, A11y)
├── .cursor/                 # Cursor AI IDE MCP definitions
├── config/                  # Environment & Locators Configuration
│   ├── env.config.ts        # Multi-environment targets (local, staging, prod), timeouts, slow-mo
│   └── locators.config.ts   # Centralized reusable locator repository (Navbar, Forms, Buttons, Toasts)
├── plans/                   # In-Repo JIRA/Zephyr Test Management System
│   ├── epics/               # Standardized Epics (QA-EPIC-YYYYMMDD-SEQ-slug.md)
│   ├── test-plans/          # Test Plans linking Epics to Scenarios (QA-PLAN-YYYYMMDD-SEQ-slug.md)
│   ├── test-cases/          # Granular Test Cases (QA-TC-YYYYMMDD-SEQ-slug.md)
│   └── ZEPHYR_TRACEABILITY_MATRIX.md # Living 100% bidirectional traceability matrix
├── pages/                   # Strict Object-Oriented Page Object Model (POM)
│   ├── base/                # Abstract BasePage and BaseComponent contracts
│   ├── components/          # Reusable UI fragments (NavBar, Toast)
│   ├── HomePage.ts          # Landing portal & hero interactions
│   ├── ExplorePage.ts       # 64-Tool catalog explore grid
│   ├── UuidPage.ts          # UUID generator tool interactions
│   ├── Base64Page.ts        # Base64 encode/decode tool interactions
│   ├── JsonFormatterPage.ts # JSON Prettify/Minify tool interactions
│   ├── JwtPage.ts           # JWT debugger claims & expiry interactions
│   ├── TimestampPage.ts     # Unix timestamp converter interactions
│   ├── ColorPage.ts         # Color converter hex/rgb interactions
│   └── HashPage.ts          # Cryptographic hash generator interactions
├── fixtures/                # Isolated, strongly-typed CodeceptJS DataTables
│   ├── catalog.data.ts      # Canonical 64-tool registry for discovery
│   ├── base64.data.ts       # ASCII, Unicode, emoji, Vietnamese diacritics
│   ├── json.data.ts         # Valid & malformed JSON payloads
│   ├── jwt.data.ts          # Valid HMAC SHA-256 tokens & expired tokens
│   ├── timestamp.data.ts    # Epoch boundaries (1970, Y2K, Leap Day, 2038)
│   ├── uuid.data.ts         # Quantities & version parameters
│   └── hash.data.ts         # SHA-256, SHA-512, SHA-1 RFC vectors
├── tests/                   # CodeceptJS BDD Scenario Test Suites
│   ├── home_test.ts         # Brand, random quote, theme toggle, nav groups
│   ├── discovery/           # 64-tool crawler & search index verification
│   ├── e2e/                 # Functional E2E (converters, generators, specialized)
│   ├── accessibility/       # Automated WCAG 2.1 AA audits via @axe-core/playwright
│   ├── performance/         # Core Web Vitals (DOM Complete, Load Event, DOM Node Count)
│   └── stress/              # 1,000 UUID generation & 10-tool rapid navigation benchmarks
├── output/                  # Test artifacts (videos, traces, screenshots, Allure report)
└── codecept.conf.ts         # Master CodeceptJS & Playwright configuration
```

---

## 🚀 Quick Start Guide

### Prerequisites
- **Node.js**: >= 20.x (Node 22 LTS recommended)
- **npm**: >= 10.x
- **Chromium / Playwright Dependencies**: `npx playwright install chromium`

### Installation
```bash
# Clone the repository
git clone https://github.com/thienng-it/qa-utils-automation-tests.git
cd qa-utils-automation-tests

# Install dependencies
npm install

# Verify TypeScript compilation (0 errors guaranteed)
npm run typecheck
```

---

## 🧪 Test Execution Runbook

| Command | Purpose | SLA / Target |
| :--- | :--- | :--- |
| `npm run typecheck` | Strict TypeScript type validation | 0 compilation errors |
| `npm run test:smoke` | Fast P0 smoke test battery (75 scenarios) | < 25 seconds |
| `npm run test:discovery` | Universal 64-tool discovery & zero-console-error crawler | ~13 seconds |
| `npm run test:regression` | Complete functional and data-driven regression suite | ~45 seconds |
| `npm run test:a11y` | Automated WCAG 2.1 AA accessibility audit | 0 critical/serious violations |
| `npm run test:performance`| Core Web Vitals DOM Complete & Load Event budgets | DOM < 3s, Load < 5s |
| `npm run test:stress` | 1,000 UUID generation & rapid navigation endurance | 0 memory crashes |
| `npm run test:all` | Complete full-spectrum test battery (114+ scenarios) | < 1.5 minutes |
| `npm run report:allure` | Generate static Allure 3 HTML report from results | `./output/allure-report` |

### Headed Mode (for visual debugging)
```bash
# Run tests with visible Chromium browser
npm run test -- --grep "Should beautify and format valid JSON"
```

---

## 📊 Enterprise 3-Tier Reporting & Monitoring

This framework implements a 3-tier reporting architecture designed for engineers, engineering managers, and CI/CD pipelines:

### 1. Tier 1: Real-Time GitHub Step Summary
During CI execution, test summaries, durations, and pass/fail metrics are rendered directly into the GitHub Actions run summary tab with Markdown tables.

### 2. Tier 2: Allure Report 3
Generates rich interactive visual analytics with step-by-step logs, failure screenshots, DOM video captures, and Playwright execution traces:
```bash
# Generate and open the Allure report locally
npm run report:allure
npx allure open output/allure-report
```

### 3. Tier 3: Artifact Debugging Bundle
On every failure, CodeceptJS automatically captures:
- **High-Resolution PNG Screenshots**: Saved in `output/*.failed.png`.
- **Full Video Recordings**: Saved in `output/videos/*.webm`.
- **Playwright Trace Files**: Saved in `output/trace/*.zip` (viewable via `npx playwright show-trace <trace.zip>`).

---

## 📋 In-Repo JIRA & Zephyr Traceability

Track and monitor all test cases directly in source control using our standardized Zephyr conventions:

- **Epics**: `plans/epics/QA-EPIC-YYYYMMDD-[SEQ]-[slug].md`
- **Test Plans**: `plans/test-plans/QA-PLAN-YYYYMMDD-[SEQ]-[slug].md`
- **Test Cases**: `plans/test-cases/[category]/QA-TC-YYYYMMDD-[SEQ]-[slug].md`
- **Living Matrix**: Consult [plans/ZEPHYR_TRACEABILITY_MATRIX.md](plans/ZEPHYR_TRACEABILITY_MATRIX.md) for 100% bidirectional traceability between tickets, Page Objects, Fixtures, and Beads tasks.

---

## 🤖 AI-Native Integration

This repository is optimized for autonomous AI agents and pair-programming:
- **Beads Issue Tracker (`bd`)**: In-repo persistent memory graph tracking work items and epics. Run `bd ready` or `bd status`.
- **CodeGraph (`@colbymchenry/codegraph`)**: In-repo AST indexing linking Page Objects to test definitions.
- **Situational Rules Engine**: `.agents/rules/skill-activation-rules.md` guides AI assistants to follow CodeceptJS best practices and eliminate flakiness.

---

## 🛡️ Best Practices & Quality Directives

1. **Zero-Tolerance for Flakiness**: Never use hardcoded `I.wait()`. Always synchronize using dynamic DOM state watchers (`waitForElement`, `waitForFunction`).
2. **Strict Page Object Encapsulation**: Test scenarios under `tests/` contain only high-level business flows; all CSS/XPath locators belong in `pages/`.
3. **Data-Driven Rules**: Never hardcode test data in test specs. Always import parameter matrices from `fixtures/`.
4. **Console Hygiene**: Every crawler and smoke test asserts `I.assertZeroConsoleErrors()`, guaranteeing zero uncaught runtime exceptions in production.