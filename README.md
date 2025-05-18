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

You will need to use the new ["flat" ESLint configuration](https://eslint.org/docs/latest/use/configure/configuration-files-new) (i.e. `eslint.config.js`).

In your `eslint.config.js` file, add the following to extend the basic config:

```js
// eslint.config.js
import { defineESLintConfig } from '@ocavue/eslint-config'

export default defineESLintConfig()
```

You can pass an optional object to the `defineESLintConfig` function to enable or disable the configs. For example, if you want to enable the React config, you can do the following:

```js
// eslint.config.js
import { defineESLintConfig } from '@ocavue/eslint-config'

export default defineESLintConfig({ react: true })
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
  vue?: boolean
}
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

## Alternative solutions

- https://github.com/antfu/eslint-config
- https://github.com/sxzz/eslint-config
- https://github.com/ntnyq/eslint-config
