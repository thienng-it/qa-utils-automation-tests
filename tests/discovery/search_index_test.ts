Feature('Global Search Index Autocomplete');

Before(({ homePage }) => {
    homePage.open();
});

Scenario('Should search for UUID Generator in navbar and navigate', ({ navBar, uuidPage }) => {
    navBar.searchFor('UUID');
    navBar.selectSearchResult('UUID Generator');
    uuidPage.waitForPageLoaded();
    navBar.clearSearch();
}).tag('@smoke').tag('@discovery');

Scenario('Should search for Base64 in navbar and navigate', ({ navBar, base64Page }) => {
    navBar.searchFor('Base64');
    navBar.selectSearchResult('Base64 Encode/Decode');
    base64Page.waitForPageLoaded();
    navBar.clearSearch();
}).tag('@smoke').tag('@discovery');

Scenario('Should search for JSON Formatter in navbar and navigate', ({ navBar, jsonFormatterPage }) => {
    navBar.searchFor('JSON Formatter');
    navBar.selectSearchResult('JSON Formatter');
    jsonFormatterPage.waitForPageLoaded();
    navBar.clearSearch();
}).tag('@regression').tag('@discovery');

Scenario('Should search for JWT Debugger in navbar and navigate', ({ navBar, jwtPage }) => {
    navBar.searchFor('JWT');
    navBar.selectSearchResult('JWT Debugger');
    jwtPage.waitForPageLoaded();
    navBar.clearSearch();
}).tag('@regression').tag('@discovery');
