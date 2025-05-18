# @ocavue/eslint-config

A set of ESLint shareable configs for TypeScript projects.

- Out of the box support for TypeScript, React, and Markdown
- Sort your imports
- Sort your fields in `package.json`
- Prefer top-level function declarations over function expressions

## Install

```
$ npm install -D eslint prettier @ocavue/eslint-config
```

## Usage

### Config ESLint

Create `eslint.config.mjs` in your project root with the following content:

```js
// eslint.config.mjs
import { defineESLintConfig } from '@ocavue/eslint-config'

export default defineESLintConfig()
```

### Add script for package.json

```json
{
  "scripts": {
    "lint": "eslint .",
    "check": "prettier --check .",
    "fix": "eslint --fix . && prettier --write ."
  }
}
```

### Add `.prettierignore`

Add a [`.prettierignore`](https://prettier.io/docs/en/ignore.html#ignoring-files-prettierignore) file in the root of your project. You can copy the `.prettierignore` file from this project.

### VS Code integration

If you are using VS Code, you and install [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), then add the following to your VS Code settings:

```json
// .vscode/settings.json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  }
}
```

## Customization

You can pass an optional object to the `defineESLintConfig` function to enable or disable the configs. Here is an example:

```js
// eslint.config.mjs
import { defineESLintConfig } from '@ocavue/eslint-config'

export default defineESLintConfig({
  // Enable React config and only apply for files under `src/react` directory.
  react: { files: ['src/react/**/*.tsx'] },
  // Enable Vue config.
  vue: true,
})
```

The full type definition for the options is as follows:

```ts
export interface ESLintConfigOptions {
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
}
```

You can pass the second and following arguments to the `defineESLintConfig` function to extend the config.

```js
// eslint.config.mjs
import { defineESLintConfig } from '@ocavue/eslint-config'

export default defineESLintConfig(
  {
    // Your options here
  },
  // More configs here:
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  {
    rules: {
      'no-console': ['warn', { allow: ['warn', 'error', 'assert'] }],
    },
  },
)
```

## Related projects

- https://github.com/antfu/eslint-config
- https://github.com/sxzz/eslint-config
- https://github.com/ntnyq/eslint-config
