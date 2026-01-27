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

  // https://github.com/typescript-eslint/typescript-eslint/blob/v8.54.0/packages/eslint-plugin/src/configs/flat/recommended.ts#L25
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

  // https://github.com/typescript-eslint/typescript-eslint/blob/v8.54.0/packages/eslint-plugin/src/configs/flat/recommended-type-checked-only.ts#L25
  const rules = config?.rules || {}
  return rules
}

export function originalStylisticRules(): Rules {
  const configs = [...tseslint.configs.stylistic]
  const config = findConfigByName(configs, 'typescript-eslint/stylistic')

  // https://github.com/typescript-eslint/typescript-eslint/blob/v8.54.0/packages/eslint-plugin/src/configs/flat/stylistic.ts#L25
  const rules = config?.rules || {}
  return rules
}

/** @internal */
export function recommendedRules(): Rules {
  const rules = originalRecommendedRules()

  // @keep-sorted
  return {
    ...rules,

    // https://typescript-eslint.io/rules/no-empty-object-type/
    // 
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

    // https://typescript-eslint.io/rules/no-explicit-any/
    '@typescript-eslint/no-explicit-any': 'off',

    // https://typescript-eslint.io/rules/no-unused-vars/
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],

    // https://typescript-eslint.io/rules/triple-slash-reference/
    '@typescript-eslint/triple-slash-reference': 'off',
  }
}

/** @internal */
export function recommendedTypeCheckedOnlyRules(): Rules {
  const rules = originalRecommendedTypeCheckedOnlyRules()

  // @keep-sorted
  return {
    ...rules,

    // https://typescript-eslint.io/rules/no-floating-promises/
    '@typescript-eslint/no-floating-promises': 'warn',

    // https://typescript-eslint.io/rules/no-misused-promises/
    '@typescript-eslint/no-misused-promises': [
      'error',
      { checksVoidReturn: false },
    ],

    // https://typescript-eslint.io/rules/no-unnecessary-type-assertion/
    '@typescript-eslint/no-unnecessary-type-assertion': 'warn',

    // https://typescript-eslint.io/rules/no-unsafe-argument/
    '@typescript-eslint/no-unsafe-argument': 'warn',

    // https://typescript-eslint.io/rules/no-unsafe-assignment/
    '@typescript-eslint/no-unsafe-assignment': 'warn',

    // https://typescript-eslint.io/rules/no-unsafe-call/
    '@typescript-eslint/no-unsafe-call': 'warn',

    // https://typescript-eslint.io/rules/no-unsafe-member-access/
    '@typescript-eslint/no-unsafe-member-access': 'warn',

    // https://typescript-eslint.io/rules/no-unsafe-return/
    '@typescript-eslint/no-unsafe-return': 'warn',

    // https://typescript-eslint.io/rules/restrict-template-expressions/
    '@typescript-eslint/restrict-template-expressions': 'off',
  }
}

function stylisticRules(): Rules {
  const rules = originalStylisticRules()

  // @keep-sorted
  return {
    ...rules,

    // https://typescript-eslint.io/rules/array-type/
    '@typescript-eslint/array-type': 'off',

    // https://typescript-eslint.io/rules/consistent-indexed-object-style/
    '@typescript-eslint/consistent-indexed-object-style': 'off',

    // https://typescript-eslint.io/rules/consistent-type-definitions/
    '@typescript-eslint/consistent-type-definitions': 'off',

    // https://typescript-eslint.io/rules/no-empty-function/
    '@typescript-eslint/no-empty-function': 'off',

    // https://typescript-eslint.io/rules/no-inferrable-types/
    // 
    // Turn off this rule because it's incompatible with the `--isolatedDeclarations` compiler option.
    '@typescript-eslint/no-inferrable-types': 'off',

    // https://typescript-eslint.io/rules/prefer-for-of/
    '@typescript-eslint/prefer-for-of': 'off',

    // https://typescript-eslint.io/rules/prefer-function-type/
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

    // https://typescript-eslint.io/rules/consistent-type-imports/
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {
        // Allow type imports in type annotations (e.g. `type T = import('Foo').Foo`)
        disallowTypeAnnotations: false,
      },
    ],

    // https://typescript-eslint.io/rules/no-import-type-side-effects/
    '@typescript-eslint/no-import-type-side-effects': 'warn',

    // https://typescript-eslint.io/rules/no-mixed-enums/
    '@typescript-eslint/no-mixed-enums': 'error',

    // https://typescript-eslint.io/rules/no-unnecessary-parameter-property-assignment/
    '@typescript-eslint/no-unnecessary-parameter-property-assignment': 'warn',

    // https://typescript-eslint.io/rules/return-await/
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
