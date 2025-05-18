import type { Linter } from 'eslint'
import prettierConfig from 'eslint-config-prettier'
import vuePlugin from 'eslint-plugin-vue'
import globals from 'globals'
import tseslint from 'typescript-eslint'

import { resolveVueOptions, type VueOptions } from './options.js'

export function vue(options?: VueOptions): Linter.Config[] {
  const { files } = resolveVueOptions(options)

  return [
    ...vuePlugin.configs['flat/recommended'],
    {
      name: 'vue:language-options',
      files: files,
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
}
