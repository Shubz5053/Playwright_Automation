# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth.setup.ts >> login with valid user
- Location: src\tests\auth.setup.ts:12:5

# Error details

```
Test timeout of 60000ms exceeded.
```

```
TimeoutError: locator.waitFor: Timeout 60000ms exceeded.
Call log:
  - waiting for locator('a[id=\'login_Layer\']') to be visible

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - heading "Access Denied" [level=1] [ref=e2]
  - text: You don't have permission to access "http://www.naukri.com/" on this server.
  - paragraph [ref=e3]: "Reference #18.37b72c31.1778702698.16b410d"
  - paragraph [ref=e4]: https://errors.edgesuite.net/18.37b72c31.1778702698.16b410d
```

# Test source

```ts
  1  | import { Page, Locator } from '@playwright/test';
  2  | 
  3  | export class login {
  4  |   readonly page: Page;
  5  | 
  6  |   readonly loginButton: Locator;
  7  |   readonly username: Locator;
  8  |   readonly password: Locator;
  9  |   readonly loginBtn: Locator;
  10 | 
  11 |   constructor(page: Page) {
  12 |     this.page = page;
  13 |     this.loginButton = page.locator("a[id='login_Layer']");
  14 |     this.username = page.locator("input[placeholder='Enter your active Email ID / Username']");
  15 |     this.password = page.locator("input[placeholder='Enter your password']");
  16 |     this.loginBtn = page.locator("button[type='submit']");
  17 |   }
  18 | 
  19 |   async navigate() {
  20 |     await this.page.goto('/', { waitUntil: 'networkidle' });
  21 |     await this.page.waitForLoadState('domcontentloaded');
  22 |   }
  23 | 
  24 |   async login(user: string, pass: string) {
> 25 |     await this.loginButton.waitFor({ state: 'visible', timeout: 60000 });
     |                            ^ TimeoutError: locator.waitFor: Timeout 60000ms exceeded.
  26 |     await this.loginButton.click();
  27 |     await this.username.waitFor({ state: 'visible', timeout: 30000 });
  28 |     await this.username.fill(user);
  29 |     await this.password.fill(pass);
  30 |     await this.loginBtn.click();
  31 |   }
  32 | }
```