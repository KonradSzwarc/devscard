import { exec } from 'node:child_process';
import * as path from 'node:path';
import * as chromium from '@sparticuz/chromium';
import * as puppeteer from 'puppeteer-core';

import { pdfPage } from 'puppeteer-report';

const CV_DIR = path.join(__dirname, '..', 'public');
const CV_FILENAME = 'cv.pdf';

const waitFor = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const goTo = async (page: puppeteer.Page, url: string) => {
  await page.goto(url, { waitUntil: 'networkidle0' });
};

type GoToReturn = ReturnType<typeof goTo>;

interface RetryOptions {
  promise: () => GoToReturn;
  retries: number;
  retryTime: number;
}

const retry = async ({ promise, retries, retryTime }: RetryOptions): GoToReturn => {
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

  const browser = await puppeteer.launch({
    executablePath: await chromium.executablePath(),
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    headless: chromium.headless,
    ignoreHTTPSErrors: true,
  });

  const page = await browser.newPage();

  await page.setViewport({ width: 794, height: 1122, deviceScaleFactor: 2 });

  await retry({
    promise: () => goTo(page, 'http://localhost:3000/pdf'),
    retries: 5,
    retryTime: 1000,
  });

  await pdfPage(page, {
    path: path.join(CV_DIR, CV_FILENAME),
    format: 'A4',
    printBackground: true,
    margin: { top: '10mm', right: '10mm', bottom: '10mm', left: '10mm' },
  });
  console.log(`${CV_FILENAME} has been created successfully`);

  await browser.close();
  child.kill();
  process.exit(0);
};

main();
