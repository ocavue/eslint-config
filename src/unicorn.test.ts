import plugin from 'eslint-plugin-unicorn'
import { expect, test } from 'vitest'

import { unicornRules } from './unicorn.js'

const recommendedRules = plugin.configs.recommended.rules

test('All recommended rules should be included unless explicitly disabled', () => {
  const expectedRules = structuredClone(recommendedRules)
  expect(unicornRules).toEqual(expectedRules)
})
