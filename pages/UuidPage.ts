import { BasePage } from './base/BasePage.ts';
import { commonLocators } from '../config/locators.config.ts';

/**
 * ============================================================================
 * Universally Unique Identifier (UUID) Generator Page Object
 * ============================================================================
 * 
 * Provides automation operations for UUID generation:
 * - Selecting UUID version algorithms (v4 random RFC 4122 or v1 timestamp-based)
 * - Adjusting the batch quantity slider (1 to 20 UUIDs) via simulated input events
 * - Triggering generation
 * - Extracting generated UUID arrays for uniqueness and regex pattern assertions
 * - Copying generated results with clipboard toast validation
 */
class UuidPage extends BasePage {
    constructor() {
        super('#/uuid');
    }

    readonly selectors = {
        title: commonLocators.layout.toolHeaderTitle,
        v4Btn: '//button[contains(., "v4")]',
        v1Btn: '//button[contains(., "v1")]',
        quantitySlider: commonLocators.forms.rangeSlider,
        generateBtn: '//button[contains(., "Generate")]',
        outputArea: commonLocators.layout.codeBlock,
        copyBtn: commonLocators.buttons.copyToClipboard,
    };

    /**
     * Waits for the UUID tool to render and asserts header visibility.
     */
    waitForPageLoaded(): void {
        this.I.waitForElement(this.selectors.title, 10);
        this.I.see('UUID');
    }

    /**
     * Selects the target UUID algorithm version.
     * @param version 'v4' for random RFC 4122 or 'v1' for time-based UUID
     */
    selectVersion(version: 'v4' | 'v1'): void {
        const btn = version === 'v4' ? this.selectors.v4Btn : this.selectors.v1Btn;
        this.I.waitForElement(btn, 5);
        this.I.click(btn);
    }

    /**
     * Programmatically adjusts the HTML5 range slider value and dispatches input/change events.
     * @param count Desired quantity between 1 and 20
     */
    setQuantity(count: number): void {
        this.I.executeScript((val: number) => {
            const range = document.querySelector('input[type="range"]') as HTMLInputElement;
            if (range) {
                range.value = String(val);
                range.dispatchEvent(new Event('input', { bubbles: true }));
                range.dispatchEvent(new Event('change', { bubbles: true }));
            }
        }, count);
    }

    /**
     * Clicks the 'Generate' button to create a new batch of UUIDs.
     */
    generate(): void {
        this.I.waitForElement(this.selectors.generateBtn, 5);
        this.I.click(this.selectors.generateBtn);
    }

    /**
     * Collects all generated UUID strings currently rendered in the output area.
     * @returns Promise resolving to an array of trimmed UUID strings
     */
    async grabGeneratedUUIDs(): Promise<string[]> {
        this.I.waitForElement(this.selectors.outputArea, 5);
        const codes = await this.I.grabTextFromAll(this.selectors.outputArea);
        return codes.map(c => c.trim()).filter(Boolean);
    }

    /**
     * Copies the generated UUIDs to clipboard and asserts the floating toast notification.
     */
    copyOutput(): void {
        this.copyAndVerifyToast(this.selectors.copyBtn);
    }
}

export default new UuidPage();
