import { zenkakuKatakanaToHiragana } from '../src'

describe('katakanaToHiragana', () => {
  it('アイウ を あいう に変換する', () => {
    expect(zenkakuKatakanaToHiragana('アイウ')).toEqual('あいう')
  })

  it('全角カタカナでなければそのまま出力する', () => {
    expect(zenkakuKatakanaToHiragana('あいう')).toEqual('あいう')
  })
})
