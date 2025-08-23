module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}', // Include all .ts and .tsx files in the src folder
    '!src/index.tsx', // Exclude the main entry file
    '!src/setupTests.ts', // Exclude the test setup file
    '!**/node_modules/**', // Always exclude node_modules
    '!src/**/style.ts', // Example: Exclude styled-components files
  ]
};
