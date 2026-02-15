import { importX } from 'eslint-plugin-import-x'
import { defineConfig } from 'eslint/config'

import type { Config, Plugin } from './types.ts'

export function imports(): Config[] {
  // @ts-expect-error incorrect type
  const importXPlugin: Plugin = importX

  // @ts-expect-error incorrect type
  const TypeScriptConfig: Config = importX.flatConfigs.typescript

  return defineConfig([
    {
      plugins: {
        'import-x': importXPlugin,
      },
      extends: [TypeScriptConfig],
      rules: {
        // External modules must be declared in the package.json. Only enforced in CI.
        'import-x/no-extraneous-dependencies': process.env.CI ? 'error' : 'off',
        'import-x/first': 'warn',
        'import-x/no-mutable-exports': 'warn',
        'import-x/export': 'error',
        'import-x/no-useless-path-segments': 'warn',
        'import-x/newline-after-import': 'warn',
        // Disable `no-duplicates` because of the following bug
        // https://github.com/un-ts/eslint-plugin-import-x/issues/449
        // 'import-x/no-duplicates': [
        //   'warn',
        //   { 'prefer-inline': true },
        // ],
      },
    },
  ])
}
