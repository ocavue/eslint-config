// @ts-check

const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  env: {
    browser: true,
    node: true,
    commonjs: true,
  },

  plugins: [
    'eslint-plugin-unicorn',
    'eslint-plugin-no-only-tests',

    '@typescript-eslint',
  ],

  extends: [
    'eslint:recommended',
    'plugin:jsonc/recommended-with-jsonc',
    'plugin:yml/standard',
    'plugin:markdown/recommended',

    // https://www.npmjs.com/package/eslint-plugin-import
    'plugin:import/recommended',
    'plugin:import/typescript',

    // https://typescript-eslint.io/docs/linting/configs
    'plugin:@typescript-eslint/recommended',
  ],

  ignorePatterns: [
    '*.min.*',
    '*.d.ts',
    'CHANGELOG.md',
    'LICENSE*',
    'dist',
    'out',
    'output',
    'coverage',
    'public',
    'tmp',
    'temp',
    'package-lock.json',
    'pnpm-lock.yaml',
    'yarn.lock',
    '__snapshots__',
    '!.github',
    '!.vscode',
  ],

  rules: {
    // unicorn
    // Enforce passing a message value when creating a built-in error
    'unicorn/error-message': 'error',
    // Require `Array.isArray()` instead of `instanceof Array`.
    'unicorn/no-instanceof-array': 'error',

    // typescript
    '@typescript-eslint/no-explicit-any': 'off',

    // yml
    'yml/quotes': 'off',

    // import
    'import/no-extraneous-dependencies': 'error',
  },

  settings: {
    'import/resolver': {
      // You will also need to install and configure the TypeScript resolver
      // See also https://github.com/import-js/eslint-import-resolver-typescript#configuration
      typescript: true,
      node: true,
    },
  },

  overrides: [
    {
      files: ['*.json', '*.json5'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'jsonc/array-bracket-spacing': ['error', 'never'],
        'jsonc/comma-dangle': ['error', 'never'],
        'jsonc/comma-style': ['error', 'last'],
        'jsonc/indent': ['error', 2],
        'jsonc/key-spacing': [
          'error',
          { beforeColon: false, afterColon: true },
        ],
        'jsonc/no-octal-escape': 'error',
        'jsonc/object-curly-newline': [
          'error',
          { multiline: true, consistent: true },
        ],
        'jsonc/object-curly-spacing': ['error', 'always'],
        'jsonc/object-property-newline': [
          'error',
          { allowMultiplePropertiesPerLine: true },
        ],
      },
    },
    {
      files: ['package.json'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'jsonc/sort-keys': [
          'error',
          {
            pathPattern: '^$',
            order: [
              'name',
              'displayName',
              'publisher',
              'type',
              'version',
              'private',
              'packageManager',
              'description',
              'author',
              'license',
              'funding',
              'homepage',
              'repository',
              'bugs',
              'contributes',
              'keywords',
              'categories',
              'sideEffects',
              'main',
              'module',
              'types',
              'exports',
              'typesVersions',
              'bin',
              'icon',
              'files',
              'engines',
              'scripts',
              'dependencies',
              'peerDependencies',
              'peerDependenciesMeta',
              'optionalDependencies',
              'devDependencies',
              'publishConfig',
              'overrides',
              'resolutions',
            ],
          },
          {
            pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
            order: { type: 'asc' },
          },
          {
            pathPattern: '^exports.*$',
            order: ['types', 'require', 'import', 'default'],
          },
        ],
      },
    },
    {
      files: ['*.yaml', '*.yml'],
      parser: 'yaml-eslint-parser',
    },
    {
      // Code blocks in markdown file
      files: ['**/*.md/*.*'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
    {
      files: ['*.test.*', '*.spec.*'],
      rules: {
        'no-only-tests/no-only-tests': 'error',
      },
    },
    {
      files: ['*.js', '*.cjs'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
})
