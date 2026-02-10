import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
const { Given, When, Then } = createBdd();
import fs from 'fs';

Given('Go to Career Equity Website', async ({ page }) => {
  await page.goto('/sign-in');
});

When('User enters valid credentials', async ({ page }) => {
  fs.writeFileSync('tests/testData/auth.json', JSON.stringify([], null, 2));
  await page.fill('#email', 'shubhamsitnew01@yopmail.com');
  await page.fill('#password', 'Admin@123');
  await page.click('button[type="submit"]');
  await page.waitForTimeout(10000)
  //saved Storage State
  page.context().storageState({ path: 'tests/testData/auth.json' })

});

Then('User should be logged in successfully', async ({ page }) => {
  await expect(page).toHaveURL('/employer/jobs-page');
});

Given('Go to program Page', async ({ page }) => {
  await page.goto('/employer/programs');
  await page.locator('a[href="/employer/programs"]').click()
})

When('clicks on Add Program Page', async ({ page }) => {
  await page.getByText('+ Add New').click()
})

When('enter a program Details', async ({ page }) => {
  await page.locator('input[id="proAddEditName"]').fill("Program ID :12345")
  await page.locator('input[id="programDateRange"]').click()
  await page.locator('td[title="2026-02-11"]').click()
  await page.locator('td[title="2026-03-18"]').click()
  await page.getByText('Job Seekers').click()
  await page.locator('textarea[id="proDescription"]').fill("This is program for QE")
})

When('clicks on save and continue button', async ({ page }) => {
  await page.locator('button[id="proSaveButton"]').click()
})

Then('Validate the program is created', async ({ page }) => {
  const toastSpans = page.locator('div.ant-message-custom-content.ant-message-success span:nth-child(2)')
  await expect(toastSpans).toHaveText('Program added successfully !')
  await expect(toastSpans).toHaveCount(0)
})