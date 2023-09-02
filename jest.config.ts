const path = require("path");

module.exports = {
  roots: ["<rootDir>/src"],
  moduleDirectories: ["node_modules"],
  verbose: true,
  preset: "ts-jest/presets/js-with-ts-esm",
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/.jest/setupTests.ts"],

  moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "node", "mdx"],

  moduleNameMapper: {
    "\\.svg$": path.join(__dirname, "./.jest/svgr.mock.js"),
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      path.join(__dirname, "./.jest/file.mock.js"),
  },
  transform: {
    "^.+\\.(t|j)sx?$": "ts-jest",
    // "^.+\\.mdx$": "@storybook/addon-docs/jest-transform-mdx",
  },
  testPathIgnorePatterns: ["<rootDir>/dist"],
  // transformIgnorePatterns: [
  //     `/node_modules/(?!react-dnd|core-dnd|@react-dnd|linked-list)`
  // ],
  transformIgnorePatterns: ["node_modules/(?!@ngrx|(?!deck.gl)|ng-dynamic)"],
};
