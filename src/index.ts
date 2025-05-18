import { defineConfig } from 'eslint/config'

import { basic } from './basic.js'
import { markdown } from './markdown.js'
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

  /**
   * Whether to enable Markdown configuration.
   *
   * @default true
   */
  markdown?: boolean
}

function resolveOptions(
  options?: ESLintConfigOptions,
): Required<ESLintConfigOptions> {
  return {
    react: options?.react ?? false,
    markdown: options?.markdown ?? true,
  }
}

export function defineESLintConfig(options?: ESLintConfigOptions): Config[] {
  const resolvedOptions = resolveOptions(options)

  const configs: Config[] = []

  configs.push(...basic())

  if (resolvedOptions.react) {
    configs.push(...react())
  }

  if (resolvedOptions.markdown) {
    configs.push(...markdown())
  }

  return defineConfig(configs)
}
