const { I } = inject();

class HomePage {
    // URL
    readonly url = '#/';
    
    // Selectors
    readonly selectors = {
        brand: '[data-testid="logo"]',
        searchInput: '#navbar-search',
        homeLink: '[aria-label="Go to home page"]',
        themeToggle: '[aria-label^="Theme:"]', // starts-with match (label changes per theme)
    };

    // Actions
    open(): void {
        I.amOnPage(this.url);
    }

    seeBrandIsVisible(): void {
        I.seeElement(this.selectors.brand);
        I.see(this.selectors.brand);
    }

    searchForTool(toolName: string): void {
        I.fillField(this.selectors.searchInput, toolName);
    }

    clearSearch(): void {
        I.clearField(this.selectors.searchInput);
    }

    seeSearchResult(expectedText: string): void {
        I.see(expectedText);
    }

    clickHomeLink(): void {
        I.click(this.selectors.homeLink);
    }

    toggleTheme(): void {
        I.click(this.selectors.themeToggle);
    }
}

// Export an HomePage instance
export = new HomePage();