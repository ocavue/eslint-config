// @ts-check

import plugin from 'eslint-plugin-jsonc'
import parser from 'jsonc-eslint-parser'

import { GLOB_PACKAGE_JSON } from './shared.js'

/**
 * Sort package.json keys
 */
export const packageJson = () => {
  /** @type {import('eslint-define-config').FlatESLintConfigItem[]} */
  const config = [
    {
      files: [GLOB_PACKAGE_JSON],
      languageOptions: {
        // @ts-expect-error: the types for `parser` seems to be wrong
        parser,
        parserOptions: {
          jsonSyntax: 'JSON5',
        },
      },
      plugins: {
        // @ts-expect-error: incorrect types
        jsonc: plugin,
      },
      rules: {
        'jsonc/sort-keys': [
          'warn',
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
  ]

  return config
}
