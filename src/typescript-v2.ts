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

  // https://github.com/typescript-eslint/typescript-eslint/blob/v8.32.1/packages/eslint-plugin/src/configs/flat/recommended.ts#L25
  const rules = config?.rules || {}

  return {
    name: 'ocavue/typescript/recommended',
    files: [GLOB_TS, GLOB_TSX, GLOB_JS, GLOB_JSX],
    rules: {
      ...rules,

      // `type T1 = T0` and `interface T2 extends T0 {}` have the same meaning
      // but different behavior in TypeScript type checking. `T1` and `T0` are
      // the same type, while `T2` is different than `T0`. We allow `interface
      // T2 extends T0 {}` explicitly.
      '@typescript-eslint/no-empty-object-type': [
        'error',
        {
          allowInterfaces: 'with-single-extends',
        },
      ],

      '@typescript-eslint/no-explicit-any': 'off',

      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],

      '@typescript-eslint/triple-slash-reference': 'off',
    },
  }
}

function js(): TSESLint.FlatConfig.Config {
  return {
    name: 'ocavue/typescript/js',
    files: [GLOB_JS, GLOB_JSX],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-var-requires': 'off',
    },
  }
}

function recommendedTypeCheckedOnly(): TSESLint.FlatConfig.Config {
  const configs = [...tseslint.configs.recommendedTypeCheckedOnly]
  const config = findConfigByName(
    configs,
    'typescript-eslint/recommended-type-checked-only',
  )

  // https://github.com/typescript-eslint/typescript-eslint/blob/v8.32.1/packages/eslint-plugin/src/configs/flat/recommended-type-checked-only.ts#L25
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

  // https://github.com/typescript-eslint/typescript-eslint/blob/v8.32.1/packages/eslint-plugin/src/configs/flat/stylistic.ts#L25
  const rules = config?.rules || {}

  return {
    name: 'ocavue/typescript/stylistic',
    files: [GLOB_TS, GLOB_TSX],
    rules: {
      ...rules,

      '@typescript-eslint/array-type': 'off',

      '@typescript-eslint/consistent-indexed-object-style': 'off',

      '@typescript-eslint/consistent-type-definitions': 'off',

      '@typescript-eslint/no-empty-function': 'off',

      // Turn off this rule because it's incompatible with the `--isolatedDeclarations` compiler option.
      '@typescript-eslint/no-inferrable-types': 'off',

      '@typescript-eslint/prefer-for-of': 'off',

      '@typescript-eslint/prefer-function-type': 'warn',
    },
  }
}

export function typescript(): Linter.Config[] {
  const configs: TSESLint.FlatConfig.Config[] = [
    baseConfig(),
    eslintRecommended(),
    recommended(),
    recommendedTypeCheckedOnly(),
    stylistic(),
    js(),
  ]

  // @ts-expect-error: unmatched type
  return configs
}
