import { BasePage } from './base/BasePage';

class HomePage extends BasePage {
    constructor() {
        super('#/');
    }

    readonly selectors = {
        brand: 'a[data-testid="logo"]',
        brandLogo: 'a[data-testid="logo"] img[alt="KobeanQAUtils"]',
        searchInput: '#navbar-search',
        exploreToolsBtn: 'a.home-btn-primary',
        quoteCard: '.home-card.home-card-quote',
        quoteShuffleBtn: 'button.home-card-shuffle',
    };

    waitForPageLoaded(): void {
        this.I.waitForElement(this.selectors.brand, 10);
        this.I.seeElement(this.selectors.brandLogo);
    }

    seeBrandIsVisible(): void {
        this.I.waitForElement(this.selectors.brand, 10);
        this.I.seeElement(this.selectors.brandLogo);
    }

    clickExploreTools(): void {
        this.I.waitForElement(this.selectors.exploreToolsBtn, 5);
        this.I.click(this.selectors.exploreToolsBtn);
        this.waitForRoute('#/explore');
    }

    shuffleQuote(): void {
        this.I.waitForElement(this.selectors.quoteShuffleBtn, 5);
        this.I.click(this.selectors.quoteShuffleBtn);
    }

    async grabQuoteText(): Promise<string> {
        this.I.waitForElement(this.selectors.quoteCard, 5);
        return await this.I.grabTextFrom(this.selectors.quoteCard);
    }

    seeHomeCardQuote(): void {
        this.I.waitForElement(this.selectors.quoteCard, 5);
        this.I.seeElement(this.selectors.quoteCard);
    }
}

export default new HomePage();