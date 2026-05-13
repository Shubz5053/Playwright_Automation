import { test } from '@playwright/test';
import { updateProfile } from '../pages/updateprofile';
import personalInfo from '../testdata/personalinfo.json';


test('should update profile successfully', async ({ page }) => {
  const updateProfilePage = new updateProfile(page);
  await updateProfilePage.navigate();
  await updateProfilePage.updateProfile(personalInfo.name, personalInfo.name1);
  await page.locator('.spinner-wrapper').waitFor({ state: 'hidden' });
  await updateProfilePage.ValidateUpdatedName(personalInfo.name1, personalInfo.name);
});