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
    "./src/App.tsx",
  ],
  collectCoverageFrom: ["src/**/*.ts?x"],
  coverageDirectory: "<rootDir>/coverage/",
};
