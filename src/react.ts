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
        '@eslint-react/dom/no-flush-sync': 'off',
        '@eslint-react/web-api/no-leaked-event-listener': 'off',
        '@eslint-react/no-array-index-key': 'off',
        '@eslint-react/naming-convention/context-name': 'off',
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
