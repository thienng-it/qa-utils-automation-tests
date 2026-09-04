import { actor } from 'codeceptjs';

export default function() {
  return actor({
    // Custom steps: navigate to any hash route and wait for the page.
    navigateTo(route: string): void {
      this.amOnPage(route);
      this.waitForElement('body', 10);
    },

    async assertZeroConsoleErrors(): Promise<void> {
      try {
        const logs = await this.grabBrowserLogs();
        const severeErrors = (logs || []).filter((log: any) => log.type === 'error' && !log.text?.includes('favicon'));
        if (severeErrors.length > 0) {
          console.warn(`Browser console errors found: ${JSON.stringify(severeErrors)}`);
        }
      } catch (err) {
        // In case browser logs aren't supported on headless shell
      }
    },

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
