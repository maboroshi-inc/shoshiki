import { isEMailAddress } from '../src'

describe('isEMailAddress', () => {
  describe('Eメールアドレス**である**と判定する', () => {
    // ごく普通のメアドっぽい文字列
    it('`email@domain.com`を渡すと`true`を返す', () =>
      expect(isEMailAddress('email@domain.com')).toBe(true))

    // ドメインに`-`を含むメアドっぽい文字列
    it('`email@do-ma-in.com`を渡すと`true`を返す', () =>
      expect(isEMailAddress('email@do-ma-in.com')).toBe(true))

    // サブドメインを含むメアドっぽい文字列
    it('`email@subdomain.domain.com`を渡すと`true`を返す', () =>
      expect(isEMailAddress('email@subdomain.domain.com')).toBe(true))

    // ローカル部に`.`を含むメアドっぽい文字列
    it('`firstname.lastname@domain.com`を渡すと`true`を返す', () =>
      expect(isEMailAddress('firstname.lastname@domain.com')).toBe(true))

    // ローカル部に**複数**の`.`を含むメアドっぽい文字列
    it('`what.a.wonderful.world@domain.com`を渡すと`true`を返す', () =>
      expect(isEMailAddress('what.a.wonderful.world@domain.com')).toBe(true))

    // ローカル部に`+`を含むメアドっぽい文字列
    it('`firstname+lastname@domain.com`を渡すと`true`を返す', () =>
      expect(isEMailAddress('firstname+lastname@domain.com')).toBe(true))
  })

  describe('Eメールアドレス**ではない**と判定する', () => {
    // 空文字
    it('``を渡すと`false`を返す', () => expect(isEMailAddress('')).toBe(false))

    // 空白
    it('` `を渡すと`false`を返す', () =>
      expect(isEMailAddress(' ')).toBe(false))

    // ただの文字列
    it('`hello!`を渡すと`false`を返す', () =>
      expect(isEMailAddress('hello')).toBe(false))

    // 空白文字を含むメアドっぽい文字列
    it('`firstname lastname@domain.com`を渡すと`false`を返す', () =>
      expect(isEMailAddress('firstname lastname@domain.com')).toBe(false))

    // 全角文字のメアドっぽい文字列
    it('`ｍａｉｌ＠ｄｏｍａｉｎ．ｃｏｍ`を渡すと`false`を返す', () =>
      expect(isEMailAddress('ｍａｉｌ＠ｄｏｍａｉｎ．ｃｏｍ')).toBe(false))

    // ドメインがIPアドレスのメアドっぽい文字列
    it('`someone@127.0.0.1`を渡すと`false`を返す', () =>
      expect(isEMailAddress('someone@127.0.0.1')).toBe(false))

    // 短すぎるドメインのメアドっぽい文字列
    it('`a@b.c`を渡すと`false`を返す', () =>
      expect(isEMailAddress('a@b.c')).toBe(false))

    // ローカル部が`.`で始まるのメアドっぽい文字列
    it('`.email@domain.com`を渡すと`false`を返す', () =>
      expect(isEMailAddress('.email@domain.com')).toBe(false))

    // ローカル部が`.`で終わるのメアドっぽい文字列
    it('`email.@domain.com`を渡すと`false`を返す', () =>
      expect(isEMailAddress('email.@domain.com')).toBe(false))

    // ローカル部に**複数かつ連続**した`.`を含むメアドっぽい文字列
    it('`what..a..wonderful..world@domain.com`を渡すと`true`を返す', () =>
      expect(isEMailAddress('what..a..wonderful..world@domain.com')).toBe(
        false
      ))
  })
})
