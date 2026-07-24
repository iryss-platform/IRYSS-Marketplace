const { loadEnv } = require("@medusajs/framework/utils");
loadEnv("test", process.cwd());

module.exports = {
  transform: { "^.+\\.[jt]s$": ["@swc/jest"] },
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  transformIgnorePatterns: ["/node_modules/(?!@medusajs)/"],
};
