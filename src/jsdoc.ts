import type { Linter } from 'eslint'
import plugin from 'eslint-plugin-jsdoc'

// @keep-sorted
export const jsdocRules: Linter.RulesRecord = {
  // https://github.com/gajus/eslint-plugin-jsdoc/blob/v63.3.3/docs/rules/check-access.md
  'jsdoc/check-access': 'warn',

  // https://github.com/gajus/eslint-plugin-jsdoc/blob/v63.3.3/docs/rules/check-alignment.md
  'jsdoc/check-alignment': 'warn',

  // https://github.com/gajus/eslint-plugin-jsdoc/blob/v63.3.3/docs/rules/check-param-names.md
  'jsdoc/check-param-names': 'warn',

  // https://github.com/gajus/eslint-plugin-jsdoc/blob/v63.3.3/docs/rules/check-property-names.md
  'jsdoc/check-property-names': 'warn',

  // https://github.com/gajus/eslint-plugin-jsdoc/blob/v63.3.3/docs/rules/check-tag-names.md
  'jsdoc/check-tag-names': ['warn', { typed: true }],

  // https://github.com/gajus/eslint-plugin-jsdoc/blob/v63.3.3/docs/rules/check-types.md
  'jsdoc/check-types': 'warn',

  // https://github.com/gajus/eslint-plugin-jsdoc/blob/v63.3.3/docs/rules/check-values.md
  'jsdoc/check-values': 'warn',

  // https://github.com/gajus/eslint-plugin-jsdoc/blob/v63.3.3/docs/rules/empty-tags.md
  'jsdoc/empty-tags': 'warn',

  // https://github.com/gajus/eslint-plugin-jsdoc/blob/v63.3.3/docs/rules/escape-inline-tags.md
  'jsdoc/escape-inline-tags': 'warn',

  // https://github.com/gajus/eslint-plugin-jsdoc/blob/v63.3.3/docs/rules/implements-on-classes.md
  'jsdoc/implements-on-classes': 'warn',

  // https://github.com/gajus/eslint-plugin-jsdoc/blob/v63.3.3/docs/rules/multiline-blocks.md
  'jsdoc/multiline-blocks': ['warn', {noSingleLineBlocks: true}],

  // https://github.com/gajus/eslint-plugin-jsdoc/blob/v63.3.3/docs/rules/no-defaults.md
  'jsdoc/no-defaults': 'warn',

  // https://github.com/gajus/eslint-plugin-jsdoc/blob/v63.3.3/docs/rules/no-multi-asterisks.md
  'jsdoc/no-multi-asterisks': 'warn',

  // https://github.com/gajus/eslint-plugin-jsdoc/blob/v63.3.3/docs/rules/no-types.md
  'jsdoc/no-types': 'warn',

  // https://github.com/gajus/eslint-plugin-jsdoc/blob/v63.3.3/docs/rules/reject-any-type.md
  'jsdoc/reject-any-type': 'warn',

  // https://github.com/gajus/eslint-plugin-jsdoc/blob/v63.3.3/docs/rules/reject-function-type.md
  'jsdoc/reject-function-type': 'warn',

  // https://github.com/gajus/eslint-plugin-jsdoc/blob/v63.3.3/docs/rules/require-next-type.md
  'jsdoc/require-next-type': 'warn',

  // https://github.com/gajus/eslint-plugin-jsdoc/blob/v63.3.3/docs/rules/require-property-description.md
  'jsdoc/require-property-description': 'warn',

  // https://github.com/gajus/eslint-plugin-jsdoc/blob/v63.3.3/docs/rules/require-property-name.md
  'jsdoc/require-property-name': 'warn',

  // https://github.com/gajus/eslint-plugin-jsdoc/blob/v63.3.3/docs/rules/require-property.md
  'jsdoc/require-property': 'warn',

  // https://github.com/gajus/eslint-plugin-jsdoc/blob/v63.3.3/docs/rules/require-throws-type.md
  'jsdoc/require-throws-type': 'warn',

  // https://github.com/gajus/eslint-plugin-jsdoc/blob/v63.3.3/docs/rules/require-yields-check.md
  'jsdoc/require-yields-check': 'warn',

  // https://github.com/gajus/eslint-plugin-jsdoc/blob/v63.3.3/docs/rules/require-yields-type.md
  'jsdoc/require-yields-type': 'warn',

  // https://github.com/gajus/eslint-plugin-jsdoc/blob/v63.3.3/docs/rules/require-yields.md
  'jsdoc/require-yields': 'warn',

  // https://github.com/gajus/eslint-plugin-jsdoc/blob/v63.3.3/docs/rules/tag-lines.md
  'jsdoc/tag-lines': 'warn',

  // https://github.com/gajus/eslint-plugin-jsdoc/blob/v63.3.3/docs/rules/ts-no-empty-object-type.md
  'jsdoc/ts-no-empty-object-type': 'warn',

  // https://github.com/gajus/eslint-plugin-jsdoc/blob/v63.3.3/docs/rules/valid-types.md
  'jsdoc/valid-types': 'warn',
}

export function jsdoc(): Linter.Config[] {
  return [
    {
      name: 'jsdoc',
      plugins: {
        jsdoc: plugin,
      },
      rules: {
        ...jsdocRules,
      },
    },
  ]
}
