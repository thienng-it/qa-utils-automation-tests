import { BasePage } from './base/BasePage.ts';
import { commonLocators } from '../config/locators.config.ts';

/**
 * ============================================================================
 * Color Converter Page Object
 * ============================================================================
 * 
 * Automates hexadecimal and RGB/HSL color space conversions:
 * - Entering HEX color codes (e.g., `#00ff00`, `#3498db`)
 * - Asserting synchronous, bidirectional conversion across RGB number inputs
 * - Verifying color preview swatches
 */
class ColorPage extends BasePage {
    constructor() {
        super('#/color-converter');
    }

    readonly selectors = {
        title: commonLocators.layout.toolHeaderTitle,
        hexInput: 'input[placeholder="#ffffff"]',
    };

    /**
     * Waits for the Color Converter tool to mount and verifies header visibility.
     */
    waitForPageLoaded(): void {
        this.I.waitForElement(this.selectors.title, 10);
        this.I.see('Color');
    }

    /**
     * Types a hexadecimal color code into the HEX input field.
     * @param hexCode Hex string including hash symbol (e.g. '#00ff00')
     */
    enterHex(hexCode: string): void {
        this.I.waitForElement(this.selectors.hexInput, 5);
        this.I.clearField(this.selectors.hexInput);
        this.I.fillField(this.selectors.hexInput, hexCode);
    }

    /**
     * Asserts that the RGB numerical inputs match the expected red, green, and blue values.
     * Uses `waitForFunction` to ensure asynchronous reactive updates settle.
     * 
     * @param r Expected Red channel value (0..255)
     * @param g Expected Green channel value (0..255)
     * @param b Expected Blue channel value (0..255)
     */
    seeRgb(r: string, g: string, b: string): void {
        this.I.waitForFunction(
            (args: string[]) => {
                const inputs = Array.from(document.querySelectorAll('input[type="number"]')) as HTMLInputElement[];
                return inputs[0]?.value === args[0] && inputs[1]?.value === args[1] && inputs[2]?.value === args[2];
            },
            [r, g, b],
            5
        );
    }
}

export default new ColorPage();
