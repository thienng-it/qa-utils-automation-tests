import { BaseComponent } from '../base/BaseComponent';

class NavBar extends BaseComponent {
    constructor() {
        super('nav.navbar');
    }

    readonly selectors = {
        brand: 'a[data-testid="logo"]',
        brandLogo: 'a[data-testid="logo"] img[alt="KobeanQAUtils"]',
        searchInput: '#navbar-search',
        searchResults: '.dropdown-menu.show',
        searchResultItem: (title: string) => `//div[contains(@class, "dropdown-menu") and contains(@class, "show")]//a[contains(@class, "dropdown-item") and contains(., "${title}")]`,
        themeToggle: 'button.theme-cycle-btn, button[aria-label*="Theme:"]',
        homeLink: 'a[aria-label="Go to home page"]',
        navDropdownBtn: (category: string) => `//button[contains(@class, "nav-dropdown-btn") or contains(@class, "glass-link")][contains(., "${category}")]`,
        navDropdownItem: (toolName: string) => `//div[contains(@class, "nav-dropdown-menu") or contains(@class, "dropdown-menu")]//a[contains(., "${toolName}")]`,
    };

    seeBrand(): void {
        this.I.waitForElement(this.selectors.brand, 10);
        this.I.seeElement(this.selectors.brandLogo);
    }

    searchFor(query: string): void {
        this.I.waitForElement(this.selectors.searchInput, 5);
        this.I.fillField(this.selectors.searchInput, query);
    }

    clearSearch(): void {
        this.I.clearField(this.selectors.searchInput);
    }

    selectSearchResult(toolName: string): void {
        this.I.waitForElement(this.selectors.searchResults, 5);
        this.I.click(this.selectors.searchResultItem(toolName));
    }

    toggleTheme(): void {
        this.I.waitForElement(this.selectors.themeToggle, 5);
        this.I.click(this.selectors.themeToggle);
    }

    openCategoryAndSelect(category: string, toolName: string): void {
        this.I.click(this.selectors.navDropdownBtn(category));
        this.I.waitForElement(this.selectors.navDropdownItem(toolName), 5);
        this.I.click(this.selectors.navDropdownItem(toolName));
    }

    clickHome(): void {
        this.I.click(this.selectors.homeLink);
    }
}

export default new NavBar();
