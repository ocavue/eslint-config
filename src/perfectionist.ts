import perfectionistPlugin from 'eslint-plugin-perfectionist'

import type { Config } from './types.ts'

/**
 * Turns off all rules that are unnecessary or might conflict with Prettier.
 *
 * Notice that this config does not run `prettier` as an ESLint rule, so you
 * have to run `pretter` separately for formatting.
 */
export function perfectionist(): Config[] {
  return [
    {
      plugins: {
        perfectionist: perfectionistPlugin,
      },
      rules: {
        'perfectionist/sort-exports': 'warn',
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
