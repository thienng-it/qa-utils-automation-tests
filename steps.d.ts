/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file').default;
type navBar = typeof import('./pages/components/NavBar').default;
type toast = typeof import('./pages/components/Toast').default;
type homePage = typeof import('./pages/HomePage').default;
type explorePage = typeof import('./pages/ExplorePage').default;
type uuidPage = typeof import('./pages/UuidPage').default;
type base64Page = typeof import('./pages/Base64Page').default;
type jsonFormatterPage = typeof import('./pages/JsonFormatterPage').default;
type jwtPage = typeof import('./pages/JwtPage').default;
type hashPage = typeof import('./pages/HashPage').default;
type timestampPage = typeof import('./pages/TimestampPage').default;
type colorPage = typeof import('./pages/ColorPage').default;

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, navBar: navBar, toast: toast, homePage: homePage, explorePage: explorePage, uuidPage: uuidPage, base64Page: base64Page, jsonFormatterPage: jsonFormatterPage, jwtPage: jwtPage, hashPage: hashPage, timestampPage: timestampPage, colorPage: colorPage }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file>, WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
