import { exec } from 'node:child_process';
import * as path from 'node:path';
import * as puppeteer from 'puppeteer';
import { pdfPage } from 'puppeteer-report';

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

const pdfs = [
  { url: 'http://localhost:3000/pdf', fileName: 'cv.pdf' },
  { url: 'http://localhost:3000/pdf/backend', fileName: 'cv-backend.pdf' },
  { url: 'http://localhost:3000/pdf/general', fileName: 'cv-general.pdf' },
];

const main = async () => {
  const child = exec('npm run dev');

  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox'] });

  const page = await browser.newPage();

  await page.setViewport({ width: 794, height: 1122, deviceScaleFactor: 2 });

  for (const { url, fileName } of pdfs) {
    await retry({
      promise: () => goTo(page, url),
      retries: 5,
      retryTime: 1000,
    });

    await pdfPage(page, {
      path: path.join(__dirname, '..', 'public', fileName),
      format: 'A4',
      printBackground: true,
      margin: { top: '10mm', right: '10mm', bottom: '10mm', left: '10mm' },
    });
  }

  await browser.close();

  child.kill();
};

main();
