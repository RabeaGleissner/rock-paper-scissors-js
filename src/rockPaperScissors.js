import Move from './Move'

export default class RockPaperScissors {

  constructor(ui, humanPlayer, computerPlayer) {
    this.ui = ui
    this.humanPlayer = humanPlayer
    this.computerPlayer = computerPlayer
  }

  run() {
    this.ui.greet()
    this.play()
  }

  play() {
    this.playOneRound()
  }

  playOneRound() {
    const humanMove = new Move(this.humanPlayer.makeMove())
    const computerMove = new Move(this.computerPlayer.makeMove())
    this.ui.announceComputerMove(computerMove.chosenMove)
    const winner = this.calculateWinner(humanMove, computerMove)
    this.ui.announceWinner(winner)
    this.replay()
  }

  replay() {
    const replayChoice = this.humanPlayer.getReplayChoice()
    if (replayChoice === 'y') {
      this.play()
    } else {
      this.ui.sayBye()
    }
  }

  calculateWinner(humanMove, computerMove) {
    if (humanMove.winsAgainst(computerMove)) {
      return 'Human'
    } else if (computerMove.winsAgainst(humanMove)) {
      return 'Computer'
    } else {
      return 'No winner! It\'s a draw.'
    }
  }
}
