import { rename } from 'fs/promises';
import { existsSync } from 'fs';

const args = process.argv.slice(2);
const INCLUDED_PDF_PAGE_PATH = './src/pages/pdf.astro';
const EXCLUDED_PDF_PAGE_PATH = './src/pages/_pdf.astro';

const main = async () => {
  if (args[0] === '--exclude' && existsSync(INCLUDED_PDF_PAGE_PATH)) {
    await rename(INCLUDED_PDF_PAGE_PATH, EXCLUDED_PDF_PAGE_PATH);

    return;
  }

  if (existsSync(EXCLUDED_PDF_PAGE_PATH)) {
    await rename(EXCLUDED_PDF_PAGE_PATH, INCLUDED_PDF_PAGE_PATH);

    return;
  }
};

main();
