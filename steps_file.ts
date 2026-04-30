// in this file you can append custom step methods to 'I' object

export = function() {
  return actor({
    // Custom steps: navigate to any hash route and wait for the page.
    navigateTo(route: string): void {
      this.amOnPage(route);
      this.waitForElement('body', 10);
    },
  });
}
