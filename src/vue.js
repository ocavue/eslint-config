// @ts-check

import prettierConfig from 'eslint-config-prettier'
// @ts-expect-error no types
import pluginVue from 'eslint-plugin-vue'

import { GLOB_VUE } from './shared.js'
import { typescriptLanguageOptions } from './typescript-language-options.js'

/** @type {import('eslint').Linter.FlatConfig} */
const vueRecommended = pluginVue.configs['flat/recommended']

export function vue() {
  /** @type {import('eslint').Linter.FlatConfig[]} */
  const config = [
    {
      ...vueRecommended,
      name: 'vue',
      files: [GLOB_VUE],
      languageOptions: typescriptLanguageOptions,
      rules: {
        ...vueRecommended.rules,

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
