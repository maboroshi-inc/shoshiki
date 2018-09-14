/**
 * 文字列が国内の電話番号（ハイフン無し）であるか否かを返す
 * @see {@link https://github.com/maboroshi-inc/shoshiki/blob/master/__tests__/isJapanesePhoneNumberWithoutHyphens.spec.ts|テストケース}
 * @param str 判定対象文字列
 */
export function isJapanesePhoneNumberWithoutHyphens(str: string) {
  return /^\d{10,11}$/.test(str)
}
