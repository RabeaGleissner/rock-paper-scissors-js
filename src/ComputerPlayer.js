export class ComputerPlayer {
  makeMove() {
    return this.shuffle(moves)[0]
  }

  shuffle(moves) {
    return moves.sort(() => Math.random() - 0.5)
  }
}

export const moves = ['Rock', 'Paper', 'Scissors']
