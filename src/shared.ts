export const GLOB_SRC_EXT = '?([cm])[jt]s?(x)'
export const GLOB_SRC = '**/*.?([cm])[jt]s?(x)'

export const GLOB_JS = '**/*.?([cm])js'
export const GLOB_JSX = '**/*.?([cm])jsx'

export const GLOB_TS = '**/*.?([cm])ts'
export const GLOB_TSX = '**/*.?([cm])tsx'

export const GLOB_TEST = '**/*.(spec|test).?([cm])[jt]s?(x)'

export const GLOB_STYLE = '**/*.{c,le,sc}ss'
export const GLOB_CSS = '**/*.css'
export const GLOB_LESS = '**/*.less'
export const GLOB_SCSS = '**/*.scss'

export const GLOB_JSON = '**/*.json'
export const GLOB_JSON5 = '**/*.json5'
export const GLOB_JSONC = '**/*.jsonc'

export const GLOB_MARKDOWN = '**/*.md'
export const GLOB_VUE = '**/*.vue'
export const GLOB_YAML = '**/*.y?(a)ml'
export const GLOB_HTML = '**/*.htm?(l)'

export const GLOB_ALL_SRC = [
  GLOB_SRC,
  GLOB_STYLE,
  GLOB_JSON,
  GLOB_JSON5,
  GLOB_MARKDOWN,
  GLOB_VUE,
  GLOB_YAML,
  GLOB_HTML,
] as const

export const GLOB_NODE_MODULES = '**/node_modules' as const
export const GLOB_LOCKFILE = [
  '**/package-lock.json',
  '**/yarn.lock',
  '**/pnpm-lock.yaml',
] as const

export const GLOB_EXCLUDE = [
  GLOB_NODE_MODULES,
  ...GLOB_LOCKFILE,

  '**/fixtures',
  '**/.changeset',
  '**/CHANGELOG*.md',
  '**/*.min.*',
  '**/LICENSE*',
  '**/__snapshots__',
  '**/.tsup',
] as const

export const EXTENSIONS = ['ts', 'js']
  .flatMap((ext) => [ext, ext + 'x'])
  .flatMap((ext) => [ext, 'm' + ext, 'c' + ext])
  .flatMap((ext) => [ext, 'd.' + ext])

export function findConfigByName<T extends { name?: string }>(
  configs: T[],
  name: string,
): T | undefined {
  const config = configs.find((c) => c.name === name)
  if (!config) {
    console.error(
      `[@ocavue/eslint-config] Unable to find config with name ${name}`,
    )
  }
  return config
}

export function trueToUndefined<T>(value: T | true): T | undefined {
  return value === true ? undefined : value
}
