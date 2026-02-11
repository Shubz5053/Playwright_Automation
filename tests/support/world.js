import { setWorldConstructor } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';

const storagePath = path.join('tests', 'testdata/auth.json');
const videoDir = path.join('reports', 'videos');

class CustomWorld {
  async launchBrowser() {
    if (!fs.existsSync(path.dirname(storagePath))) fs.mkdirSync(path.dirname(storagePath), { recursive: true });
    if (!fs.existsSync(videoDir)) fs.mkdirSync(videoDir, { recursive: true });

    this.browser = await chromium.launch({ headless: false });
    this.context = await this.browser.newContext({
      baseURL: 'https://sit.careerequity.com',
      storageState: fs.existsSync(storagePath) ? storagePath : undefined,
      recordVideo: { dir: videoDir, size: { width: 1280, height: 720 } } // Enable video
    });
    this.page = await this.context.newPage();
  }

  async closeBrowser() {
    if (this.browser) await this.browser.close();
  }

  // Take screenshot on demand
  async takeScreenshot(name) {
    const screenshotDir = path.join('reports', 'screenshot');
    if (!fs.existsSync(screenshotDir)) fs.mkdirSync(screenshotDir, { recursive: true });
    await this.page.screenshot({ path: path.join(screenshotDir, `${name}.png`), fullPage: true });
  }
}

setWorldConstructor(CustomWorld);
