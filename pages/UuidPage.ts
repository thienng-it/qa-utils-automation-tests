import { BasePage } from './base/BasePage';

class UuidPage extends BasePage {
    constructor() {
        super('#/uuid');
    }

    readonly selectors = {
        title: 'h1.tool-header-title, h1',
        v4Btn: '//button[contains(., "v4")]',
        v1Btn: '//button[contains(., "v1")]',
        quantitySlider: 'input[type="range"]',
        generateBtn: '//button[contains(., "Generate")]',
        outputArea: '.tool-card code, code',
        copyBtn: '//button[contains(., "Copy to clipboard") or contains(., "Copy")]',
    };

    waitForPageLoaded(): void {
        this.I.waitForElement(this.selectors.title, 10);
        this.I.see('UUID');
    }

    selectVersion(version: 'v4' | 'v1'): void {
        const btn = version === 'v4' ? this.selectors.v4Btn : this.selectors.v1Btn;
        this.I.waitForElement(btn, 5);
        this.I.click(btn);
    }

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

    generate(): void {
        this.I.waitForElement(this.selectors.generateBtn, 5);
        this.I.click(this.selectors.generateBtn);
    }

    async grabGeneratedUUIDs(): Promise<string[]> {
        this.I.waitForElement(this.selectors.outputArea, 5);
        const codes = await this.I.grabTextFromAll(this.selectors.outputArea);
        return codes.map(c => c.trim()).filter(Boolean);
    }

    copyOutput(): void {
        this.copyAndVerifyToast(this.selectors.copyBtn);
    }
}

export default new UuidPage();
