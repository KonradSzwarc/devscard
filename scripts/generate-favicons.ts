import { favicons, config as faviconsConfig, FaviconFile, FaviconImage } from 'favicons';
import config from '../src/data/config';
import { mkdir, writeFile, rm } from 'fs/promises';
import { existsSync } from 'fs';

const FAVICONS_DIR = './public/favicons';
const ASTRO_FILE_PATH = './src/web/head/favicons.generated.astro';

const generateFavicons = () =>
  favicons(`.${config.meta.faviconPath}`, {
    ...faviconsConfig.defaults,
    path: '/favicons',
    appName: config.meta.title,
    appDescription: config.meta.description,
    appShortName: config.meta.title,
    lang: config.i18n.locale.code,
    start_url: '.',
    icons: {
      android: ['android-chrome-192x192.png', 'android-chrome-512x512.png'],
      windows: false,
      yandex: false,
      appleStartup: false,
      appleIcon: ['apple-touch-icon.png'],
      favicons: ['favicon-16x16.png', 'favicon-32x32.png', 'favicon.ico'],
    },
  });

const clearFaviconsDir = async () => {
  if (existsSync(FAVICONS_DIR)) {
    await rm(FAVICONS_DIR, { recursive: true });
  }

  await mkdir(FAVICONS_DIR);
};

const saveFaviconAsset = async (file: FaviconFile | FaviconImage) => {
  await writeFile(`${FAVICONS_DIR}/${file.name}`, file.contents);

  console.log(`${file.name} has been created successfully`);
};

const generateAstroFile = async (html: string[]) => {
  const comments = [
    '<!-- This file is auto-generated. Do not edit it manually. -->\n',
    '<!-- In order to apply changes to it, adjust configuration object in generate-favicons.ts script and run it -->\n',
  ];

  const formattedHtml = html.map((line) => line.replace('>', '/>')).join('\n');

  await writeFile(ASTRO_FILE_PATH, [...comments, formattedHtml, '\n']);

  console.log(`${ASTRO_FILE_PATH} has been updated successfully`);
};

const main = async () => {
  const { images, files, html } = await generateFavicons();

  await clearFaviconsDir();

  await Promise.all([...images, ...files].map(saveFaviconAsset));

  await generateAstroFile(html);
};

main();
