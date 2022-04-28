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
};
