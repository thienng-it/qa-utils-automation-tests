import { BasePage } from './base/BasePage.ts';
import { commonLocators } from '../config/locators.config.ts';

/**
 * ============================================================================
 * Base64 Encode & Decode Page Object
 * ============================================================================
 * 
 * Provides end-to-end interactions for Base64 encoding and decoding operations:
 * - Toggling between 'Encode' and 'Decode' modes
 * - Filling input strings (ASCII, Unicode, multiline, Emojis)
 * - Triggering the conversion process
 * - Extracting the generated output string
 * - Copying output and verifying floating toast feedback
 */
class Base64Page extends BasePage {
    constructor() {
        super('#/base64');
    }

    readonly selectors = {
        title: commonLocators.layout.toolHeaderTitle,
        encodeTab: '//div[contains(@class, "tool-mode-toggle")]//button[contains(., "Encode")]',
        decodeTab: '//div[contains(@class, "tool-mode-toggle")]//button[contains(., "Decode")]',
        inputArea: 'textarea.tool-textarea',
        outputArea: 'textarea.tool-output',
        actionBtn: '//div[contains(@class, "tool-action-row")]//button[contains(@class, "btn-primary")]',
        errorMessage: '.alert-danger, .error-message',
        copyBtn: commonLocators.buttons.copyToClipboard,
    };

    /**
     * Waits for the tool view to render and verifies the Base64 title is visible.
     */
    waitForPageLoaded(): void {
        this.I.waitForElement(this.selectors.title, 10);
        this.I.see('Base64');
    }

    /**
     * Switches the tool mode to 'Encode'.
     */
    switchToEncode(): void {
        this.I.click(this.selectors.encodeTab);
    }

    /**
     * Switches the tool mode to 'Decode'.
     */
    switchToDecode(): void {
        this.I.click(this.selectors.decodeTab);
    }

    /**
     * Clears and types text into the primary input textarea.
     * @param text Plaintext or Base64 string to input
     */
    enterInput(text: string): void {
        this.I.clearField(this.selectors.inputArea);
        this.I.fillField(this.selectors.inputArea, text);
    }

    /**
     * Clicks the primary action button to execute Encode/Decode.
     */
    process(): void {
        this.I.click(this.selectors.actionBtn);
    }

    /**
     * Reads the current string value inside the output textarea.
     * @returns Promise resolving to the output value
     */
    async grabOutput(): Promise<string> {
        this.I.waitForElement(this.selectors.outputArea, 5);
        return await this.I.grabValueFrom(this.selectors.outputArea);
    }

    /**
     * Asserts that an error banner or alert message is displayed on invalid input.
     * @param expectedSnippet Expected error text substring
     */
    seeErrorMessage(expectedSnippet: string): void {
        this.I.waitForElement(this.selectors.errorMessage, 5);
        this.I.see(expectedSnippet, this.selectors.errorMessage);
    }

    /**
     * Triggers the copy action and verifies that the floating success toast appears.
     */
    copyOutput(): void {
        this.copyAndVerifyToast(this.selectors.copyBtn);
    }
}

export default new Base64Page();
