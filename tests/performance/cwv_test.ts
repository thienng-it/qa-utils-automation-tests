import { DEFAULT_PERFORMANCE_BUDGET } from '../../models/Metrics.ts';

Feature('Performance & Core Web Vitals Budget');

Scenario('Audit Home Page Core Web Vitals metrics', async ({ I, homePage }) => {
    homePage.open();
    const metrics = await I.measurePerformanceMetrics();

    console.log('Home Page Performance Metrics:', metrics);

    if (metrics.domCount > DEFAULT_PERFORMANCE_BUDGET.maxDomNodes) {
        throw new Error(
            `DOM node count exceeded budget! Expected < ${DEFAULT_PERFORMANCE_BUDGET.maxDomNodes}, got ${metrics.domCount}`
        );
    }
}).tag('@performance').tag('@regression');

Scenario('Audit Navigation between 5 tools for memory stability', async ({ I }) => {
    const testRoutes = ['#/', '#/uuid', '#/base64', '#/jsonFormatter', '#/timestamp'];
    for (const route of testRoutes) {
        I.amOnPage(route);
        await I.assertZeroConsoleErrors();
    }
}).tag('@performance').tag('@regression');
