import { catalogTable } from '../../fixtures/catalog.data.ts';

/**
 * ============================================================================
 * Feature: Universal 64-Tool Discovery & Runtime Health Crawler
 * ============================================================================
 * 
 * Target Application: KobeanQAUtils (https://kobenguyent.github.io/kobeanqautils/)
 * 
 * Objectives:
 * 1. 100% Surface Coverage: Visits every single route defined in `ALL_TOOLS` (64 tools).
 * 2. DOM Rendering SLA: Ensures tool titles and primary layouts mount within 10 seconds.
 * 3. Runtime Exception Hygiene: Inspects browser logs to assert zero uncaught JavaScript errors.
 * 
 * Test Tickets:
 * - [QA-TC-20260904-017] Universal 64-Tool Discovery Health Crawl
 */
Feature('Universal 64-Tool Discovery & Health Crawler');

/**
 * Parameterized Health Crawler:
 * Executes 64 micro-scenarios across all navigation, converter, generator, API,
 * testing, and developer tools in the application portfolio.
 */
Data(catalogTable).Scenario(
    'Crawl tool route, assert header rendering and zero console errors',
    async ({ I, current }) => {
        // Step 1: Navigate directly to the tool hash route
        I.amOnPage(current.route);

        // Step 2: Assert expected tool title is rendered in the DOM within 10s SLA
        I.waitForText(current.expectedHeader, 10);

        // Step 3: Enforce browser console hygiene (zero uncaught JavaScript errors)
        await I.assertZeroConsoleErrors();
    }
).tag('@smoke').tag('@discovery');
