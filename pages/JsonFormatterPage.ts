import { BasePage } from './base/BasePage';

class JsonFormatterPage extends BasePage {
    constructor() {
        super('#/jsonFormatter');
    }

    readonly selectors = {
        title: 'h1.tool-header-title, h1',
        inputArea: 'textarea.tool-textarea, textarea',
        outputArea: 'textarea.tool-textarea, textarea',
        beautifyBtn: '//button[contains(., "Prettify") or contains(., "Beautify") or contains(., "Format")]',
        minifyBtn: '//button[contains(., "Minify") or contains(., "Compact")]',
        clearBtn: '//button[contains(., "Clear")]',
        copyBtn: '//button[contains(., "Copy to clipboard") or contains(., "Copy")]',
        errorBadge: '.json-error, .syntax-error-badge, .alert-danger',
    };

    waitForPageLoaded(): void {
        this.I.waitForElement(this.selectors.title, 10);
        this.I.see('JSON');
    }

    enterJson(payload: string): void {
        this.I.clearField(this.selectors.inputArea);
        this.I.fillField(this.selectors.inputArea, payload);
    }

    beautify(): void {
        this.I.click(this.selectors.beautifyBtn);
    }

    minify(): void {
        this.I.click(this.selectors.minifyBtn);
    }

    async grabOutput(): Promise<string> {
        this.I.waitForElement(this.selectors.outputArea, 5);
        return await this.I.grabValueFrom(this.selectors.outputArea);
    }

    seePrettifyDisabled(): void {
        this.I.seeElement('//button[contains(., "Prettify") and @disabled]');
    }

    seeSyntaxError(): void {
        this.seePrettifyDisabled();
    }
}

export default new JsonFormatterPage();
