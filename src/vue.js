// @ts-check

import prettierConfig from 'eslint-config-prettier'
import vuePlugin from 'eslint-plugin-vue'
import globals from 'globals'
import tseslint from 'typescript-eslint'

import { GLOB_VUE } from './shared.js'

/** @type {import('eslint').Linter.Config[]} */
const vueRecommended = vuePlugin.configs['flat/recommended']

export function vue() {
  /** @type {import('eslint').Linter.Config[]} */
  const config = [
    ...vueRecommended,
    {
      name: 'vue:language-options',
      files: [GLOB_VUE],
      languageOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        globals: globals.browser,
        parserOptions: {
          parser: tseslint.parser,
        },
      },
    },
    {
      name: 'vue:rules-override',
      rules: {
        ...Object.fromEntries(
          Object.entries(prettierConfig.rules)
            .filter(([key]) => key.startsWith('vue/'))
            .map(([key, value]) => [key, value]),
        ),

        'vue/multi-word-component-names': 'off',
        'vue/one-component-per-file': 'off',
        'vue/require-prop-types': 'off',
      },
    },
  ]

  return config
}
