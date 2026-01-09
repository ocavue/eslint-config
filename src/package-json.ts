import pkgJson from 'eslint-plugin-package-json'

import type { Config } from './types.js'

/**
 * Sort package.json keys
 */
export function packageJson(): Config[] {
  const pkgJsonConfig: Config = pkgJson.configs.recommended
  const config: Config = {
    ...pkgJsonConfig,
    rules: {
      ...pkgJsonConfig.rules,
      'package-json/no-empty-fields': 'off',
      'package-json/require-description': 'off',
      'package-json/sort-collections': [
        'warn',
        [
          // Copied from the link below but remove "scripts" because we don't
          // want to sort scripts
          // https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/v0.88.1/src/rules/sort-collections.ts#L7
          'config',
          'dependencies',
          'devDependencies',
          'exports',
          'optionalDependencies',
          'overrides',
          'peerDependencies',
          'peerDependenciesMeta',
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
            'style',
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
  return [config]
}
