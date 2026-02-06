const { expect } = require('@playwright/test');
class LoginPage {

  constructor(page) {
    this.page = page,
      this.username = page.locator("#email")
    this.password = page.locator("#password")
    this.loginbutton = page.locator("button[type='submit']")
    this.loginerrormessage = page.locator("#loginExist1")
  }

  async enterUsername(Username) {
    await this.username.fill(Username)
  }

  async enterPassword(Password) {
    await this.password.fill(Password)
  }

  async clickLogin() {
    await this.loginbutton.click()
  }

  async LoginError(expectedError) {
    await expect(this.loginerrormessage).toBeVisible();
    await expect(this.loginerrormessage).toHaveText(expectedError);
  }

}

export default LoginPage;