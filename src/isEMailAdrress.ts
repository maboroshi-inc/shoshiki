/**
 * 文字列がEメールアドレスであるか否かを返す
 * @see {@link http://emailregex.com/} 正規表現参照元
 * @see {@link https://github.com/maboroshi-inc/shoshiki/blob/master/__tests__/isEMailAddress.spec.ts|テストケース}
 * @param str 判定対象文字列
 */
export function isEMailAddress(str: string): boolean {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    str
  )
}
