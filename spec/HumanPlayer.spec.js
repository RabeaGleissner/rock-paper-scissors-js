import HumanPlayer from '../src/HumanPlayer'

describe('Human player', function() {
  let humanPlayer
  let uiStub

  beforeEach(() => {
    uiStub = new UiStub()
    humanPlayer = new HumanPlayer(uiStub)
  })

  it('returns a move', function() {
    expect(humanPlayer.makeMove(uiStub)).toBe('Rock');
  })
})

class UiStub {
  askForMove() {
    return 'Rock'
  }
}
