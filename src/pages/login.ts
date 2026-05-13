import { Page, Locator } from '@playwright/test';

export class login {
  readonly page: Page;

  readonly loginButton: Locator;
  readonly username: Locator;
  readonly password: Locator;
  readonly loginBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginButton = page.locator("a[id='login_Layer']");
    this.username = page.locator("input[placeholder='Enter your active Email ID / Username']");
    this.password = page.locator("input[placeholder='Enter your password']");
    this.loginBtn = page.locator("button[type='submit']");
  }

  async navigate() {
    await this.page.goto('/');
  }

  async login(user: string, pass: string) {
    await this.loginButton.click();
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.loginBtn.click();
  }
}