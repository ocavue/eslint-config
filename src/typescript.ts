import eslint from '@eslint/js'
import type { TSESLint } from '@typescript-eslint/utils'
import type { Linter } from 'eslint'
import tseslint from 'typescript-eslint'

import { GLOB_JS, GLOB_JSX, GLOB_TEST, GLOB_TS, GLOB_TSX } from './shared.js'

export { tseslint }

export function typescript(): Linter.Config[] {
  console.log(
    'tseslint.configs.recommendedTypeChecked',
    tseslint.configs.recommendedTypeChecked,
  )
  console.log('tseslint.configs.stylistic', tseslint.configs.stylistic)

  const rules = [
    ...tseslint.configs.recommendedTypeChecked,
    ...tseslint.configs.stylistic,
  ]
    .map((config) => config.rules || {})
    .reduce((acc, cur) => ({ ...acc, ...cur }), {})

  const config: TSESLint.FlatConfig.ConfigArray = [
    eslint.configs.recommended,
    {
      name: 'ocavue/typescript/recommended',
      files: [GLOB_TS, GLOB_TSX, GLOB_JS, GLOB_JSX],
      languageOptions: {
        parser: tseslint.parser,
        parserOptions: {
          projectService: true,
          sourceType: 'module',
          ecmaVersion: 'latest',
        },
      },
      plugins: {
        '@typescript-eslint': tseslint.plugin,
      },
      rules: {
        ...rules,

    

    
     
   



        '@typescript-eslint/await-thenable': 'error',
        '@typescript-eslint/unbound-method': 'error',

        // TODO: We should set the rule below to error in the future
        '@typescript-eslint/require-await': 'warn',
      },
    },
    {
      name: 'typescript-js',
      files: [GLOB_JS, GLOB_JSX],
      rules: {
        '@typescript-eslint/no-require-imports': 'off',
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      name: 'typescript-test',
      files: [GLOB_TEST],
      rules: {
        '@typescript-eslint/no-unsafe-call': 'warn',
        '@typescript-eslint/no-unsafe-return': 'warn',
        '@typescript-eslint/no-unsafe-argument': 'warn',
        '@typescript-eslint/no-unsafe-member-access': 'warn',
        '@typescript-eslint/no-unsafe-assignment': 'warn',

        // '@typescript-eslint/no-empty-function': 'off',
      },
    },
  ]

  // @ts-expect-error: unmatched type
  const configTyped: Linter.Config[] = config

  return configTyped
}
