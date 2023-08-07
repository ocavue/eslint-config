// @ts-check

import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import deprecationPlugin from 'eslint-plugin-deprecation'

import { GLOB_JS, GLOB_JSX, GLOB_TS, GLOB_TSX } from './shared.js'

export { tsParser, tsPlugin }

/**
 * @typedef {Object} TypescriptOptions
 * @property {string | false} [project] - Path to tsconfig.json, defaults
 * to './tsconfig.json'. You can pass `false` to disable the tsconfig.json check.
 */

/**
 * @param {TypescriptOptions} [options]
 */
export function typescript(options) {
  const project = options?.project ?? './tsconfig.json'

  /** @type {import('eslint-define-config').FlatESLintConfigItem[]} */
  const config = [
    {
      files: [GLOB_TS, GLOB_TSX, GLOB_JS, GLOB_JSX],
      languageOptions: {
        parser: tsParser,
        parserOptions: project
          ? {
              project,
              sourceType: 'module',
              ecmaVersion: 'latest',
            }
          : {
              sourceType: 'module',
              ecmaVersion: 'latest',
            },
      },
      plugins: {
        // @ts-expect-error: they just don't play very well
        '@typescript-eslint': tsPlugin,
        // @ts-expect-error: they just don't play very well
        deprecation: deprecationPlugin,
      },
      rules: {
        ...tsPlugin.configs['eslint-recommended'].overrides?.[0].rules,
        ...tsPlugin.configs['recommended'].rules,
        ...(project
          ? tsPlugin.configs['recommended-requiring-type-checking'].rules
          : null),

        '@typescript-eslint/no-unsafe-call': 'warn',
        '@typescript-eslint/restrict-plus-operands': 'warn',
        '@typescript-eslint/no-unsafe-return': 'warn',
        '@typescript-eslint/no-unsafe-argument': 'warn',
        '@typescript-eslint/no-unsafe-member-access': 'warn',
        '@typescript-eslint/no-unsafe-assignment': 'warn',
        '@typescript-eslint/no-floating-promises': 'warn',
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
            caughtErrorsIgnorePattern: '^_',
          },
        ],
        '@typescript-eslint/no-extra-semi': 'off',
        '@typescript-eslint/prefer-function-type': 'warn',

        // TODO: We should set the rules below to error in the future
        '@typescript-eslint/no-misused-promises': 'warn',
        '@typescript-eslint/await-thenable': 'warn',
        '@typescript-eslint/require-await': 'warn',
        '@typescript-eslint/unbound-method': 'warn',

        'deprecation/deprecation': 'warn',
      },
    },
    {
      files: [GLOB_JS, GLOB_JSX],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ]

  return config
}
