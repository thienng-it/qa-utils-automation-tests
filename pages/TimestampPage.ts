import { BasePage } from './base/BasePage';

class TimestampPage extends BasePage {
    constructor() {
        super('#/timestamp');
    }

    readonly selectors = {
        title: 'h1.tool-header-title, h1',
        epochInput: 'input[placeholder*="1700000000"]',
        nowBtn: '//button[contains(., "Now")]',
    };

    waitForPageLoaded(): void {
        this.I.waitForElement(this.selectors.title, 10);
        this.I.see('Timestamp');
    }

    enterEpoch(epochSec: number): void {
        this.I.waitForElement(this.selectors.epochInput, 5);
        this.I.clearField(this.selectors.epochInput);
        this.I.fillField(this.selectors.epochInput, String(epochSec));
    }

    seeConvertedText(text: string): void {
        this.I.see(text);
    }

    convert(): void {
        // KobeanQAUtils updates in real time on input
    }
}

export default new TimestampPage();
