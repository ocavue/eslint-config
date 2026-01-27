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

/**
 * This is a compatibility ruleset that:
 * - disables rules from eslint:recommended which are already handled by TypeScript.
 * - enables rules that make sense due to TS's typechecking / transpilation.
 * @see {@link https://typescript-eslint.io/users/configs/#eslint-recommended}
 * @internal
 */
export function originalESLintRecommendedRules(): Rules {
  return tseslint.configs.eslintRecommended.rules || {}
}

/** @internal */
export function eslintRecommendedRules(): Rules {
  return originalESLintRecommendedRules()
}

/** @internal */
export function originalRecommendedRules(): Rules {
  const configs = [...tseslint.configs.recommended]
  const config = findConfigByName(configs, 'typescript-eslint/recommended')

  // https://github.com/typescript-eslint/typescript-eslint/blob/v8.32.1/packages/eslint-plugin/src/configs/flat/recommended.ts#L25
  const rules = config?.rules || {}
  return rules
}

/** @internal */
export function originalRecommendedTypeCheckedOnlyRules(): Rules {
  const configs = [...tseslint.configs.recommendedTypeCheckedOnly]
  const config = findConfigByName(
    configs,
    'typescript-eslint/recommended-type-checked-only',
  )

  // https://github.com/typescript-eslint/typescript-eslint/blob/v8.32.1/packages/eslint-plugin/src/configs/flat/recommended-type-checked-only.ts#L25
  const rules = config?.rules || {}
  return rules
}

export function originalStylisticRules(): Rules {
  const configs = [...tseslint.configs.stylistic]
  const config = findConfigByName(configs, 'typescript-eslint/stylistic')

  // https://github.com/typescript-eslint/typescript-eslint/blob/v8.32.1/packages/eslint-plugin/src/configs/flat/stylistic.ts#L25
  const rules = config?.rules || {}
  return rules
}

/** @internal */
export function recommendedRules(): Rules {
  const rules = originalRecommendedRules()

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
        allowInterfaces: 'always',
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

/** @internal */
export function recommendedTypeCheckedOnlyRules(): Rules {
  const rules = originalRecommendedTypeCheckedOnlyRules()

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
  const rules = originalStylisticRules()

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

/**
 * Shared rules for both TypeScript and JavaScript files.
 * @internal
 */
export function commonRules(): Rules {
  return {
    ...eslintRecommendedRules,
    ...recommendedRules(),
  }
}

/**
 * Additional rules for TypeScript files.
 * @internal
 */
export function tsOnlyRules(): Rules {
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

/**
 * Additional rules for JavaScript files.
 * @internal
 */
export function jsOnlyRules(): Rules {
  // @keep-sorted
  return {
    '@typescript-eslint/no-require-imports': 'off',
    '@typescript-eslint/no-var-requires': 'off',
  }
}

export function typescript(): Config[] {
  const base: Config = {
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

  const common: Config = {
    name: 'ocavue/typescript/rules',
    files: [GLOB_TS, GLOB_TSX, GLOB_JS, GLOB_JSX],
    rules: commonRules(),
  }

  const ts: Config = {
    name: 'ocavue/typescript/ts-only-rules',
    files: [GLOB_TS, GLOB_TSX],
    rules: tsOnlyRules(),
  }

  const js: Config = {
    name: 'ocavue/typescript/js-only-rules',
    files: [GLOB_JS, GLOB_JSX],
    rules: jsOnlyRules(),
  }

  return [base, common, ts, js]
}
