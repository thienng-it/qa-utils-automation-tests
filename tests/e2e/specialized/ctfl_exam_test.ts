Feature('CTFL v4 Practice Exam Simulator Flow');

Scenario('Should load CTFL exam portal and display start controls', ({ I }) => {
    I.amOnPage('#/ctfl');
    I.waitForText('CTFL v4 Practice Exam', 10);
    I.see('Start Exam Simulation');
}).tag('@regression').tag('@specialized');
