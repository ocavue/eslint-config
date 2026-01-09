import plugin from 'eslint-plugin-package-json'
import { test } from 'vitest'

import { packageJsonRules } from './package-json.ts'
import { checkRules } from './test-utils.ts'

test('package-json rules should match recommended rules', () => {
  checkRules({
    plugin,
    currentRules: packageJsonRules,
    recommendedRules: plugin.configs.recommended.rules || {},
    disabledRules: [
      // https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/v0.88.1/docs/rules/no-empty-fields.md
      'package-json/no-empty-fields',

      // https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/v0.88.1/docs/rules/require-description.md
      'package-json/require-description',
    ],
    enabledRules: [
      // https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/v0.88.1/docs/rules/order-properties.md
      'package-json/order-properties',
    ],
  })
})
