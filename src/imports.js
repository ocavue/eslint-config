// @ts-check

// @ts-expect-error no type
import importPlugin from 'eslint-plugin-import'

export function imports() {
  /** @type {import('eslint-define-config').FlatESLintConfig[]} */
  const config = [
    {
      plugins: {
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
        // External modules must be declared in the package.json
        'import/no-extraneous-dependencies': 'warn',
        'import/first': 'warn',
        'import/no-mutable-exports': 'warn',
        'import/no-useless-path-segments': 'warn',
        'import/newline-after-import': 'warn',
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
