import { BasePage } from './base/BasePage.ts';
import { commonLocators } from '../config/locators.config.ts';

/**
 * ============================================================================
 * Cryptographic Hash Generator Page Object
 * ============================================================================
 * 
 * Automates one-way cryptographic hash generation:
 * - Entering plain text payloads into the input area
 * - Observing reactive calculations across SHA-256, SHA-512, and SHA-1 algorithms
 * - Using `waitForFunction` to ensure debounced calculations settle before assertion
 */
class HashPage extends BasePage {
    constructor() {
        super('#/hash');
    }

    readonly selectors = {
        title: commonLocators.layout.toolHeaderTitle,
        inputArea: commonLocators.forms.primaryTextarea,
        outputCode: commonLocators.layout.codeBlock,
    };

    /**
     * Waits for the Hash Generator tool to mount and verifies header visibility.
     */
    waitForPageLoaded(): void {
        this.I.waitForElement(this.selectors.title, 10);
        this.I.see('Hash');
    }

    /**
     * Types plain text into the hashing input textarea.
     * @param text String to be cryptographically hashed
     */
    enterText(text: string): void {
        this.I.clearField(this.selectors.inputArea);
        this.I.fillField(this.selectors.inputArea, text);
    }

    /**
     * Asserts that at least one `<code>` block containing a generated hash has rendered.
     */
    seeHashGenerated(): void {
        this.I.waitForElement(this.selectors.outputCode, 5);
    }

    /**
     * Dynamically checks all rendered code elements until the expected hash string appears.
     * @param hashText Full hash or prefix substring (e.g. '2cf24dba...', 'db859cd4...')
     */
    seeHash(hashText: string): void {
        this.I.waitForFunction(
            (expected: string) => {
                const codes = Array.from(document.querySelectorAll('code'));
                return codes.some(c => c.textContent?.includes(expected));
            },
            [hashText],
            5
        );
    }
}

export default new HashPage();
