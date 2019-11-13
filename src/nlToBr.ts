/**
 * 文字列に含まれる改行コードを `<br>` 要素に変換する
 * @param str 整形したい文字列
 * @param keepLine 改行コードを残すか否か
 */
export function nlToBr(str: string, keepLine = false) {
  return str.replace(/(\x0D\x0A|\x0d|\x0A)/g, `<br>${keepLine ? '$1' : ''}`)
}
