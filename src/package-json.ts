import type { Linter } from 'eslint'
import pkgJson from 'eslint-plugin-package-json'

/**
 * Sort package.json keys
 */
export function packageJson(): Linter.Config[] {
  const config: Linter.Config = {
    ...pkgJson.configs.recommended,
    rules: {
      ...pkgJson.configs.recommended.rules,
      'package-json/no-empty-fields': 'off',
      'package-json/valid-package-definition': 'off',
      'package-json/require-description': 'warn',
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
            "style",
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
