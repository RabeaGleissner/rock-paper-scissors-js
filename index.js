import {ComputerPlayer} from './src/ComputerPlayer'
import HumanPlayer from './src/HumanPlayer'
import RockPaperScissors from './src/RockPaperScissors'
import Ui from './src/Ui'

const consoleInput = require('prompt-sync')()
const consoleOutput = console
const ui = new Ui(consoleInput, consoleOutput)
const game = new RockPaperScissors(ui, new HumanPlayer(ui), new ComputerPlayer())
game.run()
