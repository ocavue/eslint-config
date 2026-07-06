import plugin from 'eslint-plugin-regexp'
import { test } from 'vitest'

import { regexpRules } from './regexp.js'
import { checkRules } from './test-utils.js'

test('Regexp rules should match recommended rules', () => {
  checkRules({
    plugin,
    currentRules: regexpRules,
    recommendedRules: plugin.configs['flat/recommended'].rules || {},
    disabledRules: [],
    enabledRules: [],
  })
})
