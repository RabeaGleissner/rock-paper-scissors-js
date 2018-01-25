export default class HumanPlayer {
  constructor(ui) {
    this.ui = ui
  }
  makeMove() {
    return this.ui.askForMove()
  }
}

