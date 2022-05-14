module.exports = {
  preset: "ts-jest",
  debug: true,
  modulePathIgnorePatterns: ["./node_modules/", "./**/**/**/*stories.tsx"],
  coveragePathIgnorePatterns: ["./node_modules", "./src/App.tsx"],
};
