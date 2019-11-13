import { numToCommaSeparated } from '../src'

describe('numToCommaSeparated', () => {
  it('数値を3桁ごとにカンマで区切った文字列に整形する', () => {
    expect(numToCommaSeparated(1234)).toEqual('1,234')
  })

  it('何桁の数値でも3桁ごとにカンマで区切った文字列に整形する', () => {
    expect(numToCommaSeparated(1234567890)).toEqual('1,234,567,890')
  })

  it('3桁以下の数値は単純に文字列に変換する', () => {
    expect(numToCommaSeparated(123)).toEqual('123')
  })

  it('小数点以下には区切り文字が適用されない', () => {
    expect(numToCommaSeparated(1234.56789)).toEqual('1,234.56789')
  })
})
