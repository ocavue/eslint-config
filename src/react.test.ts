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
      // https://eslint-react.xyz/docs/rules/no-array-index-key
      '@eslint-react/no-array-index-key',

      // https://github.com/Rel1cx/eslint-react/blob/v4.2.3/packages/plugins/eslint-plugin-react-jsx/src/rules/no-children-prop/no-children-prop.mdx
      '@eslint-react/jsx-no-children-prop',

      // https://github.com/Rel1cx/eslint-react/blob/v4.2.3/packages/plugins/eslint-plugin-react-jsx/src/rules/no-children-prop-with-children/no-children-prop-with-children.mdx
      '@eslint-react/jsx-no-children-prop-with-children',

      // https://github.com/Rel1cx/eslint-react/blob/v4.2.3/packages/plugins/eslint-plugin-react-jsx/src/rules/no-key-after-spread/no-key-after-spread.mdx
      '@eslint-react/jsx-no-key-after-spread',

      // https://github.com/Rel1cx/eslint-react/blob/v5.7.4/plugins/eslint-plugin-react-jsx/src/rules/no-leaked-dollar/no-leaked-dollar.mdx
      '@eslint-react/jsx-no-leaked-dollar',
    ],
    enabledRules: [],
  })
})
