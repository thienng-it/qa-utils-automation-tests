import { commonLocators } from '../../config/locators.config.ts';

/**
 * ============================================================================
 * Abstract BasePage (Page Object Model Foundation)
 * ============================================================================
 * 
 * The BasePage class establishes core architectural contracts for all page objects
 * in the KobeanQAUtils automation suite. It provides:
 * 
 * 1. Actor Injection: Directly accesses the active CodeceptJS actor `I` through the
 *    support container, avoiding manual parameter passing in test scenarios.
 * 2. Hash Route Synchronization: Auto-waits for client-side Single Page Application (SPA)
 *    hash changes (`#/route`) without resorting to flaky, hardcoded sleep calls.
 * 3. Contractual Readiness: Enforces `waitForPageLoaded()` on every inheriting page object.
 * 4. Toast & Clipboard Validation: Standardizes UI verification for copy operations.
 * 
 * Standard QA / Dev Terminology:
 * - POM: Page Object Model design pattern separating test logic from DOM locators.
 * - Single Page Application (SPA): Web application routing via hash fragments (`#/tool`).
 * - SLA: Service Level Agreement for page transition and DOM rendering speed.
 */
export abstract class BasePage {
    /** Target URL path or hash route for this page (e.g., '#/uuid', '#/base64') */
    protected readonly url: string;

    /**
     * Constructs a page object with its relative hash route.
     * @param url The relative route of the tool/page (e.g. '#/jsonFormatter')
     */
    constructor(url: string) {
        this.url = url;
    }

    /**
     * Provides access to the CodeceptJS testing actor `I`.
     * Dynamically resolved from the CodeceptJS dependency injection container.
     */
    protected get I(): CodeceptJS.I {
        const { container } = require('codeceptjs');
        return container.support('I');
    }

    /**
     * Navigates to the page's route and synchronizes with the loaded DOM condition.
     * 
     * @example
     * base64Page.open();
     */
    open(): void {
        this.I.amOnPage(this.url);
        this.waitForPageLoaded();
    }

    /**
     * Contract method: Inheriting page objects must declare their specific readiness condition.
     * Guarantees that scenarios never execute against half-loaded or unmounted DOM states.
     */
    abstract waitForPageLoaded(): void;

    /**
     * Asserts that a title or header is visible anywhere on the active view.
     * @param title The expected text substring
     */
    seePageTitle(title: string): void {
        this.I.see(title);
    }

    /**
     * Explicitly awaits the browser hash route without relying on hardcoded waits.
     * Uses Playwright's `waitForFunction` to observe `window.location.hash`.
     * 
     * @param hashRoute The expected route fragment (e.g. '#/base64')
     * @param timeoutSec Maximum duration to wait before failing (default: 10s)
     */
    waitForRoute(hashRoute: string, timeoutSec: number = 10): void {
        this.I.waitForFunction(
            (expected: string) => window.location.hash.includes(expected),
            [hashRoute],
            timeoutSec
        );
    }

    /**
     * Asserts that a given text string is visible on the current page.
     * @param text String to locate on the live screen
     */
    seeText(text: string): void {
        this.I.see(text);
    }

    /**
     * Asserts that an input, textarea, or select field contains an expected value.
     * @param field CSS or XPath locator for the form input element
     * @param value Expected text value within the element
     */
    seeInField(field: string, value: string): void {
        this.I.seeInField(field, value);
    }

    /**
     * Interacts with a copy-to-clipboard button and asserts that the feedback toast appears.
     * Uses centralized toast locators from `commonLocators.feedback.toastContainer`.
     * 
     * @param buttonSelector Selector for the copy button to trigger
     */
    copyAndVerifyToast(buttonSelector: string = commonLocators.buttons.copyToClipboard): void {
        this.I.waitForElement(buttonSelector, 5);
        this.I.click(buttonSelector);
        this.I.waitForElement(commonLocators.feedback.toastContainer, 5);
        this.I.seeElement(commonLocators.feedback.toastContainer);
    }
}
