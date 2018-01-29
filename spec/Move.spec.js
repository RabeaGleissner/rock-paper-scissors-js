import Move from '../src/Move'

describe('Move', () => {

  it('rock wins against scissors', () => {
    const rockMove = new Move('rock')

    expect(rockMove.winsAgainst(new Move('Scissors'))).toEqual(true)
  })

  it('scissors wins against paper', () => {
    const scissorsMove = new Move('scissors')

    expect(scissorsMove.winsAgainst(new Move('Paper'))).toEqual(true)
  })

  it('paper wins against rock', () => {
    const paperMove = new Move('paper')

    expect(paperMove.winsAgainst(new Move('Rock'))).toEqual(true)
  })
})
