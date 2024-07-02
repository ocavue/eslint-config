import { GLOB_EXCLUDE } from './shared.js'

export function ignores() {
  /** @type {import('eslint').Linter.FlatConfig} */
  const config = {
    name: 'ignores',
    ignores: GLOB_EXCLUDE,
  }

  return [config]
}
