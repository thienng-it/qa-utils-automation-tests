import { hashVectorsTable } from '../../../fixtures/hash.data.ts';

Feature('Hash Generator E2E Tests');

Before(({ hashPage }) => {
    hashPage.open();
});

Scenario('Should generate hashes for plain text', ({ hashPage }) => {
    hashPage.enterText('qa-utils');
    hashPage.seeHashGenerated();
    hashPage.seeHash('db859cd4');
    hashPage.seePageTitle('Hash');
}).tag('@smoke').tag('@regression');

Data(hashVectorsTable).Scenario('Data-driven hash vector validation', async ({ current, hashPage }) => {
    hashPage.enterText(current.input);
    hashPage.seeHashGenerated();
    hashPage.seeHash(current.expectedHash);
}).tag('@regression');
