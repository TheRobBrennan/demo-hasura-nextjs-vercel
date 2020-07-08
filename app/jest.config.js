module.exports = {
  roots: ["<rootDir>"],
  moduleFileExtensions: ["js", "ts", "tsx", "json"],
  setupFiles: ["<rootDir>/config/setup.js", "dotenv/config"],
  testPathIgnorePatterns: [
    "<rootDir>[/\\\\](build|docs|node_modules|.next|.vercel|coverage)[/\\\\]",
  ],
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$"],
  transform: {
    "^.+\\.(js|ts|tsx)$": "babel-jest",
  },
}
