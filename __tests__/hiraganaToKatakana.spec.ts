import { hiraganaToKatakana } from '../src'

describe('hiraganaToKatakana', () => {
  it('あいう を アイウ に変換する', () => {
    expect(hiraganaToKatakana('あいう')).toEqual('アイウ')
  })

  it('全角ひらがなでなければそのまま出力する', () => {
    expect(hiraganaToKatakana('アイウ')).toEqual('アイウ')
  })
})
