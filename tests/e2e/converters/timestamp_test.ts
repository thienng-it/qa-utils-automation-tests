import { timestampTable } from '../../../fixtures/timestamp.data.ts';

Feature('Unix Timestamp Converter E2E Tests');

Before(({ timestampPage }) => {
    timestampPage.open();
});

Scenario('Should display current timestamp on page load', ({ timestampPage }) => {
    timestampPage.seePageTitle('Timestamp');
}).tag('@smoke').tag('@regression');

Data(timestampTable).Scenario('Data-driven epoch to UTC conversion', async ({ current, timestampPage }) => {
    timestampPage.enterEpoch(current.epochSec);
    const expectedYear = current.expectedIsoUtc.substring(0, 4);
    timestampPage.seeConvertedText(expectedYear);
}).tag('@regression');
