export interface IPlayer {
  makeMove(): string
}

export class RockPaperScissors {
  humanPlayer: IPlayer
  computerPlayer: IPlayer

  constructor(humanPlayer: IPlayer, computerPlayer: IPlayer) {
    this.humanPlayer = humanPlayer
    this.computerPlayer = computerPlayer
  }

  play() {
    this.humanPlayer.makeMove()
    this.computerPlayer.makeMove()
    //etc.
  }
}

class HumanPlayer implements IPlayer {
  makeMove(): string {
    // ask user for move
    return 'Rock'
  }
}

class ComputerPlayer implements IPlayer {
  makeMove(): string {
    return 'some random move'
  }
}
