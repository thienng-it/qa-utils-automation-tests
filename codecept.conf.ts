import { envConfig } from './config/env.config.ts';

/**
 * ============================================================================
 * CodeceptJS Master Configuration
 * ============================================================================
 * 
 * Powered by Playwright and TypeScript ESM.
 * Environment and locator settings are decoupled into ./config/ for clean reuse.
 */
export const config: CodeceptJS.MainConfig = {
    tests: './tests/**/*_test.ts',
    require: ['tsx/esm'],
    output: './output',
    helpers: {
        Playwright: {
            browser: envConfig.browser,
            url: envConfig.baseUrl,
            show: !envConfig.isHeadless,
            waitForNavigation: 'load',
            video: envConfig.artifacts.recordVideo,
            trace: envConfig.artifacts.recordTrace,
            timeout: envConfig.timeoutMs,
            restart: 'keep',
            windowSize: `${envConfig.windowSize.width}x${envConfig.windowSize.height}`,
        },
    },
    include: {
        I: './steps_file.ts',
        navBar: './pages/components/NavBar.ts',
        toast: './pages/components/Toast.ts',
        homePage: './pages/HomePage.ts',
        explorePage: './pages/ExplorePage.ts',
        uuidPage: './pages/UuidPage.ts',
        base64Page: './pages/Base64Page.ts',
        jsonFormatterPage: './pages/JsonFormatterPage.ts',
        jwtPage: './pages/JwtPage.ts',
        hashPage: './pages/HashPage.ts',
        timestampPage: './pages/TimestampPage.ts',
        colorPage: './pages/ColorPage.ts',
    },
    plugins: {
        allure: {
            enabled: true,
            require: 'allure-codeceptjs',
            resultsDir: 'allure-results',
        },
        retryFailedStep: {
            enabled: true,
            retries: 2,
            minTimeout: 500,
            maxTimeout: 3000,
        },
        screenshotOnFail: {
            enabled: true,
        },
    },
    name: 'qa-utils-automation-tests',
};