import type { Linter, ESLint } from 'eslint'

export type Config = Linter.Config

export type Rules = Partial<Linter.RulesRecord>

export type Plugin = ESLint.Plugin
