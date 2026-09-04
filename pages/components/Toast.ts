import { BaseComponent } from '../base/BaseComponent.ts';
import { commonLocators } from '../../config/locators.config.ts';

/**
 * ============================================================================
 * Floating Feedback Toast Component Object
 * ============================================================================
 * 
 * Handles floating feedback notification toasts (e.g., 'Woohoo, your text is copied!').
 * Allows asserting message appearance and waiting for automatic auto-dismissal.
 */
class Toast extends BaseComponent {
    constructor() {
        super(commonLocators.feedback.toastContainer);
    }

    /**
     * Asserts that a feedback toast is visible and optionally contains expected text.
     * @param message Expected text substring inside the toast notification
     */
    seeToast(message?: string): void {
        this.waitForVisible(5);
        if (message) {
            this.I.see(message, this.rootSelector);
        }
    }

    /**
     * Awaits the auto-dismiss fade-out animation of the toast.
     * @param timeoutSec Maximum duration to wait before timeout (default: 8s)
     */
    waitForDismiss(timeoutSec: number = 8): void {
        this.I.waitForInvisible(this.rootSelector, timeoutSec);
    }
}

export default new Toast();
