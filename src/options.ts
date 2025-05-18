import { GLOB_TS, GLOB_TSX, GLOB_VUE } from './shared.js'
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
}

export function resolveOptions({
  markdown = true,
  react = false,
  vue = false,
  unocss = false,
}: ESLintConfigOptions = {}): Required<ESLintConfigOptions> {
  return {
    markdown,
    react,
    vue,
    unocss,
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
