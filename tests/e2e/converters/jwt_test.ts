import { jwtTable } from '../../../fixtures/jwt.data.ts';

Feature('JWT Debugger E2E Tests');

Before(({ jwtPage }) => {
    jwtPage.open();
});

Scenario('Should decode valid JWT token accurately', ({ jwtPage }) => {
    jwtPage.enterToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlFBIEVuZ2luZWVyIiwiaWF0IjoxNTE2MjM5MDIyfQ.XbPfbIHMI6arZ3Y922BhjWgQzWXcXNrz0ogtVhfEd2o');
    jwtPage.seeValid();
    jwtPage.seeClaim('1234567890');
    jwtPage.seePageTitle('JWT');
}).tag('@smoke').tag('@regression');

Data(jwtTable).Scenario('Data-driven JWT decoding and expiration validation', async ({ current, jwtPage }) => {
    jwtPage.enterToken(current.token);
    if (current.isExpired) {
        jwtPage.seeExpired();
    } else {
        jwtPage.seeValid();
    }
    jwtPage.seeClaim(current.expectedSub);
}).tag('@regression');
