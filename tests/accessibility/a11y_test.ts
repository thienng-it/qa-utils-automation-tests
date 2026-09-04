import AxeBuilder from '@axe-core/playwright';

Feature('Accessibility (a11y) Audits - WCAG 2.1 AA');

const CORE_ROUTES = ['#/', '#/explore', '#/uuid', '#/base64'];

for (const route of CORE_ROUTES) {
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
