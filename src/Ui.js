export default class Ui {

  constructor(input, output) {
    this.input = input
    this.output = output
  }

  askForMove() {
    this.output.log('Enter your move:')
    return this.input()
  }
}
