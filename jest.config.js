module.exports = {
  preset: "ts-jest",
  modulePathIgnorePatterns: [
    "./node_modules/",
    "./src/stories",
    "./**/*stories.tsx",
  ],
  coveragePathIgnorePatterns: [
    "./node_modules/",
    "./src/stories",
    "./**/*stories.tsx",
    "./src/App.tsx",
  ],

  coverageDirectory: "<rootDir>/coverage/",
  collectCoverage: true,
  testResultsProcessor: "jest-sonar-reporter",
  jestSonar: {
    reportPath: "coverage",
    reportFile: "test-report.xml",
    indent: 4,
  },
};
