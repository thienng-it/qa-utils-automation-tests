Feature('Color Converter E2E Tests');

Before(({ colorPage }) => {
    colorPage.open();
});

Scenario('Should enter HEX color and see RGB conversion', ({ colorPage }) => {
    colorPage.enterHex('#00ff00');
    colorPage.seeRgb('0', '255', '0');
    colorPage.seePageTitle('Color');
}).tag('@smoke').tag('@regression');
