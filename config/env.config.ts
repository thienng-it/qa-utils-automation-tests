/**
 * ============================================================================
 * Environment Configuration Module (KobeanQAUtils)
 * ============================================================================
 * 
 * This module manages multi-environment execution settings (Local, Staging, Production).
 * It enables testers and developers to easily switch targets and tune execution
 * parameters without editing core test code or configuration files.
 * 
 * Common QA & Dev Usage:
 * ---------------------
 * 1. Default Run (Production, Headed if not CI):
 *    $ npm test
 * 
 * 2. Headless Mode (Standard for CI/CD Pipelines):
 *    $ HEADLESS=true npm test
 * 
 * 3. Switch to Staging or Local environment:
 *    $ TEST_ENV=staging npm test
 *    $ TEST_ENV=local npm test
 * 
 * 4. Custom Base URL Override:
 *    $ BASE_URL=https://custom-preview.github.io/kobeanqautils/ npm test
 * 
 * 5. Debugging with Slow-Motion (slows down actions by N ms):
 *    $ SLOW_MO=200 npm test
 * 
 * 6. Browser Selection (chromium, firefox, webkit):
 *    $ BROWSER=firefox npm test
 */

export interface EnvironmentSettings {
    /** Name of the environment */
    name: 'local' | 'staging' | 'production';
    /** Target base URL for the application under test */
    baseUrl: string;
    /** Default timeout in milliseconds for element/page operations */
    defaultTimeoutMs: number;
    /** Number of retry attempts on step failure */
    retries: number;
}

/**
 * Predefined environment registry.
 */
const ENVIRONMENTS: Record<string, EnvironmentSettings> = {
    local: {
        name: 'local',
        baseUrl: 'http://localhost:5173/kobeanqautils/',
        defaultTimeoutMs: 15000,
        retries: 1,
    },
    staging: {
        name: 'staging',
        baseUrl: 'https://staging-kobenguyent.github.io/kobeanqautils/',
        defaultTimeoutMs: 25000,
        retries: 2,
    },
    production: {
        name: 'production',
        baseUrl: 'https://kobenguyent.github.io/kobeanqautils/',
        defaultTimeoutMs: 30000,
        retries: 2,
    },
};

/**
 * Active environment resolver.
 * Priority: BASE_URL env var > TEST_ENV lookup > 'production' default.
 */
const selectedEnvKey = (process.env.TEST_ENV || 'production').toLowerCase();
const activeEnvSettings = ENVIRONMENTS[selectedEnvKey] || ENVIRONMENTS.production;

export const envConfig = {
    /** Active environment name ('local' | 'staging' | 'production') */
    env: activeEnvSettings.name,

    /** Resolved Base URL (overridden by process.env.BASE_URL if supplied) */
    baseUrl: process.env.BASE_URL || activeEnvSettings.baseUrl,

    /** Execution mode: true for headless, false for visible browser window */
    isHeadless: process.env.HEADLESS === 'true' || process.env.CI === 'true',

    /** Target browser family: 'chromium' | 'firefox' | 'webkit' */
    browser: (process.env.BROWSER || 'chromium') as 'chromium' | 'firefox' | 'webkit',

    /** Standard viewport dimensions */
    windowSize: {
        width: Number(process.env.VIEWPORT_WIDTH) || 1440,
        height: Number(process.env.VIEWPORT_HEIGHT) || 900,
    },

    /** Default timeout for element search, navigation, and assertions (in ms) */
    timeoutMs: Number(process.env.TIMEOUT_MS) || activeEnvSettings.defaultTimeoutMs,

    /** Slow motion delay between browser actions (useful during manual debugging) */
    slowMoMs: Number(process.env.SLOW_MO) || 0,

    /** Automatic retry attempts for unstable steps */
    retries: Number(process.env.RETRIES) || activeEnvSettings.retries,

    /** Artifact recording settings */
    artifacts: {
        recordVideo: process.env.RECORD_VIDEO !== 'false',
        recordTrace: process.env.RECORD_TRACE !== 'false',
        screenshotOnFail: true,
    },
};

export default envConfig;
