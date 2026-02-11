// generate-report.js
const report = require('multiple-cucumber-html-reporter');
const path = require('path');

report.generate({
  jsonDir: path.join(__dirname, 'reports'),
  reportPath: path.join(__dirname, 'reports/html-report'),
  metadata: {
    browser: { name: 'chromium', version: 'latest' },
    device: 'Local Machine',
    platform: { name: 'Windows', version: '10' }
  }
});
