import { catalogTable } from '../../fixtures/catalog.data.ts';

Feature('Universal 64-Tool Discovery & Health Crawler');

Data(catalogTable).Scenario(
    'Crawl tool route, assert header rendering and zero console errors',
    async ({ I, current }) => {
        // Navigate directly to the tool hash route
        I.amOnPage(current.route);

        // Assert that the tool's expected header/title is rendered in the DOM
        I.waitForText(current.expectedHeader, 10);

        // Assert that no unhandled JavaScript runtime exceptions occurred on the page
        await I.assertZeroConsoleErrors();
    }
).tag('@smoke').tag('@discovery');
