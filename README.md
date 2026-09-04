# KobeanQAUtils Automation Testing Suite

[![E2E Quality Gate](https://github.com/thienng-it/qa-utils-automation-tests/actions/workflows/ci.yml/badge.svg)](https://github.com/thienng-it/qa-utils-automation-tests/actions)
[![Live Dashboard](https://img.shields.io/badge/Live-Executive%20Dashboard-blue.svg)](https://thienng-it.github.io/qa-utils-automation-tests/)
[![Application Under Test](https://img.shields.io/badge/AUT-KobeanQAUtils-green.svg)](https://kobenguyent.github.io/kobeanqautils/)
[![TypeScript 5.x](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![CodeceptJS 4.1](https://img.shields.io/badge/CodeceptJS-4.1-yellow.svg)](https://codecept.io/)
[![Playwright](https://img.shields.io/badge/Playwright-Chromium-green.svg)](https://playwright.dev/)
[![Allure 3 Report](https://img.shields.io/badge/Allure-Report%203-orange.svg)](https://allurereport.org/)
[![Accessibility WCAG 2.1 AA](https://img.shields.io/badge/A11y-WCAG%202.1%20AA-purple.svg)](https://www.w3.org/WAI/WCAG21/quickref/)

Enterprise-grade, AI-native End-to-End (E2E) Test Automation Suite for **[KobeanQAUtils](https://kobenguyent.github.io/kobeanqautils/)**. Designed for zero flakiness, 100% surface discovery across all 64 QA utility tools, data-driven parameterization, non-functional quality gates (Accessibility & Core Web Vitals), and continuous automated reporting.

---

## 📌 Quick Access Links

| Resource | Link | Description |
| :--- | :--- | :--- |
| 🌐 **Application Under Test (AUT)** | [`https://kobenguyent.github.io/kobeanqautils/`](https://kobenguyent.github.io/kobeanqautils/) | Live production web application |
| 📊 **Executive Test Dashboard** | [`https://thienng-it.github.io/qa-utils-automation-tests/`](https://thienng-it.github.io/qa-utils-automation-tests/) | Pass rates, 30-day historical trends & daily Allure reports |
| 🚀 **GitHub Actions CI/CD** | [GitHub Actions Pipeline](https://github.com/thienng-it/qa-utils-automation-tests/actions) | Live pipeline status, logs & downloadable artifacts |
| 📋 **Zephyr Traceability Matrix** | [ZEPHYR_TRACEABILITY_MATRIX.md](plans/ZEPHYR_TRACEABILITY_MATRIX.md) | Living mapping between Epics, Test Plans & Scenarios |

---

## ⚡ Quick Start (Setup in 3 Minutes)

### Prerequisites
- **Node.js**: `v20.x` or higher (`v22 LTS` recommended).
- **npm**: `v10.x` or higher.
- **Git**: Installed and configured.

### 1. Clone & Install
```bash
# Clone repository
git clone https://github.com/thienng-it/qa-utils-automation-tests.git
cd qa-utils-automation-tests

# Install NPM dependencies
npm install

# Install Playwright Chromium browser binaries
npx playwright install chromium
```

### 2. Verify Compilation
Ensure TypeScript compiles with zero errors:
```bash
npm run typecheck
```

---

## 🧪 How to Run Tests Locally (Manual Runbook)

### 1. Standard Test Commands

| Command | Suite | Purpose | Typical Time |
| :--- | :--- | :--- | :--- |
| `npm run test:smoke` | **Smoke Suite** | Critical P0 sanity tests across core navigation and tools | ~20 - 30s |
| `npm run test:regression` | **Regression Suite** | Comprehensive functional tests with data-driven matrices | ~45 - 60s |
| `npm run test:discovery` | **Discovery Crawler** | Scans all 64 utility tools & verifies zero console errors | ~12 - 15s |
| `npm run test:all` | **Full Battery** | Runs all 114+ test scenarios end-to-end | ~1.5 mins |
| `npm run test:a11y` | **Accessibility** | Automated WCAG 2.1 AA audits via `@axe-core/playwright` | ~15s |
| `npm run test:performance`| **Performance** | Core Web Vitals (DOM Complete, Load Event, DOM Node Count) | ~10s |
| `npm run test:stress` | **Stress & Endurance**| 1,000 UUID generation & rapid multi-tool navigation | ~15s |
| `npm run test:parallel` | **Parallel Execution**| Executes test battery across 2 concurrent workers | ~45s |

---

### 2. Running Specific Tests & Targeted Debugging

#### Run a Single Test File
```bash
npx codeceptjs run tests/home_test.ts --steps
```

#### Run Tests Matching a Specific Tag
```bash
# Run only smoke tests
npx codeceptjs run --grep "@smoke" --steps

# Run only regression tests
npx codeceptjs run --grep "@regression" --steps
```

#### Run a Specific Test Scenario by Name
```bash
npx codeceptjs run --grep "Should beautify and format valid JSON" --steps
```

#### Run in Headed Mode (Watch Browser UI in Real-Time)
By default, tests run in headless mode. To watch browser interactions live on your screen:
```bash
# Run all tests with visible Chromium browser window
npm run test

# Run a specific test with visible browser window
npm run test -- tests/home_test.ts

# Run with custom tag in headed mode
HEADLESS=false npx codeceptjs run --grep "@smoke" --steps
```

#### Run Against Different Environments / URLs
Override the base URL dynamically using the `BASE_URL` environment variable:
```bash
# Test against a local development server
BASE_URL=http://localhost:5173 npm run test:smoke

# Test against a staging or preview deployment
BASE_URL=https://staging.example.com/kobeanqautils/ npm run test:smoke
```

---

## 📈 Tracking & Monitoring Test Results

### 1. Automated Continuous Monitoring (GitHub Actions)
The automation pipeline runs automatically without manual intervention:
- **Daily Scheduled Cron**:
  - **Early Morning (6:00 AM ICT / 23:00 UTC)**: Full test suite execution & daily report publishing.
  - **Afternoon (6:00 PM ICT / 11:00 UTC)**: Full test suite execution & daily report publishing.
- **Code Changes**: Every `push` and `pull_request` merged to `main`.
- **Manual Trigger**: Team members can trigger a run at any time:
  1. Navigate to [GitHub Actions](https://github.com/thienng-it/qa-utils-automation-tests/actions/workflows/ci.yml).
  2. Click **Enterprise E2E Automation Pipeline** in the left sidebar.
  3. Click **Run workflow** -> Select `main` -> Click **Run workflow**.

---

### 2. Live Executive Dashboard (GitHub Pages)
The latest test metrics and historical trends are automatically published to:
👉 **[https://thienng-it.github.io/qa-utils-automation-tests/](https://thienng-it.github.io/qa-utils-automation-tests/)**

What you can track on the dashboard:
- **Summary Cards**: Latest total tests, passed count, failure count, skipped count, and overall pass rate %.
- **30-Day Historical Trend Bar Chart**: Visual pass/fail trajectory over the last 30 daily runs.
- **Reports Table**: Direct one-click access to static Allure reports for each calendar day.

---

### 3. Generating & Viewing Reports Locally

#### Allure 3 Interactive Visual Report
Generate a rich, interactive HTML report with execution timelines, step-by-step logs, screenshots, and videos:
```bash
# 1. Generate static Allure report from local test output
npm run report:allure

# 2. Launch local Allure server to view in your browser
npx allure open output/allure-report
```

---

### 4. Failure Diagnostics & Debugging Artifacts
When a test fails, the framework automatically captures comprehensive forensic data under `./output/`:

| Artifact | Location | How to Inspect |
| :--- | :--- | :--- |
| **Failure Screenshots** | `output/*.failed.png` | Open directly in any image viewer |
| **Video Recordings** | `output/videos/*.webm` | Open in browser or media player (e.g. VLC) |
| **Playwright Traces** | `output/trace/*.zip` | View step-by-step DOM snapshots with:<br>`npx playwright show-trace output/trace/<file>.zip` |
| **Clean Execution Logs**| `output/test-clean.log`| Plain-text terminal logs with ANSI color codes stripped |

In GitHub Actions, failure diagnostics are automatically packaged and downloadable from the **Summary** tab under **Artifacts** (`failure-diagnostics`).

---

## 🗂️ Project & Directory Structure

```
qa-utils-automation-tests/
├── .github/workflows/ci.yml # GitHub Actions pipeline (Daily cron, CI gates, gh-pages deploy)
├── config/                  # Environment & centralized locator configurations
│   ├── env.config.ts        # Base URL, headless toggle, timeouts, slow-mo, artifacts
│   └── locators.config.ts   # Centralized UI locators (Navbar, Buttons, Forms, Toasts)
├── dashboard/               # Executive dashboard web portal deployed to GitHub Pages
│   └── index.html           # Trend charts, KPI cards, and daily report index
├── fixtures/                # Strongly-typed data-driven test matrices (DataTables)
│   ├── catalog.data.ts      # Canonical 64-tool registry for crawler
│   ├── base64.data.ts       # ASCII, Unicode diacritics, and emoji vectors
│   ├── json.data.ts         # Valid & malformed JSON payloads
│   ├── jwt.data.ts          # HMAC SHA-256 tokens & expired tokens
│   ├── timestamp.data.ts    # Epoch boundary vectors (1970, Y2K, 2038)
│   ├── uuid.data.ts         # UUID versions (v1, v4, v7) and batch sizes
│   └── hash.data.ts         # Cryptographic hash verification vectors
├── pages/                   # Object-Oriented Page Object Model (POM)
│   ├── base/                # BasePage and BaseComponent abstractions
│   ├── components/          # Reusable fragments (NavBar.ts, Toast.ts)
│   ├── HomePage.ts          # Landing portal & hero banner
│   ├── ExplorePage.ts       # 64-Tool catalog explore grid
│   ├── Base64Page.ts        # Base64 encode/decode tool
│   ├── JsonFormatterPage.ts # JSON Prettify/Minify tool
│   ├── JwtPage.ts           # JWT debugger claims & expiry
│   ├── TimestampPage.ts     # Unix timestamp converter
│   ├── ColorPage.ts         # Color converter hex/rgb
│   ├── HashPage.ts          # Hash generator
│   └── UuidPage.ts          # UUID generator
├── plans/                   # In-Repo Test Management System (Zephyr-compatible)
│   ├── epics/               # Standardized Epics (QA-EPIC-*)
│   ├── test-plans/          # Test Plans linking Epics to Scenarios (QA-PLAN-*)
│   ├── test-cases/          # Granular Test Cases (QA-TC-*)
│   └── ZEPHYR_TRACEABILITY_MATRIX.md # Complete bidirectional traceability matrix
├── tests/                   # CodeceptJS Scenario Test Suites
│   ├── home_test.ts         # Core brand, theme toggle, and navbar search tests
│   ├── discovery/           # 64-tool universal crawler & zero-console-error checks
│   ├── e2e/                 # Functional E2E tests (converters, generators)
│   ├── accessibility/       # WCAG 2.1 AA audits via @axe-core/playwright
│   ├── performance/         # Core Web Vitals performance budgets
│   └── stress/              # High-volume UUID generation & endurance tests
├── codecept.conf.ts         # Master CodeceptJS configuration
├── package.json             # NPM dependencies & test execution scripts
└── tsconfig.json            # TypeScript configuration
```

---

## 🛡️ Best Practices & Quality Standards

1. **Zero Tolerance for Hardcoded Waits**:
   Never use `I.wait(seconds)`. Always rely on Playwright's automatic smart waiting or explicit condition synchronization (`waitForElement`, `waitForFunction`).
2. **Strict Page Object Encapsulation**:
   Test files (`tests/`) must only describe high-level business flows and user actions. CSS selectors and DOM manipulation belong exclusively in `pages/`.
3. **Externalized Test Data**:
   Never hardcode test payloads inside scenario bodies. Import strongly-typed parameter matrices from `fixtures/`.
4. **Console Hygiene**:
   Every page navigation verifies `I.assertZeroConsoleErrors()`, preventing silent unhandled JavaScript errors from reaching production.
5. **Quality Gate Before Pushing**:
   Always verify type safety and AST synchronization before committing changes:
   ```bash
   npm run quality-gate
   ```

---

## 🤝 Need Help or Have Questions?

- **Issues & Defect Reports**: File a GitHub Issue under [thienng-it/qa-utils-automation-tests/issues](https://github.com/thienng-it/qa-utils-automation-tests/issues).
- **Test Management**: Review [plans/ZEPHYR_TRACEABILITY_MATRIX.md](plans/ZEPHYR_TRACEABILITY_MATRIX.md) to inspect coverage for any tool or scenario.