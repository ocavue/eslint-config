import pkgJson from 'eslint-plugin-package-json'

import type { Config, Rules } from './types.js'

export const packageJsonRules: Rules = {
  // https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/v0.88.1/docs/rules/no-empty-fields.md
  'package-json/no-empty-fields': 'off',

  // https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/v0.88.1/docs/rules/no-redundant-files.md
  'package-json/no-redundant-files': 'error',

  // https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/v0.88.1/docs/rules/no-redundant-publishConfig.md
  'package-json/no-redundant-publishConfig': 'error',

  // https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/v0.88.1/docs/rules/repository-shorthand.md
  'package-json/repository-shorthand': 'error',

  // https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/v0.88.1/docs/rules/require-description.md
  'package-json/require-description': 'off',

  // https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/v0.88.1/docs/rules/require-license.md
  'package-json/require-license': 'error',

  // https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/v0.88.1/docs/rules/require-name.md
  'package-json/require-name': 'error',

  // https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/v0.88.1/docs/rules/require-type.md
  'package-json/require-type': 'error',

  // https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/v0.88.1/docs/rules/require-version.md
  'package-json/require-version': 'error',

  // https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/v0.88.1/docs/rules/sort-collections.md
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

  // https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/v0.88.1/docs/rules/specify-peers-locally.md
  'package-json/specify-peers-locally': 'error',

  // https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/v0.88.1/docs/rules/unique-dependencies.md
  'package-json/unique-dependencies': 'error',

  // https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/v0.88.1/docs/rules/valid-author.md
  'package-json/valid-author': 'error',

  // https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/v0.88.1/docs/rules/valid-bin.md
  'package-json/valid-bin': 'error',

  // https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/v0.88.1/docs/rules/valid-bundleDependencies.md
  'package-json/valid-bundleDependencies': 'error',

  // https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/v0.88.1/docs/rules/valid-config.md
  'package-json/valid-config': 'error',

  // https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/v0.88.1/docs/rules/valid-contributors.md
  'package-json/valid-contributors': 'error',

  // https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/v0.88.1/docs/rules/valid-cpu.md
  'package-json/valid-cpu': 'error',

  // https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/v0.88.1/docs/rules/valid-dependencies.md
  'package-json/valid-dependencies': 'error',

  // https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/v0.88.1/docs/rules/valid-description.md
  'package-json/valid-description': 'error',

  // https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/v0.88.1/docs/rules/valid-devDependencies.md
  'package-json/valid-devDependencies': 'error',

  // https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/v0.88.1/docs/rules/valid-directories.md
  'package-json/valid-directories': 'error',

  // https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/v0.88.1/docs/rules/valid-engines.md
  'package-json/valid-engines': 'error',

  // https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/v0.88.1/docs/rules/valid-exports.md
  'package-json/valid-exports': 'error',

  // https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/v0.88.1/docs/rules/valid-files.md
  'package-json/valid-files': 'error',

  // https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/v0.88.1/docs/rules/valid-homepage.md
  'package-json/valid-homepage': 'error',

  // https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/v0.88.1/docs/rules/valid-keywords.md
  'package-json/valid-keywords': 'error',

  // https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/v0.88.1/docs/rules/valid-license.md
  'package-json/valid-license': 'error',

  // https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/v0.88.1/docs/rules/valid-main.md
  'package-json/valid-main': 'error',

  // https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/v0.88.1/docs/rules/valid-man.md
  'package-json/valid-man': 'error',

  // https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/v0.88.1/docs/rules/valid-module.md
  'package-json/valid-module': 'error',

  // https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/v0.88.1/docs/rules/valid-name.md
  'package-json/valid-name': 'error',

  // https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/v0.88.1/docs/rules/valid-optionalDependencies.md
  'package-json/valid-optionalDependencies': 'error',

  // https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/v0.88.1/docs/rules/valid-os.md
  'package-json/valid-os': 'error',

  // https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/v0.88.1/docs/rules/valid-peerDependencies.md
  'package-json/valid-peerDependencies': 'error',

  // https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/v0.88.1/docs/rules/valid-private.md
  'package-json/valid-private': 'error',

  // https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/v0.88.1/docs/rules/valid-publishConfig.md
  'package-json/valid-publishConfig': 'error',

  // https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/v0.88.1/docs/rules/valid-repository.md
  'package-json/valid-repository': 'error',

  // https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/v0.88.1/docs/rules/valid-repository-directory.md
  'package-json/valid-repository-directory': 'error',

  // https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/v0.88.1/docs/rules/valid-scripts.md
  'package-json/valid-scripts': 'error',

  // https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/v0.88.1/docs/rules/valid-sideEffects.md
  'package-json/valid-sideEffects': 'error',

  // https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/v0.88.1/docs/rules/valid-type.md
  'package-json/valid-type': 'error',

  // https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/v0.88.1/docs/rules/valid-version.md
  'package-json/valid-version': 'error',

  // https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/v0.88.1/docs/rules/valid-workspaces.md
  'package-json/valid-workspaces': 'error',

  // https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/v0.88.1/docs/rules/order-properties.md
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
}

/**
 * Sort package.json keys
 */
export function packageJson(): Config[] {
  const pkgJsonConfig: Config = pkgJson.configs.recommended

  return [
    {
      ...pkgJsonConfig,
      rules: packageJsonRules,
    },
  ]
}
