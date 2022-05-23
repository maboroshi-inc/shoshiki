/**
 * 全角英数記号を半角に変換する
 * @param str 変換対象文字列
 */
export function zenkakuAlphaNumSymbolToHankaku(str: string): string {
  return (
    str
      .replace(/[！-～]/g, (match) => {
        const char = match.charCodeAt(0) - 0xfee0
        return String.fromCharCode(char)
      })
      .replace(/”/g, '"')
      .replace(/’/g, "'")
      .replace(/‘/g, '`')
      .replace(/￥/g, '\\')
      // 全角スペースを例外として許可する
      // eslint-disable-next-line no-irregular-whitespace
      .replace(/　/g, ' ')
      .replace(/〜/g, '~')
  )
}
