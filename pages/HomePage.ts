import { BasePage } from './base/BasePage.ts';
import { commonLocators } from '../config/locators.config.ts';

/**
 * ============================================================================
 * Home Landing Page Object
 * ============================================================================
 * 
 * Encapsulates hero interactions, brand assertions, primary CTA navigation,
 * and the daily QA quote card widget on the landing view.
 */
class HomePage extends BasePage {
    constructor() {
        super('#/');
    }

    readonly selectors = {
        brand: commonLocators.navigation.brandLogo,
        brandLogo: commonLocators.navigation.brandImage,
        searchInput: commonLocators.navigation.searchInput,
        exploreToolsBtn: 'a.home-btn-primary',
        quoteCard: '.home-card.home-card-quote',
        quoteShuffleBtn: 'button.home-card-shuffle',
    };

    /**
     * Asserts that the homepage has fully loaded and the brand logo is visible.
     */
    waitForPageLoaded(): void {
        this.I.waitForElement(this.selectors.brand, 10);
        this.I.seeElement(this.selectors.brandLogo);
    }

    /**
     * Asserts that the primary brand identity logo is visible.
     */
    seeBrandIsVisible(): void {
        this.I.waitForElement(this.selectors.brand, 10);
        this.I.seeElement(this.selectors.brandLogo);
    }

    /**
     * Clicks the primary hero CTA 'Explore All Tools' and awaits route transition to '#/explore'.
     */
    clickExploreTools(): void {
        this.I.waitForElement(this.selectors.exploreToolsBtn, 5);
        this.I.click(this.selectors.exploreToolsBtn);
        this.waitForRoute('#/explore');
    }

    /**
     * Triggers the random quote shuffle button.
     */
    shuffleQuote(): void {
        this.I.waitForElement(this.selectors.quoteShuffleBtn, 5);
        this.I.click(this.selectors.quoteShuffleBtn);
    }

    /**
     * Retrieves the text content of the active QA inspiration quote.
     * @returns Promise resolving to the quote string
     */
    async grabQuoteText(): Promise<string> {
        this.I.waitForElement(this.selectors.quoteCard, 5);
        return await this.I.grabTextFrom(this.selectors.quoteCard);
    }

    /**
     * Asserts that the quote widget is present on the page.
     */
    seeHomeCardQuote(): void {
        this.I.waitForElement(this.selectors.quoteCard, 5);
        this.I.seeElement(this.selectors.quoteCard);
    }
}

export default new HomePage();