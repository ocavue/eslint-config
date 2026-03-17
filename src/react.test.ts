import eslintReact from '@eslint-react/eslint-plugin'
import { test } from 'vitest'

import { reactRules } from './react.ts'
import { checkRules } from './test-utils.ts'
import type { Config, Rules } from './types.ts'

test('react rules should match recommended rules', () => {
  const recommendedConfig: Config =
    eslintReact.configs['recommended-typescript']
  const recommendedRules: Rules = recommendedConfig.rules || {}
  const currentRules: Rules = reactRules

  checkRules({
    plugin: eslintReact,
    currentRules,
    recommendedRules,
    disabledRules: [],
    enabledRules: [],
  })
})
