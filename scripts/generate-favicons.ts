import { favicons, config as faviconsConfig } from 'favicons';
import config from '../src/data/config';
import * as fs from 'fs';
import * as path from 'path';

const fsPromises = fs.promises;
const faviconsDirectory = './public/favicons';

const webmanifest = {
  name: config.meta.title,
  short_name: '',
  icons: [
    { src: '/favicons/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
    { src: '/favicons/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
  ],
  theme_color: '#ffffff',
  background_color: '#ffffff',
  display: 'standalone',
};

const deleteFile = async (file: string) => {
  await fsPromises.unlink(file);
  console.log(`${file} has been deleted successfully`);
};

const removeFaviconFiles = async (folderPath: string) => {
  const files = await fsPromises.readdir(folderPath);

  for (const file of files) {
    await deleteFile(path.join(folderPath, file));
  }

  await deleteFile('public/site.webmanifest');
};

const createWebmanifestFile = async () => {
  await fsPromises.writeFile('./public/site.webmanifest', JSON.stringify(webmanifest, null, 2) + '\n');
};

(async () => {
  try {
    const { faviconPath } = config.meta;

    const response = await favicons(`.${faviconPath}`, {
      ...faviconsConfig.defaults,
      icons: {
        android: ['android-chrome-192x192.png', 'android-chrome-512x512.png'],
        windows: false,
        yandex: false,
        appleStartup: false,
        appleIcon: ['apple-touch-icon.png'],
        favicons: ['favicon-16x16.png', 'favicon-32x32.png', 'favicon.ico'],
      },
    });

    if (!fs.existsSync(faviconsDirectory)) {
      await fs.promises.mkdir(faviconsDirectory);
    }

    await removeFaviconFiles(faviconsDirectory);

    for (const image of response.images) {
      await fsPromises.writeFile(`${faviconsDirectory}/${image.name}`, image.contents);
      console.log(`${image.name} has been created successfully`);
    }

    await createWebmanifestFile();
  } catch (error) {
    console.log(error);
  }
})();
