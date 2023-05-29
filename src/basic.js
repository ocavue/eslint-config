// @ts-check

import { imports } from './imports.js'
import { noOnlyTests } from './no-only-tests.js'
import { packageJson } from './package-json.js'
import { prettier } from './prettier.js'
import { GLOB_EXCLUDE } from './shared.js'
import { typescript } from './typescript.js'
import { unicorn } from './unicorn.js'

/**
 * @typedef {Object} BasicOptions
 * @property {import('./typescript.js').TypescriptOptions} [typescript]
 */

/**
 * @param {BasicOptions} [options]
 */
export const basic = (options) => {
  /** @type {import('eslint-define-config').FlatESLintConfigItem[]} */
  const config = [
    {
      // @ts-expect-error: 'readonly' and cannot be assigned to the mutable type 'string[]'
      ignores: GLOB_EXCLUDE,
    },
    ...typescript(options?.typescript),
    ...imports(),
    ...packageJson(),
    ...unicorn(),
    ...noOnlyTests(),
    ...prettier(),
  ]

  return config
}
