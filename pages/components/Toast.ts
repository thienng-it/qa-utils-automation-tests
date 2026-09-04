import { BaseComponent } from '../base/BaseComponent';

class Toast extends BaseComponent {
    constructor() {
        super('.kobean-toast, .toast, [role="alert"]');
    }

    seeToast(message: string): void {
        this.waitForVisible(5);
        this.I.see(message, this.rootSelector);
    }

    waitForDismiss(timeoutSec: number = 8): void {
        this.I.waitForInvisible(this.rootSelector, timeoutSec);
    }
}

export default new Toast();
