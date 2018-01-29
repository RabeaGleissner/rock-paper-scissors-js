import {IPlayer, RockPaperScissors} from './RockPaperScissors';

describe('RockPaperScissors', () => {
  let fakeHumanPlayer: FakeHumanPlayer
  let fakeComputerPlayer: FakeComputerPlayer

  beforeEach(() => {
    fakeHumanPlayer = new FakeHumanPlayer()
    fakeComputerPlayer = new FakeComputerPlayer()
  })

  it('plays the game once', () => {
    const game = new RockPaperScissors(fakeHumanPlayer, fakeComputerPlayer);
    game.play()
    expect(fakeHumanPlayer.hasMadeMove()).toEqual(1)
  })
})

class FakeHumanPlayer implements IPlayer {
  moves: number
  constructor() {
    this.moves = 0
  }

  makeMove(): string {
    this.moves++
    return ''
  }

  hasMadeMove(): number {
    return this.moves
  }
}

class FakeComputerPlayer implements IPlayer {
  makeMove(): string {
    return ''
  }
}
