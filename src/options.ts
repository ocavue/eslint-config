import type { FlatGitignoreOptions as GitignoreOptions } from 'eslint-config-flat-gitignore'

import { GLOB_EXCLUDE, GLOB_TS, GLOB_TSX, GLOB_VUE } from './shared.js'
import type { Config } from './types.js'

// Remember to update the README.md when adding new options
export interface ESLintConfigOptions {
  /**
   * Whether to enable [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint) configuration.
   *
   * @default true
   */
  typescript?: boolean

  /**
   * Whether to enable [eslint-plugin-unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn) configuration.
   *
   * @default true
   */
  unicorn?: boolean

  /**
   * Whether to enable [eslint-plugin-package-json](https://www.npmjs.com/package/eslint-plugin-package-json) configuration.
   *
   * @default true
   */
  packageJson?: boolean


  /**
   * Whether to enable [eslint-plugin-perfectionist](https://www.npmjs.com/package/eslint-plugin-perfectionist) configuration.
   *
   * @default true
   */
  perfectionist?: boolean
  
  /**
   * Whether to enable [eslint-plugin-import-x](https://www.npmjs.com/package/eslint-plugin-import-x) configuration.
   *
   * @default true
   */
  imports?: boolean


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

  /**
   * Whether to enable [eslint-plugin-antfu](https://www.npmjs.com/package/eslint-plugin-antfu) configuration.
   *
   * @default true
   */
  antfu?: boolean

  /**
   * Whether to enable [eslint-plugin-no-only-tests](https://www.npmjs.com/package/eslint-plugin-no-only-tests) configuration.
   *
   * @default true
   */
  noOnlyTests?: boolean

  /**
   * Whether to enable [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier) configuration.
   *
   * @default true
   */
  prettier?: boolean
}

export function resolveOptions({
  typescript = true,
  unicorn = true,
  packageJson = true,
  perfectionist = true,
  imports = true,
  markdown = true,
  react = false,
  vue = false,
  unocss = false,
  command = false,
  ignores = true,
  gitignore = true,
  antfu = true,
  noOnlyTests = true,
  prettier = true,
}: ESLintConfigOptions = {}): Required<ESLintConfigOptions> {
  return {
    typescript,
    unicorn,
    packageJson,
    perfectionist,
    imports,
    markdown,
    react,
    vue,
    unocss,
    command,
    ignores,
    gitignore,
    antfu,
    noOnlyTests,
    prettier,
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

  /**
   * Whether to enable
   * [bleeding edge experimental compiler rules](https://github.com/facebook/react/blob/7568e71/packages/eslint-plugin-react-hooks)
   * configuration.
   *
   * @default true
   */
  reactCompiler?: boolean

  /**
   * React version to use for linting. Set to a semver version like "16.0", "19.2", etc.
   *
   * @default: '18.0'
   */
  version?: string
}

export function resolveReactOptions({
  files = [GLOB_TS, GLOB_TSX],
  reactCompiler = true,
  version = '18.0',
}: ReactOptions = {}): Required<ReactOptions> {
  return { files, reactCompiler, version }
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
