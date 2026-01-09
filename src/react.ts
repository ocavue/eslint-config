import eslintReact from '@eslint-react/eslint-plugin'
import reactHooksPlugin from 'eslint-plugin-react-hooks'

import { resolveReactOptions, type ReactOptions } from './options.js'
import type { Config } from './types.js'

export function react(options?: ReactOptions): Config[] {
  const { files, reactCompiler, version } = resolveReactOptions(options)

  const reactConfig: Config = eslintReact.configs['recommended-typescript']

  const reactHooksRecommendedConfig: Config =
    reactHooksPlugin.configs.flat['recommended']
  const reactHooksRecommendedCompilerConfig: Config =
    reactHooksPlugin.configs.flat['recommended-latest']
  const reactHooksConfig: Config = reactCompiler
    ? reactHooksRecommendedCompilerConfig
    : reactHooksRecommendedConfig

  const configs: Config[] = [
    {
      ...reactConfig,
      name: 'react',
      files: files,
      settings: {
        'react-x': {
          version: version,
        },
      },
      rules: {
        ...reactConfig.rules,

        '@eslint-react/web-api/no-leaked-event-listener': 'off',

        // See https://github.com/Rel1cx/eslint-react/issues/1382
        '@eslint-react/naming-convention/context-name': 'off',

        // I know these patterns are dangerous, but they are useful in some cases.
        '@eslint-react/no-children-map': 'off',
        '@eslint-react/no-clone-element': 'off',
        '@eslint-react/no-dangerously-set-innerhtml': 'off',
        '@eslint-react/dom/no-flush-sync': 'off',
        '@eslint-react/no-array-index-key': 'off',

        // See https://github.com/Rel1cx/eslint-react/issues/1381
        '@eslint-react/jsx-key-before-spread': 'off',
      },
    },

    {
      ...reactHooksConfig,
      name: 'react-hooks',
      files: files,
      rules: {
        ...reactHooksConfig.rules,
        // Disable this rule because of https://github.com/facebook/react/issues/34775
        // TODO: Enable this when the issue is fixed.
        'react-hooks/refs': 'off',
      },
    },
  ]

  return configs
}
