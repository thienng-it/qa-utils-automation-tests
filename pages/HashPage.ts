import { BasePage } from './base/BasePage';

class HashPage extends BasePage {
    constructor() {
        super('#/hash');
    }

    readonly selectors = {
        title: 'h1.tool-header-title, h1',
        inputArea: 'textarea.tool-textarea, textarea',
    };

    waitForPageLoaded(): void {
        this.I.waitForElement(this.selectors.title, 10);
        this.I.see('Hash');
    }

    enterText(text: string): void {
        this.I.clearField(this.selectors.inputArea);
        this.I.fillField(this.selectors.inputArea, text);
    }

    seeHashGenerated(): void {
        this.I.waitForElement('code', 5);
    }

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
