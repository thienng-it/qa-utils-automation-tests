const { inject } = require('codeceptjs');

/**
 * Abstract Base Page providing core navigation, hash route synchronization,
 * page title assertions, and feedback toast verification.
 */
export abstract class BasePage {
    protected readonly url: string;

    constructor(url: string) {
        this.url = url;
    }

    protected get I(): CodeceptJS.I {
        const { container } = require('codeceptjs');
        return container.support('I');
    }

    /**
     * Navigates to the page and waits for full DOM synchronization.
     */
    open(): void {
        this.I.amOnPage(this.url);
        this.waitForPageLoaded();
    }

    /**
     * Contract method: each page MUST implement its loaded readiness condition.
     */
    abstract waitForPageLoaded(): void;

    /**
     * Asserts that a given title or header text is visible on the page.
     */
    seePageTitle(title: string): void {
        this.I.see(title);
    }

    /**
     * Explicitly awaits the browser hash route without relying on hardcoded waits.
     */
    waitForRoute(hashRoute: string, timeoutSec: number = 10): void {
        this.I.waitForFunction(
            (expected: string) => window.location.hash.includes(expected),
            [hashRoute],
            timeoutSec
        );
    }

    /**
     * Asserts that a given text is visible on the page.
     */
    seeText(text: string): void {
        this.I.see(text);
    }

    /**
     * Asserts that a given text is inside an input/textarea field.
     */
    seeInField(field: string, value: string): void {
        this.I.seeInField(field, value);
    }

    /**
     * Interacts with a copy button and asserts the floating feedback toast appears.
     */
    copyAndVerifyToast(buttonSelector: string): void {
        this.I.waitForElement(buttonSelector, 5);
        this.I.click(buttonSelector);
        this.I.waitForElement('.toast.show, [role="alert"]', 5);
        this.I.seeElement('.toast.show, [role="alert"]');
    }
}
