import { BasePage } from './base/BasePage.ts';
import { commonLocators } from '../config/locators.config.ts';

/**
 * ============================================================================
 * JSON Formatter & Minifier Page Object
 * ============================================================================
 * 
 * Encapsulates operations for the JSON Formatter tool:
 * - Entering valid and malformed JSON payloads
 * - Prettifying JSON with standard indentation
 * - Minifying JSON into a compact single line
 * - Live error detection (disabling the Prettify action button when syntax is invalid)
 * - Copying formatted output to the clipboard
 */
class JsonFormatterPage extends BasePage {
    constructor() {
        super('#/jsonFormatter');
    }

    readonly selectors = {
        title: commonLocators.layout.toolHeaderTitle,
        inputArea: commonLocators.forms.primaryTextarea,
        outputArea: commonLocators.forms.primaryTextarea,
        beautifyBtn: commonLocators.buttons.prettify,
        minifyBtn: commonLocators.buttons.minify,
        clearBtn: commonLocators.buttons.clear,
        copyBtn: commonLocators.buttons.copyToClipboard,
        errorBadge: commonLocators.feedback.dangerBadge,
    };

    /**
     * Waits for the JSON Formatter tool to render and asserts header presence.
     */
    waitForPageLoaded(): void {
        this.I.waitForElement(this.selectors.title, 10);
        this.I.see('JSON');
    }

    /**
     * Fills a JSON string payload into the primary editor textarea.
     * @param payload Valid or invalid JSON string
     */
    enterJson(payload: string): void {
        this.I.clearField(this.selectors.inputArea);
        this.I.fillField(this.selectors.inputArea, payload);
    }

    /**
     * Triggers the 'Prettify' formatting button.
     */
    beautify(): void {
        this.I.click(this.selectors.beautifyBtn);
    }

    /**
     * Triggers the 'Minify' compaction button.
     */
    minify(): void {
        this.I.click(this.selectors.minifyBtn);
    }

    /**
     * Retrieves the current string inside the JSON editor.
     * @returns Promise resolving to formatted/minified JSON text
     */
    async grabOutput(): Promise<string> {
        this.I.waitForElement(this.selectors.outputArea, 5);
        return await this.I.grabValueFrom(this.selectors.outputArea);
    }

    /**
     * Asserts that the 'Prettify' button is disabled due to malformed JSON syntax.
     */
    seePrettifyDisabled(): void {
        this.I.seeElement('//button[contains(., "Prettify") and @disabled]');
    }

    /**
     * Alias for syntax error validation (asserts disabled state).
     */
    seeSyntaxError(): void {
        this.seePrettifyDisabled();
    }
}

export default new JsonFormatterPage();
