import plugin from 'eslint-plugin-jsdoc'
import { test } from 'vitest'

import { jsdocRules } from './jsdoc.js'
import { checkRules } from './test-utils.js'

test('JSDoc rules should match recommended rules', () => {
  // @keep-sorted
  const disabledRules = [
    // https://github.com/gajus/eslint-plugin-jsdoc/blob/v63.3.3/docs/rules/implements-on-classes.md
    'jsdoc/implements-on-classes',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/v63.3.3/docs/rules/no-defaults.md
    'jsdoc/no-defaults',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/v63.3.3/docs/rules/no-types.md
    'jsdoc/no-types',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/v63.3.3/docs/rules/require-jsdoc.md
    'jsdoc/require-jsdoc',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/v63.3.3/docs/rules/require-param-description.md
    'jsdoc/require-param-description',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/v63.3.3/docs/rules/require-param-name.md
    'jsdoc/require-param-name',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/v63.3.3/docs/rules/require-param.md
    'jsdoc/require-param',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/v63.3.3/docs/rules/require-property.md
    'jsdoc/require-property',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/v63.3.3/docs/rules/require-returns-check.md
    'jsdoc/require-returns-check',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/v63.3.3/docs/rules/require-returns-description.md
    'jsdoc/require-returns-description',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/v63.3.3/docs/rules/require-returns.md
    'jsdoc/require-returns',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/v63.3.3/docs/rules/require-yields.md
    'jsdoc/require-yields',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/v63.3.3/docs/rules/tag-lines.md
    'jsdoc/tag-lines',
  ]

  checkRules({
    plugin,
    currentRules: jsdocRules,
    recommendedRules: plugin.configs['flat/recommended-typescript'].rules || {},
    disabledRules,
    enabledRules: [],
  })
})
