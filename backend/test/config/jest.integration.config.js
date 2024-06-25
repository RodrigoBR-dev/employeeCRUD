const { jest } = require('../../package.json');

/** @type {import('jest').Config} */
module.exports = {
  ...jest,
  rootDir: '../..',
  displayName: 'integration',
  testRegex: '.test.ts$',
  coverageDirectory: './coverage-integration',
};
  