module.exports = {
  root: true,
  env: {
    es2021: true
  },
  extends: [
    "eslint:recommended",
    "airbnb-base",
    "plugin:prettier/recommended"
  ],
  rules: {
    "no-console": "off"
  },
  ignorePatterns: ["/node_modules/", "/dist/"]
};
