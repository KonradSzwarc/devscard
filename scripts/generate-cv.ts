import { exec } from 'node:child_process';
import * as path from 'node:path';
import * as puppeteer from 'puppeteer';
import { pdfPage } from 'puppeteer-report';

const waitFor = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

type PuppeteerGoToReturn = Promise<puppeteer.HTTPResponse | null>;

interface RetryOptions {
  promise: () => PuppeteerGoToReturn;
  retries: number;
  retryTime: number;
}

const retry = async ({ promise, retries, retryTime }: RetryOptions): PuppeteerGoToReturn => {
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

  await pdfPage(page, {
    path: path.join(__dirname, '..', 'public', 'cv.pdf'),
    format: 'A4',
    printBackground: true,
    margin: { top: '10mm', right: '10mm', bottom: '10mm', left: '10mm' },
  });

  await browser.close();

  child.kill();
};

main();
