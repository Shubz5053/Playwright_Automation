import { expect } from '@playwright/test';
import { Given, When, Then, Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import fs from 'fs';
import path from 'path';

setDefaultTimeout(60 * 1000); // 60s timeout per step
const storagePath = path.join('tests', 'testdata/auth.json');

Before(async function () {
  await this.launchBrowser(); // launch browser and set this.page
});

After(async function () {
  await this.closeBrowser(); // close browser
});

Given('Go to Career Equity Website', async function () {
  await this.page.goto('/sign-in'); // use this.page
});

When('User enters valid credentials', async function () {
  if (!fs.existsSync(path.dirname(storagePath))) fs.mkdirSync(path.dirname(storagePath), { recursive: true });
  await this.page.fill('#email', 'shubhamsitnew01@yopmail.com');
  await this.page.fill('#password', 'Admin@123');
  await this.page.click('button[type="submit"]');
  await this.page.waitForURL('/employer/jobs-page');
  // Save Storage State
  await this.page.context().storageState({ path: 'tests/testdata/auth.json' });
});

Then('User should be logged in successfully', async function () {
  await expect(this.page).toHaveURL('/employer/jobs-page');
});

Given('Go to program Page', async function () {
  await this.page.goto('/employer/programs');
  await this.page.locator('a[href="/employer/programs"]').click();
});

When('clicks on Add Program Page', async function () {
  await this.page.getByText('+ Add New').click();
});

When('enter a program Details', async function () {
  await this.page.locator('input[id="proAddEditName"]').fill("Program ID :12345");
  await this.page.locator('input[id="programDateRange"]').click();
  await this.page.locator('td[title="2026-02-11"]').click();
  await this.page.locator('td[title="2026-03-18"]').click();
  await this.page.getByText('Job Seekers').click();
  await this.page.locator('textarea[id="proDescription"]').fill("This is program for QE");
});

When('clicks on save and continue button', async function () {
  await this.page.locator('button[id="proSaveButton"]').click();
});

Then('Validate the program is created', async function () {
  const toastSpans = this.page.locator('div.ant-message-custom-content.ant-message-success span:nth-child(2)');
  await expect(toastSpans).toHaveText('Program added successfully !');
  await expect(toastSpans).toHaveCount(0);
});

Given('Go to job Page', async function () {
  await this.page.goto('/employer/jobs-page')
  await this.page.locator("//a[@id='menuReviews' and normalize-space(text())='Jobs']").click()
  await this.page.locator("//a[@id='menuReviews' and normalize-space(text())='Add New Job']").click()
})

When('select a program', async function () {
  await this.page.locator('(//input[@class="ant-select-selection-search-input"])[2]').click()
  await this.page.locator("(//div[contains(@class, 'ant-select-tree-treenode')]//span[.='2 Feb 2026 Program'])[3]").click()
  await this.page.locator("//button[@type='button' ] /span[normalize-space(text())='OK']").click()
  await this.page.locator("//img[@src='/static/media/settingIcon.1290d7c0.svg']").click()
})

