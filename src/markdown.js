// @ts-check

import tsPlugin from '@typescript-eslint/eslint-plugin'
import markdownPlugin from 'eslint-plugin-markdown'

import { GLOB_MARKDOWN, GLOB_SRC, GLOB_VUE } from './shared.js'

export const markdown = () => {
  /** @type {import('eslint-define-config').FlatESLintConfigItem[]} */
  const config = [
    {
      files: [GLOB_MARKDOWN],
      plugins: {
        markdown: markdownPlugin,
      },
      processor: 'markdown/markdown',
    },
    {
      files: [`${GLOB_MARKDOWN}/${GLOB_SRC}`, `${GLOB_MARKDOWN}/${GLOB_VUE}`],
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            impliedStrict: true,
          },
        },
      },
      plugins: {
        // @ts-expect-error: wrong typing
        '@typescript-eslint': tsPlugin,
      },
      rules: {
        '@typescript-eslint/no-redeclare': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        'no-alert': 'off',
        'no-console': 'off',
        'no-restricted-imports': 'off',

        // Below are taken from https://github.com/eslint/eslint-plugin-markdown/blob/v3.0.0/lib/index.js#L31-L52

        // The Markdown parser automatically trims trailing
        // newlines from code blocks.
        'eol-last': 'off',

        // In code snippets and examples, these rules are often
        // counterproductive to clarity and brevity.
        'no-undef': 'off',
        'no-unused-expressions': 'off',
        'no-unused-vars': 'off',
        'padded-blocks': 'off',

        // Adding a "use strict" directive at the top of every
        // code block is tedious and distracting. The config
        // opts into strict mode parsing without the directive.
        strict: 'off',

        // The processor will not receive a Unicode Byte Order
        // Mark from the Markdown parser.
        'unicode-bom': 'off',
      },
    },
  ]

  return config
}
