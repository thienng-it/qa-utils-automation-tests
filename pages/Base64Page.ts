import { BasePage } from './base/BasePage';

class Base64Page extends BasePage {
    constructor() {
        super('#/base64');
    }

    readonly selectors = {
        title: 'h1.tool-header-title, h1',
        encodeTab: '//div[contains(@class, "tool-mode-toggle")]//button[contains(., "Encode")]',
        decodeTab: '//div[contains(@class, "tool-mode-toggle")]//button[contains(., "Decode")]',
        inputArea: 'textarea.tool-textarea',
        outputArea: 'textarea.tool-output',
        actionBtn: '//div[contains(@class, "tool-action-row")]//button[contains(@class, "btn-primary")]',
        errorMessage: '.alert-danger, .error-message',
        copyBtn: '//button[contains(., "Copy to clipboard") or contains(., "Copy")]',
    };

    waitForPageLoaded(): void {
        this.I.waitForElement(this.selectors.title, 10);
        this.I.see('Base64');
    }

    switchToEncode(): void {
        this.I.click(this.selectors.encodeTab);
    }

    switchToDecode(): void {
        this.I.click(this.selectors.decodeTab);
    }

    enterInput(text: string): void {
        this.I.clearField(this.selectors.inputArea);
        this.I.fillField(this.selectors.inputArea, text);
    }

    process(): void {
        this.I.click(this.selectors.actionBtn);
    }

    async grabOutput(): Promise<string> {
        this.I.waitForElement(this.selectors.outputArea, 5);
        return await this.I.grabValueFrom(this.selectors.outputArea);
    }

    seeErrorMessage(expectedSnippet: string): void {
        this.I.waitForElement(this.selectors.errorMessage, 5);
        this.I.see(expectedSnippet, this.selectors.errorMessage);
    }

    copyOutput(): void {
        this.copyAndVerifyToast(this.selectors.copyBtn);
    }
}

export default new Base64Page();
