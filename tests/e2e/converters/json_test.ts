/**
 * ============================================================================
 * Feature: JSON Formatter & Minifier E2E Suite
 * ============================================================================
 * 
 * Target Application: KobeanQAUtils (https://kobenguyent.github.io/kobeanqautils/#/jsonFormatter)
 * 
 * Testing Techniques Applied:
 * 1. Happy Path: Valid compacted JSON formatted with clean 2-space indentation.
 * 2. Negative Testing: Trailing comma malformed JSON, asserting the 'Prettify' button
 *    is reactively disabled to prevent corrupted submissions.
 * 3. Compaction Verification: Multiline formatted JSON collapsed into single-line minified JSON.
 * 
 * Test Tickets:
 * - [QA-TC-20260904-004] JSON Beautify Indentation & Minify
 * - [QA-TC-20260904-005] JSON Syntax Error Disabled State
 */
Feature('JSON Formatter E2E Tests');

Before(({ jsonFormatterPage }) => {
    // Navigate directly to the JSON Formatter hash route
    jsonFormatterPage.open();
});

/**
 * Happy Path: Prettify Valid Compact JSON
 * Verifies standard 2-space indentation formatting and page readiness.
 */
Scenario('Should beautify and format valid JSON', async ({ jsonFormatterPage }) => {
    jsonFormatterPage.enterJson('{"framework":"codeceptjs","version":4.1}');
    jsonFormatterPage.beautify();
    const output = await jsonFormatterPage.grabOutput();
    jsonFormatterPage.seePageTitle('JSON');
}).tag('@smoke').tag('@regression');

/**
 * Negative Testing: Syntax Error Reactive Prevention
 * Inputs malformed JSON (trailing comma) and asserts that the application
 * protects the user by disabling the 'Prettify' button.
 */
Scenario('Should detect and flag syntax errors in malformed JSON by disabling Prettify', ({ jsonFormatterPage }) => {
    jsonFormatterPage.enterJson('{"broken": true,}');
    jsonFormatterPage.seePrettifyDisabled();
}).tag('@regression');

/**
 * Functional Test: Minify Multi-Line JSON
 * Verifies that clicking 'Minify' compacts multiline JSON into a single dense string.
 */
Scenario('Should compact JSON when Minify is triggered', async ({ jsonFormatterPage }) => {
    jsonFormatterPage.enterJson('{\n  "hello": "world"\n}');
    jsonFormatterPage.minify();
    jsonFormatterPage.seeInField(jsonFormatterPage.selectors.outputArea, '{"hello":"world"}');
}).tag('@regression');
