// @ts-check

import { antfu } from './antfu.js'
import { imports } from './imports.js'
import { noOnlyTests } from './no-only-tests.js'
import { packageJson } from './package-json.js'
import { prettier } from './prettier.js'
import { GLOB_EXCLUDE } from './shared.js'
import { typescript } from './typescript.js'
import { unicorn } from './unicorn.js'

export function basic() {
  /** @type {import('eslint-define-config').FlatESLintConfig[]} */
  const config = [
    {
      // @ts-expect-error: 'readonly' and cannot be assigned to the mutable type 'string[]'
      ignores: GLOB_EXCLUDE,
    },
    ...typescript(),
    ...imports(),
    ...packageJson(),
    ...unicorn(),
    ...antfu(),
    ...noOnlyTests(),
    ...prettier(),
  ]

  return config
}
