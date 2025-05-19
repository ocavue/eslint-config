import type { Linter } from 'eslint'
import gitignore from 'eslint-config-flat-gitignore'

import { GLOB_EXCLUDE } from './shared.js'

export function ignores(): Linter.Config[] {
  return [
    { ignores: [...GLOB_EXCLUDE], name: 'ocavue/ignores' },
    gitignore(),
  ]
}
