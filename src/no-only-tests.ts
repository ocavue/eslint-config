import type { Linter } from 'eslint'
// @ts-expect-error missing types
import plugin from 'eslint-plugin-no-only-tests'

export function noOnlyTests(): Linter.Config[] {
  const isCI = !!process.env.CI

  return [
    {
      name: 'no-only-tests',
      plugins: {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        'no-only-tests': plugin,
      },
      rules: {
        'no-only-tests/no-only-tests': isCI ? 'error' : 'warn',
      },
    },
  ]
}
