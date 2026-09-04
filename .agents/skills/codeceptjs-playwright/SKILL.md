---
name: codeceptjs-playwright
description: Playwright helper integration, browser management, tracing, video, network interception, and console error capture in CodeceptJS.
---

# CodeceptJS Playwright Helper Skill

## Overview
Integrates Microsoft Playwright as the execution engine for CodeceptJS, providing ultra-fast, reliable browser automation with native Chromium, Firefox, and WebKit support.

## Playwright Configuration (`codecept.conf.ts`)
```typescript
helpers: {
    Playwright: {
        browser: 'chromium',
        url: 'https://kobenguyent.github.io/kobeanqautils/',
        show: false,
        waitForNavigation: 'load',
        video: 'retain-on-failure',
        trace: 'retain-on-failure',
        timeout: 30000,
        restart: 'keep',
        windowSize: '1440x900',
    },
}
```

## Accessing Underlying Playwright Page
When native Playwright primitives are required:
```typescript
const page = I.helpers['Playwright'].page;
// Intercept network
await page.route('**/api/v1/**', route => route.abort());
// Listen for console errors
page.on('pageerror', err => console.error(err));
```
