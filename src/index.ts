import { defineConfig } from 'eslint/config'

import { type ESLintConfigOptions, resolveOptions } from './options.js'
import type { Config } from './types.js'

export * from './basic.js'
export * from './markdown.js'
export * from './prettier.js'
export * from './react.js'
export * from './typescript.js'
export * from './vue.js'

export type { Config, ESLintConfigOptions }

export async function defineESLintConfig(
  options?: ESLintConfigOptions,
  ...userConfigs: Config[]
): Promise<Config[]> {
  const resolvedOptions = resolveOptions(options)

  const configs: Config[] = []

  {
    const { antfu } = await import('./antfu.js')
    const { noOnlyTests } = await import('./no-only-tests.js')
    const { prettier } = await import('./prettier.js')

    configs.push(...antfu(), ...noOnlyTests(), ...prettier())
  }

  if (resolvedOptions.ignores) {
    const { ignores } = await import('./ignores.js')
    configs.push(...ignores(trueToUndefined(resolvedOptions.ignores)))
  }

  if (resolvedOptions.gitignore) {
    const { gitignore } = await import('./gitignore.js')
    configs.push(...gitignore(trueToUndefined(resolvedOptions.gitignore)))
  }

  if (resolvedOptions.typescript) {
    const { typescript } = await import('./typescript.js')
    configs.push(...typescript())
  }

  if (resolvedOptions.unicorn) {
    const { unicorn } = await import('./unicorn.js')
    configs.push(...unicorn())
  }

  if (resolvedOptions.packageJson) {
    const { packageJson } = await import('./package-json.js')
    configs.push(...packageJson())
  }

  if (resolvedOptions.imports) {
    const { imports } = await import('./imports.js')
    configs.push(...imports())
  }

  if (resolvedOptions.markdown) {
    const { markdown } = await import('./markdown.js')
    configs.push(...markdown())
  }

  if (resolvedOptions.react) {
    const { react } = await import('./react.js')
    configs.push(...react(trueToUndefined(resolvedOptions.react)))
  }

  if (resolvedOptions.vue) {
    const { vue } = await import('./vue.js')
    configs.push(...vue(trueToUndefined(resolvedOptions.vue)))
  }

  if (resolvedOptions.unocss) {
    const { unocss } = await import('./unocss.js')
    configs.push(...unocss())
  }

  if (resolvedOptions.command) {
    const { command } = await import('./command.js')
    configs.push(...command())
  }

  configs.push(...userConfigs)

  return defineConfig(configs)
}

function trueToUndefined<T>(value: T | true): T | undefined {
  return value === true ? undefined : value
}
