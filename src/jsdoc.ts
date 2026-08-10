import type { Linter } from 'eslint'
import plugin from 'eslint-plugin-jsdoc'

import { GLOB_GEN, GLOB_JS, GLOB_JSX, GLOB_TS, GLOB_TSX } from './shared.ts'

// @keep-sorted
export const jsdocRules: Linter.RulesRecord = {
  // https://github.com/gajus/eslint-plugin-jsdoc/blob/v63.3.3/docs/rules/check-access.md
  'jsdoc/check-access': 'warn',

  // https://github.com/gajus/eslint-plugin-jsdoc/blob/v63.3.3/docs/rules/check-param-names.md
  'jsdoc/check-param-names': ['warn', { checkDestructured: false }],

  // https://github.com/gajus/eslint-plugin-jsdoc/blob/v63.3.3/docs/rules/check-property-names.md
  'jsdoc/check-property-names': 'warn',

  // https://github.com/gajus/eslint-plugin-jsdoc/blob/v63.3.3/docs/rules/check-tag-names.md
  'jsdoc/check-tag-names': [
    'warn',
    { typed: false, enableFixer: false, jsxTags: true, definedTags: ['defaultValue'] },
  ],

  // https://github.com/gajus/eslint-plugin-jsdoc/blob/v63.3.3/docs/rules/check-types.md
  'jsdoc/check-types': 'warn',

  // https://github.com/gajus/eslint-plugin-jsdoc/blob/v63.3.3/docs/rules/check-values.md
  'jsdoc/check-values': 'warn',

  // https://github.com/gajus/eslint-plugin-jsdoc/blob/v63.3.3/docs/rules/empty-tags.md
  'jsdoc/empty-tags': 'warn',

  // https://github.com/gajus/eslint-plugin-jsdoc/blob/v63.3.3/docs/rules/multiline-blocks.md
  'jsdoc/multiline-blocks': [
    'warn',
    {
      noSingleLineBlocks: true,
      singleLineTags: [
        'lends',
        'type',
        'internal',
        'interface',
        'jsx',
        'jsxFrag',
        'jsxImportSource',
        'jsxRuntime',
      ],
    },
  ],

  // https://github.com/gajus/eslint-plugin-jsdoc/blob/v63.3.3/docs/rules/no-multi-asterisks.md
  'jsdoc/no-multi-asterisks': 'warn',

  // https://github.com/gajus/eslint-plugin-jsdoc/blob/v63.3.3/docs/rules/reject-any-type.md
  'jsdoc/reject-any-type': 'warn',

  // https://github.com/gajus/eslint-plugin-jsdoc/blob/v63.3.3/docs/rules/reject-function-type.md
  'jsdoc/reject-function-type': 'warn',

  // https://github.com/gajus/eslint-plugin-jsdoc/blob/v63.3.3/docs/rules/require-property-description.md
  'jsdoc/require-property-description': 'warn',

  // https://github.com/gajus/eslint-plugin-jsdoc/blob/v63.3.3/docs/rules/require-property-name.md
  'jsdoc/require-property-name': 'warn',

  // https://github.com/gajus/eslint-plugin-jsdoc/blob/v63.3.3/docs/rules/require-throws-type.md
  'jsdoc/require-throws-type': 'warn',

  // https://github.com/gajus/eslint-plugin-jsdoc/blob/v63.3.3/docs/rules/valid-types.md
  'jsdoc/valid-types': 'warn',
}

export function jsdoc(): Linter.Config[] {
  return [
    {
      name: 'jsdoc',
      files: [GLOB_TS, GLOB_TSX, GLOB_JS, GLOB_JSX],
      ignores: [GLOB_GEN],
      plugins: {
        jsdoc: plugin,
      },
      rules: {
        ...jsdocRules,
      },
    },
  ]
}
