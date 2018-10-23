import { zenkakuKatakanaToHiragana } from '../src'

describe('zenkakuKatakanaToHiragana', () => {
  it('アイウ を あいう に変換する', () => {
    expect(zenkakuKatakanaToHiragana('アイウ')).toEqual('あいう')
  })

  it('全角カタカナでなければそのまま出力する', () => {
    expect(zenkakuKatakanaToHiragana('あいう')).toEqual('あいう')
  })
})
