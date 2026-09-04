import { BasePage } from './base/BasePage';

class ColorPage extends BasePage {
    constructor() {
        super('#/color-converter');
    }

    readonly selectors = {
        title: 'h1.tool-header-title, h1',
        hexInput: 'input[placeholder="#ffffff"]',
    };

    waitForPageLoaded(): void {
        this.I.waitForElement(this.selectors.title, 10);
        this.I.see('Color');
    }

    enterHex(hexCode: string): void {
        this.I.waitForElement(this.selectors.hexInput, 5);
        this.I.clearField(this.selectors.hexInput);
        this.I.fillField(this.selectors.hexInput, hexCode);
    }

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
