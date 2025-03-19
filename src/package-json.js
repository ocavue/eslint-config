// @ts-check

import pkgJson from 'eslint-plugin-package-json'

/**
 * Sort package.json keys
 */
export function packageJson() {
  const config = {
    ...pkgJson.configs.recommended,
    rules: {
      ...pkgJson.configs.recommended.rules,
      'package-json/no-empty-fields': 'off',
      'package-json/valid-package-definition': 'off',
      'package-json/sort-collections': [
        'warn',
        [
          // 'scripts', // Don't sort scripts
          'devDependencies',
          'dependencies',
          'peerDependencies',
          'config',
          'exports',
        ],
      ],
      'package-json/order-properties': [
        'warn',
        {
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
      ],
    },
  }

  /** @type {import('eslint').Linter.Config[]} */
  // @ts-expect-error: unmatched types
  const configs = [config]

  return configs
}
