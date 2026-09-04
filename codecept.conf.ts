export const config: CodeceptJS.MainConfig = {
    tests: './tests/**/*_test.ts',
    require: ['tsx/esm'],
    output: './output',
    helpers: {
        Playwright: {
            browser: 'chromium',
            url: 'https://kobenguyent.github.io/kobeanqautils/',
            show: !process.env.HEADLESS,
            waitForNavigation: 'load',
            video: true,
            trace: true,
            timeout: 30000,
            restart: 'keep',
            windowSize: '1440x900',
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
            outputDir: 'output/allure-results',
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