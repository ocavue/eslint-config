import plugin from '@stylistic/eslint-plugin'

import type { Config } from './types.ts'

export function stylistic(): Config[] {
  return [
    {
      name: 'stylistic',
      plugins: {
        '@stylistic': plugin,
      },
      rules: {
        // https://eslint.style/rules/implicit-arrow-linebreak
        '@stylistic/implicit-arrow-linebreak': ['error', 'beside'],
      },
    },
  ]
}
