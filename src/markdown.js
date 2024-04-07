// @ts-check

import * as markdownPlugin from 'eslint-plugin-markdown'

import { GLOB_MARKDOWN, GLOB_SRC, GLOB_VUE } from './shared.js'

export function markdown() {
  /** @type {import('eslint-define-config').FlatESLintConfig[]} */
  const config = [
    // @ts-expect-error: @types/eslint-plugin-markdown is not up to date
    ...markdownPlugin.configs.recommended,

    {
      files: [`${GLOB_MARKDOWN}/${GLOB_SRC}`, `${GLOB_MARKDOWN}/${GLOB_VUE}`],
      rules: {
        '@typescript-eslint/no-redeclare': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-var-requires': 'off',

        'no-alert': 'off',
        'no-console': 'off',
        'no-restricted-imports': 'off',
      },
    },
  ]

  return config
}
