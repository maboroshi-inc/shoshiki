/**
 * 全角英数記号を半角に変換する
 * @param str 変換対象文字列
 */
export function zenkakuAlphaNumSymbolToHankaku(str: string) {
  return str
    .replace(/[！-～]/g, match => {
      const char = match.charCodeAt(0) - 0xfee0
      return String.fromCharCode(char)
    })
    .replace(/”/g, '"')
    .replace(/’/g, "'")
    .replace(/‘/g, '`')
    .replace(/￥/g, '\\')
    .replace(/　/g, ' ')
    .replace(/〜/g, '~')
}
