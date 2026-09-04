/**
 * ============================================================================
 * Centralized Locators Repository (KobeanQAUtils)
 * ============================================================================
 * 
 * This repository contains strongly-typed, reusable locator constants for UI
 * components across the KobeanQAUtils application.
 * 
 * Best Practices for QA Engineers:
 * --------------------------------
 * 1. Single Source of Truth: When the front-end layout or class names change,
 *    update the selector here once instead of updating dozens of page objects.
 * 2. Resilience: Avoid fragile, deep XPath trees (e.g. `/html/body/div[2]/div/button`).
 *    Prefer semantic CSS classes, IDs, ARIA roles, or reliable text matches.
 * 3. Easy Debugging: If an element is not found, copy the selector string directly
 *    into Chrome DevTools Console (`document.querySelector(...)`) to verify.
 */

export const commonLocators = {
    /**
     * Global Navigation Bar & Header Elements
     */
    navigation: {
        /** Logo anchor containing the brand logo image */
        brandLogo: 'a[data-testid="logo"]',
        /** Brand logo image element */
        brandImage: 'a[data-testid="logo"] img[alt="KobeanQAUtils"]',
        /** Global search bar input in the navigation header */
        searchInput: '#navbar-search',
        /** Floating dropdown list appearing during search autocomplete */
        searchDropdownMenu: '.dropdown-menu.show',
        /** Individual search result item links inside the dropdown */
        searchDropdownItem: '.dropdown-menu.show a.dropdown-item',
        /** Multi-theme cycling button (Dark / Light / Dim) */
        themeCycleButton: 'button.theme-cycle-btn',
        /** Navigation links for functional categories */
        categoryLinks: {
            converters: '//button[contains(., "Converters")] | //a[contains(., "Converters")]',
            generators: '//button[contains(., "Generators")] | //a[contains(., "Generators")]',
            api: '//button[contains(., "API")] | //a[contains(., "API")]',
            tools: '//button[contains(., "Tools")] | //a[contains(., "Tools")]',
            learn: '//button[contains(., "Learn")] | //a[contains(., "Learn")]',
            palace: '//button[contains(., "Palace")] | //a[contains(., "Palace")]',
        },
    },

    /**
     * Standard Form & Tool Input Controls
     */
    forms: {
        /** Primary input textarea found on most generator and converter tools */
        primaryTextarea: 'textarea.tool-textarea, textarea:first-of-type',
        /** Output textarea used for displayed results (e.g., Base64 decode output) */
        outputTextarea: 'textarea.tool-output, textarea:last-of-type',
        /** Numeric quantity range slider (e.g., UUID generator count) */
        rangeSlider: 'input[type="range"]',
        /** Number inputs (e.g., RGB values on Color converter) */
        numberInput: 'input[type="number"]',
        /** Text inputs (e.g., HEX color code, Unix timestamp epoch) */
        textInput: 'input[type="text"]',
    },

    /**
     * Common Action Buttons
     */
    buttons: {
        /** Main action trigger (e.g., 'Generate', 'Encode', 'Prettify') */
        primaryAction: '//div[contains(@class, "tool-action-row")]//button[contains(@class, "btn-primary")] | //button[contains(@class, "btn-primary")]',
        /** Copy to clipboard button */
        copyToClipboard: '//button[contains(., "Copy to clipboard") or contains(., "Copy")]',
        /** Clear input button */
        clear: '//button[contains(., "Clear") or contains(., "✕ Clear")]',
        /** Paste from clipboard button */
        paste: '//button[contains(., "Paste")]',
        /** Minify / compact code button */
        minify: '//button[contains(., "Minify") or contains(., "Compact")]',
        /** Format / prettify code button */
        prettify: '//button[contains(., "Prettify") or contains(., "Beautify") or contains(., "Format")]',
    },

    /**
     * Feedback, Alerts, and Badges
     */
    feedback: {
        /** Active floating toast notification container */
        toastContainer: '.toast.show, [role="alert"]',
        /** Inner text element of the toast notification */
        toastBody: '.toast.show .toast-body, [role="alert"]',
        /** Green success badge (e.g., 'Valid' token on JWT debugger) */
        successBadge: '.tool-badge-success, .badge-success',
        /** Red error/warning badge (e.g., 'Expired' token on JWT debugger) */
        dangerBadge: '.tool-badge-danger, .badge-danger',
        /** Info badge (e.g., algorithm identifier) */
        infoBadge: '.tool-badge-info, .badge-info',
    },

    /**
     * Layout & Container Elements
     */
    layout: {
        /** Main tool header title (h1) */
        toolHeaderTitle: 'h1.tool-header-title, h1',
        /** Subtitle / description beneath tool header */
        toolHeaderSubtitle: '.tool-header-subtitle, .lead',
        /** Individual tool card containers in explore grids */
        toolCard: '.tool-card, .card',
        /** Code snippets and generated hash/UUID text blocks */
        codeBlock: '.tool-card code, code',
    },
};

export default commonLocators;
