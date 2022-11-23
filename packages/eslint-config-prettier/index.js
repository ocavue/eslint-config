// @ts-check

const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  extends: ['prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'warn',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
  },
})
