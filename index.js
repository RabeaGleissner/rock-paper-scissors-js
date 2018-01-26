import {ComputerPlayer} from './src/ComputerPlayer'
import HumanPlayer from './src/HumanPlayer'
import RockPaperScissors from './src/RockPaperScissors'
import Ui from './src/Ui'
import prompt from 'prompt-sync'

const consoleInput = require('prompt-sync')()
const ui = new Ui(consoleInput, console)
const computerPlayer = new ComputerPlayer()
const game = new RockPaperScissors(ui, new HumanPlayer(ui), computerPlayer)
game.run()
