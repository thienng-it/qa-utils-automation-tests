---
name: codeceptjs-page-objects
description: Object-Oriented Page Object Model, Component fragments, encapsulation, and dependency injection in CodeceptJS.
---

# CodeceptJS Page Object Model Skill

## Principles
1. **Never leak selectors into test scenarios**: Every CSS selector or XPath query must live inside a Page Object.
2. **Abstract Base Page**: Common navigation, hash-route synchronization, and toast notifications belong in `BasePage.ts`.
3. **Reusable Components**: Scoped navigation bars, sidebars, and modals belong in `BaseComponent.ts`.

## Structure
```typescript
// pages/base/BasePage.ts
export abstract class BasePage {
    constructor(protected readonly url: string) {}
    open(): void {
        I.amOnPage(this.url);
        this.waitForPageLoaded();
    }
    abstract waitForPageLoaded(): void;
}

// pages/MyToolPage.ts
import { BasePage } from './base/BasePage';
const { I } = inject();

class MyToolPage extends BasePage {
    constructor() {
        super('#/my-tool');
    }
    readonly selectors = {
        title: '.tool-header-title',
        button: '#submit-btn',
    };
    waitForPageLoaded(): void {
        I.waitForElement(this.selectors.title, 10);
    }
    submit(): void {
        I.click(this.selectors.button);
    }
}
export = new MyToolPage();
```
