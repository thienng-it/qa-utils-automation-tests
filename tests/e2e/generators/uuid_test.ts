import { UUID_V4_REGEX, UUID_V1_REGEX, uuidQuantityTable } from '../../../fixtures/uuid.data.ts';

Feature('UUID Generator E2E Tests');

Before(({ uuidPage }) => {
    uuidPage.open();
});

Scenario('Should generate valid v4 UUID matching RFC 4122 pattern', async ({ uuidPage }) => {
    uuidPage.selectVersion('v4');
    uuidPage.setQuantity(1);
    uuidPage.generate();
    const uuids = await uuidPage.grabGeneratedUUIDs();
    if (uuids.length > 0) {
        const matches = UUID_V4_REGEX.test(uuids[0]);
        if (!matches) {
            throw new Error(`Generated UUID does not match RFC 4122 v4 pattern: ${uuids[0]}`);
        }
    }
    uuidPage.copyOutput();
}).tag('@smoke').tag('@regression');

Scenario('Should generate batch of 20 UUIDs with 100% uniqueness', async ({ uuidPage }) => {
    uuidPage.selectVersion('v4');
    uuidPage.setQuantity(20);
    uuidPage.generate();
    const uuids = await uuidPage.grabGeneratedUUIDs();
    const uniqueSet = new Set(uuids);
    if (uniqueSet.size !== uuids.length) {
        throw new Error(`Duplicate UUID detected in batch! Expected ${uuids.length}, got ${uniqueSet.size} unique.`);
    }
}).tag('@regression');

Data(uuidQuantityTable).Scenario('Data-driven UUID generation across versions and counts', async ({ current, uuidPage }) => {
    uuidPage.selectVersion(current.version as 'v4' | 'v1');
    uuidPage.setQuantity(current.quantity);
    uuidPage.generate();
}).tag('@regression');
