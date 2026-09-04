---
name: codeceptjs-core
description: Core syntax, Feature/Scenario structure, lifecycle hooks, tags, CLI options, and runner mechanics for CodeceptJS.
---

# CodeceptJS Core Skill

## Overview
CodeceptJS is a modern multi-backend BDD-style testing framework for NodeJS.

## Test Structure & Syntax
```typescript
Feature('Feature Title');

Before(({ I }) => {
    // Runs before every scenario in this feature
});

Scenario('Scenario Title', ({ I, pageObject }) => {
    // Step-by-step user interactions
}).tag('@smoke');
```

## Lifecycle Hooks
- `BeforeSuite`: Runs once before all scenarios in the file.
- `Before`: Runs before each scenario.
- `After`: Runs after each scenario.
- `AfterSuite`: Runs once after all scenarios in the file.

## Tagging & Execution
- `@smoke`: Critical path validation (< 1 minute).
- `@regression`: Full comprehensive test battery.
- `@a11y`: Accessibility compliance scans.
- Run by tag: `npx codeceptjs run --grep '@smoke'`
