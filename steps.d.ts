/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file');
type homePage = typeof import('./pages/HomePage');
type uuidPage = typeof import('./pages/UuidPage');
type base64Page = typeof import('./pages/Base64Page');

declare namespace CodeceptJS {
  interface SupportObject { 
    I: I;
    current: any;
    homePage: homePage;
    uuidPage: uuidPage;
    base64Page: base64Page;
  }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
