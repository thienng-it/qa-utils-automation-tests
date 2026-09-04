import { BasePage } from './base/BasePage.ts';
import { commonLocators } from '../config/locators.config.ts';

/**
 * ============================================================================
 * Explore 64-Tool Catalog Page Object
 * ============================================================================
 * 
 * Provides automated interactions for discovering tools in the catalog grid:
 * - Filtering tools by category pills (Generators, Converters, API, Tools, Learn)
 * - Filtering tools via in-page search input
 * - Selecting individual tool cards to navigate to their workspace
 */
class ExplorePage extends BasePage {
    constructor() {
        super('#/explore');
    }

    readonly selectors = {
        title: commonLocators.layout.toolHeaderTitle,
        searchInput: 'input[placeholder*="Search"], input.explore-search',
        categoryPill: (category: string) => `//button[contains(@class, "explore-pill") and contains(., "${category}")]`,
        toolCards: commonLocators.layout.toolCard,
        toolCardByTitle: (title: string) => `//div[contains(@class, "tool-card")]//h3[contains(., "${title}")]`,
    };

    /**
     * Waits for the explore catalog grid to mount and verifies header visibility.
     */
    waitForPageLoaded(): void {
        this.I.waitForElement(this.selectors.title, 10);
        this.I.see('Explore');
    }

    /**
     * Filters the catalog grid by clicking a category pill.
     * @param category Category name (e.g. 'Generators', 'Converters')
     */
    filterByCategory(category: string): void {
        this.I.click(this.selectors.categoryPill(category));
    }

    /**
     * Types into the in-page explore search filter.
     * @param query Search query to filter cards
     */
    searchTool(query: string): void {
        this.I.fillField(this.selectors.searchInput, query);
    }

    /**
     * Clicks a specific tool card in the catalog grid by its title.
     * @param title Title of the target tool card
     */
    clickToolCard(title: string): void {
        this.I.click(this.selectors.toolCardByTitle(title));
    }
}

export default new ExplorePage();
