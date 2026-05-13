# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth.setup.ts >> login with valid user
- Location: src\tests\auth.setup.ts:12:5

# Error details

```
Error: page.waitForURL: Target page, context or browser has been closed
=========================== logs ===========================
waiting for navigation to "/mnjuser/profile" until "load"
============================================================
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { login } from '../pages/login';
  3  | import user from '../testdata/user.json';
  4  | import fs from 'fs';
  5  | 
  6  | const authFile = 'auth/user.json';
  7  | 
  8  | if (!fs.existsSync('auth')) {
  9  |   fs.mkdirSync('auth');
  10 | }
  11 | 
  12 | test('login with valid user', async ({ page }) => {
  13 |   const loginPage = new login(page);
  14 |   await loginPage.navigate();
  15 |   // await loginPage.login(user.username, user.password);
> 16 |   await page.waitForURL('/mnjuser/profile');
     |              ^ Error: page.waitForURL: Target page, context or browser has been closed
  17 |   await page.context().storageState({ path: authFile });
  18 | });
  19 | 
```