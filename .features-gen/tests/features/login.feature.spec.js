// Generated from: tests\features\login.feature
import { test } from "playwright-bdd";

test.describe('Login Feature', () => {

  test('Verify user login', async ({ Given, When, Then, page }) => { 
    await Given('Go to Career Equity Website', null, { page }); 
    await When('User enters valid credentials', null, { page }); 
    await Then('User should be logged in successfully', null, { page }); 
  });

  test('Create Program', async ({ Given, When, Then, page }) => { 
    await Given('Go to program Page', null, { page }); 
    await When('clicks on Add Program Page', null, { page }); 
    await When('enter a program Details', null, { page }); 
    await When('clicks on save and continue button', null, { page }); 
    await Then('Validate the program is created', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Go to Career Equity Website","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User enters valid credentials","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then User should be logged in successfully","stepMatchArguments":[]}]},
  {"pwTestLine":12,"pickleLine":8,"tags":[],"steps":[{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given Go to program Page","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When clicks on Add Program Page","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When enter a program Details","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When clicks on save and continue button","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then Validate the program is created","stepMatchArguments":[]}]},
]; // bdd-data-end