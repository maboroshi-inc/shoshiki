import { katakanaToHiragana } from '../src'

describe('katakanaToHiragana', () => {
  it('アイウ を あいう に変換する', () => {
    expect(katakanaToHiragana('アイウ')).toEqual('あいう')
  })

  it('全角カタカナでなければそのまま出力する', () => {
    expect(katakanaToHiragana('あいう')).toEqual('あいう')
  })
})
