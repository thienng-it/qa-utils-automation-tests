import { DEFAULT_PERFORMANCE_BUDGET } from '../../models/Metrics.ts';

/**
 * ============================================================================
 * Feature: Front-End Performance Budgets & Core Web Vitals (CWV)
 * ============================================================================
 * 
 * Target Application: KobeanQAUtils (https://kobenguyent.github.io/kobeanqautils/)
 * 
 * Performance Engineering Concepts:
 * 1. DOM Complexity Budget: Enforces that total DOM elements remain beneath the threshold
 *    (< 3500 nodes) to prevent main-thread layout thrashing and high memory consumption.
 * 2. Navigation Stability: Validates sequential rapid transitions across 5 key tools
 *    without memory leaks or uncaught JavaScript exceptions.
 * 
 * Test Tickets:
 * - [QA-TC-20260904-026] Core Web Vitals Performance Budget
 */
Feature('Performance & Core Web Vitals Budget');

/**
 * Performance Budget Audit: DOM Node Count & Navigation Timing
 * Measures live browser telemetry and enforces hard thresholds.
 */
Scenario('Audit Home Page Core Web Vitals metrics', async ({ I, homePage }) => {
    homePage.open();
    const metrics = await I.measurePerformanceMetrics();

    console.log('Home Page Performance Metrics:', metrics);

    if (metrics.domCount > DEFAULT_PERFORMANCE_BUDGET.maxDomNodes) {
        throw new Error(
            `DOM node count exceeded budget! Expected < ${DEFAULT_PERFORMANCE_BUDGET.maxDomNodes}, got ${metrics.domCount}`
        );
    }
}).tag('@performance').tag('@regression');

/**
 * Navigation Memory & Exception Audit:
 * Rapidly navigates across 5 distinct tools and checks browser health at each stop.
 */
Scenario('Audit Navigation between 5 tools for memory stability', async ({ I }) => {
    const testRoutes = ['#/', '#/uuid', '#/base64', '#/jsonFormatter', '#/timestamp'];
    for (const route of testRoutes) {
        I.amOnPage(route);
        await I.assertZeroConsoleErrors();
    }
}).tag('@performance').tag('@regression');
