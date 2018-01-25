export default class Ui {

  constructor(input, output) {
    this.input = input
    this.output = output
  }

  greet() {
    this.output.log('::: Welcome to Rock Paper Scissors :::')
  }

  askForMove() {
    this.output.log('Enter your move:')
    return this.input()
  }

  announceWinner(winner) {
    this.output.log(`Winner: ${winner}`)
  }

  getReplayChoice() {
    this.output.log('Do you fancy playing again?')
    return this.input()
  }

  sayBye() {
    this.output.log('Byyyeeee!')
  }
}
