import { GLOB_TS, GLOB_TSX } from './shared.js'
import type { Config } from './types.js'

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
  vue?: boolean
}

export function resolveOptions({
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
