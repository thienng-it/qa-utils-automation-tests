import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: './tests/*_test.ts',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://kobenguyent.github.io/qa-utils/',
      show: true,
      waitForNavigation: 'load',
      video: true,
    },
  },
  include: {
    I: './steps_file',
    homePage: './pages/HomePage',
  },
  plugins: {
    htmlReporter: {
      enabled: true,
      outputFile: 'output/html-report',
      reportFileName: 'index.html',
      includeArtifacts: true,
      showSteps: true,
      showSkipped: true,
    },
    retryFailedStep: {
      enabled: true,
      retries: 2,
    },
    screenshotOnFail: {
      enabled: true,
    },
  },
  name: 'qa-utils-automation-tests'
}