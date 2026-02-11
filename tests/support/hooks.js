import { AfterStep } from '@cucumber/cucumber';

AfterStep(async function ({ result }) {
  if (result?.status === 'FAILED') {
    const name = `FAILED_${Date.now()}`;
    await this.takeScreenshot(name);
  }
});