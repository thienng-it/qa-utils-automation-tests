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
        exploreTools: '[aria-label="Explore tools"]',
        exploreToolsTitle: '.explore-title',
        quoteButton: '[aria-label="Get another random quote"]',
        homeCardQuoteText: '.home-card-quote-text',
        homeCardQuoteAuthor: '.home-card-quote-author',
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

    clickExploreTools(exploreToolsName: string): void {
        I.click(this.selectors.exploreTools);
    }

    seeExploreToolsTitle(title: string): void {
        I.see(title);
        I.seeElement(this.selectors.exploreToolsTitle);
    }

    clickQuoteButton(): void {
        I.click(this.selectors.quoteButton);
    }

    seeQuoteButtonIsClickable(): void {
        I.seeElement(this.selectors.quoteButton);
    }

    seeHomeCardQuote(): void {
        I.seeElement(this.selectors.homeCardQuoteText);
        I.seeElement(this.selectors.homeCardQuoteAuthor);
    }
}

// Export an HomePage instance
export = new HomePage();