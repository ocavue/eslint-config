import { expect, test } from 'vitest'

import { commonRules, jsOnlyRules, tsOnlyRules } from './typescript.ts'

test('commonRules', () => {
  expect(commonRules()).toMatchInlineSnapshot(`
    {
      "@typescript-eslint/ban-ts-comment": "error",
      "@typescript-eslint/no-array-constructor": "error",
      "@typescript-eslint/no-duplicate-enum-values": "error",
      "@typescript-eslint/no-empty-object-type": [
        "error",
        {
          "allowInterfaces": "always",
        },
      ],
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-extra-non-null-assertion": "error",
      "@typescript-eslint/no-misused-new": "error",
      "@typescript-eslint/no-namespace": "error",
      "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
      "@typescript-eslint/no-require-imports": "error",
      "@typescript-eslint/no-this-alias": "error",
      "@typescript-eslint/no-unnecessary-type-constraint": "error",
      "@typescript-eslint/no-unsafe-declaration-merging": "error",
      "@typescript-eslint/no-unsafe-function-type": "error",
      "@typescript-eslint/no-unused-expressions": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          "argsIgnorePattern": "^_",
          "caughtErrorsIgnorePattern": "^_",
          "varsIgnorePattern": "^_",
        },
      ],
      "@typescript-eslint/no-wrapper-object-types": "error",
      "@typescript-eslint/prefer-as-const": "error",
      "@typescript-eslint/prefer-namespace-keyword": "error",
      "@typescript-eslint/triple-slash-reference": "off",
      "constructor-super": "off",
      "getter-return": "off",
      "no-array-constructor": "off",
      "no-class-assign": "off",
      "no-const-assign": "off",
      "no-dupe-args": "off",
      "no-dupe-class-members": "off",
      "no-dupe-keys": "off",
      "no-duplicate-imports": [
        "warn",
        {
          "allowSeparateTypeImports": true,
        },
      ],
      "no-func-assign": "off",
      "no-import-assign": "off",
      "no-new-native-nonconstructor": "off",
      "no-new-symbol": "off",
      "no-obj-calls": "off",
      "no-redeclare": "off",
      "no-setter-return": "off",
      "no-this-before-super": "off",
      "no-undef": "off",
      "no-unreachable": "off",
      "no-unsafe-negation": "off",
      "no-unused-expressions": "off",
      "no-unused-vars": "off",
      "no-var": "error",
      "no-with": "off",
      "prefer-const": "error",
      "prefer-rest-params": "error",
      "prefer-spread": "error",
    }
  `)
})

test('tsOnlyRules', () => {
  expect(tsOnlyRules()).toMatchInlineSnapshot(`
    {
      "@typescript-eslint/adjacent-overload-signatures": "error",
      "@typescript-eslint/array-type": "off",
      "@typescript-eslint/await-thenable": "error",
      "@typescript-eslint/ban-tslint-comment": "error",
      "@typescript-eslint/class-literal-property-style": "error",
      "@typescript-eslint/consistent-generic-constructors": "error",
      "@typescript-eslint/consistent-indexed-object-style": "off",
      "@typescript-eslint/consistent-type-assertions": "error",
      "@typescript-eslint/consistent-type-definitions": "off",
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        {
          "disallowTypeAnnotations": false,
        },
      ],
      "@typescript-eslint/no-array-delete": "error",
      "@typescript-eslint/no-base-to-string": "error",
      "@typescript-eslint/no-confusing-non-null-assertion": "error",
      "@typescript-eslint/no-duplicate-type-constituents": "error",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/no-for-in-array": "error",
      "@typescript-eslint/no-implied-eval": "error",
      "@typescript-eslint/no-import-type-side-effects": "error",
      "@typescript-eslint/no-inferrable-types": "off",
      "@typescript-eslint/no-misused-promises": [
        "error",
        {
          "checksVoidReturn": false,
        },
      ],
      "@typescript-eslint/no-mixed-enums": "error",
      "@typescript-eslint/no-redundant-type-constituents": "error",
      "@typescript-eslint/no-unnecessary-parameter-property-assignment": "error",
      "@typescript-eslint/no-unnecessary-type-assertion": "error",
      "@typescript-eslint/no-unsafe-argument": "error",
      "@typescript-eslint/no-unsafe-assignment": "error",
      "@typescript-eslint/no-unsafe-call": "error",
      "@typescript-eslint/no-unsafe-enum-comparison": "error",
      "@typescript-eslint/no-unsafe-member-access": "error",
      "@typescript-eslint/no-unsafe-return": "error",
      "@typescript-eslint/no-unsafe-unary-minus": "error",
      "@typescript-eslint/only-throw-error": "error",
      "@typescript-eslint/prefer-for-of": "off",
      "@typescript-eslint/prefer-function-type": "error",
      "@typescript-eslint/prefer-promise-reject-errors": "error",
      "@typescript-eslint/require-await": "error",
      "@typescript-eslint/restrict-plus-operands": "error",
      "@typescript-eslint/restrict-template-expressions": "off",
      "@typescript-eslint/return-await": [
        "error",
        "always",
      ],
      "@typescript-eslint/unbound-method": "error",
      "no-empty-function": "off",
      "no-implied-eval": "off",
      "no-throw-literal": "off",
      "prefer-promise-reject-errors": "off",
      "require-await": "off",
    }
  `)
})

test('jsOnlyRules', () => {
  expect(jsOnlyRules()).toMatchInlineSnapshot(`
    {
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/no-var-requires": "off",
    }
  `)
})
