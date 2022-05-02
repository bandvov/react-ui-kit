module.exports = {
  preset: "ts-jest",
  debug: true,
  modulePathIgnorePatterns: [
    "./node_modules/",
    "./**/stories",
    "./**/**/**/*.stories.tsx",
  ],
  coveragePathIgnorePatterns: [
    "./node_modules/",
    "./**/stories",
    "./**/**/**/*.stories.tsx",
    "./src/App.tsx",
    "./coverage/",
    "./.storybook/",
    "./storybook-static/",
  ],
};
