import { isJapanesePhoneNumberWithoutHyphens } from './isJapanesePhoneNumberWithoutHyphens'

/**
 * 文字列が日本国内の電話番号であるか否かを返す
 * @see {@link https://github.com/maboroshi-inc/shoshiki/blob/master/__tests__/isJapanesePhoneNumber.spec.ts|テストケース}
 * @param str 判定対象文字列
 * @param withoutHyphens ハイフンを含まない文字列であるか否か
 */
export function isJapanesePhoneNumber(str: string, withoutHyphens = false) {
  if (withoutHyphens) {
    return isJapanesePhoneNumberWithoutHyphens(str)
  }

  return (
    /^0\d{1,4}-\d{1,4}-\d{4}$/.test(str) &&
    isJapanesePhoneNumberWithoutHyphens(str.replace(/-/g, ''))
  )
}
