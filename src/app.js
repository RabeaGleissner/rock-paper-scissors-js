const RockPaperScissors = require('./rockPaperScissors')
const rockPaperScissors = new RockPaperScissors()

module.exports = class App {

  constructor(output) {
    this.output = output
  }

  run() {
    this.output.log(rockPaperScissors.greeting())
  }
}
