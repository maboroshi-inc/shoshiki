import { isJapanesePhoneNumber } from '../src'

describe('isJapanesePhoneNumber', () => {
  describe('日本国内の電話番号**である**と判定する', () => {
    it('`03-1234-5678`を渡すと`true`を返す', () => {
      expect(isJapanesePhoneNumber('03-1234-5678')).toBe(true)
    })

    it('`012-345-6789`を渡すと`true`を返す', () => {
      expect(isJapanesePhoneNumber('012-345-6789')).toBe(true)
    })

    it('`0123-45-6789`を渡すと`true`を返す', () => {
      expect(isJapanesePhoneNumber('0123-45-6789')).toBe(true)
    })

    it('`01234-5-6789`を渡すと`true`を返す', () => {
      expect(isJapanesePhoneNumber('01234-5-6789')).toBe(true)
    })

    it('`090-1234-5678`を渡すと`true`を返す', () => {
      expect(isJapanesePhoneNumber('090-1234-5678')).toBe(true)
    })

    describe('ハイフンを含まない文字列を判定する', () => {
      it('`0312345678`を渡すと`true`を返す', () => {
        expect(isJapanesePhoneNumber('0312345678', true)).toBe(true)
      })

      it('`09012345678`を渡すと`true`を返す', () => {
        expect(isJapanesePhoneNumber('09012345678', true)).toBe(true)
      })
    })
  })

  describe('日本国内の電話番号**ではない**と判定する', () => {
    it('`hello`を渡すと`false`を返す', () => {
      expect(isJapanesePhoneNumber('hello')).toBe(false)
    })

    it('`0312345678`を渡すと`false`を返す', () => {
      expect(isJapanesePhoneNumber('0312345678')).toBe(false)
    })

    it('`03--1234-5678`を渡すと`false`を返す', () => {
      expect(isJapanesePhoneNumber('03--1234-5678')).toBe(false)
    })

    it('`03-1234--5678`を渡すと`false`を返す', () => {
      expect(isJapanesePhoneNumber('03-1234--5678')).toBe(false)
    })

    it('`03(1234)5678`を渡すと`false`を返す', () => {
      expect(isJapanesePhoneNumber('03(1234)5678')).toBe(false)
    })

    it('`12-3456-7890`を渡すと`false`を返す', () => {
      expect(isJapanesePhoneNumber('12-3456-7890')).toBe(false)
    })

    it('`0-12345-6789`を渡すと`false`を返す', () => {
      expect(isJapanesePhoneNumber('0-12345-6789')).toBe(false)
    })

    it('`012345-6-789`を渡すと`false`を返す', () => {
      expect(isJapanesePhoneNumber('012345-6-789')).toBe(false)
    })

    it('`01-23456-789`を渡すと`false`を返す', () => {
      expect(isJapanesePhoneNumber('01-23456-789')).toBe(false)
    })

    it('`01-234-57890`を渡すと`false`を返す', () => {
      expect(isJapanesePhoneNumber('01-234-57890')).toBe(false)
    })
  })
})
