export interface ESLintConfigOptions {
  /**
   * Whether to check code blocks in Markdown files.
   *
   * @default false
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
  markdown = false,
  react = false,
  vue = false,
}: ESLintConfigOptions = {}): Required<ESLintConfigOptions> {
  return {
    markdown,
    react,
    vue,
  }
}
