import { jwtTable } from '../../../fixtures/jwt.data.ts';

/**
 * ============================================================================
 * Feature: JSON Web Token (JWT) Debugger E2E Suite
 * ============================================================================
 * 
 * Target Application: KobeanQAUtils (https://kobenguyent.github.io/kobeanqautils/#/jwtDebugger)
 * 
 * Testing Concepts Applied:
 * 1. Token Signature Integrity: Asserts valid HMAC SHA-256 tokens display green 'Valid' badge.
 * 2. Expiration Verification: Asserts tokens with past `exp` timestamps display red 'Expired' badge.
 * 3. Claims Extraction: Confirms subject (`sub`), issuer, and custom attributes decode faithfully.
 * 
 * Test Tickets:
 * - [QA-TC-20260904-006] JWT Valid Token Decode & Claims
 * - [QA-TC-20260904-007] JWT Expired Token Status Badge
 */
Feature('JWT Debugger E2E Tests');

Before(({ jwtPage }) => {
    // Open JWT Debugger and ensure tool components have mounted
    jwtPage.open();
});

/**
 * Smoke Test: Standard Valid JWT Token Decode
 * Validates HMAC SHA-256 header, claim decoding, and green 'Valid' badge.
 */
Scenario('Should decode valid JWT token accurately', ({ jwtPage }) => {
    jwtPage.enterToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlFBIEVuZ2luZWVyIiwiaWF0IjoxNTE2MjM5MDIyfQ.XbPfbIHMI6arZ3Y922BhjWgQzWXcXNrz0ogtVhfEd2o');
    jwtPage.seeValid();
    jwtPage.seeClaim('1234567890');
    jwtPage.seePageTitle('JWT');
}).tag('@smoke').tag('@regression');

/**
 * Parameterized Data-Driven Suite: Expiration & Payload Claims Validation
 * Tests both valid and expired token vectors from jwtTable.
 */
Data(jwtTable).Scenario('Data-driven JWT decoding and expiration validation', async ({ current, jwtPage }) => {
    jwtPage.enterToken(current.token);
    if (current.isExpired) {
        jwtPage.seeExpired();
    } else {
        jwtPage.seeValid();
    }
    jwtPage.seeClaim(current.expectedSub);
}).tag('@regression');
