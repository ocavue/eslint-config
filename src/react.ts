import eslintReact from '@eslint-react/eslint-plugin'
import reactHooksPlugin from 'eslint-plugin-react-hooks'

import { resolveReactOptions, type ReactOptions } from './options.js'
import type { Config, Rules } from './types.js'

// @keep-sorted
export const reactRules: Rules = {
  // https://eslint-react.xyz/docs/rules/component-hook-factories
  '@eslint-react/component-hook-factories': 'warn',

  // https://eslint-react.xyz/docs/rules/dom-no-dangerously-set-innerhtml-with-children
  '@eslint-react/dom/no-dangerously-set-innerhtml-with-children': 'error',

  // https://eslint-react.xyz/docs/rules/dom-no-dangerously-set-innerhtml
  '@eslint-react/dom/no-dangerously-set-innerhtml': 'warn',

  // https://eslint-react.xyz/docs/rules/dom-no-find-dom-node
  '@eslint-react/dom/no-find-dom-node': 'warn',

  // https://eslint-react.xyz/docs/rules/dom-no-flush-sync
  '@eslint-react/dom/no-flush-sync': 'warn',

  // https://eslint-react.xyz/docs/rules/dom-no-hydrate
  '@eslint-react/dom/no-hydrate': 'error',

  // https://eslint-react.xyz/docs/rules/dom-no-namespace
  '@eslint-react/dom/no-namespace': 'error',

  // https://eslint-react.xyz/docs/rules/dom-no-render-return-value
  '@eslint-react/dom/no-render-return-value': 'error',

  // https://eslint-react.xyz/docs/rules/dom-no-render
  '@eslint-react/dom/no-render': 'warn',

  // https://eslint-react.xyz/docs/rules/dom-no-script-url
  '@eslint-react/dom/no-script-url': 'warn',

  // https://eslint-react.xyz/docs/rules/dom-no-unsafe-iframe-sandbox
  '@eslint-react/dom/no-unsafe-iframe-sandbox': 'warn',

  // https://eslint-react.xyz/docs/rules/dom-no-use-form-state
  '@eslint-react/dom/no-use-form-state': 'error',

  // https://eslint-react.xyz/docs/rules/dom-no-void-elements-with-children
  '@eslint-react/dom/no-void-elements-with-children': 'error',

  // https://eslint-react.xyz/docs/rules/error-boundaries
  '@eslint-react/error-boundaries': 'error',

  // https://github.com/facebook/react/issues/14920
  '@eslint-react/exhaustive-deps': 'warn',

  // https://eslint-react.xyz/docs/rules/jsx-key-before-spread
  '@eslint-react/jsx-key-before-spread': 'warn',

  // https://eslint-react.xyz/docs/rules/jsx-no-comment-textnodes
  '@eslint-react/jsx-no-comment-textnodes': 'warn',

  // https://github.com/Rel1cx/eslint-react/blob/v4.2.3/packages/plugins/eslint-plugin-react-jsx/src/rules/no-leaked-semicolon/no-leaked-semicolon.mdx
  '@eslint-react/jsx-no-leaked-semicolon': 'warn',

  // https://eslint-react.xyz/docs/rules/naming-convention-context-name
  '@eslint-react/naming-convention/context-name': 'warn',

  // https://eslint-react.xyz/docs/rules/naming-convention-id-name
  '@eslint-react/naming-convention/id-name': 'warn',

  // https://eslint-react.xyz/docs/rules/naming-convention-ref-name
  '@eslint-react/naming-convention/ref-name': 'warn',

  // https://eslint-react.xyz/docs/rules/no-access-state-in-setstate
  '@eslint-react/no-access-state-in-setstate': 'warn',

  // https://eslint-react.xyz/docs/rules/no-children-count
  '@eslint-react/no-children-count': 'warn',

  // https://eslint-react.xyz/docs/rules/no-children-for-each
  '@eslint-react/no-children-for-each': 'warn',

  // https://eslint-react.xyz/docs/rules/no-children-map
  '@eslint-react/no-children-map': 'warn',

  // https://eslint-react.xyz/docs/rules/no-children-only
  '@eslint-react/no-children-only': 'warn',

  // https://eslint-react.xyz/docs/rules/no-children-to-array
  '@eslint-react/no-children-to-array': 'warn',

  // https://eslint-react.xyz/docs/rules/no-clone-element
  '@eslint-react/no-clone-element': 'warn',

  // https://eslint-react.xyz/docs/rules/no-component-will-mount
  '@eslint-react/no-component-will-mount': 'error',

  // https://eslint-react.xyz/docs/rules/no-component-will-receive-props
  '@eslint-react/no-component-will-receive-props': 'error',

  // https://eslint-react.xyz/docs/rules/no-component-will-update
  '@eslint-react/no-component-will-update': 'error',

  // https://eslint-react.xyz/docs/rules/no-context-provider
  '@eslint-react/no-context-provider': 'warn',

  // https://eslint-react.xyz/docs/rules/no-create-ref
  '@eslint-react/no-create-ref': 'error',

  // https://eslint-react.xyz/docs/rules/no-direct-mutation-state
  '@eslint-react/no-direct-mutation-state': 'error',

  // https://eslint-react.xyz/docs/rules/no-forward-ref
  '@eslint-react/no-forward-ref': 'warn',

  // https://eslint-react.xyz/docs/rules/no-missing-key
  '@eslint-react/no-missing-key': 'warn',

  // https://eslint-react.xyz/docs/rules/no-nested-component-definitions
  '@eslint-react/no-nested-component-definitions': 'error',

  // https://eslint-react.xyz/docs/rules/no-nested-lazy-component-declarations
  '@eslint-react/no-nested-lazy-component-declarations': 'error',

  // https://eslint-react.xyz/docs/rules/no-redundant-should-component-update
  '@eslint-react/no-redundant-should-component-update': 'error',

  // https://eslint-react.xyz/docs/rules/no-set-state-in-component-did-mount
  '@eslint-react/no-set-state-in-component-did-mount': 'warn',

  // https://eslint-react.xyz/docs/rules/no-set-state-in-component-did-update
  '@eslint-react/no-set-state-in-component-did-update': 'warn',

  // https://eslint-react.xyz/docs/rules/no-set-state-in-component-will-update
  '@eslint-react/no-set-state-in-component-will-update': 'warn',

  // https://eslint-react.xyz/docs/rules/no-unnecessary-use-prefix
  '@eslint-react/no-unnecessary-use-prefix': 'warn',

  // https://eslint-react.xyz/docs/rules/no-unsafe-component-will-mount
  '@eslint-react/no-unsafe-component-will-mount': 'warn',

  // https://eslint-react.xyz/docs/rules/no-unsafe-component-will-receive-props
  '@eslint-react/no-unsafe-component-will-receive-props': 'warn',

  // https://eslint-react.xyz/docs/rules/no-unsafe-component-will-update
  '@eslint-react/no-unsafe-component-will-update': 'warn',

  // https://eslint-react.xyz/docs/rules/no-unused-class-component-members
  '@eslint-react/no-unused-class-component-members': 'warn',

  // https://eslint-react.xyz/docs/rules/no-use-context
  '@eslint-react/no-use-context': 'warn',

  // https://eslint-react.xyz/docs/rules/purity
  '@eslint-react/purity': 'warn',

  // https://eslint-react.xyz/docs/rules/function-definition
  '@eslint-react/rsc/function-definition': 'error',

  // https://react.dev/reference/rules/rules-of-hooks
  '@eslint-react/rules-of-hooks': 'error',

  // https://eslint-react.xyz/docs/rules/set-state-in-effect
  '@eslint-react/set-state-in-effect': 'warn',

  // https://eslint-react.xyz/docs/rules/set-state-in-render
  '@eslint-react/set-state-in-render': 'error',

  // https://eslint-react.xyz/docs/rules/unsupported-syntax
  '@eslint-react/unsupported-syntax': 'error',

  // https://eslint-react.xyz/docs/rules/use-memo
  '@eslint-react/use-memo': 'warn',

  // https://eslint-react.xyz/docs/rules/use-state
  '@eslint-react/use-state': 'warn',

    // https://github.com/Rel1cx/eslint-react/blob/v4.2.3/packages/plugins/eslint-plugin-react-web-api/src/rules/no-leaked-resize-observer/no-leaked-resize-observer.mdx
  '@eslint-react/web-api-leaked-resize-observer': "warn",

  // https://github.com/Rel1cx/eslint-react/blob/v4.2.3/packages/plugins/eslint-plugin-react-web-api/src/rules/no-leaked-event-listener/no-leaked-event-listener.mdx
  '@eslint-react/web-api-no-leaked-event-listener': 'warn',

  // https://github.com/Rel1cx/eslint-react/blob/v4.2.3/packages/plugins/eslint-plugin-react-web-api/src/rules/no-leaked-interval/no-leaked-interval.mdx
  '@eslint-react/web-api-no-leaked-interval': 'warn',

  // https://github.com/Rel1cx/eslint-react/blob/v4.2.3/packages/plugins/eslint-plugin-react-web-api/src/rules/no-leaked-resize-observer/no-leaked-resize-observer.mdx  
  '@eslint-react/web-api-no-leaked-resize-observer': 'warn',

  // https://github.com/Rel1cx/eslint-react/blob/v4.2.3/packages/plugins/eslint-plugin-react-web-api/src/rules/no-leaked-timeout/no-leaked-timeout.mdx
  '@eslint-react/web-api-no-leaked-timeout': "warn",

}

export function react(options?: ReactOptions): Config[] {
  const { files, reactCompiler, version } = resolveReactOptions(options)

  const reactRecommendedConfig: Config =
    eslintReact.configs['recommended-typescript']

  const reactHooksRecommendedConfig: Config =
    reactHooksPlugin.configs.flat['recommended']
  const reactHooksRecommendedCompilerConfig: Config =
    reactHooksPlugin.configs.flat['recommended-latest']

  const reactHooksConfig: Config = reactCompiler
    ? reactHooksRecommendedCompilerConfig
    : reactHooksRecommendedConfig

  const configs: Config[] = [
    {
      ...reactRecommendedConfig,
      name: 'react',
      files: files,
      settings: {
        'react-x': {
          version: version,
        },
      },
      rules: {
        ...reactRules,
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
