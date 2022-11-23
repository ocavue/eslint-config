// @ts-check

const { defineConfig } = require('eslint-define-config')
const basic = require('@ocavue/eslint-config-basic')

module.exports = defineConfig({
  extends: ['@ocavue/eslint-config-basic', '@ocavue/eslint-config-prettier'],

  overrides: basic.overrides,
})
