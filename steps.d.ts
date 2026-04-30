/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file');
type homePage = typeof import('./pages/HomePage');

declare namespace CodeceptJS {
  interface SupportObject { 
    I: I;
    current: any;
    homePage: homePage;
  }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
