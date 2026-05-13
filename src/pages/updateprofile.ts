import { Page, Locator, expect } from '@playwright/test';

export class updateProfile {
  readonly page: Page;

  readonly viewProfileButton: Locator;
  readonly editProfileButton: Locator;
  readonly editProfileForm: Locator;
  readonly saveButton: Locator;
  readonly updatedname: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.viewProfileButton = page.locator("div[class='view-profile-wrapper']");
    this.editProfileButton = page.locator("em[class='icon edit ']");
    this.editProfileForm = page.locator("input[placeholder='Enter Your Name']");
    this.saveButton = page.locator("button[id='saveBasicDetailsBtn']");
    this.updatedname = page.locator("span[class='fullname']");
    this.successMessage = page.locator('span[class="success-text"]').getByText('Profile updated successfully');

  }

  async navigate() {
    await this.page.goto('/mnjuser/homepage');
  }


  async updateProfile(name: string, name1: string) {
    await this.viewProfileButton.click();
    await this.page.waitForURL('/mnjuser/profile');
    await this.editProfileButton.click();
    const value = await this.editProfileForm.inputValue();
    if (value === name) {
      await this.editProfileForm.fill(name1);
    } else {
      await this.editProfileForm.fill(name);
    }
    await this.saveButton.click();
  }

  async ValidateUpdatedName(name1: string, name: string) {
    await this.successMessage.waitFor({ state: 'visible' });
    const updatedNameText = await this.updatedname.textContent();
    if (updatedNameText === name) {
      expect(updatedNameText).toBe(name);
    } else {
      expect(updatedNameText).toBe(name1);
    }
  }
}