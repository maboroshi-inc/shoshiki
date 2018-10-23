/**
 * 全角カタカナを全角ひらがなに変換する
 * @param str 変換対象文字列
 */
export function zenkakuKatakanaToHiragana(str: string) {
  return str.replace(/[\u30a1-\u30f6]/g, match => {
    const char = match.charCodeAt(0) - 0x60
    return String.fromCharCode(char)
  })
}
