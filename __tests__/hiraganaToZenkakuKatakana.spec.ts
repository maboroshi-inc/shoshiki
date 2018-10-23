import { hiraganaToZenkakuKatakana } from '../src'

describe('hiraganaToKatakana', () => {
  it('あいう を アイウ に変換する', () => {
    expect(hiraganaToZenkakuKatakana('あいう')).toEqual('アイウ')
  })

  it('全角ひらがなでなければそのまま出力する', () => {
    expect(hiraganaToZenkakuKatakana('アイウ')).toEqual('アイウ')
  })
})
