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
    disabledRules: [
      // https://eslint-react.xyz/docs/rules/dom-no-dangerously-set-innerhtml
      '@eslint-react/dom/no-dangerously-set-innerhtml',

      // https://eslint-react.xyz/docs/rules/dom-no-flush-sync
      '@eslint-react/dom/no-flush-sync',

      // https://eslint-react.xyz/docs/rules/no-array-index-key
      '@eslint-react/no-array-index-key',

      // https://eslint-react.xyz/docs/rules/no-children-map
      '@eslint-react/no-children-map',

      // https://eslint-react.xyz/docs/rules/no-clone-element
      '@eslint-react/no-clone-element',

      // https://eslint-react.xyz/docs/rules/web-api-no-leaked-event-listener
      '@eslint-react/web-api/no-leaked-event-listener',
    ],
    enabledRules: [],
  })
})
