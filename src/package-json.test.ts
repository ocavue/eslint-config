import pkgJson from 'eslint-plugin-package-json'
import { test } from 'vitest'

import { packageJsonRules } from './package-json.ts'
import { checkRules } from './test-utils.ts'
import type { Plugin, Rules } from './types.ts'

test('package-json rules should match recommended rules', () => {
  const plugin: Plugin = pkgJson.configs.recommended.plugins['package-json']
  const recommendedRules: Rules = pkgJson.configs?.recommended?.rules || {}

  checkRules({
    plugin,
    currentRules: packageJsonRules,
    recommendedRules,
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
