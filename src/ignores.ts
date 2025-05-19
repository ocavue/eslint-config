import type { Linter } from 'eslint'

import { resolveIgnoresOptions, type IgnoresOptions } from './options.js'

export function ignores(options?: IgnoresOptions): Linter.Config[] {
  const { ignores } = resolveIgnoresOptions(options)
  return [{ name: 'ocavue/ignores', ignores }]
}
