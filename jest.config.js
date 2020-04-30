module.exports = {
  collectCoverageFrom: [
    "src/**/*.js",
    "!src/index.js"
  ],
  coverageReporters: [
    "text"
  ],
  moduleFileExtensions: ["js", "jsx"],
  setupFiles: [
    "<rootDir>src/setupTests.js"
  ],
  snapshotSerializers: [
    "enzyme-to-json/serializer"
  ],
  transform: {
    "^.+\\.[t|j]s?$": "babel-jest"
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"]
}