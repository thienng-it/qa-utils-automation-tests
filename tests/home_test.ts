import { EXPECTED, NAV_GROUPS } from '../data/testData.ts';

/**
 * ============================================================================
 * Feature: Home Page & Global Navigation Experience
 * ============================================================================
 * 
 * Target Application: KobeanQAUtils (https://kobenguyent.github.io/kobeanqautils/)
 * 
 * Business Goals:
 * 1. Brand Identity: Verify users land on the correct application and see the brand logo.
 * 2. Search Usability: Ensure fast tool discovery via the navbar search bar.
 * 3. Spatial Category Access: Verify main navigation groups (Converters, Generators, etc.).
 * 4. UX Accessibility: Ensure theme toggle (dark/light) functions smoothly.
 * 5. Exploration Flow: Validate primary CTA transitions to the full 64-tool catalog.
 * 
 * Test Levels:
 * - @smoke: P0 critical happy path verifying landing and discovery.
 * - @regression: P1 functional validation of themes, categories, and quote shuffling.
 */
Feature('Home Page & Core Navigation');

Before(({ homePage }) => {
    // Navigate to homepage before each scenario and ensure DOM readiness
    homePage.open();
});

/**
 * [QA-TC-20260904-019] Smoke Test: Brand Identity Verification
 * Asserts the presence of the logo and brand identity in the header.
 */
Scenario('Should display the KobeanQAUtils brand', ({ homePage }) => {
    homePage.seeBrandIsVisible();
}).tag('@smoke');

/**
 * [QA-TC-20260904-018] Smoke Test: Navbar Search Tool Discovery
 * Simulates user searching for 'UUID' and clicking the autocomplete dropdown item.
 */
Scenario('Should search for a tool via navbar and navigate', ({ navBar }) => {
    navBar.searchFor('UUID');
    navBar.selectSearchResult('UUID Generator');
    navBar.clearSearch();
}).tag('@smoke');

/**
 * Regression Test: Navigation Groups Surface
 * Iterates through all top-level category groups and verifies their visibility.
 */
Scenario('Should display all navigation groups', ({ I }) => {
    NAV_GROUPS.forEach((group) => {
        I.see(group);
    });
}).tag('@regression');

/**
 * [QA-TC-20260904-020] Regression Test: Theme Cycling Usability
 * Toggles the color theme to verify state transitions without console exceptions.
 */
Scenario('Should toggle the theme without errors', ({ navBar }) => {
    navBar.toggleTheme();
}).tag('@regression');

/**
 * Regression Test: Return to Home Navigation
 * Verifies breadcrumb/home logo returns user to the root landing view.
 */
Scenario('Should navigate back to home via navbar brand/home link', ({ I, navBar, homePage }) => {
    I.amOnPage('#/uuid');
    navBar.clickHome();
    homePage.seeBrandIsVisible();
}).tag('@regression');

/**
 * Regression Test: Hero CTA 'Explore Tools' Flow
 * Validates the primary call-to-action button transitions smoothly to '#/explore'.
 */
Scenario('Should click on "Explore Tools" button and navigate to explore catalog', ({ homePage, explorePage }) => {
    homePage.clickExploreTools();
    explorePage.waitForPageLoaded();
}).tag('@regression');

/**
 * Regression Test: Daily QA Inspiration Quote Shuffle
 * Verifies that clicking the shuffle button renders an inspirational quote card.
 */
Scenario('Should shuffle quote and display quote content', ({ homePage }) => {
    homePage.shuffleQuote();
    homePage.seeHomeCardQuote();
}).tag('@regression');