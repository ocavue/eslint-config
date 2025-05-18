import { defineConfig } from 'eslint/config'

import { basic } from './basic.js'
import { react } from './react.js'
import type { Config } from './types.js'

export * from './basic.js'
export * from './markdown.js'
export * from './prettier.js'
export * from './react.js'
export * from './typescript.js'
export * from './vue.js'

export interface ESLintConfigOptions {
  /**
   * Whether to enable React configuration.
   *
   * @default false
   */
  react?: boolean
}

export function defineESLintConfig(options?: ESLintConfigOptions): Config[] {
  const configs: Config[] = []

  configs.push(...basic())

  if (options?.react) {
    configs.push(...react())
  }

  return defineConfig(configs)
}
