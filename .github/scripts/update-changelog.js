const fs = require('fs');

module.exports = (version, prNumber) => {
  const changelog = fs.readFileSync('CHANGELOG.md', 'utf8');
  const changelogLines = changelog.split('\n');
  const lastChangeIndex = changelogLines.findIndex((line) => line.startsWith('## ['));

  const textToAppend = `
## [${version}] - ${new Date().toISOString().split('T')[0]}

### Dependencies

- chore(deps): update dependencies ([details](https://github.com/KonradSzwarc/devscard/pull/${prNumber}))
`.trim();

  changelogLines.splice(lastChangeIndex, 0, textToAppend + '\n');

  fs.writeFileSync('CHANGELOG.md', changelogLines.join('\n'));
};
