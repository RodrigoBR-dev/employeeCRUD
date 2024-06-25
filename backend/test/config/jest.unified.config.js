const { jest } = require('../../package.json');

/** @type {import('jest').Config} */
module.exports = {
    ...jest,
    rootDir: '../..',
    displayName: 'unified',
    testRegex: '.(test|spec).ts$',
    coverageDirectory: './coverage-unified',
}