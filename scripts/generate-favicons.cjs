const { favicons, config } = require('favicons');
const fs = require('fs');
const path = require('path');

const fsPromises = fs.promises;
const dataFile = './src/data/config.ts';
const publicDir = './public';

const FAVICON_RELATED_FILES = [
  'android-chrome-192x192.png',
  'android-chrome-512x512.png',
  'apple-touch-icon.png',
  'favicon-16x16.png',
  'favicon-32x32.png',
  'favicon.ico',
];

const removeFaviconFiles = async (folderPath) => {
  try {
    const files = await fsPromises.readdir(folderPath);

    for (const file of files) {
      if (FAVICON_RELATED_FILES.includes(file)) {
        await fsPromises.unlink(path.join(folderPath, file));
        console.log(`${file} has been deleted successfully`);
      }
    }
  } catch (err) {
    console.log(err);
  }
};

const retrieveValueFromObjectLine = (line) => {
  return line.split(' ')[1].replaceAll("'", '').replace(',', '');
};

(async () => {
  try {
    const data = await fsPromises.readFile(dataFile, 'utf8');
    const lines = data.split('\n');
    const faviconLine = lines.find((line) => line.includes('favicon')).trim();
    const favicon = retrieveValueFromObjectLine(faviconLine);

    const response = await favicons(`.${favicon}`, {
      ...config,
      android: true,
      appleIcon: true,
      favicons: true,
    });

    if (!fs.existsSync(publicDir)) {
      await fs.promises.mkdir(publicDir);
    }

    await removeFaviconFiles(publicDir);

    for (const image of response.images) {
      if (FAVICON_RELATED_FILES.includes(image.name)) {
        await fsPromises.writeFile(`${publicDir}/${image.name}`, image.contents);
        console.log(`${image.name} has been created successfully`);
      }
    }
  } catch (error) {
    console.log(error.message);
  }
})();
