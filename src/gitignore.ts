import gitignoreConfig from 'eslint-config-flat-gitignore'
import type { FlatGitignoreOptions as GitignoreOptions } from 'eslint-config-flat-gitignore'

import type { Config } from './types.js'

export function gitignore(options?: GitignoreOptions): Config[] {
  return [gitignoreConfig(options)]
}
