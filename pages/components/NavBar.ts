import { BaseComponent } from '../base/BaseComponent.ts';
import { commonLocators } from '../../config/locators.config.ts';

/**
 * ============================================================================
 * Global Navigation Bar Component Object
 * ============================================================================
 * 
 * Encapsulates all actions and locators for the top navigation header:
 * - Brand logo verification
 * - Real-time search autocomplete & one-click navigation
 * - Multi-theme cycle toggle (Dark / Light / Dim)
 * - Category navigation menus (Converters, Generators, API, Tools, Learn, Palace)
 */
class NavBar extends BaseComponent {
    constructor() {
        super('nav.navbar');
    }

    readonly selectors = {
        brand: commonLocators.navigation.brandLogo,
        brandLogo: commonLocators.navigation.brandImage,
        searchInput: commonLocators.navigation.searchInput,
        searchResults: commonLocators.navigation.searchDropdownMenu,
        searchResultItem: (title: string) => `//div[contains(@class, "dropdown-menu") and contains(@class, "show")]//a[contains(@class, "dropdown-item") and contains(., "${title}")]`,
        themeToggle: commonLocators.navigation.themeCycleButton,
        homeLink: 'a[aria-label="Go to home page"]',
        navDropdownBtn: (category: string) => `//button[contains(@class, "nav-dropdown-btn") or contains(@class, "glass-link")][contains(., "${category}")]`,
        navDropdownItem: (toolName: string) => `//div[contains(@class, "nav-dropdown-menu") or contains(@class, "dropdown-menu")]//a[contains(., "${toolName}")]`,
    };

    /**
     * Asserts that the KobeanQAUtils brand logo is rendered and visible.
     */
    seeBrand(): void {
        this.I.waitForElement(this.selectors.brand, 10);
        this.I.seeElement(this.selectors.brandLogo);
    }

    /**
     * Types a search query into the global navigation search box.
     * @param query The search keyword (e.g. 'UUID', 'Base64')
     */
    searchFor(query: string): void {
        this.I.waitForElement(this.selectors.searchInput, 5);
        this.I.fillField(this.selectors.searchInput, query);
    }

    /**
     * Clears any active text from the search input.
     */
    clearSearch(): void {
        this.I.clearField(this.selectors.searchInput);
    }

    /**
     * Waits for the autocomplete dropdown to appear and clicks the matching tool item.
     * @param toolName Exact or partial name of the tool to select
     */
    selectSearchResult(toolName: string): void {
        this.I.waitForElement(this.selectors.searchResults, 5);
        this.I.click(this.selectors.searchResultItem(toolName));
    }

    /**
     * Clicks the theme toggle button to cycle between available themes.
     */
    toggleTheme(): void {
        this.I.waitForElement(this.selectors.themeToggle, 5);
        this.I.click(this.selectors.themeToggle);
    }

    /**
     * Expands a category dropdown menu and selects a tool.
     * @param category Navigation category label (e.g. 'Converters')
     * @param toolName Tool title inside the menu (e.g. 'Base64 Encode/Decode')
     */
    openCategoryAndSelect(category: string, toolName: string): void {
        this.I.click(this.selectors.navDropdownBtn(category));
        this.I.waitForElement(this.selectors.navDropdownItem(toolName), 5);
        this.I.click(this.selectors.navDropdownItem(toolName));
    }

    /**
     * Clicks the home link in the header.
     */
    clickHome(): void {
        this.I.click(this.selectors.homeLink);
    }
}

export default new NavBar();
