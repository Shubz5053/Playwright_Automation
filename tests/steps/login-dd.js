import { readJson, writeJson } from '../utils/fileUtils';
import { createBdd } from 'playwright-bdd';
import LoginPage from '../pages/loginPage';
const { When, Before } = createBdd();
import { randomLowercase, randomNumberString } from '../utils/randomData';

let loginPage;
Before(async ({ page }) => {
  loginPage = new LoginPage(page);
})

When("User Enter invalid Username and Password", async () => {
  const jsonData = readJson('tests/test_data/login.json');
  jsonData.Username = `user_${randomLowercase(6)}@yopmail.com`;
  jsonData.programname = `Program ID : ${randomNumberString(6)}`;
  writeJson('tests/test_data/login.json', jsonData);
  await loginPage.enterUsername(jsonData.Username);
  await loginPage.enterPassword(jsonData.Password);
});