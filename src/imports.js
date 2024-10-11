// @ts-check

import * as importPlugin from 'eslint-plugin-import-x'

export function imports() {
  /** @type {import('eslint').Linter.Config[]} */
  const config = [
    {
      name: 'import-x',
      plugins: {
        // @ts-expect-error incorrect type
        import: importPlugin,
      },
      settings: {
        'import-x/resolver': {
          // You will also need to install and configure the TypeScript resolver
          // See also https://github.com/import-js/eslint-import-resolver-typescript#configuration
          typescript: true,
          node: true,
        },
      },
      rules: {
        // External modules must be declared in the package.json. Only enforced in CI.
        'import-x/no-extraneous-dependencies': process.env.CI ? 'error' : 'off',
        'import-x/first': 'warn',
        'import-x/no-mutable-exports': 'warn',
        'import-x/no-useless-path-segments': 'warn',
        'import-x/newline-after-import': 'warn',
        'import-x/no-duplicates': ['warn', { 'prefer-inline': true }],
        'import-x/order': [
          'warn',
          {
            'newlines-between': 'always',
            alphabetize: { order: 'asc' },
            groups: [
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

  return config
}
