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

    return Object.keys(winnersAndLosers).some((key) => {
      if (this.chosenMove.toLowerCase() === key &&
          secondMove.chosenMove.toLowerCase() === winnersAndLosers[key]) {
        return true
      }
    })
  }
}
