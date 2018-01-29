import HumanPlayer from '../src/HumanPlayer'
import Move from '../src/Move'
import RockPaperScissors from '../src/RockPaperScissors'
import Ui from '../src/Ui'
import prompt from 'prompt-sync'
import {ComputerPlayer} from '../src/ComputerPlayer'

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

  describe('Compare testing with and without doubles', () => {
    xit('plays game NO TEST DOUBLES', () => {
      const consoleInput = require('prompt-sync')()
      const consoleOutput = console
      const ui = new Ui(consoleInput, consoleOutput)
      const game = new RockPaperScissors(ui, new HumanPlayer(ui), new ComputerPlayer())

      game.run()

      expect('???').toEqual('???')
    })

    it('plays game WITH TEST DOUBLES', () => {
      const uiDummy = new UiDummy()
      const fakePlayer = new FakePlayer('paper', ['n'])
      const game = new RockPaperScissors(uiDummy, fakePlayer, fakePlayer)

      game.run()

      expect(fakePlayer.makeMoveCallCount()).toEqual(2)
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
  constructor(move, replayChoices) {
    this.move = move
    this.replayChoices = replayChoices
    this.count = 0
  }

  makeMove() {
    this.count++
    return this.move
  }

  getReplayChoice() {
    return this.replayChoices.shift()
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
