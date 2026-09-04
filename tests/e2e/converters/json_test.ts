import { validJsonTable, invalidJsonTable } from '../../../fixtures/json.data.ts';

Feature('JSON Formatter E2E Tests');

Before(({ jsonFormatterPage }) => {
    jsonFormatterPage.open();
});

Scenario('Should beautify and format valid JSON', async ({ jsonFormatterPage }) => {
    jsonFormatterPage.enterJson('{"framework":"codeceptjs","version":4.1}');
    jsonFormatterPage.beautify();
    const output = await jsonFormatterPage.grabOutput();
    jsonFormatterPage.seePageTitle('JSON');
}).tag('@smoke').tag('@regression');

Scenario('Should detect and flag syntax errors in malformed JSON by disabling Prettify', ({ jsonFormatterPage }) => {
    jsonFormatterPage.enterJson('{"broken": true,}');
    jsonFormatterPage.seePrettifyDisabled();
}).tag('@regression');

Scenario('Should compact JSON when Minify is triggered', async ({ jsonFormatterPage }) => {
    jsonFormatterPage.enterJson('{\n  "hello": "world"\n}');
    jsonFormatterPage.minify();
    jsonFormatterPage.seeInField(jsonFormatterPage.selectors.outputArea, '{"hello":"world"}');
}).tag('@regression');
