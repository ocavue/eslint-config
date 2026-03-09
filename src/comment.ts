import { recommended } from '@eslint-community/eslint-plugin-eslint-comments/configs'

import type { Config, Rules } from './types.js'

// @keep-sorted
export const commentRules: Rules = {
  // https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-aggregating-enable.html
  '@eslint-community/eslint-comments/no-aggregating-enable': 'error',

  // https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-duplicate-disable.html
  '@eslint-community/eslint-comments/no-duplicate-disable': 'error',

  // https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-unlimited-disable.html
  '@eslint-community/eslint-comments/no-unlimited-disable': 'error',

  // https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-unused-enable.html
  '@eslint-community/eslint-comments/no-unused-enable': 'error',
}

export function comment(): Config[] {
  return [
    {
      ...recommended,
      rules: commentRules,
    },
  ]
}
