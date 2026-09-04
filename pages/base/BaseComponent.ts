/**
 * ============================================================================
 * Abstract BaseComponent (Component Object Model Foundation)
 * ============================================================================
 * 
 * Represents an isolated, reusable UI widget or fragment (e.g. Navigation Header,
 * Modal Dialog, Toast Alert, Notification Drawer).
 * 
 * Design Pattern Rationale:
 * - Scoped Queries: Actions and assertions can be scoped specifically to `rootSelector`,
 *   preventing accidental collisions with identically named elements elsewhere on the page.
 * - Modularity: Changes to site-wide components (like the Navbar) are maintained in a
 *   single dedicated class rather than duplicated across dozens of pages.
 */
export abstract class BaseComponent {
    /** The bounding root container selector for this component */
    protected readonly rootSelector: string;

    /**
     * Constructs a component bound to a root selector.
     * @param rootSelector CSS or XPath locating the outer container
     */
    constructor(rootSelector: string) {
        this.rootSelector = rootSelector;
    }

    /**
     * Resolves the active CodeceptJS actor `I` from the dependency container.
     */
    protected get I(): CodeceptJS.I {
        const { container } = require('codeceptjs');
        return container.support('I');
    }

    /**
     * Waits until the component's root container is rendered and visible.
     * @param timeoutSec Maximum duration in seconds (default: 10s)
     */
    waitForVisible(timeoutSec: number = 10): void {
        this.I.waitForElement(this.rootSelector, timeoutSec);
    }

    /**
     * Clicks a nested child element within the component boundary.
     * @param subSelector Relative selector inside the component
     */
    clickSubElement(subSelector: string): void {
        this.I.click(`${this.rootSelector} ${subSelector}`);
    }

    /**
     * Asserts that expected text is rendered inside this component's DOM subtree.
     * @param text Expected string content
     */
    seeTextInComponent(text: string): void {
        this.I.see(text, this.rootSelector);
    }
}
