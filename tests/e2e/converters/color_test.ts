/**
 * ============================================================================
 * Feature: Color Space Converter (HEX / RGB / HSL) E2E Suite
 * ============================================================================
 * 
 * Target Application: KobeanQAUtils (https://kobenguyent.github.io/kobeanqautils/#/color-converter)
 * 
 * Testing Concepts Applied:
 * 1. Synchronous Bidirectional Translation: Types HEX code into primary input
 *    and verifies reactive computation across Red, Green, Blue channel inputs.
 * 
 * Test Tickets:
 * - [QA-TC-20260904-009] Color Converter Synchronized HEX/RGB/HSL
 */
Feature('Color Converter E2E Tests');

Before(({ colorPage }) => {
    // Open Color Converter tool
    colorPage.open();
});

/**
 * Functional & Smoke Test: HEX to RGB Conversion
 * Inputs green `#00ff00` and validates channels: R=0, G=255, B=0.
 */
Scenario('Should enter HEX color and see RGB conversion', ({ colorPage }) => {
    colorPage.enterHex('#00ff00');
    colorPage.seeRgb('0', '255', '0');
    colorPage.seePageTitle('Color');
}).tag('@smoke').tag('@regression');
