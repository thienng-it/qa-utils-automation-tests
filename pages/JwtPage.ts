import { BasePage } from './base/BasePage';

class JwtPage extends BasePage {
    constructor() {
        super('#/jwtDebugger');
    }

    readonly selectors = {
        title: 'h1.tool-header-title, h1',
        tokenInput: 'textarea.tool-textarea, textarea',
        validBadge: '.tool-badge-success',
        expiredBadge: '.tool-badge-danger',
        pasteBtn: '//button[contains(., "Paste from Clipboard")]',
        clearBtn: '//button[contains(., "Clear")]',
    };

    waitForPageLoaded(): void {
        this.I.waitForElement(this.selectors.title, 10);
        this.I.see('JWT');
    }

    enterToken(token: string): void {
        this.I.clearField(this.selectors.tokenInput);
        this.I.fillField(this.selectors.tokenInput, token);
    }

    seeValid(): void {
        this.I.waitForElement(this.selectors.validBadge, 5);
        this.I.see('Valid', this.selectors.validBadge);
    }

    seeExpired(): void {
        this.I.waitForElement(this.selectors.expiredBadge, 5);
        this.I.see('Expired', this.selectors.expiredBadge);
    }

    seeClaim(claimText: string): void {
        this.I.see(claimText);
    }
}

export default new JwtPage();
