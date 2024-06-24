module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ["@typescript-eslint", "prettier"],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended'
    ],
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module'
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "prettier/prettier": "error"
    }
  };
  