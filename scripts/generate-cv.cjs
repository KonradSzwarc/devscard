const { exec } = require('node:child_process');
const path = require('node:path');
const fs = require('node:fs');
const puppeteer = require('puppeteer');

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

const main = async () => {
  const child = exec('npm run dev');

  const browser = await puppeteer.launch({ headless: true });

  const page = await browser.newPage();

  await page.setViewport({ width: 794, height: 1122, deviceScaleFactor: 2 });

  await retry({
    promise: () => page.goto('http://localhost:3000/pdf', { waitUntil: 'networkidle0' }),
    retries: 5,
    retryTime: 1000,
  });

  await page.pdf({
    format: 'A4',
    path: path.join(__dirname, '..', 'public', 'cv.pdf'),
    printBackground: true,
    margin: { top: 40, right: 40, bottom: 40, left: 40 },
  });

  await browser.close();

  child.kill();
};

main();
