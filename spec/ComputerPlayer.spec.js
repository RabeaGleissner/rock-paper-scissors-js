import {ComputerPlayer, moves} from '../src/ComputerPlayer'

describe('Computer player', () => {
  let computerPlayer

  beforeEach(() => {
    computerPlayer = new ComputerPlayer()
  })

  it('returns a valid move', () => {
    const move = computerPlayer.makeMove()

    expect(moves).toContain(move)
  })

  it('returns a valid move (using jasmine spy)', () => {
    spyOn(ComputerPlayer.prototype, 'shuffle').and.returnValue(['Rock', ''])

    expect(computerPlayer.makeMove()).toEqual('Rock')
  })
})
