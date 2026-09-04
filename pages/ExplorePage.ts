import { BasePage } from './base/BasePage';

class ExplorePage extends BasePage {
    constructor() {
        super('#/explore');
    }

    readonly selectors = {
        title: 'h1.explore-title, h1',
        searchInput: 'input[placeholder*="Search"], input.explore-search',
        categoryPill: (category: string) => `//button[contains(@class, "explore-pill") and contains(., "${category}")]`,
        toolCards: '.tool-card, .grid-item',
        toolCardByTitle: (title: string) => `//div[contains(@class, "tool-card")]//h3[contains(., "${title}")]`,
    };

    waitForPageLoaded(): void {
        this.I.waitForElement(this.selectors.title, 10);
        this.I.see('Explore');
    }

    filterByCategory(category: string): void {
        this.I.click(this.selectors.categoryPill(category));
    }

    searchTool(query: string): void {
        this.I.fillField(this.selectors.searchInput, query);
    }

    clickToolCard(title: string): void {
        this.I.click(this.selectors.toolCardByTitle(title));
    }
}

export default new ExplorePage();
