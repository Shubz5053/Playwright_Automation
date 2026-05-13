/// <reference types="node" />
import { defineConfig, devices } from '@playwright/test';
export default defineConfig({
  testDir: 'src/tests',
  retries: 2,
  workers: process.env.CI ? 2 : 4,

  use: {
    baseURL: "https://www.naukri.com/",
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry'
  },

  reporter: [
    ['line'],
    ['allure-playwright']
  ],

  projects: [
    {
      name: 'setup',
      testMatch: /auth\.setup\.ts/,
    },
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
        storageState: 'auth/user.json',
      },
      dependencies: ['setup'],
    },
  ]
});