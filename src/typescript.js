// @ts-check

/// <reference types="@eslint-types/typescript-eslint" />

import deprecationPlugin from 'eslint-plugin-deprecation'
import tseslint from 'typescript-eslint'

import { GLOB_JS, GLOB_JSX, GLOB_TS, GLOB_TSX } from './shared.js'

export { tseslint }

export function typescript() {
  const rules = [...tseslint.configs.recommended, ...tseslint.configs.stylistic]
    .map((config) => config.rules || {})
    .reduce((acc, cur) => ({ ...acc, ...cur }), {})

  /** @type {import('eslint-define-config').FlatESLintConfig[]} */
  const config = [
    {
      files: [GLOB_TS, GLOB_TSX, GLOB_JS, GLOB_JSX],
      languageOptions: {
        parser: tseslint.parser,
        parserOptions: {
          project: true,
          sourceType: 'module',
          ecmaVersion: 'latest',
        },
      },
      plugins: {
        // @ts-expect-error: conflict type
        '@typescript-eslint': tseslint.plugin,
        // @ts-expect-error: conflict type
        deprecation: deprecationPlugin,
      },
      rules: {
        ...rules,

        '@typescript-eslint/consistent-type-definitions': 'off',
        '@typescript-eslint/prefer-optional-chain': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        '@typescript-eslint/consistent-indexed-object-style': 'off',
        '@typescript-eslint/array-type': 'off',
        '@typescript-eslint/dot-notation': 'off',
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

        '@typescript-eslint/no-misused-promises': [
          'error',
          { checksVoidReturn: false },
        ],
        '@typescript-eslint/await-thenable': 'error',
        '@typescript-eslint/unbound-method': 'error',
        // TODO: We should set the rule below to error in the future
        '@typescript-eslint/require-await': 'warn',

        'deprecation/deprecation': 'warn',
      },
    },
    {
      files: [GLOB_JS, GLOB_JSX],
      rules: {
        '@typescript-eslint/no-require-imports': 'off',
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ]

  return config
}
