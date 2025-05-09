import type { Linter } from 'eslint'
import prettierConfig from 'eslint-config-prettier'

/**
 * Turns off all rules that are unnecessary or might conflict with Prettier.
 *
 * Notice that this config does not run `prettier` as an ESLint rule, so you
 * have to run `pretter` separately for formatting.
 */
export function prettier(): Linter.Config[] {
  return [
    {
      name: 'prettier',
      rules: {
        ...prettierConfig.rules,
      },
    },
  ]
}
