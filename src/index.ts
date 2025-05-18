import { defineConfig } from 'eslint/config'

import { basic } from './basic.js'
import { markdown } from './markdown.js'
import { react } from './react.js'
import type { Config } from './types.js'
import { vue } from './vue.js'

export * from './basic.js'
export * from './markdown.js'
export * from './prettier.js'
export * from './react.js'
export * from './typescript.js'
export * from './vue.js'

export interface ESLintConfigOptions {
  /**
   * Whether to enable Markdown configuration.
   *
   * @default true
   */
  markdown?: boolean

  /**
   * Whether to enable React configuration.
   *
   * @default false
   */
  react?: boolean

  /**
   * Whether to enable Vue configuration.
   *
   * @default false
   */
  vue?: boolean
}

function resolveOptions({
  markdown = true,
  react = false,
  vue = false,
}: ESLintConfigOptions = {}): Required<ESLintConfigOptions> {
  return {
    markdown,
    react,
    vue,
  }
}

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
