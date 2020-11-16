const { defaults } = require('jest-config');

module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    setupFiles: [],
    rootDir: '.',
    modulePaths: ['<rootDir>/src/', '<rootDir>/'],
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'scss'],
    coverageReporters: ['text'],
    setupFilesAfterEnv: ['<rootDir>/src/tests/setup.ts'],
    coveragePathIgnorePatterns: [
        ...defaults.coveragePathIgnorePatterns,
        '<rootDir>/src/tests'
    ],
    verbose: true
};
