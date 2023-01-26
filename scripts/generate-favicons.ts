import { favicons, config as faviconsConfig } from 'favicons';
import config from '../src/data/config';
import { mkdir, writeFile, rm } from 'fs/promises';
import { existsSync } from 'fs';

const faviconsDirectory = './public/favicons';

(async () => {
  const { faviconPath } = config.meta;

  const response = await favicons(`.${faviconPath}`, {
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

  if (existsSync(faviconsDirectory)) {
    await rm(faviconsDirectory, { recursive: true });
  }

  await mkdir(faviconsDirectory);

  for (const file of [...response.images, ...response.files]) {
    await writeFile(`${faviconsDirectory}/${file.name}`, file.contents);
    console.log(`${file.name} has been created successfully`);
  }

  const comments = [
    '<!-- This file is auto-generated. Do not edit it manually. -->\n',
    '<!-- In order to apply changes to it, adjust configuration object in generate-favicons.ts script and run it -->\n',
  ];

  const formattedHtml = response.html.map((line) => line.replace('>', '/>')).join('\n');

  const pathToFaviconsFile = './src/web/head/favicons.auto-generated.astro';

  await writeFile(pathToFaviconsFile, [...comments, formattedHtml]);
  console.log(`${pathToFaviconsFile} has been updated successfully`);
})();
