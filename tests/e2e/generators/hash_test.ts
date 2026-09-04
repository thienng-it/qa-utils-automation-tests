import { hashVectorsTable } from '../../../fixtures/hash.data.ts';

/**
 * ============================================================================
 * Feature: Cryptographic Hash Generator E2E Suite
 * ============================================================================
 * 
 * Target Application: KobeanQAUtils (https://kobenguyent.github.io/kobeanqautils/#/hash)
 * 
 * Testing Concepts Applied:
 * 1. Cryptographic Test Vectors: Validates SHA-256 and SHA-1 output against
 *    official NIST / RFC test vector hashes.
 * 2. Reactive Debounced Computation: Uses dynamic `waitForFunction` polling
 *    to ensure client-side hashing completes before assertion.
 * 
 * Test Tickets:
 * - [QA-TC-20260904-013] Hash SHA-256 RFC Test Vectors
 */
Feature('Hash Generator E2E Tests');

Before(({ hashPage }) => {
    // Open Hash Generator tool
    hashPage.open();
});

/**
 * Smoke Test: Plaintext Cryptographic Hash Generation
 * Inputs 'qa-utils' and verifies output generation and header rendering.
 */
Scenario('Should generate hashes for plain text', ({ hashPage }) => {
    hashPage.enterText('qa-utils');
    hashPage.seeHashGenerated();
    hashPage.seeHash('db859cd4');
    hashPage.seePageTitle('Hash');
}).tag('@smoke').tag('@regression');

/**
 * Parameterized Data-Driven Suite: RFC Standard Vector Verification
 * Iterates across algorithm and input vectors from hashVectorsTable.
 */
Data(hashVectorsTable).Scenario('Data-driven hash vector validation', async ({ current, hashPage }) => {
    hashPage.enterText(current.input);
    hashPage.seeHashGenerated();
    hashPage.seeHash(current.expectedHash);
}).tag('@regression');
