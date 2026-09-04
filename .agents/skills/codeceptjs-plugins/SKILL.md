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
    failureArtifacts: {
        enabled: true,
        require: './plugins/failureArtifacts.ts',
    },
}
```

## Failure Artifacts & Diagnostic Attachments
1. **Screenshots on Failure**:
   - Captured by `screenshotOnFail` into `output/<test_name>.failed.png`.
   - Natively attached by `allure-codeceptjs` as `image/png` to the failed test in Allure Report.
2. **Videos on Failure**:
   - Recorded by Playwright via `helpers.Playwright.video: true`.
   - On test pass, video is deleted to save storage.
   - On test failure, video is saved to `output/videos/*.failed.webm` and attached to Allure by `plugins/failureArtifacts.ts` as `video/webm` (playable directly in Allure Report).
3. **Traces on Failure**:
   - Recorded by Playwright via `helpers.Playwright.trace: true`.
   - Saved to `output/trace/*.failed.zip` and attached to Allure by `plugins/failureArtifacts.ts` as `application/zip`.
4. **CI Artifact Package**:
   - GitHub Actions uploads `failure-diagnostics` artifact containing all `output/**/*.png`, `output/**/*.webm`, and `output/**/*.zip`.

## Generating Allure Report
```bash
npx allure generate allure-results --clean -o output/allure-report
```

Generate from the exact configured `resultsDir`; `allure-codeceptjs` does not use
`outputDir`. CI must reject a generated report whose Allure summary has zero tests.
Add `executor.json`, `environment.properties`, and restored `history/` to
`allure-results/` before generation when publishing run metadata and trends.
