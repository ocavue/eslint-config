import { defineConfig } from 'eslint/config'

import { basic } from './basic.js'
import { markdown } from './markdown.js'
import { type ESLintConfigOptions, resolveOptions } from './options.js'
import { react } from './react.js'
import type { Config } from './types.js'
import { vue } from './vue.js'

export * from './basic.js'
export * from './markdown.js'
export * from './prettier.js'
export * from './react.js'
export * from './typescript.js'
export * from './vue.js'

export type { Config, ESLintConfigOptions }

export function defineESLintConfig(options?: ESLintConfigOptions): Config[] {
  const resolvedOptions = resolveOptions(options)

  const configs: Config[] = []

  configs.push(...basic())

  if (resolvedOptions.markdown) {
    configs.push(...markdown())
  }

  if (resolvedOptions.react) {
    configs.push(...react())
  }

  if (resolvedOptions.vue) {
    configs.push(...vue())
  }

  return defineConfig(configs)
}
