import { test, expect } from '@playwright/test';
import { login } from '../pages/login';
import user from '../testdata/user.json';
import fs from 'fs';

const authFile = 'auth/user.json';

if (!fs.existsSync('auth')) {
  fs.mkdirSync('auth');
}

test('login with valid user', async ({ page }) => {
  const loginPage = new login(page);
  await loginPage.navigate();
  await loginPage.login(user.username, user.password);
  await page.waitForURL('/mnjuser/homepage');
  await page.context().storageState({ path: authFile });
});
