import { BasePage } from './base/BasePage.ts';
import { commonLocators } from '../config/locators.config.ts';

/**
 * ============================================================================
 * Unix Timestamp Converter Page Object
 * ============================================================================
 * 
 * Automates Unix epoch to human-readable date/time conversions:
 * - Entering epoch timestamps in seconds or milliseconds
 * - Observing real-time reactive date rendering in UTC / GMT
 * - Verifying historical and future time boundaries (1970, Y2K, Leap Days, Year 2038)
 */
class TimestampPage extends BasePage {
    constructor() {
        super('#/timestamp');
    }

    readonly selectors = {
        title: commonLocators.layout.toolHeaderTitle,
        epochInput: 'input[placeholder*="1700000000"]',
        nowBtn: '//button[contains(., "Now")]',
    };

    /**
     * Waits for the Timestamp tool to render and asserts header presence.
     */
    waitForPageLoaded(): void {
        this.I.waitForElement(this.selectors.title, 10);
        this.I.see('Timestamp');
    }

    /**
     * Types an epoch second timestamp into the input field.
     * @param epochSec Integer timestamp in seconds (e.g. 0, 946684800, 2147483647)
     */
    enterEpoch(epochSec: number): void {
        this.I.waitForElement(this.selectors.epochInput, 5);
        this.I.clearField(this.selectors.epochInput);
        this.I.fillField(this.selectors.epochInput, String(epochSec));
    }

    /**
     * Asserts that converted date text (e.g., year '1970', '2000', '2024') is visible.
     * @param text Expected date substring
     */
    seeConvertedText(text: string): void {
        this.I.see(text);
    }

    /**
     * Compatibility hook: KobeanQAUtils converts timestamps reactively on input.
     */
    convert(): void {
        // Conversions occur reactively on input change
    }
}

export default new TimestampPage();
