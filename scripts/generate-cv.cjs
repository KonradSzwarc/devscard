const { exec } = require('node:child_process');
const path = require('node:path');
const fs = require('node:fs');
const puppeteer = require('puppeteer');
const report = require('puppeteer-report');

const waitFor = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const retry = async ({ promise, retries, retryTime }) => {
  try {
    return await promise();
  } catch (error) {
    if (retries <= 0) throw error;

    await waitFor(retryTime);

    return await retry({ promise, retries: retries - 1, retryTime });
  }
};

const config = {
  path: path.join(__dirname, '..', 'public', 'cv.pdf'),
  format: 'A4',
  printBackground: true,
  margin: { top: '10mm', right: '10mm', bottom: '10mm', left: '10mm' },
};

const hasClause = process.argv.includes('--with-clause');

const url = hasClause ? 'http://localhost:3000/pdf?clause' : 'http://localhost:3000/pdf';

const main = async () => {
  const child = exec('npm run dev');

  const browser = await puppeteer.launch({ headless: true });

  const page = await browser.newPage();

  await page.setViewport({ width: 794, height: 1122, deviceScaleFactor: 2 });

  await retry({
    promise: () => page.goto(url, { waitUntil: 'networkidle0' }),
    retries: 5,
    retryTime: 1000,
  });

  await report.pdfPage(page, config);

  await browser.close();

  child.kill();
};

main();
