module.exports = {
  collectCoverageFrom: ['src/**/*.js', '!src/index.js'],
  coverageReporters: ['text'],
  moduleFileExtensions: ['js', 'jsx', 'svg'],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
    '^src(.*)$': '<rootDir>/src$1',
  },
  modulePaths: [
    '<rootDir>/src/',
    '<rootDir>/src/styles',
    '<rootDir>/src/components',
    '<rootDir>/src/assets/icons',
  ],
  setupFiles: ['<rootDir>/setupTests.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  transform: {
    '^.+\\.[t|j]s?$': 'babel-jest',
    '^.+\\.svg$': 'jest-svg-transformer',
    '^.+\\.(css|less|scss)$': 'babel-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  verbose: true,
};
