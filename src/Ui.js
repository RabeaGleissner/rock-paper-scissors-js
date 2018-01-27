export default class Ui {

  constructor(input, output) {
    this.input = input
    this.output = output
  }

  greet() {
    this.output.log('::: Welcome to Rock Paper Scissors :::\n')
  }

  askForMove() {
    this.output.log('Enter your move:\n')
    return this.input()
  }

  announceWinner(winner) {
    this.output.log(`Winner: ${winner}\n`)
  }

  announceComputerMove(move) {
    this.output.log(`The computer played ${move}.`)
  }

  getReplayChoice() {
    this.output.log('Do you fancy playing again? y/n')
    return this.input()
  }

  sayBye() {
    this.output.log('Byyyeeee!')
  }
}
