/**
 * Abstract Base Component providing scoped DOM querying and component-level assertions.
 */
export abstract class BaseComponent {
    protected readonly rootSelector: string;

    constructor(rootSelector: string) {
        this.rootSelector = rootSelector;
    }

    protected get I(): CodeceptJS.I {
        const { container } = require('codeceptjs');
        return container.support('I');
    }

    waitForVisible(timeoutSec: number = 10): void {
        this.I.waitForElement(this.rootSelector, timeoutSec);
    }

    clickSubElement(subSelector: string): void {
        this.I.click(`${this.rootSelector} ${subSelector}`);
    }

    seeTextInComponent(text: string): void {
        this.I.see(text, this.rootSelector);
    }
}
