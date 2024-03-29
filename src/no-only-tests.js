// @ts-check

// @ts-expect-error: eslint-plugin-unicorn is not typed
import plugin from 'eslint-plugin-no-only-tests'

export function noOnlyTests() {
  /** @type {import('eslint-define-config').FlatESLintConfig[]} */
  const config = [
    {
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
