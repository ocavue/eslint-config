import type { FlatGitignoreOptions as GitignoreOptions } from 'eslint-config-flat-gitignore'

import { GLOB_EXCLUDE, GLOB_TS, GLOB_TSX, GLOB_VUE } from './shared.js'
import type { Config } from './types.js'

// Remember to update the README.md when adding new options
export interface ESLintConfigOptions {
  /**
   * Whether to check code blocks in Markdown files.
   *
   * @default true
   */
  markdown?: boolean

  /**
   * Whether to enable React configuration.
   *
   * @default false
   */
  react?: boolean | ReactOptions

  /**
   * Whether to enable Vue configuration.
   *
   * @default false
   */
  vue?: boolean | VueOptions

  /**
   * Whether to enable UnoCSS configuration.
   *
   * @default false
   */
  unocss?: boolean

  /**
   * Whether to enable [eslint-plugin-command](https://www.npmjs.com/package/eslint-plugin-command) configuration.
   *
   * @default false
   */
  command?: boolean

  /**
   * Ignore some common files that should not be linted.
   *
   * @default true
   */
  ignores?: boolean | IgnoresOptions

  /**
   * Whether to enable [eslint-config-flat-gitignore](https://www.npmjs.com/package/eslint-config-flat-gitignore) configuration.
   *
   * @default true
   */
  gitignore?: boolean | GitignoreOptions
}

export function resolveOptions({
  markdown = true,
  react = false,
  vue = false,
  unocss = false,
  command = false,
  ignores = true,
  gitignore = true,
}: ESLintConfigOptions = {}): Required<ESLintConfigOptions> {
  return {
    markdown,
    react,
    vue,
    unocss,
    command,
    ignores,
    gitignore,
  }
}

export interface ReactOptions {
  /**
   * The default files to lint.
   *
   * @default: All typescript files
   *
   * @see {@link Config.files}
   */
  files?: Config['files']
}

export function resolveReactOptions({
  files = [GLOB_TS, GLOB_TSX],
}: ReactOptions = {}): Required<ReactOptions> {
  return { files }
}

export interface VueOptions {
  /**
   * The default files to lint.
   *
   * @default: All .vue files
   *
   * @see {@link Config.files}
   */
  files?: Config['files']
}

export function resolveVueOptions({
  files = [GLOB_VUE],
}: VueOptions = {}): Required<VueOptions> {
  return { files }
}

export interface IgnoresOptions {
  /**
   * An array of glob patterns indicating the files that the configuration
   * object should not apply to.
   *
   * @default: some common files to ignore
   *
   * @see {@link Config.ignores}
   */
  ignores?: Config['ignores']
}

export function resolveIgnoresOptions({
  ignores = [...GLOB_EXCLUDE],
}: IgnoresOptions = {}): Required<IgnoresOptions> {
  return { ignores }
}
