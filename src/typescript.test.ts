import { expect, test } from 'vitest'

import { commonRules } from './typescript.ts'
import { tsOnlyRules } from './typescript.ts'
import { jsOnlyRules } from './typescript.ts'

test('commonRules', () => {
  expect(commonRules()).toMatchInlineSnapshot()
})

test('tsOnlyRules', () => {
  expect(tsOnlyRules()).toMatchInlineSnapshot()
})

test('jsOnlyRules', () => {
  expect(jsOnlyRules()).toMatchInlineSnapshot()
})
