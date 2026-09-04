# CodeceptJS Enterprise Best Practices & Quality Standard

## 1. Zero-Flakiness Guarantee (< 0.1% Flake Rate)

- **Strict Ban on Hardcoded Sleeps**: NEVER use `I.wait(seconds)` with arbitrary numbers. Use smart Playwright auto-waiting, `I.waitForElement()`, `I.waitForFunction()`, or `I.waitForText()`.
- **SPA Hash-Routing Synchronization**: Always wait for hash routes to update in the browser URL using `I.waitForFunction((expected) => window.location.hash.includes(expected), [expectedHash], timeoutSec)`.
- **Network & DOM Stability**: Ensure asynchronous operations complete before performing assertions on dynamically rendered DOM trees.
- **Auto-Retries**: Rely on the configured `retryFailedStep` plugin (retries: 2 with exponential backoff) for transient micro-network hiccups, NOT as a mask for bad locators.

## 2. Object-Oriented Page Object Model (POM) Rules

- **Strict Encapsulation**: All CSS/XPath locators MUST reside inside Page Objects or Component Objects. Never inline raw CSS/XPath selectors inside test scenario files (`*_test.ts`).
- **Base Inheritance**: All pages MUST inherit `BasePage`. All reusable widgets (navbars, modals, toasts, menus) MUST inherit `BaseComponent`.
- **Fluent & Semantic Action Methods**: Page object methods should represent business user intentions (`base64Page.encodeText(input)`, `uuidPage.generateV4(quantity)`), not low-level clicks.
- **Single Source of Truth**: When a UI locator changes, update it in exactly ONE place (the corresponding Page Object).

## 3. Data-Driven Testing (Fixtures Isolation)

- **Pure Separation of Concerns**: Test logic must be completely decoupled from test data.
- **CodeceptJS DataTables**: Use `new DataTable(['col1', 'col2'])` for parameterized tests. Iterate scenarios over `dataTable.filter(...)` or full tables.
- **Coverage Matrix**: Include valid inputs, invalid inputs, edge/boundary cases, unicode/multilingual strings, and stress payloads in `fixtures/`.

## 4. Assertion Standards

- Every test scenario MUST have at least one explicit, deterministic assertion.
- Assert on visible user-facing text, attributes, or states.
- In discovery suites, always assert zero unhandled console errors via `I.assertZeroConsoleErrors()`.
