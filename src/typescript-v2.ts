import type { TSESLint } from '@typescript-eslint/utils'
import type { Linter } from 'eslint'
import tseslint from 'typescript-eslint'

import { GLOB_JS, GLOB_JSX, GLOB_TS, GLOB_TSX } from './shared.js'
import { findConfigByName } from './utils.js'

export { tseslint }

function baseConfig(): TSESLint.FlatConfig.Config {
  return {
    name: 'ocavue/typescript/base',
    files: [GLOB_TS, GLOB_TSX, GLOB_JS, GLOB_JSX],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
        warnOnUnsupportedTypeScriptVersion: false,
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
    },
  }
}

function eslintRecommended(): TSESLint.FlatConfig.Config {
  return {
    ...tseslint.configs.eslintRecommended,
    name: 'ocavue/typescript/eslint-recommended',
    files: [GLOB_TS, GLOB_TSX, GLOB_JS, GLOB_JSX],
  }
}

function recommended(): TSESLint.FlatConfig.Config {
  const configs = [...tseslint.configs.recommended]
  const config = findConfigByName(configs, 'typescript-eslint/recommended')
  const rules = config?.rules || {}
  return {
    name: 'ocavue/typescript/recommended',
    files: [GLOB_TS, GLOB_TSX, GLOB_JS, GLOB_JSX],
    rules: { ...rules },
  }
}

function recommendedTypeCheckedOnly(): TSESLint.FlatConfig.Config {
  const configs = [...tseslint.configs.recommendedTypeCheckedOnly]
  const config = findConfigByName(
    configs,
    'typescript-eslint/recommended-type-checked-only',
  )
  const rules = config?.rules || {}
  return {
    name: 'ocavue/typescript/recommended-type-checked-only',
    files: [GLOB_TS, GLOB_TSX],
    rules: { ...rules },
  }
}

function stylistic(): TSESLint.FlatConfig.Config {
  const configs = [...tseslint.configs.stylistic]
  const config = findConfigByName(configs, 'typescript-eslint/stylistic')
  const rules = config?.rules || {}
  return {
    name: 'ocavue/typescript/stylistic',
    files: [GLOB_TS, GLOB_TSX],
    rules: { ...rules },
  }
}

export function typescript(): Linter.Config[] {
  const configs: TSESLint.FlatConfig.Config[] = [
    baseConfig(),
    eslintRecommended(),
    recommended(),
    recommendedTypeCheckedOnly(),
    stylistic(),
  ]

  // @ts-expect-error: unmatched type
  return configs
}
