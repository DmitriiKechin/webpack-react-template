module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2022,
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  settings: {
    react: {
      version: 'detect',
    },
  },

  env: {
    browser: true,
    es6: true,
    jest: true,
  },

  rules: {
    '@typescript-eslint/no-var-requires': 1,
    'no-var': 2,
    camelcase: 2,
    'no-nested-ternary': 2,
    'no-console': 1,
    'no-template-curly-in-string': 2,
    'no-self-compare': 2,
    'import/prefer-default-export': 0,
  },
};
