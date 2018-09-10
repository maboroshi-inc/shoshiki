import { nlToBr } from '../src'

describe('nlToBr', () => {
  it('改行コード（LF）を`<br>`に変換する', () => {
    expect(nlToBr('foofoo\nbarbar')).toEqual('foofoo<br>barbar')
  })

  it('改行コード（CRLF）を`<br>`に変換する', () => {
    expect(nlToBr('foofoo\r\nbarbar')).toEqual('foofoo<br>barbar')
  })

  it('改行コード（CR）を`<br>`に変換する', () => {
    expect(nlToBr('foofoo\rbarbar')).toEqual('foofoo<br>barbar')
  })

  it('全ての改行コードを`<br>`に変換する', () => {
    expect(nlToBr('foofoo\nbarbar\nfizzfizz\nbuzzbuzz')).toEqual(
      'foofoo<br>barbar<br>fizzfizz<br>buzzbuzz'
    )
  })

  it('改行コードを残しつつ`<br>`に変換する', () => {
    expect(nlToBr('foofoo\nbarbar', true)).toEqual('foofoo<br>\nbarbar')
  })
})
