const {
  readdirSync,
} = require('fs');

const {
  join,
} = require('path');

const sites = () => readdirSync(join(__dirname, '..', 'sites'), {
    withFileTypes: true
  })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

module.exports = sites;
