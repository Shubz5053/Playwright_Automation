// src/pages/LoginPage.js
const { expect } = require('@playwright/test');

class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('#username'); // replace with actual selector
    this.passwordInput = page.locator('#password'); // replace with actual selector
    this.loginButton = page.locator('button[type="submit"]');
    this.errorMessage = page.locator('.error-message'); // example
  }

  async navigate(url) {
    await this.page.goto(url);
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async verifyError(expectedText) {
    await expect(this.errorMessage).toHaveText(expectedText);
  }
}

module.exports = { LoginPage };
