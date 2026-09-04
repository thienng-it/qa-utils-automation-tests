import { EXPECTED, NAV_GROUPS } from '../data/testData.ts';

Feature('Home Page & Core Navigation');

Before(({ I, homePage }) => {
    homePage.open();
});

Scenario('Should display the KobeanQAUtils brand', ({ I, homePage }) => {
    homePage.seeBrandIsVisible();
}).tag('@smoke');

Scenario('Should search for a tool via navbar and navigate', ({ navBar }) => {
    navBar.searchFor('UUID');
    navBar.selectSearchResult('UUID Generator');
    navBar.clearSearch();
}).tag('@smoke');

Scenario('Should display all navigation groups', ({ I }) => {
    NAV_GROUPS.forEach((group) => {
        I.see(group);
    });
}).tag('@regression');

Scenario('Should toggle the theme without errors', ({ navBar }) => {
    navBar.toggleTheme();
}).tag('@regression');

Scenario('Should navigate back to home via navbar brand/home link', ({ I, navBar, homePage }) => {
    I.amOnPage('#/uuid');
    navBar.clickHome();
    homePage.seeBrandIsVisible();
}).tag('@regression');

Scenario('Should click on "Explore Tools" button and navigate to explore catalog', ({ homePage, explorePage }) => {
    homePage.clickExploreTools();
    explorePage.waitForPageLoaded();
}).tag('@regression');

Scenario('Should shuffle quote and display quote content', ({ homePage }) => {
    homePage.shuffleQuote();
    homePage.seeHomeCardQuote();
}).tag('@regression');