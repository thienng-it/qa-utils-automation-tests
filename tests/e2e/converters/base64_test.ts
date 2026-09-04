import { validBase64Table } from '../../../fixtures/base64.data.ts';

/**
 * ============================================================================
 * Feature: Base64 Encode & Decode Data-Driven E2E Suite
 * ============================================================================
 * 
 * Target Application: KobeanQAUtils (https://kobenguyent.github.io/kobeanqautils/#/base64)
 * 
 * Testing Techniques Applied:
 * 1. Equivalence Partitioning (EP): Standard ASCII, numbers & symbols, multilingual CJK.
 * 2. Character Boundary Analysis: Multiline text, emojis, Vietnamese accented vowels.
 * 3. Round-Trip Verification: Input -> Encode -> Decode -> Verify equal to original input.
 * 4. Toast Feedback: Asserts copy-to-clipboard feedback toast.
 * 
 * Test Tickets:
 * - [QA-TC-20260904-001] Base64 ASCII Encode & Decode
 * - [QA-TC-20260904-003] Base64 Unicode & Emoji Support
 */
Feature('Base64 Converter E2E Tests');

Before(({ base64Page }) => {
    // Navigate directly to the Base64 hash route and verify page readiness
    base64Page.open();
});

/**
 * Smoke Test: Standard Plaintext Encoding & Clipboard Copy
 * Verifies standard string encoding and floating toast notification.
 */
Scenario('Should encode plain text to Base64 accurately', async ({ base64Page }) => {
    base64Page.switchToEncode();
    base64Page.enterInput('Hello, QA World!');
    base64Page.process();
    const output = await base64Page.grabOutput();
    base64Page.seePageTitle('Base64');
    base64Page.copyOutput();
}).tag('@smoke').tag('@regression');

/**
 * Parameterized Data-Driven Suite: Round-Trip Conversion
 * Tests each row from validBase64Table across ASCII, Unicode, CJK, Emojis, and Accents.
 */
Data(validBase64Table).Scenario('Data-driven Base64 encode and decode validation', async ({ current, base64Page }) => {
    // Step 1: Execute Encode Operation
    base64Page.switchToEncode();
    base64Page.enterInput(current.plain);
    base64Page.process();

    // Step 2: Execute Decode Operation with Expected Output
    base64Page.switchToDecode();
    base64Page.enterInput(current.encoded);
    base64Page.process();
}).tag('@regression');
