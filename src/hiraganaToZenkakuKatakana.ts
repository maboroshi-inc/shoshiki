/**
 * 全角ひらがなを全角カタカナに変換する
 * @param str 変換対象文字列
 */
export function hiraganaToZenkakuKatakana(str: string): string {
  return str.replace(/[\u3041-\u3096]/g, match => {
    const char = match.charCodeAt(0) + 0x60
    return String.fromCharCode(char)
  })
}
