import HumanPlayer from '../src/HumanPlayer'

describe('Human player', function() {

  let humanPlayer
  beforeEach(() => {
    humanPlayer = new HumanPlayer()
  })

  it('returns a move', function() {
    expect(humanPlayer.makeMove()).toBe('Rock');
  })
})
