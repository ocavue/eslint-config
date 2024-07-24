// @ts-check

import * as importPlugin from 'eslint-plugin-import-x'

export function imports() {
  /** @type {import('eslint').Linter.FlatConfig[]} */
  const config = [
    {
      name: 'import',
      plugins: {
        // @ts-expect-error incorrect type
        import: importPlugin,
      },
      settings: {
        'import/resolver': {
          // You will also need to install and configure the TypeScript resolver
          // See also https://github.com/import-js/eslint-import-resolver-typescript#configuration
          typescript: true,
          node: true,
        },
      },
      rules: {
        // External modules must be declared in the package.json. Only enforced in CI.
        'import/no-extraneous-dependencies': process.env.CI ? 'error' : 'off',
        'import/first': 'warn',
        'import/no-mutable-exports': 'warn',
        'import/no-useless-path-segments': 'warn',
        'import/newline-after-import': 'warn',
        'import/no-duplicates': 'warn',
        'import/order': [
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
