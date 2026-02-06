import { createBdd } from 'playwright-bdd';
import LoginPage from '../pages/loginPage';
const { Given, When, Then, Before } = createBdd();

let loginPage;
Before(async ({ page }) => {
  loginPage = new LoginPage(page);
})

Given("Go To Carrier Equity Website", async ({ page }) => {
  await page.goto("/sign-in")
}
);

When("User Enter {string} and {string}", async ({ }, Username, Password) => {
  await loginPage.enterUsername(Username);
  await loginPage.enterPassword(Password);
}
);

When("User Clicks on Login Button", async ({ }) => {
  await loginPage.clickLogin();
}
);

Then("Verify Carrier Equity not login {string}", async ({ }, errorMessage) => {
  await loginPage.LoginError(errorMessage);
}
);

Then("Verify User login successfully", async ({ page }) => {
  await page.url('https://sit.careerequity.com/employer/jobs-page')
})

