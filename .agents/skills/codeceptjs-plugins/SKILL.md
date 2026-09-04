---
name: codeceptjs-plugins
description: Integration of Allure Report 3, HTML Step Reporter, retryFailedStep, screenshotOnFail, and custom plugins in CodeceptJS.
---

# CodeceptJS Plugins Skill

## Essential Plugins in `codecept.conf.ts`
```typescript
plugins: {
    allure: {
        enabled: true,
        require: 'allure-codeceptjs',
        resultsDir: 'allure-results',
    },
    htmlReporter: {
        enabled: true,
        output: 'output/html-report',
        reportFileName: 'index.html',
        includeArtifacts: true,
        showSteps: true,
        showSkipped: true,
    },
    retryFailedStep: {
        enabled: true,
        retries: 2,
        minTimeout: 500,
        maxTimeout: 3000,
    },
    screenshotOnFail: {
        enabled: true,
    },
}
```

## Generating Allure Report
```bash
npx allure generate allure-results --clean -o output/allure-report
```

Generate from the exact configured `resultsDir`; `allure-codeceptjs` does not use
`outputDir`. CI must reject a generated report whose Allure summary has zero tests.
Add `executor.json`, `environment.properties`, and restored `history/` to
`allure-results/` before generation when publishing run metadata and trends.
