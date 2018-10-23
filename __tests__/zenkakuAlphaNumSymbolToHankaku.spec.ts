import { zenkakuAlphaNumSymbolToHankaku } from '../src'

describe('zenkakuAlphaNumSymbolToHankaku', () => {
  it('ＡＢＣ１２３＝！＄＋＊％＆＠”’｀￥　〜 を ABC123=!$+*%&@"\'`\\ ~ に変換する', () => {
    expect(
      zenkakuAlphaNumSymbolToHankaku('ＡＢＣ１２３＝！＄＋＊％＆＠”’｀￥　〜')
    ).toEqual('ABC123=!$+*%&@"\'`\\ ~')
  })

  it('全角英数出なければそのまま出力する', () => {
    expect(zenkakuAlphaNumSymbolToHankaku('ABC123')).toEqual('ABC123')
  })
})
