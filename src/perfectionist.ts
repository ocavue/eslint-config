import perfectionistPlugin from 'eslint-plugin-perfectionist'

import type { Config } from './types.ts'


export function perfectionist(): Config[] {
  return [
    {
      plugins: {
        perfectionist: perfectionistPlugin,
      },
      rules: {
        'perfectionist/sort-imports': [
          'warn',
          {
            groups: [
              'side-effect-style',
              'side-effect',
              'builtin',
              'external',
              'internal',
              'parent',
              'sibling',
              'index',
            ],
          },
        ],
      },
    },
  ]
}
