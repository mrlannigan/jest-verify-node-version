module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ['src/index.ts'],
    coverageReporters: ['html', 'lcov'],
    coverageThreshold: {
        global: {
            branches: 95,
            functions: 95,
            lines: 95,
            statements: 95
        }
    },
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    testMatch: ['<rootDir>/test/**/*.spec.(ts|tsx|js)'],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest'
    }
};
