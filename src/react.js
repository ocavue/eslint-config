// @ts-check

// @ts-expect-error no types
import reactPlugin from 'eslint-plugin-react'
// @ts-expect-error no types
import reactHooksPlugin from 'eslint-plugin-react-hooks'

import { GLOB_TS, GLOB_TSX } from './shared.js'

export function react() {
  /** @type {import('eslint').Linter.FlatConfig[]} */
  const config = [
    {
      files: [GLOB_TS, GLOB_TSX],
      plugins: {
        react: reactPlugin,
      },
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
        },
      },
      settings: {
        react: {
          version: 'detect',
        },
      },
      rules: {
        ...reactPlugin.configs.recommended.rules,
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
      },
    },

    {
      files: [GLOB_TS, GLOB_TSX],
      plugins: {
        'react-hooks': reactHooksPlugin,
      },
      rules: {
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
      },
    },
  ]

  return config
}
