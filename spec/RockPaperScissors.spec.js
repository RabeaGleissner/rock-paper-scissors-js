import RockPaperScissors from '../src/RockPaperScissors'
import Move from '../src/Move'

describe('RockPaperScissors', () => {
  let game

  describe('Calculate winner', () => {
    let winningMove
    let losingMove
    beforeEach(() =>{
      game = new RockPaperScissors(null, null, null)
      winningMove = new WinningMoveStub()
      losingMove = new LosingMoveStub()
    })

    it('identifies human as winner', () => {
      expect(game.calculateWinner(winningMove, losingMove)).toEqual('Human')
    })

    it('identifies computer as winner', () => {
      expect(game.calculateWinner(losingMove, winningMove)).toEqual('Computer')
    })
  })

  describe('Play the game', () => {
    let uiDummy
    let fakeHuman
    let fakeComputer

    beforeEach(() => {
      uiDummy = new UiDummy()
      fakeComputer = new FakePlayer('rock', null)
    })

    it('plays one game', () => {
      fakeHuman = new FakePlayer('paper', ['n'])
      game = new RockPaperScissors(uiDummy, fakeHuman, fakeComputer)
      game.run()
      expect(fakeHuman.makeMoveCallCount()).toEqual(1)
    })

    it('plays two games', () => {
      fakeHuman = new FakePlayer('paper', ['y', 'n'])
      game = new RockPaperScissors(uiDummy, fakeHuman, fakeComputer)
      game.run()
      expect(fakeHuman.makeMoveCallCount()).toEqual(2)
    })
  })
})

class UiDummy {
  greet() {}
  announceComputerMove(_) {}
  announceWinner(_) {}
  sayBye() {}
}

class FakePlayer {
  constructor(move, replayChoice) {
    this.move = move
    this.replayChoice = replayChoice
    this.count = 0
  }

  makeMove() {
    this.count++
    return this.move
  }

  getReplayChoice() {
    return this.replayChoice.shift()
  }

  makeMoveCallCount() {
    return this.count
  }
}

class WinningMoveStub {
  winsAgainst(_) {
    return true
  }
}

class LosingMoveStub {
  winsAgainst(_) {
    return false
  }
}
