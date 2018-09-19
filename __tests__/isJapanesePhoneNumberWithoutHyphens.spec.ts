import { isJapanesePhoneNumberWithoutHyphens } from '../src'

describe('isJapanesePhoneNumberWithoutHyphens', () => {
  describe('日本国内の電話番号（ハイフン無し）**である**と判定する', () => {
    it('`0312345678`を渡すと`true`を返す', () =>
      expect(isJapanesePhoneNumberWithoutHyphens('0312345678')).toBe(true))

    it('`09012345678`を渡すと`true`を返す', () =>
      expect(isJapanesePhoneNumberWithoutHyphens('09012345678')).toBe(true))
  })

  describe('ハイフン無しの電話番号**ではない**と判定する', () => {
    it('`03-1234-5678`を渡すと`false`を返す', () =>
      expect(isJapanesePhoneNumberWithoutHyphens('03-1234-5678')).toBe(false))

    it('`012345678`を渡すと`false`を返す', () =>
      expect(isJapanesePhoneNumberWithoutHyphens('012345678')).toBe(false))

    it('`012345678901`を渡すと`false`を返す', () =>
      expect(isJapanesePhoneNumberWithoutHyphens('012345678901')).toBe(false))
  })
})
