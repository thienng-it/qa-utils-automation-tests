# CodeceptJS Situational Skill Activation Rules

This rule dictates the situational triggers to use each of the 6 official CodeceptJS skills at the right place, right time, and right situation.

## Situational Trigger Matrix

```
┌────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                 SITUATIONAL DECISION TRIGGER MATRIX                                    │
├───────────────────────┬─────────────────────────────────┬────────────────────────┬─────────────────────┤
│ Detected Context      │ Symptom / Trigger Signal        │ Skill to Activate      │ Prescribed Pattern  │
├───────────────────────┼─────────────────────────────────┼────────────────────────┼─────────────────────┤
│ Test Construction     │ Writing new Feature or Scenario │ codeceptjs-core        │ Use BDD scenario    │
│                       │ structuring tags & lifecycle    │                        │ with clean hooks    │
├───────────────────────┼─────────────────────────────────┼────────────────────────┼─────────────────────┤
│ Flaky Selector / Wait │ Stale element reference, element│ codeceptjs-playwright  │ Auto-waiting locator│
│                       │ not clickable, timeout crash    │                        │ + retryFailedStep   │
├───────────────────────┼─────────────────────────────────┼────────────────────────┼─────────────────────┤
│ UI Component Growth   │ Duplicate locators across tests │ codeceptjs-page-objects│ Inherit BasePage or │
│                       │ or untyped page interactions    │                        │ BaseComponent       │
├───────────────────────┼─────────────────────────────────┼────────────────────────┼─────────────────────┤
│ Matrix / Parameterized│ Repetitive tests across inputs, │ codeceptjs-data-driven │ Centralize Data-    │
│ Testing               │ valid/invalid payloads          │                        │ Tables in fixtures/ │
├───────────────────────┼─────────────────────────────────┼────────────────────────┼─────────────────────┤
│ Reporting / CI Defect │ Step summary, Allure video,     │ codeceptjs-plugins     │ Configure Allure &  │
│                       │ screenshot on fail, trace capture│                       │ HTML step artifacts │
├───────────────────────┼─────────────────────────────────┼────────────────────────┼─────────────────────┤
│ Anti-Pattern Detected │ Arbitrary I.wait(seconds) or    │ codeceptjs-best-       │ Replace with smart  │
│                       │ hardcoded sleeps found in code  │ practices              │ waitForElement/Func │
└───────────────────────┴─────────────────────────────────┴────────────────────────┴─────────────────────┘
```

## Situational Rules:

1. **`codeceptjs-core`**:
   - *When to use*: Initializing new test files, defining `Feature()` and `Scenario()`, applying `@smoke`, `@regression`, `@slow` tags, or using lifecycle hooks (`Before`, `After`, `BeforeSuite`).
   - *Forbidden*: Nesting scenarios or leaving untagged test suites.

2. **`codeceptjs-playwright`**:
   - *When to use*: Handling browser contexts, tracing, headless/headful configuration, cookie/storage clearing, network interception (`I.mockRoute`), or checking page errors (`page.on('pageerror')`).
   - *Forbidden*: Direct raw driver manipulation bypassing CodeceptJS helpers.

3. **`codeceptjs-page-objects`**:
   - *When to use*: Introducing a new page, modal, or component. Modifying existing element selectors.
   - *Forbidden*: Directly writing `I.click('//xpath')` in `*_test.ts`.

4. **`codeceptjs-data-driven`**:
   - *When to use*: Validating multiple inputs, boundary values, positive/negative paths, or multi-vector tables.
   - *Forbidden*: Hardcoding arrays of strings inside the test file instead of `DataTable` fixtures in `fixtures/`.

5. **`codeceptjs-plugins`**:
   - *When to use*: Configuring Allure Report 3, HTML Step Reporter, failure screenshots, video recordings, or `retryFailedStep`.
   - *Forbidden*: Disabling failure artifacts in CI.

6. **`codeceptjs-best-practices`**:
   - *When to use*: Code reviews, refactoring, fixing flakiness, or establishing lint/formatting rules.
   - *Forbidden*: Using `I.wait(n)` without a valid documented reason.
