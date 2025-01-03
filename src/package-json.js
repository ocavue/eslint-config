// @ts-check

import pkgJson from 'eslint-plugin-package-json/configs/recommended'

/**
 * Sort package.json keys
 */
export function packageJson() {
  const config = {
    ...pkgJson,
    rules: {
      ...pkgJson.rules,
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
