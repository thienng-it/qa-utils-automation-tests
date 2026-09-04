import { BasePage } from './base/BasePage.ts';
import { commonLocators } from '../config/locators.config.ts';

/**
 * ============================================================================
 * JSON Web Token (JWT) Debugger Page Object
 * ============================================================================
 * 
 * Provides automated interactions for decoding and inspecting JWT tokens:
 * - Entering encoded JWT tokens
 * - Validating signature and integrity badges (e.g., 'Valid')
 * - Validating expiration status badges (e.g., 'Expired')
 * - Verifying individual claims in the decoded JSON payload (e.g., `sub`, `name`)
 */
class JwtPage extends BasePage {
    constructor() {
        super('#/jwtDebugger');
    }

    readonly selectors = {
        title: commonLocators.layout.toolHeaderTitle,
        tokenInput: commonLocators.forms.primaryTextarea,
        validBadge: commonLocators.feedback.successBadge,
        expiredBadge: commonLocators.feedback.dangerBadge,
        pasteBtn: commonLocators.buttons.paste,
        clearBtn: commonLocators.buttons.clear,
    };

    /**
     * Waits for the JWT Debugger tool view to mount and asserts header visibility.
     */
    waitForPageLoaded(): void {
        this.I.waitForElement(this.selectors.title, 10);
        this.I.see('JWT');
    }

    /**
     * Types or pastes an encoded JWT string into the token input textarea.
     * @param token Standard JWT token string (Header.Payload.Signature)
     */
    enterToken(token: string): void {
        this.I.clearField(this.selectors.tokenInput);
        this.I.fillField(this.selectors.tokenInput, token);
    }

    /**
     * Asserts that the green 'Valid' status badge is rendered.
     */
    seeValid(): void {
        this.I.waitForElement(this.selectors.validBadge, 5);
        this.I.see('Valid', this.selectors.validBadge);
    }

    /**
     * Asserts that the red/warning 'Expired' status badge is rendered.
     */
    seeExpired(): void {
        this.I.waitForElement(this.selectors.expiredBadge, 5);
        this.I.see('Expired', this.selectors.expiredBadge);
    }

    /**
     * Asserts that a specific decoded claim string is visible in the payload viewer.
     * @param claimText Expected claim key or value (e.g. '1234567890', 'user-456')
     */
    seeClaim(claimText: string): void {
        this.I.see(claimText);
    }
}

export default new JwtPage();
