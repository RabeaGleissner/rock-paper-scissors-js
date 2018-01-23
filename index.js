const {Console} = require('console')
const App = require('./src/app')
import HumanPlayer from './src/HumanPlayer'

const app = new App(new Console(process.stdout))

app.run()
