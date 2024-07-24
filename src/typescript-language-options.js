// @ts-check

import tseslint from 'typescript-eslint'

/** @type {import('eslint').Linter.FlatConfig['languageOptions']} */
export const typescriptLanguageOptions = {
  // @ts-expect-error: conflict type
  parser: tseslint.parser,
  parserOptions: {
    project: true,
    sourceType: 'module',
    ecmaVersion: 'latest',
  },
}
