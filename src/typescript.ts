import type { TSESLint } from '@typescript-eslint/utils'
import type { Linter } from 'eslint'
import tseslint from 'typescript-eslint'

import {
  findConfigByName,
  GLOB_JS,
  GLOB_JSX,
  GLOB_TS,
  GLOB_TSX,
} from './shared.js'
import type { Config, Rules } from './types.js'

export { tseslint }

function eslintRecommendedRules(): Rules {
  return tseslint.configs.eslintRecommended.rules || {}
}

function recommendedRules(): Rules {
  const configs = [...tseslint.configs.recommended]
  const config = findConfigByName(configs, 'typescript-eslint/recommended')

  // https://github.com/typescript-eslint/typescript-eslint/blob/v8.32.1/packages/eslint-plugin/src/configs/flat/recommended.ts#L25
  const rules = config?.rules || {}

  // @keep-sorted
  return {
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
  }
}

function recommendedTypeCheckedOnlyRules(): Rules {
  const configs = [...tseslint.configs.recommendedTypeCheckedOnly]
  const config = findConfigByName(
    configs,
    'typescript-eslint/recommended-type-checked-only',
  )

  // https://github.com/typescript-eslint/typescript-eslint/blob/v8.32.1/packages/eslint-plugin/src/configs/flat/recommended-type-checked-only.ts#L25
  const rules = config?.rules || {}

  // @keep-sorted
  return {
    ...rules,

    '@typescript-eslint/no-floating-promises': 'warn',

    '@typescript-eslint/no-misused-promises': [
      'error',
      { checksVoidReturn: false },
    ],

    '@typescript-eslint/no-unnecessary-type-assertion': 'warn',

    '@typescript-eslint/no-unsafe-argument': 'warn',

    '@typescript-eslint/no-unsafe-assignment': 'warn',

    '@typescript-eslint/no-unsafe-call': 'warn',

    '@typescript-eslint/no-unsafe-member-access': 'warn',

    '@typescript-eslint/no-unsafe-return': 'warn',

    '@typescript-eslint/restrict-template-expressions': 'off',
  }
}

function stylisticRules(): Rules {
  const configs = [...tseslint.configs.stylistic]
  const config = findConfigByName(configs, 'typescript-eslint/stylistic')

  // https://github.com/typescript-eslint/typescript-eslint/blob/v8.32.1/packages/eslint-plugin/src/configs/flat/stylistic.ts#L25
  const rules = config?.rules || {}

  // @keep-sorted
  return {
    ...rules,

    '@typescript-eslint/array-type': 'off',

    '@typescript-eslint/consistent-indexed-object-style': 'off',

    '@typescript-eslint/consistent-type-definitions': 'off',

    '@typescript-eslint/no-empty-function': 'off',

    // Turn off this rule because it's incompatible with the `--isolatedDeclarations` compiler option.
    '@typescript-eslint/no-inferrable-types': 'off',

    '@typescript-eslint/prefer-for-of': 'off',

    '@typescript-eslint/prefer-function-type': 'warn',
  }
}

function commonRules(): Rules {
  return {
    ...eslintRecommendedRules,
    ...recommendedRules(),
  }
}

function tsOnlyRules(): Rules {
  // @keep-sorted
  return {
    ...recommendedTypeCheckedOnlyRules(),
    ...stylisticRules(),

    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {
        // Allow type imports in type annotations (e.g. `type T = import('Foo').Foo`)
        disallowTypeAnnotations: false,
      },
    ],

    '@typescript-eslint/no-import-type-side-effects': 'warn',

    '@typescript-eslint/no-mixed-enums': 'error',

    '@typescript-eslint/no-unnecessary-parameter-property-assignment': 'warn',

    '@typescript-eslint/return-await': ['error', 'always'],
  }
}

function jsOnlyRules(): Rules {
  // @keep-sorted
  return {
    '@typescript-eslint/no-require-imports': 'off',
    '@typescript-eslint/no-var-requires': 'off',
  }
}

export function typescript(): Linter.Config[] {
  const base: TSESLint.FlatConfig.Config = {
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

  const common: TSESLint.FlatConfig.Config = {
    name: 'ocavue/typescript/rules',
    files: [GLOB_TS, GLOB_TSX, GLOB_JS, GLOB_JSX],
    rules: commonRules(),
  }

  const ts: TSESLint.FlatConfig.Config = {
    name: 'ocavue/typescript/ts-only-rules',
    files: [GLOB_TS, GLOB_TSX],
    rules: tsOnlyRules(),
  }

  const js: TSESLint.FlatConfig.Config = {
    name: 'ocavue/typescript/js-only-rules',
    files: [GLOB_JS, GLOB_JSX],
    rules: jsOnlyRules(),
  }

  // @ts-expect-error: unmatched type
  const configs: Config[] = [base, common, ts, js]

  return configs
}
