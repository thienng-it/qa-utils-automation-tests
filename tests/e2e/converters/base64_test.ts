import { validBase64Table, invalidBase64Table } from '../../../fixtures/base64.data.ts';

Feature('Base64 Converter E2E Tests');

Before(({ base64Page }) => {
    base64Page.open();
});

Scenario('Should encode plain text to Base64 accurately', async ({ base64Page }) => {
    base64Page.switchToEncode();
    base64Page.enterInput('Hello, QA World!');
    base64Page.process();
    const output = await base64Page.grabOutput();
    base64Page.seePageTitle('Base64');
    base64Page.copyOutput();
}).tag('@smoke').tag('@regression');

Data(validBase64Table).Scenario('Data-driven Base64 encode and decode validation', async ({ current, base64Page }) => {
    // Test Encode
    base64Page.switchToEncode();
    base64Page.enterInput(current.plain);
    base64Page.process();

    // Test Decode
    base64Page.switchToDecode();
    base64Page.enterInput(current.encoded);
    base64Page.process();
}).tag('@regression');
