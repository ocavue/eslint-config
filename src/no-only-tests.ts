import type { Linter } from 'eslint'
import plugin from 'eslint-plugin-no-only-tests'

export function noOnlyTests() {
  const config: Linter.Config[] = [
    {
      name: 'no-only-tests',
      plugins: {
        'no-only-tests': plugin,
      },
      rules: {
        'no-only-tests/no-only-tests': 'error',
      },
    },
  ]

  return config
}
