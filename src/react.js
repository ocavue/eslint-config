// @ts-check

import { fixupPluginRules } from '@eslint/compat'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'

import { GLOB_TS, GLOB_TSX } from './shared.js'

/** @type {import('eslint').Linter.Config} */
const reactRecommended = reactPlugin.configs.flat.recommended

export function react() {
  /** @type {import('eslint').Linter.Config[]} */
  const config = [
    {
      ...reactRecommended,
      name: 'react',
      files: [GLOB_TS, GLOB_TSX],
      settings: {
        react: {
          version: 'detect',
        },
      },
      rules: {
        ...reactRecommended.rules,
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
      },
    },

    {
      name: 'react-hooks',
      files: [GLOB_TS, GLOB_TSX],
      plugins: {
        'react-hooks': fixupPluginRules(reactHooksPlugin),
      },
      rules: {
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
      },
    },
  ]

  return config
}
