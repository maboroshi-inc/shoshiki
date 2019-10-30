/**
 * 数値をカンマ区切りの文字列に整形する
 * @param num 整形したい数値
 */
export function numToCommaSeparated(num: number): string {
  return num
    .toString()
    .replace(/(\d)(?=(?:\d{3}){2,}(?:\.|$))|(\d)(\d{3}(?:\.\d*)?$)/g, '$1$2,$3')
}
