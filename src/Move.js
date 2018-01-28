export default class Move {
  constructor(chosenMove) {
    this.chosenMove = chosenMove
  }

  winsAgainst(secondMove) {
    const winnersAndLosers = {
      'rock': 'scissors',
      'scissors': 'paper',
      'paper': 'rock'
    }

    return Object.keys(winnersAndLosers).some((winner) => {
      const loser = winnersAndLosers[winner]
      if (this.chosenMove.toLowerCase() === winner &&
          secondMove.chosenMove.toLowerCase() === loser) {
        return true
      }
    })
  }
}
