const GLOB_SRC_EXT = '?([cm])[jt]s?(x)'
export const GLOB_SRC = '**/*.' + GLOB_SRC_EXT

export const GLOB_JS = '**/*.?([cm])js'
export const GLOB_JSX = '**/*.?([cm])jsx'

export const GLOB_TS = '**/*.?([cm])ts'
export const GLOB_TSX = '**/*.?([cm])tsx'

export const GLOB_GEN = '**/*.gen.' + GLOB_SRC_EXT

export const GLOB_MARKDOWN = '**/*.md'
export const GLOB_VUE = '**/*.vue'

const GLOB_NODE_MODULES = '**/node_modules' as const
const GLOB_LOCKFILE = [
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
