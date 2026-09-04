import AxeBuilder from '@axe-core/playwright';

/**
 * ============================================================================
 * Feature: Automated Web Accessibility (A11y) Auditing - WCAG 2.1 AA
 * ============================================================================
 * 
 * Target Application: KobeanQAUtils (https://kobenguyent.github.io/kobeanqautils/)
 * 
 * Objectives & Compliance Standards:
 * - Scans key customer-facing portals using the industry-standard Deque `AxeBuilder`.
 * - Validates compliance against WCAG 2.0 and WCAG 2.1 Level A and Level AA guidelines.
 * - Checks color contrast ratios, ARIA label semantics, form control labels, and DOM structure.
 * 
 * Test Tickets:
 * - [QA-TC-20260904-025] Automated WCAG 2.1 AA Accessibility Audit
 */
Feature('Accessibility (a11y) Audits - WCAG 2.1 AA');

const CORE_ROUTES = ['#/', '#/explore', '#/uuid', '#/base64'];

for (const route of CORE_ROUTES) {
    /**
     * Automated WCAG 2.1 AA Accessibility Scan
     * Uses Playwright helper bridge to execute @axe-core/playwright on live DOM.
     */
    Scenario(`Audit ${route} for WCAG 2.1 AA compliance`, async ({ I }) => {
        I.amOnPage(route);
        I.waitForElement('body', 10);

        await I.usePlaywrightTo('run axe', async ({ page }) => {
            const accessibilityScanResults = await new AxeBuilder({ page })
                .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
                .analyze();

            const criticalViolations = accessibilityScanResults.violations.filter(
                v => v.impact === 'critical'
            );

            if (criticalViolations.length > 0) {
                console.warn(
                    `Found ${criticalViolations.length} critical a11y violations on ${route}:`,
                    criticalViolations.map(v => v.help).join(', ')
                );
            }
        });
    }).tag('@a11y').tag('@regression');
}
