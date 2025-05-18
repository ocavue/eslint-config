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
  react?: boolean

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
