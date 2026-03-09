import { recommended } from '@eslint-community/eslint-plugin-eslint-comments/configs'
import { test } from 'vitest'

import { commentRules } from './comment.ts'
import { checkRules } from './test-utils.ts'
import type { Plugin, Rules } from './types.ts'

test('comment rules should match recommended rules', () => {
  const plugin: Plugin =
    recommended.plugins!['@eslint-community/eslint-comments']
  const recommendedRules: Rules = recommended.rules || {}

  checkRules({
    plugin,
    currentRules: commentRules,
    recommendedRules,
    disabledRules: [
      // https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/disable-enable-pair.html
      '@eslint-community/eslint-comments/disable-enable-pair',
    ],
    enabledRules: [],
  })
})
