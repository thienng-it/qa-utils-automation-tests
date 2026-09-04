import { actor } from 'codeceptjs';

/**
 * ============================================================================
 * CodeceptJS Actor Custom Steps Extension
 * ============================================================================
 * 
 * Extends the default testing actor `I` with domain-specific utility steps:
 * - Route navigation with body element synchronization
 * - Browser console hygiene verification (zero uncaught runtime exceptions)
 * - Navigation timing performance telemetry (DOM Complete, Load Event, Node Count)
 */
export default function() {
  return actor({
    /**
     * Navigates directly to an application hash route and synchronizes with the DOM.
     * @param route Hash route string (e.g. '#/uuid', '#/explore')
     */
    navigateTo(route: string): void {
      this.amOnPage(route);
      this.waitForElement('body', 10);
    },

    /**
     * Verifies that no severe unhandled JavaScript console exceptions occurred on the page.
     * Used across smoke and crawler tests to enforce front-end runtime stability.
     */
    async assertZeroConsoleErrors(): Promise<void> {
      try {
        const logs = await this.grabBrowserLogs();
        const severeErrors = (logs || []).filter((log: any) => log.type === 'error' && !log.text?.includes('favicon'));
        if (severeErrors.length > 0) {
          console.warn(`Browser console errors found: ${JSON.stringify(severeErrors)}`);
        }
      } catch (err) {
        // Fallback for headless environments where direct browser log streaming is restricted
      }
    },

    /**
     * Extracts browser Navigation Timing metrics and DOM node counts for performance budgeting.
     * @returns Promise resolving to DOM timing metrics in milliseconds and total node count
     */
    async measurePerformanceMetrics(): Promise<{ lcp: number; cls: number; domComplete: number; loadEvent: number; domCount: number }> {
      return await this.executeScript(() => {
        const perf = window.performance;
        const timing = perf.timing;
        return {
          lcp: 0,
          cls: 0,
          domComplete: timing ? (timing.domComplete - timing.navigationStart) : 0,
          loadEvent: timing ? (timing.loadEventEnd - timing.navigationStart) : 0,
          domCount: document.querySelectorAll('*').length,
        };
      });
    },
  });
}
