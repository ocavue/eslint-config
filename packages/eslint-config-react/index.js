// @ts-check

const { defineConfig } = require('eslint-define-config')
const basic = require('@ocavue/eslint-config-basic')

module.exports = defineConfig({
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    '@ocavue/eslint-config-basic',
    '@ocavue/eslint-config-prettier',
  ],

  settings: {
    react: {
      version: '17.0',
    },
  },

  rules: {
    'react/react-in-jsx-scope': 'off',
  },

  overrides: basic.overrides,
})
