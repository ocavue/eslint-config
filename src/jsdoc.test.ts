import plugin from 'eslint-plugin-jsdoc'
import { test } from 'vitest'

import { jsdocRules } from './jsdoc.js'
import { checkRules } from './test-utils.js'

test('JSDoc rules should match recommended rules', () => {
  checkRules({
    plugin,
    currentRules: jsdocRules,
    recommendedRules: plugin.configs['flat/recommended-typescript'].rules || {},
    disabledRules: [],
    enabledRules: [],
  })
})
