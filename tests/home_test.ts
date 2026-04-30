import { EXPECTED, NAV_GROUPS } from '../data/testData';

Feature('Home Page');

// Before each test
Before(({ homePage }) => {
    homePage.open();
});

// Scenario 1: Brand and Identity
Scenario('Should display the QA Utils brand', ({ I, homePage }) => {
    I.seeElement(homePage.selectors.brand);
    I.see(EXPECTED.brandText);
}).tag('@smoke');


// Scenario 2: Search
Scenario('Should search for a tool and see results', ({ I, homePage}) => {
    homePage.searchForTool('UUID');
    homePage.seeSearchResult('UUID Generator');
    homePage.clearSearch();
}).tag('@smoke');

// Scenario 3: Navigation dropdown groups exist
Scenario('Should display all navigation groups', ({ I}) => {
    // Verify each nav group dropdown button is present
    NAV_GROUPS.forEach((group) => {
        I.see(group);
    });
}).tag('@regression');

// Scenario 4: Theme toggle works
Scenario('Should toggle the theme without errors', ({ I, homePage }) => {
    homePage.toggleTheme();
    // After clicking, the theme attribute on <html> changes
    I.seeElement(homePage.selectors.themeToggle);
}).tag('@regression');

// Scenario 5: Navigate to home from any page
Scenario('Should navigate back to home via home link', ({ I, homePage}) => {
    I.navigateTo('#/uuid');
    homePage.clickHomeLink();
    I.seeElement(homePage.selectors.brand);
}).tag('@regression');