import {ComputerPlayer, moves} from '../src/ComputerPlayer'

describe('Computer player', function() {
  let computerPlayer
  beforeEach(() => {
    computerPlayer = new ComputerPlayer()
  })

  it('returns a valid move', function() {
    const move = computerPlayer.makeMove()
    expect(moves).toContain(move)
  })
})
