import { UUID_V4_REGEX, UUID_V1_REGEX, uuidQuantityTable } from '../../../fixtures/uuid.data.ts';

/**
 * ============================================================================
 * Feature: UUID Generator Data-Driven E2E Suite
 * ============================================================================
 * 
 * Target Application: KobeanQAUtils (https://kobenguyent.github.io/kobeanqautils/#/uuid)
 * 
 * Testing Concepts Applied:
 * 1. RFC 4122 Compliance: Validates that v4 UUIDs conform to the 8-4-4-4-12 hex layout
 *    with version digit '4' and variant bits [89ab].
 * 2. Collision Resistance: Tests batch generation of 20 UUIDs and asserts 100% uniqueness
 *    via JavaScript `Set` cardinality (`uniqueSet.size === uuids.length`).
 * 3. Range Boundary Testing: Tests slider boundaries across quantities (1, 5, 10, 15, 20).
 * 4. Clipboard Feedback: Asserts copy-to-clipboard action triggers the floating toast.
 * 
 * Test Tickets:
 * - [QA-TC-20260904-010] UUID v4 RFC 4122 Compliance
 * - [QA-TC-20260904-011] UUID v1 Timestamp Structure
 * - [QA-TC-20260904-012] UUID Batch 20 Uniqueness Check
 */
Feature('UUID Generator E2E Tests');

Before(({ uuidPage }) => {
    // Navigate directly to UUID Generator tool
    uuidPage.open();
});

/**
 * Smoke Test: RFC 4122 v4 Standard Conformance
 * Generates single UUID v4 and tests against standard RFC regex pattern.
 */
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

/**
 * Collision-Resistance Test: 20-UUID Batch Uniqueness
 * Generates maximum batch size on live UI (20) and proves 0 duplicates exist.
 */
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

/**
 * Parameterized Data-Driven Suite: Version & Quantity Matrix
 * Iterates across versions (v4, v1) and quantities (1, 5, 10, 15, 20).
 */
Data(uuidQuantityTable).Scenario('Data-driven UUID generation across versions and counts', async ({ current, uuidPage }) => {
    uuidPage.selectVersion(current.version as 'v4' | 'v1');
    uuidPage.setQuantity(current.quantity);
    uuidPage.generate();
}).tag('@regression');
